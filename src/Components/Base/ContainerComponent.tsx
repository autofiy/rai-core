import {Group, GroupPropType, IAutoInfo} from "../../AutoInfo/IAutoInfo";
import React from "react";
import {GroupComponent} from "./GroupComponent";
import {Property} from "@autofiy/property";

interface Props {
    autoInfo: IAutoInfo;
}

export abstract class ContainerComponent extends React.Component<Props> {

    public static readonly DEFAULT_GROUP_NAME = "__default";
    public static readonly REMAINING_GROUP_NAME = "__remaining";

    private properties: Property[] | null = null;
    protected readonly usedProperties: Set<string> = new Set<string>();

    render() {
        return this.renderGroups();
    }

    protected renderGroups(): any {
        const groups = this.getGroups();
        return groups.map(group => {
            const GroupComponent = group.component;
            return <GroupComponent key={group.name} properties={group.properties} autoInfo={this.props.autoInfo}
                                   group={group}/>;
        });
    }

    getAllProperties(): Property[] {
        if (this.properties === null) {
            this.properties = this.props.autoInfo.getProperties();
        }
        return this.properties;
    }


    protected getGroups(): Group[] {
        const groups = this.props.autoInfo.getProps().groups ?? {};
        const names = Object.keys(groups);
        if (names.length === 0) {
            return this.defaultGroup();
        }
        let result: Group[] = [];
        for (let name of names) {
            const group = this.createGroup(groups, name);
            group.properties.forEach(p => this.usedProperties.add(p.name));
            result.push(group)
        }
        const remainingGroup = this.getRemainingGroup();
        if (remainingGroup) {
            if (this.props.autoInfo.getProps().remainingProperties?.position === "first") {
                result = [remainingGroup, ...result];
            } else {
                result = [...result, remainingGroup];
            }
        }
        return result;
    }

    protected getRemainingGroup(): Group | null {
        if (!this.props.autoInfo.getProps().remainingProperties?.position) {
            return null;
        }
        const except = this.props.autoInfo.getProps().remainingProperties?.except ?? [];
        const remainingProperties = this.getAllProperties()
            .filter(p => !this.usedProperties.has(p.name))
            .filter(p => !except.includes(p.name));
        if (remainingProperties.length === 0) {
            return null;
        }

        const autoInfoProps = this.props.autoInfo.getProps();
        return {
            name: ContainerComponent.REMAINING_GROUP_NAME,
            component: autoInfoProps.remainingProperties?.component ?? this.getDefaultGroupComponent(),
            properties: remainingProperties,
            title: autoInfoProps.remainingProperties?.title
        }
    }

    private createGroup(groups: GroupPropType, name: string) {
        const group = groups[name];
        const properties = this.getPropertiesByNames(group.properties);
        const component = group.component ?? this.getDefaultGroupComponent();
        return {
            name: name,
            properties: properties,
            component: component,
            title: group.title,
        };
    }

    protected getPropertiesByNames(names: string[]): Property[] {
        return this.getAllProperties().filter(p => names.includes(p.name));
    }

    protected defaultGroup() {
        return [
            {
                properties: this.getAllProperties(),
                component: this.getDefaultGroupComponent(),
                name: ContainerComponent.DEFAULT_GROUP_NAME
            }
        ]
    }

    protected abstract getDefaultGroupComponent(): typeof GroupComponent ;

}