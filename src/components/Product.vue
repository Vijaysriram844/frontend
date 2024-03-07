<script setup>
import Contentend from './Contentend.vue'
import Header from './Header.vue'
import Sidebar from './Sidebar.vue'
import Footer from './Footer.vue'
</script>

<template>
<main>
  <div id="wrapper">
  <Sidebar />
  <div id="content-wrapper" class="d-flex flex-column">
  <div id="content">
  <Header />
  <div class="container-fluid">
  <div class="d-sm-flex align-items-center justify-content-between mb-4">
  <h1 class="h3 mb-0 text-gray-800">Product</h1>
  </div>
  </div>
  </div>
  <Footer />
  </div>
  </div>
  <Contentend />
</main>
</template>


