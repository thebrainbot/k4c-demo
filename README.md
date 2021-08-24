# k4c-demo

## Setup

Setup should be simple as there are few dependencies required. Being a simple mono repo, the mock api is under 'faker' and the react app is under 'app'.

Faker:

```
cd faker
yarn install
npm install -g json-server
yarn faker
yarn json-server
```

React:

```
cd app
yarn install
yarn start
```

The react app should be reachable at: `http://localhost:3000` or via your ip.

## Faker API Data

Currently API data is handled via faker and json-server. The index script generates the data in the db.json file and the json-server will create a simple REST server allowing access to the data. Routing is based on the top level object keys.

Note, commands are expected to be executed in the `/faker` folder, not at top level.

### Generating new data

To generate a new data set, there are two methods to handle this. Executing the `index.js` script in the `/faker` directory via `node index.js` will work fine. Additionally the data can be regenerated via yarn script: `yarn faker`.

### Serving data

To server data, there are two methods. There is a yarn script to help `yarn json-serve` and it can also be directly executed via `json-server --watch db.json --port 3004`. This will start the server and create the endpoints for the data in the db.json file.

## Future improvements
