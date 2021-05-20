import React from 'react';
import './styles/styles.scss'
import './styles/expStyle.scss'
import styled from 'styled-components'
import { Row, Col} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'


const Experiences = () => (
    <Expsection id="experiences">
        <div className="container">
            <div className="dark-divider" />
            <h2 className="AboutPersonal__Heading-dark">.<span id="me2">experiences</span>()</h2>
            <Row className="exp-container">
                <Col sm="4">
                    <div className="education-block">
                        <h5>2020 - 2021 (4 month)</h5>
                        <FontAwesomeIcon icon={faBriefcase} />
                        <h3>CESI - Écully</h3>
                        <h4>Internship as part of my study at CESI</h4>
                        <div className="dark-divider" />
                        <p>Creation of a cross-plateform application based on IOS & Android</p>
                        <p>Technologies and methods approach : <br />- Flutter<br />- Agile/SCRUM<br />- UML</p>
                        <a href="https://lyon.cesi.fr" id="resp1" class="btn btn-default" target="_blank">See Entreprise Website</a>
                    </div>
                </Col>
                <Col sm="4">
                    <div className="education-block">
                        <h5>2020 (2 month)</h5>
                        <FontAwesomeIcon icon={faBriefcase} />
                        <h3>VitaVINUM - Dijon</h3>
                        <h4>Internship as part of my study at CESI</h4>
                        <div className="dark-divider" />
                        <p>PHP module modification and addition for customer WordPress website</p>
                        <p>Bugfix on some PHP web app<br/>&nbsp;<br />&nbsp;<br/>&nbsp;</p>
                        <a href="https://etoh.fr/en/" id="resp2" class="btn btn-default" target="_blank">See Entreprise Website</a>
                    </div>
                </Col>
                <Col sm="4">
                    <div className="education-block">
                        <h5>2017 (1 week)</h5>
                        <FontAwesomeIcon icon={faBriefcase} />
                        <h3>SLIB - Lyon</h3>
                        <h4>Work placement without school</h4>
                        <div className="dark-divider" />
                        <p>Discovery some project based on blockchain</p>
                        <p>Discovery teamworking on all project</p>
                        <p>Discovery AS40 and IBM i Langages<br />&nbsp;</p>
                        <a href="https://www.slib.com" id="resp3" class="btn btn-default" target="_blank">See Entreprise Website</a>
                    </div>
                </Col>
            </Row>
        </div>
    </Expsection>
  )
  
  export default Experiences

  export const Expsection = styled.section`
  background-color: #EDF2F4;
  padding: 3em;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  padding-top: 50px;
  @media (max-width: 1440px){
    height: 100%;
  }
`