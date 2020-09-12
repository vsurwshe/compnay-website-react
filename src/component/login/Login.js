import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reset, reduxForm, Field} from 'redux-form';
import { API_EXE_TIME } from '../../config/APIConfig';
import * as UserAction from '../../redux/actions/UserAction';
import Loading from '../utilities/loader/Loader'

const InputType=({ icon, type, placeholder, name,  input,label,mainLableName, ...rest })=>{
    return  <div className="form-group d-flex">
        <label> <i className={icon && icon} aria-hidden="true" /></label>
        <input 
            className="form-control" 
            type={type} 
            placeholder={placeholder} 
            name={name} 
            {...input} 
            {...rest}
        />
    </div>
}

let Login=(props)=>{
    const { handleSubmit }=props
    const [loading, setLoading] = useState(false)
    return <div style={{paddingLeft:"25%", paddingRight:"25%",paddingTop:"10%"}} >
    <h1 className="mb-4 text-capitalize text-dark d-flex justify-content-center">Login</h1>
    <form onSubmit={handleSubmit((values)=> CallLoginApi({data:values, "mainProps":props, setLoading }))} className="contact-wthree">
        <Field name="email" type="email" icon="fa fa-envelope" placeholder="Enter your email..." component={InputType} />
        <Field name="password" type="password" icon="fa fa-key" placeholder="Enter your password..." component={InputType} />
        <div className="d-flex  justify-content-center">
            <button type="submit" className="btn text-black btn-block w-25">Login to account</button>
        </div>
        <center>{loading && <Loading />}</center>
    </form>
</div>
}

const CallLoginApi=async(props)=>{
    const { data, setLoading }=props
    const { UserLogin }=props.mainProps.UserAction
    if(data){
        await setLoading(true);
        await UserLogin(data);
        setTimeout(async () => {
            await setLoading(false);
        },API_EXE_TIME);
    }
}

const mapToPropsState=(state)=>{return state}
const mapDispatchToProps = (dispatch) => ({
    UserAction: bindActionCreators(UserAction, dispatch),
})
Login= connect(mapToPropsState,mapDispatchToProps)(Login);

const afterSubmit = (result, dispatch) => dispatch(reset('Login'));
export default reduxForm({ form: 'Login', onSubmitSuccess: afterSubmit })(Login);