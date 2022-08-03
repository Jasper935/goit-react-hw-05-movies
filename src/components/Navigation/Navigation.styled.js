import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)`

flex-direction: row;
padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  
&.active {
    color: white;
    background-color: blue;
}`
  
  export const StyledList = styled.ul`
  padding: 15px;
  
  display: flex;
  border-bottom: 2px solid blue;
  `
