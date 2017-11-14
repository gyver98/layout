$(document).ready(function(){
  
      // set up hover panels
      // although this can be done without JavaScript, we've attached these events
      // because it causes the hover to be triggered when the element is tapped on a touch device
      $('.profile-hover').hover(function(){
        $(this).addClass('flip');
      },function(){
        $(this).removeClass('flip');
      });
  
      // set up click/tap panels
      $('.profile-click').toggle(function(){
        $(this).addClass('flip');
      },function(){
        $(this).removeClass('flip');
      });

      function filterTrack() {
        function t() {
            var t = this.getAttribute("data-filtermember");
            e.setAttribute("data-filterActive", t),
            document.querySelector("[data-filtermember].active").classList.remove("active"),
            this.classList.add("active")
        }
        var e = document.querySelector(".grid-container");
        e && document.querySelectorAll("[data-filtermember]").forEach(function(e) {
            e.addEventListener("click", t)
        })
    }
    filterTrack();
  
    });