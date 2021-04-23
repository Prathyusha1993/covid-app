import React, {Component} from 'react';

class patientSignupForm extends Component {
    constructor(props) {
        super(props);
        this.state={}
    };

    render() {
        return(
            <div>
                <div>
                    <h2>Your Information</h2>
                    <p>As the patient please enter your information.</p>
                </div>
                <div>
                <form>
                <div className="row form-row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>First Name</label>
                            <input type="text" className="form-control" defaultValue="Richard" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Last Name</label>
                            <input type="text" className="form-control" defaultValue="Wilson" />
                        </div>
                    </div>
                    
                    
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Email ID</label>
                            <input type="email" className="form-control" defaultValue="richard@example.com" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Mobile</label>
                            <input type="text" defaultValue="+1 202-555-0125" className="form-control" />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                        <label>Address</label>
                            <input type="text" className="form-control" defaultValue="806 Twin Willow Lane" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>City</label>
                            <input type="text" className="form-control" defaultValue="Old Forge" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>State</label>
                            <input type="text" className="form-control" defaultValue="Newyork" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        //make this as one line
                        <div className="form-group">
                            <label>Zip Code</label>
                            <input type="text" className="form-control" defaultValue="13420" />
                        </div>
                    </div>
                   
                </div>
                <div className="submit-section">
                    <button type="submit" className="btn btn-primary submit-btn">Save Changes</button>
                </div>
            </form>
                </div>
            </div>
        );
    }
}

export default patientSignupForm;