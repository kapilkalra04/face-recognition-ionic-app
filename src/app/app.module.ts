import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { SetupPage } from '../pages/setup/setup';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CameraPreview } from '@ionic-native/camera-preview';
import { File } from '@ionic-native/file';
import { ConnectorService } from './connector.service';
import { HTTP } from '@ionic-native/http';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    SetupPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    SetupPage
  ],
  providers: [
    StatusBar,
    ConnectorService,
    SplashScreen,
    CameraPreview,
    File,
    HTTP,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
