import styled from "styled-components";

interface CardTradeContainerProps {
    $color: string
}

export const CardTradeContainer = styled.div<CardTradeContainerProps>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${(props) => props.theme[props.$color]};
`

export const CardTradeContent = styled.div`
    display: flex;
    gap: 20px

    & div {
        display: flex;
        flex-direction: column;
        gap: 10px 
    }

    & p {
        font-size: 1.5rem;
        font-weight: bold;
        ${(props) => props.theme["gray-900"]};
    }

    & img {
        width: 300px;
        height: 300px;
    }
` 