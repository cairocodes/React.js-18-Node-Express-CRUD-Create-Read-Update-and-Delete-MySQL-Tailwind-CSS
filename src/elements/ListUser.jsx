import axios from 'axios'; //npm install axios https://www.npmjs.com/package/react-axios
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'

export default function ListUser() {
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
        getUsers();
    }, []);
   
    function getUsers() { 
        axios.get('http://localhost:3001/api/users').then(function(response) {
            console.log(response.data);
            setUsers(response.data);
        });
    }

    const deleteUser = (id) => {
        axios.delete(`http://localhost:3001/api/delete/${id}`).then(function(response){
            console.log(response.data);
            getUsers();
        });
    }
    
    return (
        <table className="table table-zebra">
            <thead className="text-sm text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th className="py-3 px-6">#</th>
                    <th className="py-3 px-6">Name</th>
                    <th className="py-3 px-6">Email</th>
                    <th className="py-3 px-6">Username</th>
                    <th className="py-3 px-6 text-center">Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, key) =>
                    <tr key={key} className="bg-white border-b">
                        <td className="py-3 px-6">{user.id}</td>
                        <td className="py-3 px-6">{user.name}</td>
                        <td className="py-3 px-6">{user.email}</td>
                        <td className="py-3 px-6">{user.username}</td>
                        <td className="flex justify-center gap-1 py-3">
                            <Link
                                to={`/read/${user.id}`} 
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                Read
                            </Link>
                            <Link className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900" 
                                to={`edit/${user.id}/`}>
                                Edit
                            </Link>
                            <button onClick={() => deleteUser(user.id)} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                                Delete</button>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}