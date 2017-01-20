/*
* Store 保存整个应用的状态。它的角色有点像 MVC 架构之中的Model
**/

var EventEmitter = require('events').EventEmitter;	//http://nodejs.cn/doc/node/events.html#events_class_eventemitter
var assign = require('object-assign');	//https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
var ListStore = assign({}, EventEmitter.prototype, {	//将源对象自身的可枚举属性拷贝给目标对象
	// 存储
	items: [],

	// 获取
	getAll: function(){
		return this.items
	},

	// 数据存储
	addNewItemHandler: function (text) {
		this.items.push(text);
	},
	
	//触发事件 
	emitChange: function () {
		this.emit('change');
	},

	addChangeListener: function(callback) {
		this.on('change', callback);
	},
	
	removeChangeListener: function(callback) {
		this.removeListener('change', callback);
	}
});
module.exports = ListStore;