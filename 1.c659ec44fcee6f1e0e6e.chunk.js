webpackJsonp([1],{"+sTZ":function(n,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var r=e("TToO"),i=e("2Je8"),t=e("NVOs"),a=e("3j3K"),l=e("5oXY"),c=(function(){function Login(){}return Login=r.a([Object(a.Component)({selector:"login",styles:[e("e/Pz")],template:e("W30T"),encapsulation:a.ViewEncapsulation.None,host:{class:"login-page app"}}),r.c("design:paramtypes",[])],Login)})();e.d(o,"routes",(function(){return d})),e.d(o,"LoginModule",(function(){return s}));var d=[{path:"",component:c,pathMatch:"full"}],s=(function(){function LoginModule(){}return LoginModule.routes=d,LoginModule=r.a([Object(a.NgModule)({declarations:[c],imports:[i.CommonModule,t.FormsModule,l.g.forChild(d)]})],LoginModule)})()},W30T:function(n,o){n.exports='<div class="container">\r\n  <main id="content" class="widget-login-container" role="main">\r\n    <div class="row justify-content-center">\r\n      <div class="col-xl-4 col-md-6 col-10">\r\n        <h5 class="widget-login-logo animated fadeInUp">\r\n          <i class="fa fa-circle text-gray"></i>\r\n          sing\r\n          <i class="fa fa-circle text-warning"></i>\r\n        </h5>\r\n        <section class="widget widget-login animated fadeInUp">\r\n          <header>\r\n            <h3>Login to your Sing App</h3>\r\n          </header>\r\n          <div class="widget-body">\r\n            <p class="widget-login-info">\r\n              Use Facebook, Twitter or your email to sign in.\r\n            </p>\r\n            <p class="widget-login-info">\r\n              Don\'t have an account? Sign up now!\r\n            </p>\r\n            <form class="login-form mt-lg">\r\n              <div class="form-group">\r\n                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Username">\r\n              </div>\r\n              <div class="form-group">\r\n                <input class="form-control" id="pswd" type="text" placeholder="Password">\r\n              </div>\r\n              <div class="clearfix">\r\n                <div class="btn-toolbar float-right m-t-1">\r\n                  <button type="button" class="btn btn-default btn-sm">Create an Account</button>\r\n                  <a class="btn btn-inverse btn-sm" [routerLink]="[\'/app\', \'dashboard\'] ">Login</a>\r\n                </div>\r\n              </div>\r\n              <div class="row m-t-1">\r\n                <div class="col-md-6 order-md-2">\r\n                  <div class="clearfix">\r\n                    <div class="form-check abc-checkbox widget-login-info float-right pl-0">\r\n                      <input class="form-check-input" type="checkbox" id="checkbox1" value="1">\r\n                      <label class="form-check-label" for="checkbox1">Keep me signed in </label>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class="col-md-6 order-md-1">\r\n                  <a class="mr-n-lg" href="#">Trouble with account?</a>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </section>\r\n      </div>\r\n    </div>\r\n  </main>\r\n  <footer class="page-footer">\r\n    2017 &copy; Sing. Admin Dashboard Template.\r\n  </footer>\r\n</div>\r\n'},"e/Pz":function(n,o){n.exports=".login-page{background-color:#ddd}.login-page .page-footer{margin-bottom:25px;font-size:.9rem;color:#868e96;text-align:center}@media (min-height: 600px){.login-page .page-footer{position:fixed;bottom:0;left:0;right:0}}.widget-login-container{padding-top:10%}.widget-login-logo{margin-top:15px;margin-bottom:15px;text-align:center;font-weight:400}.widget-login-logo .fa-circle{font-size:13px;margin:0 20px}.widget-login{padding:30px}.widget-login>header h1,.widget-login>header h2,.widget-login>header h3,.widget-login>header h4,.widget-login>header h5,.widget-login>header h6{font-weight:400;text-align:center}.widget-login-info{font-size:.9rem;color:#888;margin-top:1px;margin-bottom:0;text-align:center}.login-form .form-control{font-size:.9rem;border:none;background-color:#eee}.login-form .form-control:focus{background-color:#868e96}\n"}});