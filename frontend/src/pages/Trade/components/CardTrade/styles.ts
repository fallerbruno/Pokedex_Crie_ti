import styled from "styled-components";

interface CardTradeContainerProps {
    $color: string
}

export const CardTradeContainer = styled.div<CardTradeContainerProps>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${(props) => props.theme[props.$color]};
    margin-top: 50px;
    border-radius: 16px;
`

export const CardTradeContent = styled.div`
    display: flex;
    gap: 20px;

    & div {
        display: flex;
        flex-direction: column;
        gap: 10px;
        justify-content: center;
        align-items: center;
    }

    & p {
        font-size: 1.5rem;
        font-weight: bold;
        color: ${(props) => props.theme["gray-900"]};
    }

    & img {
        width: 250px;
        height: 250px;
    }
` 
