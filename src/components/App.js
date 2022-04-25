import React from "react";
import { Container } from "react-bootstrap";
import SignUp from "./SignUp";
import { AuthProvider } from "../contexts/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <AuthProvider>
          <SignUp />
        </AuthProvider>
      </div>
    </Container>
  );
}

export default App;
