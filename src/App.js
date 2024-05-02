import React, { useState } from 'react';
import InvoiceForm from './InvoiceForm';
import CustomerForm from './CustomerForm';
import EditCustomerForm from './EditCustomerForm';
import ProductForm from './ProductForm'

function App() {
  const [selectedForm, setSelectedForm] = useState('');

  const handleSelectForm = (formName) => {
    setSelectedForm(formName);
  };

  return (
    <div className="App">
      <h1>Invoice Management App</h1>

      <div>
        <button onClick={() => handleSelectForm('customer')}>Customer Form</button>
        <button onClick={() => handleSelectForm('editCustomer')}>Edit Customer Form</button>
        <button onClick={() => handleSelectForm('Product')}>Product Form</button>
        <button onClick={() => handleSelectForm('invoice')}>Invoice Form</button>
      </div>
      
      {selectedForm === 'customer' && <CustomerForm />}
      {selectedForm === 'editCustomer' && <EditCustomerForm />}
      {selectedForm === 'Product' && <ProductForm />}
      
      {selectedForm === 'invoice' && (
        <>
        <InvoiceForm />
        {/*  <ProductForm />  */}
          
          
        </>
      )}



    </div>
  );
}

export default App;
