import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from './Band'

import { connect } from 'react-redux'

class BandsContainer extends Component {

	renderBands = () => {
		return this.props.bands.map(band => <Band id={band.id} name={band.name} deleteBand={this.props.deleteBand} key={band.id} band={band} />)
	}

  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>

        {this.renderBands()}
    
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name }),
  deleteBand: id => dispatch({type: 'DELETE_BAND', id})
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)





// import React, { Component } from 'react';
// import { connect } from 'react-redux'
// import Todo from './Todo'

// class TodosContainer extends Component {

//   renderTodos = () => {
//     console.log(this.props.todos);
//     return this.props.todos.map(todo => <Todo delete={this.props.delete} key={todo.id} todo={todo} />)
//   }

//   render() {
//     return(
//       <div>
//         {this.renderTodos()}
//       </div>
//     );
//   }
// };

// const mapStateToProps = state => {
//   return {
//     todos: state.todos
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     delete: todo => dispatch({type: 'DELETE_TODO', payload: todo })
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);



















// import React, { Component } from 'react';
// import { connect } from 'react-redux'
// import Todo from './Todo'

// class TodosContainer extends Component {

  // renderTodos = () => {
  //   console.log(this.props.todos);
  //   return this.props.todos.map(todo => <Todo delete={this.props.delete} key={todo.id} todo={todo} />)
  // }

//   render() {
//     return(
//       <div>
//         {this.renderTodos()}
//       </div>
//     );
//   }
// };

// const mapStateToProps = state => {
//   return {
//     todos: state.todos
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     delete: todo => dispatch({type: 'DELETE_TODO', payload: todo })
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);