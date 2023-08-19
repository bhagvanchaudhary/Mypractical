import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { signupUser } from '../reducers/actionTypes';

const SignupForm = ({ loading, error, signupUsers, signupUser }) => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  console.log('==credentials1233', signupUsers)
  const onSubmit = (e) => {
    e.preventDefault();
    signupUser(credentials, () => {
      return navigate("/");
    });
  };

  return (
    <Row>
      <Col className="mb-12">

      <h2 style={{textAlign:'center'}}>Registration</h2>
      <Form onSubmit={onSubmit}   style={{width:'50%', margin: '0 auto', marginTop:30}}>
     
     <Form.Group controlId="email" className="mb-3">
      <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={credentials.email}
          onChange={(e) =>
            setCredentials({ ...credentials, email: e.target.value })
          }
          required
        />
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={credentials.password}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
          required
        />
        <div className='invalid-feedback'>
          Please Enter Your Password
        </div>
      </Form.Group>
        <Button variant="primary" type="submit" style={{marginTop:10}} disabled={loading}>
          Submit
         </Button>
         
        {error && <p>{error}</p>}
      </Form>
      </Col>
    </Row>
  );
};

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  error: state.auth.error,
  signupUsers: state.auth.signupUsers
});

export default connect(mapStateToProps, { signupUser })(SignupForm);
