<template>
  <Header />
  <div class="main">
    <div class="container">
      <div class="content">
        <RouterView />
        <!-- <Home /> -->
      </div>
      <Navbar />
    </div>
  </div>
  <Footer />
</template>

<script setup>
import Home from "./pages/Home.vue";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  padding: 0 30px;

  .container {
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    height: 100%;

    .content {
      width: 100%;
      max-width: 1300px;
      margin: 0 auto;
      padding: 0 20px;
    }
  }
}
</style>
