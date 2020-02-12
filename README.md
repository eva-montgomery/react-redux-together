# Node modules I need:

- `redux`
- `react-redux`

# Conventions

## Redux

- `actions.js` - action constants and your action creator functions
- `reducers.js` (or folder) - import your actions and define reducer functions
- `CounterApp.js` - define the store so that the React apo can use it

## React

### "Dumb components" (a.k.a. "John Snow components")

- they know nothing about redux
- they accept props
    - show the props
    - use props as event handlers
- `components/` - holds all your dumb components

### "Smart containers" (a.k.a. "The Iron Man suit")

- `containers/`- hold all the smart containers
- they know all about redux!
    - have access to redux `state` 
    - can call the store's `dispatch()`
- they don't know about React
    - they import the dumb components
- they wire together the dumb components and redux's `state`and `dispatch``
    - define `mapStateToProps` function
    - define `mapDispatchToProps` function