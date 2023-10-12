AFRAME.registerComponent("move-cube", {
    init: function () {
      
      // initial variable declaration
      // min/max values for random cube position
      let minX = -5;
      let maxX = 5;
      let minZ = -5;
      let maxZ = 5;
      let movementTrigger = this.el;
      
      // function that is being executed in case of the "mouseenter" event
      // other possible events are: click, mouseleave, mousedown, mouseup
      // see also: https://www.w3schools.com/jsref/dom_obj_event.asp
      movementTrigger.addEventListener("mouseenter", function (ev) {

        // find an entity by looking up their id:
        let mymover = document.querySelector('#mover');
        
        // create random x, and z position values within a given range:
        let posX = Math.random() * (maxX - minX) + minX;
        let posZ = Math.random() * (maxZ - minZ) + minZ;
        
        // access the animation component of the entity
        // and set new position values
        mymover.setAttribute('animation', {
        property: 'position',
        to: posX.toString()+' 0.5 '+posZ.toString(),
        easing: 'easeOutElastic',
        dur: '1500'
      });
      // You can add event listeners here for interaction, such as mouse events.
        
      // Append the entity to the scene, so it becomes part of the DOM (document object model).
                //sceneEl.appendChild(cube);
        
      });
    },
  });