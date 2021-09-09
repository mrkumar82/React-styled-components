import styled from "styled-components";

export default styled.button`
  font-size: 20px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.backgroundColor};
  padding: 5px 20px;
  color: #fff;
  border: 0px;
  &:hover {
    background: #eee;
    color: #1a73e8;
    transition: all 0.2s;
  }
`;
