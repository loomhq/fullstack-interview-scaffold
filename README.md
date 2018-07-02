# Loom Fullstack Interview

Welcome to the Loom fullstack interview scaffold! Before we hop on a call, here's
the gist:

1. All files in `client` are created via [create-react-app](https://github.com/facebook/create-react-app).
2. `server.js` is a lightweight [express.js](https://expressjs.com/) scaffold
3. The client Webpack dev server is on port `3000` and the express server is on port `4444`.
4. The client code can call `/api` and it will automagically proxy to the server with no work on your part.

## Setup

1. Ensure you have `node` and `npm` installed on your machine.
2. `npm install`
3. `cd client && npm install`
4. Make sure you install your favorite persistent DB before the Zoom call and have it running locally (Mongo, Postgres, MySQL, etc.).

## Run

`npm run dev`

## Ensuring You're Good to Go

1. Hit `http://localhost:3000` in your browser and make sure you can see the default `create-react-app` UI.
2. Hit `http://localhost:3000/api/hello` and ensure you see the JSON `{ "hello": "world" }` returned.

If you're having issues getting these things working, do not hesitate to reach out to the interviewer via
email! We are here to help. :-)

## What we are not looking for

1. Your React knowledge. The UI we build will be very lightweight.
2. Intimate Express knowledge. The APIs will be fairly framework-agnostic.

## What we're cool with

1. You installing your own frontend framework of choice
2. You installing your own backend framework of choice
