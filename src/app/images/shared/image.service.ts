import { Injectable } from '@angular/core';



@Injectable()
export class ImageService{
    visibleImages = [];
    getImages(){
        return this.visibleImages = IMAGES.slice(0);
    }

    getImage(id: number){
        return IMAGES.slice(0).find (image => image.id == id)
    }
}

const IMAGES = [
    {"id": 1, "category": "Caveyrac_2018", "caption": "Arrivée à Caveirac", "url": "assets/img/cav1.jpeg"},
    {"id": 2, "category": "Caveyrac_2018", "caption": "On passe le temps", "url": "assets/img/cav2.jpeg"},
    {"id": 3, "category": "Caveyrac_2018", "caption": "Petite pose !", "url": "assets/img/cav3.jpeg"},
    {"id": 4, "category": "Caveyrac_2018", "caption": "On patiente un peu ", "url": "assets/img/cav4.jpeg"},
    {"id": 5, "category": "Caveyrac_2018", "caption": "Puis la course", "url": "assets/img/cav5.jpeg"},
    {"id": 6, "category": "Caveyrac_2018", "caption": "Les alentours", "url": "assets/img/cav6.jpeg"},
    {"id": 7, "category": "Caveyrac_2018", "caption": "L'arrivée", "url": "assets/img/cav7.jpeg"},
    {"id": 8, "category": "Caveyrac_2018", "caption": "Les alentours", "url": "assets/img/cav8.jpeg"},
    {"id": 9, "category": "Caveyrac_2018", "caption": "Les alentours", "url": "assets/img/cav9.jpeg"},
    {"id": 10, "category": "Caveyrac_2018", "caption": "Les alentours", "url": "assets/img/cav10.jpeg"},
    {"id": 11, "category": "Caveyrac_2018", "caption": "Les alentours", "url": "assets/img/cav11.jpeg"},
]