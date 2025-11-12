<template>
  <div>
    <!-- Hero Section with Image Slider -->
    <section class="hero text-white position-relative overflow-hidden">
      <!-- Image Slider -->
      <div class="hero-slider position-absolute w-100 h-100">
        <div 
          v-for="(slide, index) in heroSlides" 
          :key="index"
          class="hero-slide position-absolute w-100 h-100"
          :class="{ 'active': currentSlide === index }"
          :style="{ 
            backgroundImage: `url('${slide.image}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }"
        >
          <div class="hero-overlay position-absolute w-100 h-100" style="background: rgba(0,0,0,0.4);"></div>
        </div>
      </div>
      
      <!-- Slider Navigation Dots -->
      <div class="slider-dots position-absolute" style="bottom: 30px; left: 50%; transform: translateX(-50%); z-index: 10;">
        <div class="d-flex gap-2">
          <button 
            v-for="(slide, index) in heroSlides" 
            :key="index"
            class="slider-dot"
            :class="{ 'active': currentSlide === index }"
            @click="goToSlide(index)"
          ></button>
        </div>
      </div>
      
      <div class="container position-relative" style="z-index: 2;">
        <div class="row min-vh-100 align-items-center">
          <div class="col-lg-8">
            <h1 class="display-3 fw-bold mb-4 fade-in-up">
              Transforming Strategic Visions into Real Projects
            </h1>
            <p class="lead mb-5 fade-in-up">
              Expert consulting in feasibility studies, strategic planning, and project evaluation for national-scale infrastructure development
            </p>
            <div class="d-flex flex-wrap gap-3 fade-in-up">
              <NuxtLink to="/projects" class="btn btn-light btn-lg px-4">
                View Projects
              </NuxtLink>
              <NuxtLink to="/contact" class="btn btn-outline-light btn-lg px-4">
                Get Consultation
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      
    </section>

    <!-- Our Expertise Section with Port/Ships Image -->
    <section class="expertise py-5 bg-light section-padding">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 mb-5 mb-lg-0">
            <h2 class="display-5 fw-bold mb-4">Our Expertise</h2>
            <p class="lead text-muted mb-5">
              Strategic analysis and project evaluation for infrastructure and economic development
            </p>
            
            <div class="row g-4">
              <div class="col-12" v-for="(expertise, index) in expertiseItems" :key="index">
                <div class="expertise-item mb-4">
                  <h4 class="fw-bold mb-2">{{ expertise.title }}</h4>
                  <p class="text-muted mb-0">{{ expertise.description }}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="col-lg-6">
            <!-- Corniche/Waterfront Development image from Strategic Plan -->
            <div class="card border-0 shadow-lg overflow-hidden">
              <div class="position-relative">
                <img 
                  src="/images/strategic-plan-exploiting-slide5.jpg" 
                  alt="Corniche Waterfront Development" 
                  class="card-img-top"
                  style="height: 300px; object-fit: cover;"
                >
                <div class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style="background: linear-gradient(135deg, rgba(30, 58, 138, 0.8) 0%, rgba(197, 166, 84, 0.8) 100%);">
                  <div class="text-center text-white">
                    <i class="fas fa-water text-white mb-3" style="font-size: 3rem;"></i>
                    <h3 class="fw-bold mb-3">Waterfront & Tourism Development</h3>
                    <p class="mb-0">
                      Strategic development and economic impact analysis for maritime and tourism enhancement
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Key Services Overview -->
    <section class="services-overview section-padding">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="display-5 fw-bold mb-4">Strategic Consulting Services</h2>
          <p class="lead text-muted">Evidence-based analysis for informed decision-making</p>
        </div>
        
        <div class="row g-4">
          <div class="col-lg-4 col-md-6" v-for="(service, index) in services" :key="index">
            <div class="card h-100 border-0 shadow-sm hover-shadow">
              <div class="card-body p-4">
                <h3 class="fw-bold mb-3">{{ service.title }}</h3>
                <p class="text-muted mb-4">{{ service.description }}</p>
                <NuxtLink :to="service.link" class="btn btn-outline-primary">
                  Learn More
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Recent Projects Showcase -->
    <section class="recent-projects py-5 bg-light section-padding">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="display-5 fw-bold mb-4">Featured Projects</h2>
          <p class="lead text-muted">Real-world impact through strategic analysis and planning</p>
        </div>
        
        <div class="row g-4">
          <div class="col-lg-4 col-md-6" v-for="(project, index) in featuredProjects" :key="index">
            <div class="card h-100 border-0 shadow-sm overflow-hidden hover-shadow">
              <div class="position-relative">
                <img 
                  :src="project.image" 
                  :alt="project.name"
                  class="card-img-top project-image"
                  style="height: 250px; object-fit: cover;"
                >
                <div class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style="background: rgba(0,0,0,0.6);">
                  <div class="text-center text-white">
                    <h5 class="fw-bold">{{ project.title }}</h5>
                    <p class="mb-0">{{ project.subtitle }}</p>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <h3 class="fw-bold mb-3">{{ project.name }}</h3>
                <p class="text-muted mb-4">{{ project.description }}</p>
                <div class="d-flex flex-wrap gap-2">
                  <span 
                    v-for="(tag, tagIndex) in project.tags" 
                    :key="tagIndex"
                    class="badge"
                    :class="tag.class"
                  >
                    {{ tag.name }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="text-center mt-5">
          <NuxtLink to="/projects" class="btn btn-primary btn-lg px-5 btn-custom">
            <i class="fas fa-eye me-2"></i>View All Projects
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="cta bg-primary text-white section-padding bg-pattern">
      <div class="container">
        <div class="row justify-content-center text-center">
          <div class="col-lg-8">
            <h2 class="display-5 fw-bold mb-4">Ready to Transform Your Strategic Vision?</h2>
            <p class="lead mb-5">Get expert consultation for your next infrastructure or development project</p>
            <NuxtLink to="/contact" class="btn btn-light btn-lg px-5">
              Start Your Project
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// SEO and Meta
useHead({
  title: 'Nexus Strategic Partners - Transforming Visions into Reality',
  meta: [
    { name: 'description', content: 'Expert consulting in feasibility studies, strategic planning, and project evaluation for national-scale infrastructure development' },
    { name: 'keywords', content: 'strategic consulting, feasibility studies, project evaluation, infrastructure development, cost-benefit analysis, risk management' }
  ]
})

// Hero Slider Data
const currentSlide = ref(0)
const heroSlides = [
  {
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=3000&q=80',
    title: 'Corporate Infrastructure',
    description: 'Modern skyscraper development and large-scale project planning'
  },
  {
    image: 'https://images.unsplash.com/photo-1557433363-1608a0b9d2b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=3000&q=80',
    title: 'Business Team Presentation',
    description: 'Strategic planning and corporate development in modern office environment'
  },
  {
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=3000&q=80',
    title: 'Professional Consulting',
    description: 'Expert business advisory and strategic consulting services'
  },
  {
    image: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=3000&q=80',
    title: 'Financial Analysis',
    description: 'Investment evaluation and financial modeling expertise'
  }
]

// Slider functionality
const goToSlide = (index) => {
  currentSlide.value = index
}

// Auto-advance slider
onMounted(() => {
  setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % heroSlides.length
  }, 5000) // Change slide every 5 seconds
})

// Data
const expertiseItems = [
  {
    title: 'Feasibility Studies',
    description: 'Comprehensive analysis of project viability, risk assessment, and economic impact evaluation'
  },
  {
    title: 'Strategic Planning',
    description: 'Development and auditing of strategic plans for national and regional development projects'
  },
  {
    title: 'Cost-Benefit Analysis',
    description: 'Quantitative evaluation of project economics, sensitivity analysis, and ROI optimization'
  }
]

const services = [
  {
    title: 'Auditing Strategic Plans',
    description: 'Comprehensive evaluation of strategic plans, identifying gaps and optimization opportunities for maximum impact',
    link: '/services#auditing'
  },
  {
    title: 'KPI Auditing & Evaluation',
    description: 'Data-driven assessment of key performance indicators and measurable outcomes for project success',
    link: '/services#kpi'
  },
  {
    title: 'Extracting Development Projects',
    description: 'Identifying and developing viable projects from strategic plans for economic and social development',
    link: '/services#extraction'
  }
]

const featuredProjects = [
  {
    title: 'Qunfudhah Airport',
    subtitle: 'Feasibility Study',
    name: 'Airport Infrastructure Development',
    description: 'Comprehensive feasibility analysis for regional airport development, including economic impact and strategic positioning',
    image: '/images/feasibility-slide14.jpg',
    tags: [
      { name: 'Infrastructure', class: 'bg-primary' },
      { name: 'Feasibility Study', class: 'bg-secondary-custom' }
    ]
  },
  {
    title: 'Waterfront Development',
    subtitle: 'Strategic Planning',
    name: 'Corniche Tourism Enhancement',
    description: 'Strategic plan exploitation for tourism development and waterfront area improvement projects',
    image: '/images/strategic-plan-exploiting-slide5.jpg',
    tags: [
      { name: 'Tourism', class: 'bg-info' },
      { name: 'Urban Development', class: 'bg-secondary-custom' }
    ]
  },
  {
    title: 'Construction Analysis',
    subtitle: 'Sensitivity Study',
    name: 'Commercial Building Development',
    description: 'Comprehensive sensitivity analysis for commercial construction projects and risk assessment',
    image: '/images/construction-sensitivity-slide17.png',
    tags: [
      { name: 'Construction', class: 'bg-success' },
      { name: 'Risk Analysis', class: 'bg-secondary-custom' }
    ]
  }
]
</script>

<style scoped>
/* Component-specific styles */
.hero {
  background-attachment: fixed;
  background-color: var(--primary-color); /* Fallback background */
}

/* Hero Slider Styles */
.hero-slider {
  overflow: hidden;
  z-index: 1;
}

.hero-slide {
  opacity: 0;
  transition: opacity 1s ease-in-out;
  z-index: 1;
}

.hero-slide.active {
  opacity: 1;
  z-index: 2;
}

.slider-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.5);
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
}

.slider-dot.active {
  background: white;
  border-color: white;
}

.slider-dot:hover {
  border-color: white;
  background: rgba(255, 255, 255, 0.3);
}

@media (max-width: 768px) {
  .hero {
    background-attachment: scroll;
  }
  
  .slider-dots {
    bottom: 20px !important;
  }
  
  .slider-dot {
    width: 10px;
    height: 10px;
  }
}
</style>
