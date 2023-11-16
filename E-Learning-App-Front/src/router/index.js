import { createRouter, createWebHistory } from 'vue-router'
import { useTeacherStore } from '../stores/teacher_store'
import { useUserStore } from '../stores/user_store'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: { name: 'Home' } },
    // authentication route
    {
        path: "/certif",
        name: "certif",
        component:()=>import("../components/HomeComponents/FeaturesComponent/CertifComponent.vue")
    },
    {
      path: '/signIn',
      name: 'SignIn',
      component: () => import('../components/Authentication/SignIn.vue')
    },
    {
      path: '/signUp',
      name: 'signUp',
      component: () => import('../components/Authentication/SignUp.vue')
    },

    // authentication route end .

    // app layout Routes
    {
      path: '/home',
      name: 'Home',
      component: () => import('../views/HomeVue.vue')
    },
    {
      path: '/CommingSoon',
      name: 'commingSoon',
      component: () => import('../components/HomeComponents/ComingSoon.vue')
    },
    {
      path: '/Contact',
      name: 'contact',
      component: () => import('../components/HomeComponents/ContactComponent.vue')
    },
    {
      path: '/Courses',
      name: 'courses',
      component: () => import('../components/HomeComponents/CoursesComponent.vue')
    },
    {
      path: '/Featured',
      name: 'Featured',
      component: () => import('../components/HomeComponents/FeaturesComponents.vue'),
      children: [
        {
          path: '/bestEducation',
          name: 'BestEducation',
          component: () =>
            import('../components/HomeComponents/FeaturesComponent/BestEducation.vue')
        },
        {
          path: '/TopManagement',
          name: 'TopManagement',
          component: () => import('../components/HomeComponents/FeaturesComponent/TopManagment.vue')
        },
        {
          path: '/QualityMeeting',
          name: 'QualityMeeting',
          component: () =>
            import('../components/HomeComponents/FeaturesComponent/QualityMeetings.vue')
        }
      ]
    },
    {
      path: '/MainBanner',
      name: 'MainBanner',
      component: () => import('../components/HomeComponents/MainBannerComponents.vue')
    },
    {
      path: '/Presentation',
      name: 'Presentation',
      component: () => import('../components/HomeComponents/PresentationComponents.vue')
    },
    {
      path: '/howItworks',
      name: 'howItworks',
      component: () => import('../components/HomeComponents/HowItWorksVue.vue')
    },

      // App Layouts route ends


     // Student Dashbord Routes
     {
         path: "/StudentDashbored",
         name: "StudentDashBored",
         component:() => import("../components/UserDashbords/StudentDashbords/StudentDashbored.vue"),
         // eslint-disable-next-line no-unused-vars
         beforeEnter: (to, from) => {
           if(useUserStore().$state.islogIn == false){
            return {name:'SignIn'}
           }

          },
         children : [
             {
                path: "/studentCourse",
                name:"studentCourses",
                component:()=>import("../components/UserDashbords/StudentDashbords/AllStudentCourses.vue")
             },
             {
                path:"/studentCertif",
                name:"studentCertif",
                component:()=>import("../components/UserDashbords/StudentDashbords/StudentCertifications.vue")
             },
             {
                path:"/CourseDetails/:courseId",
                name:"CourseDetails",
                component:()=>import("../components/UserDashbords/StudentDashbords/CourseTemplate.vue")
             },
             {
                path:"/studentStats",
                name:"studentStats",
                component:()=>import("../components/UserDashbords/StudentDashbords/StudentStats.vue")
             },
             {
                path:"/studentFeedBack",
                name:"studentFeedback",
                component:()=>import("../components/UserDashbords/StudentDashbords/WriteYourFeedbacks.vue")
             },

             {
                path:"/RegisterToACourse",
                name:"RegisterToCourse",
                component:()=>import("../components/UserDashbords/StudentDashbords/RegisterToACourse.vue")
             },
             {
                path:"/CompleteLoginStudent",
                name:"CompleteLoginStudent",
                component:()=>import("../components/UserDashbords/StudentDashbords/CompleteStudentInfo.vue")
             },
             {
                path:"/completeTheExam/:courseId",
                name:"Exam",
                component:import("../components/UserDashbords/StudentDashbords/ExamComp.vue")
             }

         ]
      },
      {
          path: "/TeacherDashbored",
          name: "TeacherDashored",
          component:() => import("../components/UserDashbords/TeacherDashboreds/TeacherDashbored.vue"),
          // eslint-disable-next-line no-unused-vars
          beforeEnter: (to, from) => {
            if(useTeacherStore().$state.islogIn  == false){
             return {name:'SignIn'}
            }
           },
          children:[
            {
                path:"/teacherDashbored/seeMyCourses",
                name:"seeMyCourse",
                component:()=>import("../components/UserDashbords/TeacherDashboreds/SeeMyCourses.vue")
            },
            {
                path:"/teacherDashbored/addCourse",
                name:"addCourse",
                component:()=>import("../components/UserDashbords/TeacherDashboreds/AddCourse.vue")
            },
            {
                path:"/TeacherDashbored/Stats",
                name:"StatDashbored",
                component:()=>import("../components/UserDashbords/TeacherDashboreds/CoursesStats.vue")
            },
            {
                path:"CompleteLoginTeacher",
                name:"CompleteLoginTeacher",
                component:()=>import("../components/UserDashbords/TeacherDashboreds/CompleteTeacherDetail.vue")
            },

            {
                path:"/GetCourse/:CourseId",
                name:"GetCourse",
                component:()=>import("../components/UserDashbords/TeacherDashboreds/CourseQuestion.vue")
            }

          ]
     }

  ]
})

export default router
