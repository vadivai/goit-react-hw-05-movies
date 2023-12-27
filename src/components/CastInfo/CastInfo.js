// import { NoPhoto } from 'other/NotFoundPhoto';
import { CastItem, CastStyled, NoPhoto2 } from './CastInfo.styled';

export const CastInfo = ({ castInfo }) => {
  return (
    <CastStyled>
      {castInfo.map(({ cast_id, profile_path, name, character }) => {
        return (
          <CastItem key={cast_id}>
            {profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                alt={name}
              />
            ) : (
              <NoPhoto2></NoPhoto2>
              //   <NoPhoto />
            )}
            <p>{name}</p>
            <p>Role: {character}</p>
          </CastItem>
        );
      })}
    </CastStyled>
  );
};
