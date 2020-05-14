<template>
  <v-app id="angle-sender">
    <v-content>
      <v-container class="grey lighten-5" fluid>
        <v-responsive :aspect-ratio="1">
          <v-row class="blue lighten-4" style="height: 100%;" justify="center" align-content="center">
            <v-col class="green lighten-4" style="height:100%">
              <div style="height: 100%; width: 100%" id="circle-box" ref="circleBox">
                <v-btn fab x-small icon color="primary" style="width: 10%;height: 10%;" class="circle-element"
                       v-for="i in 36" ref="circleElements">{{i-1}}
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-responsive>
        <v-row class="blue lighten-4" style="padding: 5%;" justify="center" align-content="center">
          <v-col class="green lighten-4" style="height:100%">
            <v-btn rounded @click="invertRotation" color="primary" class="button__rotation">
            <span>
              <v-icon v-if="clockwise">mdi-autorenew</v-icon>
              <v-icon v-else>mdi-sync</v-icon>
            </span>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

  import circleDeployer from "../static/js/circleDeployer";

  export default {
    name: "sender",
    data() {
      return {
        clockwise: true,
        // circleElementStyles: [
        //   "left: 30px",
        //   "width: 140px",
        // ]
      }
    },
    methods: {
      // window: onload = () => circleDeployer(),
      invertRotation: function () {
        this.clockwise = !this.clockwise
      }
    },
    mounted() {
      // circleDeployer()
      const circleElements = this.$refs.circleElements
      console.log(circleElements)
      const circleBox = this.$refs.circleBox
      const radius = parseFloat(circleBox.offsetHeight) / 2.0;
      const offsetLeft = parseFloat(circleBox.offsetWidth) / 2.0;
      // const radius = 100;
      console.log("radius")
      console.log(radius)

      //item要素数から角度を計算
      const angle = 360.0 / circleElements.length;

      //item要素の幅,高さの2分の1を取得
      const l = parseFloat(circleElements[0].$el.offsetWidth) / 2.0;
      const h = parseFloat(circleElements[0].$el.offsetWidth) / 2.0;

      //指定
      for (let i = 0; i < circleElements.length; i++) {
        let deg = angle * i
        let x = Math.cos(deg * Math.PI / 180 - (Math.PI / 2)) * radius + offsetLeft;
        let y = Math.sin(deg * Math.PI / 180 - (Math.PI / 2)) * radius + radius;
        let circleElement = circleElements[i];
        circleElement.$el.style.left = `${x - l}px`;
        circleElement.$el.style.top = `${y - h}px`;

        // スクロール関連メソッド
        function scroll_control(event) {
          event.preventDefault();
        }
        (function no_scroll(){
          // PCでのスクロール禁止
          document.addEventListener("mousewheel", scroll_control, {passive: false});
          // スマホでのタッチ操作でのスクロール禁止
          document.addEventListener("touchmove", scroll_control, {passive: false});
        })();
      }
    }
  }
</script>

<style scoped lang="scss">
  #circle-box {
    position: relative;

    .circle-element {
      position: absolute;
    }
  }
</style>
