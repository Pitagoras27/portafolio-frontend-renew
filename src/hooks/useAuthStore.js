import { useDispatch, useSelector } from 'react-redux';
import { onLogin } from '../store/auth/authSlice';

export const useAuthStore = () => {
  const dispatch = useDispatch();
  const { status, user } = useSelector(state => state.auth);

  const startLoginUser = () => {
    const user = { name: 'carlos', uid: 'df23fsdt4'}
    dispatch(onLogin(user))
  }

  return {
    startLoginUser,
    status,
    user
  }
}
