import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';


const renderInputFiled=({type, placeholder, infoText, name,  input, label,meta: { touched, invalid, error }, mainLableName, ...rest })=>(
<div className="form-group">
      <input 
      className="form-control" 
      type={type} 
      name={name} 
      id={name} 
      placeholder={placeholder}  
      isValid={(touched && error) && !error.name} 
      {...input}
      {...rest}
      />
</div>
)

const renderInputTextArea=({placeholder, name, meta: { touched, invalid, error }, input, ...rest})=>(
  <div className="form-group">
    <textarea 
      className="form-control" 
      name={name} 
      id={name}
      placeholder={placeholder}
      isValid={(touched && error) && !error.name} 
      {...input}
      {...rest}
    ></textarea>
  </div>
)

const renderTextFiled=({ type, placeholder, infoText, name,  input, label,meta: { touched, invalid, error }, mainLableName, ...rest })=>{
    return <Form.Group controlId={name}>
    <Form.Label>{label}</Form.Label>
      <Form.Control 
        type={type} 
        placeholder={placeholder} 
        isValid={(touched && error) && !error.name} 
        {...input} 
        {...rest} 
      />
    <Form.Text className="text-muted">{infoText}</Form.Text>
  </Form.Group>
}

const renderTextFiledCol=({ type, placeholder, infoText, name, rows, input,meta: { touched, invalid, error }, label, mainLableName, ...rest })=>(
    <Form.Group as={Row} controlId={name}>
    <Form.Label column sm={2}> {label}: </Form.Label>
    <Col sm={10}>
      <Form.Control
      aria-describedby="inputGroupPrepend" 
      type={type} 
      placeholder={placeholder} 
      rows={rows}
      isValid={(touched && error) && !error.name} 
      {...input} 
      {...rest} />
    </Col>
  </Form.Group>
)

const renderTextAreaCol=({ type, placeholder, infoText, name, rows, input, label,meta: { touched, invalid, error }, mainLableName, ...rest })=>(
    <Form.Group as={Row} controlId={name}>
    <Form.Label column sm={2}> {label}: </Form.Label>
    <Col sm={10}>
        <Form.Control 
          as="textarea" 
          rows={rows} 
          isValid={(touched && error) && !error.name}
          placeholder={placeholder} 
          {...input} {...rest} 
        />
    </Col>
  </Form.Group>
)

const renderFile=({ type,placeholder, onChangeFunction, setMine, infoText, name, rows, input, label,meta: { touched, invalid, error }, mainLableName, ...rest })=>(
  <Form.Group as={Row} controlId={name}>
    <Form.Label column sm={2}> {label}: </Form.Label>
    <Col sm={10}>
    <input 
      id={input.name} 
      name={input.name} 
      type={type} 
      isValid={(touched && error) && !error.name}
      onChange={event =>handleChange(event, input, onChangeFunction,setMine)} 
      />
    </Col>
  </Form.Group>
)

const handleChange = async(event, input, successFunction, setMine) => {
  event.preventDefault();
  let imageFile = event.target.files[0];
  if (imageFile) {
    var reader = new FileReader();
    reader.onload =async()=>{
      let byteArray=reader.result.split(",")
      setMine && setMine(imageFile.name);
      successFunction && successFunction(byteArray.length >0 && byteArray[1])
    };
    reader.onerror = function (error) { console.log('Error: ', error); };
    await reader.readAsDataURL(imageFile);
  }
};


export{
    renderTextFiled,
    renderTextFiledCol,
    renderTextAreaCol,
    renderFile,
    renderInputFiled,
    renderInputTextArea
}