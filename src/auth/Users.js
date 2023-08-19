import React from 'react';
import { Container, Table, Button, Modal  } from 'react-bootstrap';
import Register from './Register';
import { connect } from 'react-redux';
import Image from '../Components/Image';
import {handleModel, removeUserRecord} from '../reducers/actionTypes';
import { FaEdit, FaTrash } from 'react-icons/fa'; 
import { useNavigate } from "react-router-dom";
const Users = (dispatch) => {

const {user, isShowModel,logindata, handleModel, removeUserRecord} = dispatch;
    const navigate = useNavigate();
    if(logindata === null){
        return navigate("/");
      }

  return (
    <Container>
    <Table striped bordered hover variant="light">
      <thead>
        <tr>
          <th>#</th>
          <th>Photos</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Father Name</th>
          <th>Email Address</th>
          <th>Phone No.</th>
          <th>Date Of Birth</th>
          <th>Gender</th>
          <th>Country</th>
          <th>Address</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
      {user && user.length > 0 && user.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.images && item.images.length > 0 && item.images.map((element) => {
               return <Image data={element}/>
            })}</td>
            <td>{item.firstname}</td>
            <td>{item.lastname}</td>
            <td>{item.fathername}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            
            <td>{item.dob}</td>
            <td>{item.gender}</td>
            <td>{item.country}</td>
            <td>{item.address}</td>
            <td style={{display:'flex'}}><Button variant="primary" onClick={() => handleModel(true, item)}><FaEdit /></Button>
            <Button variant="primary" onClick={() => 
                removeUserRecord(item.id)
                }><FaTrash /></Button></td>
          </tr>
        ))}
      </tbody>
    </Table>
    <Modal show={isShowModel} onHide={() => handleModel(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Student Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Register />
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

const mapStateToProps = (state) => ({
    user: state.auth.user,
    isShowModel:state.auth.isShowModel,
    logindata:state.auth.logindata
  });
  

export default connect(mapStateToProps, {handleModel, removeUserRecord})(Users);