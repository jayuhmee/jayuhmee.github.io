$(".logo-tab").hover(
  function () {
      $(this).animate({
          'padding-top' : '25px'
      },100, 'linear');
      
  },
  function () {
      $(this).animate({
          'padding-top' : '15px'
      },100, 'linear');
      
  }
);