<template>
  <div>
    <section class="features">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-12">
            <div class="features-post">
              <div class="features-content">
                <div class="content-show">
                  <h4 @click="showCourses()">
                    <i class="fa fa-pencil"></i>
                    All Courses
                  </h4>
                </div>
                <div :class="{ 'content-hide': CourseShowed }" v-if="CourseShowed">
                  <p>
                    Dive into a world of knowledge with my free e-learning courses, 
                    spanning diverse topics such as programming, web development, Devops,Architect Solution. 
                    Enjoy interactive lessons and  practical exercises. 
                  
                  </p>
                  <p class="hidden-sm">
                    Curabitur id eros vehicula, tincidunt libero eu, lobortis mi. In mollis eros a
                    posuere imperdiet.
                  </p>
                  <div class="scroll-to-section"><a href="#section2">More Info.</a></div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-12">
            <div class="features-post second-features">
              <div class="features-content">
                <div class="content-show">
                  <h4 @click="showVirtualClass()">
                    <i class="fa fa-graduation-cap"></i>Virtual Class
                  </h4>
                </div>
                <div :class="{ 'content-hide': VirtualClassShowed }" v-if="VirtualClassShowed">
                  <p>
                    Welcome to our e-learning app, where education transcends traditional boundaries 
                    through the power of virtual classes. Seamlessly connecting learners and instructors in a digital space
                  </p>
                  <p class="hidden-sm">
                    Curabitur id eros vehicula, tincidunt libero eu, lobortis mi. In mollis eros a
                    posuere imperdiet.
                  </p>
                  <div class="scroll-to-section"><a href="#section3">Details</a></div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-12">
            <div class="features-post third-features">
              <div class="features-content">
                <div class="content-show">
                  <h4 @click="showRealMeeting()"><i class="fa fa-book"></i>Real Meeting</h4>
                </div>
                <div :class="{ 'content-hide': realMeetingShowed }" v-if="realMeetingShowed">
                  <p>
                    In addition to our comprehensive virtual classes,
                     we understand the significance of real meetings. Our platform seamlessly integrates live, face-to-face sessions,
                      allowing learners to interact with instructors
                     
                  </p>
                  <p class="hidden-sm">
                    Curabitur id eros vehicula, tincidunt libero eu, lobortis mi. In mollis eros a
                    posuere imperdiet.
                  </p>
                  <div class="scroll-to-section"><a href="#section4">Read More</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section why-us" data-section="section2">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section-heading">
              <h2>Why choose Grad School?</h2>
            </div>
          </div>
          <div class="col-md-12">
            <div id="tabs">
              <ul>
                <li><p @click="BestEducationClick = !BestEducationClick">Best Education</p></li>
                <li><p @click="TopManagementClick = !TopManagementClick">Top Management</p></li>
                <li><p @click="QualityMeetingClick = !QualityMeetingClick">Quality Meeting</p></li>
              </ul>
              <section class="tabs-content">
                
                <div v-if="BestEducationClick">
                  <BestEducation />
                </div>

                <div v-if="TopManagementClick">
                  <TopManagment />
                </div>

                <div v-if="QualityMeetingClick">
                  <QualityMeetings />
                </div>
                <!-- Best Education -->
                <!-- top management-->
                <!-- Quality Meeting-->
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BestEducation from './FeaturesComponent/BestEducation.vue'
import QualityMeetings from './FeaturesComponent/QualityMeetings.vue'
import TopManagment from './FeaturesComponent/TopManagment.vue'

const BestEducationClick = ref(true)
const QualityMeetingClick = ref(true)
const TopManagementClick = ref(true)

const CourseShowed = ref(true)
const VirtualClassShowed = ref(true)
const realMeetingShowed = ref(true)

function showCourses() {
  CourseShowed.value = !CourseShowed.value
}

function showVirtualClass() {
  VirtualClassShowed.value = !VirtualClassShowed.value
}

function showRealMeeting() {
  realMeetingShowed.value = !realMeetingShowed.value
}
</script>

<style scoped>
.content-hide {
  display: block;
}
</style>
