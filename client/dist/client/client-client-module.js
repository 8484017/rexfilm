(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["client-client-module"],{

/***/ "../models/film.model.ts":
/*!*******************************!*\
  !*** ../models/film.model.ts ***!
  \*******************************/
/*! exports provided: Film, FilmType, Genres */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Film", function() { return Film; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmType", function() { return FilmType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Genres", function() { return Genres; });
var Film = /** @class */ (function () {
    function Film() {
        this._id = null;
        this.isPublic = false;
        this.poster = null;
        this.poster_thumb = null;
        this.name = null;
        this.alternateName = null;
        this.description = null;
        this.type = null;
        this.year = null;
        this.slogan = null;
        this.counrty = [];
        this.regisers = [];
        this.scenarists = [];
        this.produsers = [];
        this.operators = [];
        this.compositors = [];
        this.hudognik = [];
        this.montag = [];
        this.genre = [];
        this.time = null;
        this.kp = null;
        this.timespan = Date.now();
        this.actors = [];
        this.features = [];
        this.count = 0;
    }
    return Film;
}());

var FilmType = /** @class */ (function () {
    function FilmType() {
    }
    FilmType.film = "фильм";
    FilmType.serial = "сериал";
    return FilmType;
}());

var Genres = [
    'аниме',
    'биография',
    'боевик',
    'вестерн',
    'военный',
    'детектив',
    'детский',
    'драма',
    'история',
    'комедия',
    'криминал',
    'мелодрама',
    'музыка',
    'мультфильм',
    'мюзикл',
    'приключения',
    'семейный',
    'спорт',
    'триллер',
    'ужасы',
    'фантастика',
    'фэнтези'
];


/***/ }),

/***/ "../models/film.view.ts":
/*!******************************!*\
  !*** ../models/film.view.ts ***!
  \******************************/
/*! exports provided: FilmView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmView", function() { return FilmView; });
var FilmView = /** @class */ (function () {
    function FilmView() {
    }
    return FilmView;
}());



/***/ }),

/***/ "../models/films.model.ts":
/*!********************************!*\
  !*** ../models/films.model.ts ***!
  \********************************/
/*! exports provided: Films, IndexFilms, Pagination, FilmFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Films", function() { return Films; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexFilms", function() { return IndexFilms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pagination", function() { return Pagination; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmFilter", function() { return FilmFilter; });
/* harmony import */ var _film_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./film.model */ "../models/film.model.ts");

var Films = /** @class */ (function () {
    function Films() {
        this.films = [];
    }
    return Films;
}());

var IndexFilms = /** @class */ (function () {
    function IndexFilms() {
        this.newFilms = [];
        this.newSerials = [];
        this.randomFilms = [];
        this.popularFilms = [];
        this.popularSerials = [];
    }
    return IndexFilms;
}());

var Pagination = /** @class */ (function () {
    function Pagination() {
        this.itemsPerPage = 10;
        this.currentPage = 1;
    }
    return Pagination;
}());

var FilmFilter = /** @class */ (function () {
    function FilmFilter() {
        this.genre = [];
        this.page = 1;
        this.sortBy = "timespan" /* date */;
        this.type = _film_model__WEBPACK_IMPORTED_MODULE_0__["FilmType"].film;
    }
    return FilmFilter;
}());



/***/ }),

/***/ "../models/name.model.ts":
/*!*******************************!*\
  !*** ../models/name.model.ts ***!
  \*******************************/
/*! exports provided: Name, NameFilms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Name", function() { return Name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NameFilms", function() { return NameFilms; });
var Name = /** @class */ (function () {
    function Name() {
        this._id = null;
        this.name = null;
        this.alternateName = null;
        this.poster = null;
        this.poster_thumb = null;
    }
    return Name;
}());

var NameFilms = /** @class */ (function () {
    function NameFilms() {
    }
    return NameFilms;
}());



/***/ }),

/***/ "./node_modules/@ngu/carousel/index.js":
/*!*********************************************!*\
  !*** ./node_modules/@ngu/carousel/index.js ***!
  \*********************************************/
/*! exports provided: NguCarouselModule, NguCarousel, NguCarouselStore, NguCarouselService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_ngu_carousel_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/ngu-carousel.module */ "./node_modules/@ngu/carousel/src/ngu-carousel.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NguCarouselModule", function() { return _src_ngu_carousel_module__WEBPACK_IMPORTED_MODULE_0__["NguCarouselModule"]; });

/* harmony import */ var _src_ngu_carousel_ngu_carousel_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/ngu-carousel/ngu-carousel.interface */ "./node_modules/@ngu/carousel/src/ngu-carousel/ngu-carousel.interface.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NguCarousel", function() { return _src_ngu_carousel_ngu_carousel_interface__WEBPACK_IMPORTED_MODULE_1__["NguCarousel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NguCarouselStore", function() { return _src_ngu_carousel_ngu_carousel_interface__WEBPACK_IMPORTED_MODULE_1__["NguCarouselStore"]; });

/* harmony import */ var _src_ngu_carousel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/ngu-carousel.service */ "./node_modules/@ngu/carousel/src/ngu-carousel.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NguCarouselService", function() { return _src_ngu_carousel_service__WEBPACK_IMPORTED_MODULE_2__["NguCarouselService"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@ngu/carousel/src/ngu-carousel.directive.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ngu/carousel/src/ngu-carousel.directive.js ***!
  \******************************************************************/
/*! exports provided: NguCarouselItemDirective, NguCarouselNextDirective, NguCarouselPrevDirective, NguCarouselPointDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NguCarouselItemDirective", function() { return NguCarouselItemDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NguCarouselNextDirective", function() { return NguCarouselNextDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NguCarouselPrevDirective", function() { return NguCarouselPrevDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NguCarouselPointDirective", function() { return NguCarouselPointDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var NguCarouselItemDirective = /** @class */ (function () {
    function NguCarouselItemDirective() {
    }
    NguCarouselItemDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    // tslint:disable-next-line:directive-selector
                    selector: '[NguCarouselItem]'
                },] },
    ];
    /** @nocollapse */
    NguCarouselItemDirective.ctorParameters = function () { return []; };
    return NguCarouselItemDirective;
}());

var NguCarouselNextDirective = /** @class */ (function () {
    function NguCarouselNextDirective() {
    }
    NguCarouselNextDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    // tslint:disable-next-line:directive-selector
                    selector: '[NguCarouselNext]'
                },] },
    ];
    /** @nocollapse */
    NguCarouselNextDirective.ctorParameters = function () { return []; };
    return NguCarouselNextDirective;
}());

var NguCarouselPrevDirective = /** @class */ (function () {
    function NguCarouselPrevDirective() {
    }
    NguCarouselPrevDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    // tslint:disable-next-line:directive-selector
                    selector: '[NguCarouselPrev]'
                },] },
    ];
    /** @nocollapse */
    NguCarouselPrevDirective.ctorParameters = function () { return []; };
    return NguCarouselPrevDirective;
}());

var NguCarouselPointDirective = /** @class */ (function () {
    function NguCarouselPointDirective() {
    }
    NguCarouselPointDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    // tslint:disable-next-line:directive-selector
                    selector: '[NguCarouselPoint]'
                },] },
    ];
    /** @nocollapse */
    NguCarouselPointDirective.ctorParameters = function () { return []; };
    return NguCarouselPointDirective;
}());

//# sourceMappingURL=ngu-carousel.directive.js.map

/***/ }),

/***/ "./node_modules/@ngu/carousel/src/ngu-carousel.module.js":
/*!***************************************************************!*\
  !*** ./node_modules/@ngu/carousel/src/ngu-carousel.module.js ***!
  \***************************************************************/
/*! exports provided: NguCarouselModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NguCarouselModule", function() { return NguCarouselModule; });
/* harmony import */ var _ngu_carousel_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ngu-carousel.directive */ "./node_modules/@ngu/carousel/src/ngu-carousel.directive.js");
/* harmony import */ var _ngu_item_ngu_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ngu-item/ngu-item.component */ "./node_modules/@ngu/carousel/src/ngu-item/ngu-item.component.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngu_carousel_ngu_carousel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ngu-carousel/ngu-carousel.component */ "./node_modules/@ngu/carousel/src/ngu-carousel/ngu-carousel.component.js");
/* harmony import */ var _ngu_tile_ngu_tile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ngu-tile/ngu-tile.component */ "./node_modules/@ngu/carousel/src/ngu-tile/ngu-tile.component.js");
/* harmony import */ var _ngu_carousel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ngu-carousel.service */ "./node_modules/@ngu/carousel/src/ngu-carousel.service.js");







var NguCarouselModule = /** @class */ (function () {
    function NguCarouselModule() {
    }
    NguCarouselModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
                    exports: [
                        _ngu_carousel_ngu_carousel_component__WEBPACK_IMPORTED_MODULE_4__["NguCarouselComponent"],
                        _ngu_item_ngu_item_component__WEBPACK_IMPORTED_MODULE_1__["NguItemComponent"],
                        _ngu_tile_ngu_tile_component__WEBPACK_IMPORTED_MODULE_5__["NguTileComponent"],
                        _ngu_carousel_directive__WEBPACK_IMPORTED_MODULE_0__["NguCarouselPointDirective"],
                        _ngu_carousel_directive__WEBPACK_IMPORTED_MODULE_0__["NguCarouselItemDirective"],
                        _ngu_carousel_directive__WEBPACK_IMPORTED_MODULE_0__["NguCarouselNextDirective"],
                        _ngu_carousel_directive__WEBPACK_IMPORTED_MODULE_0__["NguCarouselPrevDirective"]
                    ],
                    declarations: [
                        _ngu_carousel_ngu_carousel_component__WEBPACK_IMPORTED_MODULE_4__["NguCarouselComponent"],
                        _ngu_item_ngu_item_component__WEBPACK_IMPORTED_MODULE_1__["NguItemComponent"],
                        _ngu_tile_ngu_tile_component__WEBPACK_IMPORTED_MODULE_5__["NguTileComponent"],
                        _ngu_carousel_directive__WEBPACK_IMPORTED_MODULE_0__["NguCarouselPointDirective"],
                        _ngu_carousel_directive__WEBPACK_IMPORTED_MODULE_0__["NguCarouselItemDirective"],
                        _ngu_carousel_directive__WEBPACK_IMPORTED_MODULE_0__["NguCarouselNextDirective"],
                        _ngu_carousel_directive__WEBPACK_IMPORTED_MODULE_0__["NguCarouselPrevDirective"]
                    ],
                    providers: [_ngu_carousel_service__WEBPACK_IMPORTED_MODULE_6__["NguCarouselService"]]
                },] },
    ];
    /** @nocollapse */
    NguCarouselModule.ctorParameters = function () { return []; };
    return NguCarouselModule;
}());

//# sourceMappingURL=ngu-carousel.module.js.map

/***/ }),

/***/ "./node_modules/@ngu/carousel/src/ngu-carousel.service.js":
/*!****************************************************************!*\
  !*** ./node_modules/@ngu/carousel/src/ngu-carousel.service.js ***!
  \****************************************************************/
/*! exports provided: NguCarouselService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NguCarouselService", function() { return NguCarouselService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");


var NguCarouselService = /** @class */ (function () {
    function NguCarouselService() {
        this.getData = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    NguCarouselService.prototype.reset = function (token) {
        this.getData.next({ id: token, ref: 'reset' });
    };
    NguCarouselService.prototype.moveToSlide = function (token, index, animate) {
        this.getData.next({
            id: token,
            ref: 'moveToSlide',
            index: index,
            animation: animate
        });
    };
    NguCarouselService.prototype.destroy = function (token) {
        this.getData.next({ id: token, ref: 'destroy' });
    };
    NguCarouselService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    NguCarouselService.ctorParameters = function () { return []; };
    return NguCarouselService;
}());

//# sourceMappingURL=ngu-carousel.service.js.map

/***/ }),

/***/ "./node_modules/@ngu/carousel/src/ngu-carousel/ngu-carousel.component.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@ngu/carousel/src/ngu-carousel/ngu-carousel.component.js ***!
  \*******************************************************************************/
/*! exports provided: NguCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NguCarouselComponent", function() { return NguCarouselComponent; });
/* harmony import */ var _ngu_carousel_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../ngu-carousel.directive */ "./node_modules/@ngu/carousel/src/ngu-carousel.directive.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngu_carousel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../ngu-carousel.service */ "./node_modules/@ngu/carousel/src/ngu-carousel.service.js");




