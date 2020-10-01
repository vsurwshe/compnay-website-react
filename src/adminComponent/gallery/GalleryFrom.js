import React,{useState} from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm, reset, getFormSubmitErrors, getFormSyncErrors, hasSubmitFailed } from 'redux-form';
import Loading from '../../component/utilities/loader/Loader';
import { API_EXE_TIME } from '../../config/APIConfig';
import * as GalleryAction from '../../redux/actions/GalleryAction'
import { renderFile, renderTextFiledCol } from '../adminUtilites/FromUtilites';
import { FromActions } from '../config/Config';

let GalleryFrom=(props)=>{
    const { handleSubmit, reset, fromAction, operation, initialValues, GalleryFromErrors, GalleryFromSubmitFailed }=props
    const [loading, setLoading] = useState(false);
    const [imageData, setImageData] = useState("");
    const [mine, setMine] = useState("")
    
    return <div style={{padding:"20px"}}>
        <left>
            {(operation === FromActions.CR)&&<><h2>Add Image</h2> &nbsp;&nbsp;</>}
            {(operation === FromActions.ED)&&<><h2>Edit Image</h2> &nbsp;&nbsp;</>}
            {(operation === FromActions.DE)&&<><h2>Delete Image</h2> &nbsp;&nbsp;</>}
        </left>
        <hr />
        <Form onSubmit={handleSubmit((values)=> CallSaveGallery({data: values, setLoading, imageData, mine, "mainProps":props}))}>
            {GalleryFromSubmitFailed && <ShowError GalleryFromErrors={GalleryFromErrors}  />}
            <LoadFrom 
                setImageData={setImageData}
                setMine={setMine}
                initialValues={initialValues}
                operation={operation}
            />
            <Form.Group as={Row}>
              <Col sm={{ span: 10, offset: 2 }}>
              {loading ? <Loading />:
                <>
                {(operation === FromActions.CR)&&<><Button type="submit" variant="success">Add Image</Button> &nbsp;&nbsp;</>}
                {(operation === FromActions.ED)&&<><Button type="submit" variant="success">Edit Image</Button> &nbsp;&nbsp;</>}
                {(operation === FromActions.DE)&&<><Button type="submit" variant="success">Delete Image</Button> &nbsp;&nbsp;</>}
                 <Button type="button" variant="danger" onClick={()=>{ reset(); fromAction()}}>cancle</Button>
                </>}
              </Col>
            </Form.Group>
        </Form>
    </div>
}

const ShowError=(props)=>{
    const { GalleryFromErrors }=props
    return  <ul className="list-unstyled">
        <li className="mb-3 pb-3"> 
            {GalleryFromErrors.clientName && <><i className="fa fa-caret-right mr-2" />&nbsp;<span className="text-danger txt1">{GalleryFromErrors.clientName}</span> <br/></>}
            {GalleryFromErrors.clientCompany && <><i className="fa fa-caret-right mr-2" />&nbsp;<span className="text-danger txt1">{GalleryFromErrors.clientCompany}</span><br/></>}
            {GalleryFromErrors.galleryImage && <><i className="fa fa-caret-right mr-2" />&nbsp;<span className="text-danger txt1">{GalleryFromErrors.galleryImage}</span><br/></>}
        </li>
    </ul>
}

const LoadFrom=(props)=>{
    const { setImageData, setMine, operation, initialValues }=props
    return <>
        <Field name="clientName" component={renderTextFiledCol} type="text" label="Name" placeholder="enter image name"/>
        <Field name="clientCompany" component={renderTextFiledCol} type="text" label="Company Name" placeholder="enter company name" />
        { (operation === FromActions.ED || operation === FromActions.DE)? 
             <img src={'data:image/jpeg;base64,'+initialValues.data} alt=" " style={{width:"25%", height:"20%", float:"right"}} class="img-fluid" />
            :<Field name="galleryImage" component={renderFile} type="file" label="Gallery image"  setMine={setMine} onChangeFunction={setImageData}/>}
    </>
}

const CallSaveGallery=async(props)=>{
    const { data, imageData, setLoading, mine }=props
    const { fromAction, operation, initialValues }=props.mainProps
    const { CreateGalleryRecord, UpdateGalleryRecord, DeleteGalleryRecord, GetGalleryList}=props.mainProps.GalleryAction
    let newGalleryData={
        ...data,
        "data":imageData,
        "mine":mine
    }
    await setLoading(true);
    if(operation === FromActions.ED && initialValues){
        await UpdateGalleryRecord(initialValues.id,data);
    }else if(operation === FromActions.DE && initialValues){
        await DeleteGalleryRecord(initialValues.id);
    }else{
        await CreateGalleryRecord(newGalleryData);
    }
    setTimeout(async()=>{
        await GetGalleryList();
        await setLoading(false);
        await fromAction();
    },API_EXE_TIME)
}

const validate = (values) => {
    const errors = {}
    // this condition checks employee number is provide or not
    if (!values.clientName) {
        errors.clientName = 'Event name is required'
    }
    // this condition checks employee number is provide or not
    if (!values.clientCompany) {
        errors.clientCompany = 'Client company name is required'
    }
    return errors
}

const mapStateToProps=(state)=>{
    let galleryFromErrors=getFormSubmitErrors('GalleryFrom')(state);
    return {...state, galleryFromErrors};
}
const mapDispatchToProps=(dispatch)=>({
    GalleryAction: bindActionCreators(GalleryAction, dispatch)
})

GalleryFrom= connect(state=>({
    GalleryFromErrors: getFormSyncErrors('GalleryFrom')(state),
    GalleryFromSubmitFailed: hasSubmitFailed('GalleryFrom')(state)
}),mapDispatchToProps)(GalleryFrom);
const afterSubmit = (result, dispatch) => dispatch(reset('GalleryFrom'));
export default reduxForm({ 
    form: 'GalleryFrom',
    validate, 
    onSubmitSuccess: afterSubmit,
    enableReinitialize: true 
})(GalleryFrom);