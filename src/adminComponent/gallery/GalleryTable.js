import React from 'react';
import MaterialTable from 'material-table';
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux';
import { FromActions } from '../config/Config';


const GalleryTable=(props)=>{
    const { galleryList }=props.GalleryState
    const { fromAction }=props
    // creating columns
    const columns = [
        { title: 'Sr.\u00a0No.', field: 'key', width: 20 },
        { title: 'Image\u00a0Name', field: 'mime'},
        { title: 'Event\u00a0Name', field: 'clientName' },
        { title: 'Company\u00a0Name', field: 'clientCompany' },
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
      const data = (galleryList && galleryList.length > 0) && galleryList.map((item, key) => { return { "key": (key + 1), itemData:item, ...item }});
  
      return <div style={{ maxWidth: "100%" }}>
          <MaterialTable
            title="Gallery Managment"
            columns={columns}
            data={(data && data.length > 0) ? data : []}
            options={{
              headerStyle: { backgroundColor: '#01579b', color: '#FFF' }
            }}
            actions={[
              { icon: () => <div><Button variant="primary">Add Image</Button></div>,
                onClick: (event, rowData) => { fromAction(FromActions.CR,null); },
                isFreeAction: true,
                tooltip: 'Add Image'
              }
            ]}
          />
      </div>
}

const mapStateToProps = state => { return state; };
export default connect(mapStateToProps)(GalleryTable);