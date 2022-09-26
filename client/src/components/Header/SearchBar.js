import { React, useEffect, useState, useContext } from 'react'
import styled from 'styled-components'

const SearchBar = () => {
    //hooks
    const [inputVal, setInputVal] = useState('');

    const handleChange = (e) => {
        e.preventDefault()
        setInputVal(e.target.value)
    }

    const handleClick = (e) => {
        setInputVal(inputVal);
        setInputVal('')
    }


    return (
        <Form>
            <SearchInput
                type='text'
                placeholder='Search for recipes..'
                onChange={handleChange}
                value={inputVal}
            >
            </SearchInput>
            <Button type='submit' onClick={handleClick}></Button>
        </Form>
    );
}

export default SearchBar;

const SearchInput = styled.input`
    width: 50%;
    height: 30px;
    border-radius: 999px;
    border-color: #FE3636;
    border: solid 2.1px;
    color: #FE3636;
    font-size: 17px;
    font-family: 'Kanit', sans-serif;
    text-indent: 5px;
    :focus-within{
        /* box-shadow: 0 0px 3px 1px #FE3636; */
        outline: 0;
    }
`

const Form = styled.form`
    display: flex;
    flex-direction: row;
    flex: .8;
`

const Button = styled.input`
    visibility: hidden;
`