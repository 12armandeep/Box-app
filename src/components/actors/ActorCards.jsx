const ActorCards = ({ name, image, gender, country, birthday, deathday }) => {
  return (
    <div>
      <div>
        <img src={image} alt={name} />
      </div>
      <h1>
        {name}
        {!!gender && `(${gender})`}
      </h1>
      <p>{country ? `Come from ${country}` : 'no country known'}</p>
      {!!birthday && <p>Born on {birthday}</p>}
      <p>{deathday ? `Died on ${deathday}` : 'Alive'}</p>
    </div>
  );
};
export default ActorCards;