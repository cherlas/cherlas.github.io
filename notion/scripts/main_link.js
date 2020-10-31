'use strict';
!function(w, d, f) {
  const self = {
    win: w,
    doc: d,
    frame: f,
    imageProperties: {},
    functions: function() {
      return {
        addClickListener: function(el, type, fun) {
          el.addEventListener(type, fun, false);
        },
        getEl: function(event) {
          return event.target ? 3 === event.target.nodeType ? event.target.parentNode : event.target : event.srcElement;
        },
        initImageProperties: function() {
          self.imageProperties.href = self.frame.getAttribute('image-href');
          self.imageProperties.src = self.frame.getAttribute('image-url');
        },
        addStyles: function() {
          let link = document.createElement("LINK");
          link.setAttribute("rel", "stylesheet");
          link.setAttribute("href", "../css/embed.css");
          document.body.appendChild(link);
        },
        constructContent: function() {
          let image = self.doc.createElement("IMG");
          image.className = "image_link";
          image.src=self.imageProperties.src;
          document.body.appendChild(image);
        },
        handleClick: function(i) {
          i = i || self.win.event;
          let node = self.functions.getEl(i);
          if(node) {
            self.win.open(self.imageProperties.href, "_top");
          }
        },
        buildImageLinkContent: function() {
          let agent = self.win.navigator.userAgent;
          let b = null !== agent.match(/MSIE/) && agent.match(/MSIE [5-8]/);
          if(!b) {
            self.functions.initImageProperties();
            self.functions.addStyles();
            self.functions.constructContent();
            self.functions.addClickListener(self.doc.body, "click", self.functions.handleClick);
          }
        },
      };
    }(),
  };
  self.functions.buildImageLinkContent();
}(window, document, window.parent.frames['content']);
