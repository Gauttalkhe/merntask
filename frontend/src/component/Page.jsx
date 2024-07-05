
import { useEffect, useState } from "react";
import UserData from "./UserData.jsx";

const API = 'http://localhost:3000/api/data';

export default function Page() {

  const [users, setUsers] = useState([]);

  //  const [users, setUsers] = useState([]);


  const fetchUsers = async (url) => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const data = await res.json();
      setUsers(data); // Update state with fetched data
    } catch (error) {
      console.error('Fetch error:', error);
      // Handle error state here (e.g., setUsers([]) or show an error message)
    }
  };

  useEffect(() => {
    fetchUsers(API);
  }, [fetchUsers]);





  return (
  
<>       
 <div className='font-bold text-center text-2xl mt-4 mb-5'><h5>Transctions Table</h5></div>

        <form className="max-w-lg mx-auto">
          <div className="flex mb-3">
            <label
              htmlFor="search-dropdown"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Your Email
            </label>
            <button
              id="dropdown-button"
              data-dropdown-toggle="dropdown"
              className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
              type="button"
            >
              All categories{" "}
              <svg
                className="w-2.5 h-2.5 ms-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <div
              id="dropdown"
              className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdown-button"
              >
                <li>
                  <button
                    type="button"
                    className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Mockups
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Templates
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Design
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Logos
                  </button>
                </li>
              </ul>
            </div>
            <div className="relative w-full">
              <input
                type="search"
                id="search-dropdown"
                className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                placeholder="Search"
                required=""
              />
              <button
                type="submit"
                className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </div>
          </div>
        </form>





        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className=" text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Id
                </th>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Description
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                Image
                </th>
                <th scope="col" className="px-6 py-3">
                Sold
                </th>
                <th scope="col" className="px-6 py-3">
                dateOfSale
                </th>
              </tr>
            </thead>



            <UserData users={users} />

          </table>
        </div>


        <nav className="inline-flex items-center p-1 rounded bg-black space-x-2 mt-3">
          <a
            className="p-1 rounded border text-black bg-white hover:text-white hover:bg-blue-600 hover:border-blue-600"
            href="#"
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
          </a>
          <p className="text-gray-500">Page 10</p>
          <a
            className="p-1 rounded border text-black bg-white hover:text-white hover:bg-blue-600 hover:border-blue-600"
            href="#"
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </a>
        </nav>



        <div>
        
          <div className="flex flex-col items-center w-full max-w-screen-md p-6 pb-6 bg-white rounded-lg shadow-xl sm:p-8  ">
            <h2 className="text-xl font-bold">Monthly Revenue</h2>
            <span className="text-sm font-semibold text-gray-500">2020</span>
            <div className="flex items-end flex-grow w-full mt-2 space-x-2 sm:space-x-3">
              <div className="relative flex flex-col items-center flex-grow pb-5 group">
                <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
                  $37,500
                </span>
                <div className="relative flex justify-center w-full h-8 bg-indigo-200" />
                <div className="relative flex justify-center w-full h-6 bg-indigo-300" />
                <div className="relative flex justify-center w-full h-16 bg-indigo-400" />
                <span className="absolute bottom-0 text-xs font-bold">Jan</span>
              </div>
              <div className="relative flex flex-col items-center flex-grow pb-5 group">
                <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
                  $45,000
                </span>
                <div className="relative flex justify-center w-full h-10 bg-indigo-200" />
                <div className="relative flex justify-center w-full h-6 bg-indigo-300" />
                <div className="relative flex justify-center w-full h-20 bg-indigo-400" />
                <span className="absolute bottom-0 text-xs font-bold">Feb</span>
              </div>
              <div className="relative flex flex-col items-center flex-grow pb-5 group">
                <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
                  $47,500
                </span>
                <div className="relative flex justify-center w-full h-10 bg-indigo-200" />
                <div className="relative flex justify-center w-full h-8 bg-indigo-300" />
                <div className="relative flex justify-center w-full h-20 bg-indigo-400" />
                <span className="absolute bottom-0 text-xs font-bold">Mar</span>
              </div>
              <div className="relative flex flex-col items-center flex-grow pb-5 group">
                <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
                  $50,000
                </span>
                <div className="relative flex justify-center w-full h-10 bg-indigo-200" />
                <div className="relative flex justify-center w-full h-6 bg-indigo-300" />
                <div className="relative flex justify-center w-full h-24 bg-indigo-400" />
                <span className="absolute bottom-0 text-xs font-bold">Apr</span>
              </div>
              <div className="relative flex flex-col items-center flex-grow pb-5 group">
                <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
                  $47,500
                </span>
                <div className="relative flex justify-center w-full h-10 bg-indigo-200" />
                <div className="relative flex justify-center w-full h-8 bg-indigo-300" />
                <div className="relative flex justify-center w-full h-20 bg-indigo-400" />
                <span className="absolute bottom-0 text-xs font-bold">May</span>
              </div>
              <div className="relative flex flex-col items-center flex-grow pb-5 group">
                <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
                  $55,000
                </span>
                <div className="relative flex justify-center w-full h-12 bg-indigo-200" />
                <div className="relative flex justify-center w-full h-8 bg-indigo-300" />
                <div className="relative flex justify-center w-full h-24 bg-indigo-400" />
                <span className="absolute bottom-0 text-xs font-bold">Jun</span>
              </div>
              <div className="relative flex flex-col items-center flex-grow pb-5 group">
                <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
                  $60,000
                </span>
                <div className="relative flex justify-center w-full h-12 bg-indigo-200" />
                <div className="relative flex justify-center w-full h-16 bg-indigo-300" />
                <div className="relative flex justify-center w-full h-20 bg-indigo-400" />
                <span className="absolute bottom-0 text-xs font-bold">Jul</span>
              </div>
              <div className="relative flex flex-col items-center flex-grow pb-5 group">
                <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
                  $57,500
                </span>
                <div className="relative flex justify-center w-full h-12 bg-indigo-200" />
                <div className="relative flex justify-center w-full h-10 bg-indigo-300" />
                <div className="relative flex justify-center w-full h-24 bg-indigo-400" />
                <span className="absolute bottom-0 text-xs font-bold">Aug</span>
              </div>
              <div className="relative flex flex-col items-center flex-grow pb-5 group">
                <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
                  $67,500
                </span>
                <div className="relative flex justify-center w-full h-12 bg-indigo-200" />
                <div className="relative flex justify-center w-full h-10 bg-indigo-300" />
                <div className="relative flex justify-center w-full h-32 bg-indigo-400" />
                <span className="absolute bottom-0 text-xs font-bold">Sep</span>
              </div>
              <div className="relative flex flex-col items-center flex-grow pb-5 group">
                <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
                  $65,000
                </span>
                <div className="relative flex justify-center w-full h-12 bg-indigo-200" />
                <div className="relative flex justify-center w-full h-12 bg-indigo-300" />
                <div className="relative flex justify-center w-full bg-indigo-400 h-28" />
                <span className="absolute bottom-0 text-xs font-bold">Oct</span>
              </div>
              <div className="relative flex flex-col items-center flex-grow pb-5 group">
                <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
                  $70,000
                </span>
                <div className="relative flex justify-center w-full h-8 bg-indigo-200" />
                <div className="relative flex justify-center w-full h-8 bg-indigo-300" />
                <div className="relative flex justify-center w-full h-40 bg-indigo-400" />
                <span className="absolute bottom-0 text-xs font-bold">Nov</span>
              </div>
              <div className="relative flex flex-col items-center flex-grow pb-5 group">
                <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
                  $75,000
                </span>
                <div className="relative flex justify-center w-full h-12 bg-indigo-200" />
                <div className="relative flex justify-center w-full h-8 bg-indigo-300" />
                <div className="relative flex justify-center w-full h-40 bg-indigo-400" />
                <span className="absolute bottom-0 text-xs font-bold">Dec</span>
              </div>
            </div>
            <div className="flex w-full mt-3">
              <div className="flex items-center ml-auto">
                <span className="block w-4 h-4 bg-indigo-400" />
                <span className="ml-1 text-xs font-medium">Existing</span>
              </div>
              <div className="flex items-center ml-4">
                <span className="block w-4 h-4 bg-indigo-300" />
                <span className="ml-1 text-xs font-medium">Upgrades</span>
              </div>
              <div className="flex items-center ml-4">
                <span className="block w-4 h-4 bg-indigo-200" />
                <span className="ml-1 text-xs font-medium">New</span>
              </div>
            </div>
          </div>
        </div>
       

</>

  
  )
}
