import React from 'react';
import styled from 'styled-components';
import chroma from 'chroma-js';
import { colors } from '../styles/colors';

interface IProps {
    children: JSX.Element;
}

const Section = ({ children }: IProps): JSX.Element => {
    return (
        <SSection>
            {children}
        </SSection>
    );
};

const SSection = styled.div`
    border-radius: 33px;
    max-width: 1100px;
    padding: 30px;
    background: ${chroma(colors.vert_fonce).alpha(0.2).css()};
    border: 3px solid ${colors.vibrant};
    margin: 30px auto;
`;

export default Section;