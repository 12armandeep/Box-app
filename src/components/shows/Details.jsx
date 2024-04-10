import styled from 'styled-components';
const Details = props => {
  const { status, premiered, network } = props;
  return (
    <DetailWrapper>
      <p>Status : {status}</p>
      <p>
        Premiered {premiered} {!!network && `on ${network.name}`}
      </p>
    </DetailWrapper>
  );
};
export default Details;

const DetailWrapper = styled.div`
  p {
    margin: 5px 0;
  }
`;
