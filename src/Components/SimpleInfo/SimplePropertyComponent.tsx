import {PropertyComponent} from "../Base/PropertyComponent";
import React from "react";

export class SimplePropertyComponent extends PropertyComponent {

    render() {
        return <div className={'__rai-property-wrapper'}>
            {this.renderTitle()}
            <span style={{width: 8, height: 8, display: 'inline-block'}}/>
            {this.renderValue()}
        </div>
    }


    protected renderTitle = () => {
        return <b className={'__rai-property-title'}>{this.title()}</b>;
    }

    protected renderValue = () => {
        return <span className={'__rai-property-value'}>{this.value()}</span>;
    }
}