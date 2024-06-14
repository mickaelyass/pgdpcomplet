import { Component,OnInit } from '@angular/core';
import { ProfilService } from '../services/profil.service';
import { Profile } from '../model/profile.model';
import{FormGroup,Validators,FormBuilder} from '@angular/forms';
import {catchError,throwError} from "rxjs";

@Component({
  selector: 'app-addnewprofile',
  templateUrl: './addnewprofile.component.html',
  styleUrl: './addnewprofile.component.css'
})
export class AddnewprofileComponent implements OnInit {

 personnelForm!:FormGroup;
 donnee!:any;


constructor(private profilService: ProfilService,private fb:FormBuilder) {
  };

  ngOnInit():void{

  this.personnelForm=this.fb.group({
          matricule:[''],
          cnss:[''],
          nom:[''],
          prenoms:[''],
          nom_conjoint:[''],
          sexe:[''],
          date_nat:[''],
          tranche_age:[''],
          lieux_naissance:[''],
            situat_matri:[''],
            date_mariage:[''],
            nbr_enfants:[''],
            statut:[''],
            corps:[''],
            categorie_rat:[''],
            branche_personnel:[''],
          fonction:[''],
          ref_nomination:[''],
          date_prise_fonctions:[''],
          responsabilite_particuliere:[''],
          grade_paye:[''],
          indice_paye:[''],
          date_premier_prise_service:[''],
          date_depart_retraite:[''],
           date_prise_service_departement:[''],
              reference_acte_date_prise_service_poste_actuel:[''],
            poste_actuel_service:[''],
            type_structure:[''],
            commune:[''],
            arrondissement:[''],
            zone_sanitaire:[''],
            poste_specifique:[''],
            etat_depart:[''],
            poste_anterieurs:[''],
             autres_diplome:[''],
                rib:[''],
              mtn:[''],
              celtics:[''],
              libercom:[''],
              email:[''],
              observation_particuliere:[''],
              distinction:[''],
              reference_distinction:[''],
              detail_distinction:[''],
               situation_sante:[''],
                  sanction_punitive:[''],
                nature_sanction:[''],

           });

  }
  onSubmit() {
            this.donnee =this.personnelForm.value;
            console.log(this.donnee);

           this.profilService.createProfile(this.donnee)
             .pipe(
               catchError(error => {
                 console.error('Error creating profil:',error);
                 return throwError(error);
               })
             )
             .subscribe(createProfile=>{
               console.log('Profil created:',createProfile);
             });
          };
}
