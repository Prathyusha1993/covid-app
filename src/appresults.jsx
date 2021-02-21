import React, { Component } from "react";
//import config from 'config';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Results from "./client/components/results/index";

//login change imports later
//import BlogList from "./client/components/blog/bloglist";

//dashboard  change imports later
//import VideoCall from "./client/components/pages/videocall";

//import AppUniversal from "./admin/app-universal";

class AppResults extends Component {

    render() {
        return (
            // <Router 
            //basename={`${config.publicPath}`}       by p - commented
            // >
                <div>
                  {/* <Route render={(props) => <Header {...props} />} /> */}
                  <Results />
              </div>
            // </Router>
          );
    }
}

export default AppResults;
