AFRAME.registerComponent('camera-listener', {
    tick: function () {
        let cameraEl = this.el.sceneEl.camera.el
        let pos = cameraEl.getAttribute('position')
    
        console.log(pos)
        let posStr = `${pos.x} ${pos.y} ${pos.z}`

        //document.getElementById('cloud').setAttribute('position', posStr)
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
        document.getElementById('cloud').setAttribute('animation', moveAnim)
    }
});