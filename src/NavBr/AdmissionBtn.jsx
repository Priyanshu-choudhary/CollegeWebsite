import React from 'react';

const AdmissionButton = () => {
  // Get the current year and the next year
  const currentYear = new Date().getFullYear();
  const nextYear = currentYear + 1;

  // Format the academic year (e.g., 2023-2024)
  const academicYear = `${currentYear}-${nextYear}`;

  return (
    <div className="admission-button-container">
      <button className="admission-button">
      <p className="color-transition">
        *New
      </p>
        Admissions <span className="highlight">{academicYear}</span>
      </button>
    </div>
  );
};

export default AdmissionButton;