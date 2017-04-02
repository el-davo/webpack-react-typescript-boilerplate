# Webpack-React-Typescript-Boilerplate

[![Build Status](https://travis-ci.org/el-davo/webpack-react-typescript-boilerplate.svg?branch=master)](https://travis-ci.org/el-davo/webpack-react-typescript-boilerplate)

### What is this?

This is a boilerplate project using the below libraries
 
 * Webpack 2
 * Webpack dev server (Hot reloading)
 * React
 * Typescript
 * Redux
 * Redux-Saga
 * React-material
 * Mocha
 * Sinon
 * Should.js
 * Enzyme
 * Webdriverio

## How to use

You can clone this repo for your own project using the command below

```
git clone https://github.com/el-davo/webpack-react-typescript-boilerplate.git your-project-name
```

## Installation

It is reccommended to use yarn for Installation. If you havent installed yarn please check it out [here](https://yarnpkg.com/en/), then use the command below to install dependencies

```
yarn
```

If you dont have yarn installed then you can just use npm

```
npm i
```

## Commands

To run the app in development mode use

```
npm run dev
```

To run tests use one of the commands below, the second command will watch for changes and re-run the tests

```
npm run test

npm run test:watch
```

To make a release build use the command below

```
npm run build
```

To generate a coverage report use the command below. Reports can be found under ./test_results/coverage

```
npm run coverage
```

To run e2e tests you can use the command below. This is using Webdriverio with phantomjs 
so it should be headless. If you want to run in real browser then you need to update wdio.conf.js

```
npm run e2e
```
