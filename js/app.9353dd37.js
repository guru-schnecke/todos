(function(e){function t(t){for(var n,i,l=t[0],c=t[1],s=t[2],u=0,p=[];u<l.length;u++)i=l[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);a&&a(t);while(p.length)p.shift()();return d.push.apply(d,s||[]),o()}function o(){for(var e,t=0;t<d.length;t++){for(var o=d[t],n=!0,l=1;l<o.length;l++){var c=o[l];0!==r[c]&&(n=!1)}n&&(d.splice(t--,1),e=i(i.s=o[0]))}return e}var n={},r={app:0},d=[];function i(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=n,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(o,n,function(t){return e[t]}.bind(null,n));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/todos/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var a=c;d.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";var n=o("85ec"),r=o.n(n);r.a},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("md-toolbar",[o("h2",[e._v(" Keep your to-do's in mind! ")])]),o("md-card",[o("md-card-content",[o("md-field",[o("md-input",{staticClass:"form-control input-height",attrs:{placeholder:"Add a todo"},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addTodo()}},model:{value:e.currentTodo,callback:function(t){e.currentTodo=t},expression:"currentTodo"}}),o("md-button",{staticClass:"md-icon-button md-raised",on:{click:function(t){return t.preventDefault(),e.addTodo(t)}}},[o("md-icon",[e._v("add")])],1)],1)],1)],1),o("div",{staticClass:"List"},[e.showTodos()?o("md-list",{staticClass:"todos-list"},[o("md-list-item",{staticClass:"todo-title"},[e._v(" What needs to be done: ")]),e._l(e.todos,(function(t){return o("md-list-item",{key:t.id,staticClass:"todo-item"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.completed,expression:"todo.completed"}],staticClass:"completed",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.completed)?e._i(t.completed,null)>-1:t.completed},on:{change:function(o){var n=t.completed,r=o.target,d=!!r.checked;if(Array.isArray(n)){var i=null,l=e._i(n,i);r.checked?l<0&&e.$set(t,"completed",n.concat([i])):l>-1&&e.$set(t,"completed",n.slice(0,l).concat(n.slice(l+1)))}else e.$set(t,"completed",d)}}}),o("span",{directives:[{name:"show",rawName:"v-show",value:e.editTodo!==t.id,expression:"editTodo !== todo.id"}],class:{"is-complete":t.completed},on:{click:function(o){return o.preventDefault(),e.edittodo(t)}}},[e._v(" "+e._s(t.label)+" ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.label,expression:"todo.label"},{name:"show",rawName:"v-show",value:e.editTodo==t.id,expression:"editTodo == todo.id"}],domProps:{value:t.label},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.stopEdit(t)},input:function(o){o.target.composing||e.$set(t,"label",o.target.value)}}}),o("md-button",{on:{click:function(o){return o.preventDefault(),e.removeTodo(t)}}},[e._v("remove")])],1)}))],2):e._e()],1)],1)},d=[],i=(o("c975"),o("a434"),{data:function(){return{todos:[],currentTodo:"",editTodo:null}},methods:{showTodos:function(){return this.todos.length>0},addTodo:function(){this.todos.push({id:this.todos.length,label:this.currentTodo,completed:!1,editing:!1}),this.currentTodo=""},removeTodo:function(e){var t=this.todos.indexOf(e);this.todos.splice(t,1)},edittodo:function(e){this.editTodo=e.id},stopEdit:function(){this.editTodo=null}}}),l=i,c=(o("034f"),o("2877")),s=Object(c["a"])(l,r,d,!1,null,null,null),a=s.exports,u=o("43f9"),p=o.n(u),f=o("9c30");o("51de");n["default"].use(p.a),n["default"].use(f["MdField"]),n["default"].use(f["MdCard"]),n["default"].use(f["MdButton"]),n["default"].config.productionTip=!1,new n["default"]({render:function(e){return e(a)}}).$mount("#app")},"85ec":function(e,t,o){}});
//# sourceMappingURL=app.9353dd37.js.map