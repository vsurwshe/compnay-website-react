import React from 'react';
import { reset, reduxForm, Field} from 'redux-form';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { renderTextAreaCol, renderTextFiledCol } from '../adminUtilites/FromUtilites';

const BlogFrom=(props)=>{
    const { handleSubmit, reset, fromAction }=props
    return <Form onSubmit={handleSubmit((values)=> console.log("Data ",values))}>
        <LoadFrom />
        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit" variant="success">Save blog</Button> &nbsp;&nbsp;
            <Button type="button" variant="danger" onClick={()=>{ reset(); fromAction()}}>cancle</Button>
          </Col>
        </Form.Group>
    </Form>
}
const LoadFrom=()=>{
    return <>
        <Field name="blogTitle" component={renderTextFiledCol} type="text" label="Title" placeholder="enter blog title" />
        <Field name="blogWriter" component={renderTextFiledCol} type="text" label="Writer" placeholder="enter blog writer name"/>
        <Field name="blogCategoreies" component={renderTextFiledCol} type="text" label="Category" placeholder="enter blog category" />
        <Field name="blogBody" component={renderTextAreaCol} type="textarea" rows="5" label="Content" placeholder="enter blog content" />
    </>
}

const afterSubmit = (result, dispatch) => dispatch(reset('Login'));
export default reduxForm({ form: 'Login', onSubmitSuccess: afterSubmit })(BlogFrom);