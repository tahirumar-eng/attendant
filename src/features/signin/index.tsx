import { ChangeEvent, useState } from "react";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import "./styles.css";
import TextInput from "../../components/ui/text_field";
import Button from "../../components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {
  UserRole,
  authenticateUser,
  selectUsers,
  changePincodeRequest,
  selectIsAuthenticated,
} from "./authSlice";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

interface SignInProps {
  type: UserRole;
}

const SignIn = ({ type }: SignInProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const users = useSelector(selectUsers);
  const [{ username, pincode }, setInputFieldStates] = useState({
    username: "",
    pincode: "",
  });
  const from = location.state?.from?.pathname || "/";
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputFieldStates((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    const user = users.find(
      (usr) =>
        usr.email === username && usr.pincode === pincode && usr.role === type
    );
    if (!user) {
      alert("Invalid credentials");
      return;
    } else if (user.needsPinChange) {
      dispatch(changePincodeRequest(user));
      navigate("/change-password");
    } else {
      dispatch(authenticateUser(user));
      navigate(from, { replace: true });
    }
  };
  const header = type === "user" ? "Sign In as User" : "Sign In as Admin";
  const footer = (
    <>
      {type === "user" ? (
        <p>
          Or Are you an admin?{" "}
          <span className="link">Sign in as admin instead?</span>
        </p>
      ) : (
        <p>
          Or Are you an user?{" "}
          <span className="link">Sign in as user instead?</span>
        </p>
      )}
    </>
  );
  if (isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div className="auth_container">
      <p className="auth_heading">{header}</p>
      <form onSubmit={handleSubmit}>
        <TextInput
          type="email"
          name="username"
          placeholder="Username"
          value={username}
          onChange={handleChange}
          icon={<PersonIcon sx={{ color: "#00c0aa" }} />}
        />
        <TextInput
          type="password"
          name="pincode"
          maxLength={4}
          placeholder="Pincode"
          value={pincode}
          onChange={handleChange}
          icon={<LockIcon sx={{ color: "#00c0aa" }} />}
        />
        <Button type="submit" label="Login" onClick={handleSubmit} />
      </form>
      <p>Or Sign in using social platforms</p>
      <div className="auth_social_platforms">
        <FacebookIcon className="social_platform_icon" />
        <TwitterIcon className="social_platform_icon" />
        <GoogleIcon className="social_platform_icon" />
        <LinkedInIcon className="social_platform_icon" />
      </div>
      {footer}
    </div>
  );
};

export default SignIn;
