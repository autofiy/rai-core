import {AutoInfoProps, IAutoInfo, ServiceConfiguration} from "./IAutoInfo";
import {Generator, Property} from "@autofiy/property";
import {AutofiyableComponent, IServiceProvider, ServiceProvider} from "@autofiy/autofiyable";
import {AUTO_INFO, DEFAULT_SERVICES} from "../Default/AutoInfoDefault";

export class AutoInfo extends AutofiyableComponent<AutoInfoProps, any, ServiceConfiguration> implements IAutoInfo {

    protected initializeServices(): void {
    }

    render() {
        const ContainerComponent = this.props.container ?? AUTO_INFO.container;
        return <ContainerComponent autoInfo={this}/>;
    }

    data(): any {
        return this.props.data;
    }

    getProperties(): Property[] {
        const generator: Generator = this.getServiceProvider().getService<Generator>("propertyGenerator");
        return generator.generate();
    }

    getDefaultServices(): ServiceConfiguration {
        return DEFAULT_SERVICES;
    }

    getServiceProvider(): IServiceProvider {
        return new ServiceProvider<ServiceConfiguration>(this);
    }

}