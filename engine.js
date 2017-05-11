/*
 * engine.js
 * Copyright 2017 Lucas Neves <lcneves@gmail.com>
 *
 * Engine for the Livre project based on HTML5.
 */

'use strict';


module.exports = function (options) {
  const theme = options.theme;

  function makeShell() {
    var header = theme.makeHeader();
    appendHTML(header, document.body);
  }

  return {
    makeShell: makeShell
  };

  function appendHTML(html, parentElement) {
    var template = document.createElement('template');
    template.innerHTML = html;
    parentElement.appendChild(template.content);
  }
};
