import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
const ShowCards = ({ name, image, id, summary }) => {
  const summaryStrippes = summary
    ? summary.split('').slice(0, 10).replace(/<.+?>/g, '')
    : 'No description';
  return (
    <div>
      <div>
        <img src={image} alt={name} />
      </div>
      <h1>
        {name}
        {id}
      </h1>
      <p>{summaryStrippes}</p>
      <div>
        <Link to="/">Read More</Link>
        <button type="button">Star me</button>
      </div>
    </div>
  );
};
export default ShowCards;
