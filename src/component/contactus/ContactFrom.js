
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

const InputTextArea=({ icon, type, rows, placeholder, name,  input,label,mainLableName, ...rest })=>{
    return <div className="form-group">
        <textarea 
            className="form-control" 
            rows={rows} 
            id={name} 
            placeholder={placeholder}
            {...input}
            {...rest}
        />
    </div>
}

const ContactForm=(props)=>{
    const { reset, handleSubmit }=props
    return <div className="contact-top1">
        <h1 className="mb-4 text-capitalize text-dark">Get In Touch</h1>
        <form onSubmit={handleSubmit((values)=> console.log("Data ", values))} className="contact-wthree">
            <Field name="name" type="text" icon="fa fa-edit" placeholder="Enter your name..." component={InputType} />
            <Field name="email" type="email" icon="fa fa-user" placeholder="Enter your email..." component={InputType} />
            <Field name="comment" placeholder="Enter your message..." rows={5} component={InputTextArea} />
            <div className="d-flex  justify-content-end">
                <button type="submit" className="btn text-white btn-block w-25">Submit</button>
            </div>
        </form>
    </div>
}

const afterSubmit = (result, dispatch) => dispatch(reset('ClientForm'));
export default reduxForm({ form: 'ContactForm', onSubmitSuccess: afterSubmit })(ContactForm);