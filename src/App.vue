<template>
  <div id="app">
    <Navbar />      
    <div class="container">
      <router-view/>
    </div>
    <vue-progress-bar></vue-progress-bar>
  </div>
</template>
<script>

import Navbar from "./views/Navbar";

export default {
  name: "app",
  components: {
    Navbar: Navbar,
  }
}
</script>