AFRAME.registerComponent("cloud", {
    init: function () {
      
        // initial variable declaration
        let sceneEl = document.querySelector('a-scene');
        let size = 10;
        // min/max values for random cube position
        let minX = -50;
        let maxX = 50;
        let minY = 50;
        let maxY = 90;
        let minZ = -450;
        minZ = -50;
        let maxZ = 50;
        let spawnButton = this.el;

        let cloud = document.createElement('a-entity')
        cloud.id = 'cloud'
        sceneEl.appendChild(cloud)
        
        let i = 1
        setInterval((e) => {
            
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
            cube.setAttribute('fall-on-touch', '')

            setTimeout(() => {
                cube.setAttribute("dynamic-body", "mass: 1")
            }, 15000);

            cloud.appendChild(cube)

            i++
            size++
        }, 100 / i)
    },
})