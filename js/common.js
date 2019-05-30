$(document).ready(function() {

  /* ----- gnav resize ----- */

  var gnavMoreBtnOpen = false;
  var gnavMoreBtnHtml1 = "<li id='gnav-more-btn'><a href='javascript:void(0);'>";
  var gnavMoreBtnHtml2 = "</a></li>";
  var gnavMoreText1 = "もっと見る";
  var gnavMoreText2 = "閉じる";

  $("#gnav-archive").after(gnavMoreBtnHtml1 + gnavMoreText1 + gnavMoreBtnHtml2);
  $("#gnav-more-btn").hide();

  function winBig(){
    $("#gnav-more-btn").hide();
    $("#gnav-more").show();
  }

  function winSmall(){
    $("#gnav-more-btn").show();
    $("#gnav-more-btn").addClass("gnav-more-btn-close");
    $("#gnav-more-btn").removeClass("gnav-more-btn-open");
    $("#gnav-more").hide();

    $("#gnav-more-btn a").text(gnavMoreText1);
    gnavMoreBtnOpen = false;

    if( $(window).width() < 440 ){
      $("#gnav-about a").css('border','0');
      $("#gnav-more").addClass("gnav-more-small");
    } else {
      $("#gnav-more").removeClass("gnav-more-small");
    }

  }

  var winStart = $(window).width();
  var p = 767;

  if(winStart > p){
    winBig();
  } else {
    winSmall();
  }

  $(window).resize(function(){
    var win = $(window).width();

    if(win > p){
      winBig();
    } else {
      winSmall();
    }

  });

  $("#gnav-more-btn a").click(function () {
    $("#gnav-more").slideToggle();
      if(gnavMoreBtnOpen === false){
        $("#gnav-more-btn a").text(gnavMoreText2);
        $("#gnav-more-btn").addClass("gnav-more-btn-open");
        $("#gnav-more-btn").removeClass("gnav-more-btn-close");
        gnavMoreBtnOpen = true;
      } else {
        $("#gnav-more-btn a").text(gnavMoreText1);
        $("#gnav-more-btn").addClass("gnav-more-btn-close");
        $("#gnav-more-btn").removeClass("gnav-more-btn-open");
        gnavMoreBtnOpen = false;
      };
  });


  /* ----- hover ----- */

  if( $(window).width() > 767 ){
    $(".hvr").hover(
        function(){
          $(this).stop(true, true).fadeTo(300,0.5);
        },
      function(){
      $(this).stop(true, true).fadeTo(300,1.0);
    });
  }


  /* ----- pagetop ----- */

  var pagetop = $('#pagetop');

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        pagetop.fadeIn();
      } else {
        pagetop.fadeOut();
    }
  });

  pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 100);
    return false;
  });

});


/* ----- items fade ----- */

function itemsFade(elementName){
  $(elementName).css({
    opacity: 0
  }).each(function (i) {
    $(this).delay(500 * i).animate({
      opacity: 1
    }, 1500);
  });
}

/*eof*/
