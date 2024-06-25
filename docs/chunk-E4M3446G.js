import{a as E}from"./chunk-NR4KKSSU.js";import{$a as K,Aa as P,B as c,Ba as O,C as d,D,Da as F,Ea as W,F as i,Fa as Z,G as o,Ga as B,H as p,L as f,Pa as J,Q as s,Qa as Y,Ua as h,Va as U,W as z,Xa as v,Za as H,bb as Q,da as G,eb as X,fa as _,ha as R,i as j,m as V,n as C,o as I,pa as y,q as b,qa as l,r as w,ra as S,sa as x,ta as A,va as L,w as m,x as g,xa as M}from"./chunk-ITCRWGAV.js";function ae(n,t){n&1&&(i(0,"span",16),s(1," Username is required* "),o())}function se(n,t){n&1&&(i(0,"span",16),s(1," Username must be at least 3 characters "),o())}function me(n,t){n&1&&(i(0,"span",16),s(1," Password is required* "),o())}function de(n,t){n&1&&(i(0,"span",16),s(1," Password must be at least 5 characters "),o())}var ee=(()=>{let t=class t{constructor(a,r,e,u,T){this.authService=a,this.router=r,this.dataService=e,this.userService=u,this.toastService=T,this.isFormSubmitted=!1,this.passwordFieldType="password"}ngOnInit(){this.loginForm=new A({username:new L(null,[l.required,l.minLength(3)]),password:new L(null,[l.required,l.minLength(5)])}),this.setData()}setData(){this.dataService.getAllUser().subscribe(a=>{this.userService.Users.next(a)})}onSubmit(){if(this.isFormSubmitted=!0,this.loginForm.valid){let{username:a,password:r}=this.loginForm.value,e;e=this.authService.login(a,r),e.subscribe(u=>{let T=u.token;this.userService.setLoggedInUserId(a);let k=this.userService.getLoggedInUser();console.log(k),localStorage.setItem("loggedInUser",JSON.stringify(k)),this.authService.loggedIn.next(!0),this.router.navigate(["/home"])},u=>{this.toastService.showToast("error","Wrong Credential","Invalid username or password")})}}get username(){return this.loginForm.get("username")}get password(){return this.loginForm.get("password")}togglePasswordVisibility(){this.passwordFieldType=this.passwordFieldType==="password"?"text":"password"}};t.\u0275fac=function(r){return new(r||t)(g(E),g(h),g(H),g(Q),g(K))},t.\u0275cmp=b({type:t,selectors:[["app-login"]],decls:28,vars:8,consts:[[1,"fullLoginPage"],[1,"imageSectionloginPage"],["src","../../../assets/shopping-image.png"],[1,"LoginForm"],[1,"form-class"],[3,"ngSubmit","formGroup"],["type","text","name","username","placeholder","Username","formControlName","username","required",""],["class","text-danger",4,"ngIf"],[1,"password"],["placeholder","Password","formControlName","password","required","",3,"type"],[1,"toggle-password","fas",3,"click","ngClass"],[1,"button-group"],["type","submit",1,"btn",3,"disabled"],[1,"forgot"],[2,"color","var(--button-color)"],["routerLink","/sign-up",1,"signUp"],[1,"text-danger"]],template:function(r,e){r&1&&(p(0,"p-toast"),i(1,"div",0)(2,"div",1),p(3,"img",2),o(),i(4,"div",3)(5,"div",4)(6,"h2"),s(7,"Log in to SnapShop"),o(),i(8,"p"),s(9,"Enter your details below"),o(),i(10,"form",5),f("ngSubmit",function(){return e.onSubmit()}),p(11,"input",6),c(12,ae,2,0,"span",7)(13,se,2,0,"span",7),i(14,"div",8),p(15,"input",9),i(16,"i",10),f("click",function(){return e.togglePasswordVisibility()}),o()(),c(17,me,2,0,"span",7)(18,de,2,0,"span",7),i(19,"div",11)(20,"button",12),s(21," Log In "),o(),i(22,"div",13)(23,"p",14),s(24," Don't have account?"),i(25,"a",15)(26,"span"),s(27,"sign Up"),o()()()()()()()()()),r&2&&(m(10),d("formGroup",e.loginForm),m(2),d("ngIf",(e.username.touched||e.username.dirty)&&e.username.hasError("required")),m(),d("ngIf",(e.username.touched||e.username.dirty)&&e.username.hasError("minlength")),m(2),d("type",e.passwordFieldType),m(),d("ngClass",e.passwordFieldType==="password"?"ri-eye-off-line":"ri-eye-line"),m(),d("ngIf",(e.password.touched||e.password.dirty)&&e.password.hasError("required")),m(),d("ngIf",(e.password.touched||e.password.dirty)&&e.password.hasError("minlength")),m(2),d("disabled",!e.loginForm.valid))},dependencies:[G,_,U,M,y,S,x,F,P,O,J],styles:["[_ngcontent-%COMP%]:root{--button-color: #d74048;--button-color-hover: #a12c32}*[_ngcontent-%COMP%]{box-sizing:border-box;font-family:Trebuchet MS,sans-serif}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{height:100vh;width:100%}input.ng-invalid.ng-touched[_ngcontent-%COMP%]{border-bottom:2px solid #fa1e1e}.fullLoginPage[_ngcontent-%COMP%]{margin-top:150px;width:100%;display:flex;justify-content:space-around;align-items:center;flex-wrap:wrap}.imageSectionloginPage[_ngcontent-%COMP%]{height:100vh;width:55%}.imageSectionloginPage[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%}.LoginForm[_ngcontent-%COMP%]{height:80vh;width:35%;display:flex;flex-direction:column;justify-content:center;border:1px solid #ffffff;border-radius:5px;align-items:center}.form-class[_ngcontent-%COMP%]{height:60%;width:24em;background-color:#fff;padding:5px}.Login-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-top:0;font-size:25px;font-weight:700}.Login-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:5px;margin-bottom:15px;font-size:13px;font-weight:450}form[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:flex-start}input[type=text][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%], .text-danger[_ngcontent-%COMP%]{padding:10px 0;border:none;border-radius:0;outline:none;margin-bottom:12px;width:99%;transition:border-color .3s}input[type=text][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%]{padding:10px 0;border:none;border-bottom:2px solid #ccc;border-radius:0;outline:none;margin-bottom:12px;width:99%;transition:border-color .3s}input[type=text][_ngcontent-%COMP%]:focus, input[type=password][_ngcontent-%COMP%]:focus{border-bottom-color:#25b412}.button-group[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;justify-content:space-between;margin-top:15px}button[type=submit][_ngcontent-%COMP%]{height:3em;width:10em;background-color:#db4444;color:#fff;border:none;border-radius:3px;cursor:pointer}.button-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{scale:1.05;transition:.3s;background-color:var(--button-color)}.button-group[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin-top:10px;color:#db4444;text-decoration:none;margin-left:10px;font-size:15px}.button-group[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline}.forgot[_ngcontent-%COMP%]{margin-top:10px}.forgot[_ngcontent-%COMP%]   .signUp[_ngcontent-%COMP%]{font-weight:1000;text-decoration:underline}@media (max-width: 1059px){button[type=submit][_ngcontent-%COMP%]{width:100%}.button-group[_ngcontent-%COMP%]{flex-direction:column}}@media (max-width: 835px){.imageSectionloginPage[_ngcontent-%COMP%]{display:none}.LoginForm[_ngcontent-%COMP%]{width:100%;align-items:center}}@media (max-width: 400px){.LoginForm[_ngcontent-%COMP%]{width:90%}.LoginForm[_ngcontent-%COMP%]   .form-class[_ngcontent-%COMP%]{width:80%}}@media (max-width: 350px){.LoginForm[_ngcontent-%COMP%]   .form-class[_ngcontent-%COMP%]{width:100vw}}.password[_ngcontent-%COMP%]{position:relative;width:100%}.toggle-password[_ngcontent-%COMP%]{position:absolute;right:10px;top:50%;transform:translateY(-60%);cursor:pointer;color:#000}.toggle-password[_ngcontent-%COMP%]:hover{color:#000}.text-danger[_ngcontent-%COMP%]{text-align:left;width:100%;display:block}"]});let n=t;return n})();var pe=()=>["/login"];function le(n,t){n&1&&(i(0,"div",29)(1,"div",30),s(2," Form submitted successfully! "),o()())}function ce(n,t){n&1&&(i(0,"div",31),s(1," First Name is required! "),o())}function ge(n,t){n&1&&(i(0,"div",31),s(1," City is required! "),o())}function ue(n,t){n&1&&(i(0,"div",31),s(1," Zip Code is required! "),o())}function fe(n,t){n&1&&(i(0,"div",31),s(1," Valid email is required! "),o())}function he(n,t){n&1&&(i(0,"div",31),s(1," Username cannot contain spaces! "),o())}function ve(n,t){n&1&&(i(0,"div",31),s(1," Username is required! "),o())}function Ce(n,t){n&1&&(i(0,"div",31),s(1," Password must be at least 6 characters long! "),o())}function be(n,t){n&1&&(i(0,"div",31),s(1," Password and confirm password do not match! "),o())}var te=(()=>{let t=class t{constructor(a,r){this.fb=a,this.router=r,this.showConfirmationMessage=!1}ngOnInit(){this.signUpForm=this.fb.group({firstName:["",[l.required,this.noNumbersValidator]],lastName:[""],city:["",l.required],street:[""],geoLocation:[""],zipCode:["",l.required],email:["",[l.required,l.email]],username:["",[l.required,this.noWhitespaceValidator]],password:["",[l.required,l.minLength(6)]],confirmPassword:["",[l.required,l.minLength(6)]]},{validators:this.passwordMatchValidator})}onSubmit(){console.log("signUp form",this.signUpForm),this.signUpForm.valid&&(this.signUpForm.reset(),this.showConfirmationMessage=!0,setTimeout(()=>{this.showConfirmationMessage=!1,this.router.navigate(["/login"])},2e3))}passwordMatchValidator(a){let r=a.get("password"),e=a.get("confirmPassword");r.value!==e.value?e.setErrors({passwordMismatch:!0}):e.setErrors(null)}noWhitespaceValidator(a){return!((a.value||"").indexOf(" ")>=0)?null:{whitespace:!0}}noNumbersValidator(a){return/\d/.test(a.value)?{hasNumber:!0}:null}onClick(){this.showConfirmationMessage=!1}};t.\u0275fac=function(r){return new(r||t)(g(W),g(h))},t.\u0275cmp=b({type:t,selectors:[["app-sign-up"]],decls:50,vars:15,consts:[[1,"container","d-flex","flex-wrap",3,"click"],[1,"image-section","col-md-6","d-flex","justify-content-center","align-items-center","py-5"],["src","assets/shopping-image.png","alt","Sign Up"],["class","confirmation-overlay",4,"ngIf"],[1,"mt-4","form-section","col-md-6","card","border","shadow","p-4","rounded"],[1,"card-title","text-center","mb-4"],[1,"text-center","mb-4"],[3,"ngSubmit","formGroup"],[1,"row","g-3"],[1,"col-md-6"],["type","text","placeholder","First Name","formControlName","firstName","required","",1,"form-control"],["type","text","placeholder","Last Name","formControlName","lastName",1,"form-control"],["class","text-danger mt-2",4,"ngIf"],[1,"row","g-3","my-3"],["type","text","placeholder","City","formControlName","city","required","",1,"form-control"],["type","text","placeholder","Street","formControlName","street",1,"form-control"],[1,"row","g-3","mb-3"],["type","text","placeholder","Zip Code","formControlName","zipCode","required","",1,"form-control"],["type","text","placeholder","Geo location","formControlName","geoLocation",1,"form-control"],[1,"mb-3"],["type","email","placeholder","Email","formControlName","email","required","",1,"form-control"],["type","text","placeholder","User Name","formControlName","username","required","",1,"form-control"],["type","password","placeholder","Password","formControlName","password","required","",1,"form-control"],["type","password","placeholder","Confirm Password","formControlName","confirmPassword","required","",1,"form-control"],[1,"d-grid","gap-2"],["type","submit",1,"btn","btn-primary",3,"disabled"],[1,"bottom","text-center","mt-4"],[2,"color","var(--button-color)"],[2,"color","var(--button-color)",3,"routerLink"],[1,"confirmation-overlay"],["role","alert",1,"alert","alert-success"],[1,"text-danger","mt-2"]],template:function(r,e){r&1&&(i(0,"div",0),f("click",function(){return e.onClick()}),i(1,"div",1),p(2,"img",2),o(),c(3,le,3,0,"div",3),i(4,"div",4)(5,"h2",5),s(6,"Sign Up"),o(),i(7,"p",6),s(8,"Enter your details below"),o(),i(9,"form",7),f("ngSubmit",function(){return e.onSubmit()}),i(10,"div",8)(11,"div",9),p(12,"input",10),o(),i(13,"div",9),p(14,"input",11),o()(),c(15,ce,2,0,"div",12),i(16,"div",13)(17,"div",9),p(18,"input",14),o(),i(19,"div",9),p(20,"input",15),o()(),c(21,ge,2,0,"div",12),i(22,"div",16)(23,"div",9),p(24,"input",17),o(),i(25,"div",9),p(26,"input",18),o()(),c(27,ue,2,0,"div",12),i(28,"div",19),p(29,"input",20),c(30,fe,2,0,"div",12),o(),i(31,"div",19),p(32,"input",21),c(33,he,2,0,"div",12)(34,ve,2,0,"div",12),o(),i(35,"div",19),p(36,"input",22),c(37,Ce,2,0,"div",12),o(),i(38,"div",19),p(39,"input",23),c(40,be,2,0,"div",12),o(),i(41,"div",24)(42,"button",25),s(43," Sign Up "),o()()(),i(44,"div",26)(45,"p",27),s(46," Already have an account?"),i(47,"a",28)(48,"span"),s(49,"Log In"),o()()()()()()),r&2&&(m(3),d("ngIf",e.showConfirmationMessage),m(),D("blurred",e.showConfirmationMessage),m(5),d("formGroup",e.signUpForm),m(6),d("ngIf",e.signUpForm.get("firstName").invalid&&e.signUpForm.get("firstName").touched),m(6),d("ngIf",e.signUpForm.get("city").invalid&&e.signUpForm.get("city").touched),m(6),d("ngIf",e.signUpForm.get("zipCode").invalid&&e.signUpForm.get("zipCode").touched),m(3),d("ngIf",e.signUpForm.get("email").invalid&&e.signUpForm.get("email").touched),m(3),d("ngIf",e.signUpForm.get("username").hasError("whitespace")&&e.signUpForm.get("username").touched),m(),d("ngIf",e.signUpForm.get("username").invalid&&e.signUpForm.get("username").touched&&e.signUpForm.get("username").hasError("required")),m(3),d("ngIf",e.signUpForm.get("password").invalid&&e.signUpForm.get("password").touched),m(3),d("ngIf",e.signUpForm.get("confirmPassword").hasError("passwordMismatch")),m(2),d("disabled",e.signUpForm.invalid),m(5),d("routerLink",z(14,pe)))},dependencies:[_,U,M,y,S,x,F,P,O],styles:["input.ng-invalid.ng-touched[_ngcontent-%COMP%]{border-bottom:2px solid red!important}.form-text[_ngcontent-%COMP%]{color:red}.image-section[_ngcontent-%COMP%]{width:50%}.image-section[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:95%!important;height:70vh}.container[_ngcontent-%COMP%]{justify-content:space-around!important}.confirmation-overlay[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100vh;background:#fffc;display:flex;justify-content:center;align-items:center;z-index:10}.form-section[_ngcontent-%COMP%]{box-shadow:none!important;border:none!important}input[type=text][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%], input[type=email][_ngcontent-%COMP%]{border:none!important;border-bottom:2px solid #ccc!important;border-radius:0!important;box-shadow:none!important;padding:10px 0}.btn-primary[_ngcontent-%COMP%]{background-color:var(--button-color);border:none;box-shadow:none;height:45px;border-radius:3px}button.btn[_ngcontent-%COMP%]:active{background-color:transparent!important}.btn-primary[_ngcontent-%COMP%]:hover{scale:1.01;transition:.3s;background-color:var(--button-color-hover);box-shadow:none}.bottom[_ngcontent-%COMP%]{color:#887a7a}.bottom[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-weight:700;text-decoration:underline;padding:2px}.bottom[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--button-color);scale:1.02;transition:.3s}"]});let n=t;return n})();var q=(()=>{let t=class t{constructor(a,r){this.authService=a,this.router=r}canActivate(a,r){return this.authService.loggedIn.pipe(j(e=>e?this.router.parseUrl("/home"):!0))}};t.\u0275fac=function(r){return new(r||t)(I(E),I(h))},t.\u0275prov=V({token:t,factory:t.\u0275fac,providedIn:"root"});let n=t;return n})();var we=[{path:"login",component:ee,canActivate:[q]},{path:"sign-up",component:te,canActivate:[q]}],ne=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=w({type:t}),t.\u0275inj=C({imports:[v.forChild(we),v]});let n=t;return n})();var Be=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=w({type:t}),t.\u0275inj=C({imports:[R,v,B,Z,Y,X,ne]});let n=t;return n})();export{Be as a};
