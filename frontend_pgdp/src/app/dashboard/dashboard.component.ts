import { Component } from '@angular/core';
import { ProfilService } from '../services/profil.service';
import { Profile } from '../model/profile.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
profiles!: Profile[];

  constructor(private profilService: ProfilService) {
  };

 ngOnInit(): void {
     this.profilService.getProfiles().subscribe((data: Profile[]) => {
       this.profiles = data;
     });

        }
   }




