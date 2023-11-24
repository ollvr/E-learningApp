import axios from 'axios'
import { ref } from 'vue'
import { useUserStore } from '../../stores/user_store'
import { useTeacherStore } from '../../stores/teacher_store'
import router from '../../router'
import { useTeacherDetailStore } from '../../stores/teacher_detail_store'
import { useStudentDetailStore } from '../../stores/student_detail_store'
export default function useAuthApi() {
  const Errors = ref([])
  const store = useUserStore()
  const teacher_store = useTeacherStore()
  const teacher_detail = useTeacherDetailStore()
  const student_detail_store = useStudentDetailStore()
  const student_token = store.token
  const teacher_token = teacher_store.token
  const Login_Errors = ref([])
  const UpdateMessage = ref(null)
  const UpdateMessageTeacher = ref(null)
  const createAccount = async (formdata) => {
    axios
      .get('http://127.0.0.1:8000/sanctum/csrf-cookie')
      .then(() => {
        axios
          .post('/createUsers', formdata)
          .then((resp) => {
            const token = resp.data.token

            console.log('User =>', resp.data.User)
            if (resp.data.User.role == 'Student') {
              store.setUser(resp.data.User, true, token)

              axios.get('/getStudent/' + resp.data.User.id).then((res) => {
                console.log('Student detail => ', res.data.Student)
                student_detail_store.setStudent(res.data.Student)
              })

              router.push({ name: 'StudentDashBored' })
            } else if (resp.data.User.role == 'Teacher') {
              teacher_store.setUser(resp.data.User, true, token)
              axios
                .get('/getTeacher/' + resp.data.User.id)
                .then((res) => {
                  console.log('Teacher =>', res.data.Teacher)
                  console.log('id => ', res.data.Teacher.id)
                  // we track the current login User
                  // Since we have two user a teacher and a student
                  // we track if a teacher update the user store to be a teacher
                  // update the teacher detail so in the future we can know his course , students and so on ..
                  teacher_detail.setTeacher(res.data.Teacher)
                })
                .catch((error) => {
                  console.log(error)
                })

              router.push({ name: 'TeacherDashored' })
            }
          })
          .catch((err) => {
            Errors.value.push(err.response.data.errors)
          })
      })
      .catch(() => {
        return
      })
  }

  const Login = async (formdata) => {
    axios
      .get('http://127.0.0.1:8000/sanctum/csrf-cookie')
      .then(() => {
        axios
          .post('/login', formdata)
          .then((resp) => {
            if (resp.data.User.role == 'Teacher') {
              console.log(resp.data)
              teacher_store.setUser(resp.data.User, true, resp.data.token)
              axios
                .get('/getTeacher/' + resp.data.User.id)
                .then((res) => {
                  console.log('Teacher =>', res.data.Teacher)
                  console.log('id => ', res.data.Teacher.id)
                  // we track the current login User
                  // Since we have two user a teacher and a student
                  // we track if a teacher update the user store to be a teacher
                  // update the teacher detail so in the future we can know his course , students and so on ..
                  teacher_detail.setTeacher(res.data.Teacher)
                })
                .catch((error) => {
                  console.log(error) ;
                })
              router.push({ name: 'TeacherDashored' })
            } else if (resp.data.User.role == 'Student') {
              // we do the same job as we did with teacher

              store.setUser(resp.data.User, true, resp.data.token)

              axios.get('/getStudent/' + resp.data.User.id).then((res) => {
                console.log('Student detail => ', res.data.Student)
                student_detail_store.setStudent(res.data.Student)
              })

              router.push({ name: 'StudentDashBored' })
            }
          })
          .catch((err) => Login_Errors.value.push(err.response.data.errors))
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const Logout = async (Role) => {
    axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie').then(() => {
      if (Role == 'Student') {
        axios
          .post('/Logout', {}, { headers: { Authorization: `Bearer ${student_token}` } })
          .then(() => {
            store.ClearUser()
            student_detail_store.ClearStudentDetails()
            router.push({ name: 'SignIn' })
          })
          .catch((error) => {
            console.log(error)
          })
      } else if (Role == 'Teacher') {
        axios
          .post('/Logout', {}, { headers: { Authorization: `Bearer ${teacher_token}` } })
          .then(() => {
            teacher_store.ClearTeacher()
            teacher_detail.ClearTeacherDetails()
            router.push({ name: 'SignIn' })
          })
          .catch((error) => {
            console.log(error)
          })
      }
    })
  }

  const CompeleteLoginStudent = async (formdata) => {
    axios
      .put('/CompeleteLoginStudent', formdata, {
        headers: {
          Authorization: `Bearer ${student_token}`
        }
      })
      .then((resp) => {
        UpdateMessage.value = resp.data.Msg
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const CompeleteLoginTeacher = async (formdata) => {
    axios
      .put('/CompeleteLoginTeacher', formdata, {
        headers: {
          Authorization: `Bearer ${teacher_token}`
        }
      })
      .then((resp) => {
        UpdateMessageTeacher.value = resp.data.Msg
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return {
    createAccount,
    Errors,
    Login,
    Logout,
    CompeleteLoginStudent,
    CompeleteLoginTeacher,
    UpdateMessage,
    UpdateMessageTeacher
  }
}
