import React from 'react';
import {connect} from 'react-redux';

import RegistrationForm from './registration-form';

export function RegistrationPage(props) {
    // If we are logged in (which happens automatically when registration
    // is successful) redirect to the user's dashboard
    // if (props.loggedIn) {
    //     return <Redirect to="/dashboard" />;
    // }


    return (
        <div className="home">
            <h2>Staff Registration</h2>
            <RegistrationForm history={props.history} />
            

            
            
            {/* <Link to="/">Login</Link> */}
        </div>
    );
}
// propname = ''

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);
