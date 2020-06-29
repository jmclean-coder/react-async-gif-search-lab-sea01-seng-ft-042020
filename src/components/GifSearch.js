import React from "react";
// import GifListContainer from "../containers/GifListContainer";
class GifSearch extends React.Component {
  constructor() {
    super();

    this.state = {
      searchTerm: "",
    };
  }
  handleChange = (event) => {
    event.persist()
    this.setState({
        [event.target.name]: event.target.value
    })
  }

  render(){
      return(
          <form onSubmit={(e) => this.props.handleSearch(e, this.state.searchTerm)}>
              <input onChange={this.handleChange} label= "search"type="text" name="searchTerm" value={this.state.searchTerm}></input>
              <input type="submit" />
          </form>
      )
  }
}
export default GifSearch