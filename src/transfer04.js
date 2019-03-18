const t = require('babel-types');
let {compare} = require('./utils.js')
var ideArr = []
var initArr = []
var assignArr = []
let index = 0
// 将import {flattenDeep, chunk} from 'lodash' 转化为下面这种写法:
// import flattenDeep from 'lodash/flattenDepp'
// import chunk from 'lodash/chunk'

// Babel将源码转换AST之后，通过遍历AST树（其实就是一个js对象），对树做一些修改，然后再将AST转成code，即成源码。
let visitor = {
  AssignmentExpression(path, ref={}){
    // console.log(path.listkey)
    let node = path.node;
    let{operator, left} = node;
    console.log(operator)
    if (operator =='='){
      assignArr.push(left.name)
    }
    console.log(123)
    console.log(assignArr)

  },
  // Identifier: {
  //   enter(path,ref={opts:{}}) {
  //     initArr.push(path.node.name)
  //     // console.log(initArr)
  //   },
  //   exit(path) {
  //     // if (path.isReferencedIdentifier()) {
  //     //   console.log(path.node.name+'被引用了')
  //     // }
  //     // console.log('traverse exit a Identifier node!'+index++)
  //   }
  // },
  // FunctionDeclaration:{
  //   enter(){

  //   },
  //   exit(path){
  //     if (path.node.id.name == 'ColorsskCG'){
  //       path.remove()
  //     }
  //   }
  // },
  VariableDeclaration:{
    enter(path){
      let node = path.node;
      let { declarations } = node;
      ideArr.push(declarations[0].id.name)
    },
    exit(path){
      let node = path.node
      let { declarations } = node;
      if (declarations[0].id.name == 'ColorsskCG'){
        console.log('最后执行')
        // console.log(ideArr)
        let result = compare(assignArr, ideArr)
        console.log(result)
        let temparr = result.map(p=>(
          t.assignmentExpression('=', t.identifier(p), t.nullLiteral())
        ))
        temparr.forEach(item=>{
            path.insertAfter(item); 
        })
        path.remove()
      }
      // 遍历assignarr然后在idearr中找，如果对应的ide中没有那么就表示是全局的，然后再结束的时候赋值为空（window.xx = null）
    }
  },
  // VariableDeclaration(path,ref={}){//声明（无论是否赋值）
  //   let node = path.node;
  //   let { declarations } = node;
  //   ideArr.push(declarations[0].id.name)
  //   console.log(ideArr)
  // }
}
module.exports = function () { // 将插件导出
  return { visitor } // 属性名固定为visitor
};