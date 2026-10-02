# React Guided Learning Activity: Redux State Management (Without Redux Toolkit)

## Project Overview

This project demonstrates how to manage global state in a React application using **Redux without Redux Toolkit**.

The application is built with:

* React
* TypeScript
* Redux
* React Redux
* Redux Logger
* Vite

## Features

The application contains a simple counter managed through Redux.

Users can:

* Increment the counter
* Decrement the counter
* Reset the counter to zero

Redux Logger is also used to display dispatched actions and state changes in the browser console.

## Project Structure

```text
src/
├── components/
│   ├── Counter.tsx
│   └── Counter.module.css
│
├── store/
│   ├── actions/
│   │   └── counterActions.ts
│   │
│   ├── reducers/
│   │   ├── counterReducer.ts
│   │   └── index.ts
│   │
│   └── store.ts
│
├── App.tsx
├── main.tsx
└── index.css
```

## Redux Architecture

The application uses the following Redux structure:

### Store

The Redux store is configured in:

```text
src/store/store.ts
```

It contains the root reducer and Redux Logger middleware.

### Actions

Redux actions are defined in:

```text
src/store/actions/counterActions.ts
```

The available actions are:

* `INCREMENT`
* `DECREMENT`
* `RESET`

### Reducer

The counter reducer is located in:

```text
src/store/reducers/counterReducer.ts
```

It updates the counter based on the dispatched action.

### Root Reducer

The reducers are combined in:

```text
src/store/reducers/index.ts
```

### Provider

The Redux `Provider` is configured in:

```text
src/main.tsx
```

This makes the Redux store available throughout the React application.

## Running the Project

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local URL provided by Vite, usually:

```text
http://localhost:5173/
```

## Testing

The project was tested by:

* Running the application successfully.
* Incrementing the counter.
* Decrementing the counter.
* Resetting the counter.
* Confirming Redux Logger displays dispatched actions and state changes.
* Running the production build.
* Running ESLint successfully.

## GitHub

This project was developed incrementally using Git commits with descriptive commit messages.

## Learning Outcome

This activity demonstrates how to set up Redux manually, organize actions and reducers, combine reducers, connect Redux to React using `Provider`, and access and update global state using `useSelector` and `useDispatch`.
