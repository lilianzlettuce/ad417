AFRAME.registerComponent('camera-listener', {
    tick: function () {
        let cameraEl = this.el.sceneEl.camera.el;
        let pos = cameraEl.getAttribute('position');
    
        console.log(pos)
    }
});