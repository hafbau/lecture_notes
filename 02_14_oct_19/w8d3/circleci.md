## CircleCI

- Sign up with your github account

## Create a New Project

- Create a new project

  - select `Linux` and `node`
  - Create a new folder in the root of our scheduler client project called `.circleci`. Create a new file called `config.yml`.

  - Add the following in config.yml

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
            - "6b:30:d2:91:38:80:4f:53:b7:c3:eb:55:d5:50:42:4f"
      - checkout
      - run:
          name: Push Master to Production
          command: |
            git push https://github.com/hafbau/scheduler-gui.git master:production

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

- Click `start buliding`

## Connecting GitHub

### Generate Keys

- Open a terminal window and type 

`ssh-keygen -t rsa -b 4096 -C <your_email@example.com>`

- name the file `circleci_rsa`

### Add Deploy Key

- Add deploy key to github

`cat circleci_rsa.pub`

- copy the content
- Go to `deploy keys` on github
- Delete the current one
- Create a new one and paste the key in

### Add Private Key to CircleCi

- go in the settings for the project
- select ssh keys and click `add ssh key`

`cat circleci_rsa`

- copy the content and add ssh key

*Delete the `circleci_rsa` and `circleci_rsa.pub` key files.*

### Configuring Production Branch

- update `config.yml`

```sh
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
            - "15:4c:e0:6b:ac:c1:7f:59:d8:df:b2:d8:77:0f:47:78"
      - checkout
      - run:
          name: Push Master to Production
          command: |
            git push https://github.com/DominicTremblay/scheduler-final.git master:production

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

- Customize the github url and fingerprints

```sh
    steps:
      - add_ssh_keys:
          fingerprints:
            - "15:4c:e0:6b:ac:c1:7f:59:d8:df:b2:d8:77:0f:47:78"
      - checkout
      - run:
          name: Push Master to Production
          command: |
            git push https://github.com/DominicTremblay/scheduler-final.git master:production
```

- After build is completed, we should see a production branch in the repo
