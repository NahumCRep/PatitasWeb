import {useDispatch, useSelector} from 'react-redux';
import {onChecking, onLogin, onLogout} from '../store/auth';

export const useAuthStore = () => {
    const {status, user, errorMessage} = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const testUSer = {
        uid:    '12345',
        name:   'Nahum Casco',
        email:  'nahumcasco@gmail.com'
    }

    const startLogin = ({email, password}) => {
        dispatch(onLogin(testUSer));
    }

    const startLogout = () => {
        dispatch(onLogout());
    }

    return {
        status,
        user,
        errorMessage,
        startLogin,
        startLogout
    }
}