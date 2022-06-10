# GitHookHandler

This App is a deployable Full-Stack-App to handle your GitHooks, and deploy your webApps on your Server.

## Frontend

The frontend is deployable by running these docker commands:

To build the docker image on [localhost](http://localhost:80):

### `docker-compose -f front/docker-compose.prod.yml build`

To Run The Frontend Server:

### `docker run -p 80:80 --name GitHookHandler app-prod`

To change the Port the Page runs on use:

### `docker run -p 80:{Your Port} --name react-app app-prod`