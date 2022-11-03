import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AuthComponent } from './auth/auth.component';
import { FormsModule } from '@angular/forms';
import { ViewComponent } from './view/view.component';
import { AddCarComponent } from './view/add-car/add-car.component';
import { ReadCarsComponent } from './view/read-cars/read-cars.component';
import { UpdateCarComponent } from './view/update-car/update-car.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { LoadingService } from './shared/services/loading.service';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { MaterialModule } from './material/material.module';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AuthComponent,
    ViewComponent,
    AddCarComponent,
    ReadCarsComponent,
    UpdateCarComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
  ],
  providers: [
    AuthGuard,
    LoadingService,
    DatePipe,
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
