import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Results from './Results'
import Saved from './Saved'

/**
 * Use an url to get data through JSON, returns the data.
 * 
 * @param {String} yourUrl 
 */
function GetJsonData(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}

class Core extends Component {

    constructor(props) {
        super(props)

        let json_obj = JSON.parse(GetJsonData("https://raw.githubusercontent.com/henrysalas0106/Save-and-Remove-Data/master/rea/data_properties.json"))
        let resultsList = []
        let savedList = []

        // Iterate through the object
        let activeCollections = json_obj
        Object.keys(activeCollections).map(collectionKey => {
            //console.log(activeCollections)
            const features = activeCollections[collectionKey]
            Object.keys(features).map(featureKey => {
                    // Get the data needed for this project
                    const feature = features[featureKey]
                    const featureID = feature.id

                    // Allocate the data into a proper object for future use
                    Object.assign(feature, {FeatureID: featureID})
                if (collectionKey === "results") {
                    resultsList = [...resultsList, feature]
                } else if (collectionKey === "saved") {
                    savedList = [...savedList, feature]
                }
            })
        })
        this.state = {
            resultsList,
            savedList
        }
      }

  render() {
    return (
        <Container>
            <Row>
                <Col sm="6">
                    <Row>Results</Row>
                    <Row>
                        <Results
                            resultsList = {this.state.resultsList}
                        />
                    </Row>
                </Col>
                <Col sm="6">
                    <Row>Saved</Row>
                    <Row>
                    <Saved
                        savedList = {this.state.savedList}
                    />
                    </Row>
                </Col>
            </Row>
        </Container>
    )
  }
}

export default Core
