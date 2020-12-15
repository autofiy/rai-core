import { SimplePropertyComponent } from './Components/SimpleInfo/SimplePropertyComponent';
import { SimpleGroupComponent } from './Components/SimpleInfo/SimpleGroupComponent';
import { SimpleContainerComponent } from './Components/SimpleInfo/SimpleContainerComponent';
import { TablePropertyComponent } from './Components/TableInfo/TablePropertyComponent';
import { TableGroupComponent } from './Components/TableInfo/TableGroupComponent';
import { TableContainerComponent } from './Components/TableInfo/TableContainerComponent';
import { PropertyComponent } from './Components/Base/PropertyComponent';
import { AutoInfoDefault, DEFAULT_AUTO_INFO, DEFAULT_PROPERTIES, DEFAULT_SERVICES } from './Default/AutoInfoDefault';
import { IAutoInfo, ServiceConfiguration, AutoInfoProps, GroupPropType, RemainingProperties, Group } from './AutoInfo/IAutoInfo';
import { AutoInfo } from './AutoInfo/AutoInfo';
import { ContainerComponent } from "./Components/Base/ContainerComponent";
import { GroupComponent } from "./Components/Base/GroupComponent";


export { AutoInfo };
export type { IAutoInfo, ServiceConfiguration, AutoInfoProps, GroupPropType, RemainingProperties, Group };
export type { AutoInfoDefault };

export { DEFAULT_AUTO_INFO, DEFAULT_PROPERTIES, DEFAULT_SERVICES }

export { ContainerComponent, GroupComponent, PropertyComponent }
export { TableContainerComponent, TableGroupComponent, TablePropertyComponent }
export { SimpleContainerComponent, SimpleGroupComponent, SimplePropertyComponent };