AFRAME.registerComponent("fall-on-touch", {
    init: function () {
  
      // initial variable declaration
      let sceneEl = document.querySelector('a-scene')
      let ba = document.querySelector('#blue-ambience')
  
      let el = this.el
  
      el.addEventListener("click", (e) => {
        el.setAttribute("dynamic-body", "mass: 10")
      })
    }
  })