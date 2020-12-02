import React from "react";
import {Property} from "@autofiy/property";
import {IAutoInfo} from "../../AutoInfo/IAutoInfo";

interface Props {
    autoInfo: IAutoInfo;
    property: Property;
    data: any;
}

export class PropertyComponent extends React.Component<Props> {


    protected title(): any {
        const {property, autoInfo} = this.props;
        const renderTitle = autoInfo.getProps().properties?.renderTitle?.[property.name];
        if (renderTitle) {
            return renderTitle(property, autoInfo);
        }
        return property.title;
    }

    protected value(): any {
        const {property, data, autoInfo} = this.props;
        const renderValue = autoInfo.getProps().properties?.renderValue?.[property.name];
        if (renderValue) {
            return renderValue(property, data, autoInfo);
        }
        return data[property.name];
    }

}


