/*
© Ben Francis 2017

Main Menu

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
var Menu = {
  /**
   * Initialise menu.
   */
  init: function() {
    this.element = document.getElementById('main-menu');
    this.hidden = true;
    this.element.addEventListener('click', this.handleClick.bind(this));
    this.items = [];
    this.items['floorplan'] = document.getElementById('floorplan-menu-item');
    this.items['model'] = document.getElementById('model-menu-item');
    this.items['settings'] = document.getElementById('settings-menu-item');
    this.currentItem = 'floorplan';
  },

  /**
   * Show menu.
   */
  show: function() {
    this.element.classList.remove('hidden');
    this.hidden = false;
  },

  /**
   * Hide menu.
   */
  hide: function() {
    this.element.classList.add('hidden');
    this.hidden = true;
  },

  /**
   * Toggle menu visibility
   */
  toggle: function() {
    if(this.hidden) {
      this.show();
    } else {
      this.hide();
    }
  },

  handleClick: function(e) {
    if(e.target.tagName != 'A') {
      return;
    }
    e.preventDefault();
    this.hide();
    this.selectItem(e.target.dataset.view);
    App.selectView(e.target.dataset.view);
  },

  selectItem: function(item) {
    if (!this.items[item]) {
      console.error('Tried to select a menu item that didnt exist');
      return;
    }
    this.items[this.currentItem].classList.remove('selected');
    this.items[item].classList.add('selected');
    this.currentItem = item;
  }
};
