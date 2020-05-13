export default function circleDeployer_ts () {
  console.log("cooled")

  //hour の　item を .circle-box に出力
  // for( i=0; i<12; i++){
  //   $('.circle-box').append('<div class="item"></dv>');
  // }

  //itemの親要素の半径を計算
  // var r = $('.circle-box').width()/2;
  const circleBox = <HTMLInputElement>document.getElementById('circle-box')
  const radius: number = parseFloat(circleBox.style.width) / 2.0;

  const circleElements: HTMLCollectionOf<Element> = document.getElementsByClassName('circle-element')
  //item要素数から角度を計算
  // var angle = 360/$('.item').length;
  var angle: number = 360.0 / circleElements.length;

  //item要素の幅,高さの2分の1を取得
  // var l = $('.item').width()/2;
  // var h = $('.item').height()/2;
  //TODO
  const l: number = 360.0 / circleElements.length / 2;
  const h: number = 360.0 / circleElements.length / 2;
  //TODO

  //指定
  /*
  $(".item").each(function(i, elem) {

    var deg = angle * i;
    //console.log(deg);

    //x,y座標の取得
    var x = Math.cos(deg*Math.PI/180)*r+r;
    var y = Math.sin(deg*Math.PI/180)*r+r;

    //円周上を中心に配置されるよう位置を指定
    $(".item").eq(i).css("left",x-l);
    $(".item").eq(i).css("top",y-h);

  });
  */
  for (let i = 0; i < circleElements.length; i++) {
    let deg: number = angle * i
    let x: number = Math.cos(deg * Math.PI / 180) * radius + radius;
    let y: number = Math.sin(deg * Math.PI / 180) * radius + radius;
    let chiledElement = <HTMLElement>circleElements.item(i);
    chiledElement.style.left = (x - l).toString();
    chiledElement.style.height = (x - h).toString();
  }


  //hour １が先頭に来るようにする
  /*
  $(".item").each(function(i) {
    $(this).text(i+3);

    var a = $(this).text();

    if( a > 12){
      $(this).text(a - 12);
    }
  });
  */

}

