const AppTitle = props => {
  const {
    title = 'Box App',
    subtitle = 'Are you looking for a movie or an actor?',
  } = props;
  return (
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
};
export default AppTitle;
