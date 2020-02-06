// pages/wxml/wxml.js
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message:'你好小程序',
    firstname:'kobe',
    lastname:'bryant',
    age:20,
    isActive: false,
    isShow: true,
    score:59,
    movies:['大话西游','盗梦空间','星际穿越'],
    nums:[
      [1,2,3,4,],
      [7,8,9,8],
      [4,5,6,7]
    ],
    letters: ['a', 'b', 'c']
  },
  onLoad(){
    var time = util.formatTime(new Date());
    setInterval(() => {
      this.setData({
        time: util.formatTime(new Date())
      })
    },1000)
  },

  handleSwitchColor(){
    console.log('-----------------')
    this.setData({
      isActive: !this.data.isActive
    })
  },
  handleSwitchShow(){
    this.setData({
      isShow:! this.data.isShow
    })
  },
  handleIncrement(){
    this.setData({
      score: this.data.score + 5
    })
  }
})