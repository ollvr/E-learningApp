import axios from "axios"
import { ref } from "vue"

export default function useContactApi (){
    const ContactServerMessage = ref("")
    const addContactMessage = async(formdata)=>{
        axios.post("/addContactMessage",formdata).then((resp)=>{
            console.log(resp.data)
            ContactServerMessage.value = resp.data.Msg
        }).catch((error)=>{
            console.log(error);
        })
    }

    return {
        addContactMessage,
        ContactServerMessage
    }
}