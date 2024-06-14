import { Component, OnInit } from '@angular/core';
import { ProfilService } from '../services/profil.service';
import { Profile } from '../model/profile.model';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {
  profiles!: Profile[];

  constructor(private profilService: ProfilService) {
  };

 ngOnInit(): void {
     this.profilService.getProfiles().subscribe((data: Profile[]) => {
       this.profiles = data;
     });
   }
}
