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


##更新说明

###2016-12-09

* 补全src3剩余功能
* src4利用Provider的context属性替换部分父子组件传递调用
`const {store} = this.context`
```ComponentName.contextTypes = {
    store: React.PropTypes.object,
    dispatch: React.PropTypes.func
}```

###2016-12-08

* git init

