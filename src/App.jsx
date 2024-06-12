import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Chart as ChartJS, defaults} from 'chart.js/auto'
import {Bar, Doughnut, Line} from 'react-chartjs-2'
import sourceData from './data/sourceData.json'
import revenueData from './data/revenueData.json'

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <div className='dataCard revenueCard'>
        <Line 
          data={{
            labels: revenueData.map((data) => data.label),
            datasets: [{
              label: 'Revenue',
              data: revenueData.map((data) => data.revenue),
              backgroundColor: '#064ff0',
              borderColor: '#064ff0',
              pointBorderWidth: 2,
              pointHoverRadius: 10,
            },
            {
              label: "Cost",
              data: revenueData.map((data) => data.cost),
              backgroundColor: '#e64a19',
              borderColor: '#e64a19',
              pointBorderWidth: 2,
              pointHoverRadius: 10,
            }
            ]
          }}
          options = {{
            elements:{
              line:{
                tension: .3
              }
            },
            plugins:{
              title:{
                text: "Monthly Revenue & Cost"
              }
            }
          }}
        />
      </div>

      <div className='dataCard customerCard'>
        <Bar 
          data={{
            labels: sourceData.map((data) => data.label),
            datasets: [
              {
                label: 'Count',
                data: sourceData.map((data) => data.value),
                backgroundColor: [
                  "rgba(43, 63, 229, 0.8)",
                  "rgba(250, 192, 19, 0.8)",
                  "rgba(253, 135, 135, 0.8)",
                ],
                borderRadius: 5,
            },
              
            ]
          }}
          options = {{
            plugins:{
              title:{
                text: "Revenue source"
              }
            }
          }}
        />
      </div>

      <div className='dataCard categoryCard'>
        <Doughnut 
            data={{
              labels: sourceData.map((data) => data.label),
              datasets: [
                {
                  label: 'Count',
                  data: sourceData.map((data) => data.value),
                  backgroundColor: [
                    "rgba(43, 63, 229, 0.8)",
                    "rgba(250, 192, 19, 0.8)",
                    "rgba(253, 135, 135, 0.8)",
                  ],
                  borderColor: [
                    "rgba(43, 63, 229, 0.8)",
                    "rgba(250, 192, 19, 0.8)",
                    "rgba(253, 135, 135, 0.8)",
                  ]
              },
                
              ]
            }}
            options = {{
              plugins:{
                title:{
                  text: "Revenue sources"
                }
              }
            }}
          />
      </div>
    </div>
  )
}

export default App
