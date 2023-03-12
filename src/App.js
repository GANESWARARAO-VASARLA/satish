import React, { useState } from 'react';

function Resume() {
  const [personalInfo, setPersonalInfo] = useState({
    name: 'John Doe',
    email: 'johndoe@email.com',
    phone: '555-555-5555',
    address: '123 Main St, Anytown, USA'
  });

  const [workExperience, setWorkExperience] = useState([
    {
      position: 'Software Developer',
      company: 'ABC Company',
      startDate: 'January 2018',
      endDate: 'Present',
      description: 'Developed and maintained software applications'
    },
    {
      position: 'Web Developer',
      company: 'XYZ Company',
      startDate: 'June 2015',
      endDate: 'December 2017',
      description: 'Built and maintained websites'
    }
  ]);

  const [education, setEducation] = useState([
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'University of Anytown',
      graduationDate: 'May 2015'
    }
  ]);

  const [skills, setSkills] = useState([
    'JavaScript',
    'React',
    'HTML',
    'CSS',
    'Node.js',
    'Git'
  ]);

  return (
    <div>
      <h1>{personalInfo.name}</h1>
      <p>{personalInfo.email}</p>
      <p>{personalInfo.phone}</p>
      <p>{personalInfo.address}</p>

      <h2>Work Experience</h2>
      {workExperience.map((job, index) => (
        <div key={index}>
          <h3>{job.position}</h3>
          <p>{job.company}</p>
          <p>{job.startDate} - {job.endDate}</p>
          <p>{job.description}</p>
        </div>
      ))}

      <h2>Education</h2>
      {education.map((degree, index) => (
        <div key={index}>
          <h3>{degree.degree}</h3>
          <p>{degree.school}</p>
          <p>{degree.graduationDate}</p>
        </div>
      ))}

      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default Resume;
