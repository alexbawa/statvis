import React from "react";
import {
    AreaChart,
    Area
} from "recharts";

import UniversalUtility from "../utility/UniversalUtility";

class HomePage extends React.Component {
    constructor(props) {
        super(props);


        let starterData = UniversalUtility.generateNormalDist();
        this.state = {
            curData: starterData
        };
    }

    render() {
        return (
            <div>
                <p>Hello app!</p>
                <AreaChart width={500} height={300} data={this.state.curData}>
                    <Area type="monotone" dataKey="y" fillOpacity={0.05} stroke="gray" fill="gray"/>
                </AreaChart>
            </div>
        )
    }
}

export default HomePage;