<template>
  <div>
    <!-- Hero Section with Amman Background -->
    <section class="hero-contact bg-primary text-white position-relative overflow-hidden">
      <div class="hero-background position-absolute w-100 h-100">
        <div class="hero-overlay position-absolute w-100 h-100"></div>
      </div>
      <div class="container position-relative">
        <div class="row align-items-center min-vh-60">
          <div class="col-lg-8">
            <h1 class="display-4 fw-bold mb-4">Get in Touch</h1>
            <p class="lead mb-4">Ready to transform your strategic vision into reality? Let's discuss your project requirements and explore how we can help.</p>
            <div class="contact-highlights">
              <div class="d-flex align-items-center mb-3">
                <i class="fas fa-map-marker-alt me-3 fs-5"></i>
                <span>Based in Amman, Jordan</span>
              </div>
              <div class="d-flex align-items-center mb-3">
                <i class="fas fa-clock me-3 fs-5"></i>
                <span>Response within 24 hours</span>
              </div>
              <div class="d-flex align-items-center">
                <i class="fas fa-handshake me-3 fs-5"></i>
                <span>Free initial consultation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Consultant Profile -->
    <section class="consultant-profile py-5 bg-light">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="card border-0 shadow-lg">
              <div class="card-body p-5">
                <div class="row align-items-center">
                  <div class="col-md-4 text-center mb-4 mb-md-0">
                    <div class="consultant-avatar bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style="width: 120px; height: 120px;">
                      <i class="fas fa-user-tie fs-1"></i>
                    </div>
                    <h4 class="fw-bold mb-2">Eng. Ibrahim Al-Kilany</h4>
                    <p class="text-primary fw-semibold">Nexus Strategic Partners Expert</p>
                  </div>
                  <div class="col-md-8">
                    <h3 class="fw-bold mb-4">Your Strategic Partner</h3>
                    <p class="text-muted mb-4">
                      With over 15 years of experience in strategic consulting and infrastructure development, 
                      Eng. Ibrahim Al-Kilany brings deep expertise in feasibility studies, economic analysis, 
                      and project optimization to every engagement.
                    </p>
                    <div class="consultant-credentials">
                      <div class="row g-3">
                        <div class="col-6">
                          <div class="credential-item text-center p-3 bg-light rounded">
                            <i class="fas fa-graduation-cap text-primary fs-4 mb-2"></i>
                            <h6 class="fw-bold mb-1">Engineering</h6>
                            <small class="text-muted">Strategic Planning</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form & Information -->
    <section class="contact-section py-5">
      <div class="container">
        <div class="row g-5">
          <!-- Contact Form -->
          <div class="col-lg-8">
            <div class="card border-0 shadow-sm">
              <div class="card-body p-5">
                <h3 class="fw-bold mb-4">Start Your Project</h3>
                <p class="text-muted mb-4">Fill out the form below and we'll get back to you within 24 hours to discuss your project requirements.</p>
                
                <form @submit.prevent="submitForm" class="contact-form">
                  <div class="row g-3">
                    <div class="col-md-6">
                      <label for="firstName" class="form-label fw-semibold">First Name *</label>
                      <input 
                        type="text" 
                        class="form-control form-control-lg" 
                        id="firstName" 
                        v-model="form.firstName"
                        required
                      >
                    </div>
                    <div class="col-md-6">
                      <label for="lastName" class="form-label fw-semibold">Last Name *</label>
                      <input 
                        type="text" 
                        class="form-control form-control-lg" 
                        id="lastName" 
                        v-model="form.lastName"
                        required
                      >
                    </div>
                    <div class="col-md-6">
                      <label for="email" class="form-label fw-semibold">Email Address *</label>
                      <input 
                        type="email" 
                        class="form-control form-control-lg" 
                        id="email" 
                        v-model="form.email"
                        required
                      >
                    </div>
                    <div class="col-md-6">
                      <label for="phone" class="form-label fw-semibold">Phone Number</label>
                      <input 
                        type="tel" 
                        class="form-control form-control-lg" 
                        id="phone" 
                        v-model="form.phone"
                      >
                    </div>
                    <div class="col-12">
                      <label for="company" class="form-label fw-semibold">Company/Organization</label>
                      <input 
                        type="text" 
                        class="form-control form-control-lg" 
                        id="company" 
                        v-model="form.company"
                      >
                    </div>
                    <div class="col-12">
                      <label for="projectType" class="form-label fw-semibold">Project Type *</label>
                      <select 
                        class="form-select form-select-lg" 
                        id="projectType" 
                        v-model="form.projectType"
                        required
                      >
                        <option value="">Select project type...</option>
                        <option value="feasibility-study">Feasibility Study</option>
                        <option value="strategic-planning">Strategic Planning</option>
                        <option value="cost-benefit-analysis">Cost-Benefit Analysis</option>
                        <option value="kpi-auditing">KPI Auditing</option>
                        <option value="project-extraction">Project Extraction</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div class="col-12">
                      <label for="budget" class="form-label fw-semibold">Project Budget Range</label>
                      <select 
                        class="form-select form-select-lg" 
                        id="budget" 
                        v-model="form.budget"
                      >
                        <option value="">Select budget range...</option>
                        <option value="under-50k">Under $50,000</option>
                        <option value="50k-100k">$50,000 - $100,000</option>
                        <option value="100k-500k">$100,000 - $500,000</option>
                        <option value="500k-1m">$500,000 - $1,000,000</option>
                        <option value="over-1m">Over $1,000,000</option>
                      </select>
                    </div>
                    <div class="col-12">
                      <label for="timeline" class="form-label fw-semibold">Preferred Timeline</label>
                      <select 
                        class="form-select form-select-lg" 
                        id="timeline" 
                        v-model="form.timeline"
                      >
                        <option value="">Select timeline...</option>
                        <option value="urgent">Urgent (1-2 weeks)</option>
                        <option value="fast">Fast track (1 month)</option>
                        <option value="standard">Standard (2-3 months)</option>
                        <option value="flexible">Flexible (3+ months)</option>
                      </select>
                    </div>
                    <div class="col-12">
                      <label for="message" class="form-label fw-semibold">Project Description *</label>
                      <textarea 
                        class="form-control form-control-lg" 
                        id="message" 
                        rows="5" 
                        v-model="form.message"
                        placeholder="Please describe your project, objectives, and any specific requirements..."
                        required
                      ></textarea>
                    </div>
                    <div class="col-12">
                      <div class="form-check">
                        <input 
                          class="form-check-input" 
                          type="checkbox" 
                          id="newsletter" 
                          v-model="form.newsletter"
                        >
                        <label class="form-check-label" for="newsletter">
                          I would like to receive updates about strategic consulting insights and industry trends
                        </label>
                      </div>
                    </div>
                    <div class="col-12">
                      <button type="submit" class="btn btn-primary btn-lg px-5 btn-custom" :disabled="isSubmitting">
                        <i class="fas fa-paper-plane me-2"></i>
                        {{ isSubmitting ? 'Sending...' : 'Send Message' }}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          
          <!-- Contact Information -->
          <div class="col-lg-4">
            <div class="contact-info">
              <!-- Contact Details -->
              <div class="card border-0 shadow-sm mb-4">
                <div class="card-body p-4">
                  <h4 class="fw-bold mb-4">Contact Information</h4>
                  <div class="contact-item d-flex align-items-start mb-4">
                    <div class="contact-icon bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style="width: 50px; height: 50px;">
                      <i class="fas fa-map-marker-alt"></i>
                    </div>
                    <div>
                      <h6 class="fw-bold mb-1">Location</h6>
                      <p class="text-muted mb-0">Amman, Jordan</p>
                    </div>
                  </div>
                  <div class="contact-item d-flex align-items-start mb-4">
                    <div class="contact-icon bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style="width: 50px; height: 50px;">
                      <i class="fas fa-phone"></i>
                    </div>
                    <div>
                      <h6 class="fw-bold mb-1">Phone</h6>
                      <p class="text-muted mb-0">+962 X XXX XXXX</p>
                    </div>
                  </div>
                  <div class="contact-item d-flex align-items-start mb-4">
                    <div class="contact-icon bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style="width: 50px; height: 50px;">
                      <i class="fas fa-envelope"></i>
                    </div>
                    <div>
                      <h6 class="fw-bold mb-1">Email</h6>
                      <p class="text-muted mb-0">info@strategicconsulting.jo</p>
                    </div>
                  </div>
                  <div class="contact-item d-flex align-items-start">
                    <div class="contact-icon bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style="width: 50px; height: 50px;">
                      <i class="fas fa-clock"></i>
                    </div>
                    <div>
                      <h6 class="fw-bold mb-1">Business Hours</h6>
                      <p class="text-muted mb-1">Sunday - Thursday: 9:00 AM - 6:00 PM</p>
                      <p class="text-muted mb-0">Friday - Saturday: By appointment</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Why Choose Us -->
              <div class="card border-0 shadow-sm">
                <div class="card-body p-4">
                  <h4 class="fw-bold mb-4">Why Choose Us?</h4>
                  <div class="why-choose-item d-flex align-items-start mb-3" v-for="(reason, index) in whyChooseUs" :key="index">
                    <div class="reason-icon text-primary me-3">
                      <i :class="reason.icon + ' fs-5'"></i>
                    </div>
                    <div>
                      <h6 class="fw-bold mb-1">{{ reason.title }}</h6>
                      <small class="text-muted">{{ reason.description }}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section py-5 bg-light">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="display-5 fw-bold mb-4">Frequently Asked Questions</h2>
          <p class="lead text-muted">Common questions about our strategic consulting services</p>
        </div>
        
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="accordion" id="faqAccordion">
              <div class="accordion-item border-0 shadow-sm mb-3" v-for="(faq, index) in faqs" :key="index">
                <h2 class="accordion-header">
                  <button 
                    class="accordion-button fw-semibold" 
                    type="button" 
                    :class="{ collapsed: index !== 0 }"
                    :data-bs-toggle="`collapse`" 
                    :data-bs-target="`#faq${index}`"
                  >
                    {{ faq.question }}
                  </button>
                </h2>
                <div 
                  :id="`faq${index}`" 
                  class="accordion-collapse collapse" 
                  :class="{ show: index === 0 }"
                  data-bs-parent="#faqAccordion"
                >
                  <div class="accordion-body text-muted">
                    {{ faq.answer }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// SEO and Meta
useHead({
  title: 'Contact Us - Nexus Strategic Partners',
  meta: [
    { name: 'description', content: 'Contact Eng. Ibrahim Al-Kilany for strategic consulting services. Based in Amman, Jordan. Free initial consultation available.' },
    { name: 'keywords', content: 'contact strategic consulting, Ibrahim Al-Kilany, Amman Jordan, consulting services, project consultation' }
  ]
})

// Form data
const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  projectType: '',
  budget: '',
  timeline: '',
  message: '',
  newsletter: false
})

