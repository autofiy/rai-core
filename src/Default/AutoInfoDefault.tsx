import {DefaultOrdererFactory, PropertiesConfiguration, SmartGenerator} from "@autofiy/property";
import {IAutoInfo, ServiceConfiguration} from "../AutoInfo/IAutoInfo";
import {ContainerComponent} from "../Components/Base/ContainerComponent";
import {SimpleContainerComponent} from "../Components/SimpleInfo/SimpleContainerComponent";

export interface AutoInfoDefault {
    component: {
        table: {
            configurationKey: string;
        }
    };
    container: typeof ContainerComponent;
}


export const AUTO_INFO: AutoInfoDefault = {
    component: {
        table: {
            configurationKey: 'tableConfiguration'
        }
    },
    container: SimpleContainerComponent
}

export const DEFAULT_PROPERTIES: PropertiesConfiguration = {}


export const DEFAULT_SERVICES: ServiceConfiguration = {
    propertyGenerator: (autofiyable: IAutoInfo) => new SmartGenerator(autofiyable.getProps().properties ?? DEFAULT_PROPERTIES,
        autofiyable.data(),
        DEFAULT_SERVICES.ordererFactory(autofiyable)
    ),
    ordererFactory: (autofiyable: IAutoInfo) => new DefaultOrdererFactory(autofiyable.getProps().properties ?? DEFAULT_PROPERTIES)
};
