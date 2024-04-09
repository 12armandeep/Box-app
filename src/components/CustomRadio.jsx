import styled from 'styled-components';
const CustomRadio = ({ label, ...imputlbls }) => {
  return (
    <StyledRadio>
      {label}
      <input {...imputlbls} type="radio" />
      <span />
    </StyledRadio>
  );
};

export default CustomRadio;

const StyledRadio = styled.label`
  display: block;
  position: relative;
  padding-left: 25px;
  cursor: pointer;
  font-size: 13px;
  user-select: none;
  font-weight: 700;
  line-height: 1.5;
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
  span {
    position: absolute;
    top: 1px;
    left: 0;
    height: 16px;
    width: 16px;
    background-color: #fff;
    border: 2px solid blue;
    border-radius: 50%;
  }
  input:checked ~ span {
    background-color: #fff;
    border: 2px solid blue;
  }
  span:after {
    content: '';
    position: absolute;
    display: none;
  }
  input:checked ~ span:after {
    display: block;
  }
  span:after {
    top: 4px;
    left: 4px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: blue;
  }
`;
