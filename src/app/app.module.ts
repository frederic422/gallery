import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ImageFilterPipe } from './images/shared/filter.pipes';
import { ImageDetailComponent } from './images/image-detail.component';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageService } from './images/shared/image.service';
import { appRoutes } from '../routes';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    ImageFilterPipe,
    ImageDetailComponent,
  ],
  imports: [
    //appRoutes,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [ImageService, ImageFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
