(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1231:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _home_travis_build_noelyoo_learn_scilla_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(320),_home_travis_build_noelyoo_learn_scilla_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_home_travis_build_noelyoo_learn_scilla_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__),_home_travis_build_noelyoo_learn_scilla_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(19),_home_travis_build_noelyoo_learn_scilla_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(20),_home_travis_build_noelyoo_learn_scilla_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(23),_home_travis_build_noelyoo_learn_scilla_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(21),_home_travis_build_noelyoo_learn_scilla_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(22),_home_travis_build_noelyoo_learn_scilla_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(160),react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__),react_redux__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(326),react_helmet__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(323),redux__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(161),react_i18next__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(325),react_redux_firebase__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(327),_components_header__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(324),_components_footer__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(162),_components_spinner__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(127),_routes__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(37),_components_button__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__(7),__awaiter=function(thisArg,_arguments,P,generator){return new(P||(P=Promise))(function(resolve,reject){function fulfilled(value){try{step(generator.next(value))}catch(e){reject(e)}}function rejected(value){try{step(generator.throw(value))}catch(e){reject(e)}}function step(result){result.done?resolve(result.value):new P(function(resolve){resolve(result.value)}).then(fulfilled,rejected)}step((generator=generator.apply(thisArg,_arguments||[])).next())})},AccountContainer=function(_React$Component){function AccountContainer(){var _this;return Object(_home_travis_build_noelyoo_learn_scilla_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.a)(this,AccountContainer),(_this=Object(_home_travis_build_noelyoo_learn_scilla_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.a)(this,Object(_home_travis_build_noelyoo_learn_scilla_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.a)(AccountContainer).apply(this,arguments))).deleteAccount=function(){var providerId=_this.props.firebase.auth().currentUser.providerData[0].providerId;"github.com"===providerId?_this.deleteGitHubAccount():"google.com"===providerId?_this.deleteGoogleAccount():alert("Auth Provider Not Found")},_this.deleteGitHubAccount=function(){return __awaiter(Object(_home_travis_build_noelyoo_learn_scilla_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__.a)(Object(_home_travis_build_noelyoo_learn_scilla_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__.a)(_this)),void 0,void 0,_home_travis_build_noelyoo_learn_scilla_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(){var firebase,provider,result,credential,accessToken,userCredential;return _home_travis_build_noelyoo_learn_scilla_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function(_context){for(;;)switch(_context.prev=_context.next){case 0:return firebase=this.props.firebase,provider=new firebase.auth.GithubAuthProvider,_context.prev=2,_context.next=5,firebase.auth().signInWithPopup(provider);case 5:return result=_context.sent,credential=result.credential,accessToken=credential.accessToken,userCredential=firebase.auth.GithubAuthProvider.credential(accessToken),_context.abrupt("return",this.deleteWithCredential(userCredential));case 12:_context.prev=12,_context.t0=_context.catch(2),console.log(_context.t0);case 15:case"end":return _context.stop()}},_callee,this,[[2,12]])}))},_this.deleteGoogleAccount=function(){return __awaiter(Object(_home_travis_build_noelyoo_learn_scilla_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__.a)(Object(_home_travis_build_noelyoo_learn_scilla_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__.a)(_this)),void 0,void 0,_home_travis_build_noelyoo_learn_scilla_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(){var firebase,provider,result,credential,idToken,userCredential;return _home_travis_build_noelyoo_learn_scilla_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:return firebase=this.props.firebase,provider=new firebase.auth.GoogleAuthProvider,_context2.prev=2,_context2.next=5,firebase.auth().signInWithPopup(provider);case 5:return result=_context2.sent,credential=result.credential,idToken=credential.idToken,userCredential=firebase.auth.GoogleAuthProvider.credential(idToken),_context2.abrupt("return",this.deleteWithCredential(userCredential));case 12:_context2.prev=12,_context2.t0=_context2.catch(2),console.log(_context2.t0);case 15:case"end":return _context2.stop()}},_callee2,this,[[2,12]])}))},_this.deleteWithCredential=function(credential){return __awaiter(Object(_home_travis_build_noelyoo_learn_scilla_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__.a)(Object(_home_travis_build_noelyoo_learn_scilla_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__.a)(_this)),void 0,void 0,_home_travis_build_noelyoo_learn_scilla_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(){var _this$props,firebase,history,user;return _home_travis_build_noelyoo_learn_scilla_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function(_context3){for(;;)switch(_context3.prev=_context3.next){case 0:return _this$props=this.props,firebase=_this$props.firebase,history=_this$props.history,user=firebase.auth().currentUser,_context3.prev=2,_context3.next=5,user.reauthenticateAndRetrieveDataWithCredential(credential);case 5:return _context3.next=7,user.delete();case 7:return alert("Your account has been deleted"),_context3.abrupt("return",history.push(_routes__WEBPACK_IMPORTED_MODULE_16__.a.chapterList));case 11:_context3.prev=11,_context3.t0=_context3.catch(2),console.log(_context3.t0),alert(_context3.t0.message);case 15:case"end":return _context3.stop()}},_callee3,this,[[2,11]])}))},_this}return Object(_home_travis_build_noelyoo_learn_scilla_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__.a)(AccountContainer,_React$Component),Object(_home_travis_build_noelyoo_learn_scilla_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.a)(AccountContainer,[{key:"render",value:function(){var _this$props2=this.props,auth=_this$props2.auth,t=_this$props2.t,displayName=auth.displayName,email=auth.email,createdAt=auth.createdAt,isLoaded=auth.isLoaded;return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_13__.a,null),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_9__.Helmet,null,react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("title",null,"LearnScilla - Account")),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{className:"container"},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{className:"row py-5"},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{className:"col-sm-10 col-md-8 col-lg-5 mr-auto ml-auto text-center"},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{className:"card card-body border-secondary"},isLoaded?react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{className:"py-5 text-secondary"},void 0===displayName?null:react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p",null,displayName),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p",null,email),void 0===createdAt?null:react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p",null,"Since ",new Date(parseInt(createdAt,10)).toLocaleDateString()),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_button__WEBPACK_IMPORTED_MODULE_17__.a,{type:"secondary",size:"sm",text:t("account.deleteAccount"),onClick:this.deleteAccount,ariaLabel:"Delete Account"})):react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_spinner__WEBPACK_IMPORTED_MODULE_15__.a,null))))),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_footer__WEBPACK_IMPORTED_MODULE_14__.a,null))}}]),AccountContainer}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component),WithTranslation=Object(react_i18next__WEBPACK_IMPORTED_MODULE_11__.withNamespaces)()(AccountContainer);__webpack_exports__.default=Object(redux__WEBPACK_IMPORTED_MODULE_10__.compose)(react_redux_firebase__WEBPACK_IMPORTED_MODULE_12__.withFirebase,Object(react_redux__WEBPACK_IMPORTED_MODULE_8__.connect)(function(state){return{auth:state.firebase.auth}},void 0))(WithTranslation)}}]);
//# sourceMappingURL=4.76d3ca0754f21fe924fe.bundle.js.map