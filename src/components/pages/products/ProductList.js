import Table from "../../layout/table/Table";
import "./ProductList.css";
import { productRows } from "../../../dummyData";

export default function ProductList() {
  return (
    <div className="productList">
      <Table tableData={productRows} headingColumns={['ID', 'Name', 'Image', 'Stock', 'Status', 'Price']} title="Products" />
    </div>
  );
}