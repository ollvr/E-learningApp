<template>
  <div>
    <section class="section coming-soon" data-section="section3">
      <div class="container">
        <div class="row">
          <div class="col-md-7 col-xs-12">
            <div class="continer centerIt">
              <div>
                <h4>Take <em>any online course</em> and it's free 0$  for your next class</h4>
                <h4>we will launch our big  library project soon </h4>
                <div class="counter">
                  <div class="days">
                    <div class="value">20</div>
                    <span>Days</span>
                  </div>

                  <div class="hours">
                    <div class="value">17</div>
                    <span>Hours</span>
                  </div>

                  <div class="minutes">
                    <div class="value">30</div>
                    <span>Minutes</span>
                  </div>

                  <div class="seconds">
                    <div class="value">15</div>
                    <span>Seconds</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-5">
            <div class="right-content">
              <div class="top-content">
                <h6>
                  Complete this form to join the await list of the project
                </h6>
                <h6>
                  it will be a big library to encourage students read and write 
                  scientefic books
                </h6>
              </div>
              <form id="contact"  method="post"  @submit.prevent="addToWaitList(formData)">
                <div class="row">
                  <div class="col-md-12">
                    <fieldset>
                      <input
                        name="name"
                        type="text"
                        class="form-control"
                        id="name"
                        placeholder="Your Name"
                        required=""
                        v-model="formData.Nom"
                      />
                    </fieldset>
                  </div>
                  <div class="col-md-12">
                    <fieldset>
                      <input
                        name="email"
                        type="text"
                        class="form-control"
                        id="email"
                        placeholder="Your Email"
                        required=""
                        v-model="formData.email"
                      />
                    </fieldset>
                  </div>
                  <div class="col-md-12">
                    <fieldset>
                      <button type="submit" id="form-submit" class="button">join waiting list</button>
                    </fieldset>
                  </div>
                </div>
              </form>

              <div v-if="addtoWaitingListMsg">
                <h3 style="color:red; text-align: center;" > 
                  {{ addtoWaitingListMsg }}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import useLibraryApi from '../../Api/LibraryProjectApi/WaitListApi';
const { addToWaitList,addtoWaitingListMsg} = useLibraryApi();
const formData = ref({
  Nom: "",
  email:""
})
</script>

<style  scoped></style>
