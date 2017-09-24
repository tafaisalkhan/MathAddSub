webpackJsonp([1],{

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationPageModule", function() { return AnimationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animation__ = __webpack_require__(272);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let AnimationPageModule = class AnimationPageModule {
};
AnimationPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__animation__["a" /* AnimationPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__animation__["a" /* AnimationPage */]),
        ],
    })
], AnimationPageModule);

//# sourceMappingURL=animation.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_game_game__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_media__ = __webpack_require__(102);
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
 * Generated class for the GamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let AnimationPage = class AnimationPage {
    constructor(navCtrl, navParams, gameProvider, media) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.gameProvider = gameProvider;
        this.media = media;
        this.tableRow = [];
        this.tableCell = [];
        this.heightTrigger = "noHeight";
        this.marker = "";
    }
    ionViewDidLoad() {
        this.cells = document.querySelectorAll('.cell');
        //console.log(this.cells);
        this.startAimation();
    }
    reStartAnimation() {
        this.tableRow = [];
        this.tableCell = [];
    }
    first() {
        this.marker = 'firTerm';
    }
    sec() {
        this.marker = 'secTerm';
    }
    third() {
        this.marker = 'thiTerm';
    }
    four() {
        this.marker = 'secTerm1';
    }
    startAimation() {
        this.tableRow.push(0);
        this.tableRow.push(1);
        //his.tableRow.push(2);
        //this.tableRow.push(3);
        this.tableCell.push(0);
        this.tableCell.push(1);
        this.tableCell.push(2);
        this.tableCell.push(3);
        for (var i = 0; i < this.cells.length; i++) {
            this.cells[i].innerText = '';
            this.cells[i].style.removeProperty('background-color');
        }
        setTimeout(() => {
            this.heightTrigger = "fullHeight";
            document.getElementById("3").innerText = "1";
            document.getElementById("2").innerText = "2";
            document.getElementById("1").innerText = "3";
            document.getElementById("4").innerText = "1";
            document.getElementById("5").innerText = "1";
            document.getElementById("6").innerText = "1";
        }, 1000);
    }
    listAnimationDone(event) {
        console.log(event);
        if (event.toState == 4) {
            document.getElementById("6").innerText = "2";
            this.sildeOut = "out";
        }
        //
    }
};
AnimationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-game',template:/*ion-inline-start:"/Users/fkhan/Desktop/MathApp/src/pages/animation/animation.html"*/'<!--\n  Generated template for the GamePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n		<ion-navbar color="primary">\n				<ion-title>Answer In Step</ion-title>\n			</ion-navbar>\n		\n	</ion-header>\n\n<ion-content padding style="background-color: ivory;">\n\n\n\n\n<ion-card>\n \n  \n\n		<ion-card-content style="text-align: -webkit-center">\n        <div [@moveMarker]="marker" class="mark">\n           \n          </div> \n <!-- <table [@explainerAnim]= "!loading" (@explainerAnim.done) = "explainerAnimDone($event)" (@explainerAnim.start) = "explainerAnimStarted($event)">-->\n    <table class="firstTable">\n        <tr >\n          <td  id="0">\n            <div></div>\n          </td>\n          <td  id="car1"></td>\n          <td  id="car2"></td>\n          <td  id="car3"></td>\n        </tr>\n     </table>   \n\n  <table class="middleTable" [@listAnimation]="tableRow.length" (@listAnimation.done) = "listAnimationDone($event)" >\n		<tr	*ngFor="let row of tableRow; let rowIndex = index  " [@listAnimationCell]="tableCell.length">\n				<td	 class="cell" *ngFor="let cell of tableCell; let  cellIndex = index;  " (click)="turnClick(rowIndex == 0 ? cell : rowIndex == 1 ? cell + rowIndex + 2  : cell + 6, $event) " >\n            <div *ngIf="(rowIndex == 0 ? cell : rowIndex == 1 ? cell + rowIndex + 2  : cell + 6) == 3 && rowIndex == 1  " > +</div>\n          <div   id="{{rowIndex == 0 ? cell : rowIndex == 1 ? cell + rowIndex + 2  : rowIndex == 0 ? cell + 6 : cell + 9}}"> \n             \n          </div>\n					</td>\n					\n\n		</tr>\n		\n  </table>\n\n<table class="lastTable">\n    <tr >\n      <td  id="0">\n        <div></div>\n      </td>\n      <td  id="res1"></td>\n      <td  id="res2"></td>\n      <td  id="res3"></td>\n    </tr>\n </table>   \n\n <button ion-button (click)="first()" >First</button>\n <button ion-button (click)="sec()">Second</button>\n <button ion-button (click)="third()">Third</button>\n <button ion-button (click)="four()">Four</button>\n\n<!--\n<table>\n		<tr >\n			<td  id="0">\n        <div></div>\n      </td>\n			<td  id="1"></td>\n      <td  id="2"></td>\n      <td  id="3"></td>\n		</tr>\n		<tr>\n			<td  id="4"></td>\n			<td  id="5">\n          <div [@heightTrigger]="heightTrigger">\n              4\n            </div>\n      </td>\n      <td  id="6">\n          <div  [@heightTrigger]="heightTrigger">\n              6\n            </div>\n      </td>\n      <td  id="7">\n          <div  [@heightTrigger]="heightTrigger">\n              7\n            </div>\n      </td>\n		</tr>\n		<tr>\n			<td  id="8">\n        +\n      </td>\n			<td  id="9">\n          <div  [@heightTrigger]="heightTrigger">\n              4\n            </div>\n      </td>\n      <td  id="10">\n          <div  [@heightTrigger]="heightTrigger">\n              4\n            </div>\n      </td>\n      <td  id="11">\n          <div  [@heightTrigger]="heightTrigger">\n              4\n            </div>\n      </td>\n    </tr>\n    <tr>\n        <td  id="12"> </td>\n        <td  id="13">  <div>\n            4\n          </div></td>\n        <td  id="14">  <div>\n            4\n          </div></td>\n        <td  id="15">  <div>\n              4\n            </div></td>\n      </tr>\n	</table>\n-->\n	\n</ion-card-content>\n</ion-card>\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/fkhan/Desktop/MathApp/src/pages/animation/animation.html"*/,
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* trigger */])('heightTrigger', [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* state */])('noHeight', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* style */])({
                    height: 0
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* state */])('fullHeight', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* style */])({
                    height: '*'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* transition */])('noHeight <=> fullHeight', [Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('3s')]),
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* trigger */])('listAnimation', [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* transition */])('* => *', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* style */])({ opacity: 0 }), { optional: true }),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* stagger */])('300ms', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('1s ease-in', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* keyframes */])([
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* style */])({ opacity: 0, transform: 'translateX(-75%)', offset: 0 }),
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* style */])({ opacity: .5, transform: 'translateX(35px)', offset: 0.3 }),
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* style */])({ opacity: 1, transform: 'translateX(0)', offset: 1.0 }),
                        ]))
                    ]), { optional: true }),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* query */])(':leave', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* stagger */])('300ms', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('1s ease-in', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* keyframes */])([
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* style */])({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* style */])({ opacity: .5, transform: 'translateX(35px)', offset: 0.3 }),
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* style */])({ opacity: 0, transform: 'translateX(-75%)', offset: 1.0 }),
                        ]))
                    ]), { optional: true })
                ])
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* trigger */])('listAnimationCell', [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* transition */])('* => *', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* style */])({ opacity: 0 }), { optional: true }),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* stagger */])('300ms', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('1s ease-in', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* keyframes */])([
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* style */])({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* style */])({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* style */])({ opacity: 1, transform: 'translateY(0)', offset: 1.0 }),
                        ]))
                    ]), { optional: true }),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* query */])(':leave', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* stagger */])('300ms', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('1s ease-in', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* keyframes */])([
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* style */])({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* style */])({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* style */])({ opacity: 0, transform: 'translateY(-75%)', offset: 1.0 }),
                        ]))
                    ]), { optional: true })
                ])
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* trigger */])('visibilityGameOver', [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* state */])('shown', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* style */])({ opacity: 1, display: 'block', transform: 'translateY(0%)' })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* state */])('hidden', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* style */])({ opacity: 1, display: 'none', transform: 'translateY(-800%)' })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* transition */])('* => *', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('1s'))
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* trigger */])('slideInOut', [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* style */])({ opacity: 1, display: 'block', transform: 'translateY(0%)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* state */])('out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* style */])({
                    opacity: 1, display: 'none', transform: 'translateY(-800%)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* transition */])('in => out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('400ms ease-in-out')),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* transition */])('out => in', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('400ms ease-in-out'))
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* trigger */])('moveMarker', [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* state */])('firTerm', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* style */])({ opacity: 1, display: 'block', height: '57%', transform: 'translateX(15%)' })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* state */])('secTerm1', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* style */])({ opacity: 1, display: 'block', height: '57%', transform: 'translateX(-105%)' })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* state */])('secTerm', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* style */])({ opacity: 1, display: 'block', top: '45px', height: '76%', transform: 'translateX(-105%)' })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* state */])('thiTerm1', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* style */])({ opacity: 1, display: 'block', top: '45px', height: '76%', transform: 'translateX(-230%)' })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* state */])('thiTerm', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* style */])({ opacity: 1, display: 'block', height: '57%', transform: 'translateX(-230%)' })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* transition */])('* => *', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('1s'))
            ]),
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_game_game__["a" /* GameProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_game_game__["a" /* GameProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_media__["a" /* Media */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_media__["a" /* Media */]) === "function" && _d || Object])
], AnimationPage);

var _a, _b, _c, _d;
//# sourceMappingURL=animation.js.map

/***/ })

});
//# sourceMappingURL=1.js.map