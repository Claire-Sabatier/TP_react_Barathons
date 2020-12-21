import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IBarathon, IPub } from '../types/api';
import BarathonForm from './BarathonForm';
import ListeDesBarathons from './ListeDesBarathons';
import Section from './Section';

const SContainer = styled.div`
    height: 100%;
    width: 100%;
    padding: 15px;
`;

const App = (): JSX.Element => {
    // Déclaration d'une nouvelle variable d'état interne : pubs
    // RAPPEL: un changement d'état du composant provoque
    //         son re-rendu
    const [pubs, setPubs] = useState<IPub[]>([]);
    const [barathons, setBarathons] = useState<IBarathon[]>([]);

    // fonction executé au montage du composant
    // dans le DOM
    useEffect(() => {
        // obligé d'utiliser une fonction passe-plat pour le code asynchrone
        const fetchPubs = async (): Promise<void> => {
            const response = await fetch('https://miw-server.herokuapp.com/pubs');
            const pubs = await response.json();
            setPubs(pubs);
        };

        fetchPubs();
    }, []);

    useEffect(() => {
        const fetchBarathons = async (): Promise<void> => {
            const response = await fetch('https://miw-server.herokuapp.com/barathons');
            const barathons = await response.json();
            setBarathons(barathons);
        };

        fetchBarathons();
    }, []);

    const addBarathon = (barathon: IBarathon):void => {
        setBarathons([...barathons, barathon]);
    };

    return (
        <SContainer>
            <Section>
                <BarathonForm pubs={pubs} addBarathon={addBarathon}/>
            </Section>
            <Section>
                <ListeDesBarathons pubs={pubs} barathons={barathons} />
            </Section>
        </SContainer>
    );
};

const SPubsContainer = styled.div`
    display: flex; 
`;

export default App;