/*
* 每个Action都是一个对象，包含一个actionType属性（说明动作的类型）
* 和一些其他属性（用来传递数据）
**/

var AppDispatcher = require('../dispatcher/AppDispatcher');
//存放所有的Action
var ButtonActions = {
  addNewItem: function (text) {
    AppDispatcher.dispatch({
      actionType: 'ADD_NEW_ITEM',
      text: text
    });
  },
};

module.exports = ButtonActions;