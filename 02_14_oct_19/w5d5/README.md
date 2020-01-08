Project Kickoff
===

Thank you all for sitting through this today! Here are links to help you with planning and things we talked about. Have fun!

[Project resources (includes user story link)](https://gist.github.com/donburks/c460f0b8bc8edab03fd4a7f150178e37)

[Don's PDF Slides](https://drive.google.com/file/d/1jR5SiN980jybxYXrhZ6BCevurprePEqE/view?usp=sharing)

[Dom's PDF Slides](https://docs.google.com/presentation/d/1WVhcLP90pQCgWkb8LSNfwJOr1UgIsnQ6UP41Lyg_9Z8/edit#slide=id.g552f611ad3_1_261)

> #### Note
> Checkout slide 11 about authentication

[Tools list from Dom](https://gist.github.com/DominicTremblay/b8e0acc66c45f412abe4d92b7268b3cd)

> #### Note
> As discussed, prototyping tools may be more useful for your finals.


#### Other things we discussed

- [ngrok for tunneling your localhost through a public URL](https://ngrok.com/download)
  + Download ngrok for your OS
  + unzip the downloaded zipped file. On Mac, it was just a double-click.
  + To use it:
    • Run your local server as you normally would e.g. `npm run local`
    • On your command line, navigate to where you unzipped ngrok to; mine was `/Users/hafizsuara/Downloads/ngrok` and issue the command: `path-to-ngrok/ngrok http port-where-local-server-runs`

    For example:

    ```bash
    /Users/hafizsuara/Downloads/ngrok http 8080
    ```

    • If everything works, you should have public links to your localhost server.

- [heroku deploy](heroku.com)
  + Sign up /Login to heroku
  + Create a new app
  + Connect to Github. You choose the repo to your project.
  + Enable automatic deploys
  + Scroll down a bit and deploy now. (not sure what the right wording was)
  + Wait a bit for deploy to finish, view app on the heroku url once deploy is done.
  + And you're live! You should see a page with `Hello World` (if you're going off LHL boilerplate). Not really though, needs the database.
  + From Resources tab, search for `Postgres` from the `Add ons` search input. Add `Heroku Postgres` to your heroku instance.
  + Once you're done _provisioning_, go to the Settings tab, click on `Reveal Cong vars`, you should see `DATABASE_URL` pointing to a _postgres connection string_
  + At the top right corner, beside `Open app`, click on `More`, then click on `Run Console`
  + `npm run db:reset` to create your tables and seed them on the newly provisioned database.


Thanks again!
