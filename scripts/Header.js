class Header {
  elements = {
    overlay: '[data-js-header-overlay]',
    burgerButton: '[data-js-burger]',
  }

  stateClasses = {
    isActive: 'is-active',
    isOpened: 'is-opened',
    isLock: 'is-lock',
  }

  constructor(){
    this.overlay = document.querySelector(this.elements.overlay)
    this.burgerButton = document.querySelector(this.elements.burgerButton)
    this.onBurgerButtonClick()
  }

  onBurgerButtonClick(){
    this.burgerButton.addEventListener('click', () => {
      this.overlay.classList.toggle(this.stateClasses.isOpened)
      this.burgerButton.classList.toggle(this.stateClasses.isActive)
      document.documentElement.classList.toggle(this.stateClasses.isLock)
    })
  }
}

export default Header