import React from 'react';
import DoctorList from './DoctorList';

const DoctorDetails = ({ doctor, similarDoctors, onSelect }) => (
  <div>
    <h2>{doctor.name}</h2>
    <p>Specialty: {doctor.specialty}</p>
    <p>Area: {doctor.area}</p>
    <p>Review Score: {doctor.review_score}</p>
    <h3>Similar Doctors:</h3>
    <DoctorList doctors={similarDoctors} onSelect={onSelect} />
  </div>
);

export default DoctorDetails;
