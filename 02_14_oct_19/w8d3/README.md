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
  + components/UI libraries / Design systems e.g. Material UI, Semantic UI, React Bootstrap
  + styling
    - component-based css
    - inline styles
      + pros - easily can use props for calculating styles e.g. theming
      + cons - pseudo selectors e.g. `:hover`
    - SASS
    - styled components
    - CSS in JS (JSS)
    - hooks


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
      + can be memoized for performance i.e. only recalculates only of inputs have changed.
    - API calls?
      - axios vs fetch
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
    - Digital Occean: more manual (surgical🤷‍♂️) setup e.g. setup `nginx / apache`, load balancers, firewalls etc
    - AWS EC2
    - AWS S3 (for React gui)
    - GCP
    - Azure
    - Your basement Raspberriy Pi??
  + general deployment tips
    - don't be afraid to delete `node_modules` and `package-lock.json`. DO NOT DELETE `package.json`!
    - reset cache when changes are not being reflected; especially true for GUI deployment e.g on Netlify
    - don't forget to set your environment variables
    - remember to attach any required resource e.g. Heroku Postgres
    - don't save it for last on a Friday; it could ruin a weekend :)

#### Continous integration / continous deployment

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

I think [Dom's note here is fantastic; has steps for circleci.](https://github.com/DominicTremblay/w8d3-lecture-oct14)

Thank you all 🤘🏿!

Oh, and here's someone challenging our role:

![Role of web developers](data:image/png;base64,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)