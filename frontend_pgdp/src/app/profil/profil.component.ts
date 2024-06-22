import {Component, OnInit} from '@angular/core';
import { ProfilService } from '../services/profil.service';
import { Profile } from '../model/profile.model';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.css'
})
export class ProfilComponent implements OnInit{
  profili!:Profile;
  monid!:number;
constructor(private profilService:ProfilService,private route:ActivatedRoute,private router: Router) {
}
    ngOnInit() {
       this.route.params.subscribe(params => {
         const id = params['id'];
         if (id) {
           this.monid = +id; // Convertir l'ID en nombre
           this.profilService.getProfile(this.monid).subscribe((info: Profile) => {
             this.profili = info;
           })
         }
       });
    }

}


