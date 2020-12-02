import {GroupComponent} from "../Base/GroupComponent";
import {SimplePropertyComponent} from "./SimplePropertyComponent";
import {PropertyComponent} from "../Base/PropertyComponent";
import React from "react";

export interface SimpleGroupConfiguration {
    spacing?: number;
}

export class SimpleGroupComponent extends GroupComponent {

    render() {
        return <div className={'__rai-simple-group-wrapper'}>
            {this.renderTitle()}
            {this.renderProperties()}
        </div>;
    }

    protected getPropertyComponent(): typeof PropertyComponent {
        return SimplePropertyComponent;
    }
}