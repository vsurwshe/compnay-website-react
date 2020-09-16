import React from 'react';
import MaterialTable from 'material-table';
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux';
import { FromActions } from '../config/Config';

const BlogTable=(props)=>{
    const { blogList }=props.BlogState
    const { fromAction, deleteMethod }=props

    // creating columns
    const columns = [
      { title: 'Sr.\u00a0No.', field: 'key', width: 20 },
      { title: 'Blog\u00a0Name', field: 'blogName' },
      { title: 'Blog\u00a0Writer', field: 'blogWriter' },
      { title: 'Blog\u00a0Cateory', field: 'categorise', width: 30 },
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
    const data = (blogList && blogList.length > 0) && blogList.map((item, key) => { return { "key": (key + 1), itemData:item, ...item }});

    return <div style={{ maxWidth: "100%" }}>
        <MaterialTable
          title="Blogs Managment"
          columns={columns}
          data={(data && data.length > 0) ? data : []}
          options={{
            headerStyle: { backgroundColor: '#01579b', color: '#FFF' }
          }}
          actions={[
            { icon: () => <div><Button variant="primary">Create Blog</Button></div>,
              onClick: (event, rowData) => { fromAction(FromActions.CR,null); },
              isFreeAction: true,
              tooltip: 'Create Blog'
            }
          ]}
        />
    </div>
}

const mapStateToProps = state => { return state; };
export default connect(mapStateToProps)(BlogTable);