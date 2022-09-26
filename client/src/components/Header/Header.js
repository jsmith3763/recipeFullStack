import { React, useContext, useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import recipe_image from '../../images/recipe_image.png';
import styled from 'styled-components';
import SearchBar from './SearchBar';

const Header = () => {
    return (
        <HeaderContainer>
            {/* <Link to='/'> */}
            <HeaderLogoContainer>
                <RecipeLogo src={recipe_image} />
                <HeaderTitle>Welcome to Family Recipes</HeaderTitle>
            </HeaderLogoContainer>
            {/* </Link> */}
            <SearchBar />
        </HeaderContainer>
    );
}

export default Header;

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
`

const HeaderTitle = styled.h3`
    font-size: 22px;
    color: FE3636;
`

const HeaderLogoContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-right: 20px;
    margin-left: 20px;
    font-size: 22px;
    color: #FE3636;
    :hover{
        transform: scale(1.1);
    }
`

const RecipeLogo = styled.img`
    height: 60px !important;
    margin-right: 10px;
`



