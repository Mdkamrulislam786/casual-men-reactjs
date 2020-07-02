import React from 'react'
import {Card} from 'react-bootstrap'
import './FeatureCard.css'


const FeatureCard = (props) => {
    return (
        <div className="FeatureCard">
            <Card
                style={{
                  width: "18rem",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  overflow:'hidden'
                }}
              >
                <div className="cardImg">
                <Card.Img variant="top" src={props.image} className="ppImage" />
                </div>
                <Card.Body>
                  <div className="d-flex flex-column">
                    <div style={{paddingBottom:'10px'}} className="d-flex flex-row justify-content-between">
                      <p>
                        <b>{props.title}</b>
                      </p>
                      <h6>{props.price}</h6>
                    </div>
                    <div className="colors-circle">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
        </div>
    )
}

export default FeatureCard
