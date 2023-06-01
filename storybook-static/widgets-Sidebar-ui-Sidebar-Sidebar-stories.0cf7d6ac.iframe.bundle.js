/*! For license information please see widgets-Sidebar-ui-Sidebar-Sidebar-stories.0cf7d6ac.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkulbi_course=self.webpackChunkulbi_course||[]).push([[363],{"./src/widgets/Sidebar/ui/Sidebar/Sidebar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Dark:()=>Dark,Light:()=>Light,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Sidebar_stories});var ThemeDecorator=__webpack_require__("./src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx"),ThemeProvider=__webpack_require__("./src/shared/ui/ThemeProvider/index.ts"),react=__webpack_require__("./node_modules/react/index.js"),shared=__webpack_require__("./src/shared/index.ts"),ThemeSwitcher=__webpack_require__("./src/widgets/ThemeSwitcher/ThemeSwitcher.tsx"),useTranslation=__webpack_require__("./node_modules/react-i18next/dist/es/useTranslation.js"),Button=__webpack_require__("./src/shared/ui/Button/Button.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _regeneratorRuntime(){_regeneratorRuntime=function _regeneratorRuntime(){return exports};var exports={},Op=Object.prototype,hasOwn=Op.hasOwnProperty,defineProperty=Object.defineProperty||function(obj,key,desc){obj[key]=desc.value},$Symbol="function"==typeof Symbol?Symbol:{},iteratorSymbol=$Symbol.iterator||"@@iterator",asyncIteratorSymbol=$Symbol.asyncIterator||"@@asyncIterator",toStringTagSymbol=$Symbol.toStringTag||"@@toStringTag";function define(obj,key,value){return Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}),obj[key]}try{define({},"")}catch(err){define=function define(obj,key,value){return obj[key]=value}}function wrap(innerFn,outerFn,self,tryLocsList){var protoGenerator=outerFn&&outerFn.prototype instanceof Generator?outerFn:Generator,generator=Object.create(protoGenerator.prototype),context=new Context(tryLocsList||[]);return defineProperty(generator,"_invoke",{value:makeInvokeMethod(innerFn,self,context)}),generator}function tryCatch(fn,obj,arg){try{return{type:"normal",arg:fn.call(obj,arg)}}catch(err){return{type:"throw",arg:err}}}exports.wrap=wrap;var ContinueSentinel={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var IteratorPrototype={};define(IteratorPrototype,iteratorSymbol,(function(){return this}));var getProto=Object.getPrototypeOf,NativeIteratorPrototype=getProto&&getProto(getProto(values([])));NativeIteratorPrototype&&NativeIteratorPrototype!==Op&&hasOwn.call(NativeIteratorPrototype,iteratorSymbol)&&(IteratorPrototype=NativeIteratorPrototype);var Gp=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(IteratorPrototype);function defineIteratorMethods(prototype){["next","throw","return"].forEach((function(method){define(prototype,method,(function(arg){return this._invoke(method,arg)}))}))}function AsyncIterator(generator,PromiseImpl){function invoke(method,arg,resolve,reject){var record=tryCatch(generator[method],generator,arg);if("throw"!==record.type){var result=record.arg,value=result.value;return value&&"object"==_typeof(value)&&hasOwn.call(value,"__await")?PromiseImpl.resolve(value.__await).then((function(value){invoke("next",value,resolve,reject)}),(function(err){invoke("throw",err,resolve,reject)})):PromiseImpl.resolve(value).then((function(unwrapped){result.value=unwrapped,resolve(result)}),(function(error){return invoke("throw",error,resolve,reject)}))}reject(record.arg)}var previousPromise;defineProperty(this,"_invoke",{value:function value(method,arg){function callInvokeWithMethodAndArg(){return new PromiseImpl((function(resolve,reject){invoke(method,arg,resolve,reject)}))}return previousPromise=previousPromise?previousPromise.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(innerFn,self,context){var state="suspendedStart";return function(method,arg){if("executing"===state)throw new Error("Generator is already running");if("completed"===state){if("throw"===method)throw arg;return doneResult()}for(context.method=method,context.arg=arg;;){var delegate=context.delegate;if(delegate){var delegateResult=maybeInvokeDelegate(delegate,context);if(delegateResult){if(delegateResult===ContinueSentinel)continue;return delegateResult}}if("next"===context.method)context.sent=context._sent=context.arg;else if("throw"===context.method){if("suspendedStart"===state)throw state="completed",context.arg;context.dispatchException(context.arg)}else"return"===context.method&&context.abrupt("return",context.arg);state="executing";var record=tryCatch(innerFn,self,context);if("normal"===record.type){if(state=context.done?"completed":"suspendedYield",record.arg===ContinueSentinel)continue;return{value:record.arg,done:context.done}}"throw"===record.type&&(state="completed",context.method="throw",context.arg=record.arg)}}}function maybeInvokeDelegate(delegate,context){var methodName=context.method,method=delegate.iterator[methodName];if(void 0===method)return context.delegate=null,"throw"===methodName&&delegate.iterator.return&&(context.method="return",context.arg=void 0,maybeInvokeDelegate(delegate,context),"throw"===context.method)||"return"!==methodName&&(context.method="throw",context.arg=new TypeError("The iterator does not provide a '"+methodName+"' method")),ContinueSentinel;var record=tryCatch(method,delegate.iterator,context.arg);if("throw"===record.type)return context.method="throw",context.arg=record.arg,context.delegate=null,ContinueSentinel;var info=record.arg;return info?info.done?(context[delegate.resultName]=info.value,context.next=delegate.nextLoc,"return"!==context.method&&(context.method="next",context.arg=void 0),context.delegate=null,ContinueSentinel):info:(context.method="throw",context.arg=new TypeError("iterator result is not an object"),context.delegate=null,ContinueSentinel)}function pushTryEntry(locs){var entry={tryLoc:locs[0]};1 in locs&&(entry.catchLoc=locs[1]),2 in locs&&(entry.finallyLoc=locs[2],entry.afterLoc=locs[3]),this.tryEntries.push(entry)}function resetTryEntry(entry){var record=entry.completion||{};record.type="normal",delete record.arg,entry.completion=record}function Context(tryLocsList){this.tryEntries=[{tryLoc:"root"}],tryLocsList.forEach(pushTryEntry,this),this.reset(!0)}function values(iterable){if(iterable){var iteratorMethod=iterable[iteratorSymbol];if(iteratorMethod)return iteratorMethod.call(iterable);if("function"==typeof iterable.next)return iterable;if(!isNaN(iterable.length)){var i=-1,next=function next(){for(;++i<iterable.length;)if(hasOwn.call(iterable,i))return next.value=iterable[i],next.done=!1,next;return next.value=void 0,next.done=!0,next};return next.next=next}}return{next:doneResult}}function doneResult(){return{value:void 0,done:!0}}return GeneratorFunction.prototype=GeneratorFunctionPrototype,defineProperty(Gp,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),defineProperty(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,toStringTagSymbol,"GeneratorFunction"),exports.isGeneratorFunction=function(genFun){var ctor="function"==typeof genFun&&genFun.constructor;return!!ctor&&(ctor===GeneratorFunction||"GeneratorFunction"===(ctor.displayName||ctor.name))},exports.mark=function(genFun){return Object.setPrototypeOf?Object.setPrototypeOf(genFun,GeneratorFunctionPrototype):(genFun.__proto__=GeneratorFunctionPrototype,define(genFun,toStringTagSymbol,"GeneratorFunction")),genFun.prototype=Object.create(Gp),genFun},exports.awrap=function(arg){return{__await:arg}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,asyncIteratorSymbol,(function(){return this})),exports.AsyncIterator=AsyncIterator,exports.async=function(innerFn,outerFn,self,tryLocsList,PromiseImpl){void 0===PromiseImpl&&(PromiseImpl=Promise);var iter=new AsyncIterator(wrap(innerFn,outerFn,self,tryLocsList),PromiseImpl);return exports.isGeneratorFunction(outerFn)?iter:iter.next().then((function(result){return result.done?result.value:iter.next()}))},defineIteratorMethods(Gp),define(Gp,toStringTagSymbol,"Generator"),define(Gp,iteratorSymbol,(function(){return this})),define(Gp,"toString",(function(){return"[object Generator]"})),exports.keys=function(val){var object=Object(val),keys=[];for(var key in object)keys.push(key);return keys.reverse(),function next(){for(;keys.length;){var key=keys.pop();if(key in object)return next.value=key,next.done=!1,next}return next.done=!0,next}},exports.values=values,Context.prototype={constructor:Context,reset:function reset(skipTempReset){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(resetTryEntry),!skipTempReset)for(var name in this)"t"===name.charAt(0)&&hasOwn.call(this,name)&&!isNaN(+name.slice(1))&&(this[name]=void 0)},stop:function stop(){this.done=!0;var rootRecord=this.tryEntries[0].completion;if("throw"===rootRecord.type)throw rootRecord.arg;return this.rval},dispatchException:function dispatchException(exception){if(this.done)throw exception;var context=this;function handle(loc,caught){return record.type="throw",record.arg=exception,context.next=loc,caught&&(context.method="next",context.arg=void 0),!!caught}for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i],record=entry.completion;if("root"===entry.tryLoc)return handle("end");if(entry.tryLoc<=this.prev){var hasCatch=hasOwn.call(entry,"catchLoc"),hasFinally=hasOwn.call(entry,"finallyLoc");if(hasCatch&&hasFinally){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0);if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}else if(hasCatch){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0)}else{if(!hasFinally)throw new Error("try statement without catch or finally");if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}}}},abrupt:function abrupt(type,arg){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc<=this.prev&&hasOwn.call(entry,"finallyLoc")&&this.prev<entry.finallyLoc){var finallyEntry=entry;break}}finallyEntry&&("break"===type||"continue"===type)&&finallyEntry.tryLoc<=arg&&arg<=finallyEntry.finallyLoc&&(finallyEntry=null);var record=finallyEntry?finallyEntry.completion:{};return record.type=type,record.arg=arg,finallyEntry?(this.method="next",this.next=finallyEntry.finallyLoc,ContinueSentinel):this.complete(record)},complete:function complete(record,afterLoc){if("throw"===record.type)throw record.arg;return"break"===record.type||"continue"===record.type?this.next=record.arg:"return"===record.type?(this.rval=this.arg=record.arg,this.method="return",this.next="end"):"normal"===record.type&&afterLoc&&(this.next=afterLoc),ContinueSentinel},finish:function finish(finallyLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.finallyLoc===finallyLoc)return this.complete(entry.completion,entry.afterLoc),resetTryEntry(entry),ContinueSentinel}},catch:function _catch(tryLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc===tryLoc){var record=entry.completion;if("throw"===record.type){var thrown=record.arg;resetTryEntry(entry)}return thrown}}throw new Error("illegal catch attempt")},delegateYield:function delegateYield(iterable,resultName,nextLoc){return this.delegate={iterator:values(iterable),resultName,nextLoc},"next"===this.method&&(this.arg=void 0),ContinueSentinel}},exports}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}var LangSwitcher=function LangSwitcher(_ref){var className=_ref.className,_useTranslation=(0,useTranslation.$)(),t=_useTranslation.t,i18n=_useTranslation.i18n,toggleLanguage=function(){var _ref2=function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}(_regeneratorRuntime().mark((function _callee(){return _regeneratorRuntime().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:i18n.changeLanguage("en"===i18n.language?"ru":"en");case 1:case"end":return _context.stop()}}),_callee)})));return function toggleLanguage(){return _ref2.apply(this,arguments)}}();return(0,jsx_runtime.jsx)(Button.z,{theme:Button.W.CLEAR,onClick:toggleLanguage,className:(0,shared.AK)("",{},[className]),children:t("translate")})};LangSwitcher.displayName="LangSwitcher";try{LangSwitcher.displayName="LangSwitcher",LangSwitcher.__docgenInfo={description:"",displayName:"LangSwitcher",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/widgets/LangSwitcher/LangSwitcher.tsx#LangSwitcher"]={docgenInfo:LangSwitcher.__docgenInfo,name:"LangSwitcher",path:"src/widgets/LangSwitcher/LangSwitcher.tsx#LangSwitcher"})}catch(__react_docgen_typescript_loader_error){}var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Sidebar_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/Sidebar/ui/Sidebar/Sidebar.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Sidebar_module.Z,options);const Sidebar_Sidebar_module=Sidebar_module.Z&&Sidebar_module.Z.locals?Sidebar_module.Z.locals:void 0;function Sidebar_typeof(obj){return Sidebar_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},Sidebar_typeof(obj)}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==Sidebar_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==Sidebar_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===Sidebar_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var _Light$parameters,_Light$parameters2,_Light$parameters2$do,_Dark$parameters,_Dark$parameters2,_Dark$parameters2$doc,Sidebar=function Sidebar(_ref){var className=_ref.className,_useState2=_slicedToArray((0,react.useState)(!1),2),collapsed=_useState2[0],setCollapsed=_useState2[1];return(0,jsx_runtime.jsxs)("div",{"data-testid":"sidebar",className:(0,shared.AK)(Sidebar_Sidebar_module.Sidebar,_defineProperty({},Sidebar_Sidebar_module.collapsed,collapsed),[className]),children:[(0,jsx_runtime.jsx)(Button.z,{"data-testid":"sidebar-toggle",type:"button",onClick:function onToggle(){setCollapsed((function(prev){return!prev}))},children:"toggle"}),(0,jsx_runtime.jsxs)("div",{className:Sidebar_Sidebar_module.switchers,children:[(0,jsx_runtime.jsx)(ThemeSwitcher.O,{className:"hello"}),(0,jsx_runtime.jsx)(LangSwitcher,{className:Sidebar_Sidebar_module.lang})]})]})};Sidebar.displayName="Sidebar";try{Sidebar.displayName="Sidebar",Sidebar.__docgenInfo={description:"",displayName:"Sidebar",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/widgets/Sidebar/ui/Sidebar/Sidebar.tsx#Sidebar"]={docgenInfo:Sidebar.__docgenInfo,name:"Sidebar",path:"src/widgets/Sidebar/ui/Sidebar/Sidebar.tsx#Sidebar"})}catch(__react_docgen_typescript_loader_error){}function Sidebar_stories_typeof(obj){return Sidebar_stories_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},Sidebar_stories_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){Sidebar_stories_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function Sidebar_stories_defineProperty(obj,key,value){return(key=function Sidebar_stories_toPropertyKey(arg){var key=function Sidebar_stories_toPrimitive(input,hint){if("object"!==Sidebar_stories_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==Sidebar_stories_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===Sidebar_stories_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const Sidebar_stories={title:"widget/Sidebar",component:Sidebar,tags:["autodocs"],argTypes:{}};var Light={args:{}},Dark={args:{},decorators:[(0,ThemeDecorator.F)(ThemeProvider.Q2.DARK)]};Light.parameters=_objectSpread(_objectSpread({},Light.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Light$parameters=Light.parameters)||void 0===_Light$parameters?void 0:_Light$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {}\n}"},null===(_Light$parameters2=Light.parameters)||void 0===_Light$parameters2||null===(_Light$parameters2$do=_Light$parameters2.docs)||void 0===_Light$parameters2$do?void 0:_Light$parameters2$do.source)})}),Dark.parameters=_objectSpread(_objectSpread({},Dark.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Dark$parameters=Dark.parameters)||void 0===_Dark$parameters?void 0:_Dark$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {},\n  decorators: [ThemeDecorator(Theme.DARK)]\n}"},null===(_Dark$parameters2=Dark.parameters)||void 0===_Dark$parameters2||null===(_Dark$parameters2$doc=_Dark$parameters2.docs)||void 0===_Dark$parameters2$doc?void 0:_Dark$parameters2$doc.source)})});var __namedExportsOrder=["Light","Dark"]},"./src/shared/ui/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Button,W:()=>ThemButton});var classNames=__webpack_require__("./src/shared/lib/classNames/classNames.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Button_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Button/Button.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Button_module.Z,options);const Button_Button_module=Button_module.Z&&Button_module.Z.locals?Button_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}var _excluded=["className","children","theme"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var ThemButton=function(ThemButton){return ThemButton.CLEAR="clear",ThemButton.OUTLINE="outline",ThemButton}({}),Button=function Button(props){var className=props.className,children=props.children,theme=props.theme,otherProps=_objectWithoutProperties(props,_excluded);return(0,jsx_runtime.jsx)("button",_objectSpread(_objectSpread({type:"button",className:(0,classNames.A)(Button_Button_module.Button,{},[className,Button_Button_module[theme]])},otherProps),{},{children}))};Button.displayName="Button";try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"clear"'},{value:'"outline"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/shared/ui/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/widgets/ThemeSwitcher/ThemeSwitcher.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>ThemeSwitcher});var _path,_path2,_path3,ThemeProvider=__webpack_require__("./src/shared/ui/ThemeProvider/index.ts"),shared=__webpack_require__("./src/shared/index.ts"),react=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const theme_light=function SvgThemeLight(props){return react.createElement("svg",_extends({width:40,height:41,fill:"none",xmlns:"http://www.w3.org/2000/svg"},props),_path||(_path=react.createElement("path",{d:"M33.53 23.702a10.83 10.83 0 0 1-3.177 7.662 10.854 10.854 0 0 1-14.1 1.066L31.42 17.279a10.803 10.803 0 0 1 2.11 6.423ZM33.392 31.346l2.269-5.457L40 30.892l-6.608.453ZM35.66 21.574l-2.248-5.477 6.588.472-4.34 5.005ZM24.852 36.666l5.464-2.266-.474 6.6-4.99-4.334ZM15.05 34.4l5.463 2.266-4.99 4.314-.474-6.58ZM33.669 4l2.82 2.817L5.78 37.493l-2.82-2.817L33.669 4Z",fill:"#FFC700"})),_path2||(_path2=react.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m18.56 6.955 2.92 1.832-1.007-3.29 2.663-2.226-3.412-.06L18.402 0l-1.144 3.25-3.451.237 2.741 2.089-.828 3.349 2.84-1.97Zm-5.878 7.506L14.97 15.9l-.789-2.581 2.072-1.715-2.683-.059-1.006-2.502-.887 2.542-2.683.177 2.15 1.635-.67 2.601 2.208-1.537Z",fill:"#FFC700"})),_path3||(_path3=react.createElement("path",{d:"M10.848 1.044A12.872 12.872 0 0 0 4.931 11.88c0 4.571 2.387 8.57 5.976 10.836C4.852 22.716 0 17.87 0 11.88a10.83 10.83 0 0 1 3.177-7.662 10.854 10.854 0 0 1 7.671-3.174Z",fill:"#FFC700"})))};var theme_dark_path,theme_dark_path2;function theme_dark_extends(){return theme_dark_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},theme_dark_extends.apply(this,arguments)}const theme_dark=function SvgThemeDark(props){return react.createElement("svg",theme_dark_extends({width:40,height:41,fill:"none",xmlns:"http://www.w3.org/2000/svg"},props),theme_dark_path||(theme_dark_path=react.createElement("path",{d:"M10.848 1.044A12.872 12.872 0 0 0 4.931 11.88c0 4.571 2.387 8.57 5.976 10.836C4.852 22.716 0 17.87 0 11.88a10.83 10.83 0 0 1 3.177-7.662 10.854 10.854 0 0 1 7.671-3.174Z",fill:"#0115C6"})),theme_dark_path2||(theme_dark_path2=react.createElement("path",{d:"m14.97 15.9-2.288-1.439-2.209 1.537.671-2.6-2.15-1.636 2.683-.177.887-2.542 1.006 2.502 2.683.06-2.072 1.714.79 2.58ZM21.48 8.787l-2.92-1.832-2.84 1.97.828-3.35-2.741-2.088 3.451-.236L18.402 0l1.322 3.211 3.412.06-2.663 2.226 1.006 3.29ZM33.669 4l2.82 2.817L5.78 37.493l-2.82-2.817L33.669 4ZM33.53 23.702a10.83 10.83 0 0 1-3.177 7.662 10.854 10.854 0 0 1-14.1 1.066L31.42 17.279a10.803 10.803 0 0 1 2.11 6.423ZM33.392 31.346l2.269-5.457L40 30.892l-6.608.453ZM35.66 21.574l-2.248-5.477 6.588.472-4.34 5.005ZM24.852 36.666l5.464-2.266-.474 6.6-4.99-4.334ZM15.05 34.4l5.463 2.266-4.99 4.314-.474-6.58Z",fill:"#0115C6"})))};var Button=__webpack_require__("./src/shared/ui/Button/Button.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ThemeSwitcher=function ThemeSwitcher(_ref){var className=_ref.className,_useTheme=(0,ThemeProvider.Fg)(),theme=_useTheme.theme,toggleTheme=_useTheme.toggleTheme;return(0,jsx_runtime.jsx)(Button.z,{onClick:toggleTheme,className:(0,shared.AK)("",{},[className]),theme:Button.W.CLEAR,children:"light"===theme?(0,jsx_runtime.jsx)(theme_light,{}):(0,jsx_runtime.jsx)(theme_dark,{})})};ThemeSwitcher.displayName="ThemeSwitcher";try{ThemeSwitcher.displayName="ThemeSwitcher",ThemeSwitcher.__docgenInfo={description:"",displayName:"ThemeSwitcher",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/widgets/ThemeSwitcher/ThemeSwitcher.tsx#ThemeSwitcher"]={docgenInfo:ThemeSwitcher.__docgenInfo,name:"ThemeSwitcher",path:"src/widgets/ThemeSwitcher/ThemeSwitcher.tsx#ThemeSwitcher"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Button/Button.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".src-shared-ui-Button-Button-module__Button--a4nOa{cursor:pointer;color:var(--primary-color)}.src-shared-ui-Button-Button-module__clear--FAEtI{outline:none;background:none;border:none;padding:0}.src-shared-ui-Button-Button-module__outline--pxBl_{padding:10px 15px;border:1px solid var(--primary-color);color:var(--primary-color);background:none}","",{version:3,sources:["webpack://./src/shared/ui/Button/Button.module.scss"],names:[],mappings:"AAAA,mDACE,cAAA,CACA,0BAAA,CAGF,kDACE,YAAA,CACA,eAAA,CACA,WAAA,CACA,SAAA,CAGF,oDACE,iBAAA,CACA,qCAAA,CACA,0BAAA,CACA,eAAA",sourcesContent:[".Button {\n  cursor: pointer;\n  color: var(--primary-color);\n}\n\n.clear {\n  outline: none;\n  background: none;\n  border: none;\n  padding: 0;\n}\n\n.outline {\n  padding: 10px 15px;\n  border: 1px solid var(--primary-color);\n  color: var(--primary-color);\n  background: none;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Button:"src-shared-ui-Button-Button-module__Button--a4nOa",clear:"src-shared-ui-Button-Button-module__clear--FAEtI",outline:"src-shared-ui-Button-Button-module__outline--pxBl_"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/Sidebar/ui/Sidebar/Sidebar.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".src-widgets-Sidebar-ui-Sidebar-Sidebar-module__Sidebar--ld5FU{height:calc(100vh - var(--navbar-height));width:var(--sidebar-width);background-color:var(--inverted-bg-color);position:relative;transition:width .3s}.src-widgets-Sidebar-ui-Sidebar-Sidebar-module__collapsed--EudhC{width:var(--sidebar-width-collapsed)}.src-widgets-Sidebar-ui-Sidebar-Sidebar-module__switchers--QQRIw{width:100%;position:absolute;bottom:20px;display:flex;justify-content:center}.src-widgets-Sidebar-ui-Sidebar-Sidebar-module__lang--Cc0mZ{margin-left:20px}","",{version:3,sources:["webpack://./src/widgets/Sidebar/ui/Sidebar/Sidebar.module.scss"],names:[],mappings:"AAAA,+DACE,yCAAA,CACA,0BAAA,CACA,yCAAA,CACA,iBAAA,CACA,oBAAA,CAGF,iEACE,oCAAA,CAGF,iEACE,UAAA,CACA,iBAAA,CACA,WAAA,CACA,YAAA,CACA,sBAAA,CAGF,4DACE,gBAAA",sourcesContent:[".Sidebar {\n  height: calc(100vh - var(--navbar-height));\n  width: var(--sidebar-width);\n  background-color: var(--inverted-bg-color);\n  position: relative;\n  transition: width 0.3s;\n}\n\n.collapsed {\n  width: var(--sidebar-width-collapsed);\n}\n\n.switchers {\n  width: 100%;\n  position: absolute;\n  bottom: 20px;\n  display: flex;\n  justify-content: center;\n}\n\n.lang {\n  margin-left: 20px;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Sidebar:"src-widgets-Sidebar-ui-Sidebar-Sidebar-module__Sidebar--ld5FU",collapsed:"src-widgets-Sidebar-ui-Sidebar-Sidebar-module__collapsed--EudhC",switchers:"src-widgets-Sidebar-ui-Sidebar-Sidebar-module__switchers--QQRIw",lang:"src-widgets-Sidebar-ui-Sidebar-Sidebar-module__lang--Cc0mZ"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);