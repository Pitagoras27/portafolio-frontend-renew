import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axiosFetch from "../api/axiosFetch";
import { onClearSendingState, onErrorSending, onSending } from "../store";

export const useContactStore = () => {
  const dispatch = useDispatch();
  const { errorMessage, status } = useSelector(state => state.contact);
  const [loading, setLoading] = useState(false);

  const startSaveMessage = async ({ messageUser, interests, name, email } = {}) => {
    setLoading(true);

    try {

      const { data } = await axiosFetch.post('/messages-client/', { message: messageUser, interests, name, email });
      const { message } = data;
      dispatch(onSending({ message, interests: data.interests, name, email }));
      setLoading(false);

    } catch (error) {

      console.log({error})
      dispatch(onErrorSending('Error on server, try more later'));
      setLoading(false);
      setTimeout(() => {
        dispatch(onClearSendingState())
      }, 5000);

    }
  }

  return {
    status,
    loading,
    errorMessage,
    startSaveMessage
  }
}