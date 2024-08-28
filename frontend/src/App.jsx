import { useState } from 'react';
import axios from "axios";
import Card from "./components/Card";
import AddPatient from './components/AddPatient';

function App() {
  const [patients, setPatients] = useState([]);

  const patientList = async () => {
    const response = await axios.get("http://localhost:3000/");
    console.log(response.data.data);
    setPatients(response.data.data);
  }

  return (
    <div className="grid h-screen place-items-center">
      <div className="h-screen flex flex-row gap-10 items-center justify-content">
        <div className="flex flex-col items-center justify-content">
          {patients.map(patient => 
            <Card props={patient}/>)}
        </div>
        <div className="flex items-center justify-content">
          <button onClick={patientList} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">See Patient List</button>
        </div>
        <div className="flex items-center justify-content">
          <div>
            <AddPatient/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
