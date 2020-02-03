(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["experience-experience-module"],{

/***/ "./src/app/app-pipes/app-pipes.module.ts":
/*!***********************************************!*\
  !*** ./src/app/app-pipes/app-pipes.module.ts ***!
  \***********************************************/
/*! exports provided: AppPipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppPipesModule", function() { return AppPipesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _safe_url_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./safe-url.pipe */ "./src/app/app-pipes/safe-url.pipe.ts");




var AppPipesModule = /** @class */ (function () {
    function AppPipesModule() {
    }
    AppPipesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_safe_url_pipe__WEBPACK_IMPORTED_MODULE_3__["SafeUrlPipe"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [_safe_url_pipe__WEBPACK_IMPORTED_MODULE_3__["SafeUrlPipe"]]
        })
    ], AppPipesModule);
    return AppPipesModule;
}());



/***/ }),

/***/ "./src/app/app-pipes/safe-url.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/app-pipes/safe-url.pipe.ts ***!
  \********************************************/
/*! exports provided: SafeUrlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeUrlPipe", function() { return SafeUrlPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var SafeUrlPipe = /** @class */ (function () {
    function SafeUrlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafeUrlPipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafeUrlPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'safeUrl'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], SafeUrlPipe);
    return SafeUrlPipe;
}());



/***/ }),

/***/ "./src/app/experience/experience-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/experience/experience-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ExperienceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceRoutingModule", function() { return ExperienceRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _work_work_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./work/work.component */ "./src/app/experience/work/work.component.ts");
/* harmony import */ var _speaking_speaking_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./speaking/speaking.component */ "./src/app/experience/speaking/speaking.component.ts");





var routes = [
    { path: '', redirectTo: 'work', pathMatch: 'full' },
    { path: 'work', component: _work_work_component__WEBPACK_IMPORTED_MODULE_3__["WorkComponent"] },
    { path: 'speaking', component: _speaking_speaking_component__WEBPACK_IMPORTED_MODULE_4__["SpeakingComponent"] }
];
var ExperienceRoutingModule = /** @class */ (function () {
    function ExperienceRoutingModule() {
    }
    ExperienceRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ExperienceRoutingModule);
    return ExperienceRoutingModule;
}());



/***/ }),

/***/ "./src/app/experience/experience.component.css":
/*!*****************************************************!*\
  !*** ./src/app/experience/experience.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/experience/experience.component.html":
/*!******************************************************!*\
  !*** ./src/app/experience/experience.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"experiences-container\">\n    <h2>Experience</h2>\n</div>\n"

/***/ }),

/***/ "./src/app/experience/experience.component.ts":
/*!****************************************************!*\
  !*** ./src/app/experience/experience.component.ts ***!
  \****************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _experience_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./experience.service */ "./src/app/experience/experience.service.ts");



var ExperienceComponent = /** @class */ (function () {
    function ExperienceComponent(experienceService) {
        this.experienceService = experienceService;
    }
    ExperienceComponent.prototype.ngOnInit = function () {
    };
    ExperienceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-experience',
            template: __webpack_require__(/*! ./experience.component.html */ "./src/app/experience/experience.component.html"),
            styles: [__webpack_require__(/*! ./experience.component.css */ "./src/app/experience/experience.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_experience_service__WEBPACK_IMPORTED_MODULE_2__["ExperienceService"]])
    ], ExperienceComponent);
    return ExperienceComponent;
}());



/***/ }),

/***/ "./src/app/experience/experience.module.ts":
/*!*************************************************!*\
  !*** ./src/app/experience/experience.module.ts ***!
  \*************************************************/
