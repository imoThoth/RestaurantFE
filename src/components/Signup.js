import React, {useState, Component, Fragment } from 'react';
import "../css/signup.css";
import {Container, Row, Col, Form, Button, Modal} from 'react-bootstrap';
import Restaurant from "../img/homelogo/restaurant.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './Register';
import httpService from './http-common/http-service';

const Signup = () => {

  const [show, setShow] = useState(false);
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [errMessage, setErrMessage] = useState('')

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

    function handleChange() {

      const user = {name, password}

          httpService.login(user)
        .then( response => {
            console.log("Server Response", response.data);
            
        })
        .catch(error => {
            setErrMessage(error)
            console.log("Server Error " , error);
        })
    }

 
    return (
      <Fragment>
        <hr/>
       <Container>
          <Row className="mt-5">
            <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">

              <Form id='form'  onSubmit={handleChange}>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="username" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)}/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                     <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                  </Form.Group>
               
                  <Button  style={{ background: '#2ec4b6' }} variant="success btn-block" type="submit">
                    Login
                  </Button>
                 <hr/>
                  <div className="d-grid gap-2">
                    <Button onClick={handleShow}  style={{ background: '#2ec4b6' }} variant="primary" size="lg" >
                      Register
                    </Button>
                   <h3> {errMessage}</h3> 
                   
                  </div>
            </Form>
        
            </Col>
          </Row>
        </Container>
        <Modal show ={show}>
          <Modal.Header>
              <Modal.Title>Register</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Register />
          </Modal.Body>
          <Modal.Footer>
              <Button style={{ background: '#2ec4b6' }} variant="secondary" onClick={handleClose}>Close Button</Button>
          </Modal.Footer>
        </Modal>

      </Fragment>
    )
}

export default Signup;

