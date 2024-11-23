<template>
  <Navbar />
  <div class="main">
    <Header />
    <div class="container">
      <div class="content">
        <RouterView />
      </div>
    </div>
    <Footer />
  </div>
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

    .content {
      width: 100%;
      max-width: 1400px;
      min-height: 740px;
      margin: 0 auto;
      padding: 0 20px;
    }
  }
}
</style>
