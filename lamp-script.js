AFRAME.registerComponent("add-lamps", {
    init: function () {
        const scene = document.querySelector('a-scene')
        const numlamps = 8
        let dist = 100
        dist = 50
    
        let lampHolder = document.createElement('a-entity')
        scene.appendChild(lampHolder)
        
        for (let i = 0; i < numlamps; i++) {
            // lamp object
            let lamp = document.createElement('a-entity')
            lamp.setAttribute('position', `0 0 ${-15 - dist * i}`)
            lamp.setAttribute('shadow', 'cast: true; receive: true;')
            //lamp.setAttribute('dynamic-body', '')

            let lampOffset = 3
            let lampHead = document.createElement('a-sphere')
            lampHead.setAttribute('position', `${lampOffset} 20 0`)
            lampHead.setAttribute('radius', '1.25')
            lampHead.setAttribute('material', 'color: white;')
            //lampHead.setAttribute('dynamic-body', '')

            let lampPole = document.createElement('a-cylinder')
            lampPole.setAttribute('position', `${1.5 + lampOffset} 0 0`)
            lampPole.setAttribute('radius', '.5')
            lampPole.setAttribute('scale', '1 40 1')
            lampPole.setAttribute('material', 'color: gray;')
            //lampPole.setAttribute('dynamic-body', '')

            lamp.appendChild(lampHead)
            lamp.appendChild(lampPole)

            // lamp lights
            let spotLight = document.createElement('a-light')
            spotLight.setAttribute('position', `0 2 0`)
            spotLight.setAttribute('intensity', '3')
            spotLight.setAttribute('rotation', '-90 0 45')
            spotLight.setAttribute('light', 'type:spot; angle:50; color:#e3bc10; decay: .8; distance: 70; penumbra: .5; castShadow:true;')

            /*let spotLight2 = document.createElement('a-light')
            spotLight2.setAttribute('position', `0 2 0`)
            spotLight2.setAttribute('intensity', '2')
            spotLight2.setAttribute('rotation', '-90 0 0')
            spotLight2.setAttribute('light', 'type:spot; angle:30; color:yellow; castShadow:false;')*/
            
            let faceLight = document.createElement('a-light')
            faceLight.setAttribute('position', `${lampOffset} 16 0`)
            faceLight.setAttribute('intensity', '2')
            faceLight.setAttribute('rotation', '90 0 0')
            faceLight.setAttribute('light', 'type:spot; angle:30; color:#ffff7d; decay: .8; distance: 50; penumbra: .5; castShadow:true;')

            /*let pointLight = document.createElement('a-light')
            pointLight.setAttribute('position', `0 12 0`)
            pointLight.setAttribute('intensity', '0')
            pointLight.setAttribute('light', 'type:point; color:white; castShadow:false;')*/

            lamp.appendChild(spotLight)
            //lamp.appendChild(spotLight2)
            lamp.appendChild(faceLight)
            //lamp.appendChild(pointLight)
    
            let dur = 2000
            let delay = i * 300
            let lightAnim = {
                property: 'intensity',
                to: 3,
                //easing: 'easeOutElastic',
                //easing: 'linear',
                easing: 'easeInOutQuad',
                delay: delay,
                dir: 'alternate',
                dur: dur,
                loop: false
            }
            faceLight.setAttribute('animation', lightAnim)
            spotLight.setAttribute('animation', lightAnim)
    
            lampHolder.appendChild(lamp)
      }
    }
  })