import "./ProductList.css";
import { Link } from "react-router-dom";
import { DeleteOutline } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getProducts, deleteProduct } from "../../../actions/productAction";
import { useEffect } from "react";
import { useState } from "react";

export const ProductList = ({
  product: { products },
  getProducts,
  deleteProduct,
}) => {
  let breakOn = "medium";
  const [data, setData] = useState();
  const headingColumns = [
    "ID",
    "Name",
    "Image",
    "Stock",
    "Status",
    "Price",
    "Action",
  ];

  const handleDelete = (id) => {
    deleteProduct(id);
  };

  let tableClass = "table-container__table";

  if (breakOn === "small") {
    tableClass += " table-container__table--break-sm";
  } else if (breakOn === "medium") {
    tableClass += " table-container__table--break-md";
  } else if (breakOn === "large") {
    tableClass += " table-container__table--break-lg";
  }

  const createProductElements = () =>
    products.map((row, index) => {
      row.action = row.id;
      let rowData = [];
      let columnOrder = [
        "id",
        "name",
        "img",
        "stock",
        "status",
        "price",
        "action",
      ];

      columnOrder.forEach((element) => {
        rowData.push({
          key: element,
          val: row[element],
        });
      });

      return (
        <tr key={index}>
          {rowData.map((data, index) => {
            if (data.key === "action") {
              return (
                <td key={index} data-heading={data.key}>
                  <div className='action-buttons'>
                    <Link to={"/product/" + data.val}>
                      <button className='product-list-edit'>Edit</button>
                    </Link>
                    <DeleteOutline
                      className='product-list-delete'
                      onClick={() => handleDelete(data.val)}
                    />
                  </div>
                </td>
              );
            } else if (data.key === "status") {
              return (
                <td key={index} data-heading={data.key}>
                  {data.val ? "Yes" : "No"}
                </td>
              );
            } else if (data.key === "img") {
              return (
                <td key={index} data-heading={data.key}>
                  <img src={data.val} alt='product' />
                </td>
              );
            } else {
              return (
                <td key={index} data-heading={data.key}>
                  {data.val}
                </td>
              );
            }
          })}
        </tr>
      );
    });

  useEffect(() => {
    if (products.length === 0) {
      getProducts();
    } else {
      const someData = createProductElements();
      setData(someData);
    }
    // eslint-disable-next-line
  }, [products]);

  return (
    <div className='productList'>
      <Link to='/add-product' className='create-product-button'>
        <Button variant='contained' color='primary'>
          Create
        </Button>
      </Link>
      <div className='table-container'>
        <table className={tableClass}>
          <thead>
            <tr>
              {headingColumns.map((col, index) => (
                <th key={index}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>{data}</tbody>
        </table>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  product: state.product,
});

ProductList.propTypes = {
  product: PropTypes.object.isRequired,
  getProducts: PropTypes.func.isRequired,
  deleteProduct: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { getProducts, deleteProduct })(
  ProductList
);
