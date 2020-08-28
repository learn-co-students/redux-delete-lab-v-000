# Set List Lab - Redux Delete

## Objectives

1. Remove responsibility for rendering bands from the `BandsContainer` by creating `Bands` and `Band` components.
2. Implement a delete button for each band, such that the store is appropriately updated.

## Overview

Well all things change, and sometimes that means that even our favorite bands break up and we must remove all evidence of them. We want an application that allows us to remove specific bands, and have those changes reflected in our store's state and on the page.  

We are starting off with our work from the previous lab, a React/Redux app that allows us to create new band elements and displays them on the page. In order to maintain separation of concerns, we have removed the code from `BandsContainer` that renders the bands to the page. 

## Instructions

The BandInput component is already set up for you and BandsContainer is partially working, but take a moment to note the flow of information. The
BandsContainer is connected to __Redux__ and has mapped `name => dispatch({ type:
"ADD_BAND", name })` to props.

1. Create a new `Band` component that will be in charge of displaying the information for a single band.

2. Create a new `Bands` component that will handle the rendering of all `Band` components from a list of bands provided as props.

3. Use `BandsContainer` to access the Redux store using the provided `mapStateToProps` method. Pass the bands obtained from the store into the `Bands` component.

4. Currently, bands are stored in state as an array of strings representing the name of each band. In the `manageBand` reducer, change the structure of the state such that each band is an object with `id` and `name` properties; be sure to assign each band its own unique ID on creation. The array of objects will be available to `BandsContainer` through `mapStateToProps` and passed as props through `Bands` to each rendered `Band` component.

5. In the `Band` component, you will need to add a button that dispatches an
action of type `'DELETE_BAND'` and passes through that band's id as the
`action.id`. This dispatched action should be provided as a prop from
`BandsContainer`.

6. Finally, you will need to add code to handle the `DELETE_BAND` action in the reducer. When a band's delete button is pressed, it will return a new list of bands
that does not include the deleted band.
