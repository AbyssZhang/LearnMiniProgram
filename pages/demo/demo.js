// pages/demo/demo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title:'你好啊',
      path:'/pages/index/index'
    }
  },

  handleShowToast(){
    wx.showToast({
      title: '加载中ing',
      duration:3000,
      icon:'loading',
      mask:true,
      success:function(){
        console.log('展示弹窗成功')
      },
      fail:function(){
        console.log('展示弹窗失败')
      },
      complete:function(){
        console.log('完成函数的调用')
      }
    })
  },
  handleShowModal(){
    wx.showModal({
      title:'title',
      content:'content',
      // showCancel:false,
      cancelText:'退出',
      cancelColor:'red',
      success:function(res){
        console.log(res)
        if(res.cancel){
          console.log('用户点击了取消')
        }
        if(res.confirm){
          console.log('用户点击了确定')
        }
      }
    })
  },
  handleShowLoading(){
    wx.showLoading({
      title: '加载ing',
      mask:true
    })
    
    setTimeout(()=>{
      wx.hideLoading()
    },1000)
  },
  handleShowAction(){
    wx.showActionSheet({
      itemList: ['相册','拍照'],
      itemColor:'red',
      success:function(res){
        console.log(res)
      }
    })
  }
})