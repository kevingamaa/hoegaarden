import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutModule } from '@angular/cdk/layout';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './layout/nav/nav.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { EventosComponent } from './pages/home/eventos/eventos.component';
import { EventoComponent } from './pages/evento/evento.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        FooterComponent,
        HomeComponent,
        EventosComponent,
        EventoComponent
    ],
    imports: [
        CommonModule,
        NgtUniversalModule,
        TransferHttpCacheModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        LayoutModule,
    ],
    providers: [],
})
export class AppModule { }
