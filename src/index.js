$(".img").wrap('<div class="alt-wrap"/>');

// Add alt text after each .img
  // 1. For all items with class .img...
  // 2. Run a function for each of them...
  // 3. To add a p element after it
  // 5. Containing that element's alt text
  $(".img").each(function() {
    $(this).after('<p class="alt">' + $(this).attr('alt') + '</p>');
  })