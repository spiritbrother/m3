"use strict";

// Copyright 2015, 2016 Glen Reesor
//
// This file is part of m3 - Mobile Mind Mapper.
//
// m3 - Mobile Mind Mapper is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License, version 3, as published by
// the Free Software Foundation.
//
// m3 - Mobile Mind Mapper is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Mobile Mind Mapper.  If not, see <http://www.gnu.org/licenses/>.

/**
 * A Cloud describes the cloud around one object. This is implemented as an
 * object to make saving and loading as XML straight forward.
 *
 * @constructor
 */
function Cloud() {
   this._color = "#cccccc";
} // Cloud()

/**
 * Return this cloud representation as an array of XML strings.
 * @return {string[]}   - Array of strings containing xml
 */
Cloud.prototype.getAsXml = function getAsXml() {
   let myAttributes;
   let xml = [];

   // Generate my XML
   myAttributes = 'COLOR="' + this._color + '"';

   xml.push('<cloud ' + myAttributes + '>');

   // Close my own tag
   xml.push('</cloud>');

   // Return
   return xml;
}; // getAsXml()

/**
 * Get the current cloud color.
 *
 * @return {string} - Current cloud color.
 */
Cloud.prototype.getColor = function getColor() {
      return this._color;
}; // getColor()

/**
 * Load this cloud definition from XML.
 * @param {Element} element - the Element to be parsed
 * @return {void}
 */
Cloud.prototype.loadFromXml1_0_1 = function loadFromXml1_0_1(element) {
   let i;
   let attribute;
   let numAttributes;

   //-----------------------------------------------------------------------
   // Loop through attributes. Set the ones I know about and warn about the
   // ones I don't.
   //-----------------------------------------------------------------------
   numAttributes = element.attributes.length;

   for (i=0; i<numAttributes; i++) {
      attribute = element.attributes[i];

      if (attribute.name === "COLOR") {
         this.setColor(attribute.value);

      } else {
         m3App.getDiagnostics().warn(Diagnostics.TASK_IMPORT_XML, "Unexpected <cloud> attribute: " + attribute.name);
      }
   }

   m3App.getDiagnostics().log(Diagnostics.TASK_IMPORT_XML, "Created cloud.");
}; // loadFromXml1_0_1()

/**
 * Set the current cloud color.
 *
 * @param {string} color - Current cloud color.
 * @return {void}
 */
Cloud.prototype.setColor = function setColor(color) {
      this._color = color;
}; // getColor()
