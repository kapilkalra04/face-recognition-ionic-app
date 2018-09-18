webpackJsonp([0],{

/***/ 111:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 153:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 153;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelloIonicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_connector_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HelloIonicPage = /** @class */ (function () {
    function HelloIonicPage(connector, http) {
        this.connector = connector;
        this.http = http;
    }
    HelloIonicPage.prototype.connect = function () {
        var _this = this;
        this.connector.apiURL = 'http://' + this.url + ':5000';
        this.http.get(this.connector.apiURL, {}, {}).then(function (res) {
            _this.message = 'Status: ' + res.status + '		Message: ' + res.data;
        }, function (err) {
            alert(JSON.stringify(err));
        });
    };
    HelloIonicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hello-ionic',template:/*ion-inline-start:"C:\Users\kapilkalra04\Documents\CloudCherry Analytics\CC04_face-off-demo\face-recognition-ionic-app\src\pages\hello-ionic\hello-ionic.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Hello World</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <h1 style="color: #03a9f4;">Welcome to Face Recognition Demo App!</h1>\n  <h4>Fasten your seat-belts</h4>\n  <p style="font-size: 13pt">\n    Verify whether you are part of our library of trusted faces or not. We use <b>OpenCV, Tensorflow, Keras and FaceNet</b> to achieve this.  \n  </p>\n  <p>\n    <ion-item>\n      <ion-input type="url" [(ngModel)]="url" placeholder="Locally Hosted Python Flask Server IP"></ion-input>\n    </ion-item>\n  </p>\n  <p>\n    <button ion-button color="primary" (click)="connect()" >Connect</button>\n  </p>\n  <p style="font-size: 13pt">\n    {{message}}\n  </p>\n</ion-content>\n'/*ion-inline-end:"C:\Users\kapilkalra04\Documents\CloudCherry Analytics\CC04_face-off-demo\face-recognition-ionic-app\src\pages\hello-ionic\hello-ionic.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_connector_service__["a" /* ConnectorService */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__["a" /* HTTP */]])
    ], HelloIonicPage);
    return HelloIonicPage;
}());

