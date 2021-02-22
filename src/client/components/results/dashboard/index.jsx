import { DashboardSidebar } from "./sidebar/sidebar.jsx";
import React, {Component } from 'react';

class Dashboard extends Component {
    render(){
        return(
            <div>
                <DashboardSidebar />
            </div>
        );
    }
}

export default Dashboard;