import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import About from "./pages/about/About";
import AuthLayout from "./pages/auth/AuthLayout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Contacts from "./pages/contacts/Contacts";
import Landing from "./pages/landing/Landing";
import Repertoire from "./pages/repertoire/Repertoire";
import Tickets from "./pages/tickets/Tickets";

function App() {
  return (
    <div className='font-["PlayfairDisplay"] bg-[#F2F2ED]'>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/login"
          element={
            <AuthLayout>
              <Login />
            </AuthLayout>
          }
        />
        <Route
          path="/register"
          element={
            <AuthLayout>
              <Register />
            </AuthLayout>
          }
        />
        <Route
          path="/contacts"
          element={
            <Layout>
              <Contacts />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/tickets"
          element={
            <Layout>
              <Tickets />
            </Layout>
          }
        />
        <Route
          path="/repertoire"
          element={
            <Layout>
              <Repertoire />
            </Layout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
