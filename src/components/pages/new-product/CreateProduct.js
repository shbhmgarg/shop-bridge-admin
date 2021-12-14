import { Button } from "@material-ui/core";
import React, {useState} from 'react';
import './CreateProduct.css';
import { connect } from "react-redux";
import { addProduct } from "../../../actions/productAction";
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";

const CreateProduct = ({addProduct}) => {
  const [name, setName] = useState("");
  const [stock, setStock] = useState("");
  const [status, setStatus] = useState("select");
  // eslint-disable-next-line
  const [img, setImg] = useState("http://dummyimage.com/192x242.png/cc0000/ffffff");
  const [price, setPrice] = useState('');
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    if(name === '' || stock === '' || status === 'select' || price === '') {
      alert('Please fill details for Name, Stock, Price and Status')
    } else {
      const newProduct = {
        name: name,
        img: img,
        stock: parseInt(stock),
        status: status === 'yes' ? true : false,
        price: price
      }
      addProduct(newProduct);
      alert('Product added successfully!');
      history.push('/products');
    }
  }
  
  return (
    <div className="newProduct">
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <img src={img} alt={name} style={{'marginBottom' : '10px'}} className='product-upload-img' />
          <input type="file" id="file" />
        </div>
        <div className="addProductItem">
          <label>Name</label>
          <input type="text" className='text' value={name} placeholder="Product Name" onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <input type="text" className='text' value={stock} placeholder="Quantity Available" onChange={(e) => setStock(e.target.value)} />
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input type="text" className='text' value={price} placeholder="Price" onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div className="addProductItem">
          <label>Active</label>
          <select name="active" id="active" value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value='select'>Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <Button variant='contained' color='primary' size="large" onClick={onSubmit}>Create</Button>
      </form>
    </div>
  )
}

CreateProduct.propTypes = {
  addProduct: PropTypes.func.isRequired
}

export default connect(null, {addProduct})(CreateProduct)
