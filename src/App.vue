<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view /> -->
  <Navbar :scrollToSection="scrollToSection" />
  <Header />
  <About />
  <Features />
  <Prices />
  <Reviews />
  <Contacts />
  <Footer />
</template>

<script>
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Features from './components/Features'
import Prices from './components/Prices'
import Reviews from './components/Reviews'
import Contacts from './components/Contacts'
import Footer from './components/Footer'

export default {
  components: {
    Navbar,
    Header,
    About,
    Features,
    Prices,
    Reviews,
    Contacts,
    Footer,
  },
  methods: {
    scrollToSection(id) {
      console.log('Clicked', id)
      document.getElementById(id).scrollIntoView({
        behavior: 'smooth',
      })
    },
  },
}
</script>