const isSubmitting = ref(false)

// Form submission
const submitForm = async () => {
  isSubmitting.value = true
  
  // Simulate form submission
  setTimeout(() => {
    alert('Thank you for your message! We will get back to you within 24 hours.')
    
    // Reset form
    Object.keys(form.value).forEach(key => {
      if (typeof form.value[key] === 'boolean') {
        form.value[key] = false
      } else {
        form.value[key] = ''
      }
    })
    
    isSubmitting.value = false
  }, 2000)
}

// Data
const whyChooseUs = [
  {
    icon: 'fas fa-medal',
    title: 'Proven Expertise',
    description: 'Extensive strategic consulting experience'
  },
  {
    icon: 'fas fa-chart-line',
    title: 'Data-Driven',
    description: 'Evidence-based analysis and recommendations'
  },
  {
    icon: 'fas fa-handshake',
    title: 'Client-Focused',
    description: 'Tailored solutions for your specific needs'
  },
  {
    icon: 'fas fa-clock',
    title: 'Timely Delivery',
    description: 'Projects completed on time and within budget'
  },
  {
    icon: 'fas fa-shield-alt',
    title: 'Risk Management',
    description: 'Comprehensive risk assessment and mitigation'
  }
]

const faqs = [
  {
    question: 'What types of projects do you typically work on?',
    answer: 'We specialize in infrastructure development projects including airports, ports, tourism facilities, and commercial construction. Our expertise covers feasibility studies, strategic planning, cost-benefit analysis, and project optimization across various sectors.'
  },
  {
    question: 'How long does a typical consulting project take?',
    answer: 'Project timelines vary depending on scope and complexity. A basic feasibility study typically takes 2-4 weeks, while comprehensive strategic planning projects may require 2-4 months. We provide detailed timelines during our initial consultation.'
  },
  {
    question: 'Do you offer services outside of Jordan?',
    answer: 'Yes, we provide consulting services throughout the Middle East region and can work on international projects. We have experience with cross-border projects and can adapt our methodologies to different regulatory environments.'
  },
  {
    question: 'What is included in your feasibility studies?',
    answer: 'Our feasibility studies include market analysis, technical assessment, financial modeling, risk evaluation, economic impact analysis, and detailed recommendations. We provide comprehensive reports with actionable insights for decision-making.'
  },
  {
    question: 'How do you ensure the quality of your analysis?',
    answer: 'We employ proven analytical frameworks, industry-standard methodologies, and rigorous quality control processes. Our recommendations are based on comprehensive data analysis, stakeholder consultation, and best practices from similar projects.'
  }
]
</script>

