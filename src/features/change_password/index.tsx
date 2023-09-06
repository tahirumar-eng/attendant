import { ChangeEvent, useEffect, useState } from "react";
import ErrorOutlineIcon from "@mui/icons-material/Error";
import "./styles.css";
import Modal from "../../components/ui/modal";
import TextInput from "../../components/ui/text_field";
import Button from "../../components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import {
  changeUserPincode,
  selectAuthenicatedUser,
  selectIsAdmin,
  logout,
} from "../signin/authSlice";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const navigate = useNavigate();
  const isAdmin = useSelector(selectIsAdmin);
  const header = isAdmin ? "Sign In As Admin" : "Sign In As User";
  const [error, setError] = useState<null | string>(null);
  const dispatch = useDispatch();
  const [{ pincode, confirm_pincode }, setInputFieldStates] = useState({
    pincode: "",
    confirm_pincode: "",
  });
  const authUser = useSelector(selectAuthenicatedUser);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  }, [error]);

  useEffect(() => {
    if (authUser && !authUser.needsPinChange) {
      navigate(-1);
    }
  }, [navigate, authUser]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputFieldStates((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleClose = () => {
    setInputFieldStates({
      pincode: "",
      confirm_pincode: "",
    });
    dispatch(logout());
  };
  const handleSave = () => {
    if (!authUser) return;
    if (pincode !== confirm_pincode) {
      setError("Error: Pincode doesnot match");
    } else {
      dispatch(changeUserPincode({ newPincode: pincode, userId: authUser.id }));
      navigate("/");
    }
  };
  if (!authUser) return null;
  return (
    <div className="password_change_container">
      <span className="heading">{header}</span>
      <Modal open={true} onClose={handleClose} heading1="Change Pincode">
        <div className="modal_container">
          <div className="text_fields">
            <TextInput
              type="password"
              name="pincode"
              placeholder="Pincode"
              value={pincode}
              maxLength={4}
              onChange={handleChange}
              style={{ width: "150px", backgroundColor: "#fffcff" }}
            />
            <TextInput
              type="password"
              name="confirm_pincode"
              placeholder="Confirm Pincode"
              maxLength={4}
              value={confirm_pincode}
              onChange={handleChange}
              style={{ width: "150px", backgroundColor: "#fffcff" }}
            />
          </div>
          {error && (
            <div className="error_message">
              <span>{error}</span>
              <ErrorOutlineIcon sx={{ color: "#dc1140" }} />
            </div>
          )}
          <div className="buttons">
            <Button
              label="Cancel"
              onClick={handleClose}
              style={{
                background: "#d7163b",
                textTransform: "none",
                width: "110px",
              }}
            />
            <Button
              label="Save"
              onClick={handleSave}
              style={{
                background: "#1ddcc1",
                textTransform: "none",
                width: "110px",
              }}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ChangePassword;
