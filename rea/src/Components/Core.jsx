import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Results from './Results'
import Saved from './Saved'

class Core extends Component {
  render() {
    return (
        <Container>
            <Row>
                <Col sm="6">Results</Col>
                <Col sm="6">Saved Properties</Col>
            </Row>
            <Row>
                <Col sm="6">
                    <Results />
                </Col>
                <Col sm="6">
                    <Saved />
                </Col>
            </Row>
        </Container>
    )
  }
}

export default Core