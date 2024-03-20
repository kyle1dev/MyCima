$(document).ready(function() {
    $(".watch-button").click(function() {
        var movieUrl = $(this).data("url");
        window.location.href = movieUrl;
    });
});

$(document).ready(function() {
    var $cursor = $('.cursor');
    var $cursorinner = $('.cursor2');
    var $a = $('a');
  
    $(document).on('mousemove', function(e) {
      var x = e.clientX;
      var y = e.clientY;
      $cursor.css('transform', 'translate3d(calc(' + e.clientX + 'px - 50%), calc(' + e.clientY + 'px - 50%), 0)');
    });
  
    $(document).on('mousemove', function(e) {
      var x = e.clientX;
      var y = e.clientY;
      $cursorinner.css({
        left: x + 'px',
        top: y + 'px'
      });
    });
  
    $(document).on('mousedown', function() {
      $cursor.addClass('click');
      $cursorinner.addClass('cursorinnerhover');
    });
  
    $(document).on('mouseup', function() {
      $cursor.removeClass('click');
      $cursorinner.removeClass('cursorinnerhover');
    });
  
    $a.on('mouseover', function() {
      $cursor.addClass('hover');
    });
  
    $a.on('mouseleave', function() {
      $cursor.removeClass('hover');
    });
});

$(document).ready(function() {
  $('.btn-like').click(function() {
      var $btn = $(this);
      if (!$btn.hasClass('liked')) {
          $btn.addClass('liked').attr('disabled', 'disabled');
          Swal.fire({
              icon: 'success',
              title: 'تم التصويت بإعجاب!',
              confirmButtonColor: '#3085d6',
             confirmButtonText: 'موافق'
          });
      }
  });
});

function showNotification(message) {
    var notification = $('<div class="notification"><i class="fas fa-check"></i>' + message + '</div>');
    $('body').append(notification);
    setTimeout(function() {
        notification.fadeOut().remove();
    }, 2000);
}