<script setup>
// Nuxt 3: useHead is auto-imported
useHead({
  title: 'Services - Nexus Strategic Partners',
  meta: [
    {
      name: 'description',
      content:
        'Comprehensive strategic consulting services including feasibility studies, cost-benefit analysis, and infrastructure development planning.'
    },
    {
      name: 'keywords',
      content:
        'strategic consulting services, feasibility studies, cost-benefit analysis, infrastructure planning, project evaluation'
    }
  ]
})

// Data — DO NOT "return" in <script setup>
const mainServices = [
  {
    icon: 'fas fa-search',
    title: 'Auditing Strategic Plans',
    description:
      'Comprehensive evaluation of strategic plans to identify gaps, optimize resource allocation, and maximize project impact through systematic analysis.',
    features: [
      'Strategic plan assessment and gap analysis',
      'Resource allocation optimization',
      'Performance indicator evaluation',
      'Implementation roadmap review',
      'Stakeholder alignment assessment'
    ],
    deliverables: ['Audit Report', 'Gap Analysis', 'Recommendations', 'Action Plan']
  },
  {
    icon: 'fas fa-chart-bar',
    title: 'KPI Auditing and Evaluation',
    description:
      'Data-driven assessment of key performance indicators to measure project success and identify areas for improvement.',
    features: [
      'KPI framework development',
      'Performance measurement systems',
      'Benchmarking and comparative analysis',
      'Dashboard and reporting tools',
      'Continuous monitoring protocols'
    ],
    deliverables: ['KPI Framework', 'Performance Dashboard', 'Benchmark Report', 'Monitoring System']
  },
  {
    icon: 'fas fa-lightbulb',
    title: 'Extracting Development Projects',
    description:
      'Identifying and developing viable projects from strategic plans to drive economic and social development.',
    features: [
      'Project identification and screening',
      'Feasibility assessment',
      'Priority ranking and selection',
      'Implementation planning',
      'Risk assessment and mitigation'
    ],
    deliverables: ['Project Portfolio', 'Feasibility Studies', 'Priority Matrix', 'Implementation Plan']
  }
]

const processSteps = [
  { title: 'Discovery', description: 'Initial consultation and requirement gathering to understand project scope and objectives', duration: '1–2 weeks' },
  { title: 'Analysis', description: 'Comprehensive data collection, market research, and stakeholder analysis', duration: '2–4 weeks' },
  { title: 'Evaluation', description: 'Detailed assessment using proven methodologies and analytical frameworks', duration: '3–6 weeks' },
  { title: 'Delivery', description: 'Final recommendations, reports, and implementation support', duration: '1–2 weeks' }
]

const specializedAreas = [
  {
    icon: 'fas fa-plane',
    title: 'Airport Infrastructure',
    description:
      'Comprehensive feasibility studies for airport development projects, including economic impact analysis and strategic positioning.',
    image: '/images/feasibility-slide14.jpg',
    tags: ['Feasibility Studies', 'Economic Impact', 'Strategic Planning', 'Infrastructure']
  },
  {
    icon: 'fas fa-water',
    title: 'Tourism and Waterfront Development',
    description:
      'Strategic planning for tourism enhancement and waterfront development projects to boost economic growth.',
    image: '/images/strategic-plan-exploiting-slide5.jpg',
    tags: ['Tourism Planning', 'Urban Development', 'Economic Growth', 'Waterfront']
  },
  {
    icon: 'fas fa-building',
    title: 'Construction and Real Estate',
    description:
      'Sensitivity analysis and risk assessment for construction projects and real estate development initiatives.',
    image: '/images/construction-sensitivity-slide17.png',
    tags: ['Risk Analysis', 'Construction', 'Real Estate', 'Sensitivity Studies']
  },
  {
    icon: 'fas fa-chart-line',
    title: 'Economic Development',
    description:
      'Strategic economic analysis and development planning for regional and national growth initiatives.',
    image: '/images/strategic-plan-exploiting-slide3.jpg',
    tags: ['Economic Analysis', 'Development Planning', 'Growth Strategy', 'Policy Analysis']
  }
]

const analyticalTools = [
  { icon: 'fas fa-calculator', name: 'NPV Analysis', purpose: 'Investment evaluation' },
  { icon: 'fas fa-chart-pie', name: 'Cost-Benefit Analysis', purpose: 'Project viability' },
  { icon: 'fas fa-balance-scale', name: 'Risk Assessment', purpose: 'Risk quantification' },
  { icon: 'fas fa-trending-up', name: 'Sensitivity Analysis', purpose: 'Variable impact' },
  { icon: 'fas fa-database', name: 'Statistical Modeling', purpose: 'Data analysis' },
  { icon: 'fas fa-project-diagram', name: 'SWOT Analysis', purpose: 'Strategic assessment' }
]

