/**
 * Icon.
 *
 * An icon represents a web app or website .
 */

/**
 * Icon Constructor.
 *
 * @param {Object} siteObject A SiteObject representing a site.
 * @param {String} target Open in current window (_self) or a new one (_blank).
 * @param {Boolean} pinned Whether or not the site is pinned.
 */
var Icon = function(siteObject, target, pinned) {
  this.container = document.getElementById('top-sites-list');
  this.id = siteObject.id;
  this.startUrl = siteObject.startUrl;
  this.name = siteObject.name || new URL(this.startUrl).hostname;
  if (siteObject.icons && siteObject.icons[0]) {
    this.iconUrl = siteObject.icons[0].src;
  } else if (siteObject.iconUrl) {
    this.iconUrl = siteObject.iconUrl;
  }
  this.render(target, pinned);
  return this;
};

/**
 * Generate Icon View.
 */
Icon.prototype.view = function() {
  var style = 'background-image: url(' + this.iconUrl +  ');';
  return '<a href="' + this.startUrl + '" target="_blank"><li id="icon-' +
  this.id +'" class="icon" style="' + style + '"><span class="icon-name">' +
  this.name + '</span></li></a>';
};

/**
 * Render Icon.
 *
 */
Icon.prototype.render = function() {
  this.container.insertAdjacentHTML('beforeend', this.view());
  this.element = document.getElementById('icon-' + this.id);
};
