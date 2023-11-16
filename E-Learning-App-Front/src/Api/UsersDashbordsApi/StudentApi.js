import axios from 'axios'
import { ref } from 'vue'
import { useUserStore } from '../../stores/user_store'
export default function useStudentApi() {
  const Msg = ref(null)
  const user_store = useUserStore()

  const writeFeedback = async (Feedback) => {
    axios
      .post('/writeFeedback', Feedback, {
        headers: {
          Authorization: `Bearer ${user_store.token}`
        }
      })
      .then((resp) => {
        Msg.value = resp.data.Msg
      })
      .catch((error) => {
        console.log(error)
      })
  }
  return {
    writeFeedback,
    Msg
  }
}
