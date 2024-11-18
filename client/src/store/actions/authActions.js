import * as api from '../../api';

const authActions = {
    SET_USER_DETAILS: 'AUTH.SET_USER_DETAILS',
};

export const getActions = (dispatch) => {
    return {
        login: (userDetails, navigate) => dispatch(login(userDetails, navigate)),
        register: (userDetails, navigate) => dispatch(register(userDetails, navigate)),
    };
};

const setUserDetails = (userDetails) => {
    return {
        type: authActions.SET_USER_DETAILS,
        userDetails,
    };
};

const login = (userDetails, navigate) => {
    return async (dispatch) => {
        try {
            const response = await api.login(userDetails); // Add 'await' for the API call
            console.log(userDetails);
            console.log(response);
            if (response.error) {
                // Handle error (e.g., show an alert or toast notification)
                alert('Login failed. Please check your credentials.');
            } else {
                const { userDetails } = response?.data; // Destructure data from response
                localStorage.setItem('user', JSON.stringify(userDetails));

                dispatch(setUserDetails(userDetails));
                navigate('/dashboard'); // Navigate to the dashboard
            }
        } catch (error) {
            console.error('Login Error:', error);
        }
    };
};

const register = (userDetails, navigate) => {
    return async (dispatch) => {
        try {
            const response = await api.register(userDetails); // Add 'await' for the API call

            if (response.error) {
                // Handle error (e.g., show an alert or toast notification)
                alert('Registration failed. Please try again.');
            } else {
                const { userDetails } = response?.data; // Destructure data from response
                localStorage.setItem('user', JSON.stringify(userDetails));

                dispatch(setUserDetails(userDetails));
                navigate('/dashboard'); // Navigate to the dashboard
            }
        } catch (error) {
            console.error('Registration Error:', error);
        }
    };
};

export { authActions };
