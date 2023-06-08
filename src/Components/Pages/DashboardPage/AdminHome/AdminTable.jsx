import React from 'react';

const AdminTable = () => {
    return (
        <div className='box bg-[#d6e8ee] '>
            <div className="overflow-x-auto">
                <table className="table w-[400px]">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>class</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <td>1</td>
                            <td>Cycycy Ganderton</td>
                            <td>Quality </td>
                            <td>Instractor</td>
                        </tr >
                        {/* row 1 */}
                        <tr >
                            <td>1</td>
                            <td>Cycycy Ganderton</td>
                            <td>Quality </td>
                            <td>Instractor</td>
                        </tr>
                        {/* row 1 */}
                        <tr>
                            <td>1</td>
                            <td>Cycycy Ganderton</td>
                            <td>Quality </td>
                            <td>Instractor</td>
                        </tr>
                      
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminTable;