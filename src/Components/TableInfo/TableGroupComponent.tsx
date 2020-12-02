import {GroupComponent} from "../Base/GroupComponent";
import {PropertyComponent} from "../Base/PropertyComponent";
import {TablePropertyComponent} from "./TablePropertyComponent";
import React from "react";
import {AUTO_INFO} from "../../Default/AutoInfoDefault";

export interface TableConfiguration {
    hideHeader?: boolean;
    keyTitle?: string;
    valueTitle?: string;
}

export class TableGroupComponent extends GroupComponent {

    render() {
        const renderedProperties = this.renderProperties();
        return <div className={'__rai-table-wrapper'}>
            {
                this.renderTitle()
            }
            <table className={'__rai-table-group'}>
                {this.renderTableHead()}
                <tbody>
                {renderedProperties}
                </tbody>
            </table>
        </div>
    }

    protected getTableConfigurationExtraKey(): string {
        return AUTO_INFO.component.table.configurationKey;
    }

    protected getTableGroupExtra(): TableConfiguration {
        const key = this.getTableConfigurationExtraKey();
        return this.props.autoInfo.getProps().extra?.[key] ?? this.getDefaultTableConfiguration();
    }

    protected getDefaultTableConfiguration(): TableConfiguration {
        return {};
    }

    protected renderTableHead(): any {
        if (this.getTableGroupExtra().hideHeader) {
            return null;
        }

        return <thead>
        <tr>
            <td>{this.getKeyTitle()}</td>
            <td>{this.getValueTitle()}</td>
        </tr>
        </thead>;
    }

    protected getPropertyComponent(): typeof PropertyComponent {
        return TablePropertyComponent;
    }


    protected getKeyTitle(): string {
        return this.props.autoInfo.getProps().extra?.tableGroup?.title ?? "";
    }

    protected getValueTitle(): string {
        return this.props.autoInfo.getProps().extra?.tableGroup?.title ?? "";
    }

}