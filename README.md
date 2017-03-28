# React Wizard UI Component

This repo demonstrates an example reusable wizard component, in which any number of child components may be passed to create a step-by-step wizard.

## Getting Started

### Installation

Install dependencies using [`yarn`](https://yarnpkg.com/en/) or `npm install`.

### Running Locally

Run `yarn start` to start the app in development mode and open [`http://localhost:5000`](`http://localhost:5000`) in a browser to view.

### Build

To generate a production build in the `build/` folder, run `yarn run build`.

You can run the production build locally using `NODE_ENV=production yarn start`.

## Tech Stack

* React
* Redux
  * redux-saga
* seamless-immutable
* Node/Express
* Babel
* Webpack

## Technical Challenges

1. **State Management** - I flip-flopped between storing state in local component state and in a flux store. Ultimately, I went with Redux state for the demonstration, but the component's design is flexible in that the user of the wizard component could make child components update state either locally or in a flux store.
2. **Props** - Configuring props to be flexible yet opinionated was difficult. I focused on not dictating strongly how the wizard component would need its children or handlers. One caveat is that child components need `title` and `subtitle` props to properly generate the progress bar.

## Technical Considerations

1. **Samples** - I wanted to demonstrate the wizard component's ability to handle whatever children were passed to it without creating excess components. These were programmatically generated.
2. **Organization** - There are recommendations all over the web about how to organize a React-Redux application. I went with the paradigm of separating components by module/feature instead of type (presentational vs. container) for better scalability.

## Disclaimer

I utilized my own [react-redux-boilerplate](https://github.com/atsao/react-redux-boilerplate), which is still a work in progress. It follows the organize-by-feature setup and how I would now approach a React-Redux application.

## Future Features

1. **Navigation**
  * Ability to customize navigation for wizard instead of just previous and next
  * Ability to navigate using step indicator
2. **Hooks** - It would be useful to pass navigation hooks to fire events as needed (validation prior to hitting Next, clearing input on Previous, etc.)

## To Do

* More tests
* UX elements (loading spinner, responsive design)