var NguCarouselComponent = /** @class */ (function () {
    function NguCarouselComponent(el, renderer, carouselSer, platformId) {
        this.el = el;
        this.renderer = renderer;
        this.carouselSer = carouselSer;
        this.platformId = platformId;
        this.carouselLoad = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // tslint:disable-next-line:no-output-on-prefix
        this.onMove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.initData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.pauseCarousel = false;
        this.Arr1 = Array;
        this.pointNumbers = [];
        this.data = {
            type: 'fixed',
            token: '',
            deviceType: 'lg',
            items: 0,
            load: 0,
            deviceWidth: 0,
            carouselWidth: 0,
            itemWidth: 0,
            visibleItems: { start: 0, end: 0 },
            slideItems: 0,
            itemWidthPer: 0,
            itemLength: 0,
            currentSlide: 0,
            easing: 'cubic-bezier(0, 0, 0.2, 1)',
            speed: 400,
            transform: { xs: 0, sm: 0, md: 0, lg: 0, all: 0 },
            loop: false,
            dexVal: 0,
            touchTransform: 0,
            touch: { active: false, swipe: '', velocity: 0 },
            isEnd: false,
            isFirst: true,
            isLast: false,
            RTL: false,
            button: { visibility: 'disabled' },
            point: true,
            vertical: { enabled: false, height: 400 }
        };
    }
    NguCarouselComponent.prototype.ngOnChanges = function (changes) { };
    NguCarouselComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.carousel = this.el.nativeElement;
        this.carouselMain = this.carouselMain1.nativeElement;
        this.carouselInner = this.carouselInner1.nativeElement;
        this.rightBtn = this.next.nativeElement;
        this.leftBtn = this.prev.nativeElement;
        this.data.type = this.userData.grid.all !== 0 ? 'fixed' : 'responsive';
        this.data.loop = this.userData.loop || false;
        this.userData.easing = this.userData.easing || 'cubic-bezier(0, 0, 0.2, 1)';
        this.data.touch.active = this.userData.touch || false;
        this.data.RTL = this.userData.RTL ? true : false;
        if (this.userData.vertical && this.userData.vertical.enabled) {
            this.data.vertical.enabled = this.userData.vertical.enabled;
            this.data.vertical.height = this.userData.vertical.height;
        }
        this.directionSym = this.data.RTL ? '' : '-';
        this.data.point =
            this.userData.point && typeof this.userData.point.visible !== 'undefined'
                ? this.userData.point.visible
                : true;
        this.withAnim = true;
        this.carouselSize();
        // const datas = this.itemsElements.first.nativeElement.getBoundingClientRect().width;
        this.carouselSerSub = this.carouselSer.getData.subscribe(function (res) {
            if (res.id === _this.data.token) {
                if (res.ref === 'moveToSlide') {
                    if (_this.pointers !== res.index && res.index < _this.pointIndex) {
                        _this.withAnim = res.animation === false ? false : true;
                        _this.moveTo(res.index);
                    }
                }
                else if (res.ref === 'reset') {
                    if (_this.pointers !== 0 && 0 < _this.pointIndex) {
                        _this.withAnim = false;
                        _this.reset();
                    }
                }
            }
        });
    };
    NguCarouselComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.listener1 = this.renderer.listen(this.leftBtn, 'click', function () {
            return _this.carouselScrollOne(0);
        });
        this.listener2 = this.renderer.listen(this.rightBtn, 'click', function () {
            return _this.carouselScrollOne(1);
        });
        this.carouselCssNode = this.createStyleElem();
        this.storeCarouselData();
        this.buttonControl();
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
            this.carouselInterval();
            this.onWindowScrolling();
            if (!this.data.vertical.enabled) {
                this.touch();
            }
            this.listener3 = this.renderer.listen('window', 'resize', function (event) {
                _this.onResizing(event);
            });
        }
        this.items.changes.subscribe(function (val) {
            _this.data.isLast = false;
            _this.carouselPoint();
            _this.buttonControl();
        });
    };
    NguCarouselComponent.prototype.ngAfterViewInit = function () {
        if (this.userData.point.pointStyles) {
            var datas = this.userData.point.pointStyles.replace(/.ngucarouselPoint/g, "." + this.data.token + " .ngucarouselPoint");
            this.createStyleElem(datas);
        }
        else if (this.userData.point && this.userData.point.visible) {
            this.renderer.addClass(this.pointMain.nativeElement, 'ngucarouselPointDefault');
        }
    };
    NguCarouselComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.carouselInt);
        // tslint:disable-next-line:no-unused-expression
        this.itemsSubscribe && this.itemsSubscribe.unsubscribe();
        this.carouselSerSub && this.carouselSerSub.unsubscribe();
        this.carouselLoad.complete();
        // remove listeners
        for (var i = 1; i <= 8; i++) {
            // tslint:disable-next-line:no-eval
            eval("this.listener" + i + " && this.listener" + i + "()");
        }
    };
    NguCarouselComponent.prototype.onResizing = function (event) {
        var _this = this;
        clearTimeout(this.onResize);
        this.onResize = setTimeout(function () {
            if (_this.data.deviceWidth !== event.target.outerWidth) {
                _this.setStyle(_this.carouselInner, 'transition', "");
                _this.storeCarouselData();
            }
        }, 500);
    };
    /** Get Touch input */
    NguCarouselComponent.prototype.touch = function () {
        var _this = this;
        if (this.userData.touch) {
            var hammertime = new Hammer(this.carouselInner);
            hammertime.get('pan').set({ direction: Hammer.DIRECTION_HORIZONTAL });
            hammertime.on('panstart', function (ev) {
                _this.data.carouselWidth = _this.carouselInner.offsetWidth;
                _this.data.touchTransform = _this.data.transform[_this.data.deviceType];
                _this.data.dexVal = 0;
                _this.setStyle(_this.carouselInner, 'transition', '');
            });
            if (this.data.vertical.enabled) {
                hammertime.on('panup', function (ev) {
                    _this.touchHandling('panleft', ev);
                });
                hammertime.on('pandown', function (ev) {
                    _this.touchHandling('panright', ev);
                });
            }
            else {
                hammertime.on('panleft', function (ev) {
                    _this.touchHandling('panleft', ev);
                });
                hammertime.on('panright', function (ev) {
                    _this.touchHandling('panright', ev);
                });
            }
            hammertime.on('panend', function (ev) {
                if (Math.abs(ev.velocity) > 1) {
                    _this.data.touch.velocity = ev.velocity;
                    var direc = 0;
                    if (!_this.data.RTL) {
                        direc = _this.data.touch.swipe === 'panright' ? 0 : 1;
                    }
                    else {
                        direc = _this.data.touch.swipe === 'panright' ? 1 : 0;
                    }
                    _this.carouselScrollOne(direc);
                }
                else {
                    _this.data.dexVal = 0;
                    _this.setStyle(_this.carouselInner, 'transition', 'transform 324ms cubic-bezier(0, 0, 0.2, 1)');
                    _this.setStyle(_this.carouselInner, 'transform', '');
                }
            });
            hammertime.on('hammer.input', function (ev) {
                // allow nested touch events to no propagate, this may have other side affects but works for now.
                // TODO: It is probably better to check the source element of the event and only apply the handle to the correct carousel
                ev.srcEvent.stopPropagation();
            });
        }
    };
    /** handle touch input */
    NguCarouselComponent.prototype.touchHandling = function (e, ev) {
        // vertical touch events seem to cause to panstart event with an odd delta
        // and a center of {x:0,y:0} so this will ignore them
        if (ev.center.x === 0) {
            return;
        }
        ev = Math.abs(this.data.vertical.enabled ? ev.deltaY : ev.deltaX);
        var valt = ev - this.data.dexVal;
        valt =
            this.data.type === 'responsive'
                ? Math.abs(ev - this.data.dexVal) /
                    (this.data.vertical.enabled
                        ? this.data.vertical.height
                        : this.data.carouselWidth) *
                    100
                : valt;
        this.data.dexVal = ev;
        this.data.touch.swipe = e;
        if (!this.data.RTL) {
            this.data.touchTransform =
                e === 'panleft'
                    ? valt + this.data.touchTransform
                    : this.data.touchTransform - valt;
        }
        else {
            this.data.touchTransform =
                e === 'panright'
                    ? valt + this.data.touchTransform
                    : this.data.touchTransform - valt;
        }
        if (this.data.touchTransform > 0) {
            if (this.data.type === 'responsive') {
                this.setStyle(this.carouselInner, 'transform', this.data.vertical.enabled
                    ? "translate3d(0, " + this.directionSym + this.data.touchTransform + "%, 0)"
                    : "translate3d(" + this.directionSym + this.data.touchTransform + "%, 0, 0)");
            }
            else {
                this.setStyle(this.carouselInner, 'transform', this.data.vertical.enabled
                    ? "translate3d(0, " + this.directionSym + this.data.touchTransform + "px, 0)"
                    : "translate3d(" + this.directionSym + this.data.touchTransform + "px, 0px, 0px)");
            }
        }
        else {
            this.data.touchTransform = 0;
        }
    };
    /** this used to disable the scroll when it is not on the display */
    NguCarouselComponent.prototype.onWindowScrolling = function () {
        var top = this.carousel.offsetTop;
        var scrollY = window.scrollY;
        var heightt = window.innerHeight;
        var carouselHeight = this.carousel.offsetHeight;
        if (top <= scrollY + heightt - carouselHeight / 4 &&
            top + carouselHeight / 2 >= scrollY) {
            this.carouselIntervalEvent(0);
        }
        else {
            this.carouselIntervalEvent(1);
        }
    };
    /** store data based on width of the screen for the carousel */
    NguCarouselComponent.prototype.storeCarouselData = function () {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
            this.data.deviceWidth = window.innerWidth;
        }
        else {
            this.data.deviceWidth = 1200;
        }
        this.data.carouselWidth = this.carouselMain.offsetWidth;
        if (this.data.type === 'responsive') {
            this.data.deviceType =
                this.data.deviceWidth >= 1200
                    ? 'lg'
                    : this.data.deviceWidth >= 992
                        ? 'md'
                        : this.data.deviceWidth >= 768 ? 'sm' : 'xs';
            this.data.items = this.userData.grid[this.data.deviceType];
            this.data.itemWidth = this.data.carouselWidth / this.data.items;
        }
        else {
            this.data.items = Math.trunc(this.data.carouselWidth / this.userData.grid.all);
            this.data.itemWidth = this.userData.grid.all;
            this.data.deviceType = 'all';
        }
        this.data.slideItems = +(this.userData.slide < this.data.items
            ? this.userData.slide
            : this.data.items);
        this.data.load =
            this.userData.load >= this.data.slideItems
                ? this.userData.load
                : this.data.slideItems;
        this.userData.speed =
            this.userData.speed || this.userData.speed > -1
                ? this.userData.speed
                : 400;
        this.initData.emit(this.data);
        this.carouselPoint();
    };
    /** Used to reset the carousel */
    NguCarouselComponent.prototype.reset = function () {
        this.carouselCssNode.innerHTML = '';
        this.moveTo(0);
        this.carouselPoint();
    };
    /** Init carousel point */
    NguCarouselComponent.prototype.carouselPoint = function () {
        // if (this.userData.point.visible === true) {
        var Nos = this.items.length - (this.data.items - this.data.slideItems);
        this.pointIndex = Math.ceil(Nos / this.data.slideItems);
        var pointers = [];
        if (this.pointIndex > 1 || !this.userData.point.hideOnSingleSlide) {
            for (var i = 0; i < this.pointIndex; i++) {
                pointers.push(i);
            }
        }
        this.pointNumbers = pointers;
        this.carouselPointActiver();
        if (this.pointIndex <= 1) {
            this.btnBoolean(1, 1);
        }
        else {
            if (this.data.currentSlide === 0 && !this.data.loop) {
                this.btnBoolean(1, 0);
            }
            else {
                this.btnBoolean(0, 0);
            }
        }
        this.buttonControl();
        // }
    };
    /** change the active point in carousel */
    NguCarouselComponent.prototype.carouselPointActiver = function () {
        var i = Math.ceil(this.data.currentSlide / this.data.slideItems);
        this.pointers = i;
    };
    /** this function is used to scoll the carousel when point is clicked */
    NguCarouselComponent.prototype.moveTo = function (index) {
        if (this.pointers !== index && index < this.pointIndex) {
            var slideremains = 0;
            var btns = this.data.currentSlide < index ? 1 : 0;
            if (index === 0) {
                this.btnBoolean(1, 0);
                slideremains = index * this.data.slideItems;
            }
            else if (index === this.pointIndex - 1) {
                this.btnBoolean(0, 1);
                slideremains = this.items.length - this.data.items;
            }
            else {
                this.btnBoolean(0, 0);
                slideremains = index * this.data.slideItems;
            }
            this.carouselScrollTwo(btns, slideremains, this.data.speed);
        }
    };
    /** set the style of the carousel based the inputs data */
    NguCarouselComponent.prototype.carouselSize = function () {
        this.data.token = this.generateID();
        var dism = '';
        this.styleSelector = "." + this.data.token + " > .ngucarousel > .ngucarousel-inner > .ngucarousel-items";
        if (this.userData.custom === 'banner') {
            this.renderer.addClass(this.carousel, 'banner');
        }
        if (this.userData.animation === 'lazy') {
            dism += this.styleSelector + " > .item {transition: transform .6s ease;}";
        }
        var itemStyle = '';
        if (this.data.vertical.enabled) {
            var itemWidth_xs = this.styleSelector + " > .item {height: " + this.data
                .vertical.height / +this.userData.grid.xs + "px}";
            var itemWidth_sm = this.styleSelector + " > .item {height: " + this.data
                .vertical.height / +this.userData.grid.sm + "px}";
            var itemWidth_md = this.styleSelector + " > .item {height: " + this.data
                .vertical.height / +this.userData.grid.md + "px}";
            var itemWidth_lg = this.styleSelector + " > .item {height: " + this.data
                .vertical.height / +this.userData.grid.lg + "px}";
            itemStyle = "@media (max-width:767px){" + itemWidth_xs + "}\n                    @media (min-width:768px){" + itemWidth_sm + "}\n                    @media (min-width:992px){" + itemWidth_md + "}\n                    @media (min-width:1200px){" + itemWidth_lg + "}";
        }
        else if (this.data.type === 'responsive') {
            var itemWidth_xs = this.userData.type === 'mobile'
                ? this.styleSelector + " .item {flex: 0 0 " + 95 /
                    +this.userData.grid.xs + "%}"
                : this.styleSelector + " .item {flex: 0 0 " + 100 /
                    +this.userData.grid.xs + "%}";
            var itemWidth_sm = this.styleSelector + " > .item {flex: 0 0 " + 100 /
                +this.userData.grid.sm + "%}";
            var itemWidth_md = this.styleSelector + " > .item {flex: 0 0 " + 100 /
                +this.userData.grid.md + "%}";
            var itemWidth_lg = this.styleSelector + " > .item {flex: 0 0 " + 100 /
                +this.userData.grid.lg + "%}";
            itemStyle = "@media (max-width:767px){" + itemWidth_xs + "}\n                    @media (min-width:768px){" + itemWidth_sm + "}\n                    @media (min-width:992px){" + itemWidth_md + "}\n                    @media (min-width:1200px){" + itemWidth_lg + "}";
        }
        else {
            itemStyle = this.styleSelector + " .item {flex: 0 0 " + this.userData.grid.all + "px}";
        }
        this.renderer.addClass(this.carousel, this.data.token);
        if (this.data.vertical.enabled) {
            this.renderer.addClass(this.carouselInner, 'nguvertical');
            this.renderer.setStyle(this.forTouch.nativeElement, 'height', this.data.vertical.height + "px");
        }
        // tslint:disable-next-line:no-unused-expression
        this.data.RTL &&
            !this.data.vertical.enabled &&
            this.renderer.addClass(this.carousel, 'ngurtl');
        this.createStyleElem(dism + " " + itemStyle);
    };
    /** logic to scroll the carousel step 1 */
    NguCarouselComponent.prototype.carouselScrollOne = function (Btn) {
        var itemSpeed = this.data.speed;
        var translateXval, currentSlide = 0;
        var touchMove = Math.ceil(this.data.dexVal / this.data.itemWidth);
        this.setStyle(this.carouselInner, 'transform', '');
        if (this.pointIndex === 1) {
            return;
        }
        else if (Btn === 0 &&
            ((!this.data.loop && !this.data.isFirst) || this.data.loop)) {
            var slide = this.data.slideItems * this.pointIndex;
            var currentSlideD = this.data.currentSlide - this.data.slideItems;
            var MoveSlide = currentSlideD + this.data.slideItems;
            this.btnBoolean(0, 1);
            if (this.data.currentSlide === 0) {
                currentSlide = this.items.length - this.data.items;
                itemSpeed = 400;
                this.btnBoolean(0, 1);
            }
            else if (this.data.slideItems >= MoveSlide) {
                currentSlide = translateXval = 0;
                this.btnBoolean(1, 0);
            }
            else {
                this.btnBoolean(0, 0);
                if (touchMove > this.data.slideItems) {
                    currentSlide = this.data.currentSlide - touchMove;
                    itemSpeed = 200;
                }
                else {
                    currentSlide = this.data.currentSlide - this.data.slideItems;
                }
            }
            this.carouselScrollTwo(Btn, currentSlide, itemSpeed);
        }
        else if (Btn === 1 &&
            ((!this.data.loop && !this.data.isLast) || this.data.loop)) {
            if (this.items.length <=
                this.data.currentSlide + this.data.items + this.data.slideItems &&
                !this.data.isLast) {
                currentSlide = this.items.length - this.data.items;
                this.btnBoolean(0, 1);
            }
            else if (this.data.isLast) {
                currentSlide = translateXval = 0;
                itemSpeed = 400;
                this.btnBoolean(1, 0);
            }
            else {
                this.btnBoolean(0, 0);
                if (touchMove > this.data.slideItems) {
                    currentSlide =
                        this.data.currentSlide +
                            this.data.slideItems +
                            (touchMove - this.data.slideItems);
                    itemSpeed = 200;
                }
                else {
                    currentSlide = this.data.currentSlide + this.data.slideItems;
                }
            }
            this.carouselScrollTwo(Btn, currentSlide, itemSpeed);
        }
        // cubic-bezier(0.15, 1.04, 0.54, 1.13)
    };
    /** logic to scroll the carousel step 2 */
    NguCarouselComponent.prototype.carouselScrollTwo = function (Btn, currentSlide, itemSpeed) {
        if (this.data.dexVal !== 0) {
            var val = Math.abs(this.data.touch.velocity);
            var somt = Math.floor(this.data.dexVal /
                val /
                this.data.dexVal *
                (this.data.deviceWidth - this.data.dexVal));
            somt = somt > itemSpeed ? itemSpeed : somt;
            itemSpeed = somt < 200 ? 200 : somt;
            this.data.dexVal = 0;
        }
        if (this.withAnim) {
            this.setStyle(this.carouselInner, 'transition', "transform " + itemSpeed + "ms " + this.userData.easing);
            this.userData.animation &&
                this.carouselAnimator(Btn, currentSlide + 1, currentSlide + this.data.items, itemSpeed, Math.abs(this.data.currentSlide - currentSlide));
        }
        else {
            this.setStyle(this.carouselInner, 'transition', "");
        }
        this.data.itemLength = this.items.length;
        this.transformStyle(currentSlide);
        this.data.currentSlide = currentSlide;
        this.onMove.emit(this.data);
        this.carouselPointActiver();
        this.carouselLoadTrigger();
        this.buttonControl();
        this.withAnim = true;
    };
    /** boolean function for making isFirst and isLast */
    NguCarouselComponent.prototype.btnBoolean = function (first, last) {
        this.data.isFirst = first ? true : false;
        this.data.isLast = last ? true : false;
    };
    NguCarouselComponent.prototype.transformString = function (grid, slide) {
        var collect = '';
        collect += this.styleSelector + " { transform: translate3d(";
        if (this.data.vertical.enabled) {
            this.data.transform[grid] =
                this.data.vertical.height / this.userData.grid[grid] * slide;
            collect += "0, -" + this.data.transform[grid] + "px, 0";
        }
        else {
            this.data.transform[grid] = 100 / this.userData.grid[grid] * slide;
            collect += "" + this.directionSym + this.data.transform[grid] + "%, 0, 0";
        }
        collect += "); }";
        return collect;
    };
    /** set the transform style to scroll the carousel  */
    NguCarouselComponent.prototype.transformStyle = function (slide) {
        var slideCss = '';
        if (this.data.type === 'responsive') {
            slideCss = "@media (max-width: 767px) {" + this.transformString('xs', slide) + "}\n      @media (min-width: 768px) {" + this.transformString('sm', slide) + " }\n      @media (min-width: 992px) {" + this.transformString('md', slide) + " }\n      @media (min-width: 1200px) {" + this.transformString('lg', slide) + " }";
        }
        else {
            this.data.transform.all = this.userData.grid.all * slide;
            slideCss = this.styleSelector + " { transform: translate3d(" + this.directionSym + this.data.transform.all + "px, 0, 0);";
        }
        this.carouselCssNode.innerHTML = slideCss;
    };
    /** this will trigger the carousel to load the items */
    NguCarouselComponent.prototype.carouselLoadTrigger = function () {
        if (typeof this.userData.load === 'number') {
            // tslint:disable-next-line:no-unused-expression
            this.items.length - this.data.load <=
                this.data.currentSlide + this.data.items &&
                this.carouselLoad.emit(this.data.currentSlide);
        }
    };
    /** generate Class for each carousel to set specific style */
    NguCarouselComponent.prototype.generateID = function () {
        var text = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < 6; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return "ngucarousel" + text;
    };
    /** handle the auto slide */
    NguCarouselComponent.prototype.carouselInterval = function () {
        var _this = this;
        if (typeof this.userData.interval === 'number' && this.data.loop) {
            this.listener4 = this.renderer.listen(this.carouselMain, 'touchstart', function () {
                _this.carouselIntervalEvent(1);
            });
            this.listener5 = this.renderer.listen(this.carouselMain, 'touchend', function () {
                _this.carouselIntervalEvent(0);
            });
            this.listener6 = this.renderer.listen(this.carouselMain, 'mouseenter', function () {
                _this.carouselIntervalEvent(1);
            });
            this.listener7 = this.renderer.listen(this.carouselMain, 'mouseleave', function () {
                _this.carouselIntervalEvent(0);
            });
            this.listener8 = this.renderer.listen('window', 'scroll', function () {
                clearTimeout(_this.onScrolling);
                _this.onScrolling = setTimeout(function () {
                    _this.onWindowScrolling();
                }, 600);
            });
            this.carouselInt = setInterval(function () {
                // tslint:disable-next-line:no-unused-expression
                !_this.pauseCarousel && _this.carouselScrollOne(1);
            }, this.userData.interval);
        }
    };
    /** pause interval for specific time */
    NguCarouselComponent.prototype.carouselIntervalEvent = function (ev) {
        var _this = this;
        this.evtValue = ev;
        if (this.evtValue === 0) {
            clearTimeout(this.pauseInterval);
            this.pauseInterval = setTimeout(function () {
                // tslint:disable-next-line:no-unused-expression
                _this.evtValue === 0 && (_this.pauseCarousel = false);
            }, this.userData.interval);
        }
        else {
            this.pauseCarousel = true;
        }
    };
    /** animate the carousel items */
    NguCarouselComponent.prototype.carouselAnimator = function (direction, start, end, speed, length) {
        var _this = this;
        var val = length < 5 ? length : 5;
        val = val === 1 ? 3 : val;
        var itemList = this.items.toArray();
        if (direction === 1) {
            for (var i = start - 1; i < end; i++) {
                val = val * 2;
                itemList[i] &&
                    this.setStyle(itemList[i].nativeElement, 'transform', "translate3d(" + val + "px, 0, 0)");
            }
        }
        else {
            for (var i = end - 1; i >= start - 1; i--) {
                val = val * 2;
                itemList[i] &&
                    this.setStyle(itemList[i].nativeElement, 'transform', "translate3d(-" + val + "px, 0, 0)");
            }
        }
        setTimeout(function () {
            _this.items.forEach(function (elem) {
                return _this.setStyle(elem.nativeElement, 'transform', "translate3d(0, 0, 0)");
            });
        }, speed * 0.7);
    };
    /** control button for loop */
    NguCarouselComponent.prototype.buttonControl = function () {
        var arr = [];
        if (!this.data.loop || (this.data.isFirst && this.data.isLast)) {
            arr = [
                this.data.isFirst ? 'none' : 'block',
                this.data.isLast ? 'none' : 'block'
            ];
        }
        else {
            arr = ['block', 'block'];
        }
        this.setStyle(this.leftBtn, 'display', arr[0]);
        this.setStyle(this.rightBtn, 'display', arr[1]);
    };
    /** Short form for setElementStyle */
    NguCarouselComponent.prototype.setStyle = function (el, prop, val) {
        this.renderer.setStyle(el, prop, val);
    };
    /** For generating style tag */
    NguCarouselComponent.prototype.createStyleElem = function (datas) {
        var styleItem = this.renderer.createElement('style');
        if (datas) {
            var styleText = this.renderer.createText(datas);
            this.renderer.appendChild(styleItem, styleText);
        }
        this.renderer.appendChild(this.carousel, styleItem);
        return styleItem;
    };
    NguCarouselComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'ngu-carousel',
                    template: "<div #ngucarousel class=\"ngucarousel\"><div #forTouch class=\"ngucarousel-inner\"><div #nguitems class=\"ngucarousel-items\"><ng-content select=\"[NguCarouselItem]\"></ng-content></div><div style=\"clear: both\"></div></div><ng-content select=\"[NguCarouselPrev]\"></ng-content><ng-content select=\"[NguCarouselNext]\"></ng-content></div><div #points *ngIf=\"data.point\"><ul class=\"ngucarouselPoint\"><li #pointInner *ngFor=\"let i of pointNumbers; let i = index\" [class.active]=\"i==pointers\" (click)=\"moveTo(i)\"></li></ul></div>",
                    styles: [
                        "\n    :host {\n      display: block;\n      position: relative;\n    }\n\n    :host.ngurtl {\n      direction: rtl;\n    }\n    \n    .nguvertical {\n      flex-direction: column;\n    }\n\n    .ngucarousel .ngucarousel-inner {\n      position: relative;\n      overflow: hidden;\n    }\n    .ngucarousel .ngucarousel-inner .ngucarousel-items {\n      position: relative;\n      display: flex;\n    }\n\n    .banner .ngucarouselPointDefault .ngucarouselPoint {\n      position: absolute;\n      width: 100%;\n      bottom: 20px;\n    }\n    .banner .ngucarouselPointDefault .ngucarouselPoint li {\n      background: rgba(255, 255, 255, 0.55);\n    }\n    .banner .ngucarouselPointDefault .ngucarouselPoint li.active {\n      background: white;\n    }\n    .banner .ngucarouselPointDefault .ngucarouselPoint li:hover {\n      cursor: pointer;\n    }\n\n    .ngucarouselPointDefault .ngucarouselPoint {\n      list-style-type: none;\n      text-align: center;\n      padding: 12px;\n      margin: 0;\n      white-space: nowrap;\n      overflow: auto;\n      box-sizing: border-box;\n    }\n    .ngucarouselPointDefault .ngucarouselPoint li {\n      display: inline-block;\n      border-radius: 50%;\n      background: rgba(0, 0, 0, 0.55);\n      padding: 4px;\n      margin: 0 4px;\n      transition-timing-function: cubic-bezier(0.17, 0.67, 0.83, 0.67);\n      transition: 0.4s;\n    }\n    .ngucarouselPointDefault .ngucarouselPoint li.active {\n      background: #6b6b6b;\n      transform: scale(1.8);\n    }\n    .ngucarouselPointDefault .ngucarouselPoint li:hover {\n      cursor: pointer;\n    }\n\n  "
                    ]
                },] },
    ];
    /** @nocollapse */
    NguCarouselComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], },
        { type: _ngu_carousel_service__WEBPACK_IMPORTED_MODULE_3__["NguCarouselService"], },
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] },] },
    ]; };
    NguCarouselComponent.propDecorators = {
        'userData': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['inputs',] },],
        'reseter': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['reset',] },],
        'carouselLoad': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['carouselLoad',] },],
        'onMove': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['onMove',] },],
        'initData': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['initData',] },],
        'items': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"], args: [_ngu_carousel_directive__WEBPACK_IMPORTED_MODULE_0__["NguCarouselItemDirective"], { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },] },],
        'points': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"], args: ['pointInner', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },] },],
        'next': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [_ngu_carousel_directive__WEBPACK_IMPORTED_MODULE_0__["NguCarouselNextDirective"], { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },] },],
        'prev': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [_ngu_carousel_directive__WEBPACK_IMPORTED_MODULE_0__["NguCarouselPrevDirective"], { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },] },],
        'carouselMain1': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['ngucarousel', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },] },],
        'carouselInner1': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['nguitems', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },] },],
        'carousel1': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['main', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },] },],
        'pointMain': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['points', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },] },],
        'forTouch': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['forTouch', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },] },],
    };
    return NguCarouselComponent;
}());

