import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CustomerForm() {
  const [customer, setCustomer] = useState({
    name: '',
    email: '',
    phone: '',
    hemligt: ''
  });

  useEffect(() => {
    //fetchCustomers();
  }, );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomer({ ...customer, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // tar bort html 
    try {
      // Send POST request to API to add new customer using the `customer` state
      const response = await axios.post('/api/customers', customer);
      console.log('Response:', response.data); // Assuming the server responds with the saved customer
      setCustomer({ name: '', email: '', phone: '', hemligt: '' }); // Clear the form after successful submission
     
      
      /// props.fetchCustomers();
    } catch (error) {
      console.error('Error adding customer:', error);
    }
  };




  return (
    <div>
      <h2>Add New Customer</h2>
      
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={customer.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={customer.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Phone:
          <input
            type="text"
            name="phone"
            value={customer.phone}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Hemligt:
          <input
            type="text"
            name="hemligt"
            value={customer.hemligt}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <button type="submit">Add Customer</button>
      </form>
    </div>
  );
}

export default CustomerForm;
