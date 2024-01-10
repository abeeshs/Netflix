import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { TMDB_API_OPTION } from '../constant';
import { addPopularMovies } from '../redux/slice/movieSlice';

function usePopularMovies() {
    const dispatch = useDispatch();
    const getPopularMovies = async () => {
       try {
          const result = await fetch(
             "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
             TMDB_API_OPTION
          );
          const movies = await result.json();
          console.log(movies);
          dispatch(addPopularMovies(movies.results));
       } catch (err) {
          console.log(err);
       }
    };
 
    useEffect(() => {
       getPopularMovies();
       // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  return (
    <div>usePopularMovies</div>
  )
}

export default usePopularMovies