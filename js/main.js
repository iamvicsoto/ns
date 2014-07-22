
+function ($) { 'use strict'; 

  $(document).ready(function () {
  
    $('[data-toggle-zoomThumb]').on('click', function() {
      var $targetZoomCont = $(this).attr('data-toggle-zoomThumb');
      $($targetZoomCont).attr('src', $(this).find('img').attr('src'));
    });
  
  });
               
}(window.jQuery);

