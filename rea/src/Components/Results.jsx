import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'reactstrap'        

class Results extends Component {

  render() {
    return (
        <Container>
            {
              this.props.resultsList.map((feature, featureKey) => {
                return (
                  <div key={featureKey} className="div-container">
                    <span>Price:</span><span>{feature.price}</span>
                    <img className="main-image" src={feature.mainImage} alt=""/>
                    <div className="hidden-button">
                      <Button
                        color="primary"
                        onClick={() => this.props.saveData(feature)}
                      >
                      Save
                      </Button>
                    </div>
                  </div>
                )
              })
            }
        </Container>
    )
  }
}

export default Results