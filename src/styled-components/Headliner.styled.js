import styled from "styled-components";

//Destructuring

export const StyledHeadliner = styled.h2`
  color: ${({ bg }) => bg};
  padding: 40px 0;
  width: fit-content;
  display: block;
  margin: 0 auto;
  font-weight: bold;
  text-align: center;

  &:hover {
    color: #4169e1;
  }
`;
