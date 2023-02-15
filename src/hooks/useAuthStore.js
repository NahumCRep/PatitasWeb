import {useDispatch, useSelector} from 'react-redux';
import {onLogin, onLogout, onClearErrorMessage} from '../store/auth';
import patitasApi from '../api/patitasApi';

export const useAuthStore = () => {
    const {status, user, errorMessage} = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const startLogin = async ({email, password}) => {
        try {
            const { data } = await patitasApi.post('/auth', {email, password});
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(onLogin({uid: data.uid, name: data.name, email: data.email}));
            return data
        } catch (error) {
            if(error.response.data.message){
                dispatch(onLogout(error.response.data.message));
            } else if(error.response.data.errors) {
                dispatch(onLogout('Error en los valores ingresados'));
            }
        }
    }

    const startLogout = () => {
        localStorage.clear();
        dispatch(onLogout());
    }

    const startUserRegistration = async ({name, email, password}) => {
        try {
            const { data } = await patitasApi.post('/auth/new', {name, email, password});
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(onLogin({uid: data.uid ,name: data.name}))
            
        } catch (error) {
            console.error(error);
            if(error.response.data.message){
                dispatch(onLogout(error.response.data.message));
            } else if(error.response.data.errors) {
                dispatch(onLogout('Error en los valores ingresados'));
            }

            setTimeout(() => {
                dispatch(onClearErrorMessage());
            }, 10);
        }
    }

    const startCheckingToken = async () => {
        const token = localStorage.getItem('token');
        if(!token) return dispatch(onLogout());

        try {
            const { data } = await patitasApi.get('/auth/renew');
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(onLogin({name: data.name, uid: data.uid}));
        
        } catch (error) {
            console.log(error);
            localStorage.clear();
            dispatch(onLogout());
        }
    }

    const startUpdateUser = async (userId, updateData) => {
        try {
            const { data } = await patitasApi.put(`/user/${userId}/update`, updateData);
            if(!updateData.password && data.ok){
                dispatch(onLogin({
                    uid: userId, 
                    name: updateData.name, 
                    email: updateData.email
                }));
            }
            
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    const startForgotPassword = async (email) => {
        try {
            const {data} = await patitasApi.post('/auth/forgot_password', {email})
            console.log(data)
            return data
        } catch (error) {
            console.log(error)            
        }
    }

    const startResetPassword = async (resetPasswordData) => {
        const {id, token, password} = resetPasswordData
        try {
            const { data } = await patitasApi.put(
                `/auth/reset_password/${id}/${token}`, 
                {password: password}
            )
            return data
        } catch (error) {
            console.log(error)
        }
    }

    return {
        status,
        user,
        errorMessage,
        startLogin,
        startLogout,
        startUserRegistration,
        startCheckingToken,
        startUpdateUser,
        startForgotPassword,
        startResetPassword 
    }
}