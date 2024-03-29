import { Link } from 'react-router-dom';

const ShowCards = ({ name, image, id, summary }) => {
  const summaryStrippes = summary
    ? summary.split('').slice(0, 10).join('').replace(/<.+?>/g, '') + '...'
    : 'No description';

  return (
    <div>
      <div>
        <img src={image} alt={name} />
      </div>
      <h1>
        hello
        {name}
        {id}
      </h1>
      <p>{summaryStrippes}</p>
      <div>
        <Link to={`/show/${id}`}>Read More</Link>
        <button type="button">Star me</button>
      </div>
    </div>
  );
};
export default ShowCards;
