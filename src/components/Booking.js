import React, {useState} from 'react';
import "../css/signup.css";
import {Container, Row, Col, Form, Button, Dropdown, DropdownButton} from 'react-bootstrap';
import Restaurant from "../img/homelogo/restaurant.png";
import 'bootstrap/dist/css/bootstrap.min.css';

const Booking = () => {

    const [select, setSelect] = useState();
    const [date, setDate] = useState();

  return (
        <>
        <hr/>
       <Container>
          <Row className="mt-5">
            <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">

              <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Booking Name</Form.Label>
                    <Form.Control type="username" placeholder="Enter Name" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="username" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicUsers">
                    <Form.Label>Total Amount Of People</Form.Label>
                    <select className='select'>
                        <select value={select} onChange={e=>setSelect(e.target.value)} />
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                  </Form.Group>

                   <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Time</Form.Label>
                    <input className='booking' type="date" onChange={e=> setDate(e.target.value)}/>
                  </Form.Group>
               
                 <hr/>
                  <div className="d-grid gap-2">
                    <Button variant="primary" size="lg" style={{ background: 'red' }}>
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

export default Booking
