import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './TeamDetail.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import img1 from '../../Photo/male.png';
import img2 from '../../Photo/female.png';
import found from '../../Icon/found 1.png';
import flag from '../../Icon/flag (1) 1.png';
import football from '../../Icon/football (1) 1.png';
import gender from '../../Icon/male-gender-sign 1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'


const TeamDetail = () => {
    const { teamId } = useParams();

    const [team, setTeam] = useState({});
    console.log(teamId)
    const { strTeam, strTeamBadge, strCountry, strSport, strGender, intFormedYear, strDescriptionEN, strDescriptionES, strFacebook, strTwitter, strYoutube } = team;
    // console.log(team)

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setTeam(data.teams[0]))
    }, [teamId])

    return (
        <div className="team-container">
            <div className="team-banner banner">
                <img src={strTeamBadge} alt="" />
            </div>
            <Container className="mt-5">
                <Row className="first-row">
                    <Col className="team-info p-5">
                        <h2>{strTeam}</h2>
                        <p> <img src={found} alt="" /> Founded: {intFormedYear}</p>
                        <p> <img src={flag} alt="" /> Country: {strCountry}</p>
                        <p> <img src={football} alt="" /> Sport type: {strSport}</p>
                        <p> <img src={gender} alt="" /> Gender: {strGender}</p>
                    </Col>
                    <Col className="team-img p-5">
                        {
                            strGender && (strGender === 'Male' ? <img src={img1} alt="" /> : <img src={img2} alt="" />)
                        }
                    </Col>
                </Row>
                <Row className="second-row">
                    <Col>
                        <p>{strDescriptionEN}</p> <br />
                        <p>{strDescriptionES}</p>
                    </Col>
                </Row>
                <Row className="third-row">
                    <Col>
                        <a target="_blank" rel="noreferrer" href={`https://${strTwitter}`}><FontAwesomeIcon icon={faTwitter} /></a>
                        <a target="_blank" rel="noreferrer" href={`https://${strFacebook}`}><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a target="_blank" rel="noreferrer" href={`https://${strYoutube}`}><FontAwesomeIcon icon={faYoutube} /></a>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default TeamDetail;