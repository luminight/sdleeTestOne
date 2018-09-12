import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';
class App extends Component {	
	// state는 컴포넌트를 로드한다.
	state={}
	// (1)
	componentWillMount(){
		console.log("componentWillMount")
	}
	// (2)
	render() {
		const {movies} = this.state;
		return (
		  <div className={movies?"App":"App--loading"}>
		  {this.state.movies ? this._renderMovies(): 'Loading'}
		  </div>
		);
	}
	// (3)컴포넌트가 자리잡으면 5초를 기다리고, greeting update~~!
	// fetch를 활용해서 에이잭스로 제이슨 형태의 데이터를 가져올 수 있다.
	componentDidMount(){
		this._getMovies();
	}
	// (4) update
	// 1. componentWillReceiveProps(): 컴포넌트가 새로운 props를 받았다는 뜻
	// 2. shouldComponentUpdate(): 여러 프롭들을 보고 이전과 새로운 프롭이 다르면, 업데이트 처리함(True)
	// 3. componentWillUpdate(): 이거 수행할때 어플리케이션에 뱅글뱅글 돌아가는 스피너를 붙일 수도 있음. 
	// 4. render(): 
	// 5. componentDidUpdate(): (3번 이후)업데이트 이후에는 로딩중 메시지나 아이콘을 숨기면 됨.
	
	_renderMovies = () =>{
		const movies = this.state.movies.map((movie, index) =>{
					return <Movie 
					title={movie.title_english} 
					poster={movie.medium_cover_image} 
					key={movie.id} 
					genres={movie.genres} 
					synopsis={movie.synopsis} 
					/>
				})
		return movies
	}
	
	_getMovies= async ()=> {
		//Here, await is _callApi()기능이 끝나는 것을 기다리고.. 끝나길 기다리는 것임!!.. 성공적으로 수행이 아님.
		//const movies는 _callApi()의 return value를 갖는다.
		
		const movies = await this._callApi() 
		//setState는 _callApi() 작업이 완료되기 전까지 실행되지 않는다.
		this.setState({
			movies
		})
	}
	
	_callApi = () => {
		
		return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
		.then(potato => potato.json())  // 작업 완료 되면 불러옴. then function은 1개의 attribute(오브젝트)만 준다. 그것은 fetch의 결과물임.
		.then(json=> json.data.movies)  // return 작성 필요 없음... 자동임.
		.catch(err =>console.log(err))  // try catch 개념 에러를 잡아서 보여달라는 뜻.
	}
	
}

export default App;
 