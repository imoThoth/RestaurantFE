import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';



const Contact = () => {
  return (
    <>
    <hr/>
       <Container>
          <Row className="mt-5">
            <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
              <Form>
                    <form>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Full Name</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                       <div class="form-group">
                        <label for="exampleFormControlInput1">Phone Number</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="012-34567-891011" />
                    </div>
                       <div class="form-group">
                        <label for="exampleFormControlInput1">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Enter text</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    </form>
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

//    <div className='form-group'>
//                                 <label className="ab-1">Message</label>
                                
//                                 <textarea rows="3" placeholder="Enter Text" className="form-control"></textarea>
//                             </div>

export default Contact
