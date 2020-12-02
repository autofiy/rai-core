import React from "react";
import {Group, IAutoInfo} from "../../AutoInfo/IAutoInfo";
import {Property} from "@autofiy/property";
import {PropertyComponent} from "./PropertyComponent";

interface Props {
    autoInfo: IAutoInfo;
    properties: Property[];
    group: Group;
}

export abstract class GroupComponent extends React.Component<Props> {

    protected abstract getPropertyComponent(): typeof PropertyComponent;

    protected renderProperties(): any {
        const {properties, autoInfo} = this.props;
        const data = autoInfo.data();
        return properties.map(property => {
            const PropertyComponent = this.getPropertyComponent();
            return <PropertyComponent autoInfo={autoInfo} key={property.name} property={property} data={data}/>;
        });
    }

    protected renderTitle(): any {
        const title = this.props.group.title;
        if (title) {
            return <p className={'__rai-simple-title'}>{title}</p>
        }
        return null;
    }

}