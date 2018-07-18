# Mongo Half Stack

## Project Description
A simple Node.js HTTP server that exposes a REST API as the resource for the basic CRUD operations using end-to-end (E2E) testing and mongodb drivers.

## Developer
Requires:
* Node v10 or later.
* MongoDB
* (Recommended) Robo 3T (GUI for MongoDB)

### How to get started
* Fork repository, clone locally, navigate to repository directory,
* Download all the files with `npm i`,
* To test, run `npm test`. 

### How to use API
* Create your own .env files with the .env.example files provided in the root of the project and the test folder. Enter the correct MongoDB URI. Port is currently set to 3000, you may update it to your port of choice.
* Connect to server with `npm run start`.
* Enter `http://localhost:3000` in your browser.
* Our API saves two resources to MongoDB: Cakes and Pies. To see our data, click the links provided on the splash page.

The following methods are used for the paths listed:

Method | Path
---|---
`GET` |     `/<resources>`
`GET` |     `/<resources>/:id`
`POST` |    `/<resources>`
`PUT` |     `/<resources>/:id`
`DELETE` |  `/<resources>/:id`

## Contributors
[Mariah Adams](https://github.com/MariahAdams) & [Sarah Rehmer](https://github.com/Rehmsy)

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgment 
Forked from [alchemy-fullstack-js-summer-2018/mongo-half-stack](https://github.com/alchemy-fullstack-js-summer-2018/mongo-half-stack)