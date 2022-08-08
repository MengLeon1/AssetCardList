import { PlusOutlined } from '@ant-design/icons';
import React, { createElement, Fragment } from 'react'
import {Button, Table } from 'antd';
import type { ColumnsType } from 'antd/lib/table';
import { useState } from 'react';
import { ObjectItem } from "mendix";

import "antd/dist/antd.css"

interface DataType {
    name: string;
    onAdd?:()=>void;
    // edit?:(selectedRowKeys:any)=>void;
    onEdit:(data:ObjectItem)=>void;
    onDelete:(data:ObjectItem)=>void;
    showDrawer:()=>void;
    dataSource?:any[];
    columns:ColumnsType<any>
  }

  let editObj:any 
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      editObj = selectedRows[0]
      // console.info(selectedRowKeys)
      // console.info(selectedRows)
      // console.info("editkey:"+editKey)
    },
    getCheckboxProps: (record: DataType) => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };

  
  export default function AssetCardList(props:DataType) {

    // const [dataSource,setDataSource]=useState(props.dataSource)


    const newDataSource = ()=>{
      if(props.onAdd!=undefined){

        props.onAdd()
      }
    } 

    function edit1(){
      if(editObj != undefined && props.onEdit){
        props.onEdit(editObj)
      }
      
    }

    const delete1 = ()=>{
      if(editObj != undefined && props.onDelete != undefined){
        props.onDelete(editObj)
      }
    }



    const [selectionType] = useState<'checkbox' | 'radio'>('checkbox');
  return (
    <Fragment>
      <div>
        <Button onClick={newDataSource}>New</Button>
        <Button onClick={edit1}>Edit</Button>
        <Button onClick={delete1}>Delete</Button>
        <Button onClick={props.showDrawer} >
        Search
      </Button>
      </div>
      <div>
        <Table
          rowSelection={{
            type: selectionType,
            ...rowSelection,
          }}
          columns={props.columns}
          dataSource={props.dataSource}
          rowKey="id"
        />
      </div>
    </Fragment>
  )
}