/*! exports provided: ExperienceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceModule", function() { return ExperienceModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _experience_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./experience-routing.module */ "./src/app/experience/experience-routing.module.ts");
/* harmony import */ var _experience_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./experience.component */ "./src/app/experience/experience.component.ts");
/* harmony import */ var _work_work_template_work_template_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./work/work-template/work-template.component */ "./src/app/experience/work/work-template/work-template.component.ts");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/fesm5/clr-angular.js");
/* harmony import */ var _speaking_speaking_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./speaking/speaking.component */ "./src/app/experience/speaking/speaking.component.ts");
/* harmony import */ var _work_work_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./work/work.component */ "./src/app/experience/work/work.component.ts");
/* harmony import */ var _speaking_speak_template_speak_template_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./speaking/speak-template/speak-template.component */ "./src/app/experience/speaking/speak-template/speak-template.component.ts");
/* harmony import */ var _app_pipes_app_pipes_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../app-pipes/app-pipes.module */ "./src/app/app-pipes/app-pipes.module.ts");











var ExperienceModule = /** @class */ (function () {
    function ExperienceModule() {
    }
    ExperienceModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_experience_component__WEBPACK_IMPORTED_MODULE_4__["ExperienceComponent"], _work_work_template_work_template_component__WEBPACK_IMPORTED_MODULE_5__["WorkTemplateComponent"], _speaking_speaking_component__WEBPACK_IMPORTED_MODULE_7__["SpeakingComponent"], _work_work_component__WEBPACK_IMPORTED_MODULE_8__["WorkComponent"], _speaking_speak_template_speak_template_component__WEBPACK_IMPORTED_MODULE_9__["SpeakTemplateComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _experience_routing_module__WEBPACK_IMPORTED_MODULE_3__["ExperienceRoutingModule"],
                _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrIconModule"],
                _app_pipes_app_pipes_module__WEBPACK_IMPORTED_MODULE_10__["AppPipesModule"]
            ]
        })
    ], ExperienceModule);
    return ExperienceModule;
}());



/***/ }),

/***/ "./src/app/experience/experience.service.ts":
/*!**************************************************!*\
  !*** ./src/app/experience/experience.service.ts ***!
  \**************************************************/
/*! exports provided: ExperienceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceService", function() { return ExperienceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ExperienceService = /** @class */ (function () {
    function ExperienceService() {
    }
    ExperienceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExperienceService);
    return ExperienceService;
}());



/***/ }),

