import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm, reset } from 'redux-form';
import { renderInputFiled, renderInputTextArea } from '../../adminComponent/adminUtilites/FromUtilites';
import { API_EXE_TIME } from '../../config/APIConfig';
import * as BlogAction from '../../redux/actions/BlogAction'

let CommentFrom=(props)=>{
    const { handleSubmit, reset }=props
    return <div className="comment-top mt-5">
    <h4>Leave a Comment</h4>
    <hr />
    <h3 id="commentResult"></h3>
    <div className="comment-bottom">
        <form onSubmit={handleSubmit((values)=> CallSaveComment({ data:values, "mainProps":props}))}>
            <Field name="name" component={renderInputFiled} type="text" placeholder="enter your name" />
            <Field name="email" component={renderInputFiled} type="email" placeholder="enter your email" />
            <Field name="message" component={renderInputTextArea} type="textarea" placeholder="enter your message" />
            <button type="submit" name="Submit" className="btn btn-primary submit">Submit Your Comment</button>
        </form>
    </div>
</div>
}

const CallSaveComment=async(props)=>{
    const { data }=props
    const { CreateComment, GetCommentList}=props.mainProps.BlogAction
    await CreateComment(data);
    setTimeout(async()=>{
        await GetCommentList();
        await alert("Your Comment Added Successfully");
    },API_EXE_TIME)
}

const mapStateToProps=(state)=>{return state;}
const mapDispatchToProps=(dispatch)=>({
    BlogAction: bindActionCreators(BlogAction, dispatch)
})
CommentFrom=connect(mapStateToProps, mapDispatchToProps)(CommentFrom); 
const afterSubmit = (result, dispatch) => dispatch(reset('CommentFrom'));
export default reduxForm({form: 'CommentFrom', onSubmitSuccess: afterSubmit})(CommentFrom);