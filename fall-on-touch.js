AFRAME.registerComponent("fall-on-touch", {
    init: function () {
  
      // initial variable declaration
      let sceneEl = document.querySelector('a-scene')
      let ba = document.querySelector('#blue-ambience')
  
      let el = this.el
  
      el.addEventListener("click", (e) => {
        el.setAttribute("dynamic-body", "debug: true; friction: 0.1; restitution: 0.5")
      })
    }
  })