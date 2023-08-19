import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { Form, Button, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { loginUser, signOutUser } from '../reducers/actionTypes';
const LoginForm = ({ loading, error,logindata,  signupUsers, loginUser , signOutUser}) => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    loginUser(credentials, signupUsers,  () => {
      return navigate("/");
    });
  };
  const onSignOut = () => {
    signOutUser();
  };
if(logindata && Object.keys(logindata).length > 0)
{
    return (
    <Row>
      <Col className="mb-12">
      <h2 style={{textAlign:'center'}}>Dashboard</h2>
      <p>You Are Success Fully Login you can click for 
          <Button variant="primary" type="button" onClick={() => onSignOut()} style={{marginTop:10, color:'#fff', marginLeft:10}}>
         <Link to="/"  style={{color:'#fff'}}>Logout</Link>
         </Button></p>
      </Col>
    </Row>
  );
}
else
{
  return (
    <Row>
      <Col className="mb-12">
      <h2 style={{textAlign:'center'}}>Login</h2>
    
      <Form onSubmit={onSubmit}  className='needs-validation' style={{width:'50%', margin: '0 auto', marginTop:30}}>
     
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
        <div className='invalid-feedback'>
          Please Enter Your Email
        </div>
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
          Login
         </Button>
         <Button variant="primary" type="button" style={{marginTop:10, color:'#fff', marginLeft:10}}>
         <Link to="signup"  style={{color:'#fff'}}>Signup</Link>
         </Button>
         
        {error && <p>{error}</p>}
      </Form>
      </Col>
    </Row>
  );
}
};

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  error: state.auth.error,
  logindata:state.auth.logindata,
  signupUsers:state.auth.signupUsers
});

export default connect(mapStateToProps, { loginUser, signOutUser })(LoginForm);
