import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
import NotFoundPage from 'pages/NotFoundPage';

// const Home = lazy(() => import('../pages/Home'));
// const Dogs = lazy(() => import('../pages/Dogs'));
// const DogDetails = lazy(() => import('../pages/DogDetails'));
// const Gallery = lazy(() =>
//   import('./Gallery').then(module => ({
//     ...module,
//     default: module.Gallery,
//   }))
// );
// const SubBreeds = lazy(() =>
//   import('./SubBreeds').then(module => ({
//     ...module,
//     default: module.SubBreeds,
//   }))
// );

// const fetchUsers = async () => {
//  const response = await fetch("https://jsonplaceholder.typicode.com/users");
//  const users = await response.json();
//  return users;
// };
// fetchUsers().then(users => console.log(users));

// '/' - компонент Home, домашняя страница со списком популярных кинофильмов.
// '/movies' - компонент Movies, страница поиска фильмов по ключевому слову.
// '/movies/:movieId' - компонент MovieDetails, страница с детальной информацией о кинофильме.
// /movies/:movieId/cast - компонент Cast, информация о актерском составе. Рендерится на странице MovieDetails.
// /movies/:movieId/reviews - компонент Reviews, информация об обзорах. Рендерится на странице MovieDetails.

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
};
