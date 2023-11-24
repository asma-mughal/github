import React from 'react'
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./table.scss";
const Table = () => {
    const [data, setData] = useState(userRows);
    console.log(userRows)
    const handleDelete = (id) => {
      setData(data.filter((item) => item.id !== id));
    };
    const actionColumn = [
        {
          field: "action",
          headerName: "Action",
          width: 200,
          renderCell: (params) => {
            return (
              
              <div className="cellAction">
                <Link to="/users/test" style={{ textDecoration: "none" }}
                className=''
                >
                  <div className="viewButton">View</div>
                </Link>
                <Link to="/users/test/edit" style={{ textDecoration: "none" }}>
                  <div className="viewButton">Edit</div>
                </Link>
              </div>
              
            );
          },
        },
      ];
  
  return (
    <div className="datatable font-poppins">
      
      <div className="datatableTitle font-poppins">
      RFPs here
      </div>
      <DataGrid
        className="datagrid font-poppins"
        
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
      </div>
  )
}

export default Table
