import React, { useEffect, useState } from 'react';
import { Fade } from 'react-reveal';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const ManageUsers = () => {
  const { data: users = [], refetch } = useQuery(['users'], async () => {
    const res = await fetch(' https://musicits-server.vercel.app/users');
    return res.json();
  });

  const [disabledUsers, setDisabledUsers] = useState([]);

  const makeAdmin = (user) => {
    fetch(`https://musicits-server.vercel.app/users/admin/${user._id}`, {
      method: 'PATCH',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire(`${user.name} is an admin now`);
          setDisabledUsers((prevDisabledUsers) => [
            ...prevDisabledUsers,
            user._id,
          ]);
        }
      });
  };

  const makeInstructor = (user) => {
    console.log(user);
    fetch(`https://musicits-server.vercel.app/users/instructor/${user._id}`, {
      method: 'PATCH',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire(`${user.name} is now an instructor`);
          setDisabledUsers((prevDisabledUsers) => [
            ...prevDisabledUsers,
            user._id,
          ]);
        }
      });
  };

  const isUserDisabled = (role) => disabledUsers.includes(role);

  return (
    <div className='w-full h-screen p-4'>
      <Helmet>
        <title>Manage Users</title>
      </Helmet>
      <Fade left>
        <SectionTitle title1={'Manage'} title2={'All Users'}></SectionTitle>
        <div>
          <h3 className='text-3xl font-bold underline'>
            Total Users : {users.length}
          </h3>
          <div className='overflow-x-auto'>
            <table className='table'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name </th>
                  <th>email</th>
                  <th>role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(users) &&
                  users.map((user, index) => (
                    <tr key={user._id} className='shadow-xl border'>
                      <td>{++index}</td>
                      <td>
                        <h4 className='font-bold'>{user.name}</h4> <br />
                      </td>
                      <td>{user.email}</td>
                      <td>
                        {user.role === 'student' ? (
                          <td>Student</td>
                        ) : user.role === 'instructor' ? (
                          <td>Instructor</td>
                        ) : user.role === 'admin' ? (
                          <td>Admin</td>
                        ) : (
                          <td>Unknown Role</td>
                        )}
                      </td>
                      <td>
                        <button
                          onClick={() => makeAdmin(user)}
                          className='button'
                          disabled={isUserDisabled(user.role === 'admin' || user.role === 'instructor')}>
                          Make Admin
                        </button>
                        <br />
                        <button
                          disabled={isUserDisabled(user.role === 'admin' || user.role === 'instructor')}
                          onClick={() => makeInstructor(user)}
                          className='button mt-2'>
                          Make Instructor
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default ManageUsers;
