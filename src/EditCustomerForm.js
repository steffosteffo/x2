import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import './EditCustomerForm.css'


function EditCustomerForm() {
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [hemligt, setHemligt] = useState('');

  useEffect(() => {
     fetchCustomers();
  }, ); /// denna uppdaterar listan varje gång :-) !!!!!


  const fetchCustomers= async () => {
    try {
     
     //MED MONGO!!
     //const response = await axios.get('https://your-backend-url/api/customers');
    // const response = await axios.get('https://Dev/invoice-app-frontend/src/invoice-app-backend/routes/customers.js');
       ///C:/Dev/invoice-app-frontend/src/invoice-app-backend/routes/customers.js
     // UTAN MONGO!!!
      const response = await axios.get('/api/customers');
     console.log('-------------------------response from fetchCustomers: =   ' + response)
      setCustomers(response.data);
      console.log('--DATA---------------------response.data from fetchCustomers: =   ' + response.data)
    } catch (error) {
      console.error('Error fetching customers:', error);
    }
  };

//props.MyFuction = fetchCustomers();

  const handleUpdateCustomer = async () => {
    try {
      const updatedCustomer = {
        name,
        email,
        phone,
        hemligt
      };

      await axios.put(`/api/customers/${selectedCustomer}`, updatedCustomer);
      alert('Customer updated successfully!');
    } catch (error) {
      console.error('Error updating customer:', error);
      alert('Failed to update customer.');
    }
  };

  const handleSelectCustomer = (customerId) => {
    const selected = customers.find((customer) => customer._id === customerId);
    if (selected) {
      setSelectedCustomer(selected._id);
      setName(selected.name);
      setEmail(selected.email);
      setPhone(selected.phone);
      setHemligt(selected.hemligt);
    }
  };

  return (
    <div>
      <h1>Edit Form</h1>

      <div>
        <label>Select Customer:</label>
        <select value={selectedCustomer} onChange={(e) => handleSelectCustomer(e.target.value)}>
          <option value="">Select a customer</option>
          {customers.map((customer) => (
            <option key={customer._id} value={customer._id}>
              {customer.name}
            </option>
          ))}
        </select>
      </div>
      <br></br>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter customer name"
      />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter customer email"
      />
      <input
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Enter customer phone"
      />
      <input
        type="text"
        value={hemligt}
        onChange={(e) => setHemligt(e.target.value)}
        placeholder="Enter customer hemligt"
      />
      <button onClick={handleUpdateCustomer}>Update Customer</button>

    </div>
  );
}

export default EditCustomerForm;
