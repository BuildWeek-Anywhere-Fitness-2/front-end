import styled from 'styled-components'

const Button = styled.button`
background-color: red;
    padding: 6px 10px;
    margin: 5px;
    border: none;
    border-radius: 3px;
    color: white;
    transition: all 0.2s ease-in-out;
    &:hover {
    background-color: black;
    color: white;
    transition: all 0.2s ease-in-out;
    }
`

export default Button;