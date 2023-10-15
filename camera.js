AFRAME.registerComponent('camera-listener', {
    tick: function () {
        let cameraEl = this.el.sceneEl.camera.el
        let pos = cameraEl.getAttribute('position')
    
        let posStr = `${pos.x} ${pos.y} ${pos.z}`

        // make cloud follow camera position with delayed movement
        let moveAnim = {
            property: 'position',
            to: posStr,
            easing: 'easeOutElastic',
            //easing: 'linear',
            //easing: 'easeInOutQuad',
            delay: 0,
            //dir: 'alternate',
            dur: 3000,
            loop: false
        }
        console.log(document.getElementsByClassName('cloud-cube').length)
        if (document.getElementsByClassName('cloud-cube').length < 600) {
            document.getElementById('cloud').setAttribute('animation', moveAnim)
        }
    }
});