import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Alert, Label, Input, Button, Spinner } from "reactstrap";
import { login } from "../redux/actions/authActions";
import { Navigate } from "react-router-dom";

export default function Login() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [data, setData] = useState({ email: "", password: "" });
  const [errMsg, setErrMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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
    if (e.key === "Enter") {
      onFinish();
    }
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

        {errMsg || user?.errMsg ? (
          <Alert className="text-center" color="danger">
            {errMsg || user?.errMsg}
          </Alert>
        ) : null}

        <div>
          <Label>Email</Label>
          <Input
            name="email"
            bsSize="sm"
            placeholder="Email"
            value={data.email}
            onChange={inputHandler}
            onKeyDown={inputHandler}
            disabled={user?.isLoading}
          />
        </div>

        <div className="my-2">
          <Label>Password</Label>
          <div className="d-flex position-relative justify-content-end align-items-center">
            <Input
              type={showPassword ? "text" : "password"}
              name="password"
              bsSize="sm"
              placeholder="Password"
              value={data.password}
              onChange={inputHandler}
              onKeyDown={inputHandler}
              disabled={user?.isLoading}
            />
            <Button
              color="link"
              size="sm"
              className="position-absolute pe-2"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "hide" : "show"}
            </Button>
          </div>
        </div>

        <div className="d-flex justify-content-between my-2">
          <Button
            size="sm"
            color="primary"
            disabled={user?.isLoading}
            onClick={onFinish}
          >
            {user?.isLoading ? (
              <>
                <Spinner size="sm" /> Loading...
              </>
            ) : (
              "Login"
            )}
          </Button>
          <Button size="sm" color="link">
            forgot password?
          </Button>
        </div>
      </Card>
    </div>
  );
}
