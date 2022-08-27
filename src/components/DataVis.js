import React from "react";
import ReactApexChart from "react-apexcharts";

export default class DataVis extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
          data: [53,42,88,14,77,68,43]
        }],
        options: {
          chart: {
            height: 350,
            type: 'bar',
            events: {
              click: function(chart, w, e) {
                // console.log(chart, w, e)
              }
            }
          },
          plotOptions: {
            bar: {
              columnWidth: '45%',
              distributed: true,
            }
          },
          dataLabels: {
            enabled: false
          },
          legend: {
            show: false
          },
          xaxis: {
            categories: [
              ['2021-07-11'],
              ['2021-07-12'],
              ['2021-07-13'],
              ['2021-07-14'],
              ['2021-07-15'],
              ['2021-07-16'],
              ['2021-07-17']
              
            ],
            labels: {
              style: {
                fontSize: '12px'
              }
            }
          }
        },
      
      
      };
    }

  

    render() {
      return (
        

  <div id="chart">
  <p style={{marginTop:"30px"}}>Sales</p>
<ReactApexChart style={{paddingLeft:"20px"}} options={this.state.options} series={this.state.series} type="bar" height={350} />
<p style={{marginLeft: "625px"}}>Date</p>
</div>


      );
    }
  }