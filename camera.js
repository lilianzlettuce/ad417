AFRAME.registerComponent('camera-listener', {
    init: function() {
        let cameraEntity = document.getElementById('camera-entity')
        cameraEntity.setAttribute('geometry', {
            primitive: 'box',
            height: '10',
            width: '10',
            depth: '10',
        })
        cameraEntity.setAttribute('material', {
            color: '#ed1b24'
        })
    },
    tick: function () {
        let cameraEl = this.el.sceneEl.camera.el
        let pos = cameraEl.getAttribute('position')
    
        let posStr = `${pos.x} ${pos.y} ${pos.z}`

        console.log(posStr)

        // update camera entity pos to be same as camera pos
        let cameraEntity = document.getElementById('camera-entity')
        cameraEntity.setAttribute('position', posStr)
        console.log('entity: ' + cameraEntity.getAttribute('position').x)

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
        
        if (pos.z < -100) {
            cameraEntity.setAttribute('animation', rotateAnim)
            
            let newPosStr = `${pos.x} ${pos.y} 0`
            cameraEl.setAttribute('position', newPosStr)
        } else {
            //cameraEntity.setAttribute('rotation', '0 0 0')
        }
    }
});