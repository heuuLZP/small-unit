// home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cardList: [
      'letter-index',
      'view',
      'scroll-view',
      'swiper',
      'movable-view',
      'icon',
      'text',
      'progress',
      'button',
      'checkbox',
      'form',
      'input',
      'label',
      'picker',
      'picker-view',
      'radio',
      'slider',
      'switch',
      'textarea',
      'navigator',
      'audio',
      'image',
      'video',
      'map',
      'canvas',
      'contact-button'
    ]
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
  
  },
  /**
   * 页面跳转
   */
  goItem: function (event) {
    let url = '../item/' + event.currentTarget.dataset.name + '/' + event.currentTarget.dataset.name;
    wx.navigateTo({
      url: url
    })
  }
})