<style scoped>
.hero-contact {
  min-height: 60vh;
  background: linear-gradient(135deg, var(--primary-color) 0%, #2563eb 100%);
}

.hero-background {
  background: radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
}

.hero-overlay {
  background: rgba(30, 58, 138, 0.1);
}

.min-vh-60 {
  min-height: 60vh;
}

.consultant-avatar {
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.credential-item {
  transition: all 0.3s ease;
}

.credential-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.contact-form .form-control,
.contact-form .form-select {
  border: 2px solid #e9ecef;
  transition: all 0.3s ease;
}

.contact-form .form-control:focus,
.contact-form .form-select:focus {
  border-color: #0d6efd;
  box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.25);
}

.contact-item {
  transition: all 0.3s ease;
  padding: 10px;
  border-radius: 8px;
}

.contact-item:hover {
  background-color: #f8f9fa;
  transform: translateX(5px);
}

.why-choose-item {
  transition: all 0.3s ease;
  padding: 10px;
  border-radius: 8px;
}

.why-choose-item:hover {
  background-color: #f8f9fa;
  transform: translateX(5px);
}

.accordion-button {
  background-color: #f8f9fa;
  border: none;
}

.accordion-button:not(.collapsed) {
  background-color: #e7f1ff;
  color: #0d6efd;
}

.accordion-button:focus {
  box-shadow: none;
}

@media (max-width: 768px) {
  .hero-contact h1 {
    font-size: 2rem !important;
  }
}
</style>
