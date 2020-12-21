  
import React, { useState } from "react";
import { IBarathon, IPub } from "../types/api";
import BarathonSeul from "./BarathonSeul";
import styled from 'styled-components';
import Map from './LeafletMap';
import { colors } from "../styles/colors";

interface IListeDesBarathons {
    barathons: IBarathon[];
    pubs: IPub[];
}

const ListeDesBarathons = ({ barathons, pubs }: IListeDesBarathons): JSX.Element => {
    const [selectedBarathon, setSelectedBarathon] = useState<IBarathon>(null);

    const selectBarathon = (pub: IBarathon): void => {
        setSelectedBarathon(pub);
    };

    const selectedPubs: IPub[] = selectedBarathon != null ? selectedBarathon.checkpoints.map(c => { return pubs.find(p => p._id == c);}) : [];

    return (
        <>
            <Sh1>Liste des Barathons</Sh1>
            <Sp><i>(Il est possible que le parcours soit pour le moment vide, il sera rempli très prochainement)</i></Sp>
            <div style={{ display: "flex" }}>
                
                <SecondeMap>
                    {barathons.map((barathon) => {
                        return <BarathonSeul key={barathon._id} setSelectedBarathon={selectBarathon} barathon={barathon} />;
                    })}
                </SecondeMap>
                <SecondeMap>
                    <Map pubs={selectedPubs} selectedPubs={selectedPubs}/>
                </SecondeMap>
            </div>
        </>
    );
};

const Sh1 = styled.h1`
    color: ${colors.white}; 
    text-align: center;
`;

const Sp = styled.p`
    color: ${colors.vieux_rose};
    text-align: center;
`;
const SecondeMap = styled.div`
    margin-left: 25px;
    width: 50%;
`;

export default ListeDesBarathons;