import { createElement, Fragment, ReactElement, ReactNode, useMemo, useState } from "react";
import AssetCardList1 from "./components/AssetCardList1";

import { AssetCardListContainerProps } from "../typings/AssetCardListProps";
import { ColumnsType } from "antd/lib/table";

import "./ui/AssetCardList.css";
import { ObjectItem } from "mendix";
import SearchBox from "./components/SearchBox";

export function AssetCardList(props:AssetCardListContainerProps):ReactElement {

    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
      };

      const onClose = () => {
        setVisible(false);
      };
    

    const columns:ColumnsType = useMemo(()=>{
        return props.columns.map((c)=>{
            return {
                title: c.header?.value,
                render: (record:any):ReactNode=>{
                    return <span>{c.attribute?.get(record).value.toString()}</span>
                }
            }
        })
    },[props.columns])

    const onAdd = () => {
        props.add?.execute()
    }

    const OnDelete =  (data:ObjectItem) => {
            
            if(data != undefined && props.delete){
                props.delete.get(data).execute()
            }
    }


    const onEdit = (data:ObjectItem)=>{
            if(data != undefined && props.edit){
                props.edit.get(data).execute()
            }
        }


    



    return <Fragment>

        <AssetCardList1 
            dataSource={props.TableDatasource.items}
            columns={columns}
            onAdd={onAdd}
            onEdit={onEdit}
            onDelete={OnDelete}
            showDrawer = {showDrawer}
            name=""
        />;

        <SearchBox
            visable = {visible}
            onClose = {onClose}

        
        />
    </Fragment>
}


