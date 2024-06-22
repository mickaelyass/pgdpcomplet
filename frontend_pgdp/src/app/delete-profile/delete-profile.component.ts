import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ProfilService} from "../services/profil.service";
import {Profile} from "../model/profile.model";

@Component({
  selector: 'app-delete-profile',
  templateUrl: './delete-profile.component.html',
  styleUrl: './delete-profile.component.css'
})
export class DeleteProfileComponent implements OnInit{
  monid!:number;
  constructor(private fb: FormBuilder,  private route: ActivatedRoute,private router:Router,
              private profilService: ProfilService) {}
  ngOnInit() {
     this.route.params.subscribe(params => {
       const id = params['id'];
       if (id) {
         this.monid = +id; // Convertir l'ID en nombre
         this.profilService.deleteProfile(id).subscribe();
       }
     });
  }
  continuer(){
    this.router.navigate(['/dossierpersonnel']);
  }

}
