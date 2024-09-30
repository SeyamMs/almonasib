import EmblaCarousel from "embla-carousel";
window.EmblaCarousel = EmblaCarousel;

import Alpine from "alpinejs";
import intersect from "@alpinejs/intersect";
import focus from "@alpinejs/focus";
import Tooltip from "@ryangjchandler/alpine-tooltip";
// import Lightbox from "@cloudmesh.dev/alpine-lightbox";
import "tippy.js/dist/tippy.css";

// Alpine.plugin(Lightbox);
Alpine.plugin(Tooltip);
Alpine.plugin(focus);
Alpine.plugin(intersect);
window.Alpine = Alpine;

Alpine.data("animatedCounter", (target) => ({
  current: 0,
  target: target,
  time: 400,
  start: 0,
  updateCounter() {
    const { start } = this;
    var increment = (this.target - start) / this.time;
    const handle = setInterval(() => {
      if (this.current < this.target) {
        if (increment < 0.5) {
          increment = 0.5;
        }
        this.current += increment;
      } else {
        clearInterval(handle);
        this.current = this.target;
      }
      this.current = Math.round(this.current);
    }, this.time / this.target);
  },
}));

Alpine.start();
