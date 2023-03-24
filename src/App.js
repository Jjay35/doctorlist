
import './App.css';
import DoctorList from './components/DoctorList.js';
import DoctorDetails from './components/DoctorDetails';
import {useState, useEffect} from 'react';
import data from './data.json';

const get_similar_doctors = (doctors, id) => {
  const selectedDoctor = doctors.find((doctor) => doctor.id === id);
  return doctors.filter(
    (doctor) =>
      doctor.id !== id &&
      (doctor.specialty === selectedDoctor.specialty ||
      doctor. area === selectedDoctor.area)
  );
};

function App() {
  const [selectedDoctorId, setSelectedDoctorId] = useState(null);
  const [similarDoctors, setSimilarDoctors] = useState([]);

  useEffect(() => {
    if (selectedDoctorId) {
      setSimilarDoctors(get_similar_doctors(data.doctors, selectedDoctorId));
    }  
  }, [selectedDoctorId]);

  const selectedDoctor = data.doctors.find(
    (doctor) => doctor.id === selectedDoctorId
  );

  return (
    <div className="App">
      <h1>Doctors</h1>
      <DoctorList doctors = {data.doctors} onSelect={(id) =>  setSelectedDoctorId(id)}/>
      <h1>Selected Doctor:</h1>
      {selectedDoctor && (<DoctorDetails
          doctor={selectedDoctor}
          similarDoctors={similarDoctors}
          onSelect={(id) => setSelectedDoctorId(id)}
        />
      )}
    </div>
  );
}

export default App;
