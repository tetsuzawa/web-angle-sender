export default function circleDeployer_ts() {
  console.log("cooled")
  const circleBox = document.getElementById('circle-box')
  const radius = parseFloat(circleBox.style.width) / 2.0;

  const circleElements = document.getElementsByClassName('circle-element')
  //item要素数から角度を計算
  var angle = 360.0 / circleElements.length;

  //item要素の幅,高さの2分の1を取得
  const l = 360.0 / circleElements.length / 2;
  const h = 360.0 / circleElements.length / 2;

  //指定
  for (let i = 0; i < circleElements.length; i++) {
    let deg = angle * i
    let x = Math.cos(deg * Math.PI / 180) * radius + radius;
    let y = Math.sin(deg * Math.PI / 180) * radius + radius;
    let chiledElement = circleElements.item(i);
    chiledElement.style.left = (x - l).toString();
    chiledElement.style.height = (x - h).toString();
  }
}