//# sourceMappingURL=ngu-carousel.component.js.map

/***/ }),

/***/ "./node_modules/@ngu/carousel/src/ngu-carousel/ngu-carousel.interface.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@ngu/carousel/src/ngu-carousel/ngu-carousel.interface.js ***!
  \*******************************************************************************/
/*! exports provided: NguCarouselStore, ItemsControl, Vertical, NguButton, Touch, Transfrom, NguCarousel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NguCarouselStore", function() { return NguCarouselStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsControl", function() { return ItemsControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vertical", function() { return Vertical; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NguButton", function() { return NguButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Touch", function() { return Touch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transfrom", function() { return Transfrom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NguCarousel", function() { return NguCarousel; });
var NguCarouselStore = /** @class */ (function () {
    function NguCarouselStore() {
    }
    return NguCarouselStore;
}());

var ItemsControl = /** @class */ (function () {
    function ItemsControl() {
    }
    return ItemsControl;
}());

var Vertical = /** @class */ (function () {
    function Vertical() {
    }
    return Vertical;
}());

var NguButton = /** @class */ (function () {
    function NguButton() {
    }
    return NguButton;
}());

var Touch = /** @class */ (function () {
    function Touch() {
    }
    return Touch;
}());

var Transfrom = /** @class */ (function () {
    function Transfrom() {
    }
    return Transfrom;
}());

var NguCarousel = /** @class */ (function () {
    function NguCarousel() {
    }
    return NguCarousel;
}());

//# sourceMappingURL=ngu-carousel.interface.js.map

/***/ }),

/***/ "./node_modules/@ngu/carousel/src/ngu-item/ngu-item.component.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ngu/carousel/src/ngu-item/ngu-item.component.js ***!
  \***********************************************************************/
/*! exports provided: NguItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NguItemComponent", function() { return NguItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var NguItemComponent = /** @class */ (function () {
    function NguItemComponent() {
        this.classes = true;
    }
    NguItemComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngu-item',
                    template: "<ng-content></ng-content>",
                    styles: ["\n    :host {\n        display: inline-block;\n        white-space: initial;\n        vertical-align: top;\n    }\n  "]
                },] },
    ];
    /** @nocollapse */
    NguItemComponent.ctorParameters = function () { return []; };
    NguItemComponent.propDecorators = {
        'classes': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.item',] },],
    };
    return NguItemComponent;
}());

//# sourceMappingURL=ngu-item.component.js.map

/***/ }),

/***/ "./node_modules/@ngu/carousel/src/ngu-tile/ngu-tile.component.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ngu/carousel/src/ngu-tile/ngu-tile.component.js ***!
  \***********************************************************************/
/*! exports provided: NguTileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NguTileComponent", function() { return NguTileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var NguTileComponent = /** @class */ (function () {
    function NguTileComponent() {
        this.classes = true;
    }
    NguTileComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngu-tile',
                    template: "<div class=\"tile\"><ng-content></ng-content></div>",
                    styles: ["\n    :host {\n        display: inline-block;\n        white-space: initial;\n        padding: 10px;\n        box-sizing: border-box;\n        vertical-align: top;\n    }\n\n    .tile {\n        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n    }\n\n    * {\n        box-sizing: border-box;\n    }\n  "]
                },] },
    ];
    /** @nocollapse */
    NguTileComponent.ctorParameters = function () { return []; };
    NguTileComponent.propDecorators = {
        'classes': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.item',] },],
    };
    return NguTileComponent;
}());

//# sourceMappingURL=ngu-tile.component.js.map

/***/ }),

/***/ "./node_modules/cyrillic-to-translit-js/CyrillicToTranslit.js":
/*!********************************************************************!*\
  !*** ./node_modules/cyrillic-to-translit-js/CyrillicToTranslit.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
﻿

module.exports = function cyrillicToTranslit(config) {
  const _preset = config ? config.preset : "ru";

  const _firstLetterAssociations = {
    "а": "a",
    "б": "b",
    "в": "v",
    "ґ": "g",
    "г": "g",
    "д": "d",
    "е": "e",
    "ё": "e",
    "є": "ye",
    "ж": "zh",
    "з": "z",
    "и": "i",
    "і": "i",
    "ї": "yi",
    "й": "i",
    "к": "k",
    "л": "l",
    "м": "m",
    "н": "n",
    "о": "o",
    "п": "p",
    "р": "r",
    "с": "s",
    "т": "t",
    "у": "u",
    "ф": "f",
    "х": "h",
    "ц": "c",
    "ч": "ch",
    "ш": "sh",
    "щ": "sh'",
    "ъ": "",
    "ы": "i",
    "ь": "",
    "э": "e",
    "ю": "yu",
    "я": "ya",
  };

  if (_preset === "uk") {
    Object.assign(_firstLetterAssociations, {
      "г": "h",
      "и": "y",
      "й": "y",
      "х": "kh",
      "ц": "ts",
      "щ": "shch",
      "'": "",
      "’": "",
      "ʼ": "",
    });
  }

  const _associations = Object.assign({}, _firstLetterAssociations);

  if (_preset === "uk") {
    Object.assign(_associations, {
      "є": "ie",
      "ї": "i",
      "й": "i",
      "ю": "iu",
      "я": "ia",
    });
  }

  function transform(input, spaceReplacement) {
    if (!input) {
      return "";
    }

    let newStr = "";
    for (let i = 0; i < input.length; i++) {
      const isUpperCaseOrWhatever = input[i] === input[i].toUpperCase();
      let strLowerCase = input[i].toLowerCase();
      if (strLowerCase === " " && spaceReplacement) {
        newStr += spaceReplacement;
        continue;
      }
      let newLetter = _preset === "uk" && strLowerCase === "г" && i > 0 && input[i - 1].toLowerCase() === "з"
        ? "gh"
        : (i === 0 ? _firstLetterAssociations : _associations)[strLowerCase];
      if ("undefined" === typeof newLetter) {
        newStr += isUpperCaseOrWhatever ? strLowerCase.toUpperCase() : strLowerCase;
      }
      else {
        newStr += isUpperCaseOrWhatever ? newLetter.toUpperCase() : newLetter;
      }
    }
    return newStr;
  }

  return {
    transform: transform
  };
};


/***/ }),

/***/ "./node_modules/ngx-pagination/dist/ngx-pagination.js":
/*!************************************************************!*\
  !*** ./node_modules/ngx-pagination/dist/ngx-pagination.js ***!
  \************************************************************/
/*! exports provided: ɵb, ɵa, NgxPaginationModule, PaginationService, PaginationControlsComponent, PaginationControlsDirective, PaginatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return DEFAULT_STYLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return DEFAULT_TEMPLATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxPaginationModule", function() { return NgxPaginationModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationService", function() { return PaginationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationControlsComponent", function() { return PaginationControlsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationControlsDirective", function() { return PaginationControlsDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatePipe", function() { return PaginatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var PaginationService = (function () {
    function PaginationService() {
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.instances = {};
        this.DEFAULT_ID = 'DEFAULT_PAGINATION_ID';
    }
    PaginationService.prototype.defaultId = function () { return this.DEFAULT_ID; };
    PaginationService.prototype.register = function (instance) {
        if (!instance.id) {
            instance.id = this.DEFAULT_ID;
        }
        if (!this.instances[instance.id]) {
            this.instances[instance.id] = instance;
            this.change.emit(instance.id);
        }
        else {
            var changed = this.updateInstance(instance);
            if (changed) {
                this.change.emit(instance.id);
            }
        }
    };
    /**
     * Check each property of the instance and update any that have changed. Return
     * true if any changes were made, else return false.
     */
    PaginationService.prototype.updateInstance = function (instance) {
        var changed = false;
        for (var prop in this.instances[instance.id]) {
            if (instance[prop] !== this.instances[instance.id][prop]) {
                this.instances[instance.id][prop] = instance[prop];
                changed = true;
            }
        }
        return changed;
    };
    /**
     * Returns the current page number.
     */
    PaginationService.prototype.getCurrentPage = function (id) {
        if (this.instances[id]) {
            return this.instances[id].currentPage;
        }
    };
    /**
     * Sets the current page number.
     */
    PaginationService.prototype.setCurrentPage = function (id, page) {
        if (this.instances[id]) {
            var instance = this.instances[id];
            var maxPage = Math.ceil(instance.totalItems / instance.itemsPerPage);
            if (page <= maxPage && 1 <= page) {
                this.instances[id].currentPage = page;
                this.change.emit(id);
            }
        }
    };
    /**
     * Sets the value of instance.totalItems
     */
    PaginationService.prototype.setTotalItems = function (id, totalItems) {
        if (this.instances[id] && 0 <= totalItems) {
            this.instances[id].totalItems = totalItems;
            this.change.emit(id);
        }
    };
    /**
     * Sets the value of instance.itemsPerPage.
     */
    PaginationService.prototype.setItemsPerPage = function (id, itemsPerPage) {
        if (this.instances[id]) {
            this.instances[id].itemsPerPage = itemsPerPage;
            this.change.emit(id);
        }
    };
    /**
     * Returns a clone of the pagination instance object matching the id. If no
     * id specified, returns the instance corresponding to the default id.
     */
    PaginationService.prototype.getInstance = function (id) {
        if (id === void 0) { id = this.DEFAULT_ID; }
        if (this.instances[id]) {
            return this.clone(this.instances[id]);
        }
        return {};
    };
    /**
     * Perform a shallow clone of an object.
     */
    PaginationService.prototype.clone = function (obj) {
        var target = {};
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                target[i] = obj[i];
            }
        }
        return target;
    };
    return PaginationService;
}());

var LARGE_NUMBER = Number.MAX_SAFE_INTEGER;
var PaginatePipe = (function () {
    function PaginatePipe(service) {
        this.service = service;
        // store the values from the last time the pipe was invoked
        this.state = {};
    }
    PaginatePipe.prototype.transform = function (collection, args) {
        // When an observable is passed through the AsyncPipe, it will output
        // `null` until the subscription resolves. In this case, we want to
        // use the cached data from the `state` object to prevent the NgFor
        // from flashing empty until the real values arrive.
        if (args instanceof Array) {
            // compatible with angular2 before beta16
            args = args[0];
        }
        if (!(collection instanceof Array)) {
            var _id = args.id || this.service.defaultId;
            if (this.state[_id]) {
                return this.state[_id].slice;
            }
            else {
                return collection;
            }
        }
        var serverSideMode = args.totalItems && args.totalItems !== collection.length;
        var instance = this.createInstance(collection, args);
        var id = instance.id;
        var start, end;
        var perPage = instance.itemsPerPage;
        this.service.register(instance);
        if (!serverSideMode && collection instanceof Array) {
            perPage = +perPage || LARGE_NUMBER;
            start = (instance.currentPage - 1) * perPage;
            end = start + perPage;
            var isIdentical = this.stateIsIdentical(id, collection, start, end);
            if (isIdentical) {
                return this.state[id].slice;
            }
            else {
                var slice = collection.slice(start, end);
                this.saveState(id, collection, slice, start, end);
                this.service.change.emit(id);
                return slice;
            }
        }
        // save the state for server-side collection to avoid null
        // flash as new data loads.
        this.saveState(id, collection, collection, start, end);
        return collection;
    };
    /**
     * Create an PaginationInstance object, using defaults for any optional properties not supplied.
     */
    PaginatePipe.prototype.createInstance = function (collection, args) {
        var config = args;
        this.checkConfig(config);
        return {
            id: config.id || this.service.defaultId(),
            itemsPerPage: +config.itemsPerPage || 0,
            currentPage: +config.currentPage || 1,
            totalItems: +config.totalItems || collection.length
        };
    };
    /**
     * Ensure the argument passed to the filter contains the required properties.
     */
    PaginatePipe.prototype.checkConfig = function (config) {
        var required = ['itemsPerPage', 'currentPage'];
        var missing = required.filter(function (prop) { return !(prop in config); });
        if (0 < missing.length) {
            throw new Error("PaginatePipe: Argument is missing the following required properties: " + missing.join(', '));
        }
    };
    /**
     * To avoid returning a brand new array each time the pipe is run, we store the state of the sliced
     * array for a given id. This means that the next time the pipe is run on this collection & id, we just
     * need to check that the collection, start and end points are all identical, and if so, return the
     * last sliced array.
     */
    PaginatePipe.prototype.saveState = function (id, collection, slice, start, end) {
        this.state[id] = {
            collection: collection,
            size: collection.length,
            slice: slice,
            start: start,
            end: end
        };
    };
    /**
     * For a given id, returns true if the collection, size, start and end values are identical.
     */
    PaginatePipe.prototype.stateIsIdentical = function (id, collection, start, end) {
        var state = this.state[id];
        if (!state) {
            return false;
        }
        var isMetaDataIdentical = state.size === collection.length &&
            state.start === start &&
            state.end === end;
        if (!isMetaDataIdentical) {
            return false;
        }
        return state.slice.every(function (element, index) { return element === collection[start + index]; });
    };
    PaginatePipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
                    name: 'paginate',
                    pure: false
                },] },
    ];
    /** @nocollapse */
    PaginatePipe.ctorParameters = function () { return [
        { type: PaginationService, },
    ]; };
    return PaginatePipe;
}());

