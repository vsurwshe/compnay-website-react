import React,{useState} from 'react';
import { reset, reduxForm, Field} from 'redux-form';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { renderTextAreaCol, renderTextFiledCol } from '../adminUtilites/FromUtilites';
import Loading from '../../component/utilities/loader/Loader';
import * as BlogAction from '../../redux/actions/BlogAction';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { API_EXE_TIME } from '../../config/APIConfig';

let BlogFrom=(props)=>{
    const { handleSubmit, reset, fromAction }=props
    const [loading, setLoading] = useState(false);

    return <div style={{padding:"20px"}}>
        <left><h2>Create Blog</h2></left>
        <hr />
        <Form onSubmit={handleSubmit((values)=> CallSaveBlogAPI({data: values, setLoading, "mainProps":props}))}>
            <LoadFrom />
            <Form.Group as={Row}>
              <Col sm={{ span: 10, offset: 2 }}>
              {loading ? <Loading />:
                <><Button type="submit" variant="success">Save blog</Button> &nbsp;&nbsp;
                 <Button type="button" variant="danger" onClick={()=>{ reset(); fromAction()}}>cancle</Button>
                </>
              }
              </Col>
            </Form.Group>
        </Form>
    </div>
}

const LoadFrom=()=>{
    return <>
        <Field name="blogTitle" component={renderTextFiledCol} type="text" label="Title" placeholder="enter blog title" />
        <Field name="blogWriter" component={renderTextFiledCol} type="text" label="Writer" placeholder="enter blog writer name"/>
        <Field name="blogCategoreies" component={renderTextFiledCol} type="text" label="Category" placeholder="enter blog category" />
        <Field name="blogBody" component={renderTextAreaCol} type="textarea" rows="5" label="Content" placeholder="enter blog content" />
    </>
}

const CallSaveBlogAPI=async(props)=>{
    const { data, setLoading }=props
    const { fromAction }=props.mainProps
    const { GetBlogList, CreateBlog}=props.mainProps.BlogAction
    await setLoading(true);
    await CreateBlog(data);
    setTimeout(async()=>{
        await GetBlogList();
        await setLoading(false);
        await fromAction();
    }, API_EXE_TIME)
}

const mapToPropsState=(state)=>{return state}
const mapDispatchToProps = (dispatch) => ({
    BlogAction: bindActionCreators(BlogAction, dispatch),
})
BlogFrom= connect(mapToPropsState,mapDispatchToProps)(BlogFrom)

const afterSubmit = (result, dispatch) => dispatch(reset('Login'));
export default reduxForm({ form: 'Login', onSubmitSuccess: afterSubmit })(BlogFrom);