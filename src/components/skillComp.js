import React from 'react';
//import scrollTo from 'gatsby-plugin-smoothscroll';
import sal from 'sal.js'
import './styles/styles.scss'
import "C:\\Users\\cleme\\Desktop\\New website\\Clone\\Portfolio\\node_modules\\sal.js\\dist\\sal.css"
import styled from 'styled-components'
import Moi from '../images/fondMe.jpg'
import { Container, Row} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Tabs, TabLink, TabContent } from 'react-tabs-redux';
import Waves from './styles/WavesTransition'


const Skill = () => {
  sal();
  var HTML = 90;
  var JS = 60;
  var PHP = 60;
  var SQL = 55;
  var ANG = 30;
  var SYM = 20;
  var C = 20;
  var CPP = 70;
  var JAVA = 60;
  var PYT = 40;
  var CS = 20;
  var OBJC = 20;
  var SWIFT = 50;
  var Dart = 70;
  var FLUT = 70; 
  return (
    <SectionMe id="skill">
      <div className="white-divider" />
      <h2 className="AboutPersonal__Heading">.about(<span id="me2">me.skill</span>)</h2>
        <Container className="AboutPersonal">
          <Row>
            <div className="AboutPersonal__LeftCol col-md-6">
              <div className="animated fadeIn">
                <div className="aboutPersonalImg">
                  <img src={Moi} className="mePhoto"></img>
                </div>
              </div>
            </div>
            <div className="AboutPersonal__RightCol col-md-6">
              <div className="animated fadeIn">
                <div className="tabs_container">
                  <Tabs>
                    <TabLink className="tabs" to="tab1" default>Web</TabLink>
                    <TabLink className="tabs" to="tab2">
                      Software
                    </TabLink>
                    <TabLink className="tabs" to="tab3">Mobile</TabLink>
                    <TabContent className="tab_content" for="tab1">
                      <div className="TabsPart">
                        <div className="TabPart">
                          <div className="progress-container">
                            <span className="progress_text">HTML/CSS</span>
                            <span className="progress_value">90%</span>
                            <div className="progress" style={{width: HTML + '%'}}></div>
                          </div>
                        </div>
                      </div>
                      <div className="TabsPart">
                        <div className="TabPart">
                          <div className="progress-container">
                            <span className="progress_text">JavaScript/JQuery</span>
                            <span className="progress_value">60%</span>
                            <div className="progress" style={{width: JS + '%'}}></div>
                          </div>
                        </div>
                      </div>
                      <div className="TabsPart">
                        <div className="TabPart">
                          <div className="progress-container">
                            <span className="progress_text">PHP</span>
                            <span className="progress_value">60%</span>
                            <div className="progress" style={{width: PHP + '%'}}></div>
                          </div>
                        </div>
                      </div>
                      <div className="TabsPart">
                        <div className="TabPart">
                          <div className="progress-container">
                            <span className="progress_text">SQL</span>
                            <span className="progress_value">55%</span>
                            <div className="progress" style={{width: SQL + '%'}}></div>
                          </div>
                        </div>
                      </div>
                      <div className="TabsPart">
                        <div className="TabPart">
                          <div className="progress-container">
                            <span className="progress_text">Angular/React/Gatsby</span>
                            <span className="progress_value">30%</span>
                            <div className="progress" style={{width: ANG + '%'}}></div>
                          </div>
                        </div>
                      </div>
                      <div className="TabsPart">
                        <div className="TabPart">
                          <div className="progress-container">
                            <span className="progress_text">Symfony</span>
                            <span className="progress_value">20%</span>
                            <div className="progress" style={{width: SYM + '%'}}></div>
                          </div>
                        </div>
                      </div>
                    </TabContent>
                    <TabContent className="tab_content" for="tab2">
                    <div className="TabsPart">
                        <div className="TabPart">
                          <div className="progress-container">
                            <span className="progress_text">C++</span>
                            <span className="progress_value">70%</span>
                            <div className="progress" style={{width: CPP + '%'}}></div>
                          </div>
                        </div>
                      </div>
                      <div className="TabsPart">
                        <div className="TabPart">
                          <div className="progress-container">
                            <span className="progress_text">Java</span>
                            <span className="progress_value">60%</span>
                            <div className="progress" style={{width: JAVA + '%'}}></div>
                          </div>
                        </div>
                      </div>
                      <div className="TabsPart">
                        <div className="TabPart">
                          <div className="progress-container">
                            <span className="progress_text">Python</span>
                            <span className="progress_value">40%</span>
                            <div className="progress" style={{width: PYT + '%'}}></div>
                          </div>
                        </div>
                      </div>
                      <div className="TabsPart">
                        <div className="TabPart">
                          <div className="progress-container">
                            <span className="progress_text">C#</span>
                            <span className="progress_value">20%</span>
                            <div className="progress" style={{width: CS + '%'}}></div>
                          </div>
                        </div>
                      </div>
                      <div className="TabsPart">
                        <div className="TabPart">
                          <div className="progress-container">
                            <span className="progress_text">C</span>
                            <span className="progress_value">20%</span>
                            <div className="progress" style={{width: C + '%'}}></div>
                          </div>
                        </div>
                      </div>
                    </TabContent>
                    <TabContent className="tab_content" for="tab3">
                    <div className="TabsPart">
                        <div className="TabPart">
                          <div className="progress-container">
                            <span className="progress_text">Dart</span>
                            <span className="progress_value">70%</span>
                            <div className="progress" style={{width: Dart + '%'}}></div>
                          </div>
                        </div>
                      </div>
                      <div className="TabsPart">
                        <div className="TabPart">
                          <div className="progress-container">
                            <span className="progress_text">Swift</span>
                            <span className="progress_value">50%</span>
                            <div className="progress" style={{width: SWIFT + '%'}}></div>
                          </div>
                        </div>
                      </div>
                      <div className="TabsPart">
                        <div className="TabPart">
                          <div className="progress-container">
                            <span className="progress_text">Objective-C</span>
                            <span className="progress_value">20%</span>
                            <div className="progress" style={{width: OBJC + '%'}}></div>
                          </div>
                        </div>
                      </div>
                      <div className="TabsPart">
                        <div className="TabPart">
                          <div className="progress-container">
                            <span className="progress_text">Flutter</span>
                            <span className="progress_value">70%</span>
                            <div className="progress" style={{width: FLUT + '%'}}></div>
                          </div>
                        </div>
                      </div>
                    </TabContent>
                  </Tabs>
                </div>
              </div>
            </div>
          </Row>
        </Container>
        <Waves />
    </SectionMe>
  )
};

export default Skill

export const SectionMe = styled.section`
  padding: 3em;
  height: 100vh;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  padding-top: 50px;
  @media (max-width: 1440px){
    height: 100%;
  }
`