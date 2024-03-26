import ActorCards from './ActorCards';
const ActorGrid = ({ actors }) => {
  return (
    <div>
      {actors.map(data => {
        <ActorCards
          key={data.person.id}
          name={data.person.name}
          country={data.person.country ? data.person.country.name : 'null'}
          birthday={data.person.birthday}
          deathday={data.person.deathday}
          image={
            data.show.image ? data.show.image.medium : '/not-found-image.png'
          }
        />;
      })}
      ;
    </div>
  );
};
export default ActorGrid;
