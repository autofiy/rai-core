import React, {Component} from 'react';
import {getData, getTitles} from "../Data";
import {AutoInfo} from "../../AutoInfo/AutoInfo";
import {TableContainerComponent} from "../../Components/TableInfo/TableContainerComponent";

class TableInfoExample extends Component {
    render() {
        const data = getData();
        return (
            <div>
                <AutoInfo data={data} container={TableContainerComponent}
                          properties={{
                              titles: getTitles(),
                              renderValue: {
                                  image: (property, data) => <img width={200} height={"auto"} src={data.image}
                                                                  alt={'image'}/>
                              }
                          }}
                />
            </div>
        );
    }
}

export default TableInfoExample;