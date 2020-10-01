import React from 'react'
import { Chart, CommonSeriesSettings, Series, Export, Legend, Point, ArgumentAxis, Label, ValueAxis, Title, Tooltip } from 'devextreme-react/chart';

const LineChart=(props)=>{
    const { chartData, title, argumentField, valueField,xAxisText }=props
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
    <Series valueField={valueField} />
    <ValueAxis position="left"> 
          <Title text={xAxisText}/>
    </ValueAxis>
    <Export enabled={true} />
    <Legend
      verticalAlignment="bottom"
      horizontalAlignment="center"
      hoverMode="excludePoints"
    />
  </Chart>
}

const StackedBarChart=(propsData)=>{
  const {chartData,title, xAxisText, architectureSources }=propsData
  return <Chart 
          paletteExtensionMode="blend" 
          id={title} title={title} 
          dataSource={chartData} 
         >
        <CommonSeriesSettings argumentField="month" type="stackedBar" />
        {(
          architectureSources && architectureSources.length  >0)&& 
          architectureSources.map((item,key)=><Series key={key} valueField={item.value} name={item.name} />)}
        <ArgumentAxis> 
          <Label rotationAngle={50} overlappingBehavior="rotate" />
        </ArgumentAxis>
        <ValueAxis position="left"> 
          <Title text={xAxisText}/>
        </ValueAxis>
        <Legend verticalAlignment="bottom" horizontalAlignment="center" itemTextPosition="right" />
        <Export enabled={true} />
        <Tooltip enabled={true} location="edge" customizeTooltip={customizeTooltip} />
    </Chart>
}
const customizeTooltip=(arg)=>{ return { text: `${arg.seriesName } = ${ arg.valueText}` }; }



export{
    LineChart,
    StackedBarChart
}