/***/ "./src/app/experience/speaking/speak-template/speak-template.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/experience/speaking/speak-template/speak-template.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".org-org-location {\n    margin-left: 1%;\n}\n\n.p4-font-style {\n    color: #565656;\n    font-weight: 600;\n    font-size: 12px;\n}\n\n.custom-title {\n    display: flex;\n}\n\n.title-left {\n    flex-grow: 1;\n}\n\n.title-right {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    text-align: center;\n    max-width: 37%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwZXJpZW5jZS9zcGVha2luZy9zcGVhay10ZW1wbGF0ZS9zcGVhay10ZW1wbGF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9leHBlcmllbmNlL3NwZWFraW5nL3NwZWFrLXRlbXBsYXRlL3NwZWFrLXRlbXBsYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3JnLW9yZy1sb2NhdGlvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDElO1xufVxuXG4ucDQtZm9udC1zdHlsZSB7XG4gICAgY29sb3I6ICM1NjU2NTY7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbi5jdXN0b20tdGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi50aXRsZS1sZWZ0IHtcbiAgICBmbGV4LWdyb3c6IDE7XG59XG5cbi50aXRsZS1yaWdodCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXgtd2lkdGg6IDM3JTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/experience/speaking/speak-template/speak-template.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/experience/speaking/speak-template/speak-template.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"clr-row\" *ngIf=\"experience\">\n  <div class=\"clr-col-lg-8 clr-col-md-12 clr-col-12\">\n    <div class=\"card\">\n      <div class=\"card-header custom-title\">\n        <span class=\"title-left\">\n          <div>\n            {{experience.topic}}\n            <span *ngIf=\"experience.links\">\n              <a href=\"{{link}}\" target=\"_blank\" *ngFor=\"let link of experience.links\">\n                <clr-icon shape=\"pop-out\"></clr-icon>\n              </a>\n            </span>\n          </div>\n          <div>\n            <span class=\"p7\">at</span>\n            <span class=\"org-org-location p2\">{{experience.organiser}}, {{experience.location}}</span>\n          </div>\n          <div *ngIf=\"experience.durationInHours\">\n              <span class=\"p7\">Duration: </span>\n              <span class=\"value-fields p2\">\n                  <span *ngIf=\"((experience.durationInHours * 60) - ((experience.durationInHours * 60) % 60)) / 60 >= 1\">\n                    {{((experience.durationInHours * 60) - ((experience.durationInHours * 60) % 60)) / 60}} hrs </span>\n                  <span *ngIf=\"((experience.durationInHours * 60) % 60) >= 1\">{{(experience.durationInHours * 60) % 60}} mins</span>\n              </span>\n            </div>\n        </span>\n        <span class=\"title-right p4-font-style\">\n          <div>\n            {{experience.date | date: 'dd MMM yyyy' || experience.date}}\n          </div>\n        </span>\n      </div>\n      <div class=\"card-block\" *ngIf=\"experience.youtubeVideo\">\n        <iframe class=\"clr-col-lg-8 clr-col-md-12 clr-col-12\" width=\"560\" height=\"315\" [src]=\"experience.youtubeVideo.link | safeUrl\" frameborder=\"0\"\n          allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen\n          *ngIf=\"experience.youtubeVideo.link\">\n        </iframe>\n      </div>\n      <div class=\"card-block\" *ngIf=\"experience.keyPoints && experience.keyPoints.length > 0\">\n        <div class=\"card-text\">\n          <ul>\n            <li *ngFor=\"let keyPoint of experience.keyPoints\">{{keyPoint}}</li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"card-footer\" *ngIf=\"experience.slidesDeck\">\n        <span class=\"p2\">Slides Deck:</span>\n        <a href=\"{{experience.slidesDeck}}\" target=\"_blank\">\n          {{experience.slidesDeck.substring(experience.slidesDeck.lastIndexOf('/')+1)}}\n          <clr-icon shape=\"pop-out\"></clr-icon>\n        </a>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/experience/speaking/speak-template/speak-template.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/experience/speaking/speak-template/speak-template.component.ts ***!
  \********************************************************************************/
/*! exports provided: SpeakTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeakTemplateComponent", function() { return SpeakTemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _speaking_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../speaking.service */ "./src/app/experience/speaking/speaking.service.ts");



var SpeakTemplateComponent = /** @class */ (function () {
    function SpeakTemplateComponent(speakService) {
        this.speakService = speakService;
    }
    SpeakTemplateComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpeakTemplateComponent.prototype, "experience", void 0);
    SpeakTemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-speak-template',
            template: __webpack_require__(/*! ./speak-template.component.html */ "./src/app/experience/speaking/speak-template/speak-template.component.html"),
            styles: [__webpack_require__(/*! ./speak-template.component.css */ "./src/app/experience/speaking/speak-template/speak-template.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_speaking_service__WEBPACK_IMPORTED_MODULE_2__["SpeakingService"]])
    ], SpeakTemplateComponent);
    return SpeakTemplateComponent;
}());



/***/ }),

/***/ "./src/app/experience/speaking/speaking.component.css":
/*!************************************************************!*\
  !*** ./src/app/experience/speaking/speaking.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4cGVyaWVuY2Uvc3BlYWtpbmcvc3BlYWtpbmcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/experience/speaking/speaking.component.html":
/*!*************************************************************!*\
  !*** ./src/app/experience/speaking/speaking.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"experiences-container\">\n    <h2>Speaking Experience</h2>\n    <div class=\"individual-experience\" *ngFor=\"let experience of speakingExperiences\">\n        <app-speak-template [experience]=experience></app-speak-template>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/experience/speaking/speaking.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/experience/speaking/speaking.component.ts ***!
  \***********************************************************/
