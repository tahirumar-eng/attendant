import SignIn from "./features/signin";
import ChangePassword from "./features/change_password";
import Dashboard from "./features/dashboard";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/protected_route";
import AttendanceRecord from "./features/attendance_record";
import PageNotFound from "./components/page_not_found";
import "./App.css";
import TodayAvailability from "./features/today_availability";
import OverallStats from "./features/overall_stats";
import Setting from "./features/setting";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<SignIn type="admin" />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/attendance-record" element={<AttendanceRecord />} />
          <Route path="/today-availability" element={<TodayAvailability />} />
          <Route path="/overall-stats" element={<OverallStats />} />
          <Route path="/settings" element={<Setting />} />
        </Route>
        {/* 👇️ only match this when no other routes match */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
