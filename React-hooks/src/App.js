import React, { Component, Fragment } from 'react';
import './App.css';
import MovieCard from './Components/MovieCard';
import SearchMovie from './Components/SearchMovie';
import Rating from './Components/Rating';
import WithLoading from './Components/WithLoading';
import armorGod from './Posters/armorGod.jpg'


const Content = WithLoading(MovieCard);

class App extends Component {
  constructor() {
    super();
      this.state = {
        image: armorGod,
        title: "Armor God",
        description: "Action Movie",
        posterUrl: "www.movies.com",
        year: "2020",
        rating: "4",
        searchWords: "",
        star: "",
        loading: true
      }
  }

  searchHandler = (event) => this.setState({ searchWords: event.target.value });
  handlechange = (newStar) => this.setState({ star: newStar });

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 20000);
  }

  render() {
    return (
      <Fragment>
        <MovieCard />
        <div className="nav-search">
          <SearchMovie look={this.searchHandler} />
          <div className="stars">
            <Rating rate={this.state.star} onChange={this.handlechange} />
          </div>
        </div>
        <div>
          <Content
            isLoading={this.state.loading}
            rate={this.state.star}
            search={this.state.searchWords}
          />
        </div>
      </Fragment>
    )
  }
}

export default App;
