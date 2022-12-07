import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Form, FormGroup, Alert, Label, Input, Button } from "reactstrap";
import { login } from "../redux/actions/authActions";
import { Navigate } from "react-router-dom";

export default function Login() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [data, setData] = useState({ email: "", password: "" });
  const [errMsg, setErrMsg] = useState("");

  const onFinish = () => {
    if (!data?.email || !data?.password) {
      return setErrMsg("Please input all fields!");
    }
    login(data, dispatch);
  };

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    setErrMsg("");
  };

  if (user.role === "Admin") {
    return <Navigate to={"/admin"} />;
  }

  if (user.role === "Guest") {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="d-flex justify-content-center p-5">
      <Card className="w-25 p-5 shadow">
        <h3>Login</h3>

        {errMsg ? (
          <Alert className="text-center" color="danger">
            {errMsg}
          </Alert>
        ) : null}

        {/* <Form>
          <FormGroup> */}
        <Label>Email</Label>
        <Input
          name="email"
          bsSize="sm"
          placeholder="Email"
          value={data.email}
          onChange={inputHandler}
        />
        {/* </FormGroup>

          <FormGroup> */}
        <Label>Password</Label>
        <Input
          name="password"
          bsSize="sm"
          placeholder="Password"
          value={data.password}
          onChange={inputHandler}
        />
        {/* </FormGroup> */}

        <div className="d-flex justify-content-between my-2">
          <Button size="sm" color="primary" onClick={onFinish}>
            Login
          </Button>
          <Button size="sm" color="link">
            forgot password?
          </Button>
        </div>
        {/* </Form> */}
      </Card>
    </div>
  );
}
