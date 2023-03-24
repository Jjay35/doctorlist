import React from 'react';

const DoctorList = ({ doctors , onSelect }) => (
  <ul>
    {doctors.map((doctor) => (
      <li key={doctor.id} onClick={() => onSelect(doctor.id)}>
        {doctor.name} - {doctor.specialty} - {doctor.area} - {doctor.review_score}
      </li>
    ))}
  </ul>
)


export default DoctorList;