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
      valores: [0,0]
    }
  }

  componentWillMount(){
        axios.get('/days').then(response => {
            console.log(response);
            this.setState({valores: response.data});
          })
        
    }

  render() {
    console.log('STATE');
    console.log(this.state);
    return (
      <div className="App">
        <div className={"my-pretty-chart-container"}>
          <Chart
            chartType="LineChart"
            data={ 
                    this.state.valores
                    }
            options={{
                      title: 'USD respecto MXN',
                      chartArea: { width: '75%' },
                      hAxis: {
                        title: 'Fecha',
                        minValue: 10,
                      },
                      vAxis: {
                        title: 'Cambio',
                      },
                    }}
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