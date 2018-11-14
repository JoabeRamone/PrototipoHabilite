import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { Abaut_2Page } from '../pages/abaut-2/abaut-2';
import { Abaut_3Page  } from '../pages/abaut-3/abaut-3';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Home_2PageModule} from "../pages/home-2/home-2.module";
import {Home_2Page} from "../pages/home-2/home-2";
import { QuestionarioProvider } from '../providers/questionario/questionario';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    Home_2Page,
    TabsPage,
    Abaut_2Page,
    Abaut_3Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    Home_2Page,
    TabsPage,
    Abaut_2Page,
    Abaut_3Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    QuestionarioProvider
  ]
})
export class AppModule {}
