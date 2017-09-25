import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Results from './Results'
import Saved from './Saved'

let resultsList = []
let savedList = []

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

        // Get data from json file
        let json_obj = JSON.parse(GetJsonData("https://raw.githubusercontent.com/henrysalas0106/Save-and-Remove-Data/master/rea/data_properties.json"))

        // Iterate through the object
        let activeCollections = json_obj
        Object.keys(activeCollections).map(collectionKey => {

            const features = activeCollections[collectionKey]
            Object.keys(features).map(featureKey => {
                    // Get the data needed for this project
                    const feature = features[featureKey]
                    const featureID = feature.id

                    // Allocate the data into a proper object for future use
                    Object.assign(feature, {FeatureID: featureID})

                // Separate data into two different lists: results and saved
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
        this.saveData = this.saveData.bind(this)
        this.removeData = this.removeData.bind(this)
      }

  saveData(feature) {
    // Remove from remove list
    let resultsList = Object.assign([], this.state.resultsList)
    let flag = null
    Object.keys(resultsList).map(id => {
        if (resultsList[id].id === feature.id){
            flag = id
        }
    })
    resultsList.splice(flag,1)

    // Save into saved list
    let savedList = Object.assign([], this.state.savedList)
    savedList = [...savedList, feature]

    this.setState({
        resultsList: resultsList,
        savedList: savedList
    })
  }

  removeData(feature) {
    
    // Remove from saved list
    const savedList = Object.assign([], this.state.savedList)
    let flag = null
    Object.keys(this.state.savedList).map(id => {
        if (savedList[id].id === feature.id){
            flag = id
        }
    })
    savedList.splice(flag,1)

    // Saved to results list
    let resultsList = Object.assign([], this.state.resultsList)
    resultsList = [...resultsList, feature]

    this.setState({
        resultsList,
        savedList
    })
  }

  render() {
    return (
        <Container>
            <Row>
                <Col sm="6" className="main-col">
                    <Row>RESULTS</Row>
                    <Row>
                        <Results
                            resultsList = {this.state.resultsList}
                            saveData = {this.saveData}
                        />
                    </Row>
                </Col>
                <Col sm="6" className="main-col">
                    <Row>SAVED</Row>
                    <Row>
                        <Saved
                            savedList = {this.state.savedList}
                            removeData = {this.removeData}
                        />
                    </Row>
                </Col>
            </Row>
        </Container>
    )
  }
}

export default Core
