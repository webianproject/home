/*
© Ben Francis 2017

Main front end script

This file is part of Webian Home.

Webian Home is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Webian Home is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Webian Home.  If not, see <http://www.gnu.org/licenses/>.
*/
var App = {
  /**
   * Start Webian Home.
   */
  init: function() {
    this.views = [];
    this.views['floorplan'] = document.getElementById('floorplan-view');
    this.views['model'] = document.getElementById('model-view');
    this.views['settings'] = document.getElementById('settings-view');
    this.currentView = 'floorplan';
    Menu.init();
    this.menuButton = document.getElementById('menu-button');
    this.menuButton.addEventListener('click', Menu.toggle.bind(Menu));
  },

  selectView: function(view) {
    if (!this.views[view]) {
      console.error('Tried to select view that didnt exist');
      return;
    }
    this.views[this.currentView].classList.remove('selected');
    this.views[view].classList.add('selected');
    this.currentView = view;
  }
};

/**
  * Start app on page load.
  */
window.addEventListener('load', function app_onLoad() {
  window.removeEventListener('load', app_onLoad);
  App.init();
});
