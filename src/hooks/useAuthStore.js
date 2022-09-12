import { useDispatch, useSelector } from 'react-redux';
import axiosFetch from '../api/axiosFetch';
import { clearErrorMessage, onChecking, onLogin, onLogout } from '../store';

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const startCheckingToken = async () => {
    const token = localStorage.getItem('token');
    if(!token) return dispatch(onLogout())

    try {
      const { data } = await axiosFetch.get('/auth/renew');
      localStorage.setItem('token', data.token );
      localStorage.setItem('token-init-date', new Date().getTime() );
      dispatch( onLogin({ name: data.name, uid: data.uid }) );
    } catch (error) {
      localStorage.clear();
      dispatch(onLogout());
    }
  }

  const startLoginUser = async ({ email, password }) => {
    dispatch(onChecking());
    try {
      const { data } = await axiosFetch.post('/auth', { email, password });
      const { name, uid, token } = data;
      localStorage.setItem('token', token);
      localStorage.setItem('token-init-date', new Date().getTime() );
      dispatch(onLogin({ name, uid }));
      dispatch( clearErrorMessage() );
    } catch ( error ) {
      const response = error?.response
      const { data } = response
      if(typeof data.msg === 'string') {
        dispatch(onLogout('Invalid credentials, try again!'));
        return
      }
      dispatch(onLogout(data.msg?.email?.msg));
      setTimeout(() => {
        dispatch( clearErrorMessage() );
    }, 10);
    }
  }

  const startRegisterUser = async() => {

  }

  return {
    user,
    status,
    errorMessage,
    startCheckingToken,
    startLoginUser,
    startRegisterUser
  }
}
