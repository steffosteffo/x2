import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import './ProductForm.css';

function ProductForm() {

  const [product, setProduct] = useState({
    productname: '',
    antal: '',
    pris: '',
    summa: '',
    moms: '1.25', // Default moms value set to 25%
    tot: ''
  });

  //Hämta och sätt produktlista
  const [productList, setProductList] = useState([]);

  useEffect(() => {
  },[setProduct]); 

  //Moms 
  const [moms, setMoms] = useState(1.25); // Default moms value in dropdown

  const handleSelectMoms = (selectedMoms) => {
    // Set selected moms value only if a value is selected, otherwise keep it as default (1.25)
    const newMoms = selectedMoms ? selectedMoms : 1.25;
    setProduct({ ...product, moms: newMoms });
    setMoms(newMoms); // Update the selected moms state
  };

  //Produktnamn
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  //Spara knappen
  const handleSubmit = async (e) => {
    e.preventDefault();
   
    try {
      const response = await axios.post('/api/products', product);

      console.log('API Response:', response.data); // Log API response
      const newProduct = { ...product, id: response.data._id }; // Include id for tracking XXXXXXXXXXXXXXXXXXXX!!!!!

      console.log('New Product:', newProduct); // Log new product object with id
      setProductList([...productList, newProduct]);
      setProduct({ productname: '', antal: '', pris: '', summa: '', moms: '1.25', tot: '' });  // Reset moms to default after submission
      alert('Product submitted successfully!');
      
       setMoms(1.25); /// steffo!!
       
    } catch (error) {
      alert('Product submission failed!');
      console.error('Error adding product:', error);
      console.log('Response data:', error.response.data);
      console.log('Response status:', error.response.status);
      console.log('Response headers:', error.response.headers);
    }
  };

  //Delete knappen
  const handleDeleteProduct = (itemId) => {  // productId
    const updatedList = productList.filter((item) => item.id !== itemId);
    setProductList(updatedList);
    alert('Product deleted successfully!');
  };
  
  // Calculate total TOT across all products
  // specialfall om moms är 0% då måste vi kolla så inte hela summan blir noll vid multipikation mer fler värden 
  const totalTOT = productList.reduce((acc, item) => {
    const momsValue = parseFloat(item.moms); // Convert item.moms to a number
    const calculatedTOT = momsValue !== 0 ? (item.antal * item.pris * momsValue) : (item.antal * item.pris);
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>item.moms is now: ' + momsValue);
    return acc + calculatedTOT;
  }, 0);


  return (
    <div className="invoice-container">
      <div className="invoice-header">
        <h6>Add New Product</h6>
      </div>
      <div>
        <form className="invoice-form" onSubmit={handleSubmit}>
          <label>
          
            Produkt:
            <input
              type="text"
              name="productname"
              value={product.productname}
              onChange={handleInputChange}
              required
            />
          </label>

          <label>
            Antal:
            <input
              type="text"
              name="antal"
              value={product.antal}
              onChange={handleInputChange}
              required
            />
          </label>

          <label>
            Pris:
            <input
              type="text"
              name="pris"
              value={product.pris}
              onChange={handleInputChange}
              required
            />
          </label>

          <label>
            Summa:
            <input
              type="text"
              name="summa-"
              value={product.summa = product.antal * product.pris} //18 steffo
              onChange={handleInputChange}
            />
          </label>

          <label>
          Moms som du har valt:
          <input
            type="text"
            name="moms"
            value={product.moms}
            onChange={handleInputChange}
           
          />
        </label>



          <div className="form-group">
            <label htmlFor="fee">MOMS:</label>
            <select
              id="moms"
              value={moms}
              onChange={(e) => handleSelectMoms(e.target.value)} // Call handleSelectMoms on change
            >
              <option value="">Select Moms</option>
              <option value={0}>0%</option>   {/* 1 istället för 0 för att inte få 0 i beräkning ! */}
              <option value={1.12}>12%</option>
              <option value={1.25}>25%</option>
              <option value={1.75}>75%</option>
            </select>
          </div>
          <br></br>



        <button className="product-btn"  type="submit">Add Product</button>
        </form>

        {/*-------------------------------------------------------------------------------------*/}
        <div>
          <h3>Added Products!:</h3>
          <table className="product-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Produktnamn</th>
                <th>Antal</th>
                <th>Pris</th>
                <th>Summa</th>
                <th>Moms</th>
                <th>Totalt</th>

              </tr>
            </thead>

            <tbody>
              {productList.map((item) => (
                <tr key={item.id}> {/* Ensure each <tr> has a unique key */}
                  <td>{item.id}</td>
                  <td>{item.productname}</td>
                  <td>{item.antal}</td>
                  <td>{item.pris}</td>
                  <td>{item.antal * item.pris}</td> {/* Calculate Summa */}
                  <td>{item.moms + '%'}</td>
                  <td>{Number(item.moms) !== 0 ? (item.antal * item.pris * item.moms).toFixed(2) : (item.antal * item.pris).toFixed(2)}</td>

                  <td>
                    <button  className="product-btn" onClick={() => handleDeleteProduct(item.id)}>Delete</button>
                  </td>
                </tr>
              ))}

              {/* Display total TOT in a separate row or cell */}
              <tr>
              <td colSpan="5"></td>
              <td>Total:</td>
              <td>{totalTOT.toFixed(2) + ' KR'}</td>
              <td></td>
              </tr>

              {/* Display total TOT in a separate row or cell */}
              <div className="product-total">
              <td colSpan="12"></td>
                <td>Total:</td>
                <td>{totalTOT.toFixed(2) + ' KR'}</td>
              </div>
            </tbody>
          </table>
        </div>

      </div>
    </div> //css
  );
}

export default ProductForm;