/**
 * The default template and styles for the pagination links are borrowed directly
 * from Zurb Foundation 6: http://foundation.zurb.com/sites/docs/pagination.html
 */
var DEFAULT_TEMPLATE = "\n    <pagination-template  #p=\"paginationApi\"\n                         [id]=\"id\"\n                         [maxSize]=\"maxSize\"\n                         (pageChange)=\"pageChange.emit($event)\">\n    <ul class=\"ngx-pagination\" \n        role=\"navigation\" \n        [attr.aria-label]=\"screenReaderPaginationLabel\" \n        *ngIf=\"!(autoHide && p.pages.length <= 1)\">\n\n        <li class=\"pagination-previous\" [class.disabled]=\"p.isFirstPage()\" *ngIf=\"directionLinks\"> \n            <a tabindex=\"0\" *ngIf=\"1 < p.getCurrent()\" (keyup.enter)=\"p.previous()\" (click)=\"p.previous()\" [attr.aria-label]=\"previousLabel + ' ' + screenReaderPageLabel\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isFirstPage()\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li>\n\n        <li [class.current]=\"p.getCurrent() === page.value\" *ngFor=\"let page of p.pages\">\n            <a tabindex=\"0\" (keyup.enter)=\"p.setCurrent(page.value)\" (click)=\"p.setCurrent(page.value)\" *ngIf=\"p.getCurrent() !== page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderPageLabel }} </span>\n                <span>{{ page.label }}</span>\n            </a>\n            <ng-container *ngIf=\"p.getCurrent() === page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderCurrentLabel }} </span>\n                <span>{{ page.label }}</span> \n            </ng-container>\n        </li>\n\n        <li class=\"pagination-next\" [class.disabled]=\"p.isLastPage()\" *ngIf=\"directionLinks\">\n            <a tabindex=\"0\" *ngIf=\"!p.isLastPage()\" (keyup.enter)=\"p.next()\" (click)=\"p.next()\" [attr.aria-label]=\"nextLabel + ' ' + screenReaderPageLabel\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isLastPage()\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li>\n\n    </ul>\n    </pagination-template>\n    ";
var DEFAULT_STYLES = "\n.ngx-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ngx-pagination::before, .ngx-pagination::after {\n    content: ' ';\n    display: table; }\n  .ngx-pagination::after {\n    clear: both; }\n  .ngx-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ngx-pagination li {\n    display: inline-block; }\n  .ngx-pagination a,\n  .ngx-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ngx-pagination a:hover,\n    .ngx-pagination button:hover {\n      background: #e6e6e6; }\n  .ngx-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ngx-pagination .disabled:hover {\n      background: transparent; }\n  .ngx-pagination .ellipsis::after {\n    content: '\u2026';\n    padding: 0.1875rem 0.625rem;\n    color: #0a0a0a; }\n  .ngx-pagination a, .ngx-pagination button {\n    cursor: pointer; }\n\n.ngx-pagination .pagination-previous a::before,\n.ngx-pagination .pagination-previous.disabled::before { \n  content: '\u00AB';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ngx-pagination .pagination-next a::after,\n.ngx-pagination .pagination-next.disabled::after {\n  content: '\u00BB';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ngx-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }";

/**
 * The default pagination controls component. Actually just a default implementation of a custom template.
 */
var PaginationControlsComponent = (function () {
    function PaginationControlsComponent() {
        this.maxSize = 7;
        this.previousLabel = 'Previous';
        this.nextLabel = 'Next';
        this.screenReaderPaginationLabel = 'Pagination';
        this.screenReaderPageLabel = 'page';
        this.screenReaderCurrentLabel = "You're on page";
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._directionLinks = true;
        this._autoHide = false;
    }
    Object.defineProperty(PaginationControlsComponent.prototype, "directionLinks", {
        get: function () {
            return this._directionLinks;
        },
        set: function (value) {
            this._directionLinks = !!value && value !== 'false';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationControlsComponent.prototype, "autoHide", {
        get: function () {
            return this._autoHide;
        },
        set: function (value) {
            this._autoHide = !!value && value !== 'false';
        },
        enumerable: true,
        configurable: true
    });
    PaginationControlsComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'pagination-controls',
                    template: DEFAULT_TEMPLATE,
                    styles: [DEFAULT_STYLES],
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
                },] },
    ];
    /** @nocollapse */
    PaginationControlsComponent.ctorParameters = function () { return []; };
    PaginationControlsComponent.propDecorators = {
        'id': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'maxSize': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'directionLinks': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'autoHide': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'previousLabel': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'nextLabel': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'screenReaderPaginationLabel': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'screenReaderPageLabel': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'screenReaderCurrentLabel': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'pageChange': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return PaginationControlsComponent;
}());

/**
 * This directive is what powers all pagination controls components, including the default one.
 * It exposes an API which is hooked up to the PaginationService to keep the PaginatePipe in sync
 * with the pagination controls.
 */
var PaginationControlsDirective = (function () {
    function PaginationControlsDirective(service, changeDetectorRef) {
        var _this = this;
        this.service = service;
        this.changeDetectorRef = changeDetectorRef;
        this.maxSize = 7;
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pages = [];
        this.changeSub = this.service.change
            .subscribe(function (id) {
            if (_this.id === id) {
                _this.updatePageLinks();
                _this.changeDetectorRef.markForCheck();
                _this.changeDetectorRef.detectChanges();
            }
        });
    }
    PaginationControlsDirective.prototype.ngOnInit = function () {
        if (this.id === undefined) {
            this.id = this.service.defaultId();
        }
        this.updatePageLinks();
    };
    PaginationControlsDirective.prototype.ngOnChanges = function (changes) {
        this.updatePageLinks();
    };
    PaginationControlsDirective.prototype.ngOnDestroy = function () {
        this.changeSub.unsubscribe();
    };
    /**
     * Go to the previous page
     */
    PaginationControlsDirective.prototype.previous = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() - 1);
    };
    /**
     * Go to the next page
     */
    PaginationControlsDirective.prototype.next = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() + 1);
    };
    /**
     * Returns true if current page is first page
     */
    PaginationControlsDirective.prototype.isFirstPage = function () {
        return this.getCurrent() === 1;
    };
    /**
     * Returns true if current page is last page
     */
    PaginationControlsDirective.prototype.isLastPage = function () {
        return this.getLastPage() === this.getCurrent();
    };
    /**
     * Set the current page number.
     */
    PaginationControlsDirective.prototype.setCurrent = function (page) {
        this.pageChange.emit(page);
    };
    /**
     * Get the current page number.
     */
    PaginationControlsDirective.prototype.getCurrent = function () {
        return this.service.getCurrentPage(this.id);
    };
    /**
     * Returns the last page number
     */
    PaginationControlsDirective.prototype.getLastPage = function () {
        var inst = this.service.getInstance(this.id);
        if (inst.totalItems < 1) {
            // when there are 0 or fewer (an error case) items, there are no "pages" as such,
            // but it makes sense to consider a single, empty page as the last page.
            return 1;
        }
        return Math.ceil(inst.totalItems / inst.itemsPerPage);
    };
    PaginationControlsDirective.prototype.checkValidId = function () {
        if (!this.service.getInstance(this.id).id) {
            console.warn("PaginationControlsDirective: the specified id \"" + this.id + "\" does not match any registered PaginationInstance");
        }
    };
    /**
     * Updates the page links and checks that the current page is valid. Should run whenever the
     * PaginationService.change stream emits a value matching the current ID, or when any of the
     * input values changes.
     */
    PaginationControlsDirective.prototype.updatePageLinks = function () {
        var _this = this;
        var inst = this.service.getInstance(this.id);
        var correctedCurrentPage = this.outOfBoundCorrection(inst);
        if (correctedCurrentPage !== inst.currentPage) {
            setTimeout(function () {
                _this.setCurrent(correctedCurrentPage);
                _this.pages = _this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, _this.maxSize);
            });
        }
        else {
            this.pages = this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, this.maxSize);
        }
    };
    /**
     * Checks that the instance.currentPage property is within bounds for the current page range.
     * If not, return a correct value for currentPage, or the current value if OK.
     */
    PaginationControlsDirective.prototype.outOfBoundCorrection = function (instance) {
        var totalPages = Math.ceil(instance.totalItems / instance.itemsPerPage);
        if (totalPages < instance.currentPage && 0 < totalPages) {
            return totalPages;
        }
        else if (instance.currentPage < 1) {
            return 1;
        }
        return instance.currentPage;
    };
    /**
     * Returns an array of Page objects to use in the pagination controls.
     */
    PaginationControlsDirective.prototype.createPageArray = function (currentPage, itemsPerPage, totalItems, paginationRange) {
        // paginationRange could be a string if passed from attribute, so cast to number.
        paginationRange = +paginationRange;
        var pages = [];
        var totalPages = Math.ceil(totalItems / itemsPerPage);
        var halfWay = Math.ceil(paginationRange / 2);
        var isStart = currentPage <= halfWay;
        var isEnd = totalPages - halfWay < currentPage;
        var isMiddle = !isStart && !isEnd;
        var ellipsesNeeded = paginationRange < totalPages;
        var i = 1;
        while (i <= totalPages && i <= paginationRange) {
            var label = void 0;
            var pageNumber = this.calculatePageNumber(i, currentPage, paginationRange, totalPages);
            var openingEllipsesNeeded = (i === 2 && (isMiddle || isEnd));
            var closingEllipsesNeeded = (i === paginationRange - 1 && (isMiddle || isStart));
            if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
                label = '...';
            }
            else {
                label = pageNumber;
            }
            pages.push({
                label: label,
                value: pageNumber
            });
            i++;
        }
        return pages;
    };
    /**
     * Given the position in the sequence of pagination links [i],
     * figure out what page number corresponds to that position.
     */
    PaginationControlsDirective.prototype.calculatePageNumber = function (i, currentPage, paginationRange, totalPages) {
        var halfWay = Math.ceil(paginationRange / 2);
        if (i === paginationRange) {
            return totalPages;
        }
        else if (i === 1) {
            return i;
        }
        else if (paginationRange < totalPages) {
            if (totalPages - halfWay < currentPage) {
                return totalPages - paginationRange + i;
            }
            else if (halfWay < currentPage) {
                return currentPage - halfWay + i;
            }
            else {
                return i;
            }
        }
        else {
            return i;
        }
    };
    PaginationControlsDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'pagination-template,[pagination-template]',
                    exportAs: 'paginationApi'
                },] },
    ];
    /** @nocollapse */
    PaginationControlsDirective.ctorParameters = function () { return [
        { type: PaginationService, },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
    ]; };
    PaginationControlsDirective.propDecorators = {
        'id': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'maxSize': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'pageChange': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return PaginationControlsDirective;
}());

var NgxPaginationModule = (function () {
    function NgxPaginationModule() {
    }
    NgxPaginationModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                    declarations: [
                        PaginatePipe,
                        PaginationControlsComponent,
                        PaginationControlsDirective
                    ],
                    providers: [PaginationService],
                    exports: [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective]
                },] },
    ];
    /** @nocollapse */
    NgxPaginationModule.ctorParameters = function () { return []; };
    return NgxPaginationModule;
}());

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/Subject.js":
/*!***************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/Subject.js ***!
  \***************************************************/
/*! exports provided: Subject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Subject", function() { return rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]; });


//# sourceMappingURL=Subject.js.map

/***/ }),

/***/ "./src/app/client/client.module.ts":
/*!*****************************************!*\
  !*** ./src/app/client/client.module.ts ***!
  \*****************************************/
/*! exports provided: ClientModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientModule", function() { return ClientModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _layout_client_layout_client_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/client-layout/client-layout.component */ "./src/app/client/layout/client-layout/client-layout.component.ts");
/* harmony import */ var _pages_index_page_index_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/index-page/index-page.component */ "./src/app/client/pages/index-page/index-page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/client/components/navbar/navbar.component.ts");
/* harmony import */ var _pages_films_page_films_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/films-page/films-page.component */ "./src/app/client/pages/films-page/films-page.component.ts");
/* harmony import */ var _components_films_list_films_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/films-list/films-list.component */ "./src/app/client/components/films-list/films-list.component.ts");
/* harmony import */ var _components_film_item_list_film_item_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/film-item-list/film-item-list.component */ "./src/app/client/components/film-item-list/film-item-list.component.ts");
/* harmony import */ var _pages_online_page_online_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/online-page/online-page.component */ "./src/app/client/pages/online-page/online-page.component.ts");
/* harmony import */ var _components_player_player_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/player/player.component */ "./src/app/client/components/player/player.component.ts");
/* harmony import */ var _components_lr_block_lr_block_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/lr-block/lr-block.component */ "./src/app/client/components/lr-block/lr-block.component.ts");
/* harmony import */ var _components_rating_rating_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/rating/rating.component */ "./src/app/client/components/rating/rating.component.ts");
/* harmony import */ var _components_features_features_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/features/features.component */ "./src/app/client/components/features/features.component.ts");
/* harmony import */ var _components_actors_list_actors_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/actors-list/actors-list.component */ "./src/app/client/components/actors-list/actors-list.component.ts");
/* harmony import */ var _pipes_forNumber_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../pipes/forNumber.pipe */ "./src/app/pipes/forNumber.pipe.ts");
/* harmony import */ var _resolvers_films_resolver__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../resolvers/films.resolver */ "./src/app/resolvers/films.resolver.ts");
/* harmony import */ var _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/filter/filter.component */ "./src/app/client/components/filter/filter.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _directive_ng_value_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../directive/ng-value.directive */ "./src/app/directive/ng-value.directive.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _resolvers_film_resolver__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../resolvers/film.resolver */ "./src/app/resolvers/film.resolver.ts");
/* harmony import */ var _resolvers_index_films_resolver__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../resolvers/index.films.resolver */ "./src/app/resolvers/index.films.resolver.ts");
/* harmony import */ var _components_film_item_index_film_item_index_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/film-item-index/film-item-index.component */ "./src/app/client/components/film-item-index/film-item-index.component.ts");
/* harmony import */ var _pages_name_page_name_page_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/name-page/name-page.component */ "./src/app/client/pages/name-page/name-page.component.ts");
/* harmony import */ var _resolvers_name_resolver__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../resolvers/name.resolver */ "./src/app/resolvers/name.resolver.ts");
/* harmony import */ var _components_fade_panel_fade_panel_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/fade-panel/fade-panel.component */ "./src/app/client/components/fade-panel/fade-panel.component.ts");
/* harmony import */ var _components_film_info_panel_film_info_panel_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/film-info-panel/film-info-panel.component */ "./src/app/client/components/film-info-panel/film-info-panel.component.ts");
/* harmony import */ var _pages_my_films_page_my_films_page_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/my-films-page/my-films-page.component */ "./src/app/client/pages/my-films-page/my-films-page.component.ts");
/* harmony import */ var _components_carusel_films_carusel_films_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/carusel-films/carusel-films.component */ "./src/app/client/components/carusel-films/carusel-films.component.ts");
/* harmony import */ var _ngu_carousel__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @ngu/carousel */ "./node_modules/@ngu/carousel/index.js");
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ "./src/app/client/pages/not-found/not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















 // <-- import the module











