App({
    //生命周期函数:后台存活两个小时
    // 小程序初始化完成时，会执行的生命周期函数；
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    console.log('onLaunch')
    // 获取用户信息
    // console.log('小程序初始化完成了：onLaunch')
    // wx.request({
    //   url: '',
    // })
    // 异步调用
    wx.getUserInfo({
      // 数据拿到之后，再进行回调
      success: function(res){
        console.log(res)
      }
    })

    setTimeout(function(){
      const err = new Error()

      throw err
    }, 3000)
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    console.log('界面显示出来：onShow')
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log('界面隐藏时汇之星：onHide')
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    console.log('小程序中发生错误时执行：onError')
  }
})
