import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.main`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const H1 = styled.h1`
text-align: center
`;



export const Link = styled(NavLink)`
  display:flex;
  // padding: 8px 16px;
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
  display:flex;
  hight:300px;
  border: 1px solid black;
  border-radius: 4px;
  margin-bottom: 8px;
  

  > a {
    text-decoration: none;
    width:100%;
  }
`;

export const ProductName = styled.p`
  font-family: 'Fira Sans', sans-serif;
  // font-weight: bold;
  padding: 8px;
  margin-top: 8px;
  margin-bottom: 0;
  color: black;
  // text-align: center;
`;
export const Span = styled.span`
  font-family: 'Fira Sans', sans-serif;
  font-weight: bold;  
  // text-align: center;
`;

  
export const Img = styled.img`
  border-radius: 4px;
  width:150px;
`;

export const MoreInformation = styled.div`
// display   
`;