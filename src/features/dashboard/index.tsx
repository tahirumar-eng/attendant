import SettingsIcon from "@mui/icons-material/Settings";
import OptionCard from "../../components/ui/option_card";
import { useSelector } from "react-redux";
import { selectAuthenicatedUser, selectIsAdmin } from "../signin/authSlice";
import { getFullName } from "../../app/utils";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const userMenuOptions = [
  { label: "Punch Attendance", navigateTo: "/attendance-record" },
  { label: "Apply for leave", navigateTo: "apply-for-leave" },
  { label: "Watch previous record", navigateTo: "previous-record" },
];

const adminMenuOptions = [
  { label: "Today's Availability", navigateTo: "today-availability" },
  { label: "Overall Stats", navigateTo: "overall-stats" },
  { label: "Settings", navigateTo: "settings" },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const isAdmin = useSelector(selectIsAdmin);
  const authenticateUser = useSelector(selectAuthenicatedUser);
  const menuOptions = isAdmin ? adminMenuOptions : userMenuOptions;

  return (
    <div className="dashboard_container">
      <div className="setting_icon">
        <SettingsIcon sx={{ color: "#00c0aa" }} />
      </div>
      <div className="avatar_container">
        <img src="male.png" alt="User Avatar" className="user_avatar" />d
      </div>
      <div className="greeting">{getFullName(authenticateUser)}</div>
      <div className="menu_options_container">
        {menuOptions.map((option, index) => (
          <div
            className="menu_option"
            onClick={() => navigate(option.navigateTo)}
            key={index}
          >
            <OptionCard classes="menu_option" title={option.label} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
