import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import httpService from './http-common/http-service';

const Register = () => {

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  
  function handleChange () {

         const user = {email, password, name, userName}

       httpService.register(user)
       .then( response => {
           console.log("Server Response", response.data)
       })
       .catch(error => {
           console.log("Server Error", error)
       })
    }


  return (
      <>
    <hr/>
       <Container>
          <Row className="mt-5">
            <Col lg={10} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
              <Form onSubmit={handleChange}>
                    
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)}/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>UserName</Form.Label>
                    <Form.Control type="userName" placeholder="Enter username" value={userName} onChange={(e) => setUserName(e.target.value)}/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                  </Form.Group>
                
                 <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                  </Form.Group>

                   <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                  </Form.Group>
                   
                    <hr/>
                    <div className="d-grid gap-2">
                    <Button variant="primary" size="lg" style={{ background: '#2ec4b6' }} onClick={handleChange}>
                      Submit
                    </Button>                  
                  </div>
                </Form>
            </Col>
          </Row>
        </Container>
    </>
  )
}

export default Register
