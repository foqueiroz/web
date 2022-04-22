/* global AFRAME */

AFRAME.registerComponent('log', {
  schema: {type: 'string'},

  init: function () {
	   var men = document.getElementById('menu');
	 
	  var cam = document.getElementById('cam');
	  
	   //alert(cam.getAttribute('position').y);
	  
	  var newmenuy = cam.getAttribute('position').y - 0.9;
	  
	  alert(newmenuy);
	  
	 // men.setAttribute('position','0 0.7 -0.2');
	  
	  newmenupos = '0 ' + String(newmenuy) + " -0.2";
	  
	   men.setAttribute('position', newmenupos);
	 
   // var stringToLog = this.data;
    //alert(stringToLog);
  }
});

AFRAME.registerComponent('menu', {
  init: function () {
    var el = this.el;
    var menuBackGroundEl = document.createElement('a-entity');
    menuBackGroundEl.setAttribute('geometry', {
      primitive: 'box',
      width: 10,
      height: 10,
      depth: 0.01
      
    });
    menuBackGroundEl.setAttribute('material', {
      color: '#0d330d',
      transparent: 'true',
      opacity: 1,
      visible: 'true'
    });
    menuBackGroundEl.setAttribute('position', '0 0 -0.025');
    el.appendChild(menuBackGroundEl);
  }
});
