### window对象

### location对象

### navigator对象

1. 检测插件

    * navigator.plugins返回插件数组

2. 注册处理程序
    >方法
    * navigator.registerProtocolHandler()，参数： MIME 类型,url,应用程序名。
    * navigator.registerContentHandler()，参数： MIME 类型,url,应用程序名。

### screen对象

### history对象
    >方法
    * history.go(),参数:整数或url字符串，作用:基于浏览历史实现前进或后退。
    * history.back()。前进
    * history.forwar()。后退
    >属性
    * history.length:返回浏览历史条数。

### 小结
    8.6 小结
    * 浏览器对象模型（BOM）以 window 对象为依托，表示浏览器窗口以及页面可见区域。同时， window
      对象还是 ECMAScript 中的 Global 对象，因而所有全局变量和函数都是它的属性，且所有原生的构造
      函数及其他函数也都存在于它的命名空间下。本章讨论了下列 BOM 的组成部分。
    *   在使用框架时，每个框架都有自己的 window 对象以及所有原生构造函数及其他函数的副本。
      每个框架都保存在 frames 集合中，可以通过位置或通过名称来访问。
    *   有一些窗口指针，可以用来引用其他框架，包括父框架。
    *  top 对象始终指向最外围的框架，也就是整个浏览器窗口。
    *  parent 对象表示包含当前框架的框架，而 self 对象则回指 window 。
    * 使用 location 对象可以通过编程方式来访问浏览器的导航系统。设置相应的属性，可以逐段
        或整体性地修改浏览器的 URL。
    *   调用 replace() 方法可以导航到一个新 URL，同时该 URL 会替换浏览器历史记录中当前显示
      的页面。
    *  navigator 对象提供了与浏览器有关的信息。到底提供哪些信息，很大程度上取决于用户的浏
        览器；不过，也有一些公共的属性（如 userAgent ）存在于所有浏览器中。
        BOM 中还有两个对象： screen 和 history ，但它们的功能有限。 screen 对象中保存着与客户端
        显示器有关的信息，这些信息一般只用于站点分析。 history 对象为访问浏览器的历史记录开了一个
        小缝隙，开发人员可以据此判断历史记录的数量，也可以在历史记录中向后或向前导航到任意页面。
