import React from 'react';
import './Team.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Card, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router';

const Team = (props) => {
    const { team } = props;
    const { strTeam, strSport, strTeamBadge, idTeam } = team;

    const history = useHistory();

    const handleClick = teamId => {
        const url = `/teamDetail/${teamId}`
        history.push(url);
    }

    return (
        <Col className="col">
            <Card className="card" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={strTeamBadge} />
                <Card.Body>
                    <Card.Title> <h2>{strTeam}</h2> </Card.Title>
                    <Card.Text>
                        <p>Sport type: {strSport}</p>
                    </Card.Text>
                    <Button onClick={() => handleClick(idTeam)} variant="primary">Explore <FontAwesomeIcon icon={faArrowRight} /></Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Team;