import NoPhoto from 'other/no_photo-min.jpg';
import { CastItem, CastStyled } from './CastInfo.styled';

export const CastInfo = ({ castInfo }) => {
  return (
    <CastStyled>
      {castInfo.map(({ cast_id, profile_path, name, character }) => {
        return (
          <CastItem key={cast_id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                  : NoPhoto
              }
              alt={name}
            />
            <p>{name}</p>
            <p>Role: {character}</p>
          </CastItem>
        );
      })}
    </CastStyled>
  );
};
