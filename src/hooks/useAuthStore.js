import { useDispatch, useSelector } from 'react-redux';
import axiosFetch from '../api/axiosFetch';
import { getLocalStorage, setLocalStorage } from '../helpers/';
import { clearErrorMessage, onChecking, onLogin, onLogout } from '../store';

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const startCheckingToken = async () => {
    const token = getLocalStorage('token');
    if(!token) return dispatch(onLogout())

    try {
      const { data } = await axiosFetch.get('/auth/renew');
      setLocalStorage('token', data.token );
      setLocalStorage('token-init-date', new Date().getTime() );
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
      setLocalStorage('token', token);
      setLocalStorage('token-init-date', new Date().getTime() );

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
    } finally {
      return true
    }
  }

  const startRegisterUser = async({ displayName: name, email, password, password2  }) => {
    dispatch(onChecking());

    try {
      const { data } = await axiosFetch.post('/auth/newUser', { name, email, password, password2 });
      const { token, uid } = data;

      setLocalStorage('token', token);
      setLocalStorage('token-init-date', new Date().getTime() );

      dispatch(onLogin({ name, uid }));
    } catch (error) {
      const { data } = error.response;

      if(typeof data.msg === 'string') {
        dispatch(onLogout(data.msg));
        return;
      }

      dispatch(onLogout(data.msg?.password2?.msg));
    }
  }

  const startLogout = () => {
    localStorage.clear();
    dispatch(onLogout())
  }

  return {
    user,
    status,
    errorMessage,
    startCheckingToken,
    startLoginUser,
    startRegisterUser,
    startLogout
  }
}
