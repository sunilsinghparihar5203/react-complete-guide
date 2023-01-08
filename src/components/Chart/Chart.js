import React from 'react'
import './Chart.css'
import ChartBar from './ChartBar'

function Chart(props) {
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value)
  const totalMaximun = Math.max(...dataPointValues)
  return (
    <div className='chart'>
        {props.dataPoints.map(dataPoint => (
            <ChartBar 
                KEY={dataPoint.label}
                value={dataPoint.value} 
                maxValue={totalMaximun} 
                label={dataPoint.label}
                />
            )
         )}
    </div>
  )
}

export default Chart