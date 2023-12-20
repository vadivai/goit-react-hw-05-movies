import React from 'react';
import { fetchSearchMovies, fetchTrendMovies } from 'service/api';

// const styleHome = {
//   display: 'flex',
//   flexDirection: 'column',
//   gap: '10px',
// };

fetchTrendMovies();
fetchSearchMovies('Titanik');

// export default function () {
//   const [quizItems, setQuizItems] = useState([]);

//   useEffect(() => {
//     async function getQuizzes() {
//       try {
//         setIsLoading(true);
//         setError(false);
//         const initialQuizzes = await fetchQuizzes();
//         setQuizItems(initialQuizzes);
//       } catch (error) {
//         setError(true);
//       } finally {
//         setIsLoading(false);
//       }
//     }

//     getQuizzes();
//   }, []);

export const Home = () => {
  return (
    <div>Trending today</div>
    //список фильмов из трендов - запрос и рендеринг ссылок на фильмы, переходим на MovieDetail
  );
};
