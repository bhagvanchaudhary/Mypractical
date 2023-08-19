import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Login from './auth/Login';
import RegistrationPage from './auth/Register';
import Users from './auth/Users';
import Signup from './auth/Signup';

const App = () => {
  return (
    <Router>
    <Container fluid>
      <Row>
        <Col md={24} className="content">
          {/* Top Navigation */}
          <Header />
          {/* Main Content */}
          <main className="main-content">
            <Container>
              <Routes>
                <Route path="" Component={Login} />
                <Route path="signup" Component={Signup} />
                <Route path="registration" Component={RegistrationPage} />
                <Route path="users" Component={Users} />
              </Routes>
            </Container>
          </main>
          <Footer />
        </Col>
      </Row>
    </Container>
    </Router>
  );
};


export default App;