import React from 'react';
import { connect } from 'react-redux';
import MaterialTable from 'material-table';
import { Button } from 'react-bootstrap'
import { FromActions } from '../config/Config';

const ProductTable=(props)=>{
    const { productList }=props.ProductState
    const { fromAction }=props
    // creating columns
    const columns = [
        { title: 'Sr.\u00a0No.', field: 'key', width: 20 },
        { title: 'Name', field: 'productName' },
        { title: 'Client\u00a0Name', field: 'clientName' },
        { title: 'Company\u00a0Name', field: 'companyName' },
        {
          title: "",
          width:8,
          render: (rowData)=> {
              return <i className="fa fa-pencil" style={{color:"blue"}} aria-hidden="true" onClick={()=>fromAction(FromActions.ED,rowData.itemData)} />
          }
        },
        {
          title: "",
          width:8,
          render: (rowData)=> {
              return <i className="fa fa-trash" style={{color:"red"}} aria-hidden="true" onClick={()=>fromAction(FromActions.DE,rowData.itemData)} />
          }
        }  
      ];
  
      // Creating rows
      const data = (productList && productList.length > 0) && productList.map((item, key) => { return { "key": (key + 1), itemData:item, ...item }});
  
      return <div style={{ maxWidth: "100%" }}>
          <MaterialTable
            title="Product Managment"
            columns={columns}
            data={(data && data.length > 0) ? data : []}
            options={{
              headerStyle: { backgroundColor: '#01579b', color: '#FFF' }
            }}
            actions={[
              { icon: () => <div><Button variant="primary">Add Product</Button></div>,
                onClick: (event, rowData) => { fromAction(FromActions.CR,null); },
                isFreeAction: true,
                tooltip: 'Add Product'
              }
            ]}
          />
      </div>
}

const mapStateToProps=(state)=>{return state;}
export default connect(mapStateToProps)(ProductTable);