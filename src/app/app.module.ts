import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { FormsModule } from '@angular/forms';
import { Angular2AirDatepickerModule } from 'angular2-air-datepicker';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { ProjectsComponent } from './projects/projects.component';
import { PassbookComponent } from './passbook/passbook.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from '../services/auth.guard';
import { DeferLoadModule } from '@trademe/ng-defer-load';
import { ForgotpasswordComponent } from './login/forgotpassword/forgotpassword.component';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';
import { ImageGalleryComponent } from './projects/project-detail/image-gallery/image-gallery.component';
import { ActivityComponent } from './activity/activity.component';
import { ProfileComponent } from './profile/profile.component';
import { TransactionsComponent } from './profile/transactions/transactions.component';
import { ProfileInfoComponent } from './profile/profile-info/profile-info.component';
import { MessagesComponent } from './profile/messages/messages.component';
import { SettingsComponent } from './profile/settings/settings.component';
import { AgmCoreModule } from '@agm/core';
import { LocationsService } from '../services/locations.service';
import { ConfigService } from '../services/config.service';
import { MapsService } from '../services/maps.service';
import { FooterComponent } from './footer/footer.component';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { MaphilightModule } from 'ng-maphilight';
import { FavoritesComponent } from './profile/favorites/favorites.component';
import { SaveSearchComponent } from './profile/save-search/save-search.component';
import { BuyComponent } from './buy/buy.component';
import { AllotmentComponent } from './allotment/allotment.component';
import { HttpClientModule } from '@angular/common/http';
import { PopUpComponent } from './login/pop-up/pop-up.component';
import { HelpComponent } from './help/help.component';
import '../services/capitalize.ts';
import { ViceroyceComponent } from './buy/plans/viceroyce/viceroyce.component';
import { DiamondJewelComponent } from './buy/plans/diamond-jewel/diamond-jewel.component';
import { PropDetailComponent } from './prop-detail/prop-detail.component';
import { BnNgIdleService } from 'bn-ng-idle';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    PageNotFoundComponent,
    ProjectsComponent,
    PassbookComponent,
    ForgotpasswordComponent,
    ProjectDetailComponent,
    ImageGalleryComponent,
    ActivityComponent,
    ProfileComponent,
    TransactionsComponent,
    ProfileInfoComponent,
    MessagesComponent,
    SettingsComponent,
    FooterComponent,
    FavoritesComponent,
    SaveSearchComponent,
    BuyComponent,
    AllotmentComponent,
    PopUpComponent,
    HelpComponent,
    ViceroyceComponent,
    DiamondJewelComponent,
    PropDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    Angular2AirDatepickerModule,
    BrowserAnimationsModule,
    DeferLoadModule,
    MaphilightModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCmZRbVe0NCyJB91vrGLrcb8pKAWFEsTwQ'
    }),
    NgxMapboxGLModule.withConfig({
      accessToken: 'pk.eyJ1IjoiY2hhcmxpc3NhaXNhbmoiLCJhIjoiY2p6aHl6bmE1MTBudTNjbGJqMDl5a2Y0aiJ9.kdPD9Bn9QRGL8PcJTkUKew'
    })
  ],
  providers: [AuthGuard, LocationsService, MapsService, LoginComponent, ConfigService, PopUpComponent, BnNgIdleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
