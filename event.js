var events = require('events')

var eventEmitter = new events.EventEmitter()

var listener1 = function () { console.log('监听器 listener 1') }
var listener2 = function () { console.log('监听器 listener 2') }

// 为error设置监听器 避免程序中断
eventEmitter.on('error', (error) => {
  console.error('error !!!', error);
})

// addListener 添加一个监听器到监听器数组尾部
eventEmitter.addListener('connection', listener1)
// on 绑定一个监听器
eventEmitter.on('connection', listener2)

// listenerCount获取指定监听器的数量
var eventListeners = eventEmitter.listenerCount('connection')
console.log('eventListener count:' + eventListeners + '个');

// emit 触发指定监听器
eventEmitter.emit('connection')

eventEmitter.emit('error')

// removeListener 移出指定监听器
eventEmitter.removeListener('connection', listener1)
console.log('listener1 不在受监听');

eventEmitter.emit('connection')

eventListeners = eventEmitter.listenerCount('connection')
console.log('eventListener count:' + eventListeners + '个');

console.log('finished');

