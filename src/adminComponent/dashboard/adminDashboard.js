import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as DashboardAction from '../../redux/actions/DashboardAction'
import Loading from '../../component/utilities/loader/Loader'
import { LineChart, StackedBarChart } from './ChartUtilites';
class AdminDashboard extends Component {
    state = { 
        loadDashboard: false,
        blogCount:[],
        commentCount:[]
    }

    handleDashboardValue=()=>{ this.setState({loadDashboard :!this.state.loadDashboard })}

    componentDidMount=async()=>{
        const { blogsCount, commentCount}= this.props.DashboardState
        const { GetBlogCount, GetCommentCount}= this.props.DashboardAction
        await this.handleDashboardValue();
        (blogsCount && blogsCount.length <=0) && await GetBlogCount({});
        (commentCount && commentCount.length <=0) && await GetCommentCount({});
        await this.handleDashboardValue();
    }

    render() { 
        const { loadDashboard }=this.state
        return loadDashboard ? this.loadLoading() : this.loadCharts();
    }

    loadLoading=()=><center><Loading /></center>
    loadCharts=()=>{
        return <>
            {this.loadBlogCountLineChart()}
            {this.loadCommentCountStackedChart()}
        </>
    }

    loadBlogCountLineChart=()=>{
        const { blogsCount }=this.props.DashboardState
        return <LineChart 
            chartData={blogsCount}
            title="Blogs Count"
            argumentField="month"
            valueField="count"
            xAxisText="Blogs Count"
        />
    }

    loadCommentCountStackedChart=()=>{
        const { commentCount, commentSerise }=this.props.DashboardState
        return <StackedBarChart
            chartData={commentCount}
            architectureSources={commentSerise}
            title="Comment Count By Blogs"
            xAxisText="Comment Count"
        />
    }
}

const mapStateToProps=(state)=>{ return state;}
const mapDispatchToProps=(dispatch)=>({
    DashboardAction: bindActionCreators(DashboardAction,dispatch)
})
 
export default connect(mapStateToProps,mapDispatchToProps)(AdminDashboard);