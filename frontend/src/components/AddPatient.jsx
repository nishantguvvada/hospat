import {useState} from "react";
import axios from "axios";

export default function AddPatient() {

    const [patName, setPatName] = useState("");
    const [patAge, setPatAge] = useState(0);
    const [patGender, setPatGender] = useState("");

    async function addPatientToDb() {
        try{
            const response = await axios.post("http://localhost:3000/add", {
                name: patName,
                age: parseInt(patAge),
                gender: patGender
            });
           console.log(response);
        } catch(err) {
            console.log(err);
        }

    }

    return <div>
    <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Patient Name</label>
        <input onChange={(e)=>{
            e.preventDefault;
            setPatName(e.target.value);
            }
        } 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ABC" required />
    </div>
    <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Patient Age</label>
        <input onChange={(e)=>{
            e.preventDefault;
            setPatAge(e.target.value);
            }
        } className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="15/20" required />
    </div>
    <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Patient Gender</label>
        <input onChange={(e)=>{
            e.preventDefault;
            setPatGender(e.target.value);
            }
        } className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Male/Female" required />
    </div>
    <button onClick={addPatientToDb} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add Patient</button>
</div>
}