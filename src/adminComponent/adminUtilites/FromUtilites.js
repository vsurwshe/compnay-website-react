import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';

const renderTextFiled=({ type, placeholder, infoText, name,  input, label, mainLableName, ...rest })=>{
    return <Form.Group controlId={name}>
    <Form.Label>{label}</Form.Label>
    <Form.Control type={type} placeholder={placeholder} {...input} {...rest} />
    <Form.Text className="text-muted">{infoText}</Form.Text>
  </Form.Group>
}

const renderTextFiledCol=({ type, placeholder, infoText, name, rows, input, label, mainLableName, ...rest })=>(
    <Form.Group as={Row} controlId={name}>
    <Form.Label column sm={2}> {label}: </Form.Label>
    <Col sm={10}>
      <Form.Control type={type} placeholder={placeholder} rows={rows} {...input} {...rest} />
    </Col>
  </Form.Group>
)

const renderTextAreaCol=({ type, placeholder, infoText, name, rows, input, label, mainLableName, ...rest })=>(
    <Form.Group as={Row} controlId={name}>
    <Form.Label column sm={2}> {label}: </Form.Label>
    <Col sm={10}>
        <Form.Control as="textarea" rows={rows} placeholder={placeholder} {...input} {...rest} />
    </Col>
  </Form.Group>
)

const renderFile=({ type,placeholder, onChangeFunction, setMine, infoText, name, rows, input, label, mainLableName, ...rest })=>(
  <Form.Group as={Row} controlId={name}>
    <Form.Label column sm={2}> {label}: </Form.Label>
    <Col sm={10}>
    <input id={input.name} name={input.name} type={type} onChange={event =>handleChange(event, input, onChangeFunction,setMine)} />
      {/* <Form.File id={name} {...input} {...rest} onChange={event =>handleChange(event, input, onChangeFunction)} /> */}
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
      setMine && setMine(imageFile.name+imageFile.type);
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
    renderFile
}