/* global AFRAME */
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
