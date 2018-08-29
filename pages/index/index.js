// pages/index/index.js
Page({
  data: {
    longitude: "126.5358000000",
    latitude : '45.8021600000',
  },
  bindcontrol: function(e) {
    switch(e.controlId){
      case 1 :
         this.moveTocenter();
         break;
      case 2 :
         if(this.flag) {
           wx.navigateBack({
             delta : 1
           })
         }else {
         wx.scanCode({
           success : () =>{
             wx.showLoading({
               title: '小主请等待',
             })
             wx.request({
               url: 'https://www.easy-mock.com/mock/5b702deb47165d690c0319f1/password',
               success:(res) => {
                 wx.redirectTo({
                   url: `../scanCode/scanCode?pass=${res.data.data.password}&num=${res.data.data.num}`,
                 })
               }
             })
           }
         })
    }
    break;
    case 3:
      wx.redirectTo({
        url: '../warn/warn',
      })
      break;
    case 4:
      wx.redirectTo({
        url: '../mine/mine',
      })
    }

  },
  moveTocenter: function() {
    this.mapContext.moveToLocation()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.flag = options.flag;
    console.log(options);
    wx.getLocation({
      this: (res) => {
        self.setData({
          longitude : res.longitude,
          altitude: res.altitude
        })
      }
      }),
      wx.getSystemInfo({
        success: (res) => {
          this.setData({
            controls : [{
              id : 1,
              position : {
                width : 50,
                height : 50,
                top: res.windowHeight - 70,
                left : 30
              },
              iconPath: "/images/location.png",
              clickable: true
            },
              {
                id: 2,
                position: {
                  width: 90,
                  height: 90,
                  top: res.windowHeight - 100,
                  left: res.windowWidth/2 - 45
                },
                iconPath: "/images/use.png",
                clickable: true
              },
              {
                id: 3,
                position: {
                  width: 50,
                  height: 50,
                  top: res.windowHeight - 70,
                  left: res.windowWidth - 75
                },
                iconPath: "/images/warn.png",
                clickable: true
              },
              {
                id: 4,
                position: {
                  width: 50,
                  height: 50,
                  top: res.windowHeight - 150,
                  left: res.windowWidth - 75
                },
                iconPath: "/images/avatar.png",
                clickable: true
              },
              {
                id: 5,
                position: {
                  width: 26,
                  height: 36,
                  top: res.windowHeight/2 -34,
                  left: res.windowWidth/2 - 14
                },
                iconPath: "/images/marker.png"
              },

            ]
          })
        },
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.moveTocenter();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.mapContext = wx.createMapContext('mapId', this)

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