import React from 'react';
import chroma from 'chroma-js';
import styled from 'styled-components';
import { colors } from '../styles/colors';
import { IPub } from '../types/api';
import Button from './Button';

interface IProps {
    pub: IPub;
    addPub?: (id: string) => void;
    removePub?: (id: string) => void;
}

const PubThumbnail = ({ pub, addPub, removePub }: IProps): JSX.Element => {
    const { name, img, description, _id } = pub;
    return (
        <SThumbnail>
            <SContent>
                <SDescription>{name}</SDescription>
            </SContent>

            
            <Button
                type='button'
                onClick={(): void => {
                    addPub(_id);
                }}
            >
                +
            </Button>
            
           <Button
                type='button'
                onClick={(): void => {
                    removePub(_id);
                }}
            >  Retirer
            </Button>
            
        </SThumbnail>
    );
};

const THUMBNAIL_WIDTH = 150;
const THUMBNAIL_MAX_HEIGHT = 100;

const SDescription = styled.p`
    text-align: center;
    color:white;
    font-weight: bold;
    font-size: 18px;
`;

const SContent = styled.div`
    box-sizing: border-box;
`;


const SThumbnail = styled.a`
    display: block;
    border-radius: 4px;
    overflow: hidden;
    background: ${chroma(colors.grey).alpha(0.5).css()};
    width: ${THUMBNAIL_WIDTH}px;
    max-height: ${THUMBNAIL_MAX_HEIGHT}px;
    overflow: auto;
`;

export default PubThumbnail;