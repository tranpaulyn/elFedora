# ElFedora Food App
ElFedora is a take-out app that has a fully functioning interface built with Twilo, Node Skeleton, Knex, EJS, Express, PG, Morgan, Dotenv, Nodemon, Body-Parser and NPM.


## Screenshots
-ScreenShot of main page
!["ScreenShot of Main page"](https://github.com/tranpaulyn/elFedora/blob/master/docs/Screenshot%20from%202019-03-04%2009-35-48.png)
-ScreenShot of adding items to cart
!["ScreenShot of Ordering Items"](https://github.com/tranpaulyn/elFedora/blob/master/docs/Screenshot%20from%202019-03-04%2009-36-27.png)


## Project Setup

1. Create your own empty repo on GitHub
2. Clone this repository (do not fork)
  - Suggestion: When cloning, specify a different folder name that is relevant to your project
3. Remove the git remote: `git remote rm origin`
4. Add a remote for your origin: `git remote add origin <your github repo URL>`
5. Push to the new origin: `git push -u origin master`
6. Verify that the skeleton code now shows up in your repo on GitHub

## Getting Started

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information
3. Install dependencies: `npm i`
4. Fix to binaries for sass: `npm rebuild node-sass`
5. Run migrations: `npm run knex migrate:latest`
  - Check the migrations folder to see what gets created in the DB
6. Run the seed: `npm run knex seed:run`
  - Check the seeds file to see what gets seeded in the DB
7. Run the server: `npm run local`
8. Visit `http://localhost:8080/`

## Dependencies

- Node 5.10.x or above
- NPM 3.8.x or above
- Express
- Body-Parser
- Twilo
- Node Skeleton
- Knex
- EJS
- PG
- Morgan
- Dotenv
- Nodemon

