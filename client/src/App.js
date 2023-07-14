import './App.css';
import AdminDashBord from "./AdminDashBord"
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddCompany from "./AddCompany"
function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
         <Route path="/" element={<AdminDashBord />} />
         <Route path="/add" element={<AddCompany/>}/>
      </Routes>
    </div>
  </BrowserRouter>
);
  
}

export default App;
