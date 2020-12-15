import { Component } from 'react';
import { getData, getTitles } from "../Data";
import { AutoInfo } from "../../AutoInfo/AutoInfo";
import { SimpleContainerComponent } from "../../Components/SimpleInfo/SimpleContainerComponent";
import React from 'react';

class SimpleInfoExample extends Component {
    render() {
        const data = getData();
        return (
            <div>
                <AutoInfo data={data} container={SimpleContainerComponent}
                    properties={{
                        titles: getTitles(),
                        renderValue: {
                            image: (property, data) => <img width={200} height={"auto"} src={data.image}
                                alt={'image'} />,

                            facebookUrl: (property, data) => <a href={data.facebookUrl}>Facebook</a>
                        }
                    }}
                    groups={{
                        basic: {
                            properties: ["name", "birthDate", "email", "phone", "workPhone", "status", "image"],
                            title: "Basic Info"
                        },
                        web: {
                            properties: ["facebookUrl", "githubUrl", "linkedinUrl", "website"],
                            title: "Web"
                        },
                    }}
                    remainingProperties={{
                        title: "Education & Experience",
                        position: "last"
                    }} />
            </div>
        );
    }
}

export default SimpleInfoExample;