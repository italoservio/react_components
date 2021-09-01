import styled from "styled-components";

export const Button = styled.button`
  padding: .5rem 1rem;
  cursor: pointer;
  border: 0;
  border-radius: 2px;
  border-bottom: 2px solid #ccc;
  border-right: 1px solid #ccc;

  &:active {
    box-shadow: none;
    border-bottom: 0;
    border-right: 0;
    border-top: 1px solid #ccc;
    border-left: 1px solid #ccc;
  }
`