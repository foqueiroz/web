/* global AFRAME */
AFRAME.registerComponent('event-manager', {
  
  

  init: function () {
    this.bindMethods();

    this.boxGeometryEl = document.querySelector('#beefLeft');
    this.sphereGeometryEl = document.querySelector('#cheeseLeft');
    this.torusGeometryEl = document.querySelector('#tofuLeft');
  

    this.boxButtonEl = document.querySelector('#beefLeftButton');
    this.sphereButtonEl = document.querySelector('#cheeseLeftButton');
    this.torusButtonEl = document.querySelector('#tofuLeftButton');

    
    
    this.rightboxGeometryEl = document.querySelector('#beefRight');
    this.rightsphereGeometryEl = document.querySelector('#cheeseRight');
    this.righttorusGeometryEl = document.querySelector('#tofuRight');


    this.rightboxButtonEl = document.querySelector('#beefRightButton');
    this.rightsphereButtonEl = document.querySelector('#cheeseRightButton');
    this.righttorusButtonEl = document.querySelector('#tofuRightButton');
  
	   
	 this.darkModeButtonEl = document.querySelector('#darkModeButton');
    
    
    this.camEl = document.querySelector('#cam');
    this.menuEl = document.querySelector('#menu');
	  
	//this.camEl.setAttribute('look-controls', {enabled: 'true'});
	  
	  
	
	  
	  if(AFRAME.utils.device.checkHeadsetConnected ()){
		  
	  } else {
		  this.camEl.components['look-controls'].pitchObject.rotation.x -= 0.6;
	  }
    
    //this.menuEl.object3D.position.y = this.camEl.object3D.position.y - 0.4;
    
    //alert (this.menuEl.object3D.position.y);
    
    //this.darkModeButtonEl = document.querySelector('#darkModeButton');
    


    this.buttonToGeometry = {
      'beefLeftButton': this.boxGeometryEl,
      'cheeseLeftButton': this.sphereGeometryEl,
		'tofuLeftButton': this.torusGeometryEl,
		'beefRightButton': this.rightboxGeometryEl,
      'cheeseRightButton': this.rightsphereGeometryEl,
		'tofuRightButton': this.righttorusGeometryEl,
      	'darkModeButton': this.darkModeButtonEl,
    };

    this.boxButtonEl.addEventListener('click', this.onClick);
    this.sphereButtonEl.addEventListener('click', this.onClick);
    this.torusButtonEl.addEventListener('click', this.onClick);
    
    this.darkModeButtonEl.addEventListener('click', this.onClick);
    //this.boxButtonEl.addState('pressed');
    
    this.rightboxButtonEl.addEventListener('click', this.onClick);
    this.rightsphereButtonEl.addEventListener('click', this.onClick);
    this.righttorusButtonEl.addEventListener('click', this.onClick);
   
    
    //this.rightsphereButtonEl.addState('pressed');
	  
	    	
	  
	 
  },
  


  bindMethods: function () {
    this.onClick = this.onClick.bind(this);
  },

  onClick: function (evt) {
	  
	   //alert(this.camEl.object3D.rotation.x);
	  
	  
    var targetEl = evt.target;
    if (targetEl === this.boxButtonEl ||
        targetEl === this.sphereButtonEl ||
       
        targetEl === this.torusButtonEl) {
      this.boxButtonEl.removeState('pressed');
      this.sphereButtonEl.removeState('pressed');
      this.torusButtonEl.removeState('pressed');
     
      this.boxGeometryEl.object3D.visible = false;
      this.sphereGeometryEl.object3D.visible = false;
      this.torusGeometryEl.object3D.visible = false;

      this.buttonToGeometry[targetEl.id].object3D.visible = true;
    }
  
    
       if (targetEl === this.rightboxButtonEl ||
        targetEl === this.rightsphereButtonEl ||
 
        targetEl === this.righttorusButtonEl) {
      this.rightboxButtonEl.removeState('pressed');
      this.rightsphereButtonEl.removeState('pressed');
      this.righttorusButtonEl.removeState('pressed');

      this.rightboxGeometryEl.object3D.visible = false;
      this.rightsphereGeometryEl.object3D.visible = false;
      this.righttorusGeometryEl.object3D.visible = false;

      this.buttonToGeometry[targetEl.id].object3D.visible = true;
		   
		   
	   //TEST DETAIL
	  // this.landscape = document.querySelector('#landscapes');
    //this.detail1 = document.querySelector('#detail1');
    // this.landscape.setAttribute('visible', false);
      //  this.detail1.setAttribute('visible', true);
	
		   
    }
  
    
    
    
    
    
    if (targetEl === this.darkModeButtonEl) {
		
		alert("clicked");
		
		
		
	/*	
	  var men = document.getElementById('menu');
	 
	  var cam = document.getElementById('cam');
	  
	   //alert(cam.getAttribute('position').y);
	  
	  var newmenuy = cam.getAttribute('position').y - 0.3;
	  
	  //alert(newmenuy);
	  
	 // men.setAttribute('position','0 0.7 -0.2');
	  
	  newmenupos = '0 ' + String(newmenuy) + " -0.2";
	  
	   men.setAttribute('position', newmenupos);
	   
	   */
		
      if (this.el.sceneEl.is('starry')) {
        targetEl.setAttribute('button', 'label', 'Dark Mode');
        this.el.sceneEl.setAttribute('environment', {preset: 'default'});
        this.el.sceneEl.removeState('starry');
      } else {
        targetEl.setAttribute('button', 'label', 'Light Mode');
        this.el.sceneEl.setAttribute('environment', {preset: 'starry'});
        this.el.sceneEl.addState('starry');
      }
    } else {
    targetEl.addState('pressed');
    }
  }
});
