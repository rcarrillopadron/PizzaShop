/**
 * Created by roberto.carrillo on 5/25/2015.
 */
(function() {
  "use strict";

  var x = 0;

  /**
   * Displays text to output
   * @param {string} validate
   * @param {number} size
   * @param {bool} crust
   * @param {string} toppings
   */
  function displayTextToOutput(validate, size, crust, toppings) {
    $("#output").text("Hello world from jQuery in WebStorm2!", validate, size, crust, toppings);
  }

  $(document).ready(function () {
    displayTextToOutput("text", 4, true, "top");
  });
})();