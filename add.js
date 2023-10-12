AFRAME.registerComponent("add-cube", {
    init: function () {
      
      // initial variable declaration
      let sceneEl = document.querySelector('a-scene');
      let size = 10;
      // min/max values for random cube position
      let minX = -5;
      let maxX = 5;
      let minY = 0.5;
      let maxY = 5;
      let minZ = -5;
      let maxZ = 5;
      let spawnButton = this.el;
      console.log('test')
      
      // function that is being executed in case of the "click" event
      spawnButton.addEventListener("click", function (ev) {
        
        // create a new a-entity
        let cube = document.createElement('a-entity');
        // set attributes of the new a-entity, like geometry, size, position and color
        cube.setAttribute('geometry', {
                      primitive: 'box',
                      height: '0.1',
                      width: '0.1',
                      depth: '0.1',
                  });
        cube.setAttribute('material', {
          color: '#ed1b24'
        });
        
        // create random x, y, z position values within range:
        let posX = Math.random() * (maxX - minX) + minX;
        let posY = Math.random() * (maxY - minY) + minY;
        let posZ = Math.random() * (maxZ - minZ) + minZ;
        
        cube.setAttribute('position', posX.toString()+ ' '+posY.toString()+' '+posZ.toString());
        
        cube.setAttribute('animation', {
        property: 'scale',
        to: size.toString()+ ' '+size.toString()+' '+size.toString(),
        easing: 'easeOutElastic',
        dur: '500'
      });
      // You can add event listeners here for interaction, such as mouse events.
        
      // Append the entity to the scene, so it becomes part of the DOM (document object model).
                sceneEl.appendChild(cube);

        
      });
    },
  });