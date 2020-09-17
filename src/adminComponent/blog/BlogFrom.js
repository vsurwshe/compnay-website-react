import React,{useState} from 'react';
import { reset, reduxForm, Field} from 'redux-form';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { renderTextAreaCol, renderTextFiledCol } from '../adminUtilites/FromUtilites';
import Loading from '../../component/utilities/loader/Loader';
import * as BlogAction from '../../redux/actions/BlogAction';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { API_EXE_TIME } from '../../config/APIConfig';
import { FromActions } from '../config/Config';


let BlogFrom=(props)=>{
    const { handleSubmit, reset, fromAction, operation }=props
    const [loading, setLoading] = useState(false);

    return <div style={{padding:"20px"}}>
        <left><h2>Create Blog</h2></left>
        <hr />
        <Form onSubmit={handleSubmit((values)=> CallSaveBlogAPI({data: values, setLoading, "mainProps":props}))}>
            <LoadFrom />
            <Form.Group as={Row}>
              <Col sm={{ span: 10, offset: 2 }}>
              {loading ? <Loading />:
                <>
                {(operation === FromActions.CR)&&<><Button type="submit" variant="success">Save blog</Button> &nbsp;&nbsp;</>}
                {(operation === FromActions.ED)&&<><Button type="submit" variant="success">Edit blog</Button> &nbsp;&nbsp;</>}
                {(operation === FromActions.DE)&&<><Button type="submit" variant="success">Delete blog</Button> &nbsp;&nbsp;</>}
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
        <Field name="blogName" component={renderTextFiledCol} type="text" label="Title" placeholder="enter blog title" />
        <Field name="blogWriter" component={renderTextFiledCol} type="text" label="Writer" placeholder="enter blog writer name"/>
        <Field name="blogCategory" component={renderTextFiledCol} type="text" label="Category" placeholder="enter blog category" />
        <Field name="blogBody" component={renderTextAreaCol} type="textarea" rows="5" label="Content" placeholder="enter blog content" />
    </>
}

const CallSaveBlogAPI=async(props)=>{
    const { data, setLoading }=props
    const { fromAction, operation, initialValues }=props.mainProps
    const { GetBlogList, CreateBlog, UpdateBlogRecord, DeleteBlogRecord}=props.mainProps.BlogAction
    await setLoading(true);
    if(operation === FromActions.ED && initialValues){
        await UpdateBlogRecord(initialValues.blogId,data);
    }else if(operation === FromActions.DE && initialValues){
        await DeleteBlogRecord(initialValues.blogId);
    }else{
        await CreateBlog(data);
    }
    setTimeout(async()=>{
        await GetBlogList();
        if(operation === FromActions.ED && initialValues){
            await alert("You blog updated Successfully");
        }else if(operation === FromActions.DE && initialValues){
            await alert("You blog Deleted Successfully");
        }else{
            await alert("You blog added Successfully");
        }
        await setLoading(false);
        await fromAction();
    }, API_EXE_TIME)
}

const validate = (values) => {
    const errors = {}
    // this condition checks employee number is provide or not
    if (!values.blogName) {
        errors.blogName = 'Blog name is Required'
    }
    // this condition checks employee number is provide or not
    if (!values.blogWriter) {
        errors.blogWriter = 'Blog writer is Required'
    }
    // this condition checks employee number is provide or not
    if (!values.blogCategory) {
        errors.blogCategory = 'Blog category is Required'
    }
    // this condition checks employee number is provide or not
    if (!values.blogBody) {
        errors.blogBody = 'Blog body is Required'
    }
    return errors
}

const mapToPropsState=(state)=>{return state}
const mapDispatchToProps = (dispatch) => ({
    BlogAction: bindActionCreators(BlogAction, dispatch),
})
BlogFrom= connect(mapToPropsState,mapDispatchToProps)(BlogFrom)

const afterSubmit = (result, dispatch) => dispatch(reset('BlogFrom'));
export default reduxForm({ form: 'BlogFrom', validate, onSubmitSuccess: afterSubmit })(BlogFrom);