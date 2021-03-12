import React, { useEffect, useState } from 'react';
import './Home.css';
import Team from '../Team/Team';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';
import Banner from '../Banner/Banner';

const Home = () => {

    const [teams, setTeams] = useState([]);

    useEffect(() => {
        const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League'
        fetch(url)
            .then(res => res.json())
            .then(data => setTeams(data.teams))
    }, [])
    return (
        <div className="home">
            
        <Banner></Banner>
            <Container>
                <Row>
                    {
                        teams.map(team => <Team team={team} key={team.idTeam}></Team>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Home;