const elem = React.createClass({
  getInitialState: function(){
    return {
      saved: false,
      numSaves: 0
    }
  },
  handleSubmit: function(e) {
    e.preventDefault();
 
    var saved = false;
    var numSaves = this.state.numSaves;
    
    if (this.state.saved === false) {
      saved = true;
      numSaves++;
    } else {
      numSaves--;
    }
    this.setState({
      numSaves: numSaves,
      saved: saved
    });
  },
  render: function() {
    var savedText = '';
    var submitText = 'Save';
    if (this.state.saved) {
      savedText = 'You have saved this home.';
      submitText = 'Remove';
    }
    
    return (
      <div className="saves">
        <form onSubmit={this.handleSubmit}>
          <input type="submit" value={submitText} />
        </form>
      {this.state.numSaves} saves. {savedText}
      </div>
    );
  }
});

ReactDOM.render(elem, document.getElementById('root'));