var ClientModule = /** @class */ (function () {
    function ClientModule() {
    }
    ClientModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_20__["NgxPaginationModule"],
                _ngu_carousel__WEBPACK_IMPORTED_MODULE_30__["NguCarouselModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: "", component: _layout_client_layout_client_layout_component__WEBPACK_IMPORTED_MODULE_2__["ClientLayoutComponent"], children: [
                            { path: "", resolve: [_resolvers_index_films_resolver__WEBPACK_IMPORTED_MODULE_22__["IndexFilmsResolver"]], component: _pages_index_page_index_page_component__WEBPACK_IMPORTED_MODULE_3__["IndexPageComponent"] },
                            { path: ":type", resolve: [_resolvers_films_resolver__WEBPACK_IMPORTED_MODULE_16__["FilmsResolver"]], component: _pages_films_page_films_page_component__WEBPACK_IMPORTED_MODULE_6__["FilmsPageComponent"] },
                            { path: "online/:id/:slug", resolve: [_resolvers_film_resolver__WEBPACK_IMPORTED_MODULE_21__["FilmResolver"]], component: _pages_online_page_online_page_component__WEBPACK_IMPORTED_MODULE_9__["OnlinePageComponent"] },
                            { path: "name/:id", resolve: [_resolvers_name_resolver__WEBPACK_IMPORTED_MODULE_25__["NameResolver"]], component: _pages_name_page_name_page_component__WEBPACK_IMPORTED_MODULE_24__["NamePageComponent"] },
                            { path: "my/playlist", component: _pages_my_films_page_my_films_page_component__WEBPACK_IMPORTED_MODULE_28__["MyFilmsPageComponent"] },
                            { path: "**", component: _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_31__["NotFoundComponent"] },
                        ]
                    }
                ])
            ],
            declarations: [_layout_client_layout_client_layout_component__WEBPACK_IMPORTED_MODULE_2__["ClientLayoutComponent"],
                _pages_index_page_index_page_component__WEBPACK_IMPORTED_MODULE_3__["IndexPageComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                _pages_films_page_films_page_component__WEBPACK_IMPORTED_MODULE_6__["FilmsPageComponent"], _components_films_list_films_list_component__WEBPACK_IMPORTED_MODULE_7__["FilmsListComponent"],
                _components_film_item_list_film_item_list_component__WEBPACK_IMPORTED_MODULE_8__["FilmItemListComponent"], _pages_online_page_online_page_component__WEBPACK_IMPORTED_MODULE_9__["OnlinePageComponent"],
                _components_player_player_component__WEBPACK_IMPORTED_MODULE_10__["PlayerComponent"], _components_lr_block_lr_block_component__WEBPACK_IMPORTED_MODULE_11__["LrBlockComponent"],
                _components_rating_rating_component__WEBPACK_IMPORTED_MODULE_12__["RatingComponent"], _components_features_features_component__WEBPACK_IMPORTED_MODULE_13__["FeaturesComponent"],
                _components_actors_list_actors_list_component__WEBPACK_IMPORTED_MODULE_14__["ActorsListComponent"],
                _pipes_forNumber_pipe__WEBPACK_IMPORTED_MODULE_15__["ForNumberPipe"],
                _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_17__["FilterComponent"], _directive_ng_value_directive__WEBPACK_IMPORTED_MODULE_19__["NgValueDirective"], _components_film_item_index_film_item_index_component__WEBPACK_IMPORTED_MODULE_23__["FilmItemIndexComponent"], _pages_name_page_name_page_component__WEBPACK_IMPORTED_MODULE_24__["NamePageComponent"], _components_fade_panel_fade_panel_component__WEBPACK_IMPORTED_MODULE_26__["FadePanelComponent"], _components_film_info_panel_film_info_panel_component__WEBPACK_IMPORTED_MODULE_27__["FilmInfoPanelComponent"], _pages_my_films_page_my_films_page_component__WEBPACK_IMPORTED_MODULE_28__["MyFilmsPageComponent"], _components_carusel_films_carusel_films_component__WEBPACK_IMPORTED_MODULE_29__["CaruselFilmsComponent"], _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_31__["NotFoundComponent"]
            ],
            providers: [_resolvers_films_resolver__WEBPACK_IMPORTED_MODULE_16__["FilmsResolver"], _resolvers_film_resolver__WEBPACK_IMPORTED_MODULE_21__["FilmResolver"], _resolvers_index_films_resolver__WEBPACK_IMPORTED_MODULE_22__["IndexFilmsResolver"], _resolvers_name_resolver__WEBPACK_IMPORTED_MODULE_25__["NameResolver"]]
        })
    ], ClientModule);
    return ClientModule;
}());



/***/ }),

/***/ "./src/app/client/components/actors-list/actors-list.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/client/components/actors-list/actors-list.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row m-0 mb-4 d-flex justify-content-start\">\n  <small class=\"w-100  pr-3 text-white\">{{title}}</small>\n  <div class=\"col-4 p-0\" *ngFor=\"let name of names\">\n    <a class=\"link text-white d-flex justify-content-center row m-0\" [routerLink]=\"['/name',name._id]\">\n      <img *ngIf=\"full\" [src]=\"name.poster_thumb ? name.poster_thumb : '/static/images/nophoto.jpg'\" [alt]=\"name.name\" class=\"w-100 img\"> {{name.name}}\n    </a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/client/components/actors-list/actors-list.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/client/components/actors-list/actors-list.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img {\n  height: 130px;\n  padding: 0.4em;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 10px;\n  margin-top: 4px; }\n\n.link {\n  color: white;\n  text-align: center;\n  font-size: 0.7rem; }\n"

/***/ }),

/***/ "./src/app/client/components/actors-list/actors-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/client/components/actors-list/actors-list.component.ts ***!
  \************************************************************************/
/*! exports provided: ActorsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActorsListComponent", function() { return ActorsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ActorsListComponent = /** @class */ (function () {
    function ActorsListComponent() {
        this.full = true;
    }
    ActorsListComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ActorsListComponent.prototype, "names", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ActorsListComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ActorsListComponent.prototype, "full", void 0);
    ActorsListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'my-actors-list',
            template: __webpack_require__(/*! ./actors-list.component.html */ "./src/app/client/components/actors-list/actors-list.component.html"),
            styles: [__webpack_require__(/*! ./actors-list.component.scss */ "./src/app/client/components/actors-list/actors-list.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ActorsListComponent);
    return ActorsListComponent;
}());



/***/ }),

/***/ "./src/app/client/components/carusel-films/carusel-films.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/client/components/carusel-films/carusel-films.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row m-0 col-12\">\n  <div class=\"title\">\n    <h3>{{title}}:</h3>\n  </div>\n</div>\n<ngu-carousel [inputs]=\"carouselOne\" (carouselLoad)=\"carLoad($event)\">\n  <ngu-item class=\"d-flex justify-content-center\" NguCarouselItem *ngFor=\"let film of films\">\n    <my-film-item-index class=\"col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center\" [film]=\"film\"></my-film-item-index>\n  </ngu-item>\n\n  <button NguCarouselPrev class='btn leftRs'>&lt;</button>\n  <button NguCarouselNext class='btn rightRs'>&gt;</button>\n</ngu-carousel>"

/***/ }),

/***/ "./src/app/client/components/carusel-films/carusel-films.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/client/components/carusel-films/carusel-films.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ignore {\n  pointer-events: none; }\n\n.pclick {\n  pointer-events: auto; }\n\n.title {\n  background-color: #dc3545;\n  color: #fff;\n  border-left: 1px  solid #979797;\n  border-top: 1px  solid #979797;\n  border-right: 1px  solid #979797;\n  border-radius: 8px 8px 0 0;\n  padding-left: 18px;\n  padding-right: 18px;\n  padding-top: 6px;\n  margin-top: 12px; }\n\nh3 {\n  font-size: 0.95rem;\n  font-weight: 400 !important; }\n\n.leftRs {\n  background: #dc3545;\n  position: absolute;\n  margin: auto;\n  top: -50px;\n  bottom: 0;\n  width: 50px;\n  height: 50px;\n  outline: none;\n  box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, 0.3);\n  border-radius: 999px;\n  border: 2px solid white;\n  left: 0; }\n\n.rightRs {\n  background: #dc3545;\n  position: absolute;\n  margin: auto;\n  outline: none;\n  top: -50px;\n  bottom: 0;\n  width: 50px;\n  border: 2px solid white;\n  height: 50px;\n  box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, 0.3);\n  border-radius: 999px;\n  right: 0; }\n"

/***/ }),

/***/ "./src/app/client/components/carusel-films/carusel-films.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/client/components/carusel-films/carusel-films.component.ts ***!
  \****************************************************************************/
/*! exports provided: CaruselFilmsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaruselFilmsComponent", function() { return CaruselFilmsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var CaruselFilmsComponent = /** @class */ (function () {
    function CaruselFilmsComponent(platformId) {
        this.platformId = platformId;
        this.title = "";
        this.grid = { xs: 2, sm: 3, md: 4, lg: 6, all: 0 };
    }
    CaruselFilmsComponent.prototype.ngOnInit = function () {
        this.carouselOne = {
            grid: this.grid,
            slide: 1,
            speed: 1000,
            // interval: 1100,
            point: {
                visible: true
            },
            load: 5,
            touch: false,
            loop: true,
            custom: 'banner'
        };
    };
    CaruselFilmsComponent.prototype.carLoad = function (e) {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CaruselFilmsComponent.prototype, "films", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CaruselFilmsComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CaruselFilmsComponent.prototype, "grid", void 0);
    CaruselFilmsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'my-carusel-films',
            template: __webpack_require__(/*! ./carusel-films.component.html */ "./src/app/client/components/carusel-films/carusel-films.component.html"),
            styles: [__webpack_require__(/*! ./carusel-films.component.scss */ "./src/app/client/components/carusel-films/carusel-films.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])),
        __metadata("design:paramtypes", [Object])
    ], CaruselFilmsComponent);
    return CaruselFilmsComponent;
}());



/***/ }),

/***/ "./src/app/client/components/fade-panel/fade-panel.component.html":
/*!************************************************************************!*\
  !*** ./src/app/client/components/fade-panel/fade-panel.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"p-2 bg-light  d-lg-none\" [ngClass]=\"isShow ? 'panel':'panelr'\">\n  <ng-content></ng-content>\n</div>\n\n<div *ngIf=\"!isShow && !minWidth\" [ngClass]=\"'cpanel'\" (click)=\"toggleShow()\"></div>\n\n<button *ngIf=\"!minWidth\" (click)=\"toggleShow()\" class=\"divrot btn btn-info border-0 rounded-0\">{{name | uppercase}}</button>"

/***/ }),

/***/ "./src/app/client/components/fade-panel/fade-panel.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/client/components/fade-panel/fade-panel.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".divrot {\n  position: fixed;\n  -webkit-transform: rotate(-90deg);\n          transform: rotate(-90deg);\n  -webkit-transform-origin: right bottom;\n          transform-origin: right bottom;\n  right: 0;\n  top: 40%;\n  z-index: 10000; }\n\n.panel {\n  position: fixed;\n  right: -320px;\n  width: 320px;\n  top: 0;\n  bottom: 0;\n  overflow-y: auto;\n  opacity: 0;\n  z-index: 9999;\n  transition: opacity 0.1s linear, right 0.1s linear;\n  border-left: 1px solid #d3d3d3; }\n\n.panelr {\n  border-left: 1px solid #d3d3d3;\n  position: fixed;\n  right: 0;\n  width: 320px;\n  top: 0;\n  bottom: 0;\n  overflow-y: auto;\n  opacity: 1;\n  z-index: 9999;\n  transition: opacity 0.1s linear, right 0.1s linear; }\n\n.cpanel {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(35, 18, 18, 0.5);\n  z-index: 8888; }\n"

/***/ }),

/***/ "./src/app/client/components/fade-panel/fade-panel.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/client/components/fade-panel/fade-panel.component.ts ***!
  \**********************************************************************/
/*! exports provided: FadePanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FadePanelComponent", function() { return FadePanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var FadePanelComponent = /** @class */ (function () {
    function FadePanelComponent(platformId) {
        this.platformId = platformId;
        this.width = 991;
        this.name = "";
        this.isShow = true;
        this.minWidth = false;
    }
    FadePanelComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            this.setButtonShow();
            window.onresize = function (e) {
                _this.setButtonShow();
            };
        }
    };
    FadePanelComponent.prototype.setButtonShow = function () {
        if (window.innerWidth > this.width) {
            this.isShow = false;
            this.minWidth = true;
        }
        else {
            this.isShow = true;
            this.minWidth = false;
        }
    };
    FadePanelComponent.prototype.toggleShow = function () {
        this.isShow = !this.isShow;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FadePanelComponent.prototype, "name", void 0);
    FadePanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'my-fade-panel',
            template: __webpack_require__(/*! ./fade-panel.component.html */ "./src/app/client/components/fade-panel/fade-panel.component.html"),
            styles: [__webpack_require__(/*! ./fade-panel.component.scss */ "./src/app/client/components/fade-panel/fade-panel.component.scss")],
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])),
        __metadata("design:paramtypes", [Object])
    ], FadePanelComponent);
    return FadePanelComponent;
}());



/***/ }),

/***/ "./src/app/client/components/features/features.component.html":
/*!********************************************************************!*\
  !*** ./src/app/client/components/features/features.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button *ngIf=\"needBtn\" class=\"btn btn-dark float-right\" (click)=\"btnShow = !btnShow\">{{!btnShow?'Показать':'Скрыть'}}</button>\n<div class=\"w-100 border border-secondary  rounded\">\n  <div *ngFor=\"let f of features;let i = index\" [ngClass]=\"[i>1 && !btnShow?'d-none':'']\" class=\"small p-2 border-bottom border-secondary\">\n    {{f}}\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/client/components/features/features.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/client/components/features/features.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/client/components/features/features.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/client/components/features/features.component.ts ***!
  \******************************************************************/
/*! exports provided: FeaturesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesComponent", function() { return FeaturesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FeaturesComponent = /** @class */ (function () {
    function FeaturesComponent() {
        this.needBtn = false;
        this.btnShow = false;
    }
    FeaturesComponent.prototype.ngOnInit = function () {
    };
    FeaturesComponent.prototype.ngOnChanges = function () {
        this.featuresLetgth = this.features.length;
        if (this.featuresLetgth > 2) {
            this.needBtn = true;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], FeaturesComponent.prototype, "features", void 0);
    FeaturesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'my-features',
            template: __webpack_require__(/*! ./features.component.html */ "./src/app/client/components/features/features.component.html"),
            styles: [__webpack_require__(/*! ./features.component.scss */ "./src/app/client/components/features/features.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FeaturesComponent);
    return FeaturesComponent;
}());



/***/ }),

/***/ "./src/app/client/components/film-info-panel/film-info-panel.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/client/components/film-info-panel/film-info-panel.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w-100 bg\">\n  <img [src]=\"film.poster? film.poster : '/static/images/empty.jpeg'\" class=\"w-100  img-thumbnail bg-secondary border border-dark\"\n    alt=\"\">\n\n\n\n  <my-lr-block class=\"mt-3 d-block\">\n    <span title>{{film.type | titlecase}}</span>\n    <span>{{film.name}}</span>\n  </my-lr-block>\n  <hr>\n\n  <my-lr-block>\n    <span title>Рейтинг:</span>\n    <my-rating [rating]=\"film.kp\"></my-rating>\n  </my-lr-block>\n  <hr>\n  <my-lr-block>\n    <span title>Страна:</span>\n    <div class=\"w-100 text-light\" *ngFor=\"let g of film.counrty\">\n      {{g}}\n    </div>\n  </my-lr-block>\n  <hr>\n\n  <my-lr-block>\n    <span title>Жанр:</span>\n    <div class=\"w-100 text-light\" *ngFor=\"let g of film.genre\">\n      {{g}}\n    </div>\n  </my-lr-block>\n  <hr>\n\n  <my-lr-block class=\"d-block \">\n    <span title>Время:</span>\n    <span>{{film.time}}</span>\n  </my-lr-block>\n  <hr>\n\n  <my-lr-block *ngIf=\"film.regisers.length !== 0\">\n    <span title>Режиссер:</span>\n\n    <a *ngFor=\"let name of film.regisers\" class=\"d-block\" [routerLink]=\"['/name',name._id]\">\n      {{name.name}}\n    </a>\n\n  </my-lr-block>\n  <hr>\n\n\n  <my-lr-block *ngIf=\"film.scenarists.length !== 0\" class=\"d-block \">\n    <span title>Сценарий:</span>\n    <a *ngFor=\"let name of film.scenarists\" class=\"\" [routerLink]=\"['/name',name._id]\">\n      {{name.name}}\n    </a>\n  </my-lr-block>\n  <hr>\n\n\n  <my-lr-block *ngIf=\"film.produsers.length !== 0\" class=\"d-block \">\n    <span title>Продюсер:</span>\n    <a *ngFor=\"let name of film.produsers\" class=\"\" [routerLink]=\"['/name',name._id]\">\n      {{name.name}}\n    </a>\n  </my-lr-block>\n  <hr>\n\n\n\n  <my-lr-block *ngIf=\"film.operators.length !== 0\" class=\"d-block \">\n    <span title>Оператор:</span>\n    <a *ngFor=\"let name of film.operators\" class=\"\" [routerLink]=\"['/name',name._id]\">\n      {{name.name}}\n    </a>\n  </my-lr-block>\n  <hr>\n\n\n  <my-lr-block *ngIf=\"film.compositors.length !== 0\" class=\"d-block \">\n    <span title>Композитор:</span>\n    <a *ngFor=\"let name of film.compositors\" class=\"\" [routerLink]=\"['/name',name._id]\">\n      {{name.name}}\n    </a>\n  </my-lr-block>\n  <hr>\n\n\n  <my-lr-block *ngIf=\"film.hudognik.length !== 0\" class=\"d-block \">\n    <span title>Художник:</span>\n    <a *ngFor=\"let name of film.hudognik\" class=\"\" [routerLink]=\"['/name',name._id]\">\n      {{name.name}}\n    </a>\n  </my-lr-block>\n  <hr>\n\n  <my-lr-block *ngIf=\"film.montag.length !== 0\" class=\"d-block \">\n    <span title>Монтаж:</span>\n    <a *ngFor=\"let name of film.montag\" class=\"\" [routerLink]=\"['/name',name._id]\">\n      {{name.name}}\n    </a>\n  </my-lr-block>\n  <hr>\n\n\n  <my-actors-list *ngIf=\"film.actors.length !== 0\" [names]=\"film.actors\" [title]=\"'В ролях:'\"></my-actors-list>\n</div>"

/***/ }),

/***/ "./src/app/client/components/film-info-panel/film-info-panel.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/client/components/film-info-panel/film-info-panel.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg {\n  background: #63493e;\n  /* Old browsers */\n  /* FF3.6-15 */\n  /* Chrome10-25,Safari5.1-6 */\n  background: linear-gradient(to right, #63493e 0%, #3f3636 50%, #413636 86%);\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#63493e', endColorstr='#413636',GradientType=1 );\n  /* IE6-9 */ }\n"

/***/ }),

/***/ "./src/app/client/components/film-info-panel/film-info-panel.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/client/components/film-info-panel/film-info-panel.component.ts ***!
  \********************************************************************************/
/*! exports provided: FilmInfoPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmInfoPanelComponent", function() { return FilmInfoPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_film_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../models/film.model */ "../models/film.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FilmInfoPanelComponent = /** @class */ (function () {
    function FilmInfoPanelComponent() {
    }
    FilmInfoPanelComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_film_model__WEBPACK_IMPORTED_MODULE_1__["Film"])
    ], FilmInfoPanelComponent.prototype, "film", void 0);
    FilmInfoPanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'my-film-info-panel',
            template: __webpack_require__(/*! ./film-info-panel.component.html */ "./src/app/client/components/film-info-panel/film-info-panel.component.html"),
            styles: [__webpack_require__(/*! ./film-info-panel.component.scss */ "./src/app/client/components/film-info-panel/film-info-panel.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FilmInfoPanelComponent);
    return FilmInfoPanelComponent;
}());



