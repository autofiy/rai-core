import {ContainerComponent} from "../Base/ContainerComponent";
import {GroupComponent} from "../Base/GroupComponent";
import {TableGroupComponent} from "./TableGroupComponent";
import React from "react";

export class TableContainerComponent extends ContainerComponent {

    render(): any {
        return <div className={'__rai-table-container'}>
            {this.renderGroups()}
        </div>
    }

    protected getDefaultGroupComponent(): typeof GroupComponent {
        return TableGroupComponent;
    }

}