//# sourceMappingURL=hello-ionic.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera_preview__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_connector_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_http__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SetupPage = /** @class */ (function () {
    function SetupPage(cameraPreview, file, connector, http) {
        var _this = this;
        this.cameraPreview = cameraPreview;
        this.file = file;
        this.connector = connector;
        this.http = http;
        this.http.setRequestTimeout(1000);
        this.file.checkDir(this.file.externalDataDirectory, 'train-unprocessed').then(function (res) {
            _this.trainPath = _this.file.externalDataDirectory + 'train-unprocessed';
            _this.file.readAsText(_this.file.externalDataDirectory, 'empCount.txt').then(function (res) {
                _this.empCount = Number(res);
            }, function (err) {
                alert(JSON.stringify(err));
            });
        }, function (err) {
            _this.file.createDir(_this.file.externalDataDirectory, 'train-unprocessed', true).then(function (res) {
                _this.trainPath = _this.file.externalDataDirectory + 'train-unprocessed';
                _this.file.writeFile(_this.file.externalDataDirectory, 'empCount.txt', '0').then(function (res) {
                    _this.file.readAsText(_this.file.externalDataDirectory, 'empCount.txt').then(function (res) {
                        _this.empCount = Number(res);
                    }, function (err) {
                        alert(JSON.stringify(err));
                    });
                }, function (err) {
                    alert(JSON.stringify(err));
                });
            }, function (err) {
                alert(JSON.stringify(err));
            });
        });
    }
    SetupPage.prototype.onClick = function (event) {
        var _this = this;
        var cameraPreviewOpts = {
            x: 0,
            y: 0,
            width: window.screen.width,
            height: window.screen.height,
            camera: 'front',
            tapPhoto: false,
            toBack: false,
            alpha: 1
        };
        var pictureOpts = {
            quality: 100
        };
        this.cameraPreview.startCamera(cameraPreviewOpts).then(function (res) {
            alert('Press OK to Capture a Photo');
            _this.message = "Uploading...";
            _this.message2 = null;
            _this.message3 = null;
            _this.message4 = null;
            _this.message5 = null;
            _this.message6 = null;
            _this.cameraPreview.takePicture(pictureOpts).then(function (imageData) {
                _this.http.post(_this.connector.apiURL + '/upload', { 'imageData': imageData, 'empCount': _this.empCount }, {}).then(function (res) {
                    alert('Image Upload Successful');
                    _this.empCount = _this.empCount + 1;
                    _this.file.writeExistingFile(_this.file.externalDataDirectory, 'empCount.txt', String(_this.empCount));
                    _this.message = "Process?";
                }, function (err) {
                    alert(JSON.stringify(err));
                });
                _this.cameraPreview.stopCamera();
            }, function (err) {
                alert(err);
                _this.cameraPreview.stopCamera();
            });
        }, function (err) {
            alert(err);
            _this.cameraPreview.stopCamera();
        });
    };
    SetupPage.prototype.onClick2 = function (event) {
        var _this = this;
        this.message = null;
        this.message2 = "Calculating Face Embeddings, using FaceNet...";
        setTimeout(function () { _this.message3 = "STEP-1: Crop-out the main Face from the captured image (FACE DETECTION)"; }, 5000);
        setTimeout(function () { _this.message4 = "STEP-2: Straighten the cropped face using eye detection (FACE-ALIGNMENT)"; }, 10000);
        setTimeout(function () { _this.message5 = "STEP-3: Generate and Store the Facial Embeddings for the cropped Face(ONE-SHOT LEARNING)"; }, 15000);
        setTimeout(function () { _this.message6 = "Repeat for all photos present inside the library..."; }, 20000);
        this.http.get(this.connector.apiURL + '/train', {}, {}).then(function (res) {
            alert(res.data);
            _this.message2 = "Done";
            _this.message3 = null;
            _this.message4 = null;
            _this.message5 = null;
            _this.message6 = null;
        }, function (err) {
            alert(JSON.stringify(err));
        });
    };
    SetupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-setup',template:/*ion-inline-start:"C:\Users\kapilkalra04\Documents\CloudCherry Analytics\CC04_face-off-demo\face-recognition-ionic-app\src\pages\setup\setup.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Setup Page</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <h1 style="color: #03a9f4">Upload Photos to the Library!</h1>\n\n  <h4>\n\n    Add yourself to our library of trusted faces.\n\n  </h4>\n\n  <p>\n\n    <button ion-button color="dark" small round outline (click)="onClick($event);">Upload</button>\n\n    <button ion-button color="dark" small round outline (click)="onClick2($event);">Process</button>\n\n  </p>\n\n  <p style="font-size: 13pt">\n\n    {{message}}\n\n    <br>\n\n    {{message2}}\n\n    <br>\n\n    {{message3}}\n\n    <br>\n\n    {{message4}}\n\n    <br>\n\n    {{message5}}\n\n    <br><br>\n\n    {{message6}}\n\n  </p>\n\n</ion-content>'/*ion-inline-end:"C:\Users\kapilkalra04\Documents\CloudCherry Analytics\CC04_face-off-demo\face-recognition-ionic-app\src\pages\setup\setup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_camera_preview__["a" /* CameraPreview */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_3__app_connector_service__["a" /* ConnectorService */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_http__["a" /* HTTP */]])
    ], SetupPage);
    return SetupPage;
}());

