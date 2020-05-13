<template>
  <v-container>
    <v-row class="blue lighten-4" style="height: 800px;" justify="center" align-content="center">
      <!--      <v-col class="green">-->
      <div style="height: 400px; width: 400px;" id="circle-box">
        <!--        <v-btn fab color="primary" class="circle-element" :style="circleElementStyles[i-1]" v-for="i in numCircleElements" ref="circleElements">{{i}}</v-btn>-->
        <v-btn fab color="primary" style="width: 40px;height: 40px;" class="circle-element"
               v-for="i in numCircleElements" ref="circleElements">{{i}}
        </v-btn>
      </div>
      <!--      </v-col>-->
    </v-row>

    <v-row justify="center" align-content="center">
    <span>
      <v-icon color="red">clockwise-arrows</v-icon>
      <v-icon v-if="clockwise" color="red">mdi-clockwise-arrows</v-icon>
      <v-icon v-else color="red">mdi-counterclockwise-arrows</v-icon>
    </span>
      <v-btn rounded @click="invertRotation" color="primary" class="button__rotation">
        Rotation
        {{clockwise}}
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>

  import circleDeployer from "../static/js/circleDeployer";

  export default {
    name: "sender",
    data() {
      return {
        numCircleElements: 36,
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
      console.log("circleElements")
      console.log(circleElements)
      const circleBox = document.getElementById('circle-box')
      const radius = parseFloat(circleBox.style.width) / 2.0;
      console.log("radius")
      console.log(radius)

      // const circleElements = document.getElementsByClassName('circle-element')
      //item要素数から角度を計算
      var angle = 360.0 / circleElements.length;
      console.log("angle")
      console.log(angle)

      console.log("circleElements[0].$el.style.width")
      console.log(circleElements[0].$el.style.width)
      console.log("parseFloat(circleElements[0].$el.style.width)")
      console.log(parseFloat(circleElements[0].$el.style.width))

      //item要素の幅,高さの2分の1を取得
      const l = parseFloat(circleElements[0].$el.style.width) / 2.0;
      const h = parseFloat(circleElements[0].$el.style.height) / 2.0;
      console.log("l")
      console.log(l)

      //指定
      for (let i = 0; i < circleElements.length; i++) {
        let deg = angle * i
        let x = Math.cos(deg * Math.PI / 180) * radius + radius;
        let y = Math.sin(deg * Math.PI / 180) * radius + radius;
        let circleElement = circleElements[i];
        console.log("circleElement.$el.style.left")
        console.log(circleElement.$el.style.left)
        circleElement.$el.style.left = `${x - l}px`;
        console.log("circleElement.style.left")
        console.log(circleElement.$el.style.left)
        circleElement.$el.style.top = `${y - h}px`;
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
