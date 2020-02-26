React => Next Steps
===

Hey gang! Today we discussed next steps after React and looked at CI/CD and what our role as web developers.

Here is the note; sorry I'm getting this to you late - better late than never ;)

Reviewed Scheduler in light of:

- [ ] Components
- [ ] Data and global state management
- [ ] Transitioning / routing
- [ ] Testing
- [ ] Deployment
- [ ] CI / CD

#### Components

  + generic vs app specific components
  + specialized components e.g. calendars, date pickers, react skeletons
  + components/UI libraries / Design systems e.g. Material UI, Ant Design, Semantic UI, React Bootstrap
  + styling
    - component-based css
    - inline styles
      + pros - easily can use props for calculating styles e.g. theming
      + cons - pseudo selectors e.g. `:hover`
    - SASS
    - styled components
    - CSS in JS (JSS)
    - hooks e.g useStyles({

    })


#### Data and global state management

  - hooks
    + no artificial sweetners - as used in Scheduler for simple applications
    + libraries like [reactn](https://github.com/CharlesStover/reactn)
  - Context API
    + without hooks
    + with hooks
  - Flux e.g. Redux / MobX
    + react-redux - pros: huge community and tools, time travel && debugging
  - Other thoughts
    - what's not cool about props drilling?
      + hard to debug (3 layers rule)
      + can be LOTS unnecessary re-renders
    - Use Selectors for
      + modularization / encapsulation (big words - I know!) of data access
      + computing derived data e.g. `getAppointmentsByDay`
      + can be memoized for performance i.e. only recalculates only if inputs have changed.
    - API calls?
      - axios vs fetch

      ```js
      fetch(url)
      .then(res => res.json())
      .then(data => {})
      ```
      - REST vs GraphQL (Apollo)
      - pagination / filter / sort
      - caching

#### Transitioning / routing

  + react-router
  + hooks? yes HOOKS!
  + how do we go `back` or `forward` on an SPA?
    - creating our own `back` and `forward` buttons
    - using react-router, it can update browser's history

#### Testing

  + selenium
  + phantomJS
  + cross-browser testing
  + what does "headless" mean? and a headless browser?
  + `data-test` attributes

#### Deployment

  + heroku for api
  + netlify for gui (react)
    - why not heroku for gui deployment? netlify does production build, and only serves static files which is more efficient.
  + alternatives?
    - Digital Ocean: more manual (surgical🤷‍♂️) setup e.g. setup `nginx / apache`, load balancers, firewalls etc
    - AWS EC2
    - AWS S3 (for React gui)
    - GCP (Google Cloud Platform)
    - Azure
    - Your basement Raspberriy Pi??
  + general deployment tips
    - don't be afraid to delete `node_modules` and `package-lock.json`. DO NOT DELETE `package.json`!
    - reset cache when changes are not being reflected; especially true for GUI deployment e.g on Netlify, AWS S3, AWS Cloudfront, Akamai Cloud
    - don't forget to set your environment variables
    - remember to attach any required resource e.g. Heroku Postgres
    - don't save it for last on a Friday; it could ruin a weekend :)

#### Continous integration (test) / continous deployment

  + circle ci demo - `.circleci/config.yml` file:

```yml
version: 2
jobs:
  build:
    docker:
      - image: circleci/node:10.16

    working_directory: ~/client

    steps:
      - checkout
      - restore_cache:
          keys:
            - v1-dependencies-{{ checksum "package.json" }}
            - v1-dependencies-
      - run: npm install
      - save_cache:
          paths:
            - node_modules
          key: v1-dependencies-{{ checksum "package.json" }}
      - run: npm test

  deploy:
    machine:
      enabled: true

    working_directory: ~/client

    steps:
      - add_ssh_keys:
          fingerprints:
            - "f51:39:6f:ea:d4:4c:b8:23:e5:d7:92:1c:dc:3f:cd:51"
      - checkout
      - run:
          name: Push Master to Production
          command: |
            git push https://github.com/hafbau/scheduler.git master:production

workflows:
  version: 2
  test_and_deploy:
    jobs:
      - build:
          filters:
            branches:
              ignore: production
      - deploy:
          filters:
            branches:
              ignore: production
          requires:
            - build
```

Shout out to [Dom for awesome notes here.](https://github.com/DominicTremblay/w8d3-lecture-oct14)

Thank you all 🤘🏿!
