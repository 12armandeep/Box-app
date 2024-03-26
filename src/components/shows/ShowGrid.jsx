// eslint-disable-next-line no-unused-vars
import showCards from './showCards';
const ShowGrid = ({ shows }) => {
  console.log(shows);
  return (
    <div>
      {shows.map(data => {
        <showCards
          key={data.shows.id}
          id={data.shows.id}
          name={data.shows.name}
          //   image ={data.show.image ? data.show.image.medium :'/not-found-image.png'}
          summary={data.shows.summary}
        />;
      })}
    </div>
  );
};

export default ShowGrid;
