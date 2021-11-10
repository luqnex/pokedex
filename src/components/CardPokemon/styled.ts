import styled from 'styled-components'

export const Card = styled.div`
    width: 250px;
    height: 300px;
    border: 1px solid black;
    border-radius: 8px;
    margin: 10px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    transition: .3s;

    :hover {
        cursor: pointer;
        margin-top: -3px;
    }

    img {
        width: 150px;
        height: 100px;
    }
`