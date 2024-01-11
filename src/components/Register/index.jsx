import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { Container } from "./style";
import { NavLink, useNavigate } from "react-router-dom";
// import useRequest from '../../hooks/useRequest';
import CircularProgress from "@mui/material/CircularProgress";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import useAxios from "../../hooks/useAxios";

const Register = () => {
  const { request } = useAxios();
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (values, { resetForm }) => {
    setLoad(true);

    const data = request({
      url: "student/signup",
      method: "post",
      data: values,
    });
    data?.statusCode && navigate("/login");
    setLoad(false);
    resetForm();
  };
  return (
    <Container>
      <Formik
        initialValues={{
          email: "",
          password: "",
          first_name: "",
          last_name: "",
        }}
        validationSchema={Yup.object({
          password: Yup.string()
            .min(3, "Password should be of minimum 3 characters length")
            .required("Required"),
          email: Yup.string().email("Enter a valid email").required("Required"),
        })}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Container.Form onSubmit={formik.handleSubmit}>
            <Container.Title>Register</Container.Title>
            <Container.Text>
              Welcome Back. Register to continue your learning.
            </Container.Text>
            <TextField
              id="outlined-name-input"
              label="First Name"
              fullWidth
              type="text"
              autoComplete="current-name"
              size="small"
              margin={"normal"}
              name="first_name"
              {...formik.getFieldProps("first_name")}
            />
            <TextField
              id="outlined-name-input"
              label="Last Name"
              fullWidth
              type="text"
              autoComplete="current-name"
              size="small"
              margin={"normal"}
              name="last_name"
              {...formik.getFieldProps("last_name")}
            />
            <TextField
              id="outlined-email-input"
              label="Email"
              fullWidth
              type="email"
              autoComplete="current-email"
              {...formik.getFieldProps("email")}
              sx={{ borderRadius: "8px" }}
              margin={"normal"}
              size="small"
              name="email"
            />
            <ErrorMessage name="email">
              {(msg) => (
                <div style={{ color: "red", fontSize: "12px" }}>
                  Email {msg}
                </div>
              )}
            </ErrorMessage>
            <TextField
              id="outlined-password-input"
              label="Password"
              fullWidth
              type="password"
              autoComplete="current-password"
              {...formik.getFieldProps("password")}
              size="small"
              margin={"normal"}
              name="password"
            />
            <ErrorMessage name="password">
              {(msg) => (
                <div style={{ color: "red", fontSize: "12px" }}>
                  Password {msg}
                </div>
              )}
            </ErrorMessage>
            <div style={{ textAlign: "end" }}>
              <NavLink to="/login" style={{ color: "#6E3BA7" }}>
                LogIn
              </NavLink>
            </div>
            <Button
              variant="contained"
              type="submit"
              sx={{
                maxWidth: "300px",
                width: "100%",
                display: "block",
                margin: "20px auto",
                background: "#6E3BA7",
              }}
            >
              {load ? <CircularProgress size={25} /> : <div>Register</div>}
            </Button>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <NavLink to="/" style={{ color: "#6E3BA7" }}>
                Back to Home
              </NavLink>
            </div>
          </Container.Form>
        )}
      </Formik>
    </Container>
  );
};

export default Register;
