
import {StyledList, StyledLink } from "./Navigation.styled";

  const Navigation=()=>{
    return(
        <nav>
            <StyledList>
                <StyledLink to='/'>Home</StyledLink>
                <StyledLink to='/movies'>Movies</StyledLink>
            </StyledList>
        </nav>
    )
}

export{Navigation}