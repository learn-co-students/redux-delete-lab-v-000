# Set List Lab - Redux Delete

## Objectives

1. Implement a delete button for each band, such that the store is appropriately updated.

## Overview

We want an application that allows us to remove specific bands, and have those changes reflected in our store's state, and on the page.  

We are starting off with our work from the previous lab, a React/Redux app that creates new
band elements and displays them below. Your task will be to add the deleting a band functionality.

## Instructions

- The BandInput component is already set up for you and BandsContainer is
partially working.

- The BandsContainer is connected to __Redux__ and has mapped `name => dispatch({ type:
"ADD_BAND", name })` to props.

1. Set up the new `Band` component that is in charge of displaying the information
for a single band.

2. Create a new `Bands` component. This component will handle the rendering of all `Band` 
components from a list of bands provided as props.

3. `BandsContainer` accesses the Redux store that contains any band information using
the provided `mapStateToProps` method. Pass these bands into the `Bands` component.

4. In the `manageBand` reducer, change the structure of the state such that each band is assigned its own ID. You will also need to pass this info through to the band object (this should include the _id_ and _name_ of the band) as the props to each rendered `Band` component.

5. In the `Band` component, you will need to add a button that dispatches an
action of type `'DELETE_BAND'` and then passes through that band's id as the
`action.id`. This dispatched action should be provided as a prop from
BandsContainer.

6. You will have to alter the reducer such that it creates a new list of bands
that does not include the one whose delete button was pressed.

TESTS:
Bands Component
    ✓ displays bands from Redux store

  Band Component
    ✓ displays the appropriate text on form submission
    ✓ renders an li

  Redux
    ✓ assigns a unique id property when a band is added
    ✓ removes the correct band from the store on dispatch

  Band Component with Redux
    ✓ has a button that dispatches an DELETE_BAND action
    ✓ updates the state of the store to remove the component


  7 passing (243ms)