import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { setUser, setIsLoading, signInUsignGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const redirect_uri = location?.state.from || '/home'

    const handleGoogleSignIn = () => {
        signInUsignGoogle()
            .then(result => {
                console.log(result.user)
                // setUser(result.user)
                history.push(redirect_uri)
            })
        // .finally(setIsLoading(false))

    }

    return (
        <div>
            <h2>Please Login</h2>
            <Button onClick={handleGoogleSignIn} variant="danger">Google Sign In</Button>
        </div>
    );
};

export default Login;