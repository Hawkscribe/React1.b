import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default function App() {
  return (
    <div className="container mt-5">
      <Componentee />
    </div>
  );
}

function Componentee() {
  const [form, setForm] = useState(new Map([
    ['abc', ['abc@gmail.com', '5', 'phno', 'breed']]
  ]));

  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [petn, setPetn] = useState('');
  const [num, setNum] = useState('');
  const [breed, setBreed] = useState('');
  const [validmess, setValidmess] = useState('');

  const add = () => {
    setValidmess('');
    if (num.length !== 10) {
      setValidmess('The number should be 10 digits long');
      return;
    }
    // Perform other validations if needed (e.g., email format)
    if (name && mail && petn && num && breed) {
      setForm(prevForm => {
        const form = new Map(prevForm);
        form.set(name, [mail, petn, num, breed]);
        return form;
      });
    }

    // Reset fields
    setName('');
    setMail('');
    setPetn('');
    setNum('');
    setBreed('');
  };

  return (
    <div>
      <h1 className="text-center mb-4">The Pet Adoption Form</h1>
      {validmess && <div className="alert alert-danger">{validmess}</div>}
      <div className="card mb-4">
        <div className="card-body">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="num" className="form-label">Phone Number</label>
              <input
                type="text"
                className="form-control"
                id="num"
                placeholder="Phone Number"
                value={num}
                onChange={(e) => setNum(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="petn" className="form-label">Number of Pets to Adopt</label>
              <input
                type="text"
                className="form-control"
                id="petn"
                placeholder="Number of Pets to Adopt"
                value={petn}
                onChange={(e) => setPetn(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="breed" className="form-label">Breed</label>
              <input
                type="text"
                className="form-control"
                id="breed"
                placeholder="Breed"
                value={breed}
                onChange={(e) => setBreed(e.target.value)}
              />
            </div>
            <button type="button" className="btn btn-primary" onClick={add}>Add the Commitment</button>
          </form>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Number of Pets</th>
                <th>Phone Number</th>
                <th>Breed</th>
              </tr>
            </thead>
            <tbody>
              {Array.from(form.entries()).map(([name, [mail, petn, num, breed]], index) => (
                <tr key={index}>
                  <td>{name}</td>
                  <td>{mail}</td>
                  <td>{petn}</td>
                  <td>{num}</td>
                  <td>{breed}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