//# sourceMappingURL=setup.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera_preview__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_connector_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VerifyPage = /** @class */ (function () {
    function VerifyPage(cameraPreview, connector, http) {
        this.cameraPreview = cameraPreview;
        this.connector = connector;
        this.http = http;
    }
    VerifyPage.prototype.onClick = function (event) {
        var _this = this;
        /*alert('wait')
        */ var cameraPreviewOpts = {
            x: 0,
            y: 0,
            width: window.screen.width,
            height: window.screen.height,
            camera: 'front',
            tapPhoto: false,
            toBack: true,
            alpha: 1
        };
        var pictureOpts = {
            quality: 100
        };
        function takePicture() {
        }
        this.cameraPreview.startCamera(cameraPreviewOpts).then(function (res) {
            _this.message = "Uploading.....";
            _this.message2 = null;
            _this.message3 = null;
            _this.message4 = null;
            _this.message5 = null;
            setTimeout(function () {
                _this.cameraPreview.takePicture(pictureOpts).then(function (imageData) {
                    _this.message = "Comparing Face Embeddings(of test vs train subjects) generated using FaceNet ...";
                    setTimeout(function () { _this.message2 = "STEP-1: Crop-out the main Face from the captured image (FACE DETECTION)"; }, 5000);
                    setTimeout(function () { _this.message3 = "STEP-2: Straighten the cropped face using eye detection (FACE-ALIGNMENT)"; }, 10000);
                    setTimeout(function () { _this.message4 = "STEP-3: Generate and compare the Facial Embedding with the stored facial embeddings(FACE-RECOGNITION)"; }, 15000);
                    _this.http.post(_this.connector.apiURL + '/verify', { 'imageData': imageData }, {}).then(function (res) {
                        var response = JSON.parse(res.data);
                        _this.message = 'Norm Distances - ' + response.norm;
                        _this.message2 = 'Are you an employee? - ' + response.result;
                        _this.message3 = null;
                        _this.message4 = null;
                        _this.message5 = null;
                    }, function (err) {
                        _this.message = err.data;
                        alert(JSON.stringify(err));
                        _this.cameraPreview.stopCamera();
                    });
                    _this.cameraPreview.stopCamera();
                }, function (err) {
                    alert(err);
                    _this.cameraPreview.stopCamera();
                });
            }, 300);
        }, function (err) {
            alert(err);
            _this.cameraPreview.stopCamera();
        });
    };
    VerifyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-setup',template:/*ion-inline-start:"C:\Users\kapilkalra04\Documents\CloudCherry Analytics\CC04_face-off-demo\face-recognition-ionic-app\src\pages\verify\verify.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Verification Page</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <h1 style="color: #03a9f4">Test whether you belong to our trusted face Library!</h1>\n\n  <h4>Press the VERIFY button and wait for the magic to happen.</h4>\n\n  <p>\n\n    <button ion-button color="dark" small round outline (click)="onClick($event);">Verify</button>\n\n  </p>\n\n  <p style="font-size: 13pt">\n\n    {{message}}\n\n  </p>\n\n  <p style="font-size: 13pt">\n\n    {{message2}}\n\n    <br>\n\n    {{message3}}\n\n    <br>\n\n    {{message4}}\n\n    <br>\n\n    {{message5}}\n\n    <br>\n\n    {{message6}}\n\n  </p>\n\n</ion-content>'/*ion-inline-end:"C:\Users\kapilkalra04\Documents\CloudCherry Analytics\CC04_face-off-demo\face-recognition-ionic-app\src\pages\verify\verify.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_camera_preview__["a" /* CameraPreview */], __WEBPACK_IMPORTED_MODULE_2__app_connector_service__["a" /* ConnectorService */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__["a" /* HTTP */]])
    ], VerifyPage);
    return VerifyPage;
}());

//# sourceMappingURL=verify.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_hello_ionic_hello_ionic__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_setup_setup__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_verify_verify__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera_preview__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_file__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__connector_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_http__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_setup_setup__["a" /* SetupPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_verify_verify__["a" /* VerifyPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_setup_setup__["a" /* SetupPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_verify_verify__["a" /* VerifyPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__connector_service__["a" /* ConnectorService */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera_preview__["a" /* CameraPreview */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_http__["a" /* HTTP */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_hello_ionic_hello_ionic__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_setup_setup__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_verify_verify__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, menu, statusBar, splashScreen) {
        this.platform = platform;
        this.menu = menu;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        // make HelloIonicPage the root (or first) page
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */];
        this.initializeApp();
        // set our app's pages
        this.pages = [
            { title: 'Hello World', component: __WEBPACK_IMPORTED_MODULE_2__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */] },
            { title: 'Setup', component: __WEBPACK_IMPORTED_MODULE_3__pages_setup_setup__["a" /* SetupPage */] },
            { title: 'Verify', component: __WEBPACK_IMPORTED_MODULE_4__pages_verify_verify__["a" /* VerifyPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\kapilkalra04\Documents\CloudCherry Analytics\CC04_face-off-demo\face-recognition-ionic-app\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Pages</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"C:\Users\kapilkalra04\Documents\CloudCherry Analytics\CC04_face-off-demo\face-recognition-ionic-app\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ConnectorService = /** @class */ (function () {
    function ConnectorService() {
    }
    ConnectorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], ConnectorService);
    return ConnectorService;
}());

;
//# sourceMappingURL=connector.service.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map