// pages/billing/billing.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hours: 0,
    minutes: 0,
    seconds: 0,
    disabled: false
  },
  moveToindex() {
    if(this.timer) {
      wx.navigateTo({
        url: '../index/index?flag=true',
      })
    }else {
      wx.redirectTo({
        url: '../index/index',
      })
    }  
  },
  endRide(){
    clearInterval(this.timer);
    this.timer = '';
    this.setData({
      disabled: true
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      number: options.num
    })
    var h = 0;
    var m = 0;
    var s = 0;
    this.timer = setInterval(() => {
      s++;
      this.setData({
        seconds: s
      })
      if(s == 60){
        s = 0;
        m++;
        this.setData({
          minutes : m,
          seconds : s
        })
        if(m == 60){
          m = 0;
          h++;
          this.setData({
            hours: h,
            minutes: m
          })
        }
      }
    },1000)
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
  
  }
})