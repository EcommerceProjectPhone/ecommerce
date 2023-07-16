import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from '../Home/Navbar.jsx';
import Footer from '../Home/Footer.jsx';
import "./admin.css";

const AdminDashBord = ({ handleLogout, UserRole, userId }) => {
  console.log(UserRole);
  const [company, setCompany] = useState([]);

  const getAllCompanies = () => {
    axios.get("http://localhost:3000/company")
      .then((res) => {
        setCompany(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllCompanies();
  }, []);

  return (
    <div>
      <Navbar userId={userId} handleLogout={handleLogout} />
      {UserRole === 'admin' ? (
        <div>
          <h1 className='claa'>TOP MARKET STATISTICS</h1>
          <table id="customers">
            <thead>
              <tr>
                <th>Company</th>
                <th>Rating</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {company.map((e, index) => (
                <tr key={index}>
                  <td className='i'>
                    <img className='img' src={e.Image} alt={e.company} />
                    <Link to={`/company/${e.id}`} key={e.id}>
                      <div className='a'>
                        {e.company}
                      </div>
                    </Link>
                  </td>
                  <td className='rat'>
                    {e.rating}
                    <img className='iv' src='https://www.iconpacks.net/icons/2/free-rating-star-icon-2793-thumb.png' alt="rating" />
                  </td>
                  <td>hey</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Link to="/addcompany">
            <button id='iiid' className='btn'>ADD</button>
          </Link>
        </div>
      ) : (
        <div className='access'>
          Sorry, you are not allowed to access this page as a {UserRole}.
        </div>
      )}
      <Footer />
    </div>
  );
};

export default AdminDashBord;
