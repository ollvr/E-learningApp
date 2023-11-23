<template>
  <div>
    <header class="main-header clearfix" role="header">
      <div class="logo">
        <a href="/home"><em>Grad</em> School</a>
      </div>
      <a href="#menu" class="menu-link"><i class="fa fa-bars"></i></a>
      <nav id="menu" class="main-nav" role="navigation">
        <ul class="main-menu">
          <li><router-link :to="{ name: 'Home' }">Home</router-link></li>
          <li class="has-submenu">
            <a href="#section2">About Us</a>
            <ul class="sub-menu">
              <li><router-link :to="{ name: 'Featured' }">What we do?</router-link></li>
              <li><router-link :to="{ name: 'howItworks' }">How it works?</router-link></li>
            </ul>
          </li>
          <li><router-link :to="{ name: 'courses' }">Courses</router-link></li>
          <li><router-link :to="{ name: 'SignIn' }">Login</router-link></li>
          <!-- <li><a href="#section5">Video</a></li> -->
          <li><router-link :to="{ name: 'contact' }">Contact</router-link></li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script setup></script>

<style scoped></style>
