webpackJsonp([0,3],{165:function(t,e,n){"use strict";var o=n(0),r=n(359);n.d(e,"a",function(){return s});var a=this&&this.__decorate||function(t,e,n,o){var r,a=arguments.length,i=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(i=(a<3?r(i):a>3?r(e,n,i):r(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(t){var e=this;this.af=t,this.user={},this.auth=this.af.auth,this.auth.subscribe(function(t){t?e.user=t:e.user={}})}return t.prototype.signUp=function(t,e){var n={email:t,password:e};this.af.auth.createUser(n)},t.prototype.login=function(t,e){var n=this,o={email:t,password:e},r=new Promise(function(t,e){n.auth.login(o).then(function(e){t(e)})});return r},t.prototype.logout=function(){return this.auth.signOut()},t=a([n.i(o.c)(),i("design:paramtypes",["function"==typeof(e="undefined"!=typeof r.d&&r.d)&&e||Object])],t);var e}()},356:function(t,e,n){"use strict";var o=n(0),r=n(165),a=n(163),i=n(70);n.d(e,"a",function(){return l});var s=this&&this.__decorate||function(t,e,n,o){var r,a=arguments.length,i=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(i=(a<3?r(i):a>3?r(e,n,i):r(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},c=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},l=function(){function t(t,e,n){this.userService=t,this.router=e,this.fb=n,this.loginForm=this.fb.group({email:["",i.d.required],password:["",i.d.required]})}return t.prototype.ngOnInit=function(){},t.prototype.doLogin=function(t){var e=this,n=(this.loginForm.value,this.loginForm.controls.email.value),o=this.loginForm.controls.password.value;console.log(n),console.log(o),this.userService.login(n,o).then(function(t){console.log(t),t&&e.router.navigateByUrl("/")})},t=s([n.i(o.i)({selector:"app-login",template:n(793),styles:[n(787)],providers:[r.a]}),c("design:paramtypes",["function"==typeof(e="undefined"!=typeof r.a&&r.a)&&e||Object,"function"==typeof(l="undefined"!=typeof a.b&&a.b)&&l||Object,"function"==typeof(f="undefined"!=typeof i.c&&i.c)&&f||Object])],t);var e,l,f}()},437:function(t,e){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=437},438:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=(n(563),n(525)),r=n(0),a=n(562),i=n(557);a.a.production&&n.i(r.a)(),n.i(o.a)().bootstrapModule(i.a)},555:function(t,e,n){"use strict";var o=n(0),r=n(163),a=n(560),i=n(356);n.d(e,"b",function(){return f}),n.d(e,"a",function(){return u});var s=this&&this.__decorate||function(t,e,n,o){var r,a=arguments.length,i=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(i=(a<3?r(i):a>3?r(e,n,i):r(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},c=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},l=[{path:"",redirectTo:"/games",pathMatch:"full"},{path:"login",component:i.a},{path:"games",component:a.a}],f=function(){function t(){}return t=s([n.i(o.b)({imports:[r.a.forRoot(l)],exports:[r.a]}),c("design:paramtypes",[])],t)}(),u=[a.a]},556:function(t,e,n){"use strict";var o=n(0);n.d(e,"a",function(){return i});var r=this&&this.__decorate||function(t,e,n,o){var r,a=arguments.length,i=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(i=(a<3?r(i):a>3?r(e,n,i):r(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},i=function(){function t(){this.title="app works!"}return t=r([n.i(o.i)({selector:"app-root",template:n(789),styles:[n(783)]}),a("design:paramtypes",[])],t)}()},557:function(t,e,n){"use strict";var o=n(161),r=n(0),a=n(70),i=n(521),s=n(555),c=n(758),l=n(359),f=n(556),u=n(559),p=n(558),d=n(356),m=n(561),h=n(165);n.d(e,"a",function(){return g});var y=this&&this.__decorate||function(t,e,n,o){var r,a=arguments.length,i=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(i=(a<3?r(i):a>3?r(e,n,i):r(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},b=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},v={apiKey:"AIzaSyDmdH3T0_6BUhWI63FUAXCPe90yZFLPdio",authDomain:"gameweekend-874b4.firebaseapp.com",databaseURL:"https://gameweekend-874b4.firebaseio.com",storageBucket:"gameweekend-874b4.appspot.com",messagingSenderId:"1046121003920"},g=function(){function t(){}return t=y([n.i(r.b)({declarations:[f.a,u.a,p.a,s.a,d.a,m.a],imports:[o.a,a.a,s.b,a.b,i.a,c.a.forRoot(),l.a.initializeApp(v,{provider:l.b.Password,method:l.c.Password})],providers:[h.a],bootstrap:[f.a]}),b("design:paramtypes",[])],t)}()},558:function(t,e,n){"use strict";var o=n(0);n.d(e,"a",function(){return i});var r=this&&this.__decorate||function(t,e,n,o){var r,a=arguments.length,i=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(i=(a<3?r(i):a>3?r(e,n,i):r(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},i=function(){function t(){}return t.prototype.ngOnInit=function(){},t=r([n.i(o.i)({selector:"app-footer",template:n(790),styles:[n(784)]}),a("design:paramtypes",[])],t)}()},559:function(t,e,n){"use strict";var o=n(0),r=n(165),a=n(163);n.d(e,"a",function(){return c});var i=this&&this.__decorate||function(t,e,n,o){var r,a=arguments.length,i=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(i=(a<3?r(i):a>3?r(e,n,i):r(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t,e){this.userService=t,this.router=e}return t.prototype.ngOnInit=function(){},t.prototype.logout=function(){var t=this;this.userService.logout().subscribe(function(){t.router.navigateByUrl("/")})},t=i([n.i(o.i)({selector:"app-header",template:n(791),styles:[n(785)]}),s("design:paramtypes",["function"==typeof(e="undefined"!=typeof r.a&&r.a)&&e||Object,"function"==typeof(c="undefined"!=typeof a.b&&a.b)&&c||Object])],t);var e,c}()},560:function(t,e,n){"use strict";var o=n(0);n.d(e,"a",function(){return i});var r=this&&this.__decorate||function(t,e,n,o){var r,a=arguments.length,i=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(i=(a<3?r(i):a>3?r(e,n,i):r(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},i=function(){function t(){}return t.prototype.ngOnInit=function(){},t=r([n.i(o.i)({selector:"app-games",template:n(792),styles:[n(786)]}),a("design:paramtypes",[])],t)}()},561:function(t,e,n){"use strict";var o=n(0),r=n(165),a=n(163),i=n(70);n.d(e,"a",function(){return l});var s=this&&this.__decorate||function(t,e,n,o){var r,a=arguments.length,i=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(i=(a<3?r(i):a>3?r(e,n,i):r(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},c=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},l=function(){function t(t,e,n){this.userService=t,this.router=e,this.fb=n}return t.prototype.ngOnInit=function(){},t.prototype.register=function(t,e){console.log(t+" "+e),this.userService.signUp(t,e)},t=s([n.i(o.i)({selector:"app-registration",template:n(794),styles:[n(788)],providers:[r.a]}),c("design:paramtypes",["function"==typeof(e="undefined"!=typeof r.a&&r.a)&&e||Object,"function"==typeof(l="undefined"!=typeof a.b&&a.b)&&l||Object,"function"==typeof(f="undefined"!=typeof i.c&&i.c)&&f||Object])],t);var e,l,f}()},562:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var o={production:!0}},563:function(t,e,n){"use strict";var o=n(586),r=(n.n(o),n(579)),a=(n.n(r),n(575)),i=(n.n(a),n(581)),s=(n.n(i),n(580)),c=(n.n(s),n(578)),l=(n.n(c),n(577)),f=(n.n(l),n(585)),u=(n.n(f),n(574)),p=(n.n(u),n(573)),d=(n.n(p),n(583)),m=(n.n(d),n(576)),h=(n.n(m),n(584)),y=(n.n(h),n(582)),b=(n.n(y),n(587)),v=(n.n(b),n(845));n.n(v)},783:function(t,e){t.exports=""},784:function(t,e){t.exports=""},785:function(t,e){t.exports=""},786:function(t,e){t.exports=""},787:function(t,e){t.exports=""},788:function(t,e){t.exports=""},789:function(t,e){t.exports='<app-header></app-header>\n<div class ="container">\n  <router-outlet></router-outlet>\n</div>\n<app-footer></app-footer>\n'},790:function(t,e){t.exports=""},791:function(t,e){t.exports='<div class="slds-context-bar">\n  <div class="slds-context-bar__primary slds-context-bar__item--divider-right">\n    <div class="slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger--click slds-no-hover">\n      <div class="slds-context-bar__icon-action">\n        <a href="javascript:void(0);" class="slds-icon-waffle_container slds-context-bar__button">\n          <div class="slds-icon-waffle">\n            <div class="slds-r1"></div>\n            <div class="slds-r2"></div>\n            <div class="slds-r3"></div>\n            <div class="slds-r4"></div>\n            <div class="slds-r5"></div>\n            <div class="slds-r6"></div>\n            <div class="slds-r7"></div>\n            <div class="slds-r8"></div>\n            <div class="slds-r9"></div>\n          </div>\n          <span class="slds-assistive-text">Open App Launcher</span>\n        </a>\n         </div>\n      <span class="slds-context-bar__label-action slds-context-bar__app-name">\n        <span class="slds-truncate" title="{ props.appName || &#x27;Game weekend&#x27; }">Game weekend</span>\n      </span>\n    </div>\n  </div>\n  <nav class="slds-context-bar__secondary" role="navigation">\n    <ul class="slds-grid">\n      <li class="slds-context-bar__item">\n        <a href="javascript:void(0);" class="slds-context-bar__label-action" title="Home">\n          <span class="slds-truncate">Home</span>\n        </a>\n      </li>\n      <li class="slds-context-bar__item">\n        <a [routerLink]="[\'/login\']" class="slds-context-bar__label-action" title="Login">\n          <span class="slds-truncate">Login</span>\n        </a>\n      </li>  \n      <li class="slds-context-bar__item">\n        <a [routerLink]="[\'/registration\']" class="slds-context-bar__label-action" title="Registration">\n          <span class="slds-truncate">Registration</span>\n        </a>\n      </li>  \n      <li class="slds-context-bar__item">\n        <a class="slds-context-bar__label-action" title="user email">\n          <span class="slds-truncate"> user.email</span>\n        </a>\n      </li>  \n      <li class="slds-context-bar__item">\n        <a class="slds-context-bar__label-action" title="Logout" (click)="logout()">\n          <span class="slds-truncate">Logout</span>\n        </a>\n      </li>    \n    </ul>\n  </nav>\n</div>'},792:function(t,e){t.exports="<p>\n  games works!\n</p>\n"},793:function(t,e){t.exports='<form [formGroup]="loginForm" (ngSubmit)="doLogin($event)">\n  <ngl-form-element label="email" [error]="hasError ? error : null" class="slds-m-top--small">\n  <input nglFormControl formControlName="email" type="email" placeholder="Your email" [required]="required">\n</ngl-form-element>\n<ngl-form-element label="password" [error]="hasError ? error : null" class="slds-m-top--small">\n  <input nglFormControl formControlName="password" type="password" placeholder="Your password" [required]="required">\n</ngl-form-element>\n\n  <button type="submit" nglButton="neutral">Log in</button>\n</form>'},794:function(t,e){t.exports=""},846:function(t,e,n){t.exports=n(438)}},[846]);