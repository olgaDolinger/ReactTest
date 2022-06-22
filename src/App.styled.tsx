import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavBar = styled.div`
    display: flex;
    flex-direction: row;
    height: 46px;
`

export const NavItem = styled(Link)`
    margin: 20px;
    color: #1d97d2;
    font-family: Helvetica Neue;
    text-decoration: none;

    &:focus, &:active {
        color: red;
    }
`

export const UserMenu = styled.div`
    margin-left: auto;
    padding-right: 20px
`

export const UserButton = styled.div`
    display: flex;
    justify-content: end;
`
