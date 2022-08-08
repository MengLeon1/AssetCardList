/**
 * This file was generated from AssetCardList.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { ActionValue, DynamicValue, ListValue, ListActionValue, ListAttributeValue } from "mendix";
import { Big } from "big.js";

export interface ColumnsType {
    attribute?: ListAttributeValue<string | any | boolean | Date | Big>;
    header?: DynamicValue<string>;
}

export interface ColumnsPreviewType {
    attribute: string;
    header: string;
}

export interface AssetCardListContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    TableDatasource: ListValue;
    columns: ColumnsType[];
    add?: ActionValue;
    edit?: ListActionValue;
    delete?: ListActionValue;
}

export interface AssetCardListPreviewProps {
    className: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    TableDatasource: {} | { type: string } | null;
    columns: ColumnsPreviewType[];
    add: {} | null;
    edit: {} | null;
    delete: {} | null;
}
