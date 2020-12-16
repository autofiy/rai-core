import { Generator, OrdererFactory, PropertiesConfiguration, Property } from "@autofiy/property";
import { Autofiyable, AutofiyableProps, ServiceConfiguration as SC } from "@autofiy/autofiyable";
import { GroupComponent } from "../Components/Base/GroupComponent";
import { ContainerComponent } from "../Components/Base/ContainerComponent";

export interface IAutoInfo extends Autofiyable<ServiceConfiguration, AutoInfoProps> {

    data(): any;

    getProperties(): Property[];

}

export interface ServiceConfiguration extends SC {
    propertyGenerator: (autofiyable: any) => Generator;
    ordererFactory: (autofiyable: any) => OrdererFactory;
}


export interface AutoInfoProps extends AutofiyableProps<ServiceConfiguration> {
    groups?: GroupPropType;
    remainingProperties?: RemainingProperties;
    properties?: PropertiesConfiguration;
    service?: Partial<ServiceConfiguration>;
    data: any;
    container?: typeof ContainerComponent;
    extra?: any;
    skipRender?: {
        [propName: string]: (data: any, property: Property) => boolean;
    };
}

export type GroupPropType = {
    [name: string]: {
        component?: typeof GroupComponent;
        properties: string[];
        title?: string;
    }
}

export interface RemainingProperties {
    position: "first" | "last";
    title: string;
    except?: string[];
    component?: typeof GroupComponent;
}

export interface Group {
    name: string;
    title?: string;
    properties: Property[];
    component: typeof GroupComponent
}