## Heroku

- Install `scheduler-api` on Heroku

To get the Heroku CLI

`npm install -g heroku`

or

`wget -O- https://toolbelt.heroku.com/install-ubuntu.sh | sh`

`heroku --version`

- To login

`Heroku login`
  or
`heroku login -i`

- To create a new Heroku application

`heroku create <name_of_your_app>`

`https://<name_of_your_app>.herokuapp.com/ | https://git.heroku.com/<name_of_your_app>.git`

- To delete an application

`heroku apps:destroy <name_of_your_app>`

- To add the Postgres add-on

`heroku addons:create heroku-postgresql:hobby-dev`

- To seed db

`heroku pg:psql --app <name_of_your_app> DATABASE < src/db/schema/create.sql`
`heroku pg:psql --app <name_of_your_app> DATABASE < src/db/schema/production.sql`

- To connect to postgres

`heroku pg:psql`

- To see the remotes

`git remote -v`

we should see heroku

- Create the build

`git push heroku master`

- To access the logs

`heroku logs --tail`

- We can access the api

```sh
http://<name_of_your_app>.herokuapp.com/api/days
http://<name_of_your_app>.herokuapp.com/api/appointments
http://<name_of_your_app>.herokuapp.com/api/interviewers
```
