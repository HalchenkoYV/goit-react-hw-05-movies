import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.main`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;



export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: blue;
  }
`;


export const CardWrapper = styled.li`
  border: 1px solid black;
  border-radius: 4px;

  > a {
    text-decoration: none;
  }
`;

export const ProductName = styled.h3`
  padding: 4px;
  margin-top: 8px;
  margin-bottom: 0;
  color: black;
`;