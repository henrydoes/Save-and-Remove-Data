import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'reactstrap'

class Saved extends Component {
  render() {
    return (
      <Container>
            {
              this.props.savedList.map((feature, featureKey) => {
                return (
                  <div key={featureKey} className="div-container">
                    <span>Price:</span><span>{feature.price}</span>
                    <img className="main-image" src={feature.mainImage} alt=""/>
                    <div className="hidden-button">
                      <Button 
                        color="danger"
                        onClick={() => this.props.removeData(feature)}
                      >
                      Remove
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

export default Saved