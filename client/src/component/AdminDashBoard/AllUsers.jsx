import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../Home/Navbar.jsx';
import Footer from '../Home/Footer.jsx';
import './admin.css';

const AllUsers = ({ handleLogout, UserRole, userId }) => {
  const [users, setUsers] = useState([]);

  const getAllUsers = () => {
    axios
      .get('http://localhost:3000/users/')
      .then((res) => {
        setUsers(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div>
      <Navbar userId={userId} handleLogout={handleLogout} />
      <div className="table-container">
        <h1 className="claa">All Users</h1>
        <table id="customers">
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Date of Creation</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className='rat'>{user.username}</td>
                <td className='rat' >{user.role}</td>
                <td className='rat'>{user.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="footer-id">
        <Footer />
      </div>
    </div>
  );
};

export default AllUsers;
