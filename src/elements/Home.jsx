import ListUser from './ListUser'
import { Link } from 'react-router-dom'
import { Suspense } from "react";

function Home() {

  return (
    <div className="w-screen py-20 flex justify-center flex-col items-center">
        <div className="flex items-center justify-between gap-1 mb-5">
            <h1 className="text-4xl font-bold">React.js 18 Node Express CRUD (Create Read Update and Delete) | MySQL Tailwind CSS</h1>
        </div> 
        <div className="overflow-x-auto py-10">
            <div className="mb-2 w-full text-right">
                <Link
                to="/create"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-4 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Add New User
                </Link>
            </div>
            <Suspense fallback="Loading...">
                <ListUser/>
            </Suspense>
        </div>
    </div>
  )
}

export default Home