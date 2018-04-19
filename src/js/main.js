(function($) {

  $(document).ready(function() {
    var timeOut;

    function ieVersion() {
            var ua = window.navigator.userAgent;
            if (ua.indexOf("Trident/7.0") > 0)
                return 11;
            else if (ua.indexOf("Trident/6.0") > 0)
                return 10;
            else if (ua.indexOf("Trident/5.0") > 0)
                return 9;
            else
                return 0;  // not IE9, 10 or 11
        }

        if (ieVersion() !== 0) {
            $('html').addClass('ie'+ieVersion());
        }

    function scrollToTop() {
        if (document.body.scrollTop!=0 || document.documentElement.scrollTop!=0){
            window.scrollBy(0,-50);
            timeOut = setTimeout(function() {
            scrollToTop();
            },10);
        }
        else clearTimeout(timeOut);
    }

    $('.GlobalFooter-backToTop').click(function(evt) {
      evt.preventDefault();

      scrollToTop();

      return false;
    })
  });
})(jQuery);