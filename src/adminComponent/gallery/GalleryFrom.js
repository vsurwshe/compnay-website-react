import React,{useState} from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm, reset } from 'redux-form';
import Loading from '../../component/utilities/loader/Loader';
import { API_EXE_TIME } from '../../config/APIConfig';
import * as GalleryAction from '../../redux/actions/GalleryAction'
import { renderFile, renderTextFiledCol } from '../adminUtilites/FromUtilites';

let GalleryFrom=(props)=>{
    const { handleSubmit, reset, fromAction }=props
    const [loading, setLoading] = useState(false);
    const [imageData, setImageData] = useState("");
    const [mine, setMine] = useState("")
    return <div style={{padding:"20px"}}>
        <left><h2>Add Gallery Image</h2></left>
        <hr />
        <Form onSubmit={handleSubmit((values)=> CallSaveGallery({data: values, setLoading, imageData, mine, "mainProps":props}))}>
            <LoadFrom 
                setImageData={setImageData}
                setMine={setMine}
            />
            <Form.Group as={Row}>
              <Col sm={{ span: 10, offset: 2 }}>
              {loading ? <Loading />:
                <><Button type="submit" variant="success">Add Image</Button> &nbsp;&nbsp;
                 <Button type="button" variant="danger" onClick={()=>{ reset(); fromAction()}}>cancle</Button>
                </>}
              </Col>
            </Form.Group>
        </Form>
    </div>
}

const LoadFrom=(props)=>{
    const { setImageData, setMine }=props
    return <>
        <Field name="name" component={renderTextFiledCol} type="text" label="Name" placeholder="enter image name"/>
        <Field name="company" component={renderTextFiledCol} type="text" label="Company Name" placeholder="enter company name" />
        <Field name="galleryImage" component={renderFile} type="file" label="Gallery image"  setMine={setMine} onChangeFunction={setImageData}/>
    </>
}

const CallSaveGallery=async(props)=>{
    const { data, imageData, setLoading, mine }=props
    const { fromAction }=props.mainProps
    const { CreateGalleryRecord, GetGalleryList}=props.mainProps.GalleryAction
    let newGalleryData={
        ...data,
        "data":imageData,
        "mine":mine
    }
    await setLoading(true);
    await CreateGalleryRecord(newGalleryData);
    setTimeout(async()=>{
        await GetGalleryList();
        await setLoading(false);
        await fromAction();
    },API_EXE_TIME)
}

const mapStateToProps=(state)=>{return state;}
const mapDispatchToProps=(dispatch)=>({
    GalleryAction: bindActionCreators(GalleryAction, dispatch)
})

GalleryFrom= connect(mapStateToProps,mapDispatchToProps)(GalleryFrom);
const afterSubmit = (result, dispatch) => dispatch(reset('GalleryFrom'));
export default reduxForm({ form: 'GalleryFrom', onSubmitSuccess: afterSubmit })(GalleryFrom);