import { RouterModule, Routes } from "@angular/router";
import { GalleryComponent } from "./app/gallery/gallery.component";
import { ImageDetailComponent} from "./app/images/image-detail.component";


export const appRoutes:Routes = [
    { path: "gallery", component: GalleryComponent },
    { path: "images/:id", component: ImageDetailComponent },
    { path: "", redirectTo: "/gallery", pathMatch: 'full' },

]

