AFRAME.registerComponent('camera-listener', {
    init: function() {
        let cameraEntity = document.getElementById('camera-entity')
        cameraEntity.setAttribute('geometry', {
            primitive: 'box',
            height: '1',
            width: '1',
            depth: '1',
        })
    },
    tick: function () {
        let cameraEl = this.el.sceneEl.camera.el
        let pos = cameraEl.getAttribute('position')
    
        let posStr = `${pos.x} ${pos.y} ${pos.z}`

        console.log(posStr)
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
        if (document.getElementsByClassName('cloud-cube').length < 600) {
            document.getElementById('cloud').setAttribute('animation', moveAnim)
        }

        let rotateAnim = {
            property: 'rotation',
            to: '90 0 0',
            easing: 'easeOutElastic',
            //easing: 'linear',
            //easing: 'easeInOutQuad',
            delay: 0,
            //dir: 'alternate',
            dur: 3000,
            loop: false
        }
        let cameraEntity = document.getElementById('camera-entity')
        if (pos.z < -100) {
            cameraEntity.setAttribute('animation', rotateAnim)
        } else {
            //cameraEntity.setAttribute('rotation', '0 0 0')
        }
    }
});