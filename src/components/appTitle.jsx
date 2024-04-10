import styled from 'styled-components';
const AppTitle = props => {
  const {
    title = 'BOX OFFICE',
    subtitle = 'Are you looking for a movie or an actor?',
  } = props;
  return (
    <TitleWrapper>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </TitleWrapper>
  );
};
export default AppTitle;

const TitleWrapper = styled.div`
  text-align: center;
  margin: 0 0 40px;
  h1 {
    color: blue;
    letter-spacing: 8px;
    text-transfrom: uppercase;
    margin: 0 0 10px;
  }
  p {
    color: dark;
    margin: 0;
  }
`;
