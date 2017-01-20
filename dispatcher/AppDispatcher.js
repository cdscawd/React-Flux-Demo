/*
* Dispatcher 的作用是将 Action 派发到 Store
* 可以把它看作一个路由器，负责在 View 和 Store 之间的通信
* 建立 Action 的正确传递路线。注意，Dispatcher 只能有一个，而且是全局的。
**/

var Dispatcher = require('flux').Dispatcher;
var AppDispatcher = new Dispatcher();
var ListStore = require('../stores/ListStore');

AppDispatcher.register(function (action) {
	//Dispatcher收到ADD_NEW_ITEM动作
	//就会执行回调函数，对ListStore进行操作。
	//只需派发Action
	switch(action.actionType){
		case 'ADD_NEW_ITEM':
			ListStore.addNewItemHandler(action.text);
			ListStore.emitChange();
			break;
		default:
	}
});
module.exports = AppDispatcher;
