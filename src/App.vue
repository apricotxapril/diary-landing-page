<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view /> -->
  <Navbar />
  <Header />
</template>

<script>
import Navbar from './components/Navbar'
import Header from './components/Header'

export default {
  components: {
    Navbar,
    Header,
  },
}
</script>
