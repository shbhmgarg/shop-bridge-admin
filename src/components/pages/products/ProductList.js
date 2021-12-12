import "./ProductList.css";
import { productRows } from "../../../dummyData";
import { Link } from "react-router-dom";
import { DeleteOutline } from "@material-ui/icons";
import { Button } from "@material-ui/core";

export default function ProductList() {
  let breakOn = "medium";
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
    console.log(id);
  };

  let tableClass = "table-container__table";

  if (breakOn === "small") {
    tableClass += " table-container__table--break-sm";
  } else if (breakOn === "medium") {
    tableClass += " table-container__table--break-md";
  } else if (breakOn === "large") {
    tableClass += " table-container__table--break-lg";
  }

  const data = productRows.map((row, index) => {
    row.action = row.id;
    let rowData = [];
    let i = 0;

    for (const key in row) {
      rowData.push({
        key: headingColumns[i],
        val: row[key],
      });
      i++;
    }

    return (
      <tr key={index}>
        {rowData.map((data, index) => {
          if (data.key === "Action") {
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
          } else if (data.key === "Image") {
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

  return (
    <div className='productList'>
      <Link to='/add-product' className="create-product-button">
        <Button variant='contained' color='primary'>Create</Button>
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
}