/***/ }),

/***/ "./src/app/client/components/film-item-index/film-item-index.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/client/components/film-item-index/film-item-index.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <a [routerLink]=\"['/online',film._id,slug]\" style=\"pointer-events: auto\">\n    <span class=\"cont\">\n      <img [src]=\"film.poster_thumb? film.poster_thumb : '/static/images/empty.jpeg'\" [alt]=\"film.name\">\n      <small class=\"title\">{{film.name}}</small>\n    </span>\n  </a>\n</div>"

/***/ }),

/***/ "./src/app/client/components/film-item-index/film-item-index.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/client/components/film-item-index/film-item-index.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n  width: 150px;\n  height: 225px;\n  margin: 4px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n\nimg {\n  width: 150px;\n  height: 225px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border: 2px solid #979797;\n  border-radius: 5px; }\n\n.cont {\n  position: relative;\n  display: block;\n  width: 100%; }\n\na:hover {\n  box-shadow: 0 0 24px 0 #ff000033;\n  display: block; }\n\n.title {\n  position: absolute;\n  bottom: 0;\n  min-height: 50px;\n  left: 0;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n  right: 0;\n  text-align: center;\n  border-top: 1px solid #fff;\n  background: rgba(24, 18, 18, 0.85);\n  color: white;\n  padding-bottom: 6px; }\n"

/***/ }),

/***/ "./src/app/client/components/film-item-index/film-item-index.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/client/components/film-item-index/film-item-index.component.ts ***!
  \********************************************************************************/
/*! exports provided: FilmItemIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmItemIndexComponent", function() { return FilmItemIndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_film_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../models/film.model */ "../models/film.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CyrillicToTranslit = __webpack_require__(/*! cyrillic-to-translit-js */ "./node_modules/cyrillic-to-translit-js/CyrillicToTranslit.js");
var FilmItemIndexComponent = /** @class */ (function () {
    function FilmItemIndexComponent() {
    }
    FilmItemIndexComponent.prototype.ngOnInit = function () {
        this.slug = CyrillicToTranslit().transform(this.film.name, "-").toLocaleLowerCase().replace(/[^0-9a-z-]/gi, '');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_film_model__WEBPACK_IMPORTED_MODULE_1__["Film"])
    ], FilmItemIndexComponent.prototype, "film", void 0);
    FilmItemIndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'my-film-item-index',
            template: __webpack_require__(/*! ./film-item-index.component.html */ "./src/app/client/components/film-item-index/film-item-index.component.html"),
            styles: [__webpack_require__(/*! ./film-item-index.component.scss */ "./src/app/client/components/film-item-index/film-item-index.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FilmItemIndexComponent);
    return FilmItemIndexComponent;
}());



/***/ }),

/***/ "./src/app/client/components/film-item-list/film-item-list.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/client/components/film-item-list/film-item-list.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/online',film._id,slug]\" class=\"my-2\">\n  <div class=\"row w-100 m-0 p-2\">\n    <div class=\"col-aut \">\n      <div class=\"position-relative\">\n        <img [src]=\"film.poster_thumb? film.poster_thumb : '/static/images/empty.jpeg'\" class=\"img-thumb\" [alt]=\"film.name + ' - смотреть онлайн' \">\n        <div class=\"time\">\n          <small class=\"tshadow d-flex align-content-center\">{{film.time}}</small>\n        </div>\n      </div>\n    </div>\n    <div class=\"col d-flex pr-0 align-content-start flex-column m-0\">\n      <h1 class=\"w-100 text-primary\">{{film.name}} ({{film.year}})</h1>\n      <div class=\"w-100 description mb-auto\">\n        {{film.description | slice:0:500 }}...\n      </div>\n\n      <div class=\"w-100 align-self-end bottom p-0 justify-content-end d-flex\">\n        <div class=\"col p-0 \">\n          <div class=\"mt-1\">\n            <small class=\"text-danger\">Страна: </small>\n            <small *ngFor=\"let g of film.counrty\">{{g}} </small>\n\n          </div>\n          <div class=\"mt-0\">\n\n            <small class=\"text-danger\"> Жанр: </small>\n            <small *ngFor=\"let g of film.genre\">{{g | titlecase}} </small>\n\n          </div>\n        </div>\n        <my-rating [rating]=\"film.kp\"></my-rating>\n      </div>\n    </div>\n  </div>\n</a>"

/***/ }),

/***/ "./src/app/client/components/film-item-list/film-item-list.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/client/components/film-item-list/film-item-list.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-thumb {\n  width: 150px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 2px;\n  border: 1px solid #9b9b9b;\n  display: block;\n  height: 224px; }\n\nh1 {\n  font-size: 1.1rem; }\n\n.time {\n  position: absolute;\n  background-color: rgba(66, 66, 66, 0.55);\n  border-radius: 4px;\n  color: white;\n  bottom: 4px;\n  right: 4px;\n  z-index: 1;\n  border: 1px dashed #ffffff3b;\n  padding-left: 4px;\n  padding-right: 4px; }\n\n.tshadow {\n  text-shadow: 1px 1px 1px #000000; }\n\na {\n  display: block;\n  color: #000000;\n  text-decoration: none !important;\n  border: 1px solid #dfdfdf;\n  background-color: #f3f3f3; }\n\na:hover {\n    background-color: #ececec;\n    box-shadow: 0 0 81px -40px #e9e9e9;\n    border: 1px solid #e2e2e2; }\n\n.description {\n  font-family: Roboto,Arial, Helvetica, sans-serif;\n  font-size: 0.9rem; }\n\n.bottom {\n  padding-left: 2px; }\n\n.star {\n  width: 12px;\n  height: 12px;\n  margin-left: 4px; }\n"

/***/ }),

/***/ "./src/app/client/components/film-item-list/film-item-list.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/client/components/film-item-list/film-item-list.component.ts ***!
  \******************************************************************************/
/*! exports provided: FilmItemListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmItemListComponent", function() { return FilmItemListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_film_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../models/film.model */ "../models/film.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CyrillicToTranslit = __webpack_require__(/*! cyrillic-to-translit-js */ "./node_modules/cyrillic-to-translit-js/CyrillicToTranslit.js");
var FilmItemListComponent = /** @class */ (function () {
    function FilmItemListComponent() {
    }
    FilmItemListComponent.prototype.ngOnInit = function () {
        this.slug = CyrillicToTranslit().transform(this.film.name, "-").toLocaleLowerCase().replace(/[^0-9a-z-]/gi, '');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_film_model__WEBPACK_IMPORTED_MODULE_1__["Film"])
    ], FilmItemListComponent.prototype, "film", void 0);
    FilmItemListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'my-film-item-list',
            template: __webpack_require__(/*! ./film-item-list.component.html */ "./src/app/client/components/film-item-list/film-item-list.component.html"),
            styles: [__webpack_require__(/*! ./film-item-list.component.scss */ "./src/app/client/components/film-item-list/film-item-list.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FilmItemListComponent);
    return FilmItemListComponent;
}());



/***/ }),

/***/ "./src/app/client/components/films-list/films-list.component.html":
/*!************************************************************************!*\
  !*** ./src/app/client/components/films-list/films-list.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row m-0 w-100 p-0\">\n  <my-film-item-list *ngFor=\"let film of films | paginate: pagination\" [film]=\"film\" class=\"w-100\"></my-film-item-list>\n</div>"

/***/ }),

/***/ "./src/app/client/components/films-list/films-list.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/client/components/films-list/films-list.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/client/components/films-list/films-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/client/components/films-list/films-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: FilmsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmsListComponent", function() { return FilmsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_films_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/films.service */ "./src/app/services/films.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FilmsListComponent = /** @class */ (function () {
    function FilmsListComponent(filmServ) {
        this.filmServ = filmServ;
        this.paginationEnabled = true;
        this.pagination = { itemsPerPage: 1, totalItems: 1, currentPage: 1 };
    }
    FilmsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.paginationEnabled) {
            this.filmServ.films$.subscribe(function (s) { _this.pagination = s.pagination; _this.pagination.id = "some_id"; });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], FilmsListComponent.prototype, "films", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FilmsListComponent.prototype, "paginationEnabled", void 0);
    FilmsListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'my-films-list',
            template: __webpack_require__(/*! ./films-list.component.html */ "./src/app/client/components/films-list/films-list.component.html"),
            styles: [__webpack_require__(/*! ./films-list.component.scss */ "./src/app/client/components/films-list/films-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_films_service__WEBPACK_IMPORTED_MODULE_1__["FilmsService"]])
    ], FilmsListComponent);
    return FilmsListComponent;
}());



/***/ }),

/***/ "./src/app/client/components/filter/filter.component.html":
/*!****************************************************************!*\
  !*** ./src/app/client/components/filter/filter.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #form=\"ngForm\">\n\n\n  <div class=\"row m-0  rounded main p-2 mb-1\">\n    <div class=\"col-12 p-0 mb-2\">\n      <small>Сортировать по:</small>\n    </div>\n\n    <label class=\"small col-12 p-0 pl-3\">\n      <input class=\"form-control-feedback\" name=\"sort\" type=\"radio\" [(ngModel)]=\"filter.sortBy\" value=\"timespan\"> Дате добавления\n    </label>\n    <label class=\"small col-12 p-0 pl-3\">\n      <input class=\"form-control-feedback\" name=\"sort\" type=\"radio\" [(ngModel)]=\"filter.sortBy\" value=\"count\"> Популярности\n    </label>\n    <label class=\"small col-12 p-0 pl-3\">\n      <input class=\"form-control-feedback\" name=\"sort\" type=\"radio\" [(ngModel)]=\"filter.sortBy\" value=\"kp\"> Рейтингу\n    </label>\n    <label class=\"small col-12 p-0 pl-3\">\n      <input class=\"form-control-feedback\" name=\"sort\" type=\"radio\" [(ngModel)]=\"filter.sortBy\" value=\"year\"> Году\n    </label>\n\n  </div>\n\n\n  <hr>\n\n  <div class=\"row m-0 rounded main p-2\">\n    <div class=\"col-12 p-0\">\n      <small>Жанры:</small>\n    </div>\n\n    <div class=\"col-12 p-0\">\n      <label>\n        <input name=\"all\" [(ngModel)]=\"allGenreCheck\" #all (ngModelChange)=\"ClearGenre($event)\" class=\"form-control-feedback\" type=\"checkbox\">\n        <small class=\"pl-1\"> Все жанры </small>\n      </label>\n    </div>\n    <div *ngFor=\"let g of genres\" class=\"col-6 p-0\">\n      <label>\n        <input name=\"genre\" class=\"form-control-feedback genre\" (ngModelChange)=\"SetAllFalse($event)\" [(ngModel)]=\"filter.genre\"\n          [ngValue]=\"g\" type=\"checkbox\">\n        <small class=\"pl-1\">{{g | titlecase }}</small>\n      </label>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/client/components/filter/filter.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/client/components/filter/filter.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input:focus {\n  outline: none;\n  box-shadow: none; }\n\ninput, label {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n"

/***/ }),

/***/ "./src/app/client/components/filter/filter.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/client/components/filter/filter.component.ts ***!
  \**************************************************************/
/*! exports provided: FilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterComponent", function() { return FilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_films_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/films.service */ "./src/app/services/films.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_film_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../models/film.model */ "../models/film.model.ts");
/* harmony import */ var _models_films_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../models/films.model */ "../models/films.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var FilterComponent = /** @class */ (function () {
    function FilterComponent(filmsServ, route, router) {
        this.filmsServ = filmsServ;
        this.route = route;
        this.router = router;
        this.genres = _models_film_model__WEBPACK_IMPORTED_MODULE_5__["Genres"];
        this.filter = new _models_films_model__WEBPACK_IMPORTED_MODULE_6__["FilmFilter"]();
        this.allGenreCheck = true;
    }
    FilterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filterSubs = this.filmsServ.filter$.subscribe(function (s) {
            _this.filter = s;
            _this.allGenreCheck = _this.filter.genre.length > 0 ? false : true;
        });
        this.formSubs = this.from.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(100), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["skipLast"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(1500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])()).subscribe(function (s) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.filter.page = 1;
                        this.filmsServ.setFilter(this.filter);
                        return [4 /*yield*/, this.filmsServ.getFilms().toPromise()];
                    case 1:
                        _a.sent();
                        window.scrollTo(0, 0);
                        return [2 /*return*/];
                }
            });
        }); });
    };
    FilterComponent.prototype.ClearGenre = function (e) {
        var _this = this;
        this.filter.genre = [];
        setTimeout(function () {
            if (_this.filter.genre.length === 0) {
                _this.allGenreCheck = true;
            }
        }, 0);
    };
    FilterComponent.prototype.SetAllFalse = function (e) {
        var _this = this;
        setTimeout(function () {
            if (_this.filter.genre.length > 0) {
                _this.allGenreCheck = false;
            }
            else {
                _this.allGenreCheck = true;
            }
        }, 0);
    };
    FilterComponent.prototype.ngOnDestroy = function () {
        this.formSubs.unsubscribe();
        this.filterSubs.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('form'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"])
    ], FilterComponent.prototype, "from", void 0);
    FilterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'my-filter',
            template: __webpack_require__(/*! ./filter.component.html */ "./src/app/client/components/filter/filter.component.html"),
            styles: [__webpack_require__(/*! ./filter.component.scss */ "./src/app/client/components/filter/filter.component.scss")],
        }),
        __metadata("design:paramtypes", [_services_films_service__WEBPACK_IMPORTED_MODULE_1__["FilmsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], FilterComponent);
    return FilterComponent;
}());



/***/ }),

/***/ "./src/app/client/components/lr-block/lr-block.component.html":
/*!********************************************************************!*\
  !*** ./src/app/client/components/lr-block/lr-block.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row w-100 m-0 p-0\">\n  <div class=\"col-4 text-white small\">\n    <ng-content select=\"[title]\"></ng-content>\n  </div>\n  <div class=\"col-8 text-light d-flex flex-column  m-0 small\">\n    <ng-content></ng-content>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/client/components/lr-block/lr-block.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/client/components/lr-block/lr-block.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/client/components/lr-block/lr-block.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/client/components/lr-block/lr-block.component.ts ***!
  \******************************************************************/
/*! exports provided: LrBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LrBlockComponent", function() { return LrBlockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LrBlockComponent = /** @class */ (function () {
    function LrBlockComponent() {
    }
    LrBlockComponent.prototype.ngOnInit = function () {
    };
    LrBlockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'my-lr-block',
            template: __webpack_require__(/*! ./lr-block.component.html */ "./src/app/client/components/lr-block/lr-block.component.html"),
            styles: [__webpack_require__(/*! ./lr-block.component.scss */ "./src/app/client/components/lr-block/lr-block.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LrBlockComponent);
    return LrBlockComponent;
}());



/***/ }),

/***/ "./src/app/client/components/navbar/navbar.component.html":
/*!****************************************************************!*\
  !*** ./src/app/client/components/navbar/navbar.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row w-100 m-0 p-0 navbar-main\">\n  <div class=\"col-auto p-0\">\n    <a class=\"d-none d-md-inline\" routerLink=\"/\">\n      <img src=\"/static/images/logo.png\" alt=\"\">\n    </a>\n    <a class=\"d-inline d-md-none\" routerLink=\"/\">\n      <img src=\"/static/images/logo-min.png\" alt=\"\">\n    </a>\n  </div>\n  <div class=\"col row m-0 p-0 d-flex align-content-center justify-content-start align-items-stretch pl-3\">\n    <a [routerLink]=\"['/','films']\" [routerLinkActive]=\"'active'\" class=\"navbar-link mr-3\">Фильмы</a>\n    <a [routerLink]=\"['/','serials']\" [routerLinkActive]=\"'active'\" class=\"navbar-link mr-3\">Сериалы</a>\n    <a [routerLink]=\"['/my/playlist']\" [routerLinkActive]=\"'active'\" class=\"navbar-link mr-3\">Мои фильмы</a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/client/components/navbar/navbar.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/client/components/navbar/navbar.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-main {\n  height: 56px;\n  background-color: #fff;\n  box-shadow: 0 3px 3px -3px #d6d6d6; }\n\n.navbar-link {\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  padding-left: 20px;\n  padding-right: 20px;\n  font-weight: 500;\n  color: #3a2e2e;\n  text-decoration: none;\n  text-transform: uppercase;\n  border-bottom: 2px solid #fff;\n  font-size: 0.85rem; }\n\n.navbar-link:hover {\n    border-bottom: 2px solid #f8e7e7;\n    background-color: #f6f6f6; }\n\n.navbar-link:active {\n    color: #550e0e; }\n\n.navbar-link.active {\n    border-bottom: 2px solid red;\n    background-color: #f3f3f3; }\n"

/***/ }),

/***/ "./src/app/client/components/navbar/navbar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/client/components/navbar/navbar.component.ts ***!
  \**************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'my-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/client/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/client/components/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/client/components/player/player.component.html":
/*!****************************************************************!*\
  !*** ./src/app/client/components/player/player.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"visearch\" class=\"pl-container d-flex justify-content-center align-items-center text-light\" #moon></div>"

/***/ }),

/***/ "./src/app/client/components/player/player.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/client/components/player/player.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pl-container {\n  border: 2px solid #686868;\n  background: #000; }\n"

/***/ }),

/***/ "./src/app/client/components/player/player.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/client/components/player/player.component.ts ***!
  \**************************************************************/
