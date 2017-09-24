webpackJsonp([0],{

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPageModule", function() { return DetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail__ = __webpack_require__(273);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let DetailPageModule = class DetailPageModule {
};
DetailPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__detail__["a" /* DetailPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__detail__["a" /* DetailPage */]),
        ],
    })
], DetailPageModule);

//# sourceMappingURL=detail.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let DetailPage = class DetailPage {
    constructor(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.resultreadonly = true;
        this.result = "hidden";
        this.type = "add";
    }
    ionViewDidLoad() {
    }
    showResult() {
        this.result = "shown";
    }
    showInAnimation() {
        this.navCtrl.push('AnimationPage');
    }
};
DetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-detail',template:/*ion-inline-start:"/Users/fkhan/Desktop/MathApp/src/pages/detail/detail.html"*/'<!--\n  Generated template for the DetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header >\n\n  <ion-navbar color="primary">\n    <ion-title>Detail</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card >\n    \n      <ion-card-header style="font-size:large; background-color:#5C6F92" >\n        Adding Number\n      </ion-card-header>\n    \n      <ion-card-content>\n        <ion-list>\n          \n            <ion-item style="font-size:small">\n                <ion-input type="text" placeholder="First Number"></ion-input>\n            </ion-item>\n          \n            <ion-item style="font-size:small">\n                <ion-input type="text" placeholder="Second Number"></ion-input>\n            </ion-item>\n\n          </ion-list>\n\n          <div padding>\n           <button ion-button small (click)="showResult()" color="secondary" round>Calculate</button>\n          </div>\n      </ion-card-content>\n    \n    </ion-card>\n\n    <ion-card class="result" [@resultVisiable] = "result">\n      \n        <ion-card-header style="font-size:large" >\n          Result \n        </ion-card-header>\n      \n        <ion-card-content>\n          <ion-list>\n            \n              <ion-item style="font-size:small">\n                  <ion-input type="text" placeholder="First Number"></ion-input>\n              </ion-item>\n            \n              <ion-item style="font-size:small">\n                  <ion-input type="text" placeholder="Second Number"></ion-input>\n              </ion-item>\n  \n            </ion-list>\n            <div padding>\n                <button ion-button small (click)="showInAnimation()" color="secondary" round>Show In Detail</button>\n               </div>\n        </ion-card-content>\n      \n      </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/fkhan/Desktop/MathApp/src/pages/detail/detail.html"*/,
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* trigger */])('resultVisiable', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* state */])('shown', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* style */])({ opacity: 1, display: 'block', transform: 'translateX(0%)' })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* state */])('hidden', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* style */])({ opacity: 0, display: 'none', transform: 'translateX(800%)' })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* transition */])('* => *', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* animate */])('1s'))
            ]),
        ]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], DetailPage);

//# sourceMappingURL=detail.js.map

/***/ })

});
//# sourceMappingURL=0.js.map