/*! exports provided: SpeakingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeakingComponent", function() { return SpeakingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _speaking_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./speaking.service */ "./src/app/experience/speaking/speaking.service.ts");



var SpeakingComponent = /** @class */ (function () {
    function SpeakingComponent(speakService) {
        this.speakService = speakService;
    }
    SpeakingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.speakService.getSpeakingExperiences()
            .subscribe(function (experiences) { return _this.speakingExperiences = experiences; }, function (error) { return console.log(error); });
    };
    SpeakingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-speaking',
            template: __webpack_require__(/*! ./speaking.component.html */ "./src/app/experience/speaking/speaking.component.html"),
            styles: [__webpack_require__(/*! ./speaking.component.css */ "./src/app/experience/speaking/speaking.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_speaking_service__WEBPACK_IMPORTED_MODULE_2__["SpeakingService"]])
    ], SpeakingComponent);
    return SpeakingComponent;
}());



/***/ }),

/***/ "./src/app/experience/speaking/speaking.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/experience/speaking/speaking.service.ts ***!
  \*********************************************************/
/*! exports provided: SpeakingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeakingService", function() { return SpeakingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var SpeakingService = /** @class */ (function () {
    function SpeakingService(httpClient) {
        this.httpClient = httpClient;
        this.speakingExperiencesUrl = '/assets/speaking-experiences.json';
    }
    SpeakingService.prototype.getSpeakingExperiences = function () {
        return this.httpClient.get(this.speakingExperiencesUrl);
    };
    SpeakingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SpeakingService);
    return SpeakingService;
}());



/***/ }),

/***/ "./src/app/experience/work/work-template/work-template.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/experience/work/work-template/work-template.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".org-org-location {\n    margin-left: 1%;\n}\n\n.p4-font-style {\n    color: #565656;\n    font-weight: 600;\n    font-size: 12px;\n}\n\n.org-logo {\n    padding-right: 1%;\n    max-width: 100%;\n}\n\n.custom-title {\n    display: flex;\n}\n\n.title-left {\n    flex-grow: 1;\n}\n\n.title-right {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    text-align: center;\n    max-width: 37%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwZXJpZW5jZS93b3JrL3dvcmstdGVtcGxhdGUvd29yay10ZW1wbGF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2V4cGVyaWVuY2Uvd29yay93b3JrLXRlbXBsYXRlL3dvcmstdGVtcGxhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vcmctb3JnLWxvY2F0aW9uIHtcbiAgICBtYXJnaW4tbGVmdDogMSU7XG59XG5cbi5wNC1mb250LXN0eWxlIHtcbiAgICBjb2xvcjogIzU2NTY1NjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLm9yZy1sb2dvIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxJTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5jdXN0b20tdGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi50aXRsZS1sZWZ0IHtcbiAgICBmbGV4LWdyb3c6IDE7XG59XG5cbi50aXRsZS1yaWdodCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXgtd2lkdGg6IDM3JTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/experience/work/work-template/work-template.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/experience/work/work-template/work-template.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"clr-row\">\n  <div class=\"clr-col-lg-8 clr-col-md-12 clr-col-12\">\n\n    <div class=\"card\">\n      <div class=\"card-header custom-title\">\n        <span class=\"title-left\">\n          <div>{{experience.role}}</div>\n          <div>\n            <span class=\"p7\">at</span>\n            <span class=\"org-org-location p2\">{{experience.org}}, {{experience.location}}</span>\n          </div>\n        </span>\n        <span class=\"title-right p4-font-style\">\n          <div>\n            <img src=\"{{experience.orgLogo?.url}}\" class=\"org-logo\" alt=\"{{experience.org}}\"\n              width={{experience.orgLogo?.width}} height={{experience.orgLogo?.height}}>\n          </div>\n          <div>\n            {{experience.startDate | date: 'MMM yyyy' || experience.startDate}}\n            -\n            {{(experience.endDate | date: 'MMM yyyy') || \"Present\"}}\n          </div>\n        </span>\n      </div>\n      <div class=\"card-block\">\n        <div class=\"card-text\">\n          <ul>\n            <li *ngFor=\"let keyPoint of experience.keyPoints\">{{keyPoint}}</li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"card-block\" *ngIf=\"experience.techs\">\n        <span class=\"p2\"> Technologies: <br /></span>\n        <span class=\"label\" *ngFor=\"let tech of experience.techs\">{{tech}}</span>\n      </div>\n      <div class=\"card-footer\" *ngIf=\"experience.achievements\">\n        <span class=\"p2\">Achievement<span *ngIf=\"experience.achievements?.length > 1\">s</span>:</span>\n        <ul>\n          <li *ngFor=\"let achievement of experience.achievements\">\n            {{achievement.description}}\n            <a href=\"{{link}}\" target=\"_blank\" *ngFor=\"let link of achievement.links\">\n              <clr-icon shape=\"pop-out\"></clr-icon>\n            </a>\n          </li>\n        </ul>\n        <!-- <button class=\"btn btn-sm btn-link\">Action</button> -->\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/experience/work/work-template/work-template.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/experience/work/work-template/work-template.component.ts ***!
  \**************************************************************************/
/*! exports provided: WorkTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkTemplateComponent", function() { return WorkTemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WorkTemplateComponent = /** @class */ (function () {
    function WorkTemplateComponent() {
    }
    WorkTemplateComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WorkTemplateComponent.prototype, "experience", void 0);
    WorkTemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-work-template',
            template: __webpack_require__(/*! ./work-template.component.html */ "./src/app/experience/work/work-template/work-template.component.html"),
            styles: [__webpack_require__(/*! ./work-template.component.css */ "./src/app/experience/work/work-template/work-template.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WorkTemplateComponent);
    return WorkTemplateComponent;
}());



/***/ }),

