import React, { Component } from "react";
import "./Component.css";
import { Container, Col, Row } from 'react-grid-system';

class Interest extends Component {
  render() {
    return (
        <Container>
        <div className="headline">
        <Row style={{padding: '10px'}}>
                <Col sm={12}>
                <b>Articles Based On Preferences</b>
    
    <p className='yomama'><span className="headlinemeta">A few articles we feel you might like.<br/>
    <hr className="solid"/>
    <b><span style={{fontSize: '120%'}}>US military admits it killed 10 civilians and targeted wrong vehicle in Kabul airstrike</span></b><br/>
    <i>Published September 18, 2021 ~
    </i> McKenzie told reporters that the strike, which he said killed seven children, was a "mistake" and offered...<br/>
   
    <button className="articlebutton">Read The Summarized Article</button>
    <br/><br/>
    <b><span style={{fontSize: '120%'}}>A Voter's Guide to the 2021 Canadian Federal Election</span></b><br/>
    <i>Published September 18, 2021 ~
    </i> Still undecided about which federal party for whom you should cast your vote? Here’s everything you need to know before the 2021 federal election on Sept. 20...<br/>
   
    <button className="articlebutton">Read The Summarized Article</button>
    <br/><br/>
    <b><span style={{fontSize: '120%'}}>Why We Can't Stop Fighting Cancel Culture</span></b><br/>
    <i>Published September 18, 2021 ~
    </i> This look at the origins and mainstreaming of cancel culture has continued relevance, but the discourse around cancel culture has evolved. It’s common to compare cancel culture to “call-out culture”...<br/>
   
    <button className="articlebutton">Read The Summarized Article</button>
    <br/><br/>
    <b><span style={{fontSize: '120%'}}>The Introduction of Vaccine Passports</span></b><br/>
    <i>Published September 18, 2021 ~
    </i> Ontario officials have released more guidance on the implementation of the province's proof-of-vaccination system, which comes into effect on Sept. 22...<br/>
   
    <button className="articlebutton">Read The Summarized Article</button>
    </span></p>
                </Col>
            </Row>
    </div>
    </Container>
    );
  }
}

export default Interest;