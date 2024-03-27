$(document).ready(function(){
    document.addEventListener('DOMContentLoaded', function() {
        var galleryItems = document.querySelectorAll('.gallery-item img');
        var modalImage = document.getElementById('expandedImage');
        galleryItems.forEach(function(item) {
          item.addEventListener('click', function() {
            modalImage.src = this.getAttribute('data-image-src');
          });
        });
      });
  });