import axios from "axios"
import { ref } from "vue"

export default function useLibraryApi(){
    const addtoWaitingListMsg = ref("")
    const addToWaitList = async (formdata)=>{
        axios.post("/addToWaitList",formdata).then((response)=>{
            console.log(response.data)
            addtoWaitingListMsg.value = response.data.Msg;
        })
    }
    return {
        addToWaitList,
        addtoWaitingListMsg
    }
}