/***/ "./src/app/experience/work/work.component.css":
/*!****************************************************!*\
  !*** ./src/app/experience/work/work.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4cGVyaWVuY2Uvd29yay93b3JrLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/experience/work/work.component.html":
/*!*****************************************************!*\
  !*** ./src/app/experience/work/work.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"experiences-container\">\n    <h2>Work Experience</h2>\n    <div class=\"individual-experience\" *ngFor=\"let experience of experiences\">\n        <app-work-template [experience]=experience></app-work-template>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/experience/work/work.component.ts":
/*!***************************************************!*\
  !*** ./src/app/experience/work/work.component.ts ***!
  \***************************************************/
/*! exports provided: WorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkComponent", function() { return WorkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _work_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./work.service */ "./src/app/experience/work/work.service.ts");



var WorkComponent = /** @class */ (function () {
    function WorkComponent(workService) {
        this.workService = workService;
    }
    WorkComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.workService.getExperiences()
            .subscribe(function (experiences) { return _this.experiences = experiences; }, function (error) { return console.log(error); });
    };
    WorkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-work',
            template: __webpack_require__(/*! ./work.component.html */ "./src/app/experience/work/work.component.html"),
            styles: [__webpack_require__(/*! ./work.component.css */ "./src/app/experience/work/work.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_work_service__WEBPACK_IMPORTED_MODULE_2__["WorkService"]])
    ], WorkComponent);
    return WorkComponent;
}());



/***/ }),

/***/ "./src/app/experience/work/work.service.ts":
/*!*************************************************!*\
  !*** ./src/app/experience/work/work.service.ts ***!
  \*************************************************/
/*! exports provided: WorkService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkService", function() { return WorkService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var WorkService = /** @class */ (function () {
    function WorkService(httpClient) {
        this.httpClient = httpClient;
        this.experiencesUrl = '/assets/experiences.json';
    }
    WorkService.prototype.getExperiences = function () {
        return this.httpClient.get(this.experiencesUrl);
    };
    WorkService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], WorkService);
    return WorkService;
}());



/***/ })

}]);
//# sourceMappingURL=experience-experience-module.js.map