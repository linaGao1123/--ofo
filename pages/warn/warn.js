// pages/warn/warn.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checkBoxList : [{
      checked : false,
      title : '私锁私用',
      bikeInfo:{
        num: 0,
        desc : ''
      },
    },
      {
        checked: false,
        title: '车辆损坏'
      },
      {
        checked: false,
        title: '轮胎坏了'
      },
      {
        checked: false,
        title: '车辆坏了'
      },
      {
        checked: false,
        title: '违章乱停'
      },
      {
        checked: false,
        title: '密码不对'
      },
      {
        checked: false,
        title: '刹车坏了'
      },
      {
        checked: false,
        title: '其他故障'
      },
    ],
    pics: [],
    actionText: '拍照/照片',
     checkboxvalue : []
  },
  bindchange(e) {
    this.setData({
     checkboxvalue : e.datail.value
    })
  },
  takePic() {
    wx.chooseImage({
        success: (res) =>{
          var pic = this.data.pics;
          var pics = pic.concat(res.tempFilePaths);
        console.log(res);
        this.setData({
          pics: pics,
          actionText: '+'
        })
      },
    })
  },
  del(e) {
   var index = e.currentTarget.dataset.index;
   this.data.pics.splice(index,1);
   if(this.data.pics == ''){
     this.setData({
       actionText: '拍照/照片'
     })
   } 
   this.setData({
       pics: this.data.pics
     })
  },
  changenumber(e) {
    this.setData({
      bikeInfo:{
        num: e.detail.value,
        desc : this.data.bikeInfo.desc
      }
    })
  },
  changeinput(e) {
    this.setData({
      bikeInfo: {
        num: this.data.bikeInfo.num,
        desc: e.detail.value
      }
    })
  },
  submit() {
    if (this.data.checkboxvalue.length && this.data.pics.length) {
    }else {
      wx.showModal({
        title: '警告',
        content: '请完善信息',
        confirmText:'继续完善',
        cancelText: '放弃操作',
        success:(res) => {
          if(res.confirm) {
          }else {
            wx.redirectTo({
              url: '../index/index',
            })
          }
        }
      })
    }
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
  
  }
})