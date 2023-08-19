import React, { useState } from 'react';
import { connect } from 'react-redux';
import { registerUser, updateUserDetails } from '../reducers/actionTypes';
import { useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from 'react-bootstrap';

const RegisterForm = ({ loading, error, userDetails, logindata, registerUser, updateUserDetails }) => {

  const [formData, setFormData] = useState(userDetails);
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    if(userDetails.id){
      updateUserDetails(userDetails.id, formData);
    }
    else
    {
      registerUser(formData, () => {
        return navigate("/users");
      });
  }
  };
  if(logindata === null){
    return navigate("/");
  }
  return (
    <div>
      <Form onSubmit={onSubmit} style={{ margin: '0 auto', marginTop:30}}>
      <Row className="mb-3">
<Form.Group controlId="imageUpload" as={Col}>
  <Form.Label>Photo</Form.Label>
  <Form.Control type="file" multiple  accept="image/*"
 // value={formData.images}
  onChange={(e) =>
    setFormData({ ...formData, images: Array.from(e.target.files) })
  } />
</Form.Group>

<Form.Group controlId="firstname" as={Col}>
<Form.Label>First Name</Form.Label>
<Form.Control
  type="text"
  placeholder="Enter Firstname"
  value={formData.firstname}
  onChange={(e) =>
    setFormData({ ...formData, firstname: e.target.value })
  }
  required
/>
</Form.Group>
</Row>
<Row className="mb-3">
<Form.Group controlId="lastname" as={Col}>
<Form.Label>Last Name</Form.Label>
<Form.Control
  type="text"
  placeholder="Enter Lastname"
  value={formData.lastname}
  onChange={(e) =>
    setFormData({ ...formData, lastname: e.target.value })
  }
  required
/>
</Form.Group>

<Form.Group controlId="fathername" as={Col}>
<Form.Label>Father Name</Form.Label>
<Form.Control
  type="text"
  placeholder="Enter FatherName"
  value={formData.fathername}
  onChange={(e) =>
    setFormData({ ...formData, fathername: e.target.value })
  }
  required
/>
</Form.Group>
</Row>
<Row className="mb-3">
<Form.Group controlId="email" as={Col}>
<Form.Label>Email</Form.Label>
<Form.Control
  type="email"
  placeholder="Enter email"
  value={formData.email}
  onChange={(e) =>
    setFormData({ ...formData, email: e.target.value })
  }
  required
/>
</Form.Group>
<Form.Group controlId="phone" as={Col}>
<Form.Label>Mobile No</Form.Label>
<Form.Control
  type="number"
  placeholder="Enter Mobile No"
  value={formData.phone}
  onChange={(e) =>
    setFormData({ ...formData, phone: e.target.value })
  }
  required
/>
</Form.Group>
</Row>

<Row className="mb-3">
<Form.Group controlId="DOB" as={Col}>
<Form.Label>DOB</Form.Label>
<Form.Control
  type="date"
  placeholder="Date"
  value={formData.dob}
  onChange={(e) =>
    setFormData({ ...formData, dob: e.target.value })
  }
/>
</Form.Group>
<Form.Group controlId="Country" as={Col}>
<Form.Label>Country</Form.Label>
<Form.Control as="select" rows={3} 
value={formData.country}
onChange={(e) =>
  setFormData({ ...formData, country: e.target.value })
}
>
    <option>Select Country</option>
    <option value="india">India</option>
    <option value="us">USA</option>
    <option value="australia">Australia</option>
</Form.Control>
</Form.Group>
</Row>
<Row className="mb-3">
<Form.Group controlId="genderRadios" as={Col}>
  <Form.Label>Gender</Form.Label>
  <Form.Check
    type="radio"
    label="Male"
    name="genderRadio"
    value="male"
    checked={formData.gender === 'male'}
    onChange={(e) =>
      setFormData({ ...formData, gender: e.target.value })
    }
  />
  <Form.Check
    type="radio"
    label="Female"
    name="genderRadio"
    value="female"
    checked={formData.gender === 'female'}
    onChange={(e) =>
      setFormData({ ...formData, gender: e.target.value })
    }
  />
  <Form.Check
    type="radio"
    label="Other"
    name="genderRadio"
    value="other"
    checked={formData.gender === 'other'}
    onChange={(e) =>
      setFormData({ ...formData, gender: e.target.value })
    }
  />
</Form.Group>
<Form.Group controlId="address" as={Col}>
<Form.Label>Address</Form.Label>
<Form.Control as="textarea" rows={3} 
value={formData.address}
onChange={(e) =>
  setFormData({ ...formData, address: e.target.value })
}
/>
</Form.Group>
</Row>
{/* <Form.Group controlId="Country">
<Form.Label>Country</Form.Label>
<Form.Control
  type="date"
  placeholder="Date"
  value={dob}
  onChange={(e) => setDOB(e.target.value)}
/>
</Form.Group> */}

<Button variant="primary" type="submit" style={{marginTop: 20}} disabled={loading}>
Save
</Button>
{error && <p>{error}</p>}
</Form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  error: state.auth.error,
  userDetails:state.auth.userDetails,
  logindata:state.auth.logindata,
});

export default connect(mapStateToProps, { registerUser , updateUserDetails})(RegisterForm);