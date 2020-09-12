import MaterialTable from 'material-table';
import React from 'react';
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux';
import { FromActions } from '../config/Config';

const BlogTable=(props)=>{
    const { blogList }=props.BlogState
    const { fromAction, deleteMethod }=props
    // creating columns
  const columns = [
    { title: 'Sr.\u00a0No.', field: 'key', width: 20 },
    { title: 'Blog\u00a0Name', field: 'projectName' },
    { title: 'Blog\u00a0Writer', field: 'clientName' },
    { title: 'Blog\u00a0Path', field: 'resource', width: 30 },
    {
      title: "",
      width:8,
      render: (rowData)=> {
          return <i class="fa fa-pencil" aria-hidden="true" onClick={()=>fromAction(rowData.data,FromActions.ED,true)} />
      }
    },
    {
      title: "",
      width:8,
      render: (rowData)=> {
          return <i class="fa fa-trash" aria-hidden="true" onClick={()=>deleteMethod(rowData.data)} />
      }
    }  
  ];
// Creating rows
const data = (blogList && blogList.length > 0) && blogList.map((item, key) => {
    return { "key": (key + 1), ...item }
});

return <div style={{ maxWidth: "100%" }}>
    <MaterialTable
      title="Blogs Managment"
      columns={columns}
      data={(data && data.length > 0) ? data : []}
      options={{
        headerStyle: { backgroundColor: '#01579b', color: '#FFF' }
      }}
      actions={[
        { icon: () => <div><Button variant="primary">Create Project</Button></div>,
          onClick: (event, rowData) => { fromAction(null, FromActions.CR); },
          isFreeAction: true,
          tooltip: 'Create Project'
        }
      ]}
    />
  </div>

}

const mapStateToProps = state => { return state; };
export default connect(mapStateToProps)(BlogTable);