/*! exports provided: PlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerComponent", function() { return PlayerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_films_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/films.service */ "./src/app/services/films.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var PlayerComponent = /** @class */ (function () {
    function PlayerComponent(filmServ, http, render, platformId) {
        this.filmServ = filmServ;
        this.http = http;
        this.render = render;
        this.platformId = platformId;
    }
    PlayerComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
            window.addEventListener("resize", this.onResize.bind(this));
            this.onResize();
        }
        this.filmServ.film$.subscribe(function (s) {
            _this.film = s.film;
            if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(_this.platformId)) {
                _this.addMoonPlayer();
                _this.onResize();
            }
        });
    };
    PlayerComponent.prototype.notFoundCb = function () {
        var nf = "<div class=\"w-100 text-center small d-flex justify-content-center align-items-center\">\u0412\u0438\u0434\u0435\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043D\u043E.</div>";
        document.getElementById("visearch").innerHTML = nf;
    };
    PlayerComponent.prototype.onResize = function () {
        try {
            if (this.moonPlayerEl != undefined) {
                var height = Math.round(this.moonPlayerEl.nativeElement.scrollWidth / 1.77);
                this.render.setAttribute(this.moonPlayerEl.nativeElement, "style", "height:" + (height + 4) + 'px');
                if (this.iFrame) {
                    this.render.setAttribute(this.iFrame, "style", "height:" + height + 'px');
                }
            }
        }
        catch (error) {
            console.log(error);
        }
    };
    PlayerComponent.prototype.FilmNotPublic = function () {
        var nf = "<div class=\"w-100 text-center small d-flex justify-content-center align-items-center\">\u0412\u0438\u0434\u0435\u043E \u0443\u0434\u0430\u043B\u0435\u043D\u043E \u043F\u043E \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044E \u043F\u0440\u0430\u0432\u043E\u043E\u0431\u043B\u0430\u0434\u0430\u0442\u0435\u043B\u044F.</div>";
        document.getElementById("visearch").innerHTML = nf;
    };
    PlayerComponent.prototype.addMoonPlayer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var iframe_url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.film.isPublic) {
                            this.FilmNotPublic();
                            return [2 /*return*/];
                        }
                        this.moonPlayerEl.nativeElement.innerHTML = "";
                        return [4 /*yield*/, this.filmServ.getIframeByFilmId(this.film._id).toPromise()];
                    case 1:
                        iframe_url = _a.sent();
                        if (!iframe_url)
                            this.notFoundCb();
                        this.iFrame = document.createElement("iframe");
                        this.iFrame.src = iframe_url;
                        this.iFrame.allowFullscreen = true;
                        this.iFrame.width = "100%";
                        this.iFrame.height = "100%";
                        this.moonPlayerEl.nativeElement.appendChild(this.iFrame);
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("moon"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], PlayerComponent.prototype, "moonPlayerEl", void 0);
    PlayerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'my-player',
            template: __webpack_require__(/*! ./player.component.html */ "./src/app/client/components/player/player.component.html"),
            styles: [__webpack_require__(/*! ./player.component.scss */ "./src/app/client/components/player/player.component.scss")],
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])),
        __metadata("design:paramtypes", [_services_films_service__WEBPACK_IMPORTED_MODULE_1__["FilmsService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            Object])
    ], PlayerComponent);
    return PlayerComponent;
}());



/***/ }),

/***/ "./src/app/client/components/rating/rating.component.html":
/*!****************************************************************!*\
  !*** ./src/app/client/components/rating/rating.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-auto d-flex align-items-end p-0 pb-1\">\n  <img *ngFor=\"let item of kp\" class=\"star\" src=\"/static/images/star.png\" alt=\"\">\n  <img *ngFor=\"let item of kpOfcet\" class=\"star\" src=\"/static/images/nostar.png\" alt=\"\">\n</div>"

/***/ }),

/***/ "./src/app/client/components/rating/rating.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/client/components/rating/rating.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".star {\n  width: 12px;\n  height: 12px;\n  margin-left: 4px; }\n"

/***/ }),

/***/ "./src/app/client/components/rating/rating.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/client/components/rating/rating.component.ts ***!
  \**************************************************************/
/*! exports provided: RatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingComponent", function() { return RatingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RatingComponent = /** @class */ (function () {
    function RatingComponent() {
        this.rating = 5;
    }
    Object.defineProperty(RatingComponent.prototype, "kp", {
        get: function () {
            return new Array(Math.ceil(this.rating / 2));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RatingComponent.prototype, "kpOfcet", {
        get: function () {
            return new Array(Math.floor(5 - (this.rating / 2)));
        },
        enumerable: true,
        configurable: true
    });
    RatingComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], RatingComponent.prototype, "rating", void 0);
    RatingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'my-rating',
            template: __webpack_require__(/*! ./rating.component.html */ "./src/app/client/components/rating/rating.component.html"),
            styles: [__webpack_require__(/*! ./rating.component.scss */ "./src/app/client/components/rating/rating.component.scss")],
            host: { class: 'd-flex align-content-center' }
        }),
        __metadata("design:paramtypes", [])
    ], RatingComponent);
    return RatingComponent;
}());



/***/ }),

/***/ "./src/app/client/layout/client-layout/client-layout.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/client/layout/client-layout/client-layout.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row m-0\">\n        <div class=\"w-100\">\n            <my-navbar></my-navbar>\n        </div>\n        <div class=\"w-100\">\n\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/client/layout/client-layout/client-layout.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/client/layout/client-layout/client-layout.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html {\n  height: 100%; }\n\nbody {\n  background-color: #3e3535;\n  height: 100%; }\n\n.container {\n  min-height: 100%;\n  background-color: #fafafa;\n  padding: 0;\n  box-shadow: 0 0 16px 0 #884c4c; }\n"

/***/ }),

/***/ "./src/app/client/layout/client-layout/client-layout.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/client/layout/client-layout/client-layout.component.ts ***!
  \************************************************************************/
/*! exports provided: ClientLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientLayoutComponent", function() { return ClientLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_metrika_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/metrika.service */ "./src/app/services/metrika.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClientLayoutComponent = /** @class */ (function () {
    function ClientLayoutComponent(metrik) {
        this.metrik = metrik;
    }
    ClientLayoutComponent.prototype.ngOnInit = function () {
        this.metrik.EnableMetrikka();
    };
    ClientLayoutComponent.prototype.ngOnDestroy = function () {
        this.metrik.DisableMetrika();
    };
    ClientLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'my-client-layout',
            template: __webpack_require__(/*! ./client-layout.component.html */ "./src/app/client/layout/client-layout/client-layout.component.html"),
            styles: [__webpack_require__(/*! ./client-layout.component.scss */ "./src/app/client/layout/client-layout/client-layout.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_services_metrika_service__WEBPACK_IMPORTED_MODULE_1__["MetrikaService"]])
    ], ClientLayoutComponent);
    return ClientLayoutComponent;
}());



/***/ }),

/***/ "./src/app/client/pages/films-page/films-page.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/client/pages/films-page/films-page.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row w-100 m-0 p-0\">\n    <div class=\"col-12 col-lg-9 border-right br\">\n\n        <div class=\"col-12 row justify-content-center mt-4 p-0 m-0\">\n            <pagination-controls id=\"some_id\" (pageChange)=\"pageChanged($event)\" maxSize=\"9\" directionLinks=\"true\" autoHide=\"true\" previousLabel=\"назад\"\n                nextLabel=\"вперед\">\n            </pagination-controls>\n        </div>\n        <my-films-list [films]=\"films.films\"></my-films-list>\n\n        <div class=\"col-12 row justify-content-center mt-4 mb-4 p-0 m-0\">\n            <pagination-controls id=\"some_id\" (pageChange)=\"pageChanged($event)\" maxSize=\"9\" directionLinks=\"true\" autoHide=\"true\" previousLabel=\"назад\"\n                nextLabel=\"вперед\">\n            </pagination-controls>\n        </div>\n    </div>\n\n    <div class=\"col-3 py-2 px-0 d-lg-flex d-none\">\n        <my-filter></my-filter>\n    </div>\n    <my-fade-panel name=\"Фильтр\">\n        <my-filter></my-filter>\n    </my-fade-panel>\n</div>"

/***/ }),

/***/ "./src/app/client/pages/films-page/films-page.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/client/pages/films-page/films-page.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".br {\n  border-color: #c7c7c7; }\n"

/***/ }),

/***/ "./src/app/client/pages/films-page/films-page.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/client/pages/films-page/films-page.component.ts ***!
  \*****************************************************************/
/*! exports provided: FilmsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmsPageComponent", function() { return FilmsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_films_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/films.service */ "./src/app/services/films.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_films_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../models/films.model */ "../models/films.model.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var FilmsPageComponent = /** @class */ (function () {
    function FilmsPageComponent(filmsServ, route, router, title, meta) {
        this.filmsServ = filmsServ;
        this.route = route;
        this.router = router;
        this.title = title;
        this.meta = meta;
        this.films = new _models_films_model__WEBPACK_IMPORTED_MODULE_3__["Films"]();
    }
    FilmsPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subs = this.filmsServ.films$.subscribe(function (s) {
            _this.films = s;
            _this.title.setTitle("RexFilm.ru - " + _this.filmsServ.filter$.value.type + "\u044B \u043E\u043D\u043B\u0430\u0439\u043D.");
            _this.meta.updateTag({ property: "description", content: "RexFilm.ru - \u043F\u043E\u0434\u0431\u043E\u0440 " + _this.filmsServ.filter$.value.type + "\u043E\u0432 \u043F\u043E \u043A\u0440\u0438\u0442\u0435\u0440\u0438\u044F\u043C" });
        });
    };
    FilmsPageComponent.prototype.pageChanged = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.filmsServ.setFilterPage(e);
                        return [4 /*yield*/, this.filmsServ.getFilms().toPromise()];
                    case 1:
                        _a.sent();
                        window.scrollTo(0, 0);
                        return [2 /*return*/];
                }
            });
        });
    };
    FilmsPageComponent.prototype.ngOnDestroy = function () {
        this.subs.unsubscribe();
    };
    FilmsPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'my-films-page',
            template: __webpack_require__(/*! ./films-page.component.html */ "./src/app/client/pages/films-page/films-page.component.html"),
            styles: [__webpack_require__(/*! ./films-page.component.scss */ "./src/app/client/pages/films-page/films-page.component.scss")],
        }),
        __metadata("design:paramtypes", [_services_films_service__WEBPACK_IMPORTED_MODULE_1__["FilmsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Meta"]])
    ], FilmsPageComponent);
    return FilmsPageComponent;
}());



/***/ }),

/***/ "./src/app/client/pages/index-page/index-page.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/client/pages/index-page/index-page.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"p-2\">\n  <my-carusel-films *ngIf=\"indexFilms.newFilms.length > 0\" [title]=\"'Новые фильмы'\" [films]=\"indexFilms.newFilms\">\n  </my-carusel-films>\n</div>\n\n<my-carusel-films *ngIf=\"indexFilms.newSerials.length > 0\" [title]=\"'Новые сериалы'\" [films]=\"indexFilms.newSerials\">\n</my-carusel-films>\n\n<my-carusel-films *ngIf=\"indexFilms.popularFilms.length > 0\" [title]=\"'Популярные фильмы'\" [films]=\"indexFilms.popularFilms\">\n</my-carusel-films>\n\n<my-carusel-films *ngIf=\"indexFilms.popularSerials.length > 0\" [title]=\"'Популярные сериалы'\" [films]=\"indexFilms.popularSerials\">\n</my-carusel-films>\n\n<my-carusel-films *ngIf=\"indexFilms.randomFilms.length > 0\" [title]=\"'Случайные фильмы и сериалы'\" [films]=\"indexFilms.randomFilms\">\n</my-carusel-films>\n\n\n<!-- \n<div class=\"row m-0 col-12\">\n  <div class=\"title\">\n    <h3>Новые фильмы:</h3>\n  </div>\n  <div class=\"row w-100 border  m-0 py-2  border-secondary\">\n    <my-film-item-index class=\"col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center\" *ngFor=\"let film of indexFilms.newFilms\"\n      [film]=\"film\"></my-film-item-index>\n  </div>\n</div>\n\n<div class=\"row m-0 col-12 justify-content-end\">\n  <div class=\"title\">\n    <h3>Новые сериалы:</h3>\n  </div>\n  <div class=\"row w-100 border  m-0 py-2  border-secondary \">\n    <my-film-item-index class=\"col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center\" *ngFor=\"let film of indexFilms.newSerials\"\n      [film]=\"film\"></my-film-item-index>\n  </div>\n</div>\n\n<div class=\"row m-0 col-12\">\n  <div class=\"title\">\n    <h3>Популярные фильмы:</h3>\n  </div>\n  <div class=\"row w-100 border  m-0 py-2  border-secondary\">\n    <my-film-item-index class=\"col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center\" *ngFor=\"let film of indexFilms.popularFilms\"\n      [film]=\"film\"></my-film-item-index>\n  </div>\n</div>\n\n<div class=\"row m-0 col-12 justify-content-end\">\n  <div class=\"title\">\n    <h3>Популярные сериалы:</h3>\n  </div>\n  <div class=\"row w-100 border  m-0 py-2  border-secondary \">\n    <my-film-item-index class=\"col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center\" *ngFor=\"let film of indexFilms.popularSerials\"\n      [film]=\"film\"></my-film-item-index>\n  </div>\n</div>\n\n<div class=\"row m-0 col-12\">\n  <div class=\"title\">\n    <h3>Случайные фильмы и сериалы:</h3>\n  </div>\n  <div class=\"row w-100 border  m-0 py-2  border-secondary \">\n    <my-film-item-index class=\"col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center\" *ngFor=\"let film of indexFilms.randomFilms\"\n      [film]=\"film\"></my-film-item-index>\n  </div>\n</div> -->"

/***/ }),

/***/ "./src/app/client/pages/index-page/index-page.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/client/pages/index-page/index-page.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/client/pages/index-page/index-page.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/client/pages/index-page/index-page.component.ts ***!
  \*****************************************************************/
/*! exports provided: IndexPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexPageComponent", function() { return IndexPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_films_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/films.service */ "./src/app/services/films.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IndexPageComponent = /** @class */ (function () {
    function IndexPageComponent(filmServ, title, meta) {
        this.filmServ = filmServ;
        this.title = title;
        this.meta = meta;
    }
    IndexPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filmServ.indexFilms$.subscribe(function (s) { return _this.indexFilms = s; });
        this.title.setTitle("RexFilm.ru - фильмы и сериалы онлайн.");
        this.meta.updateTag({ property: "description", content: "RexFilm.ru - это большая коллекция кино, которой вам хватит надолго. Коллекция постоянно пополняется как новыми фильмами и сериалами, так и признанными шедеврами прошлых лет!" });
    };
    IndexPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'my-index-page',
            template: __webpack_require__(/*! ./index-page.component.html */ "./src/app/client/pages/index-page/index-page.component.html"),
            styles: [__webpack_require__(/*! ./index-page.component.scss */ "./src/app/client/pages/index-page/index-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_films_service__WEBPACK_IMPORTED_MODULE_1__["FilmsService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"]])
    ], IndexPageComponent);
    return IndexPageComponent;
}());



/***/ }),

/***/ "./src/app/client/pages/my-films-page/my-films-page.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/client/pages/my-films-page/my-films-page.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row m-0 p-2 position-relative\">\n  <small class=\"w-100 text-center position-absolute mt-5\">{{message}}</small>\n  <my-films-list [films]=\"films\" [paginationEnabled]=\"false\"></my-films-list>\n</div>"

/***/ }),

/***/ "./src/app/client/pages/my-films-page/my-films-page.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/client/pages/my-films-page/my-films-page.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/client/pages/my-films-page/my-films-page.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/client/pages/my-films-page/my-films-page.component.ts ***!
  \***********************************************************************/
/*! exports provided: MyFilmsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyFilmsPageComponent", function() { return MyFilmsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_films_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/films.service */ "./src/app/services/films.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var MyFilmsPageComponent = /** @class */ (function () {
    function MyFilmsPageComponent(filmServ, platformId) {
        this.filmServ = filmServ;
        this.platformId = platformId;
        this.films = [];
        this.message = "";
    }
    MyFilmsPageComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformServer"])(this.platformId))
                            return [2 /*return*/];
                        this.filmServ.myFilms$.next([]);
                        return [4 /*yield*/, this.filmServ.GetFilmsFromLocalStorage().toPromise()];
                    case 1:
                        _a.sent();
                        this.filmServ.myFilms$.subscribe(function (s) {
                            _this.films = s;
                            if (s.length === 0) {
                                _this.message = "Нет сохраненных фильмов.";
                            }
                            else {
                                _this.message = "";
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    MyFilmsPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'my-my-films-page',
            template: __webpack_require__(/*! ./my-films-page.component.html */ "./src/app/client/pages/my-films-page/my-films-page.component.html"),
            styles: [__webpack_require__(/*! ./my-films-page.component.scss */ "./src/app/client/pages/my-films-page/my-films-page.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])),
        __metadata("design:paramtypes", [_services_films_service__WEBPACK_IMPORTED_MODULE_1__["FilmsService"],
            Object])
    ], MyFilmsPageComponent);
    return MyFilmsPageComponent;
}());



/***/ }),

/***/ "./src/app/client/pages/name-page/name-page.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/client/pages/name-page/name-page.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row m-0 w-100\">\n  <div class=\"col-12 col-md-9 order-md-1 order-12\">\n    <my-films-list [films]=\"nameFilms.films\" [paginationEnabled]=\"false\"></my-films-list>\n  </div>\n  <div class=\"col-12 col-md-3 order-md-12 order-1 p-0 bg\">\n    <div class=\"w-100\">\n      <img class=\"img-thumbnail img bg-transparent border-0 border-bottom rounded\" [src]=\"nameFilms.name.poster\" alt=\"\">\n    </div>\n    <div class=\"row m-0 text-center\">\n      <h4 class=\"text-light w-100\">{{nameFilms.name.name}}</h4>\n      <h6 class=\"text-secondary w-100\">{{nameFilms.name.alternateName}}</h6>\n      <div class=\"w-100 pl-2\">\n        <span class=\"small text-light\">\n          фильмы:\n        </span>\n        <span class=\"pl-1 small text-warning\">\n          {{nameFilms.films.length}}\n        </span>\n      </div>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/client/pages/name-page/name-page.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/client/pages/name-page/name-page.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img {\n  width: 100%; }\n\n.bg {\n  background: #63493e;\n  /* Old browsers */\n  /* FF3.6-15 */\n  /* Chrome10-25,Safari5.1-6 */\n  background: linear-gradient(to right, #63493e 0%, #3f3636 50%, #413636 86%);\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#63493e', endColorstr='#413636',GradientType=1 );\n  /* IE6-9 */ }\n"

