var HomeListing = React.createClass({
  render: function() {
    return (
      <div className="homeList">
        <Home
          key={0}
          id={0}
          isSaved={false}
          photo="assets/images/home.jpg"
          address="12345 Beverly Dr"
          numSaves={52}
        >
          This is a home in the city
        </Home>
      </div>
    );
  }
});
 
var Home = React.createClass({
  render: function() {
    return (
      <div className="home">
        <span className="homeAddress">
          {this.props.address}
        </span>
        <Photo src={this.props.photo}></Photo>
        <span className="homeDescription">
          {this.props.children}
        </span>
        <Saves
          id={this.props.id}
          isSaved={this.props.isSaved}
          numSaves={this.props.numSaves}
        ></Saves>
      </div>
    );
  }
});
 
var Photo = (props) => {
  return (<div className="homePhoto">
    <img src={props.src} />
  </div>);
};
 
var Saves = React.createClass({
  getInitialState: function(){
    return {
      saved: this.props.isSaved,
      numSaves: this.props.numSaves
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
 
ReactDOM.render(
  <HomeListing />,
  document.getElementById('root')
);