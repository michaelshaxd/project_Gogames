class Plan{
  selectors = {
    plan: '[data-js-plan]',
  }

  constructor() {
    this.planElements = document.querySelectorAll(this.selectors.plan)
    this.bindEvents()
  }

  removeClasses() {
    this.planElements.forEach((plan) => {
      plan.classList.remove('is-selected')
    })
  }

  bindEvents(){
    this.planElements.forEach((plan) => {
      plan.addEventListener('click', () => {
        if(plan.classList.contains('is-selected')) {
          plan.classList.remove('is-selected')
        }
        else{
          this.removeClasses()
          plan.classList.toggle('is-selected')
        }
      })
    })
  }
}

export default Plan