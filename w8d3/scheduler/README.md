# Deployment

## Agenda
- Why deployment
- General concepts
- Deploying scheduler-api to heroku
- Deploying scheduler-react to netlify
- Hot tips

## Why deployment

- we are *packaging* our code and *uploading* it, to be run in another *environment* on the cloud (another machine)


## General concepts

- **Resources** for code to sucessfully run in another environment; we need similar *resources* as we have in our local environment. E.g. Database

- **Environment Variables** are used to make our code adaptable to multiple environments.
  + they can be used to locate particular resources e.g. database url, blob storage
  + they can be used to make environment based code decisions e.g. sending email; seeding the database

- **Hosting Platform** is the cloud platform, you upload your code to and then run your code on/with. Example Heroku, Netlify

## Deploying scheduler api to Heroku

### GUI Approach

- signup (with Github) / login to heroku.com
- click New; select Create new app
- under deployment method; click Github
- connect to the right git repo

- under *Automatic deploy*, select branch to deploy. Typically it's `master`
- click the `Enable Automatic deploy` button

- under *Manual deploys*, click on `Deploy Branch` to deploy now; the current code in github's master branch of your repo
- wait for deploy to finish
- click View to see deployed app running
  + 'Cannot GET /'

- let's view the logs
- does that error make sense?

- **Lets add Postgres database**
+ under `Resources` search for 'postgres' in the 'Add-ons' and select HerokuPostgres
+ click through to Provision the database.

- Seeding (scheduler-api specific)

- CLI Seeding
`heroku pg:psql --app <name_of_your_app> DATABASE < src/db/schema/create.sql`
`heroku pg:psql --app <name_of_your_app> DATABASE < src/db/schema/production.sql`


## Deploying scheduler gui to Netlify


- Signup / Login with your GitHub account
- Click on New site from git
  + choose Github
  + pick a repo

**Two choices*

GUI
- click on Advance Build Settings
  + add environment variables

Configuration File
- create a `netlify.toml` at the root of project


## General deployment tips
  - don't be afraid to delete `node_modules` and `package-lock.json`. DO NOT DELETE `package.json`!
  - reset cache when changes are not being reflected; especially true for GUI deployment e.g on Netlify, AWS S3, AWS Cloudfront, Akamai Cloud
  - don't forget to set your environment variables
  - remember to attach any required resource e.g. Heroku Postgres
  - don't save it for last on a Friday; it could ruin a weekend :)


## Alternatives?
  - Digital Ocean: more manual (surgical🤷‍♂️) setup e.g. setup `nginx / apache`, load balancers, firewalls etc
  - AWS EC2
  - AWS S3 (for React gui)
  - GCP (Google Cloud Platform)
  - Azure
  - Your basement Raspberriy Pi??