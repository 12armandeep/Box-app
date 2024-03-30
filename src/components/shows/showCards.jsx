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
        <a href={`/show/${id}`} target="_blank" rel="noreferrer">
          Read More
        </a>
        <button type="button">Star me</button>
      </div>
    </div>
  );
};
export default ShowCards;
