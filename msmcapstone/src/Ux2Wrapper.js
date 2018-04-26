import React from "react"
import Ux2 from "/Users/mitchellgillin/Desktop/msmcapstonespring/msmcapstone/src/Ux2.js"
import Ux2Generator from "./Ux2Generator.js"
import MyHeader from "./MyHeader.js";
import { Row, Col } from "antd"

export default class UX2Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //{name,dailyDose,completed}
      ux2array: [{ name: "Advil", dailyDose: 4, completed: false }, { name: "Vicodin", dailyDose: 2, completed: false }]
    }
  }

  addDrugToArray = (drugDetails) => {
    let ux2arrayTemp = this.state.ux2array.slice();
    ux2arrayTemp.push(drugDetails);
    console.log(ux2arrayTemp);
    this.setState({
      ux2array: ux2arrayTemp
    })
  }

  removeDrugFromArray = (drugName) => {
    let removedArray = this.state.ux2array.filter(function (el) {
      return el.name !== drugName;
    });
    this.setState({
      ux2array: removedArray
    })
  }


  render() {
    return (
      <div >
        <MyHeader />
        <Ux2Generator addDrugToArray={(obj) => this.addDrugToArray(obj)} />
        <Row type="flex" justify="space-around" align="center">
          {this.state.ux2array.map((treatment) =>
            <Col >
              <Ux2
                key={treatment.name + treatment.dailyDose}
                name={treatment.name}
                dailyDose={treatment.dailyDose}
                completed={treatment.completed}
                removeDrugFromArray={this.removeDrugFromArray} />
            </Col>
          )}

        </Row>
      </div>
    )
  }
}