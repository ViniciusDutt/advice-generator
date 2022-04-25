import styled from "styled-components";
import {PauseFill} from '@styled-icons/bootstrap/PauseFill'
import {Dice5Fill} from '@styled-icons/bootstrap/Dice5Fill'

export const Container = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: min(100vw, 500px);
    padding: 16px 32px;
    background-color: var(--paper);
    border-radius: 9px;

    h3 {
        font-size: 12px;
        text-transform: uppercase;
        color: var(--primary)
    }
    p {
        font-size: 16px;
        font-weight: 700;
        color: var(--text);
        text-align: center;
    }
`;
export const Line = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    hr {
        width: 45%;
        height: 1px;
        background-color: var(--text);
        border: 0;
    }
`;

export const Circle = styled.div`
    display: flex;
    justify-content: center;
    padding: 12px;
    border-radius: 50%;
    background-color: var(--primary);
    margin-bottom: -35px
`;

export const PauseIcon = styled(PauseFill)`
    width: 16px;
    height: 16px;
    padding: 9px;
    fill: var(--text)
`;

export const DiceIcon =  styled(Dice5Fill)`
    width: 16px;
    height: 16px;
    fill: var(--background);
`;