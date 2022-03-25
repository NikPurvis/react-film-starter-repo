import React, { Component } from "react"
import TMDB from "./TMDB"
// import TMDB from "./TMDB"

export default class FilmList extends Component {

    render () {

        const allFilms = TMDB.films.map((film, index) => (
            <div class="film-row">
                <h1>{film.title}</h1>
            </div>
        ))

        return (
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                {allFilms}
            </div>
        )
    }
    
}