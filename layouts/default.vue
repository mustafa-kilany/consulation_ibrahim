<template>
  <div>
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" :class="{ 'navbar-scrolled': scrolled }">
      <div class="container">
        <NuxtLink to="/" class="navbar-brand fw-bold">
          Nexus Strategic Partners
        </NuxtLink>
        
        <button 
          class="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          @click="toggleMobileMenu"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse" id="navbarNav" :class="{ 'show': mobileMenuOpen }">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <NuxtLink to="/" class="nav-link" @click="closeMobileMenu">Home</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/about" class="nav-link" @click="closeMobileMenu">About Us</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/services" class="nav-link" @click="closeMobileMenu">Services</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/projects" class="nav-link" @click="closeMobileMenu">Projects</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/contact" class="nav-link" @click="closeMobileMenu">Contact</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main>
      <slot />
    </main>

    <!-- Footer -->
    <footer class="footer py-5">
      <div class="container">
        <div class="row g-4">
          <div class="col-lg-4 col-md-6">
            <h3 class="fw-bold mb-4">
              Nexus Strategic Partners
            </h3>
            <p class="mb-4">Transforming strategic visions into real projects through evidence-based analysis and expert consultation.</p>
          </div>
          
          <div class="col-lg-2 col-md-6">
            <h4 class="fw-bold mb-4">Services</h4>
            <ul class="list-unstyled">
              <li class="mb-2">
                <NuxtLink to="/services#auditing" class="text-decoration-none">Strategic Plan Auditing</NuxtLink>
              </li>
              <li class="mb-2">
                <NuxtLink to="/services#kpi" class="text-decoration-none">KPI Evaluation</NuxtLink>
              </li>
              <li class="mb-2">
                <NuxtLink to="/services#extraction" class="text-decoration-none">Project Development</NuxtLink>
              </li>
              <li class="mb-2">
                <NuxtLink to="/services#feasibility" class="text-decoration-none">Feasibility Studies</NuxtLink>
              </li>
            </ul>
          </div>
          
          <div class="col-lg-2 col-md-6">
            <h4 class="fw-bold mb-4">Projects</h4>
            <ul class="list-unstyled">
              <li class="mb-2">
                <NuxtLink to="/projects#airport" class="text-decoration-none">Airport Development</NuxtLink>
              </li>
              <li class="mb-2">
                <NuxtLink to="/projects#port" class="text-decoration-none">Maritime Infrastructure</NuxtLink>
              </li>
              <li class="mb-2">
                <NuxtLink to="/projects#tourism" class="text-decoration-none">Tourism Development</NuxtLink>
              </li>
              <li class="mb-2">
                <NuxtLink to="/projects#construction" class="text-decoration-none">Construction Analysis</NuxtLink>
              </li>
            </ul>
          </div>
          
          <div class="col-lg-4 col-md-6">
            <h4 class="fw-bold mb-4">Contact</h4>
            <div class="contact-info">
              <p class="mb-2">
                <i class="fas fa-map-marker-alt me-2"></i>Amman, Jordan
              </p>
              <p class="mb-2">
                <i class="fas fa-phone me-2"></i>+962 X XXX XXXX
              </p>
              <p class="mb-2">
                <i class="fas fa-envelope me-2"></i>info@strategicconsulting.jo
              </p>
            </div>
          </div>
        </div>
        
        <hr class="my-4 opacity-25">
        
        <div class="text-center">
          <p class="mb-0">&copy; 2024 Nexus Strategic Partners. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const mobileMenuOpen = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  
  // Initialize Bootstrap JavaScript
  if (process.client) {
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.router-link-active {
  color: #fff !important;
  font-weight: 600;
}

.navbar-toggler {
  border: none;
}

.navbar-toggler:focus {
  box-shadow: none;
}
</style>
