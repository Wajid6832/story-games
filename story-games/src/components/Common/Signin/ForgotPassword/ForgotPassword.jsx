import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../../../../features/auth/auth.slice";
import { Alert, Button, Form, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const ForgotPass = () => {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, isSuccess } = useSelector((state) => state.auth);

  const handleReset = async () => {
    setSuccessMsg("");
    setErrorMsg("");

    if (!email.trim() || !role || !newPassword.trim()) {
      setErrorMsg("Please fill all fields");
      return;
    }

    try {
      const result = await dispatch(resetPassword({ email, role, newPassword })).unwrap();
      setSuccessMsg(result.message);
      setEmail("");
      setNewPassword("");
      setRole("");
      setShowPassword(false);
    } catch (err) {
      setErrorMsg(err?.error || "Reset failed!");
    }
  };

  useEffect(() => {
    if (isSuccess && successMsg) {
      const timer = setTimeout(() => {
        navigate("/editorLogin");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess, successMsg, navigate]);

  return (
    <Container className="mt-5" style={{ maxWidth: "400px" }}>
      <h3 className="text-center mb-4">Forgot Password</h3>

      {successMsg && <Alert variant="success">{successMsg}</Alert>}
      {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}

      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your registered email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Role</Form.Label>
          <Form.Select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="">Select Role</option>
            <option value="reader">reader</option>
            <option value="writer">writer</option>
            <option value="editor">editor</option>
            <option value="producer">producer</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3 position-relative">
          <Form.Label>New Password</Form.Label>
          <Form.Control
            type={showPassword ? "text" : "password"}
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <Button
            variant="link"
            style={{
              position: "absolute",
              top: "38px",
              right: "10px",
              padding: "0",
              fontSize: "1.2rem",
            }}
            onClick={() => setShowPassword(!showPassword)}
          >
            <i className={showPassword ? "bi bi-eye" : "bi bi-eye-slash"}></i>
          </Button>
        </Form.Group>

        <Button
          variant="primary"
          onClick={handleReset}
          disabled={isLoading}
          className="w-100"
        >
          {isLoading ? "Updating..." : "Reset Password"}
        </Button>
      </Form>
    </Container>
  );
};

export default ForgotPass;
