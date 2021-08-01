$(function(){
    var scrollStart = $('.btn-fix').offset().top; //ページ上部からの距離を取得
    var scrollEnd = $('.end_box').offset().top; //ページ上部からの距離を取得
    var distance = 0;
  
    $(document).scroll(function(){
      distance = $(this).scrollTop(); //スクロールした距離を取得
  
      if (scrollStart <= distance) { //スクロール距離が『.sikaku_box』の位置を超えたら
        $('.btn-fix').addClass('fixed'); //class『fixed』を追加
      } else if (scrollStart >= distance) { //スクロールがページ上部まで戻ったら
        $('.btn-fix').removeClass('fixed'); //class『fixed』を削除
      }
  
      if (scrollEnd <= distance) { //スクロール距離が『.end_box』の位置を超えたら
        $('.btn-fix').addClass('none'); //class『none』を追加
      } else{
        $('.btn-fix').removeClass('none'); //class『none』を削除
      }
    });      
  });



  