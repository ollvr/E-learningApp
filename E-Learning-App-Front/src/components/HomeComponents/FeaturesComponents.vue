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
                    Curabitur id eros vehicula, tincidunt libero eu, lobortis mi. In mollis eros a
                    posuere imperdiet. Donec maximus elementum ex. Cras convallis ex rhoncus,
                    laoreet libero eu, vehicula libero.
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
                    Curabitur id eros vehicula, tincidunt libero eu, lobortis mi. In mollis eros a
                    posuere imperdiet. Donec maximus elementum ex. Cras convallis ex rhoncus,
                    laoreet libero eu, vehicula libero.
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
                    Curabitur id eros vehicula, tincidunt libero eu, lobortis mi. In mollis eros a
                    posuere imperdiet. Donec maximus elementum ex. Cras convallis ex rhoncus,
                    laoreet libero eu, vehicula libero.
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

const BestEducationClick = ref(false)
const QualityMeetingClick = ref(false)
const TopManagementClick = ref(false)

const CourseShowed = ref(false)
const VirtualClassShowed = ref(false)
const realMeetingShowed = ref(false)

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
