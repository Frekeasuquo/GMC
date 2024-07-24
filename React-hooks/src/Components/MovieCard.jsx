import React, {Component} from 'react';
import {Col, Row} from "react-bootstrap";

import Movelist from './MovieList';
import AddMovie from './AddMovie';


import armorGod from '../Posters/armorGod.jpg'
import avater from '../Posters/avater.jpg'
import badComment from '../Posters/badComment.jpg'
import fiveAndSix from '../Posters/fiveAndSix.jpg'
import iMax from '../Posters/iMax.jpg'
import insonmia from '../Posters/insonmia.jpg'
import myCandy from '../Posters/myCandy.jpg'
import phoneSwap from '../Posters/phoneSwap.jpg'
import theJoker from '../Posters/theJoker.jpg'
import theMeeting from '../Posters/theMeeting.jpg'



class MovieCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [
                {
                    image: armorGod,
                    title: "Armor God",
                    description: "Action Movie",
                    posterUrl: "www.movies.com",
                    year: "2020",
                    rating: "4"
                },
                {
                    image: avater,
                    title: "Avater",
                    description: "Action Movie",
                    posterUrl: "www.movies.com",
                    year: "2019",
                    rating: "3.5"
                },
                {
                    image: badComment,
                    title: "Bad Comment",
                    description: "Love Story",
                    posterUrl: "www.movies.com",
                    year: "2021",
                    rating: "4.0"
                },
                {
                    image: fiveAndSix,
                    title: "Five and Six",
                    description: "Too hot to handle",
                    posterUrl: "www.movies.com",
                    year: "2019",
                    rating: "3.0"
                },
                {
                    image: iMax,
                    title: "IMAX",
                    description: "Action, suspense",
                    posterUrl: "www.movies.com",
                    year: "2018",
                    rating: "5.0"
                },
                {
                    image: insonmia,
                    title: "Insonmia",
                    description: "Horror Movie",
                    posterUrl: "www.movies.com",
                    year: "2019",
                    rating: "4.5"
                },
                {
                    image: myCandy,
                    title: "My Candy",
                    description: " You can't miss this",
                    posterUrl: "www.movies.com",
                    year: "2021",
                    rating: "5.0"
                },
                {
                    image: phoneSwap,
                    title: "Phone Swap",
                    description: "Comedy",
                    posterUrl: "www.movies.com",
                    year: "2021",
                    rating: "4.5"
                },
                {
                    image: theJoker,
                    title: "The Joker",
                    description: "Action, suspense",
                    posterUrl: "www.movies.com",
                    year: "2020",
                    rating: "5.0"
                },
                {
                    image: theMeeting,
                    title: "The Meeting",
                    description: "Must watch",
                    posterUrl: "www.movies.com",
                    year: "2020",
                    rating: "4.5"
                },
            ],
            modal: false,
        };
    }
    toggle = () =>
        this.setState({
            modal: !this.state.modal
        });

    addMovie = (item) => {
        let newState = this.state.movies;
        newState.push(item);
        this.setState({
            movie: newState,
        })
    }


    render (){
        return (
            <div className="container">
                <Row>
                    {this.props.search 
                        ? this.state.movie
                            .filter((el) => 
                                el.title.match(this.props.search.toLowerCase().trim())
                        )
                        .map((element, key) => (
                            <Col key={key} sm={3}>
                                <Movelist movie={element} />
                            </Col>
                            ))
                        : this.props.rate 
                        ? this.state.movie
                            .filter((el) => {
                                return el.rating >= this.props.rate;
                            })
                        .map((element, key) => (
                                <Col key={key} sm={3}>
                                    <Movelist movie={element} />
                                </Col>
                            ))
                        : this.state.movie.map((element, key) =>(
                            <Col key={key} sm={3}>
                                <Movelist movie={element} />
                            </Col>
                        ))
                    }
                </Row>
                <Row>
                    <AddMovie
                        modal = {this.state.modal}
                        toggle = {this.toggle}
                        addItem = {this.addMovie}
                    />
                </Row>
            </div>
        )
    }
}

export default MovieCard