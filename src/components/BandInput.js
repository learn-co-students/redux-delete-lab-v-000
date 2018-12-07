
import React, { Component } from 'react';
import { connect } from 'react-redux'

class BandInput extends Component {

  state = {
    bandName: '',
  }

  // constructor() {
  //   super();
  //   this.state = {
  //     bandName: '',
  //   };
  // }

  handleOnChange(event) {
    this.setState({
      bandName: event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addBand(this.state.bandName);
    this.setState({bandName: ''});
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input type="text" onChange={(event) => this.handleOnChange(event)} value={this.state.bandName}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

// const mapDispatchToProps = dispatch => ({
//   addBand: bandName => dispatch({ type: 'ADD_BAND', payload: bandName })
// })

// export default connect(null, mapDispatchToProps)(CreateTodo);

export default BandInput;





// import React, { Component } from 'react'
// import { connect } from 'react-redux'

// class CreateTodo extends Component {

//   constructor() {
//     super();
//     this.state = {
//       text: '',
//     };
//   }

//   handleSubmit = event => {
//     event.preventDefault();
//     this.props.addTodo(this.state)
//     this.setState({text: ''})
//   }

//   handleChange(event) {
//     this.setState({
//       text: event.target.value
//     });
//   }

//   render() {
//     return(
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <label>add todo</label>
//           <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.text}/>
//           <input type="submit" />
//        </form>
//      </div>
//    );
//   }
// };

// const mapDispatchToProps = dispatch => ({
//   addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData })
// })

// export default connect(null, mapDispatchToProps)(CreateTodo);