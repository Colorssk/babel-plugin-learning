安装：  

  npm i
  

介绍：  

    transfer01实现功能：替换掉全局的变量名字  

    transfer02实现功能，替换全局对象  

    transfer03实现功能，按需加载包  

借鉴github地址:https://github.com/babel/minify/tree/master/packages/babel-plugin-transform-inline-environment-variables  


运行transfer01插件：  

   npx babel --plugin ./src/transfer01.js ./src/code.js  

运行transfer02插件：  

  npx babel --plugin ./src/transfer02.js ./src/code.js  

运行transfer03插件：  

  npx babel --plugin ./src/transfer03.js ./src/code.js  
运行transfer04插件：  

  npx babel --plugin ./src/transfer04.js ./src/code.js  
