import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Chart } from "react-google-charts";

class Example extends Component {
  
  constructor(props) {
    // Required step: always call the parent class' constructor
    super(props);

    // Set the state directly. Use props if necessary.
    this.state = {
      valores: {}
    }
  }

  componentDidMount(){
        axios.get('/days').then(function (response) {
            console.log(response);
            var today = response.data.today;
            var last_week = response.data.last_week;
            this.setState({valores: [1,7]})
          })
    }

  render() {
    return (
      <div className="App">
        <div className={"my-pretty-chart-container"}>
          <Chart
            chartType="Bar"
            data={[["Fecha", "Conversion"], 
                    ['2018-12-21',5]
                    ]}
            width="100%"
            height="400px"
            legendToggle
          />
        </div>
      </div>
    );
  }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}