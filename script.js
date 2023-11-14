"use strict";

const arrowArea = document.querySelector( ".arrow-area" );
const tooltip = document.querySelector( ".tooltip" );
const tooltipArrowArea = document.querySelector( ".tooltip-arrow-area" );

arrowArea.addEventListener( "click", function() {
  tooltip.classList.toggle( "hide-tooltip" );
  this.classList.toggle( "bg-dark" );
  this.querySelector( ".arrow-icon" ).classList.toggle( "arrow-filter-white" );
} );

tooltipArrowArea.addEventListener( "click", function() {
  tooltip.classList.add( "hide-tooltip" );
  arrowArea.classList.toggle( "bg-dark" );
  arrowArea.querySelector( ".arrow-icon" ).classList.toggle( "arrow-filter-white" );
} );