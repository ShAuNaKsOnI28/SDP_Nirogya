import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import Spinner from "./components/Spinner";
import ApplyDoctor from "./pages/ApplyDoctor";
import Appointments from "./pages/Appointments";
import BookingPage from "./pages/BookingPage";
import Hero from "./pages/Hero";
import HomePage from "./pages/HomePage";
import HomePageUser from "./pages/HomePageUser";
import Login from "./pages/Login";
import NotificationPage from "./pages/NotificationPage";
import Prescription from "./pages/Prescription";
import ProfilePage from "./pages/ProfilePage";
import Register from "./pages/Register";
import UserBlock from "./pages/UserBlock";
import Doctors from "./pages/admin/Doctors";
import Users from "./pages/admin/Users";
import DoctorAppointment from "./pages/doctor/DoctorAppointment";
import DoctorPrescription from "./pages/doctor/DoctorPrescription";
import GivePrescription from "./pages/doctor/GivePrescription";
import Profile from "./pages/doctor/Profile";
function App() {
  const { loading } = useSelector((state) => state.alerts);
  const { user } = useSelector((state) => state.user);
  return (
    <>
      <BrowserRouter>
        {loading ? (
          <Spinner />
        ) : (
          <Routes>
            <Route
              path="/apply-doctor"
              element={
                <ProtectedRoute>
                  <ApplyDoctor />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/doctor/profile/:id"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/doctor/book-appointment/:doctorId"
              element={
                <ProtectedRoute>
                  <BookingPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/user/give-prescription/:userId"
              element={
                <ProtectedRoute>
                  <GivePrescription />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/Users"
              element={
                <ProtectedRoute>
                  <Users />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/Doctors"
              element={
                <ProtectedRoute>
                  <Doctors />
                </ProtectedRoute>
              }
            />
            <Route
              path="/notification"
              element={
                <ProtectedRoute>
                  <NotificationPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="/home"
              element={
                <PublicRoute>
                  <Hero />
                </PublicRoute>
              }
            />

            <Route
              path="/register"
              element={
                <PublicRoute>
                  <Register />
                </PublicRoute>
              }
            />
            <Route
              path="/appointments"
              element={
                <ProtectedRoute>
                  <Appointments />
                </ProtectedRoute>
              }
            />
            <Route
              path="/prescription"
              element={
                <ProtectedRoute>
                  <Prescription />
                </ProtectedRoute>
              }
            />
            <Route
              path="/doctor-appointment"
              element={
                <ProtectedRoute>
                  <DoctorAppointment />
                </ProtectedRoute>
              }
            />
            <Route
              path="/doctor-prescription"
              element={
                <ProtectedRoute>
                  <DoctorPrescription />
                </ProtectedRoute>
              }
            />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <HomePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/homepageuser"
              element={
                <ProtectedRoute>
                  <HomePageUser />
                </ProtectedRoute>
              }
            />
            <Route
              path="/userBlock"
              element={
                <ProtectedRoute>
                  <UserBlock />
                </ProtectedRoute>
              }
            />
            {/* <Route path="/apply-doctor" element={<ApplyDoctor />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/doctor/profile/:id" element={<Profile />} />
            <Route path="/doctor/book-appointment/:doctorId" element={<BookingPage />} />
            <Route path="/admin/Users" element={<Users />} />
            <Route path="/admin/Doctors" element={<Doctors />} />
            <Route path="/notification" element={<NotificationPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Hero />} />
            <Route path="/register" element={<Register />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/doctor-appointment" element={<DoctorAppointment />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/homepageuser" element={<HomePageUser />} />
            <Route path="/userBlock" element={<UserBlock />} /> */}
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
