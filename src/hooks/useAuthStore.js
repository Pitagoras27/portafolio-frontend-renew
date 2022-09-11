import { useDispatch, useSelector } from 'react-redux';
import axiosFetch from '../api/axiosFetch';
import { onChecking, onLogin, onLogout } from '../store/auth/authSlice';

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const startCheckingToken = async () => {
    const token = localStorage.getItem('token');
    if(!token) return dispatch(onLogout())

    try {
      const { data } = await axiosFetch.get('auth/renew');
      localStorage.setItem('token', data.token );
      localStorage.setItem('token-init-date', new Date().getTime() );
      dispatch( onLogin({ name: data.name, uid: data.uid }) );

      // const req = fetch('http://localhost:4000/api/auth/renew', {
      //   method: 'GET',
      //   headers: {
      //     'x-token': localStorage.getItem('x-token')
      //   }
      // })
      
      // req.then(res => res.json())
      //   .then(res => {
      //     console.log('res-<', res)
      //     localStorage.setItem('x-token', res.token)
      //     dispatch(onLogin({ name: res.name, uid: res.uid }));
      //   });

      // const { data } = await axiosFetch.get('/auth/renew');
      // const { token, name, uid } = data;

    } catch (error) {
      console.log('error-->', error);
      localStorage.clear();
      dispatch(onLogout());
    }
  }

  const startLoginUser = async ({ email, password }) => {
    dispatch(onChecking());
    try {
      const { data } = await axiosFetch.post('/auth', { email, password });
      const { name, uid, token } = data;
      dispatch(onLogin({ name, uid }));

      localStorage.setItem('token', token);
      localStorage.setItem('token-init-date', new Date().getTime() );

    } catch ( error ) {
      if (error?.message) {
        console.log(error?.message)
      }

      const response = error?.response
      const { data } = response
      if(typeof data.msg === 'string') {
        dispatch(onLogout(data.msg));
        return
      }
      dispatch(onLogout(data.msg?.email?.msg));
    }
  }

  return {
    user,
    status,
    errorMessage,
    startCheckingToken,
    startLoginUser,
  }
}
