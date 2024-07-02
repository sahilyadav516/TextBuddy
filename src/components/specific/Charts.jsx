import React from 'react'
import {Line,Doughnut} from 'react-chartjs-2'
import {
    Chart as ChartJS,
    Tooltip,
    Filler,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Legend,

} from 'chart.js'
import { Grid3x3 } from '@mui/icons-material';
import { getLast7days } from '../../lib/features';
const labels=getLast7days();
ChartJS.register(
    Tooltip,
    Filler,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Legend,
);

const lineChartOptions={
    responsive:true,
    plugins:{
        legend:{
            display:false,
        },
        title:{
            display:false,
        },
    },

    scales:{
        x:{
            grid:{
                display:false,
            },
        },
        y:{
            beginAtZero:true,
            grid:{
                display:false,
            },
        },
    },
};
const LineChart = ({value=[]}) => {
    const data={
        labels,
        datasets:[
            {
                data:value,
                label:"revenue",
                fill:true,
                backgroundColor:"rgba(75,12,192,0.2)",
                borderColor:"rgba(75,12,192,1)",

            },
        ],
    };
  return <Line data={data} options={lineChartOptions}/>

};
const doughnutChartOptions={
    responsive:true,
    plugins:{
        legend:{
            display:false,
        },
        title:{
            display:false,
        },
    },

    cutout:130,
};
const DoughnutChart = ({value=[],labels=[]}) => {
    const data={
        labels,
        datasets:[
            {
                data:value,
                label:"Total chats vs Group chats",
                fill:true,
                backgroundColor:["#1D4ED8","rgba(29, 216, 78, 0.4)"],
                hoverBackgroundColor:["rgba(29, 78, 216, 0.4)","#e0ffcd"],
                // borderColor:["rgba(75,12,192,0.2)","rgba(75,12,192,1)"],
                offset:20
            },
        ],
    };
    return <Doughnut style={{zIndex:10}} data={data} options={doughnutChartOptions}/>
     
    
  };

export {LineChart,DoughnutChart};
