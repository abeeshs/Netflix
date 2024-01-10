import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { TMDB_API_OPTION } from '../constant';
import { addUpcomingMovies } from '../redux/slice/movieSlice';

function useUpcomingMovies() {
    const dispatch = useDispatch();
    const getUpcomingMovies = async () => {
       try {
          const result = await fetch(
             "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
             TMDB_API_OPTION
          );
          const movies = await result.json();
          console.log(movies);
          dispatch(addUpcomingMovies(movies.results));
       } catch (err) {
          console.log(err);
       }
    };
 
    useEffect(() => {
       getUpcomingMovies();
       // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  return (
    <div>useUpcomingMovies</div>
  )
}

export default useUpcomingMovies