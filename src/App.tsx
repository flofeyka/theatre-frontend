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
import Lk from "./pages/lk/Lk";

function App() {
  return (
    <div className='font-["PlayfairDisplay"] bg-[#F2F2ED]'>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/" element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
            <Route path="/lk" element={<Lk />} />
        </Route>
        <Route path="/" element={<Layout />}>
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about" element={<About />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/repertoire" element={<Repertoire />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
