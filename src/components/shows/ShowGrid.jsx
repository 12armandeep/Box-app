import ShowCards from './ShowCards';
const ShowGrid = ({ shows }) => {
  console.log(shows);
  return (
    <div>
      {shows.map(data => {
        <ShowCards
          key={data.show.id}
          id={data.show.id}
          name={data.show.name}
          image={
            data.show.image ? data.show.image.medium : '/not-found-image.png'
          }
          summary={data.show.summary}
        />;
      })}
    </div>
  );
};

export default ShowGrid;
