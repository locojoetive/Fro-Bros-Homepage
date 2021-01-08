function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _fb_header_fb_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./fb-header/fb-header.component */
    "./src/app/fb-header/fb-header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _fb_footer_fb_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./fb-footer/fb-footer.component */
    "./src/app/fb-footer/fb-footer.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'ng-fro-bros';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 0,
      consts: [[3, "activeView"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-fb-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activeView", function AppComponent_Template_app_fb_header_activeView_0_listener($event) {
            return ctx.activeView = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-fb-footer");
        }
      },
      directives: [_fb_header_fb_header_component__WEBPACK_IMPORTED_MODULE_1__["FbHeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _fb_footer_fb_footer_component__WEBPACK_IMPORTED_MODULE_3__["FbFooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _fb_header_fb_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./fb-header/fb-header.component */
    "./src/app/fb-header/fb-header.component.ts");
    /* harmony import */


    var _fb_header_fb_header_item_fb_header_item_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./fb-header/fb-header-item/fb-header-item.component */
    "./src/app/fb-header/fb-header-item/fb-header-item.component.ts");
    /* harmony import */


    var _fb_footer_fb_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./fb-footer/fb-footer.component */
    "./src/app/fb-footer/fb-footer.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _fb_container_fb_container_games_fb_banner_games_fb_banner_games_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./fb-container/fb-container-games/fb-banner-games/fb-banner-games.component */
    "./src/app/fb-container/fb-container-games/fb-banner-games/fb-banner-games.component.ts");
    /* harmony import */


    var _fb_container_fb_container_people_fb_banner_people_fb_banner_people_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./fb-container/fb-container-people/fb-banner-people/fb-banner-people.component */
    "./src/app/fb-container/fb-container-people/fb-banner-people/fb-banner-people.component.ts");
    /* harmony import */


    var _fb_container_fb_container_contact_fb_container_contact_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./fb-container/fb-container-contact/fb-container-contact.component */
    "./src/app/fb-container/fb-container-contact/fb-container-contact.component.ts");
    /* harmony import */


    var _fb_separator_fb_separator_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./fb-separator/fb-separator.component */
    "./src/app/fb-separator/fb-separator.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _fb_container_fb_container_games_fb_container_games_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./fb-container/fb-container-games/fb-container-games.component */
    "./src/app/fb-container/fb-container-games/fb-container-games.component.ts");
    /* harmony import */


    var _fb_container_fb_container_people_fb_container_people_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./fb-container/fb-container-people/fb-container-people.component */
    "./src/app/fb-container/fb-container-people/fb-container-people.component.ts");

    var appRoutes = [{
      path: 'games',
      component: _fb_container_fb_container_games_fb_container_games_component__WEBPACK_IMPORTED_MODULE_19__["FbContainerGamesComponent"]
    }, {
      path: 'people',
      component: _fb_container_fb_container_people_fb_container_people_component__WEBPACK_IMPORTED_MODULE_20__["FbContainerPeopleComponent"]
    }, {
      path: 'contact',
      component: _fb_container_fb_container_contact_fb_container_contact_component__WEBPACK_IMPORTED_MODULE_16__["FbContainerContactComponent"]
    }, {
      path: '',
      redirectTo: '/games',
      pathMatch: 'full'
    }];

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterModule"].forRoot(appRoutes), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _fb_header_fb_header_component__WEBPACK_IMPORTED_MODULE_10__["FbHeaderComponent"], _fb_header_fb_header_item_fb_header_item_component__WEBPACK_IMPORTED_MODULE_11__["FbHeaderItemComponent"], _fb_container_fb_container_contact_fb_container_contact_component__WEBPACK_IMPORTED_MODULE_16__["FbContainerContactComponent"], _fb_footer_fb_footer_component__WEBPACK_IMPORTED_MODULE_12__["FbFooterComponent"], _fb_container_fb_container_games_fb_banner_games_fb_banner_games_component__WEBPACK_IMPORTED_MODULE_14__["FbBannerGamesComponent"], _fb_container_fb_container_people_fb_banner_people_fb_banner_people_component__WEBPACK_IMPORTED_MODULE_15__["FbBannerPeopleComponent"], _fb_separator_fb_separator_component__WEBPACK_IMPORTED_MODULE_17__["FbSeparatorComponent"], _fb_container_fb_container_games_fb_container_games_component__WEBPACK_IMPORTED_MODULE_19__["FbContainerGamesComponent"], _fb_container_fb_container_people_fb_container_people_component__WEBPACK_IMPORTED_MODULE_20__["FbContainerPeopleComponent"]],
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _fb_header_fb_header_component__WEBPACK_IMPORTED_MODULE_10__["FbHeaderComponent"], _fb_header_fb_header_item_fb_header_item_component__WEBPACK_IMPORTED_MODULE_11__["FbHeaderItemComponent"], _fb_container_fb_container_contact_fb_container_contact_component__WEBPACK_IMPORTED_MODULE_16__["FbContainerContactComponent"], _fb_footer_fb_footer_component__WEBPACK_IMPORTED_MODULE_12__["FbFooterComponent"], _fb_container_fb_container_games_fb_banner_games_fb_banner_games_component__WEBPACK_IMPORTED_MODULE_14__["FbBannerGamesComponent"], _fb_container_fb_container_people_fb_banner_people_fb_banner_people_component__WEBPACK_IMPORTED_MODULE_15__["FbBannerPeopleComponent"], _fb_separator_fb_separator_component__WEBPACK_IMPORTED_MODULE_17__["FbSeparatorComponent"], _fb_container_fb_container_games_fb_container_games_component__WEBPACK_IMPORTED_MODULE_19__["FbContainerGamesComponent"], _fb_container_fb_container_people_fb_container_people_component__WEBPACK_IMPORTED_MODULE_20__["FbContainerPeopleComponent"]],
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterModule"].forRoot(appRoutes), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/fb-container/fb-container-contact/fb-container-contact.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/fb-container/fb-container-contact/fb-container-contact.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: MyErrorStateMatcher, FbContainerContactComponent */

  /***/
  function srcAppFbContainerFbContainerContactFbContainerContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function () {
      return MyErrorStateMatcher;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FbContainerContactComponent", function () {
      return FbContainerContactComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /** Error when invalid control is dirty, touched, or submitted. */


    var MyErrorStateMatcher = /*#__PURE__*/function () {
      function MyErrorStateMatcher() {
        _classCallCheck(this, MyErrorStateMatcher);
      }

      _createClass(MyErrorStateMatcher, [{
        key: "isErrorState",
        value: function isErrorState(control, form) {
          var isSubmitted = form && form.submitted;
          return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
        }
      }]);

      return MyErrorStateMatcher;
    }();

    var FbContainerContactComponent = function FbContainerContactComponent() {
      _classCallCheck(this, FbContainerContactComponent);

      this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]);
      this.matcher = new MyErrorStateMatcher();
    };

    FbContainerContactComponent.ɵfac = function FbContainerContactComponent_Factory(t) {
      return new (t || FbContainerContactComponent)();
    };

    FbContainerContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FbContainerContactComponent,
      selectors: [["app-fb-container-contact"]],
      decls: 23,
      vars: 0,
      consts: [[1, "contact-container"], [1, "form-container"], [1, "form"], [1, "example-full-width"], ["matInput", "", "placeholder", "Bruce Banner"], ["matInput", "", "placeholder", "Hulk@avengers-online.marvel"], ["matInput", "", "placeholder", "Your games make me feel..."], [1, "submit-button"], ["mat-button", "", "color", "primary"]],
      template: function FbContainerContactComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " We want to create games, which are not labeled by genres. We want to create memorable experiences, that can present content of two maniacs' brains' as slices of life. We are grateful for any help. So, If you can help us with feedback, content, or other kinds of material, please contact us. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Contact Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Your Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Your E-Mail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Leave a comment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "textarea", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Send <3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]],
      styles: [".contact-container[_ngcontent-%COMP%] {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  color: aliceblue;\n  align-items: center;\n}\n\n.form-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.submit-button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmItY29udGFpbmVyL2ZiLWNvbnRhaW5lci1jb250YWN0L0M6XFxfcHJvamVjdHNcXHdlYmRldlxcRnJvLUJyb3MtSG9tZXBhZ2Uvc3JjXFxhcHBcXGZiLWNvbnRhaW5lclxcZmItY29udGFpbmVyLWNvbnRhY3RcXGZiLWNvbnRhaW5lci1jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mYi1jb250YWluZXIvZmItY29udGFpbmVyLWNvbnRhY3QvZmItY29udGFpbmVyLWNvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2ZiLWNvbnRhaW5lci9mYi1jb250YWluZXItY29udGFjdC9mYi1jb250YWluZXItY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWN0LWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgY29sb3I6IGFsaWNlYmx1ZTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZm9ybS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZm9ybSB7XHJcbiAgbWluLXdpZHRoOiAxNTBweDtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnN1Ym1pdC1idXR0b24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4iLCIuY29udGFjdC1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgY29sb3I6IGFsaWNlYmx1ZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZvcm0tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5mb3JtIHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnN1Ym1pdC1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FbContainerContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-fb-container-contact',
          templateUrl: './fb-container-contact.component.html',
          styleUrls: ['./fb-container-contact.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/fb-container/fb-container-games/fb-banner-games/fb-banner-games.component.ts":
  /*!**********************************************************************************************!*\
    !*** ./src/app/fb-container/fb-container-games/fb-banner-games/fb-banner-games.component.ts ***!
    \**********************************************************************************************/

  /*! exports provided: FbBannerGamesComponent */

  /***/
  function srcAppFbContainerFbContainerGamesFbBannerGamesFbBannerGamesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FbBannerGamesComponent", function () {
      return FbBannerGamesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    var _c0 = ["details"];
    var _c1 = ["main"];

    function FbBannerGamesComponent_div_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FbBannerGamesComponent_div_13_Template_mat_icon_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.onOpenDetails(false);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "keyboard_arrow_up");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c2 = [[["", "header", ""]], [["", "body", ""]]];
    var _c3 = ["[header]", "[body]"];

    var FbBannerGamesComponent = /*#__PURE__*/function () {
      function FbBannerGamesComponent() {
        _classCallCheck(this, FbBannerGamesComponent);

        this.opened = false;
      }

      _createClass(FbBannerGamesComponent, [{
        key: "onOpenDetails",
        value: function onOpenDetails(open) {
          this.opened = open;

          if (this.opened) {
            this.details.nativeElement.scrollIntoView({
              block: 'start',
              behavior: 'smooth'
            });
          } else {
            this.main.nativeElement.scrollIntoView({
              block: 'start',
              behavior: 'smooth'
            });
          }
        }
      }]);

      return FbBannerGamesComponent;
    }();

    FbBannerGamesComponent.ɵfac = function FbBannerGamesComponent_Factory(t) {
      return new (t || FbBannerGamesComponent)();
    };

    FbBannerGamesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FbBannerGamesComponent,
      selectors: [["app-fb-banner-games"]],
      viewQuery: function FbBannerGamesComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.details = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.main = _t.first);
        }
      },
      inputs: {
        refName: "refName",
        textColor: "textColor"
      },
      ngContentSelectors: _c3,
      decls: 14,
      vars: 3,
      consts: [[1, "current-content"], [1, "banner"], ["main", ""], [1, "banner-container"], [1, "banner-left"], ["mat-raised-button", "", 3, "click"], [1, "banner-right"], ["mat-raised-button", "", "color", "primary"], [1, "details"], ["details", ""], ["class", "details", 4, "ngIf"], [3, "click"]],
      template: function FbBannerGamesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FbBannerGamesComponent_Template_button_click_6_listener() {
            return ctx.onOpenDetails(true);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Play");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, FbBannerGamesComponent_div_13_Template, 4, 0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(assets/" + ctx.refName + "/0.png)", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.opened);
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]],
      styles: ["mat-icon[_ngcontent-%COMP%] {\n  height: 100px;\n  width: 100px;\n  font-size: 100px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  height: 80px;\n  width: 200px;\n  font-size: 40px;\n}\n\n.current-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.banner[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  flex-direction: column;\n}\n\n@media (min-width: 720px) {\n  .banner[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n}\n\n.banner-container[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: auto;\n}\n\n.banner-left[_ngcontent-%COMP%], .banner-right[_ngcontent-%COMP%] {\n  flex-basis: 50%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.banner-left[_ngcontent-%COMP%] {\n  margin: 30px;\n  align-items: flex-start;\n}\n\n.banner-right[_ngcontent-%COMP%] {\n  align-items: center;\n}\n\n.details[_ngcontent-%COMP%] {\n  min-width: 50%;\n  max-width: 70%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: aliceblue;\n  text-align: justify;\n}\n\n.details[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: inline-block;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmItY29udGFpbmVyL2ZiLWNvbnRhaW5lci1nYW1lcy9mYi1iYW5uZXItZ2FtZXMvQzpcXF9wcm9qZWN0c1xcd2ViZGV2XFxGcm8tQnJvcy1Ib21lcGFnZS9zcmNcXGFwcFxcZmItY29udGFpbmVyXFxmYi1jb250YWluZXItZ2FtZXNcXGZiLWJhbm5lci1nYW1lc1xcZmItYmFubmVyLWdhbWVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mYi1jb250YWluZXIvZmItY29udGFpbmVyLWdhbWVzL2ZiLWJhbm5lci1nYW1lcy9mYi1iYW5uZXItZ2FtZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtBQ0NGOztBRENFO0VBWEY7SUFZSSxtQkFBQTtFQ0VGO0FBQ0Y7O0FEQUU7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQ0VKOztBREVBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsdUJBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9mYi1jb250YWluZXIvZmItY29udGFpbmVyLWdhbWVzL2ZiLWJhbm5lci1nYW1lcy9mYi1iYW5uZXItZ2FtZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtaWNvbiB7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgZm9udC1zaXplOiAxMDBweDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxufVxyXG5cclxuLmN1cnJlbnQtY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5iYW5uZXIge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDcyMHB4KSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIH1cclxuXHJcbiAgJi1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICB9XHJcbn1cclxuXHJcbi5iYW5uZXItbGVmdCwgLmJhbm5lci1yaWdodCB7XHJcbiAgZmxleC1iYXNpczogNTAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmJhbm5lci1sZWZ0IHtcclxuICBtYXJnaW46IDMwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbi5iYW5uZXItcmlnaHQge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5kZXRhaWxzIHtcclxuICBtaW4td2lkdGg6IDUwJTtcclxuICBtYXgtd2lkdGg6IDcwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBjb2xvcjogYWxpY2VibHVlO1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuXHJcbi5kZXRhaWxzOmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iLCJtYXQtaWNvbiB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgZm9udC1zaXplOiAxMDBweDtcbn1cblxuYnV0dG9uIHtcbiAgaGVpZ2h0OiA4MHB4O1xuICB3aWR0aDogMjAwcHg7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cblxuLmN1cnJlbnQtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYmFubmVyIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzIwcHgpIHtcbiAgLmJhbm5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxufVxuLmJhbm5lci1jb250YWluZXIge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5iYW5uZXItbGVmdCwgLmJhbm5lci1yaWdodCB7XG4gIGZsZXgtYmFzaXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5iYW5uZXItbGVmdCB7XG4gIG1hcmdpbjogMzBweDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbi5iYW5uZXItcmlnaHQge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZGV0YWlscyB7XG4gIG1pbi13aWR0aDogNTAlO1xuICBtYXgtd2lkdGg6IDcwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiBhbGljZWJsdWU7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi5kZXRhaWxzOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FbBannerGamesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-fb-banner-games',
          templateUrl: './fb-banner-games.component.html',
          styleUrls: ['./fb-banner-games.component.scss']
        }]
      }], null, {
        details: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['details']
        }],
        main: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['main']
        }],
        refName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        textColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/fb-container/fb-container-games/fb-container-games.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/fb-container/fb-container-games/fb-container-games.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: FbContainerGamesComponent */

  /***/
  function srcAppFbContainerFbContainerGamesFbContainerGamesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FbContainerGamesComponent", function () {
      return FbContainerGamesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _fb_banner_games_fb_banner_games_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./fb-banner-games/fb-banner-games.component */
    "./src/app/fb-container/fb-container-games/fb-banner-games/fb-banner-games.component.ts");

    var FbContainerGamesComponent = /*#__PURE__*/function () {
      function FbContainerGamesComponent() {
        _classCallCheck(this, FbContainerGamesComponent);
      }

      _createClass(FbContainerGamesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getPaperFighterStyle",
        value: function getPaperFighterStyle() {
          return {
            color: 'black',
            'background-color': '#82b2dc70',
            border: '2px',
            'border-radius': '10px'
          };
        }
      }]);

      return FbContainerGamesComponent;
    }();

    FbContainerGamesComponent.ɵfac = function FbContainerGamesComponent_Factory(t) {
      return new (t || FbContainerGamesComponent)();
    };

    FbContainerGamesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FbContainerGamesComponent,
      selectors: [["app-fb-games"]],
      decls: 30,
      vars: 9,
      consts: [[3, "refName", "textColor"], ["header", ""], ["body", ""], [3, "refName"]],
      template: function FbContainerGamesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-fb-banner-games", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "WAIT A MINUTE MR. POSTMAN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "2018 | [HTML5] [WINDOWS 10] [ANDROID]");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Help Mr. Postman to deliver his packages, by moving platforms");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " This game is awesome and you are missing something, if you dont play it. This game is awesome and you are missing something, if you dont play it. This game is awesome and you are missing something, if you dont play it. This game is awesome and you are missing something, if you dont play it. This game is awesome and you are missing something, if you dont play it. This game is awesome and you are missing something, if you dont play it. This game is awesome and you are missing something, if you dont play it. This game is awesome and you are missing something, if you dont play it. This game is awesome and you are missing something, if you dont play it. This game is awesome and you are missing something, if you dont play it. This game is awesome and you are missing something, if you dont play it. This game is awesome and you are missing something, if you dont play it. This game is awesome and you are missing something, if you dont play it. This game is awesome and you are missing something, if you dont play it. This game is awesome and you are missing something, if you dont play it. This game is awesome and you are missing something, if you dont play it. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-fb-banner-games", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "WRATH OF THE NINJA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "2017 | [HTML5] [WINDOWS 10] [ANDROID]");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Ninjo is thriving to avenge his family members.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " This game is awesome and you are missing something, if you dont play it. This game is awesome and you are missing something, if you dont play it. This game is awesome and you are missing something, if you dont play it. This game is awesome and you are missing something, if you dont play it. This game is awesome and you are missing something, if you dont play it. This game is awesome and you are missing something, if you dont play it. This game is awesome and you are missing something, if you dont play it. This game is awesome and you are missing something, if you dont play it. This game is awesome and you are missing something, if you dont play it. This game is awesome and you are missing something, if you dont play it. This game is awesome and you are missing something, if you dont play it. This game is awesome and you are missing something, if you dont play it. This game is awesome and you are missing something, if you dont play it. This game is awesome and you are missing something, if you dont play it. This game is awesome and you are missing something, if you dont play it. This game is awesome and you are missing something, if you dont play it. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "app-fb-banner-games", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "PAPER FIGHTER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "2016 | [HTML5] [WINDOWS 10] [ANDROID]");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Kung Frog and his Minions are threatening Ninja land. You are chosen to assassinate him before he can execute his malicious plans! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " This game is awesome and you are missing something, if you dont play it. This game is awesome and you are missing something, if you dont play it. This game is awesome and you are missing something, if you dont play it. This game is awesome and you are missing something, if you dont play it. This game is awesome and you are missing something, if you dont play it. This game is awesome and you are missing something, if you dont play it. This game is awesome and you are missing something, if you dont play it. This game is awesome and you are missing something, if you dont play it. This game is awesome and you are missing something, if you dont play it. This game is awesome and you are missing something, if you dont play it. This game is awesome and you are missing something, if you dont play it. This game is awesome and you are missing something, if you dont play it. This game is awesome and you are missing something, if you dont play it. This game is awesome and you are missing something, if you dont play it. This game is awesome and you are missing something, if you dont play it. This game is awesome and you are missing something, if you dont play it. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("refName", "games/wammp")("textColor", "black");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", "black");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("refName", "games/wotn");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("refName", "games/pf")("textColor", "black");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx.getPaperFighterStyle());
        }
      },
      directives: [_fb_banner_games_fb_banner_games_component__WEBPACK_IMPORTED_MODULE_1__["FbBannerGamesComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZiLWNvbnRhaW5lci9mYi1jb250YWluZXItZ2FtZXMvZmItY29udGFpbmVyLWdhbWVzLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FbContainerGamesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-fb-games',
          templateUrl: './fb-container-games.component.html',
          styleUrls: ['./fb-container-games.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/fb-container/fb-container-people/fb-banner-people/fb-banner-people.component.ts":
  /*!*************************************************************************************************!*\
    !*** ./src/app/fb-container/fb-container-people/fb-banner-people/fb-banner-people.component.ts ***!
    \*************************************************************************************************/

  /*! exports provided: FbBannerPeopleComponent */

  /***/
  function srcAppFbContainerFbContainerPeopleFbBannerPeopleFbBannerPeopleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FbBannerPeopleComponent", function () {
      return FbBannerPeopleComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FbBannerPeopleComponent = function FbBannerPeopleComponent() {
      _classCallCheck(this, FbBannerPeopleComponent);
    };

    FbBannerPeopleComponent.ɵfac = function FbBannerPeopleComponent_Factory(t) {
      return new (t || FbBannerPeopleComponent)();
    };

    FbBannerPeopleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FbBannerPeopleComponent,
      selectors: [["app-fb-banner-people"]],
      inputs: {
        refName: "refName",
        alignment: "alignment"
      },
      decls: 10,
      vars: 4,
      consts: [[1, "current-content"], [1, "banner"], [1, "details"]],
      template: function FbBannerPeopleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "[NAME]");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "[JOB]");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " This person is awesome. Your missing out if you dont know her/him. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("flex-direction", ctx.alignment);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(assets/" + ctx.refName + "/0.png)", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
        }
      },
      styles: ["mat-icon[_ngcontent-%COMP%] {\n  height: 100px;\n  width: 100px;\n  font-size: 100px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  height: 80px;\n  width: 200px;\n  font-size: 40px;\n}\n\n.current-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.banner[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n\n.banner-left[_ngcontent-%COMP%], .banner-right[_ngcontent-%COMP%] {\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.banner-left[_ngcontent-%COMP%] {\n  margin: 30px;\n  align-items: flex-start;\n}\n\n.banner-right[_ngcontent-%COMP%] {\n  align-items: center;\n}\n\n.details[_ngcontent-%COMP%] {\n  min-width: 50%;\n  max-width: 70%;\n  padding-bottom: 100px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: aliceblue;\n  text-align: justify;\n}\n\n.details[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: inline-block;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmItY29udGFpbmVyL2ZiLWNvbnRhaW5lci1wZW9wbGUvZmItYmFubmVyLXBlb3BsZS9DOlxcX3Byb2plY3RzXFx3ZWJkZXZcXEZyby1Ccm9zLUhvbWVwYWdlL3NyY1xcYXBwXFxmYi1jb250YWluZXJcXGZiLWNvbnRhaW5lci1wZW9wbGVcXGZiLWJhbm5lci1wZW9wbGVcXGZiLWJhbm5lci1wZW9wbGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZiLWNvbnRhaW5lci9mYi1jb250YWluZXItcGVvcGxlL2ZiLWJhbm5lci1wZW9wbGUvZmItYmFubmVyLXBlb3BsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9mYi1jb250YWluZXIvZmItY29udGFpbmVyLXBlb3BsZS9mYi1iYW5uZXItcGVvcGxlL2ZiLWJhbm5lci1wZW9wbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtaWNvbiB7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgZm9udC1zaXplOiAxMDBweDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxufVxyXG5cclxuLmN1cnJlbnQtY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uYmFubmVyIHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5iYW5uZXItbGVmdCwgLmJhbm5lci1yaWdodCB7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5iYW5uZXItbGVmdCB7XHJcbiAgbWFyZ2luOiAzMHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4uYmFubmVyLXJpZ2h0IHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZGV0YWlscyB7XHJcbiAgbWluLXdpZHRoOiA1MCU7XHJcbiAgbWF4LXdpZHRoOiA3MCU7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGNvbG9yOiBhbGljZWJsdWU7XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG5cclxuLmRldGFpbHM6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiIsIm1hdC1pY29uIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBmb250LXNpemU6IDEwMHB4O1xufVxuXG5idXR0b24ge1xuICBoZWlnaHQ6IDgwcHg7XG4gIHdpZHRoOiAyMDBweDtcbiAgZm9udC1zaXplOiA0MHB4O1xufVxuXG4uY3VycmVudC1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5iYW5uZXIge1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG4uYmFubmVyLWxlZnQsIC5iYW5uZXItcmlnaHQge1xuICB3aWR0aDogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmJhbm5lci1sZWZ0IHtcbiAgbWFyZ2luOiAzMHB4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLmJhbm5lci1yaWdodCB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5kZXRhaWxzIHtcbiAgbWluLXdpZHRoOiA1MCU7XG4gIG1heC13aWR0aDogNzAlO1xuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogYWxpY2VibHVlO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4uZGV0YWlsczphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FbBannerPeopleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-fb-banner-people',
          templateUrl: './fb-banner-people.component.html',
          styleUrls: ['./fb-banner-people.component.scss']
        }]
      }], null, {
        refName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        alignment: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/fb-container/fb-container-people/fb-container-people.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/fb-container/fb-container-people/fb-container-people.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: FbContainerPeopleComponent */

  /***/
  function srcAppFbContainerFbContainerPeopleFbContainerPeopleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FbContainerPeopleComponent", function () {
      return FbContainerPeopleComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _fb_banner_people_fb_banner_people_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./fb-banner-people/fb-banner-people.component */
    "./src/app/fb-container/fb-container-people/fb-banner-people/fb-banner-people.component.ts");
    /* harmony import */


    var _fb_separator_fb_separator_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../fb-separator/fb-separator.component */
    "./src/app/fb-separator/fb-separator.component.ts");

    var FbContainerPeopleComponent = /*#__PURE__*/function () {
      function FbContainerPeopleComponent() {
        _classCallCheck(this, FbContainerPeopleComponent);
      }

      _createClass(FbContainerPeopleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FbContainerPeopleComponent;
    }();

    FbContainerPeopleComponent.ɵfac = function FbContainerPeopleComponent_Factory(t) {
      return new (t || FbContainerPeopleComponent)();
    };

    FbContainerPeopleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FbContainerPeopleComponent,
      selectors: [["app-fb-people"]],
      decls: 5,
      vars: 6,
      consts: [[3, "alignment", "refName"]],
      template: function FbContainerPeopleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-fb-banner-people", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-fb-separator");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-fb-banner-people", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-fb-separator");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-fb-banner-people", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("alignment", "row")("refName", "people/aru");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("alignment", "row-reverse")("refName", "people/henk");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("alignment", "row")("refName", "people/joey");
        }
      },
      directives: [_fb_banner_people_fb_banner_people_component__WEBPACK_IMPORTED_MODULE_1__["FbBannerPeopleComponent"], _fb_separator_fb_separator_component__WEBPACK_IMPORTED_MODULE_2__["FbSeparatorComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZiLWNvbnRhaW5lci9mYi1jb250YWluZXItcGVvcGxlL2ZiLWNvbnRhaW5lci1wZW9wbGUuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FbContainerPeopleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-fb-people',
          templateUrl: './fb-container-people.component.html',
          styleUrls: ['./fb-container-people.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/fb-footer/fb-footer.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/fb-footer/fb-footer.component.ts ***!
    \**************************************************/

  /*! exports provided: FbFooterComponent */

  /***/
  function srcAppFbFooterFbFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FbFooterComponent", function () {
      return FbFooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    var FbFooterComponent = /*#__PURE__*/function () {
      function FbFooterComponent() {
        _classCallCheck(this, FbFooterComponent);
      }

      _createClass(FbFooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FbFooterComponent;
    }();

    FbFooterComponent.ɵfac = function FbFooterComponent_Factory(t) {
      return new (t || FbFooterComponent)();
    };

    FbFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FbFooterComponent,
      selectors: [["app-fb-footer"]],
      decls: 45,
      vars: 0,
      consts: [[1, "footer-wrapper"], [1, "contact"], [1, "contact-item"], [1, "social"], ["href", "https://www.instagram.com/frobrosdev/"], [1, "icon", "icon-instagram"], ["href", "https://github.com/locojoetive"], [1, "icon", "icon-github"], ["href", "https://soundcloud.com/johnny-mike-3"], [1, "icon", "icon-soundcloud"], [1, "footer-copyrights"], [1, "footer-copyrights-container"], ["href", "https://iconscout.com/icons/ios", "target", "_blank"], ["href", "https://iconscout.com/contributors/icons8"], ["href", "https://iconscout.com"]],
      template: function FbFooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "fingerprint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Copyright \xA9 2020 FroBros Game Development");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Bernhardstr. 13, 04315 Leipzig, Germany");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " +49 1575 7955 200");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "mail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "support@frobros.de");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Social");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Ios Icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " by ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Icons8");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " on ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Iconscout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"]],
      styles: [".footer-wrapper[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  width: 75%;\n  margin: auto;\n}\n.footer-copyrights[_ngcontent-%COMP%] {\n  display: none;\n  width: 100%;\n  background-color: black;\n  padding: 0.25rem 1rem;\n}\n.footer-copyrights-container[_ngcontent-%COMP%] {\n  width: auto;\n  margin: auto;\n}\ndiv[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  background-color: black;\n}\n@media (min-width: 720px) {\n  div[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n}\np[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-left: 15px;\n}\n.contact[_ngcontent-%COMP%], .social[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-basis: 45%;\n  margin: 1.75rem auto;\n}\n.contact[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .social[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n.contact-item[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n.icon[_ngcontent-%COMP%] {\n  height: 30px;\n  width: 30px;\n  margin: 0 1.5rem 0 0;\n  background-color: white;\n  background-repeat: no-repeat;\n}\n.icon-soundcloud[_ngcontent-%COMP%] {\n  -webkit-mask: url('icon-soundcloud.svg');\n          mask: url('icon-soundcloud.svg');\n  -webkit-mask-size: 100% 100%;\n          mask-size: 100% 100%;\n}\n.icon-soundcloud[_ngcontent-%COMP%]:hover {\n  background: orange linear-gradient(orange, white);\n}\n.icon-instagram[_ngcontent-%COMP%] {\n  -webkit-mask: url('icon-instagram.svg');\n          mask: url('icon-instagram.svg');\n  -webkit-mask-size: 100% 100%;\n          mask-size: 100% 100%;\n}\n.icon-instagram[_ngcontent-%COMP%]:hover {\n  background: blue linear-gradient(red, blue);\n}\n.icon-github[_ngcontent-%COMP%] {\n  -webkit-mask: url('icon-github.svg');\n          mask: url('icon-github.svg');\n  -webkit-mask-size: 100% 100%;\n          mask-size: 100% 100%;\n}\n.icon-github[_ngcontent-%COMP%]:hover {\n  background: green linear-gradient(green, white);\n}\n.icon-facebook[_ngcontent-%COMP%] {\n  -webkit-mask: url('icon-facebook.svg');\n          mask: url('icon-facebook.svg');\n  -webkit-mask-size: 100% 100%;\n          mask-size: 100% 100%;\n}\n.icon-facebook[_ngcontent-%COMP%]:hover {\n  background: blue linear-gradient(blue, white);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmItZm9vdGVyL0M6XFxfcHJvamVjdHNcXHdlYmRldlxcRnJvLUJyb3MtSG9tZXBhZ2Uvc3JjXFxhcHBcXGZiLWZvb3RlclxcZmItZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mYi1mb290ZXIvZmItZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDQUo7QURHRTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtBQ0RKO0FER0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0ROO0FETUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQ0hGO0FES0U7RUFSRjtJQVNJLG1CQUFBO0VDRkY7QUFDRjtBREtBO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0FDRkY7QURLQTs7RUFFRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUNGRjtBRElFOztFQUNFLG1CQUFBO0FDREo7QURLQTtFQUNFLG1CQUFBO0FDRkY7QURLQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLDRCQUFBO0FDRkY7QURLQTtFQUNFLHdDQUFBO1VBQUEsZ0NBQUE7RUFDQSw0QkFBQTtVQUFBLG9CQUFBO0FDRkY7QURLQTtFQUNFLGlEQUFBO0FDRkY7QURLQTtFQUNFLHVDQUFBO1VBQUEsK0JBQUE7RUFDQSw0QkFBQTtVQUFBLG9CQUFBO0FDRkY7QURLQTtFQUNFLDJDQUFBO0FDRkY7QURLQTtFQUNFLG9DQUFBO1VBQUEsNEJBQUE7RUFDQSw0QkFBQTtVQUFBLG9CQUFBO0FDRkY7QURLQTtFQUNFLCtDQUFBO0FDRkY7QURLQTtFQUNFLHNDQUFBO1VBQUEsOEJBQUE7RUFDQSw0QkFBQTtVQUFBLG9CQUFBO0FDRkY7QURLQTtFQUNFLDZDQUFBO0FDRkYiLCJmaWxlIjoic3JjL2FwcC9mYi1mb290ZXIvZmItZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XHJcbiAgJi13cmFwcGVyIHtcclxuICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG5cclxuICAmLWNvcHlyaWdodHMge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBwYWRkaW5nOiAwLjI1cmVtIDFyZW07XHJcblxyXG4gICAgJi1jb250YWluZXIge1xyXG4gICAgICB3aWR0aDogYXV0bztcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZGl2IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDcyMHB4KSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgfVxyXG59XHJcblxyXG5wIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG59XHJcblxyXG4uY29udGFjdCxcclxuLnNvY2lhbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXgtYmFzaXM6IDQ1JTtcclxuICBtYXJnaW46IDEuNzVyZW0gYXV0bztcclxuXHJcbiAgZGl2IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgfVxyXG59XHJcblxyXG4uY29udGFjdC1pdGVtIHtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIG1hcmdpbjogMCAxLjVyZW0gMCAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuXHJcbi5pY29uLXNvdW5kY2xvdWQge1xyXG4gIG1hc2s6IHVybChzcmMvYXNzZXRzL2ljb25zL2ljb24tc291bmRjbG91ZC5zdmcpO1xyXG4gIG1hc2stc2l6ZTogMTAwJSAxMDAlO1xyXG59XHJcblxyXG4uaWNvbi1zb3VuZGNsb3VkOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiBvcmFuZ2UgbGluZWFyLWdyYWRpZW50KG9yYW5nZSwgd2hpdGUpO1xyXG59XHJcblxyXG4uaWNvbi1pbnN0YWdyYW0ge1xyXG4gIG1hc2s6IHVybChzcmMvYXNzZXRzL2ljb25zL2ljb24taW5zdGFncmFtLnN2Zyk7XHJcbiAgbWFzay1zaXplOiAxMDAlIDEwMCU7XHJcbn1cclxuXHJcbi5pY29uLWluc3RhZ3JhbTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogYmx1ZSBsaW5lYXItZ3JhZGllbnQocmVkLCBibHVlKTtcclxufVxyXG5cclxuLmljb24tZ2l0aHViIHtcclxuICBtYXNrOiB1cmwoc3JjL2Fzc2V0cy9pY29ucy9pY29uLWdpdGh1Yi5zdmcpO1xyXG4gIG1hc2stc2l6ZTogMTAwJSAxMDAlO1xyXG59XHJcblxyXG4uaWNvbi1naXRodWI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IGdyZWVuIGxpbmVhci1ncmFkaWVudChncmVlbiwgd2hpdGUpO1xyXG59XHJcblxyXG4uaWNvbi1mYWNlYm9vayB7XHJcbiAgbWFzazogdXJsKHNyYy9hc3NldHMvaWNvbnMvaWNvbi1mYWNlYm9vay5zdmcpO1xyXG4gIG1hc2stc2l6ZTogMTAwJSAxMDAlO1xyXG59XHJcblxyXG4uaWNvbi1mYWNlYm9vazpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogYmx1ZSBsaW5lYXItZ3JhZGllbnQoYmx1ZSwgd2hpdGUpO1xyXG59XHJcbiIsIi5mb290ZXItd3JhcHBlciB7XG4gIHBhZGRpbmc6IDEuNXJlbTtcbiAgd2lkdGg6IDc1JTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLmZvb3Rlci1jb3B5cmlnaHRzIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAwLjI1cmVtIDFyZW07XG59XG4uZm9vdGVyLWNvcHlyaWdodHMtY29udGFpbmVyIHtcbiAgd2lkdGg6IGF1dG87XG4gIG1hcmdpbjogYXV0bztcbn1cblxuZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3MjBweCkge1xuICBkaXYge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cbn1cblxucCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuXG4uY29udGFjdCxcbi5zb2NpYWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LWJhc2lzOiA0NSU7XG4gIG1hcmdpbjogMS43NXJlbSBhdXRvO1xufVxuLmNvbnRhY3QgZGl2LFxuLnNvY2lhbCBkaXYge1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uY29udGFjdC1pdGVtIHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLmljb24ge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBtYXJnaW46IDAgMS41cmVtIDAgMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi5pY29uLXNvdW5kY2xvdWQge1xuICBtYXNrOiB1cmwoc3JjL2Fzc2V0cy9pY29ucy9pY29uLXNvdW5kY2xvdWQuc3ZnKTtcbiAgbWFzay1zaXplOiAxMDAlIDEwMCU7XG59XG5cbi5pY29uLXNvdW5kY2xvdWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBvcmFuZ2UgbGluZWFyLWdyYWRpZW50KG9yYW5nZSwgd2hpdGUpO1xufVxuXG4uaWNvbi1pbnN0YWdyYW0ge1xuICBtYXNrOiB1cmwoc3JjL2Fzc2V0cy9pY29ucy9pY29uLWluc3RhZ3JhbS5zdmcpO1xuICBtYXNrLXNpemU6IDEwMCUgMTAwJTtcbn1cblxuLmljb24taW5zdGFncmFtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogYmx1ZSBsaW5lYXItZ3JhZGllbnQocmVkLCBibHVlKTtcbn1cblxuLmljb24tZ2l0aHViIHtcbiAgbWFzazogdXJsKHNyYy9hc3NldHMvaWNvbnMvaWNvbi1naXRodWIuc3ZnKTtcbiAgbWFzay1zaXplOiAxMDAlIDEwMCU7XG59XG5cbi5pY29uLWdpdGh1Yjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IGdyZWVuIGxpbmVhci1ncmFkaWVudChncmVlbiwgd2hpdGUpO1xufVxuXG4uaWNvbi1mYWNlYm9vayB7XG4gIG1hc2s6IHVybChzcmMvYXNzZXRzL2ljb25zL2ljb24tZmFjZWJvb2suc3ZnKTtcbiAgbWFzay1zaXplOiAxMDAlIDEwMCU7XG59XG5cbi5pY29uLWZhY2Vib29rOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogYmx1ZSBsaW5lYXItZ3JhZGllbnQoYmx1ZSwgd2hpdGUpO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FbFooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-fb-footer',
          templateUrl: './fb-footer.component.html',
          styleUrls: ['./fb-footer.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/fb-header/Direction.ts":
  /*!****************************************!*\
    !*** ./src/app/fb-header/Direction.ts ***!
    \****************************************/

  /*! exports provided: Direction */

  /***/
  function srcAppFbHeaderDirectionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Direction", function () {
      return Direction;
    });

    var Direction;

    (function (Direction) {
      Direction["Up"] = "Up";
      Direction["Down"] = "Down";
    })(Direction || (Direction = {}));
    /***/

  },

  /***/
  "./src/app/fb-header/VisibilityState.ts":
  /*!**********************************************!*\
    !*** ./src/app/fb-header/VisibilityState.ts ***!
    \**********************************************/

  /*! exports provided: VisibilityState */

  /***/
  function srcAppFbHeaderVisibilityStateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VisibilityState", function () {
      return VisibilityState;
    });

    var VisibilityState;

    (function (VisibilityState) {
      VisibilityState["Visible"] = "visible";
      VisibilityState["Hidden"] = "hidden";
    })(VisibilityState || (VisibilityState = {}));
    /***/

  },

  /***/
  "./src/app/fb-header/fb-header-item/fb-header-item.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/fb-header/fb-header-item/fb-header-item.component.ts ***!
    \**********************************************************************/

  /*! exports provided: FbHeaderItemComponent */

  /***/
  function srcAppFbHeaderFbHeaderItemFbHeaderItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FbHeaderItemComponent", function () {
      return FbHeaderItemComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return {
        "selected": a0
      };
    };

    var FbHeaderItemComponent = /*#__PURE__*/function () {
      function FbHeaderItemComponent() {
        _classCallCheck(this, FbHeaderItemComponent);

        this.propagateActiveButton = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(FbHeaderItemComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.active && changes.active.currentValue) {}
        }
      }]);

      return FbHeaderItemComponent;
    }();

    FbHeaderItemComponent.ɵfac = function FbHeaderItemComponent_Factory(t) {
      return new (t || FbHeaderItemComponent)();
    };

    FbHeaderItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FbHeaderItemComponent,
      selectors: [["app-fb-header-item"]],
      inputs: {
        headerTitle: "headerTitle",
        link: "link",
        buttonId: "buttonId",
        active: "active"
      },
      outputs: {
        propagateActiveButton: "propagateActiveButton"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 3,
      vars: 5,
      consts: [["mat-mini-fab", "", "color", "primary", "routerLinkActive", "active", 3, "ngClass", "routerLink", "click"]],
      template: function FbHeaderItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FbHeaderItemComponent_Template_button_click_1_listener() {
            return ctx.propagateActiveButton.emit(ctx.buttonId);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.active))("routerLink", ctx.link);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.headerTitle, " ");
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
      styles: ["div[_ngcontent-%COMP%] {\n  padding: 0 1rem;\n  position: relative;\n  top: 0.5rem;\n}\n\nbutton[_ngcontent-%COMP%] {\n  height: 4rem;\n  width: 4rem;\n}\n\n.selected[_ngcontent-%COMP%] {\n  background-color: chocolate;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmItaGVhZGVyL2ZiLWhlYWRlci1pdGVtL0M6XFxfcHJvamVjdHNcXHdlYmRldlxcRnJvLUJyb3MtSG9tZXBhZ2Uvc3JjXFxhcHBcXGZiLWhlYWRlclxcZmItaGVhZGVyLWl0ZW1cXGZiLWhlYWRlci1pdGVtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mYi1oZWFkZXIvZmItaGVhZGVyLWl0ZW0vZmItaGVhZGVyLWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsMkJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2ZiLWhlYWRlci9mYi1oZWFkZXItaXRlbS9mYi1oZWFkZXItaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XHJcbiAgcGFkZGluZzogMCAxcmVtO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDAuNXJlbTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBoZWlnaHQ6IDRyZW07XHJcbiAgd2lkdGg6IDRyZW07XHJcbn1cclxuXHJcbi5zZWxlY3RlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogY2hvY29sYXRlO1xyXG59XHJcbiIsImRpdiB7XG4gIHBhZGRpbmc6IDAgMXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDAuNXJlbTtcbn1cblxuYnV0dG9uIHtcbiAgaGVpZ2h0OiA0cmVtO1xuICB3aWR0aDogNHJlbTtcbn1cblxuLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogY2hvY29sYXRlO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FbHeaderItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-fb-header-item',
          template: "\n    <div>\n        <button [ngClass]=\"{'selected': active}\"\n                [routerLink]=\"this.link\"\n                (click)=\"propagateActiveButton.emit(this.buttonId)\"\n                mat-mini-fab color=\"primary\"\n                routerLinkActive=\"active\">\n            {{ this.headerTitle }}\n        </button>\n    </div>\n  ",
          styleUrls: ['./fb-header-item.component.scss']
        }]
      }], null, {
        headerTitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        link: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        buttonId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        active: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        propagateActiveButton: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/fb-header/fb-header.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/fb-header/fb-header.component.ts ***!
    \**************************************************/

  /*! exports provided: FbHeaderComponent */

  /***/
  function srcAppFbHeaderFbHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FbHeaderComponent", function () {
      return FbHeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _Direction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./Direction */
    "./src/app/fb-header/Direction.ts");
    /* harmony import */


    var _VisibilityState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./VisibilityState */
    "./src/app/fb-header/VisibilityState.ts");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _fb_header_item_fb_header_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./fb-header-item/fb-header-item.component */
    "./src/app/fb-header/fb-header-item/fb-header-item.component.ts");
    /*
     * Sticky header animation from Tomasz Kula
     * https://github.com/zetsnotdead/ng-reactive-sticky-header
    */


    var FbHeaderComponent = /*#__PURE__*/function () {
      function FbHeaderComponent() {
        _classCallCheck(this, FbHeaderComponent);

        this.activeView = 0;
        this.isVisible = true;
      }

      _createClass(FbHeaderComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this = this;

          var scroll$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(window, 'scroll').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["throttleTime"])(10), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () {
            return window.pageYOffset;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pairwise"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                y1 = _ref2[0],
                y2 = _ref2[1];

            return y2 > y1 ? _Direction__WEBPACK_IMPORTED_MODULE_3__["Direction"].Down : _Direction__WEBPACK_IMPORTED_MODULE_3__["Direction"].Up;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
          var scrollUp$ = scroll$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (direction) {
            return direction === _Direction__WEBPACK_IMPORTED_MODULE_3__["Direction"].Up;
          }));
          var scrollDown$ = scroll$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (direction) {
            return direction === _Direction__WEBPACK_IMPORTED_MODULE_3__["Direction"].Down;
          }));
          scrollUp$.subscribe(function () {
            return _this.isVisible = true;
          });
          scrollDown$.subscribe(function () {
            return _this.isVisible = false;
          });
        }
      }, {
        key: "onPropagateActiveView",
        value: function onPropagateActiveView(activeView) {
          console.log("current active view is ".concat(activeView));
          this.activeView = activeView;
        }
      }, {
        key: "toggle",
        get: function get() {
          return this.isVisible ? _VisibilityState__WEBPACK_IMPORTED_MODULE_4__["VisibilityState"].Visible : _VisibilityState__WEBPACK_IMPORTED_MODULE_4__["VisibilityState"].Hidden;
        }
      }]);

      return FbHeaderComponent;
    }();

    FbHeaderComponent.ɵfac = function FbHeaderComponent_Factory(t) {
      return new (t || FbHeaderComponent)();
    };

    FbHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FbHeaderComponent,
      selectors: [["app-fb-header"]],
      hostVars: 1,
      hostBindings: function FbHeaderComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵupdateSyntheticHostBinding"]("@toggle", ctx.toggle);
        }
      },
      decls: 13,
      vars: 12,
      consts: [[1, "header-container"], [3, "active", "headerTitle", "buttonId", "link", "propagateActiveButton"], [1, "social"], ["href", "https://www.instagram.com/frobrosdev/"], [1, "icon", "icon-instagram"], ["href", "https://github.com/locojoetive"], [1, "icon", "icon-github"], ["href", "https://soundcloud.com/johnny-mike-3"], [1, "icon", "icon-soundcloud"]],
      template: function FbHeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "[FRO_BROS_LOGO]");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-fb-header-item", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("propagateActiveButton", function FbHeaderComponent_Template_app_fb_header_item_propagateActiveButton_3_listener($event) {
            return ctx.onPropagateActiveView($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-fb-header-item", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("propagateActiveButton", function FbHeaderComponent_Template_app_fb_header_item_propagateActiveButton_4_listener($event) {
            return ctx.onPropagateActiveView($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-fb-header-item", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("propagateActiveButton", function FbHeaderComponent_Template_app_fb_header_item_propagateActiveButton_5_listener($event) {
            return ctx.onPropagateActiveView($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("active", ctx.activeView == 0)("headerTitle", "Games")("buttonId", 0)("link", "/games");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("active", ctx.activeView == 1)("headerTitle", "About Us")("buttonId", 1)("link", "/people");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("active", ctx.activeView == 2)("headerTitle", "Contact")("buttonId", 2)("link", "/contact");
        }
      },
      directives: [_fb_header_item_fb_header_item_component__WEBPACK_IMPORTED_MODULE_6__["FbHeaderItemComponent"]],
      styles: ["[_nghost-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  width: 100%;\n  height: auto;\n  z-index: 10;\n  background-color: black;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n}\n@media (min-width: 720px) {\n  [_nghost-%COMP%] {\n    height: 4rem;\n    flex-direction: row;\n  }\n}\np[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.header-container[_ngcontent-%COMP%], .social[_ngcontent-%COMP%] {\n  flex-basis: 50%;\n  z-index: 10;\n  top: 0;\n  display: flex;\n  flex-direction: row;\n}\n.header-container[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n.social[_ngcontent-%COMP%] {\n  padding: 1rem;\n  flex-basis: 15%;\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmItaGVhZGVyL0M6XFxfcHJvamVjdHNcXHdlYmRldlxcRnJvLUJyb3MtSG9tZXBhZ2Uvc3JjXFxhcHBcXGZiLWhlYWRlclxcZmItaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mYi1oZWFkZXIvZmItaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQUE7RUFBQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUNDRjtBRENFO0VBWkY7SUFhSSxZQUFBO0lBQ0EsbUJBQUE7RUNFRjtBQUNGO0FEQ0E7RUFDRSxhQUFBO0FDRUY7QURDQTs7RUFFRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNFRjtBRENBO0VBQ0UsMkJBQUE7QUNFRjtBRENBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvZmItaGVhZGVyL2ZiLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgei1pbmRleDogMTA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3MjBweCkge1xyXG4gICAgaGVpZ2h0OiA0cmVtO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB9XHJcbn1cclxuXHJcbnAge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi5oZWFkZXItY29udGFpbmVyLFxyXG4uc29jaWFsIHtcclxuICBmbGV4LWJhc2lzOiA1MCU7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgdG9wOiAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLmhlYWRlci1jb250YWluZXIge1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxufVxyXG5cclxuLnNvY2lhbCB7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBmbGV4LWJhc2lzOiAxNSU7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG4iLCI6aG9zdCB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgei1pbmRleDogMTA7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3MjBweCkge1xuICA6aG9zdCB7XG4gICAgaGVpZ2h0OiA0cmVtO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cbn1cblxucCB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5oZWFkZXItY29udGFpbmVyLFxuLnNvY2lhbCB7XG4gIGZsZXgtYmFzaXM6IDUwJTtcbiAgei1pbmRleDogMTA7XG4gIHRvcDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLmhlYWRlci1jb250YWluZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG5cbi5zb2NpYWwge1xuICBwYWRkaW5nOiAxcmVtO1xuICBmbGV4LWJhc2lzOiAxNSU7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59Il19 */"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('toggle', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])(_VisibilityState__WEBPACK_IMPORTED_MODULE_4__["VisibilityState"].Hidden, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
          opacity: 0,
          transform: 'translateY(-100%)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])(_VisibilityState__WEBPACK_IMPORTED_MODULE_4__["VisibilityState"].Visible, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
          opacity: 1,
          transform: 'translateY(0)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('200ms ease-in'))])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FbHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-fb-header',
          templateUrl: './fb-header.component.html',
          styleUrls: ['./fb-header.component.scss'],
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('toggle', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])(_VisibilityState__WEBPACK_IMPORTED_MODULE_4__["VisibilityState"].Hidden, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
            opacity: 0,
            transform: 'translateY(-100%)'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])(_VisibilityState__WEBPACK_IMPORTED_MODULE_4__["VisibilityState"].Visible, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
            opacity: 1,
            transform: 'translateY(0)'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('200ms ease-in'))])]
        }]
      }], null, {
        toggle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['@toggle']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/fb-separator/fb-separator.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/fb-separator/fb-separator.component.ts ***!
    \********************************************************/

  /*! exports provided: FbSeparatorComponent */

  /***/
  function srcAppFbSeparatorFbSeparatorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FbSeparatorComponent", function () {
      return FbSeparatorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FbSeparatorComponent = function FbSeparatorComponent() {
      _classCallCheck(this, FbSeparatorComponent);
    };

    FbSeparatorComponent.ɵfac = function FbSeparatorComponent_Factory(t) {
      return new (t || FbSeparatorComponent)();
    };

    FbSeparatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FbSeparatorComponent,
      selectors: [["app-fb-separator"]],
      decls: 1,
      vars: 0,
      template: function FbSeparatorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
        }
      },
      styles: ["div[_ngcontent-%COMP%] {\n  height: 100px;\n  width: 100%;\n  background-color: #673ab7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmItc2VwYXJhdG9yL0M6XFxfcHJvamVjdHNcXHdlYmRldlxcRnJvLUJyb3MtSG9tZXBhZ2Uvc3JjXFxhcHBcXGZiLXNlcGFyYXRvclxcZmItc2VwYXJhdG9yLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mYi1zZXBhcmF0b3IvZmItc2VwYXJhdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvZmItc2VwYXJhdG9yL2ZiLXNlcGFyYXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjczYWI3O1xyXG59XHJcbiIsImRpdiB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjczYWI3O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FbSeparatorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-fb-separator',
          templateUrl: './fb-separator.component.html',
          styleUrls: ['./fb-separator.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\_projects\webdev\Fro-Bros-Homepage\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map