<!--
 * @Author: 袁十一
 * @Date: 2023-04-12 16:34:50
 * @LastEditTime: 2023-05-04 10:39:53
 * @LastEditors: Huccct
 * @Description: 联系我们页面
 * @FilePath: \jzbd-fe\src\views\contact\contact.vue
 * 初心不变，意志坚定
-->
<template>
  <div class="contract">
    <div class="contract-header">
      <div class="sliderbox">
        <img src="http://114.116.21.170:9000/photo/contract/background.png" alt="" />
      </div>
      <div class="text">
        <div class="c-title">CONTACT US</div>
        <div class="l-title">联系我们</div>
      </div>
    </div>
    <div class="container">
      <div class="contract-top">
        <p>01&nbsp;<span></span>&nbsp;<span> Contact us</span></p>
        <p>联系我们</p>
      </div>
      <div class="contract-logos clearfix">
        <div class="logo first clearfix">
          <img src="http://114.116.21.170:9000/photo/contract/location.png" alt="" />
          <p class="p1">园区位置</p>
          <p class="p2">{{ contractText.address }}</p>
        </div>
        <div class="logo">
          <img src="http://114.116.21.170:9000/photo/contract/person.png" alt="" />
          <p class="p1">联系人</p>
          <p class="p2">{{ contractText.person }}</p>
        </div>
        <div class="logo">
          <img src="http://114.116.21.170:9000/photo/contract/phone.png" alt="" />
          <p class="p1">联系方式</p>
          <p class="p2">{{ contractText.phone }}</p>
        </div>
        <div class="logo">
          <img src="http://114.116.21.170:9000/photo/contract/email.png" alt="" />
          <p class="p1">邮箱</p>
          <p class="p2">{{ contractText.email }}</p>
        </div>
      </div>
      <div class="contract-map">
        <img
          src="https://restapi.amap.com/v3/staticmap?location=120.095191,36.165253&zoom=12&size=1280%2A484&markers=-1,http://114.116.21.170:9000/photo/contract/location-2.png,0:120.095191,36.165253&key=900b95537e99785a8b0d415ee9160fd1"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      contractText: {
        address: '山东省青岛市胶州上合示范区闽江路60号',
        person: '黄晓娜',
        phone: '0532-85279551',
        email: 'shqycxcyy@163.com'
      }
    };
  }
};
</script>

<style lang="scss" scoped>
//清除浮动
.clearfix::after {
  content: '';
  clear: both;
  display: block;
}
/*
主内容区容器开始
*/
.container {
  width: 1280px;
  margin: 0 320px;
  margin-top: 101px;
}
.contract-top {
  p:nth-child(1) {
    color: #007dc0;
    font-size: 30px;
    font-family: DIN-Bold-Regular;
    text-align: center;
    line-height: 30px;
    display: flex;
    span:nth-child(1) {
      margin-left: 14px;
      margin-top: 15px;
      width: 80px;
      border-top: 2px solid #cdcdcd;
      margin-right: 14px;
    }
    span:nth-child(2) {
      display: inline;
      font-size: 30px;
      color: #cdcdcd;
      font-weight: Regular;
      font-family: DIN-Bold-Regular;
    }
  }
  p {
    margin-top: 34px;
    font-weight: 700;
    font-family: Microsoft YaHei-Bold;
    color: #333333;
    font-size: 36px;
  }
}
.contract-logos {
  margin-top: 141px;
}
.contract-logos .logo {
  text-align: center;
}
.contract-logos .first {
  margin-left: 64px;
}
.contract-logos .logo {
  font-family: Microsoft YaHei-Bold, Microsoft YaHei;
  font-weight: bold;
  margin-right: 120px;
  float: left;
}
.contract-logos .logo:nth-child(4) {
  margin-right: 0;
}
.contract-logos .logo .p1 {
  font-size: 16px;
  color: #333333;
  line-height: 32px;
  margin-top: 20px;
}
.contract-logos .logo .p2 {
  font-size: 20px;
  color: #333333;
  line-height: 32px;
  margin-top: 30px;
}
.contract-map {
  margin-top: 114px;
  margin-bottom: 100px;
  position: relative;
}
.contract-map img {
  width: 1280px;
}
/*
主内容区容器结束
*/

/*
头部块开始
*/
.contract {
  width: 100%;
  // min-width: 1902px;
}
.contract .contract-header {
  display: block;
  height: 900px;
  padding-top: 268px;
}
.sliderbox {
  // width: 1902px;
  height: 1000px;
  position: absolute;
  z-index: -1;
  left: 0;
  top: 0;
  img {
    width: 100%;
  }
}
.text {
  width: 1271px;
  height: 268px;
  margin: 0 auto;
  position: relative;
}
.text .c-title {
  font-size: 190px;
  font-family: DIN-Bold, DIN;
  font-weight: bold;
  color: #ffffff;
  line-height: 268px;
  opacity: 0.2;
}
.text .l-title {
  width: 304px;
  height: 87px;
  font-size: 66px;
  font-family: Microsoft YaHei-Bold, Microsoft YaHei;
  font-weight: bold;
  color: #ffffff;
  position: absolute;
  z-index: 2;
  left: 492px;
  top: 132px;
  letter-spacing: 10px;
}
/*
头部块结束
*/
</style>
