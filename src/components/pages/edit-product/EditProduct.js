import { Button } from "@material-ui/core";
import { Publish } from "@material-ui/icons";
import React from "react";
import "./EditProduct.css";

const EditProduct = () => {
  return (
    <div className='product'>
      <div className='product-title-container'>
        <img
          src='https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
          alt='product-name'
          className='product-info-img'
        />
        <span className='product-name'>Apple Airpods</span>
      </div>
      <div className='product-info'>
        <div className='product-info-item'>
          <span className='product-info-key'>Id:</span>
          <span className='product-info-value'>123</span>
        </div>
        <div className='product-info-item'>
          <span className='product-info-key'>Sales:</span>
          <span className='product-info-value'>214</span>
        </div>
        <div className='product-info-item'>
          <span className='product-info-key'>Active:</span>
          <span className='product-info-value'>Yes</span>
        </div>
        <div className='product-info-item'>
          <span className='product-info-key'>In Stock:</span>
          <span className='product-info-value'>Yes</span>
        </div>
      </div>
      <div className='edit-product-form'>
        <form className="product-form">
          <div className="product-form-left">
            <label htmlFor="productName">Product Name</label>
            <input type="text" name='productName' placeholder="Name" />
            <label htmlFor="inStock">In Stock</label>
            <input type="text" name='inStock' placeholder="Quantity Available" />
            <label htmlFor="status">Status</label>
            <select name="status" id="status">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="product-form-right">
            <div className="product-upload">
              <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="apple-airpods" className="product-upload-img" />
              <label htmlFor="file">
                <Publish />
              </label>
              <input type="file" id='file' style={{ 'display': 'none'}} />
            </div>
            <Button variant='contained'>Update</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
