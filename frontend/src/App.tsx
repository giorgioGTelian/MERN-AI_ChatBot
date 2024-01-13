import Header from "./components/header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";


import Signup from "./pages/signup";
/*
import Chat from "./pages/Chat";
import NotFound from "./pages/NotFound"; */
//import { useAuth } from "./context/AuthContext";
//import Footer from "./components/footer/footer";

function App() {
  //const auth = useAuth(); 

  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        
        <Route path="/signup" element={<Signup />} />
        {/* 
        {auth?.isLoggedIn && auth.user && (
          <Route path="/chat" element={<Chat />} />
        )}
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </main>
  );
}

export default App;
