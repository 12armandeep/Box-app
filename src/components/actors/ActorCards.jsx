import { SearchCard, SearchTmgWrapper } from '../common/SearchCard';
const ActorCards = ({ name, image, gender, country, birthday, deathday }) => {
  return (
    <SearchCard>
      <SearchTmgWrapper>
        <img src={image} alt={name} />
      </SearchTmgWrapper>
      <h1>
        {name}
        {!!gender && `(${gender})`}
      </h1>
      <p>{country ? `Come from ${country}` : 'no country known'}</p>
      {!!birthday && <p>Born on {birthday}</p>}
      <p>{deathday ? `Died on ${deathday}` : 'Alive'}</p>
    </SearchCard>
  );
};
export default ActorCards;
