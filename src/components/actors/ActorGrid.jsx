import ActorCards from './ActorCards';
import { FlexGrid } from '../common/flexGrid';
const ActorGrid = ({ actors }) => {
  return (
    <FlexGrid>
      {actors.map(data => (
        <ActorCards
          key={data.person.id}
          name={data.person.name}
          country={data.person.country ? data.person.country.name : 'null'}
          birthday={data.person.birthday}
          deathday={data.person.deathday}
          gender={data.person.gender}
          image={
            data.person.image
              ? data.person.image.medium
              : '/not-found-image.png'
          }
        />
      ))}
      ;
    </FlexGrid>
  );
};
export default ActorGrid;
