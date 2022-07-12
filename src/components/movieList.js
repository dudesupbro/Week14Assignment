import React from 'react';
import Movie from './movie';
import '../styles/movieList.css';

export default class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movieList: [
                {
                    id: 0,
                    name: "The Big Sting (1973)",
                    synopsis: "Taking place in the Great Depression, two grifters devise a massive scheme to con the most famous mob-boss. Full of complex tricks and action, this movie employs gambling, women, and guns.",
                    rated: "PG-13",
                    reviews: [
                        {
                            text: "My brother and I were watching the Paul Newman filmography, when our dad came into the room. He said that if we were watching Paul Newman, we needed to watch this movie. One of the best, slow-building(but, full of action) movies about the Great Depression, crime, justice, and conning massive amounts of money. A must see",
                            rating: "Stars: 5",
                        },
                    ],
                },
                {
                    id: 1,
                    name: "The Hateful Eight (2015)",
                    synopsis: "One of Quentin Tarantino's best (they're all amazing), a bounty hunter is caught in a blizzard in Wyoming and is forced to hunker down with his bounty. More travelers enter their safe-house to escape the blizzard, and death, poison, and trickery ensue.",
                    rated: "R",
                    reviews: [
                        {
                            text: "Like every other Tarantino film, there is plenty of blood, explicit language, and slow-building plot twists. The scenery is of The Great Tetons, which are magnificent, but the majority of the film takes place in a travelers-rest cabin",
                            rating: "Stars: 5"
                        },
                    ],
                },
                {
                    id: 2,
                    name: "Heat (1995)",
                    synopsis: "A brilliant con-artist who has thus far been successful in every heist, plans his greatest one yet. Along the way, he finds a love, as well as a nemesis in the FBI, and outsmarts them both. Almost.",
                    rated: "R",
                    reviews: [
                        {
                            text: "A great action-packed film where the bad-guy outsmarts the good-guys. At least until the end.",
                            rating: "Stars: 5"
                        },
                    ],
                },
            ],
        };
    }

    render() {
        return (
            <div className='container'>
                <h1 id='title'>Movie Review</h1>
                <Movie movie={this.state.movieList[0]} />
                <Movie movie={this.state.movieList[1]} />
                <Movie movie={this.state.movieList[2]} />
            </div>
        );
    }
}