const servicePackages = [
  {
    name: 'Essential',
    description: 'Basic consulting package for small projects',
    features: ['Initial project assessment', 'Basic feasibility analysis', 'Executive summary report', 'Email support'],
    timeline: '2–4 weeks',
    featured: false
  },
  {
    name: 'Professional',
    description: 'Comprehensive consulting for medium projects',
    features: [
      'Detailed feasibility study',
      'Cost-benefit analysis',
      'Risk assessment',
      'Implementation roadmap',
      'Stakeholder consultation',
      'Phone and email support'
    ],
    timeline: '4–8 weeks',
    featured: true
  },
  {
    name: 'Enterprise',
    description: 'Full-service consulting for large projects',
    features: [
      'Complete strategic analysis',
      'Multi-scenario modeling',
      'Comprehensive risk analysis',
      'Detailed implementation plan',
      'Ongoing monitoring support',
      'Dedicated project manager',
      '24/7 priority support'
    ],
    timeline: '8–16 weeks',
    featured: false
  }
]
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="hero-small bg-primary text-white py-5">
      <div class="container">
        <div class="row align-items-center min-vh-50">
          <div class="col-lg-8">
            <h1 class="display-4 fw-bold mb-4">Nexus Strategic Partners Services</h1>
            <p class="lead mb-0">Comprehensive consulting solutions for infrastructure development and strategic planning</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Services -->
    <section class="main-services py-5">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="display-5 fw-bold mb-4">Our Core Services</h2>
          <p class="lead text-muted">Evidence-based analysis and strategic guidance for informed decision-making</p>
        </div>

        <div class="row g-4">
          <div v-for="(service, i) in mainServices" :key="`svc-${i}`" class="col-lg-4 col-md-6">
            <div class="service-card card h-100 border-0 shadow-sm hover-shadow">
              <div class="card-body p-4">
                <div class="service-header text-center mb-4">
                  <div class="service-icon bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                       style="width:80px;height:80px;">
                    <i :class="service.icon + ' fs-3'"></i>
                  </div>
                  <h3 class="fw-bold">{{ service.title }}</h3>
                </div>

                <p class="text-muted mb-4">{{ service.description }}</p>

                <div class="service-features">
                  <h6 class="fw-bold mb-3">Key Features:</h6>
                  <ul class="list-unstyled">
                    <li v-for="(feature, fi) in service.features" :key="`feat-${i}-${fi}`" class="mb-2">
                      <i class="fas fa-check-circle text-success me-2"></i> {{ feature }}
                    </li>
                  </ul>
                </div>

                <div class="service-deliverables mt-4">
                  <h6 class="fw-bold mb-3">Deliverables:</h6>
                  <div class="d-flex flex-wrap gap-2">
                    <span v-for="(d, di) in service.deliverables" :key="`del-${i}-${di}`" class="badge bg-light text-dark">{{ d }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </section>

    <!-- Process -->
    <section class="service-process py-5 bg-light">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="display-5 fw-bold mb-4">Our Consulting Process</h2>
          <p class="lead text-muted">Systematic approach ensuring comprehensive analysis and actionable recommendations</p>
        </div>

        <div class="row g-4">
          <div v-for="(step, i) in processSteps" :key="`step-${i}`" class="col-lg-3 col-md-6">
            <div class="process-step text-center position-relative">
              <div v-if="i < processSteps.length - 1" class="step-connector"></div>
              <div class="step-number bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                   style="width:80px;height:80px;">
                <span class="fs-3 fw-bold">{{ i + 1 }}</span>
              </div>
              <h4 class="fw-bold mb-3">{{ step.title }}</h4>
              <p class="text-muted">{{ step.description }}</p>
              <div class="step-duration badge bg-secondary-custom">{{ step.duration }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Specialized Areas -->
    <section class="specialized-services py-5">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="display-5 fw-bold mb-4">Specialized Consulting Areas</h2>
          <p class="lead text-muted">Expert analysis across multiple sectors and project types</p>
        </div>

        <div class="row g-4">
          <div v-for="(area, i) in specializedAreas" :key="`area-${i}`" class="col-lg-6">
            <div class="specialized-card card border-0 shadow-sm h-100">
              <div class="row g-0 h-100">
                <div class="col-md-4">
                  <img :src="area.image" :alt="area.title" class="img-fluid h-100 w-100" style="object-fit: cover;">
                </div>
                <div class="col-md-8">
                  <div class="card-body p-4 h-100 d-flex flex-column">
                    <div class="d-flex align-items-center mb-3">
                      <div class="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                           style="width:50px;height:50px;">
                        <i :class="area.icon + ' fs-5'"></i>
                      </div>
                      <h4 class="fw-bold mb-0">{{ area.title }}</h4>
                    </div>

                    <p class="text-muted mb-3 flex-grow-1">{{ area.description }}</p>

                    <div class="expertise-tags">
                      <span v-for="(tag, ti) in area.tags" :key="`tag-${i}-${ti}`" class="badge bg-light text-primary me-2 mb-2">{{ tag }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </section>

    <!-- Analytical Tools -->
    <section class="analytical-tools py-5 bg-light">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 mb-5 mb-lg-0">
            <h2 class="display-5 fw-bold mb-4">Analytical Tools and Methodologies</h2>
            <p class="lead text-muted mb-4">
              We employ industry-standard analytical tools and proven methodologies to ensure accurate and reliable results.
            </p>
            <div class="row g-3">
              <div v-for="(tool, i) in analyticalTools" :key="`tool-${i}`" class="col-md-6">
                <div class="tool-item bg-white p-3 rounded shadow-sm">
                  <div class="d-flex align-items-center">
                    <div class="tool-icon bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                         style="width:40px;height:40px;">
                      <i :class="tool.icon + ' fs-6'"></i>
                    </div>
                    <div>
                      <h6 class="fw-bold mb-1">{{ tool.name }}</h6>
                      <small class="text-muted">{{ tool.purpose }}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="card border-0 shadow-lg">
              <div class="card-body p-4">
                <h4 class="fw-bold mb-4 text-center">Cost-Benefit Analysis Framework</h4>
                <div class="img-fluid rounded mb-3 d-flex align-items-center justify-content-center"
                     style="width:100%;background:#f8f9fa;padding:20px;height:200px;">
                  <div class="text-center">
                    <i class="fas fa-chart-line text-primary mb-3" style="font-size:3rem;"></i>
                    <h5 class="text-muted">Cost-Benefit Analysis Framework</h5>
                  </div>
                </div>
                <p class="text-muted text-center mb-0">
                  Mathematical framework for quantitative project evaluation and decision support
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </section>

    <!-- Packages -->
    <section class="service-packages py-5">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="display-5 fw-bold mb-4">Service Packages</h2>
          <p class="lead text-muted">Flexible consulting packages tailored to your project needs</p>
        </div>

        <div class="row g-4">
          <div v-for="(pkg, i) in servicePackages" :key="`pkg-${i}`" class="col-lg-4 col-md-6">
            <div class="package-card card h-100 border-0 shadow-sm" :class="{ 'border-primary': pkg.featured }">
              <div class="card-header bg-transparent border-0 text-center py-4" :class="{ 'bg-primary text-white': pkg.featured }">
                <h4 class="fw-bold mb-2">{{ pkg.name }}</h4>
                <p class="mb-0" :class="pkg.featured ? 'text-white-50' : 'text-muted'">{{ pkg.description }}</p>
                <div v-if="pkg.featured" class="package-badge mt-3">
                  <span class="badge bg-warning text-dark">Most Popular</span>
                </div>
              </div>

              <div class="card-body p-4">
                <ul class="list-unstyled">
                  <li v-for="(f, fi) in pkg.features" :key="`pkgf-${i}-${fi}`" class="mb-3">
                    <i class="fas fa-check-circle text-success me-2"></i> {{ f }}
                  </li>
                </ul>

                <div class="package-timeline mt-4 d-flex align-items-center justify-content-between">
                  <span class="text-muted">Timeline:</span>
                  <span class="fw-bold">{{ pkg.timeline }}</span>
                </div>
              </div>

              <div class="card-footer bg-transparent border-0 p-4">
                <NuxtLink :to="'/contact'" class="btn w-100" :class="pkg.featured ? 'btn-primary' : 'btn-outline-primary'">
                  Get Started
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </section>

    <!-- CTA -->
    <section class="cta bg-primary text-white py-5">
      <div class="container">
        <div class="row justify-content-center text-center">
          <div class="col-lg-8">
            <h2 class="display-5 fw-bold mb-4">Ready to Start Your Project?</h2>
            <p class="lead mb-5">Let us discuss your consulting needs and develop a customized solution</p>
            <div class="d-flex flex-wrap justify-content-center gap-3">
              <NuxtLink to="/contact" class="btn btn-light btn-lg px-5 btn-custom">
                <i class="fas fa-comments me-2"></i>Schedule Consultation
              </NuxtLink>
              <NuxtLink to="/projects" class="btn btn-outline-light btn-lg px-5 btn-custom">
                <i class="fas fa-eye me-2"></i>View Case Studies
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="css">
.hero-small { min-height: 40vh; }
.process-step .step-connector {
  position: absolute;
  right: -12px;
  top: 40px;
  width: 24px;
  height: 2px;
  background: rgba(0,0,0,0.1);
}
.bg-secondary-custom {
  background-color: #e2e3e5;
  color: #333;
}
.hover-shadow:hover { box-shadow: 0 0.75rem 1.5rem rgba(0,0,0,0.08); }
.btn-custom { border-radius: 999px; }
</style>