import React, {Component} from "react";
import armorGod from '../Posters/armorGod.jpg'

class NewMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newmovie: [
                {
                    image: armorGod,
                    title: "Armor God",
                    description: "Action Movie",
                    posterUrl: "www.movies.com",
                    year: "2020",
                    rating: "4"
                },
            ],

            visible: false,
            picture: "",
            title: "",
            date: "",
        };

        newMovie = () => {
            this.setState({
                addedmovie: [
                    ...this.state.newmovie,
                    {
                        picture: this.state.picture,
                        title: this.state.title,
                        date: this.state.date,
                        star: this.state.star,
                    },
                ],
            });
        };

        addMovie = (event) => {
            this.setState({
                visible: true,
            });
        };

        closeMovie = (event) => {
            this.setState({
                visible: false,
            });
        };

        render();
        return <div></div>;
    }
}

export default NewMovie;