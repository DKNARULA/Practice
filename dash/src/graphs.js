import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

function Graphs(){
    
const options = {
    title: {
      text: 'My stock chart'
    },
    series: [
      {
        data: [1, 2, 1, 4, 3, 6, 7, 3, 8, 6, 9]
      }
    ]
  };
  return(
    <div>
    <HighchartsReact
      highcharts={Highcharts}
      constructorType={'stockChart'}
      options={options}
    />
  </div>
  )
}
export default Graphs;