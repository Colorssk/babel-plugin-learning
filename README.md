安装：  

  npm i
  

介绍：  

    transfer01实现功能：替换掉全局的变量名字  

    transfer02实现功能，替换全局对象  

    transfer03实现功能，按需加载包  

    transfer04实现功能，内存泄漏优化：  
    
    暂时解决情况：  
    1:意外的全局变量：  

    JavaScript对未声明变量的处理方式：  

    在全局对象上创建该变量的引用(即全局对象上的属性，不是变量，因为它能通过delete删除)。  
    如果在浏览器中，全局对象就是window对象。  
    
    如果未声明的变量缓存大量的数据，会导致这些数据只有在窗口关闭或重新刷新页面时才能被释放。这样会造成意外的内存泄漏。  
    其他解决法案：采用严格模式  
    说明：本插件是一个小应用，后期会更新兼容更多的内存泄漏的情况，其实通过用webpack的tapable编写loader插件也能很好的解决问题，后期会有开源  
    2：自动清除ocnsole.log()等控制台输出（这个是会造成内存泄漏的）  
    


借鉴github地址:https://github.com/babel/minify/tree/master/packages/babel-plugin-transform-inline-environment-variables  


运行transfer01插件：  

   npx babel --plugin ./src/transfer01.js ./src/code.js  

运行transfer02插件：  

  npx babel --plugin ./src/transfer02.js ./src/code.js  

运行transfer03插件：  

  npx babel --plugin ./src/transfer03.js ./src/code.js  

运行transfer04插件：  

  npx babel --plugin ./src/transfer04.js ./src/code.js  
