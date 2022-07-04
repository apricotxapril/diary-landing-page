<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view /> -->
  <Navbar />
  <Header />
  <Features />
</template>

<script>
import Navbar from './components/Navbar'
import Header from './components/Header'
import Features from './components/Features'

export default {
  components: {
    Navbar,
    Header,
    Features,
  },
}
</script>
