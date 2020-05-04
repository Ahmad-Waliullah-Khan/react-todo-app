import React from 'react';

class AddTodo extends React.Component {

  state = {

  }

  onChange = (e) => {
    this.setState ({
      [e.target.name] : e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({title : ''})
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
       <input type='text' name='title' placeholder='Add Todo ... ' value={this.state.title} onChange={this.onChange} />
       <input type='submit' className='btn btn-primary' value='Add' />
      </form>
    )
  }

}

export default AddTodo;