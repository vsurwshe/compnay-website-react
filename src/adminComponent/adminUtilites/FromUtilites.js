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
    <Form.Label column sm={2}> {label} </Form.Label>
    <Col sm={10}>
      <Form.Control type={type} placeholder={placeholder} rows={rows} {...input} {...rest} />
    </Col>
  </Form.Group>
)

const renderTextAreaCol=({ type, placeholder, infoText, name, rows, input, label, mainLableName, ...rest })=>(
    <Form.Group as={Row} controlId={name}>
    <Form.Label column sm={2}> {label} </Form.Label>
    <Col sm={10}>
        <Form.Control as="textarea" rows={rows} placeholder={placeholder} {...input} {...rest} />
    </Col>
  </Form.Group>
)

export{
    renderTextFiled,
    renderTextFiledCol,
    renderTextAreaCol
}