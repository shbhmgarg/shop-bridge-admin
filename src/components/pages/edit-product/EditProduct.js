import { Button } from "@material-ui/core";
import { Publish } from "@material-ui/icons";
import React from "react";
import "./EditProduct.css";
import { connect } from "react-redux";
import {
  updateProducts,
  getProduct,
  clearProduct,
} from "../../../actions/productAction";
import PropTypes from "prop-types";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const EditProduct = ({
  product: { product },
  updateProducts,
  getProduct,
  clearProduct,
}) => {
  const [name, setName] = useState("");
  const [stock, setStock] = useState("");
  const [status, setStatus] = useState("select");
  const [img, setImg] = useState("");
  const [price, setPrice] = useState("");
  const { productId } = useParams();

  useEffect(() => {
    if (product === null || product.id.toString() !== productId ) {
      getProduct(productId);
    } else {
      setName(product.name);
      setStock(parseInt(product.stock));
      product.status ? setStatus("yes") : setStatus("no");
      setImg(product.img);
      setPrice(product.price);
    }
    // eslint-disable-next-line
  }, [product]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === "" || stock === "" || status === "select" || price === "") {
      alert("Please fill details for Name, Stock, Price and Status");
    } else {
      const updatedProduct = {
        id: product.id,
        name: name,
        img: img,
        stock: parseInt(stock),
        status: status === "yes" ? true : false,
        price: price,
      };

      updateProducts(updatedProduct);
      clearProduct();
    }
  };

  return (
    <div className='product'>
      <div className='product-title-container'>
        <img src={img} alt={name} className='product-info-img' />
        <span className='product-name'>{name}</span>
      </div>
      <div className='product-info'>
        <div className='product-info-item'>
          <span className='product-info-key'>Id:</span>
          <span className='product-info-value'>{product.id}</span>
        </div>
        <div className='product-info-item'>
          <span className='product-info-key'>Stock:</span>
          <span className='product-info-value'>{stock}</span>
        </div>
        <div className='product-info-item'>
          <span className='product-info-key'>Price:</span>
          <span className='product-info-value'>{price}</span>
        </div>
        <div className='product-info-item'>
          <span className='product-info-key'>Active</span>
          <span className='product-info-value'>{status}</span>
        </div>
      </div>
      <div className='edit-product-form'>
        <form className='product-form'>
          <div className='product-form-left'>
            <label htmlFor='productName'>Product Name</label>
            <input
              type='text'
              name='productName'
              value={name}
              placeholder='Name'
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor='inStock'>In Stock</label>
            <input
              type='text'
              name='inStock'
              value={stock}
              placeholder='Quantity Available'
              onChange={(e) => setStock(e.target.value)}
            />
            <label htmlFor='price'>Price</label>
            <input
              type='text'
              name='price'
              value={price}
              placeholder='Price'
              onChange={(e) => setPrice(e.target.value)}
            />
            <label htmlFor='status'>Status</label>
            <select
              name='status'
              value={status}
              id='status'
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value='select'>Select</option>
              <option value='yes'>Yes</option>
              <option value='no'>No</option>
            </select>
          </div>
          <div className='product-form-right'>
            <div className='product-upload'>
              <img src={img} alt={name} className='product-upload-img' />
              <label htmlFor='file'>
                <Publish />
              </label>
              <input type='file' id='file' style={{ display: "none" }} />
            </div>
            <Button variant='contained' onClick={onSubmit}>
              Update
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

EditProduct.propTypes = {
  product: PropTypes.object.isRequired,
  getProduct: PropTypes.func.isRequired,
  updateProducts: PropTypes.func.isRequired,
  clearProduct: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  product: state.product,
});

export default connect(mapStateToProps, {
  updateProducts,
  getProduct,
  clearProduct,
})(EditProduct);