/***/ }),

/***/ "./src/app/client/pages/name-page/name-page.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/client/pages/name-page/name-page.component.ts ***!
  \***************************************************************/
/*! exports provided: NamePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NamePageComponent", function() { return NamePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_films_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/films.service */ "./src/app/services/films.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NamePageComponent = /** @class */ (function () {
    function NamePageComponent(filmServ, title, meta) {
        this.filmServ = filmServ;
        this.title = title;
        this.meta = meta;
    }
    NamePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filmServ.filmsByName$.subscribe(function (s) {
            _this.nameFilms = s;
            _this.title.setTitle(_this.nameFilms.name.name + " - \u0444\u0438\u043B\u044C\u043C\u044B \u043E\u043D\u043B\u0430\u0439\u043D");
            _this.meta.updateTag({ property: "description", content: "\u0424\u0438\u043B\u044C\u043C\u044B \u0438 \u0421\u0435\u0440\u0438\u0430\u043B\u044B \u0441 \u0443\u0447\u0430\u0441\u0442\u0438\u0435\u043C " + _this.nameFilms.name.name + " - " + _this.nameFilms.name.alternateName });
        });
    };
    NamePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'my-name-page',
            template: __webpack_require__(/*! ./name-page.component.html */ "./src/app/client/pages/name-page/name-page.component.html"),
            styles: [__webpack_require__(/*! ./name-page.component.scss */ "./src/app/client/pages/name-page/name-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_films_service__WEBPACK_IMPORTED_MODULE_1__["FilmsService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"]])
    ], NamePageComponent);
    return NamePageComponent;
}());



/***/ }),

/***/ "./src/app/client/pages/not-found/not-found.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/client/pages/not-found/not-found.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h5>Контент не найден.</h5>"

/***/ }),

/***/ "./src/app/client/pages/not-found/not-found.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/client/pages/not-found/not-found.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/client/pages/not-found/not-found.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/client/pages/not-found/not-found.component.ts ***!
  \***************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'my-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/client/pages/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.scss */ "./src/app/client/pages/not-found/not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/client/pages/online-page/online-page.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/client/pages/online-page/online-page.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row w-100 m-0 d-flex align-items-stretch\">\n  <div class=\"col-12 col-lg-9 p-0\">\n    <my-player></my-player>\n\n    <div class=\"w-100 p-2 mt-2 row mb-0 mr-0 ml-0\">\n      <div class=\"col\">\n        <h1>{{film.name}} ({{film.year}})</h1>\n      </div>\n      <div class=\"col-auto\">\n        <button class=\"btn btn-sm rounded-0\" [ngClass]=\"isFilmLocalStorage ?'btn-outline-danger': 'btn-info' \" (click)=\"SetFilmLocalStorage()\">\n          <small>{{isFilmLocalStorage ? 'УДАЛИТЬ ФИЛЬМ' : 'ПОСМОТРЕТЬ ПОЗЖЕ'}}</small>\n        </button>\n      </div>\n      <h5 class=\"pl-5 w-100 small text-secondary\">{{film.alternateName}} - {{film.slogan}}</h5>\n      <hr class=\"my-1 w-100\">\n      <div class=\"desc w-100\">{{film.description}}</div>\n      <my-features class=\"d-block mt-4 w-100\" [features]=\"film.features\"></my-features>\n    </div>\n\n    <div class=\"col-12\">\n      <my-carusel-films [grid]=\"{ xs: 2, sm: 3, md: 4, lg: 4, all: 0 }\" [title]=\"'Похожее'\" [films]=\"filmsLike\"></my-carusel-films>\n    </div>\n\n  </div>\n  <div class=\"col-3 p-0 d-none d-lg-flex\">\n    <my-film-info-panel [film]=\"film\"></my-film-info-panel>\n  </div>\n  <my-fade-panel name=\"О фильме\">\n    <my-film-info-panel [film]=\"film\"></my-film-info-panel>\n  </my-fade-panel>\n</div>"

/***/ }),

/***/ "./src/app/client/pages/online-page/online-page.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/client/pages/online-page/online-page.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  font-size: 1.4rem; }\n\n.desc {\n  font-size: 0.95rem; }\n\nhr {\n  margin-top: 5px;\n  margin-bottom: 5px; }\n\na {\n  float: left;\n  clear: left; }\n"

/***/ }),

/***/ "./src/app/client/pages/online-page/online-page.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/client/pages/online-page/online-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: OnlinePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlinePageComponent", function() { return OnlinePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_film_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../models/film.model */ "../models/film.model.ts");
/* harmony import */ var _services_films_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/films.service */ "./src/app/services/films.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OnlinePageComponent = /** @class */ (function () {
    function OnlinePageComponent(filmsServ, route, title, meta) {
        this.filmsServ = filmsServ;
        this.route = route;
        this.title = title;
        this.meta = meta;
        this.film = new _models_film_model__WEBPACK_IMPORTED_MODULE_1__["Film"]();
        this.filmsLike = [];
        this.isFilmLocalStorage = false;
    }
    OnlinePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filmsServ.film$.subscribe(function (s) {
            _this.film = s.film;
            _this.filmsLike = s.films;
            _this.title.setTitle(_this.film.type.toLocaleUpperCase() + " - " + _this.film.name + " (" + _this.film.year + ") -  \u043E\u043D\u043B\u0430\u0439\u043D");
            _this.meta.updateTag({ property: "description", content: _this.film.description.substring(0, 200).replace(/\s/g, ' ').trim() });
            _this.isFilmLocalStorage = _this.filmsServ.IsFilmInLocalStorage(_this.film._id);
        });
    };
    OnlinePageComponent.prototype.SetFilmLocalStorage = function () {
        this.filmsServ.SwitchFilmFromLocalStorage(this.film._id);
        this.isFilmLocalStorage = this.filmsServ.IsFilmInLocalStorage(this.film._id);
    };
    OnlinePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'my-online-page',
            template: __webpack_require__(/*! ./online-page.component.html */ "./src/app/client/pages/online-page/online-page.component.html"),
            styles: [__webpack_require__(/*! ./online-page.component.scss */ "./src/app/client/pages/online-page/online-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_films_service__WEBPACK_IMPORTED_MODULE_2__["FilmsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Meta"]])
    ], OnlinePageComponent);
    return OnlinePageComponent;
}());



/***/ }),

/***/ "./src/app/directive/ng-value.directive.ts":
/*!*************************************************!*\
  !*** ./src/app/directive/ng-value.directive.ts ***!
  \*************************************************/
/*! exports provided: NgValueDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgValueDirective", function() { return NgValueDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgValueDirective = /** @class */ (function () {
    function NgValueDirective(rend, el) {
        this.rend = rend;
        this.el = el;
        this.onChange = function (val) { };
        this.onTouch = function () { };
    }
    NgValueDirective_1 = NgValueDirective;
    NgValueDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.el.nativeElement.addEventListener("change", function (e) {
            if (e.target.checked) {
                _this.onChange([_this.ngValue].concat(_this.ngModel));
            }
            else {
                _this.onChange(_this.ngModel.filter(function (s) { return s !== _this.ngValue; }));
            }
        });
    };
    NgValueDirective.prototype.writeValue = function (obj) {
        if (obj != null && obj.includes(this.ngValue)) {
            this.rend.setProperty(this.el.nativeElement, "checked", true);
        }
        else {
            this.rend.setProperty(this.el.nativeElement, "checked", false);
        }
    };
    NgValueDirective.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    NgValueDirective.prototype.registerOnTouched = function (fn) {
        this.onTouch = fn;
    };
    NgValueDirective.prototype.setDisabledState = function (isDisabled) { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NgValueDirective.prototype, "ngValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], NgValueDirective.prototype, "ngModel", void 0);
    NgValueDirective = NgValueDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return NgValueDirective_1; }),
                    multi: true
                }
            ],
            selector: '[ngValue]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], NgValueDirective);
    return NgValueDirective;
    var NgValueDirective_1;
}());



/***/ }),

/***/ "./src/app/pipes/forNumber.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/pipes/forNumber.pipe.ts ***!
  \*****************************************/
/*! exports provided: ForNumberPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForNumberPipe", function() { return ForNumberPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ForNumberPipe = /** @class */ (function () {
    function ForNumberPipe() {
    }
    ForNumberPipe.prototype.transform = function (value, args) {
        var res = [];
        for (var i = 0; i < value; i++) {
            res.push(i);
        }
        return res;
    };
    ForNumberPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'forNumber' })
    ], ForNumberPipe);
    return ForNumberPipe;
}());



/***/ }),

/***/ "./src/app/resolvers/film.resolver.ts":
/*!********************************************!*\
  !*** ./src/app/resolvers/film.resolver.ts ***!
  \********************************************/
/*! exports provided: FilmResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmResolver", function() { return FilmResolver; });
/* harmony import */ var _services_films_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/films.service */ "./src/app/services/films.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FilmResolver = /** @class */ (function () {
    function FilmResolver(filmsServ) {
        this.filmsServ = filmsServ;
    }
    FilmResolver.prototype.resolve = function (route, state) {
        return this.filmsServ.getFilmById(route.params.id);
    };
    FilmResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_services_films_service__WEBPACK_IMPORTED_MODULE_0__["FilmsService"]])
    ], FilmResolver);
    return FilmResolver;
}());



/***/ }),

/***/ "./src/app/resolvers/films.resolver.ts":
/*!*********************************************!*\
  !*** ./src/app/resolvers/films.resolver.ts ***!
  \*********************************************/
/*! exports provided: FilmsResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmsResolver", function() { return FilmsResolver; });
/* harmony import */ var _services_films_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/films.service */ "./src/app/services/films.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FilmsResolver = /** @class */ (function () {
    function FilmsResolver(filmsServ) {
        this.filmsServ = filmsServ;
    }
    FilmsResolver.prototype.resolve = function (route, state) {
        this.filmsServ.setFilterType(route.params.type);
        return this.filmsServ.getFilms();
    };
    FilmsResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_services_films_service__WEBPACK_IMPORTED_MODULE_0__["FilmsService"]])
    ], FilmsResolver);
    return FilmsResolver;
}());



/***/ }),

/***/ "./src/app/resolvers/index.films.resolver.ts":
/*!***************************************************!*\
  !*** ./src/app/resolvers/index.films.resolver.ts ***!
  \***************************************************/
/*! exports provided: IndexFilmsResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexFilmsResolver", function() { return IndexFilmsResolver; });
/* harmony import */ var _services_films_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/films.service */ "./src/app/services/films.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IndexFilmsResolver = /** @class */ (function () {
    function IndexFilmsResolver(filmsServ) {
        this.filmsServ = filmsServ;
    }
    IndexFilmsResolver.prototype.resolve = function (route, state) {
        return this.filmsServ.getIndexFilms();
    };
    IndexFilmsResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_services_films_service__WEBPACK_IMPORTED_MODULE_0__["FilmsService"]])
    ], IndexFilmsResolver);
    return IndexFilmsResolver;
}());



/***/ }),

/***/ "./src/app/resolvers/name.resolver.ts":
/*!********************************************!*\
  !*** ./src/app/resolvers/name.resolver.ts ***!
  \********************************************/
/*! exports provided: NameResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NameResolver", function() { return NameResolver; });
/* harmony import */ var _services_films_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/films.service */ "./src/app/services/films.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NameResolver = /** @class */ (function () {
    function NameResolver(filmsServ) {
        this.filmsServ = filmsServ;
    }
    NameResolver.prototype.resolve = function (route, state) {
        return this.filmsServ.getNameAndFilms(route.params.id);
    };
    NameResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_services_films_service__WEBPACK_IMPORTED_MODULE_0__["FilmsService"]])
    ], NameResolver);
    return NameResolver;
}());



/***/ }),

/***/ "./src/app/services/films.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/films.service.ts ***!
  \*******************************************/
/*! exports provided: FilmsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmsService", function() { return FilmsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_films_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../models/films.model */ "../models/films.model.ts");
/* harmony import */ var _models_film_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../models/film.model */ "../models/film.model.ts");
/* harmony import */ var _models_film_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../models/film.view */ "../models/film.view.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_name_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../models/name.model */ "../models/name.model.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};










var FilmsService = /** @class */ (function () {
    function FilmsService(http, route, platformId) {
        this.http = http;
        this.route = route;
        this.platformId = platformId;
        this.indexFilms$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](new _models_films_model__WEBPACK_IMPORTED_MODULE_2__["IndexFilms"]());
        this.films$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](new _models_films_model__WEBPACK_IMPORTED_MODULE_2__["Films"]());
        this.filter$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](new _models_films_model__WEBPACK_IMPORTED_MODULE_2__["FilmFilter"]());
        this.filmsByName$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](new _models_name_model__WEBPACK_IMPORTED_MODULE_8__["NameFilms"]());
        this.film$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](new _models_film_view__WEBPACK_IMPORTED_MODULE_4__["FilmView"]());
        this.myFilms$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]([]);
    }
    FilmsService.prototype.getFilms = function () {
        var _this = this;
        return this.http.post("/api/films", JSON.stringify(this.filter$.value), { headers: { "Content-Type": "application/json" } }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (s) {
            _this.films$.next(s);
        }));
    };
    FilmsService.prototype.getFilmById = function (id) {
        var _this = this;
        return this.http.get('/api/film/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (s) {
            _this.film$.next(s);
        }));
    };
    FilmsService.prototype.getIndexFilms = function () {
        var _this = this;
        return this.http.get("/api/films/index").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (s) { return _this.indexFilms$.next(s); }, function (s) { return console.log(s); }));
    };
    FilmsService.prototype.updateFilmsRand = function () {
        var _this = this;
        return this.http.get("/api/films/rand").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (s) {
            var index = _this.indexFilms$.value;
            index.randomFilms = s;
            _this.indexFilms$.next(index);
        }));
    };
    FilmsService.prototype.getNameAndFilms = function (nameId) {
        var _this = this;
        return this.http.get('/api/films/byname/' + nameId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (s) {
            _this.filmsByName$.next(s);
        }));
    };
    FilmsService.prototype.getIframeByFilmId = function (id) {
        return this.http.get('/api/film/iframe/' + id);
    };
    ///*Filter Control*///
    FilmsService.prototype.setFilter = function (filter) {
        this.filter$.next(filter);
    };
    FilmsService.prototype.setFilterPage = function (page) {
        var nf = this.filter$.value;
        nf.page = page;
        this.filter$.next(nf);
    };
    FilmsService.prototype.setFilterType = function (type) {
        var newtype = type === "films" ? _models_film_model__WEBPACK_IMPORTED_MODULE_3__["FilmType"].film : _models_film_model__WEBPACK_IMPORTED_MODULE_3__["FilmType"].serial;
        var nf = this.filter$.value;
        nf.type = newtype;
        this.filter$.next(nf);
    };
    ///*LocalStorageFilms*///
    FilmsService.prototype.SwitchFilmFromLocalStorage = function (id) {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["isPlatformServer"])(this.platformId))
            return;
        var filmsIds = JSON.parse(localStorage.getItem("myFilms"));
        if (!filmsIds) {
            localStorage.setItem("myFilms", JSON.stringify([id]));
            return;
        }
        if (filmsIds && !filmsIds.includes(id)) {
            if (filmsIds.length > 100) {
                alert("Первышен лимит. Пожалуйста очистите просмотренные фильмы из списка.");
                return;
            }
            filmsIds.push(id);
            localStorage.setItem("myFilms", JSON.stringify(filmsIds));
            return;
        }
        if (filmsIds && filmsIds.includes(id)) {
            localStorage.setItem("myFilms", JSON.stringify(filmsIds.filter(function (s) { return s !== id; })));
            return;
        }
    };
    FilmsService.prototype.IsFilmInLocalStorage = function (id) {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["isPlatformServer"])(this.platformId))
            return;
        var filmsIds = localStorage.getItem("myFilms");
        if (filmsIds) {
            var pfilmsIds = JSON.parse(filmsIds);
            return pfilmsIds.includes(id);
        }
        else {
            return false;
        }
    };
    FilmsService.prototype.GetFilmsFromLocalStorage = function () {
        var _this = this;
        var filmsIds = localStorage.getItem("myFilms");
        return this.http.post('/api/films/my', filmsIds, { headers: { "Content-Type": "application/json" } }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (s) {
            _this.myFilms$.next(s);
        }));
    };
    FilmsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            Object])
    ], FilmsService);
    return FilmsService;
}());



/***/ }),

/***/ "./src/app/services/metrika.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/metrika.service.ts ***!
  \*********************************************/
/*! exports provided: MetrikaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetrikaService", function() { return MetrikaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var MetrikaService = /** @class */ (function () {
    function MetrikaService(router, platformId) {
        this.router = router;
        this.platformId = platformId;
    }
    MetrikaService.prototype.EnableMetrikka = function () {
        var _this = this;
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
            this.yaCounter = new Ya.Metrika({ id: 49735270, clickmap: true, trackLinks: true, accurateTrackBounce: true });
            this.yaCounter['hit'](window.location.href);
            this.subs = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (s) { return s instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; })).subscribe(function (s) {
                _this.yaCounter['hit'](window.location.href, { referer: s.url });
            });
        }
    };
    MetrikaService.prototype.DisableMetrika = function () {
        if (this.subs) {
            this.subs.unsubscribe();
        }
    };
    MetrikaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            Object])
    ], MetrikaService);
    return MetrikaService;
}());



/***/ })

}]);
//# sourceMappingURL=client-client-module.js.map