import styled from 'styled-components'

export default styled.button`
    min-width: 10px;
    padding: 0px 15px;
    height:35px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--main);
    background: -webkit-linear-gradient(top, var(--main), var(--main-lighter));
    background: -moz-linear-gradient(top, var(--main), var(--main-lighter));
    background: linear-gradient(to bottom, var(--main), var(--main-lighter));
    color: #fff;
    cursor: pointer;
    border-radius: 5px;
    text-transform: uppercase;
    font-size: 0.9rem;

    &:hover {
        filter: brightness(90%);
    }
`