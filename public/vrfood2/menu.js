/* global AFRAME */
AFRAME.registerComponent('menu', {
  init: function () {
    var el = this.el;
    var menuBackGroundEl = document.createElement('a-entity');
    menuBackGroundEl.setAttribute('geometry', {
      primitive: 'box',
      width: 1,
      height: 1,
      depth: 0.01
      
    });
    menuBackGroundEl.setAttribute('material', {
      color: 'brown',
      transparent: 'true',
      opacity: 1,
      visible: 'true'
    });
    menuBackGroundEl.setAttribute('position', '0 0 -0.025');
    el.appendChild(menuBackGroundEl);
  }
});
