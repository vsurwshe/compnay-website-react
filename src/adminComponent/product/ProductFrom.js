import React,{useState} from 'react';
import { reset, reduxForm, Field} from 'redux-form';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ProductAction from '../../redux/actions/ProductAction'
import { renderFile, renderTextAreaCol, renderTextFiledCol } from '../adminUtilites/FromUtilites';
import Loading from '../../component/utilities/loader/Loader';
import { API_EXE_TIME } from '../../config/APIConfig';
import { FromActions } from '../config/Config';


let ProductFrom=(props)=>{
    const { handleSubmit, reset, fromAction, operation, initialValues }=props
    const [loading, setLoading] = useState(false);
    const [imageData, setImageData] = useState("");
    return <div style={{padding:"20px"}}>
        <left>
            {(operation === FromActions.CR)&& <h2>Add Product</h2>}
            {(operation === FromActions.ED)&& <h2>Edit Product</h2>}
            {(operation === FromActions.DE)&& <h2>Delete Product</h2>}
        </left>
        <hr />
        <Form onSubmit={handleSubmit((values)=> CallSaveProduct({data: values, setLoading, imageData,"mainProps":props}))}>
            <LoadFrom 
                setImageData={setImageData}
                operation={operation}
                initialValues={initialValues}
            />
            <Form.Group as={Row}>
              <Col sm={{ span: 10, offset: 2 }}>
              {loading ? <Loading />:
                <>
                 {(operation === FromActions.CR)&&<><Button type="submit" variant="success">Add product</Button> &nbsp;&nbsp;</>}
                 {(operation === FromActions.ED)&&<><Button type="submit" variant="success">Edit product</Button> &nbsp;&nbsp;</>}
                 {(operation === FromActions.DE)&&<><Button type="submit" variant="success">Delete product</Button> &nbsp;&nbsp;</>}
                 <Button type="button" variant="danger" onClick={()=>{ reset(); fromAction()}}>cancle</Button>
                </>
              }
              </Col>
            </Form.Group>
        </Form>
    </div>
}

const LoadFrom=(props)=>{
    const { setImageData, operation, initialValues }=props
    return <>
        <Field name="productName" component={renderTextFiledCol} type="text" label="Name" placeholder="enter product name" />
        <Field name="clientName" component={renderTextFiledCol} type="text" label="Client Name" placeholder="enter client name"/>
        <Field name="companyName" component={renderTextFiledCol} type="text" label="Company Name" placeholder="enter company name" />
        { (operation === FromActions.ED || operation === FromActions.DE)? 
             <img src={'data:image/jpeg;base64,'+initialValues.data} alt=" " style={{width:"25%", height:"20%", float:"right"}} class="img-fluid" />
            :<Field name="productImage" component={renderFile} type="file" label="Prdouct image"  onChangeFunction={setImageData}/>}
        <Field name="productDiscription" component={renderTextAreaCol} type="textarea" rows="5" label="Discription" placeholder="enter product discription content" />
    </>
}

const CallSaveProduct=async(props)=>{
    const { data, imageData, setLoading }=props
    const { fromAction, operation, initialValues }=props.mainProps
    const { CreateProductRecord, UpdateProductRecord, DeleteProductRecord, GetProductList}=props.mainProps.ProductAction
    let newProductData={
        ...data,
        "data":imageData
    }
    await setLoading(true);
    if(operation === FromActions.ED && initialValues){
        await UpdateProductRecord(initialValues.id,data);
    }else if(operation === FromActions.DE && initialValues){
        await DeleteProductRecord(initialValues.id);
    }else{
        await CreateProductRecord(newProductData);
    }
    setTimeout(async()=>{
        await GetProductList();
        if(operation === FromActions.ED && initialValues){
            await alert("You product updated Successfully");
        }else if(operation === FromActions.DE && initialValues){
            await alert("You product Deleted Successfully");
        }else{
            await alert("You product added Successfully");
        }
        await setLoading(false);
        await fromAction();
    },API_EXE_TIME)
}

const mapStateToProps=(state)=>{return state};
const mapDispatchToProps=(dispatch)=>({
    ProductAction: bindActionCreators(ProductAction, dispatch)
})
ProductFrom= connect(mapStateToProps,mapDispatchToProps)(ProductFrom);

const afterSubmit = (result, dispatch) => dispatch(reset('ProductFrom'));
export default reduxForm({ 
    form: 'ProductFrom', 
    onSubmitSuccess: afterSubmit,  
    enableReinitialize: true
})(ProductFrom);