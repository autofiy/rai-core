import {PropertyComponent} from "../Base/PropertyComponent";
import React from "react";

export class TablePropertyComponent extends PropertyComponent {

    render() {
        return <tr className={'__rai-table-row'}>
            {this.renderTitle()}
            {this.renderValue()}
        </tr>;
    }

    protected renderTitle = () => {
        return <td className={'__rai-table-title-cell'}>{this.title()}</td>;
    }

    protected renderValue = () => {
        return <td className={'__rai-table-value-cell'}>{this.value()}</td>;
    }

}