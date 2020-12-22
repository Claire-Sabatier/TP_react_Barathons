import React from 'react';
import chroma from 'chroma-js';
import styled from 'styled-components';
import { colors } from '../styles/colors';

interface IProps {
    type: "button" | "submit" | "reset";
    children: string;
    onClick?: () => void;
}

const Button = ({ type, children, onClick }: IProps): JSX.Element => {
    return (
        <SButton type={type} onClick={onClick}>{children}</SButton>
    );
};

const SButton = styled.button`
    height: 30px;
    margin-left: 2%;
    padding: 0 15px;
    border-radius: 4px;
    border: none;
    background-color: ${colors.vibrant};
    color: ${colors.vert_fonce};
    cursor: pointer;
    filter: drop-shadow(0 1px 2px ${chroma(colors.vert_fonce).alpha(0.5).css()});
`;

export default Button;