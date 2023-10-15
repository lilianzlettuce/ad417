AFRAME.registerComponent("switch-1", {
  init: function () {

    // initial variable declaration
    let sceneEl = document.querySelector('a-scene')
    let ba = document.querySelector('#blue-ambience')

    let el = this.el

    el.addEventListener("click", (e) => {
      if (ba.getAttribute('intensity') == 0) {
        sceneEl.setAttribute('fog', 'type: exponential; color: white; density: .01;')
        ba.setAttribute('intensity', '2')
        //document.querySelector('#cloud').setAttribute('scale', '0 0 0')
      } else {
        sceneEl.setAttribute('fog', 'type: exponential; color: gray; density: .01;')
        ba.setAttribute('intensity', '0')
        document.querySelector('#cloud').setAttribute('scale', '1 1 1')
      }
    })
  }
})