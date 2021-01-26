import React from "react";
import {DirectTransformer, Property} from "@autofiy/property";
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
            return renderValue(property, data, {}, autoInfo);
        }
        return this.rawValue(autoInfo, property, data);
    }


    private rawValue(autoInfo: IAutoInfo, property: Property, data: any): any {
        const autofiyable = this.props.autoInfo;
        const transformer = autoInfo.getProps().properties?.transformer?.[property.name]?.({}, autofiyable) ?? new DirectTransformer(data);
        return transformer.transform(property);
    }
}


