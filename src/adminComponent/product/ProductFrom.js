import React,{useState} from 'react';
import { reset, reduxForm, Field} from 'redux-form';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ProductAction from '../../redux/actions/ProductAction'
import { renderFile, renderTextAreaCol, renderTextFiledCol } from '../adminUtilites/FromUtilites';
import Loading from '../../component/utilities/loader/Loader';
import { API_EXE_TIME } from '../../config/APIConfig';


let ProductFrom=(props)=>{
    const { handleSubmit, reset, fromAction }=props
    const [loading, setLoading] = useState(false);
    const [imageData, setImageData] = useState("");
    return <div style={{padding:"20px"}}>
        <left><h2>Add Product</h2></left>
        <hr />
        <Form onSubmit={handleSubmit((values)=> CallSaveProduct({data: values, setLoading, imageData, "mainProps":props}))}>
            <LoadFrom 
                setImageData={setImageData}
            />
            <Form.Group as={Row}>
              <Col sm={{ span: 10, offset: 2 }}>
              {loading ? <Loading />:
                <><Button type="submit" variant="success">Add product</Button> &nbsp;&nbsp;
                 <Button type="button" variant="danger" onClick={()=>{ reset(); fromAction()}}>cancle</Button>
                </>
              }
              </Col>
            </Form.Group>
        </Form>
    </div>
}

const LoadFrom=(props)=>{
    const { setImageData }=props
    return <>
        <Field name="productName" component={renderTextFiledCol} type="text" label="Name" placeholder="enter product name" />
        <Field name="clientName" component={renderTextFiledCol} type="text" label="Client Name" placeholder="enter client name"/>
        <Field name="companyName" component={renderTextFiledCol} type="text" label="Company Name" placeholder="enter company name" />
        <Field name="productImage" component={renderFile} type="file" label="Prdouct image"  onChangeFunction={setImageData}/>
        <Field name="productDiscription" component={renderTextAreaCol} type="textarea" rows="5" label="Discription" placeholder="enter product discription content" />
    </>
}

const CallSaveProduct=async(props)=>{
    const { data, imageData, setLoading }=props
    const { fromAction }=props.mainProps
    const { CreateProductRecord, GetProductList}=props.mainProps.ProductAction
    console.log("Data ", data, imageData);
    let newProductData={
        ...data,
        "data":imageData
    }
    await setLoading(true);
    await CreateProductRecord(newProductData);
    setTimeout(async()=>{
        await GetProductList();
        await setLoading(false);
        await fromAction();
    },API_EXE_TIME)
}

const mapStateToProps=(state)=>{return state};
const mapDispatchToProps=(dispatch)=>({
    ProductAction: bindActionCreators(ProductAction, dispatch)
})
ProductFrom= connect(mapStateToProps,mapDispatchToProps)(ProductFrom);

const afterSubmit = (result, dispatch) => dispatch(reset('Login'));
export default reduxForm({ form: 'Login', onSubmitSuccess: afterSubmit })(ProductFrom);