import React, {Component} from 'react';
import SimpleInfoExample from "./Simple/SimpleInfoExample";
import TableInfoExample from "./Simple/TableInfoExample";

interface State {
    component: string;
}

class Examples extends Component<any, State> {


    constructor(props: Readonly<any> | any) {
        super(props);
        this.state = {component: ""};
    }

    render() {
        const {component} = this.state;

        let content: any = null;
        switch (component) {
            case "simple" :
                content = <SimpleInfoExample/>;
                break;
            case "table" :
                content = <TableInfoExample/>;
                break;
        }


        return (
            <div>

                <div>
                    <button onClick={() => this.setState({component: "simple"})}>Simple Component</button>
                    <button onClick={() => this.setState({component: "table"})}>Table Component</button>
                </div>

                <hr/>
                <br/>
                <br/>

                {
                    content
                }

            </div>
        );
    }
}

export default Examples;