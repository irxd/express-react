# express-react
Express.js + React.js boilerplate with minimal configuration. Backend side is built with express-generator and frontend side is built with create-react-app

# Demo
[https://reaxpress.herokuapp.com/](https://reaxpress.herokuapp.com/)

# Port
Both backend and frontend are forced to running on these port:
 - Express: 3000
 - React: 3001

You can edit manually on `express-react/package.json` for express and `express-react/client/package.json` for react

# Installation
Install express and it's dependencies

```bash
$ git clone https://github.com/irxd/express-react.git && cd express-react
$ npm install
```

And then install react dependencies

```bash
$ cd client
$ yarn install
```

# Running
Running express:

```
Open express directory: express-react/
```
```bash
$ npm start
```
Running react:

```
Open new terminal and go to react directory: express-react/client
```
```bash
$ yarn start
```
Open [http://localhost:3001](http://localhost:3001) in browser, you'll see react with some static data fetched from express 
