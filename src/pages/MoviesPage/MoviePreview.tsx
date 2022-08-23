import React,{useState,useEffect} from 'react'
import ReactDom from 'react-dom'
import {Container,MovieVideo,MoviePoster,
    MovieTitle,Controls,MovieDataContainer,MovieDescription,AgeRating
} from './styles/MoviePreview'

import PlayButton from '../../components/PlayButton'
import InfoButton from '../../components/InfoButton'
import MovieInfoModal from '../../containers/MovieInfoModal'
import useMoviesPageData from './hooks/useMoviesPageData'

const MoviePreview = () => {
    const [showVideo,setShowVideo]=useState(true)
    const [showMovieInfoModal,setShowMovieInfoModal]=useState(false)
    const movieData =useMoviesPageData().moviesData[0].Movies[0];

    useEffect(() =>{
        const playTime=setTimeout(() =>{
            setShowVideo(false);
        },3000)
        return () =>{
            clearTimeout(playTime);
        }
    },[])

    const playClicked =()=>{
        
    }
    const infoButtonClicked =()=>{
        setShowMovieInfoModal(true)
    }

    return (
        <Container>
        {showMovieInfoModal && ReactDom.createPortal(<MovieInfoModal info={movieData} showState={showMovieInfoModal} setShowState={setShowMovieInfoModal}/>,document.getElementById("moreInfo"))}
        <MovieDataContainer>
            <MovieTitle src={movieData["title-image"]} alt={movieData.name}/>
            <MovieDescription>
                {movieData.descriptions["more-info"].about}
            </MovieDescription>
            <Controls>
                <PlayButton onClick={playClicked}/>
                <InfoButton onClick={infoButtonClicked}/>
            </Controls> 
        </MovieDataContainer>
        <AgeRating>
            {movieData["maturity-rating"]}
        </AgeRating>
        {
            showVideo?<MovieVideo autoPlay/>
            :<MoviePoster src={movieData["large-image"]}/>
        }</Container>
    )
}

export default MoviePreview