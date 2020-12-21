import React from 'react';
import styled from 'styled-components';
import { colors } from "../styles/colors";
import { IBarathon } from '../types/api';
import Button from './Button';

interface IBarathonSeul {
    barathon: IBarathon;
    setSelectedBarathon?: (barathon: IBarathon) => void;
}

const BarathonSeul = ({ barathon, setSelectedBarathon }: IBarathonSeul): JSX.Element => {
    return (
        <>
            <p>
                <Snom>{barathon.name} de <Sb>{barathon.author} </Sb> </Snom>
                <Button
                    type="button"
                    onClick={() :void => {
                        setSelectedBarathon && setSelectedBarathon(barathon);
                    }}
                >
                    Voir le parcours
                </Button>
            </p>
        </>
    );
};

const Snom = styled.p`
    color: ${colors.vert_clair};
`;
const Sb = styled.b`
    color: ${colors.vibrant};
`;

export default BarathonSeul;