import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Button, Card } from "reactstrap";
import { logout } from "../redux/actions/authActions";

export default function Home() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  if (!user.id) {
    return <Navigate to={"/login"} />;
  }

  return (
    <div className="d-flex flex-column align-items-center p-5">
      <h1>Guest Page</h1>

      <Card className="text-center shadow w-50 p-3">
        <label>Email:</label>
        <h5>{user.email}</h5>
        <label>Role:</label>
        <h5>{user.role}</h5>

        <div>
          <Button color="danger" size="sm" onClick={() => logout(dispatch)}>
            Logout
          </Button>
        </div>
      </Card>
    </div>
  );
}
