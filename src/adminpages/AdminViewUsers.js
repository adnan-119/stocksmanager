import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Viewusers() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:2123/viewusers');
      setUsers(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  const deleteJobSeeker = async (email) => {
    try {
      await axios.delete(`http://localhost:2123/deleteuser/${email}`);
      fetchUsers();
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div style={{ textAlign: 'center', marginBottom: '550px' }}>
      <div>
        <table className='outsideboxes' align="center" style={{ marginTop: '300px', width: '1000px', height: '60px', marginLeft: '400px', textAlign: 'center', overflow: 'scroll' }}>
          <thead>
            <tr className='insideboxes' style={{ color: "white", textAlign: 'center', alignContent: 'center', backgroundColor: ' #02A4EF' }}>
              <th>Full Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Contact</th>
              <th>Adhaar</th>
              <th>Annual income</th>
              <th style={{ width: '100px'}}>Action</th> {/* Set fixed width for Action column */}
            </tr>
          </thead>
          <tbody>
            {Array.isArray(users) && users.length > 0 ? (
              users.map((user, index) => (
                <tr key={index} className='insideboxes'>
                  <td style={{ paddingLeft: '10px' }}>{user.name}</td>
                  <td style={{ paddingLeft: '10px' }}>{user.email}</td>
                  <td style={{ paddingLeft: '10px' }}>{user.age}</td>
                  <td style={{ paddingLeft: '10px'}}>{user.contact}</td>
                  <td style={{ paddingLeft: '10px'}}>{user.aadhar}</td>
                  <td style={{ paddingLeft: '10px'}}>{user.annualIncome}</td>

                  <td style={{textAlign:'center'}}>
                    <button onClick={() => deleteJobSeeker(user.email)} className='button'>Delete</button>
                    
                  </td>
                </tr>
              ))
            ) : (
                <tr>
                  <td colSpan="7" align='center' style={{ color: "white", textAlign: 'center', fontFamily: 'font-family:Verdana, Geneva, Tahoma, sans-serif', fontWeight: 'bold' }}>Data Not Found</td>
                </tr>
              )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
