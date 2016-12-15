# redux-use
>react+rudex使用，为熟悉redux使用而写的例子，由浅入深。

##使用方法
* 进入`redux-use`文件目录执行`(c)npm inintal`
* 依赖安装完成执行`npm run dev`

###使用说明

* 执行`npm run dev`命令时现在默认执行`src3`目录，
详见`package.json`中`script`命令内容。

* 直接执行执行的是[reudx-doc里的例子](http://cn.redux.js.org/docs/basics/ExampleTodoList.html)

* `src=1`执行的是基于redux的计数器例子，相对简单容易理解

* `src=2`执行的是基于redux的计数器例子，在1的基础上对action，reducer，展示组件，容器组件进行文件分割

* `src=3`执行的是todoMVC的例子

* `src=4`执行的是redux结合中间件请求异步action的例子


##更新说明

###2016-12-15

* 增加key，避免react抛错
* 增加注释

###2016-12-14

* 补全 `action, reducer`，以及 `app`组件实现简单的异步 `action`请求，页面输出 `啊哈呦`

###2016-12-13

* 新增`src4`，尝试借助中间件执行异步action
* 引入`react-router`备用
* 引入`babel-plugin-transform-object-rest-spread`支持对象展开符运算。
* 引入`babel-polyfill,isomorphic-fetch`实现ajax方法
* 引入 `redux-logger` 打印触发 `action`日志打印中间件
* 引入 `redux-thunk` 支持异步 `action`的中间件



###2016-12-09

* 补全src3剩余功能
* src4利用Provider的context属性替换部分父子组件传递调用

`const {store} = this.context`

```
//检查从context获取的store和dispatch，这个是必须要有的
ComponentName.contextTypes = {
    store: React.PropTypes.object,
    dispatch: React.PropTypes.func
}
```

###2016-12-08

* git init

