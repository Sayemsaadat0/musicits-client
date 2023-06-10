/* import React, { useEffect, useState } from 'react';
import { Fade } from 'react-reveal';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2'

const ManageUsers = () => {

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:4444/users')
        return res.json()
    })

    const makeAdmin = user =>{
        fetch(`http://localhost:4444/users/admin/${user._id}`,{
            method : 'PATCH'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount){
                refetch()
                Swal.fire(`${user.name} is an admin now`)
            }
        })
    }

    return (
        <div className='w-full h-screen p-4'>
            <Helmet>
                <title>Manage Users</title>
            </Helmet>
            <Fade left>
                <SectionTitle title1={'Manage'} title2={'All Users'}></SectionTitle>
                <div>
                    <h3 className='text-3xl font-bold underline'>Total Users : {users.length} </h3>
                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name & Job</th>
                                    <th>email</th>
                                    <th>role</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, index) => (
                                    <tr key={user._id} className='table_row'>
                                        <td>{++index}</td>
                                        <td>
                                            <h4 className='font-bold'>{user.name}</h4> <br />
                                        </td>
                                        <td>{user.email}</td>
                                        <td>   {user.role === 'student' ? (
                                            <td>Student</td>
                                        ) : user.role === 'instructor' ? (
                                            <td>Instructor</td>
                                        ) : user.role === 'admin' ? (
                                            <td>Admin</td>
                                        ) : (
                                            <td>Unknown Role</td>
                                        )}</td>
                                        <td>
                                            <button onClick={()=>makeAdmin(user)} className='button'>Make Admin</button> <br />
                                            <button className='button mt-2'>Make Instructor</button>
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
 */
import React, { useEffect, useState } from 'react';
import { Fade } from 'react-reveal';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const ManageUsers = () => {
  const { data: users = [], refetch } = useQuery(['users'], async () => {
    const res = await fetch('http://localhost:4444/users');
    return res.json();
  });

  const [disabledUsers, setDisabledUsers] = useState([]);

  const makeAdmin = (user) => {
    fetch(`http://localhost:4444/users/admin/${user._id}`, {
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
    fetch(`http://localhost:4444/users/instructor/${user._id}`, {
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

  const isUserDisabled = (userId) => disabledUsers.includes(userId);

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
              {/* head */}
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name &amp; Job</th>
                  <th>email</th>
                  <th>role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user._id} className='table_row'>
                    <td>{++index}</td>
                    <td>
                      <h4 className='font-bold'>{user.name}</h4> <br />
                    </td>
                    <td>{user.email}</td>
                    {/* <td>{user.role}</td> */}
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
                        disabled={isUserDisabled(user._id)} >
                        Make Admin
                      </button>
                      <br />
                      <button onClick={()=>makeInstructor(user)} className='button mt-2'>Make Instructor</button>
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
