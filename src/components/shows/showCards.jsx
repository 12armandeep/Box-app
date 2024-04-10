import styled from 'styled-components';
import { SearchCard, SearchTmgWrapper } from '../common/SearchCard';
import { Staricon } from '../common/Staricon';
('../common/SearchCard');
const ShowCards = ({ name, image, id, summary, OnStarMeCLick, isStarred }) => {
  const summaryStrippes = summary
    ? summary.split('').slice(0, 10).join('').replace(/<.+?>/g, '') + '...'
    : 'No description';

  return (
    <SearchCard>
      <SearchTmgWrapper>
        <img src={image} alt={name} />
      </SearchTmgWrapper>
      <h1>{name}</h1>
      <p>{summaryStrippes}</p>
      <ActionSection>
        <a href={`/show/${id}`} target="_blank" rel="noreferrer">
          Read More
        </a>
        <StarBtn type="button" onClick={() => OnStarMeCLick(id)}>
          <Staricon active={isStarred} />
          {/* {isStarred ? 'UnStar me' : 'star me'} */}
        </StarBtn>
      </ActionSection>
    </SearchCard>
  );
};
export default ShowCards;

const ActionSection = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration: #000;
    color: #000;
    &:hover {
      text-decoration: blue;
      color: blue;
    }
  }
`;

const StarBtn = styled.button`
  outline: none;
  border: 1px solid #8c8c8c;
  border-radius: 15px;
  padding: 5px 20px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;
