import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onHitEnter = (event) => {
    event.preventDefault();
    this.props.onSearchEnter(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onHitEnter}>
          <div className="field">
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
              placeholder="Image Search"
            ></input>
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
