import React from 'react'
import { Chart, CommonSeriesSettings, Series, Export, Legend, Point } from 'devextreme-react/chart';

const LineChart=(props)=>{
    const { chartData, title, argumentField, valueField }=props
    return  <Chart
    id="chart"
    dataSource={chartData}
    stickyHovering={false}
    title={title}
  >
    <CommonSeriesSettings
      argumentField={argumentField}
      type="spline"
      hoverMode="includePoints"
    >
      <Point hoverMode="allArgumentPoints" />
    </CommonSeriesSettings>
    <Series valueField={valueField} />;
    <Export enabled={true} />
    <Legend
      verticalAlignment="bottom"
      horizontalAlignment="center"
      hoverMode="excludePoints"
    />
  </Chart>
}


export{
    LineChart
}