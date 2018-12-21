import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const options = {
  title: {
    text: 'My chart'
  },
  series: [{
    data: [1, 2, 3]
  }]
}


export default class Example extends Component {
    componentDidMount(){
        axios.get('/days').then(function (response) {
            console.log(response);
            var today = response.data.today;
            var last_week = response.data.last_week;
          
            // axios.get(
            // `https://free.currencyconverterapi.com/api/v6/convert?q=USD_PHP,PHP_USD&compact=ultra&date=${today}&endDate=${last_week}`
            // ).then(function (response) {
            //     console.log('RESPUESTA API');
            //     console.log(response);
            // })
          })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="panel panel-default">
                            <div className="panel-heading">Example Component</div>

                            <div className="panel-body">I'm an example component!</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
