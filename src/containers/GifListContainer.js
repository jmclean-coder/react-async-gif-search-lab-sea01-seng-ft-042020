import React from "react";
import GifList from "../components/GifList.js";
import GifSearch from "../components/GifSearch";

class GifListContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      gifData: [],
      searchTerm: "dog",
    };
  }

  fetchGifs = (searchQ) => {
    const API = `https://api.giphy.com/v1/gifs/search?q=${searchQ}&api_key=LabS4EGEg6kSBpTQsaikezg7aDzgQ3YR&rating=g`;
   fetch(API)
    .then((res) => res.json())
      .then((json) => {
        let firstThree = json.data.slice(0, 3);
        console.log(firstThree);
        this.setState({
          gifData: firstThree
        });
      });
  };

  handleSearch = (e, searchTerm) => {
      e.preventDefault()
      console.log(e)
      this.fetchGifs(searchTerm)
  }

  componentDidMount() {
    this.fetchGifs(this.state.searchTerm)
  }

  render() {
    return (
      <div>
        <GifSearch handleSearch={this.handleSearch}/>
        <GifList gifs={this.state.gifData} />
      </div>
    );
  }
}
export default GifListContainer;
