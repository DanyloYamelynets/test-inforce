import styled from "styled-components";

export const AddButton = styled.button`
  margin-left: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  max-width: 150px;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 10px;
  border: 2px solid #005c84bd;
  background-color: #ddeefd;
  font-size: 17px;
  font-weight: 700;
  color: #01155b;
  transition: 250ms;
  &:hover,
  &:focus {
    background-color: #0051ab;
    color: white;
    transition: 250ms;
  }
`;
