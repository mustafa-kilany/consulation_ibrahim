<template>
  <div>
    <!-- Hero Section -->
    <section class="hero-small bg-primary text-white py-5">
      <div class="container">
        <div class="row align-items-center min-vh-50">
          <div class="col-lg-8">
            <h1 class="display-4 fw-bold mb-4">Project Portfolio</h1>
            <p class="lead mb-0">Real-world impact through strategic analysis and evidence-based consulting</p>
          </div>
        </div>
      </div>
    </section>


    <!-- Featured Projects -->
    <section class="featured-projects py-5">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="display-5 fw-bold mb-4">Featured Case Studies</h2>
          <p class="lead text-muted">Comprehensive analysis and strategic solutions for major infrastructure projects</p>
        </div>
        
        <div class="row g-4">
          <div class="col-12" v-for="(project, index) in featuredProjects" :key="index">
            <div class="project-showcase card border-0 shadow-lg overflow-hidden">
              <div class="row g-0">
                <div class="col-lg-5">
                  <div class="project-image-container position-relative h-100">
                    <img 
                      :src="project.image" 
                      :alt="project.title"
                      class="img-fluid h-100 w-100"
                      style="object-fit: cover; min-height: 400px;"
                    >
                    <div class="project-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style="background: rgba(0,0,0,0.4);">
                      <div class="text-center text-white">
                        <i :class="project.icon + ' fs-1 mb-3'"></i>
                        <h4 class="fw-bold">{{ project.category }}</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-7">
                  <div class="card-body p-5 h-100 d-flex flex-column">
                    <div class="project-header mb-4">
                      <div class="d-flex align-items-center mb-3">
                        <span class="badge bg-primary me-3">{{ project.type }}</span>
                        <span class="text-muted">{{ project.duration }}</span>
                      </div>
                      <h3 class="fw-bold mb-3">{{ project.title }}</h3>
                      <p class="lead text-muted">{{ project.description }}</p>
                    </div>
                    
                    <div class="project-details flex-grow-1">
                      <div class="row g-3 mb-4">
                        <div class="col-md-6">
                          <h6 class="fw-bold text-primary mb-2">Scope</h6>
                          <ul class="list-unstyled">
                            <li v-for="(scope, sIndex) in project.scope" :key="sIndex" class="mb-1">
                              <i class="fas fa-check-circle text-success me-2"></i>
                              <small>{{ scope }}</small>
                            </li>
                          </ul>
                        </div>
                        <div class="col-md-6">
                          <h6 class="fw-bold text-primary mb-2">Key Outcomes</h6>
                          <ul class="list-unstyled">
                            <li v-for="(outcome, oIndex) in project.outcomes" :key="oIndex" class="mb-1">
                              <i class="fas fa-star text-warning me-2"></i>
                              <small>{{ outcome }}</small>
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      <div class="project-metrics mb-4">
                        <h6 class="fw-bold text-primary mb-3">Project Metrics</h6>
                        <div class="row g-3">
                          <div class="col-4" v-for="(metric, mIndex) in project.metrics" :key="mIndex">
                            <div class="metric-card text-center p-3 bg-light rounded">
                              <h6 class="fw-bold text-primary mb-1">{{ metric.value }}</h6>
                              <small class="text-muted">{{ metric.label }}</small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div class="project-tags">
                      <span v-for="(tag, tIndex) in project.tags" :key="tIndex" class="badge bg-light text-dark me-2 mb-2">
                        {{ tag }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Project Categories -->
    <section class="project-categories py-5 bg-light">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="display-5 fw-bold mb-4">Project Categories</h2>
          <p class="lead text-muted">Diverse expertise across multiple sectors and project types</p>
        </div>
        
        <div class="row g-4">
          <div class="col-lg-3 col-md-6" v-for="(category, index) in projectCategories" :key="index">
            <div class="category-card card border-0 shadow-sm h-100 hover-shadow">
              <div class="card-body text-center p-4">
                <div class="category-icon bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style="width: 70px; height: 70px;">
                  <i :class="category.icon + ' fs-3'"></i>
                </div>
                <h4 class="fw-bold mb-3">{{ category.name }}</h4>
                <p class="text-muted mb-3">{{ category.description }}</p>
                <div class="category-count">
                  <span class="badge bg-primary">{{ category.projectCount }} Projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Methodology Showcase -->
    <section class="methodology-showcase py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 mb-5 mb-lg-0">
            <h2 class="display-5 fw-bold mb-4">Our Analytical Methodology</h2>
            <p class="lead text-muted mb-4">
              Every project follows our proven analytical framework, ensuring comprehensive evaluation and reliable recommendations.
            </p>
            
            <div class="methodology-steps">
              <div class="step-item d-flex align-items-start mb-4" v-for="(step, index) in methodologySteps" :key="index">
                <div class="step-number bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style="width: 40px; height: 40px;">
                  <span class="fw-bold">{{ index + 1 }}</span>
                </div>
                <div>
                  <h5 class="fw-bold mb-2">{{ step.title }}</h5>
                  <p class="text-muted mb-0">{{ step.description }}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="col-lg-6">
            <div class="card border-0 shadow-lg">
              <div class="card-body p-4">
                <h4 class="fw-bold mb-4 text-center">Analytical Framework</h4>
                <img 
                  src="/images/cost-benefit-project_slide12.png" 
                  alt="Analytical Framework"
                  class="img-fluid rounded mb-3"
                  style="width: 100%; background: #f8f9fa; padding: 20px;"
                >
                <p class="text-muted text-center mb-0">
                  Mathematical models and proven methodologies ensure accurate project evaluation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Client Testimonials -->
    <section class="client-testimonials py-5 bg-light">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="display-5 fw-bold mb-4">Client Success Stories</h2>
          <p class="lead text-muted">What our clients say about our strategic consulting services</p>
        </div>
        
        <div class="row g-4">
          <div class="col-lg-4 col-md-6" v-for="(testimonial, index) in testimonials" :key="index">
            <div class="testimonial-card card border-0 shadow-sm h-100">
              <div class="card-body p-4">
                <div class="testimonial-content mb-4">
                  <div class="quote-icon text-primary mb-3">
                    <i class="fas fa-quote-left fs-3"></i>
                  </div>
                  <p class="text-muted fst-italic">{{ testimonial.content }}</p>
                </div>
                <div class="testimonial-author d-flex align-items-center">
                  <div class="author-avatar bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style="width: 50px; height: 50px;">
                    <i class="fas fa-user"></i>
                  </div>
                  <div>
                    <h6 class="fw-bold mb-1">{{ testimonial.name }}</h6>
                    <small class="text-muted">{{ testimonial.position }}</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="cta bg-primary text-white py-5">
      <div class="container">
        <div class="row justify-content-center text-center">
          <div class="col-lg-8">
            <h2 class="display-5 fw-bold mb-4">Start Your Next Project</h2>
            <p class="lead mb-5">Ready to transform your strategic vision into reality? Let's discuss your project requirements.</p>
            <div class="d-flex flex-wrap justify-content-center gap-3">
              <NuxtLink to="/contact" class="btn btn-light btn-lg px-5 btn-custom">
                <i class="fas fa-rocket me-2"></i>Start Project
              </NuxtLink>
              <NuxtLink to="/services" class="btn btn-outline-light btn-lg px-5 btn-custom">
                <i class="fas fa-list me-2"></i>View Services
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// SEO and Meta
useHead({
  title: 'Projects - Nexus Strategic Partners',
  meta: [
    { name: 'description', content: 'Explore our portfolio of strategic consulting projects including airport development, tourism planning, and construction analysis case studies.' },
    { name: 'keywords', content: 'consulting projects, case studies, airport development, tourism planning, construction analysis, feasibility studies' }
  ]
})

// Data

const featuredProjects = [
  {
    id: 'airport',
    title: 'Qunfudhah Airport Development',
    category: 'Airport Infrastructure',
    type: 'Feasibility Study',
    duration: '6 months',
    description: 'Comprehensive feasibility analysis for regional airport development, including economic impact assessment and strategic positioning for enhanced connectivity.',
    image: '/images/feasibility-slide14.jpg',
    icon: 'fas fa-plane',
    scope: [
      'Market demand analysis',
      'Technical feasibility assessment',
      'Economic impact evaluation',
      'Environmental impact study',
      'Financial modeling and projections'
    ],
    outcomes: [
      'Positive feasibility recommendation',
      'Economic impact of $500M+',
      'Job creation potential: 2,000+',
      'Regional connectivity enhancement',
      'Tourism growth catalyst'
    ],
    metrics: [
      { value: '$500M+', label: 'Economic Impact' },
      { value: '2,000+', label: 'Jobs Created' },
      { value: '15%', label: 'ROI' }
    ],
    tags: ['Infrastructure', 'Aviation', 'Economic Development', 'Feasibility Study', 'Regional Planning']
  },
  {
    id: 'waterfront',
    title: 'Waterfront Tourism Development',
    category: 'Tourism & Urban Planning',
    type: 'Strategic Planning',
    duration: '4 months',
    description: 'Strategic plan development for waterfront tourism enhancement, focusing on corniche area improvement and sustainable tourism growth.',
    image: '/images/strategic-plan-exploiting-slide5.jpg',
    icon: 'fas fa-water',
    scope: [
      'Tourism market analysis',
      'Urban planning assessment',
      'Infrastructure requirements',
      'Stakeholder consultation',
      'Sustainability planning'
    ],
    outcomes: [
      'Comprehensive development plan',
      'Tourism revenue increase: 40%',
      'Visitor capacity: 1M+ annually',
      'Sustainable development framework',
      'Community engagement success'
    ],
    metrics: [
      { value: '40%', label: 'Revenue Increase' },
      { value: '1M+', label: 'Annual Visitors' },
      { value: '25%', label: 'Job Growth' }
    ],
    tags: ['Tourism', 'Urban Development', 'Waterfront', 'Strategic Planning', 'Sustainability']
  },
  {
    id: 'construction',
    title: 'Commercial Building Sensitivity Analysis',
    category: 'Construction & Real Estate',
    type: 'Risk Analysis',
    duration: '3 months',
    description: 'Comprehensive sensitivity analysis for commercial construction project in Amman, including risk assessment and optimization recommendations.',
    image: '/images/construction-sensitivity-slide17.png',
    icon: 'fas fa-building',
    scope: [
      'Cost sensitivity analysis',
      'Market risk assessment',
      'Technical specification review',
      'Financial modeling',
      'Risk mitigation strategies'
    ],
    outcomes: [
      'Risk-optimized design',
      'Cost reduction: 15%',
      'Timeline optimization',
      'Quality assurance framework',
      'Investment security enhancement'
    ],
    metrics: [
      { value: '15%', label: 'Cost Reduction' },
      { value: '20%', label: 'Risk Mitigation' },
      { value: '95%', label: 'Quality Score' }
    ],
    tags: ['Construction', 'Risk Analysis', 'Real Estate', 'Sensitivity Study', 'Cost Optimization']
  }
]

const projectCategories = [
  {
    name: 'Infrastructure',
    description: 'Airports, ports, and transportation infrastructure development',
    icon: 'fas fa-road',
    projectCount: 15
  },
  {
    name: 'Tourism',
    description: 'Tourism development and hospitality sector planning',
    icon: 'fas fa-umbrella-beach',
    projectCount: 12
  },
  {
    name: 'Construction',
    description: 'Commercial and residential construction analysis',
    icon: 'fas fa-hard-hat',
    projectCount: 18
  },
  {
    name: 'Economic Development',
    description: 'Regional and national economic development strategies',
    icon: 'fas fa-chart-line',
    projectCount: 8
  }
]

const methodologySteps = [
  {
    title: 'Data Collection',
    description: 'Comprehensive gathering of relevant market, financial, and technical data'
  },
  {
    title: 'Analysis & Modeling',
    description: 'Application of proven analytical frameworks and financial modeling'
  },
  {
    title: 'Risk Assessment',
    description: 'Identification and quantification of project risks and uncertainties'
  },
  {
    title: 'Recommendations',
    description: 'Development of actionable recommendations and implementation strategies'
  }
]

const testimonials = [
  {
    name: 'Ahmed Al-Rashid',
    position: 'Project Director, Infrastructure Development',
    content: 'The feasibility study provided invaluable insights that guided our decision-making process. The analysis was thorough and the recommendations were practical and actionable.'
  },
  {
    name: 'Sarah Mitchell',
    position: 'Tourism Development Manager',
    content: 'Exceptional strategic planning that transformed our waterfront area. The tourism growth exceeded all projections, and the sustainable approach ensures long-term success.'
  },
  {
    name: 'Omar Hassan',
    position: 'Construction Company CEO',
    content: 'The sensitivity analysis saved us significant costs and helped optimize our construction approach. The risk mitigation strategies were particularly valuable.'
  }
]
</script>

<style scoped>
.hero-small {
  min-height: 40vh;
}

.min-vh-50 {
  min-height: 50vh;
}

.stat-card {
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
}

.project-showcase {
  transition: all 0.3s ease;
}

.project-showcase:hover {
  transform: translateY(-3px);
}

.project-image-container {
  min-height: 400px;
}

.metric-card {
  transition: all 0.3s ease;
}

.metric-card:hover {
  background-color: #e9ecef !important;
}

.category-card {
  transition: all 0.3s ease;
}

.category-card:hover {
  transform: translateY(-5px);
}

.step-item {
  transition: all 0.3s ease;
}

.step-item:hover {
  transform: translateX(10px);
}

.testimonial-card {
  transition: all 0.3s ease;
}

.testimonial-card:hover {
  transform: translateY(-3px);
}

@media (max-width: 768px) {
  .hero-small h1 {
    font-size: 2rem !important;
  }
  
  .project-image-container {
    min-height: 250px;
  }
}
</style>
