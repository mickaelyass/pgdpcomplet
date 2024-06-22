import { Component } from '@angular/core';
import {Profile} from "../model/profile.model";
import {ProfilService} from "../services/profil.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-dossierpersonnel',
  templateUrl: './dossierpersonnel.component.html',
  styleUrl: './dossierpersonnel.component.css'
})
export class DossierpersonnelComponent {


  profiles!: Profile[];
  id!:number;

  constructor(private profilService: ProfilService,private router: Router) {
  };

  editProfile(profileId: number) {
    this.router.navigate(['/edit-profile', profileId]);
  }

 ngOnInit(): void {
     this.profilService.getProfiles().subscribe((data: Profile[]) => {
       this.profiles = data;
     });
   }

  onwatchprofil(id:number){

      this.router.navigate(['/voir-profile', id]);
  }
  ondelete(id:number){
  this.router.navigate(['/delete-profile', id]);
}

}
