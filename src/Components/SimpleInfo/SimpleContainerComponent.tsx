import {ContainerComponent} from "../Base/ContainerComponent";
import {GroupComponent} from "../Base/GroupComponent";
import {SimpleGroupComponent} from "./SimpleGroupComponent";
import React from "react";

export class SimpleContainerComponent extends ContainerComponent {

    render(): any {
        return <div className={'__rai-simple-container'}>
            {this.renderGroups()}
        </div>
    }

    protected getDefaultGroupComponent(): typeof GroupComponent {
        return SimpleGroupComponent;
    }

}