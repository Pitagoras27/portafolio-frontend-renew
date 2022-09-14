import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axiosFetch from "../api/axiosFetch";
import { onClearSendingState, onErrorSending, onSending } from "../store";

export const useContactStore = () => {
  const dispatch = useDispatch();
  const { errorMessage } = useSelector(state => state.contact);
  const [loading, setLoading] = useState(false);

  const startSaveMessage = async ({ messageUser, interests } = {}) => {
    setLoading(true);
    try {
      const { data } = await axiosFetch.post('/messages-client/', { message: messageUser, interests });
      const { message } = data;
      dispatch(onSending({ message, interests: data.interests }));
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
    loading,
    errorMessage,
    startSaveMessage
  }
}