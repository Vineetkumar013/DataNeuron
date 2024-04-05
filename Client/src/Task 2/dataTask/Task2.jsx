import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './YourComponent.css'; // Import CSS file for styling

const YourComponent = () => {
  // State variables to manage form data and counts
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [entryId, setEntryId] = useState('');
  const [entries, setEntries] = useState([]); // Initialize entries as an empty array
  const [addCount, setAddCount] = useState(0);
  const [updateCount, setUpdateCount] = useState(0);

  // Fetch counts on component mount
  useEffect(() => {
    getEntries();
    getCounts();
  }, []);

  // Function to fetch entries
  const getEntries = async () => {
    try {
      const response = await axios.get('https://data-neuron-server.vercel.app/api/v1/data');
      setEntries(response.data.GetData); // Fix the case of 'GetData'
    } catch (error) {
      console.error('Error fetching entries:', error);
    }
  };

  // Function to handle form submit for adding entry
  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://data-neuron-server.vercel.app/api/v1/data/create', { name, age });
      setName('');
      setAge('');
      getCounts();
      getEntries(); // Refresh entries after adding new one
    } catch (error) {
      console.error('Error adding entry:', error);
    }
  };

  // Function to handle form submit for updating entry
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://data-neuron-server.vercel.app/api/v1/data/${entryId}`, { name, age });
      setName('');
      setAge('');
      setEntryId('');
      getCounts();
      getEntries(); // Refresh entries after updating
    } catch (error) {
      console.error('Error updating entry:', error);
    }
  };

  // Function to fetch counts
  const getCounts = async () => {
    try {
      const response = await axios.get('https://data-neuron-server.vercel.app/api/v1/get/count');
      setAddCount(response.data.addCount);
      setUpdateCount(response.data.updateCount);
    } catch (error) {
      console.error('Error fetching counts:', error);
    }
  };

  // Function to handle edit button click
  const handleEdit = (entry) => {
    setName(entry.name);
    setAge(entry.age);
    setEntryId(entry._id);
  };

  return (
    <div className="container2">
      <h2>Add / Edit Entry</h2>
      <form onSubmit={entryId ? handleUpdate : handleAdd}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required className="input-field" />
        <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} required className="input-field" />
        <button type="submit" className="submit-btn">{entryId ? 'Update' : 'Add'}</button>
      </form>
      <div>
        <h2>Entries</h2>
        <ul>
          {entries.map(entry => (
            <li key={entry._id}>
              <span>{entry.name} - {entry.age}</span>
              <button onClick={() => handleEdit(entry)} className="edit-btn">Edit</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Counts</h2>
        <p>Add Count: {addCount}</p>
        <p>Update Count: {updateCount}</p>
      </div>
    </div>
  );
};

export default YourComponent;
