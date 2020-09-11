import React from 'react';
import { reset, reduxForm, Field} from 'redux-form';

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

const Login=(props)=>{
    const { handleSubmit }=props
    return <div style={{paddingLeft:"25%", paddingRight:"25%",paddingTop:"10%"}} >
    <h1 className="mb-4 text-capitalize text-dark d-flex justify-content-center">Login</h1>
    <form onSubmit={handleSubmit((values)=> console.log("Data ", values))} className="contact-wthree">
        <Field name="email" type="email" icon="fa fa-envelope" placeholder="Enter your email..." component={InputType} />
        <Field name="password" type="password" icon="fa fa-key" placeholder="Enter your password..." component={InputType} />
        <div className="d-flex  justify-content-center">
            <button type="submit" className="btn text-black btn-block w-25">Login to account</button>
        </div>
    </form>
</div>
}
const afterSubmit = (result, dispatch) => dispatch(reset('Login'));
export default reduxForm({ form: 'Login', onSubmitSuccess: afterSubmit })(Login);