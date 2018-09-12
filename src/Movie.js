import React from 'react';
import './Movie.css';
import PropTypes from 'prop-types'
import LinesEllipsis from 'react-lines-ellipsis'

function Movie({title, poster, genres, synopsis}){
	return(
		<div className="Movie">
			<div className="Movie_Columns">
				<MoviePoster poster={poster} alt={title}/>
			</div>
			<div className="Movie_Columns">
				<h1>{title}</h1>
			</div>
			<div className="Movie_Genres">
				{genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
			</div>
			<p className="Movie_Synopsis">
				<LinesEllipsis
					text={synopsis}
					maxLine='3'
					ellipsis='...'
					trimRight
					basedOn='letters'
				
				/>
			</p>
		</div>
	)
}

function MoviePoster({poster, alt}){
	// 그냥 리턴하기 위해 존재
	// componentWillMount, function, update state 필요없음.
	// 한개의 props만 있으면 됨.
	// 1개의 props, 1개의 html 태그
	// render, life cyvle도 없음.
	return (
		<img src={poster} alt={alt} title={alt} className="Movie_Poster"/>
	)
}

function MovieGenre({genre}){
	return(
		<span className="Movie_Genre">{genre}</span>
	)
}



// 속성이 뭔지 파악하기 위한 방도
Movie.propTypes = {
	title: PropTypes.string.isRequired,
	poster: PropTypes.string.isRequired,
	genres: PropTypes.array.isRequired,
	synopsis: PropTypes.string.isRequired,
}

MoviePoster.propTypes = {
	poster: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
}

MovieGenre.propTypes = {
	genre: PropTypes.string.isRequired,	
}

export default Movie;
 