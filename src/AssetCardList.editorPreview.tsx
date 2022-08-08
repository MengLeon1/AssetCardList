import { ReactElement, createElement } from "react";
import AssetCardList from "./components/AssetCardList1";

export function preview(): ReactElement {
    return <AssetCardList name={""} columns={[]} />;
}

export function getPreviewCss(): string {
    return require("./ui/AssetCardList.css");
}
