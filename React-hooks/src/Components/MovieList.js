import React, {Component, Fragment} from "react"
import Rating from './Rating'
import '../ComponentsStyles/MovieList.css'

import {Card, CardImg} from "react-bootstrap"

class Movelist extends Component {
    render() {
        return (
            <Fragment>
                <Card>
                    <div>
                        <Rating rate={this.props.movie.rating} />
                    </div>

                    <CardImg top src= {this.props.movie.image} alt="Img Card"/>
                    <Card.Body>
                        <Card.Title >
                            {this.props.movie.title}
                        </Card.Title>
                        <Card.Title >
                            {this.props.movie.description}
                        </Card.Title>
                        <Card.Title >
                            {this.props.movie.posterUrl}
                        </Card.Title>
                        <Card.Subtitle >
                            {this.props.movie.rating}
                        </Card.Subtitle>
                    </Card.Body>
                </Card>
            </Fragment>
        )
    }
}

export default Movelist