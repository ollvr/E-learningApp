<template>
  <div>
    <section class="section contact" data-section="section6">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section-heading">
              <h2>Let’s Keep In Touch</h2>
            </div>
          </div>
          <div class="col-md-6">
            <!-- Do you need a working HTML contact-form script?

                    Please visit https://templatemo.com/contact page -->

            <form id="contact" @submit.prevent="addContactMessage(formdata)" method="post">
              <div class="row">
                <div class="col-md-6">
                  <fieldset>
                    <input
                      name="name"
                      type="text"
                      class="form-control"
                      id="name"
                      placeholder="Your Name"
                      required=""
                      v-model="formdata.Nom"
                    />
                  </fieldset>
                </div>
                <div class="col-md-6">
                  <fieldset>
                    <input
                      name="email"
                      type="text"
                      class="form-control"
                      id="email"
                      placeholder="Your Email"
                      required=""
                      v-model="formdata.email"
                    />
                  </fieldset>
                </div>
                <div class="col-md-12">
                  <fieldset>
                    <textarea
                      name="message"
                      rows="6"
                      class="form-control"
                      id="message"
                      placeholder="Your message..."
                      required=""
                      v-model="formdata.Message"
                    ></textarea>
                  </fieldset>
                </div>
                <div class="col-md-12">
                  <fieldset>
                    <button type="submit" id="form-submit" class="button">Send Message Now</button>
                  </fieldset>
                </div>

                <div v-if="ContactServerMessage">
                  <h4 style="color: red; text-align: center;"> {{ ContactServerMessage }} </h4>
                </div>
              </div>
            </form>
          </div>
          <div class="col-md-6">
            <div id="map">
              <iframe
                src="https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="422px"
                frameborder="0"
                style="border: 0"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import useContactApi from '../../Api/Contacts/ContactApi';
const {addContactMessage,ContactServerMessage} = useContactApi()
const formdata = ref({
  Nom:"",
  email:"",
  Message:""
})
</script>

<style lang="scss" scoped></style>
