// pages/demo/demo.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        name: 'Abyss',
        age: '18',
        movies: [{
                id: 110,
                name: 'kobe',
                age: 30
            },
            {
                id: 111,
                name: 'James',
                age: 28
            },
            {
                id: 112,
                name: 'Curry',
                age: 26
            },
            {
                id: 113,
                name: 'Zhang',
                age: 24
            }
        ],
        counter:0
    },

    handleBtnClick(){
        // 1.错误做法
        // this.data.counter += 1
        // console.log(this.data.counter)

        // 2.this.setData()
        this.setData({
            counter: this.data.counter + 1
        })
    },
    handleSub(){
        this.setData({
            counter: this.data.counter - 1
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

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

    }
})