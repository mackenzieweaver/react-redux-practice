// https://learn.freecodecamp.org/front-end-libraries/react-and-redux/manage-state-locally-first
class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  
  handleChange (e) {
    this.setState = {
      input: e.target.value
    }
  }

  submitMessage () {
    this.setState = {
      input: '',
    }
  }

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input type="text" onChange={this.handleChange} value={this.state.input}></input>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>{this.state.messages.map(message => <li>{message}</li>)}</ul>
      </div>
    );
  }
};
