import React, {Component} from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
//import "./styles.css";

const patient = [
  {
      patientId : '60903a9f513609de503835c6',
      name: 'QRcode within Browser'
  }
];


// const PatientQrPage = () => {
//   return (
//     <>
//       {patient.map((patient, index) => (
//         <h5 key={index}>
//           <Link to={`https://www.mycovidnow.com/patient/qr/${patient.patientId}`}>{patient.name}'s Page</Link>
//         </h5>
//       ))}
      
//     </>
//   );
// };

const PatientQrComponent = ({ match }) => {
  const {
    params: { patientId }
  } = match;

  return (
    <>
      <p>
        <strong>Patient ID: </strong>
        {patientId}
      </p>
      <p>
        <strong>Name: </strong>
        {patient[patientId - 1].name}
      </p>
    </>
  );
};

// const PatientPage = () => {
//   return (
//     <section className="App">
//       <Router>
//         <Link to="/users">Patients</Link>
//         <Route exact path="/patient/:id" component={PatientQrComponent} />
//       </Router>
//     </section>
//   );
// };

