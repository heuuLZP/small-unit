// letter-index.js
//定义索引字母数组
const letterArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
function getArrLetter(pageY){
  let index = Math.floor(Number(pageY) / 22);
  index < 0 ? index = 0 : '';
  index > 25 ? index = 25 : '';
  return letterArray[index]
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    screenHeight: 0,
    letterArr: letterArray,
    letterClass: 'index-wrap',
    intoView: 'A',
    currentLetter: '',
    letterShow: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({screenHeight:res.windowHeight});
      }
    })
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
   * 触摸开始
   */
  touchstart: function (e) {
    this.setData({
      letterClass: 'index-wrap index-wrap-hover',
      intoView: e.target.id,
      letterShow: true,
      currentLetter: e.target.id,
    })
  },
  /**
   * 触摸移动中
   */
  touchmove: function (e) {
    let letter = getArrLetter(e.touches[0].pageY);
    console.log(letter,'=====move');
    this.setData({
      intoView: letter,
      currentLetter: letter,
    })
  },
  /**
   * 触摸结束
   */
  touchend: function (e) {
    this.setData({
      letterClass: 'index-wrap',
      letterShow: false,
    })
  }
})