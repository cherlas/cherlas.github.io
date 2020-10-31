'use strict';
!function() {
  const options = {
    mainJs: "../scripts/main_link.js"
  };

  const update = function() {
    const script = document.createElement("SCRIPT");
    script.async = "async";
    script.src = options.mainJs;
    document.body.appendChild(script);
  };

  const loadContent = function() {
    const domRect = document.body.getBoundingClientRect();
    if(domRect.width) {
      update();
    } else {
      window.setTimeout(loadContent, 100);
    }
  };
  try {
    document.addEventListener("DOMContentLoaded", loadContent);
  } catch(exception) {
    console.log(exception);
  }
}();

