// Pass through the band object, which includes the id and name of the band, as a prop to each rendered Band component.
// BandsContainer passes an action-dispatching arrow function as a prop to Band component.
// The action-dispatching arrow function accepts the band object's id as an argument.
// When the action-dispatching arrow function is invoked upon clicking the Delete Band button,
// this calls the dispatch function with an action object that looks like this:
// { type: 'DELETE_BAND', id: id of band object to be deleted }

// In the Band component, which is rendered for each band, I added a Delete Band button.
// When the button is clicked, the click event is triggered and the onClick event handler fires the handleOnClick callback function
// This method calls the deleteBand function that was passed to it as a prop from BandsContainer component,
// with the id of the band to be deleted as its argument 
// (which was retrieved from the band object passed to the Band component as prop).
// Invoking this action-dispatching arrow function upon clicking the delete button
// calls the dispatch function with an action object argument of { type: 'DELETE_BAND', id: band.id }