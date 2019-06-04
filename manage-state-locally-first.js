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
    this.setState({
      input: e.target.value
    });
  }

  submitMessage (e) {
    e.preventDefault();
    this.setState({
      messages: [...this.state.messages, this.state.input],
      input: '',
    });
  }

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input type="text" value={this.state.input} onChange={this.handleChange} />
        <button onClick={this.submitMessage}>Submit</button>
        <ul>{this.state.messages.map(message => <li>{message}</li>)}</ul>
      </div>
    );
  }
};
