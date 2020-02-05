// pages/home/home.js
// const app = getApp()
// console.log(app.globalData.name),
// console.log(app.globalData.age)

// 注册一个页面
// 页面也有自己的生命周期函数
Page({




  /**
   * 页面的初始数据
   */

  // -----------2.初始化数据 --------------
  data: {
    list: [],
    message : '哈哈哈'
  },
  // -----------1.监听页面的生命周期函数 --------------
  /**
   * 生命周期函数--监听页面加载
   */
  // 页面被加载出来
  onLoad: function(options) {
    console.log('onLoad')
    wx.request({
      url: 'http://123.207.32.32:8000/recommend',
      success(res) {
        console.log(res)
        const data = res.data.data.list;
        this.setData({
          list: data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    console.log('onReady')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  // 页面显示出来
  onShow: function() {
    console.log('onShow')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
    console.log('onHide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
    console.log('onUnload')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  // -----------3.监听wxml中相关的一些事件 --------------
  handleGetUserInfo(event) {
    console.log(event)
  },
  handleViewClick() {
    console.log('哈哈哈被点击了')
  },
  // -----------4.监听其他事件 --------------
  // 监听页面的滚动
  onPageScroll(obj){
    console.log(obj)
  },
  onReachBottom(){
    console.log('页面滚动到底部')
  },
  onPullDownRefresh(){
    console.log('下拉刷新的事件')
  }
})