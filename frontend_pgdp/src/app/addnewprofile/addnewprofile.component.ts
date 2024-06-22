import { Component,OnInit } from '@angular/core';
import { ProfilService } from '../services/profil.service';
import { Profile } from '../model/profile.model';
import{FormGroup,Validators,FormBuilder} from '@angular/forms';
import {throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addnewprofile',
  templateUrl: './addnewprofile.component.html',
  styleUrl: './addnewprofile.component.css'
})


export class AddnewprofileComponent  implements OnInit {
  personnelForm!: FormGroup;
  donnee!: any;
  isUpdateMode: boolean = false;
  currentProfileId!: number  ;

  constructor(private fb: FormBuilder,  private route: ActivatedRoute,
              private profilService: ProfilService) {}

  ngOnInit() {
    this.personnelForm = this.fb.group({
      matricule: ['', Validators.required],
      cnss: ['', Validators.required],
      nom: ['', Validators.required],
      prenoms: ['', Validators.required],
      nom_conjoint: [''],
      sexe: ['', Validators.required],
      date_nat: ['', Validators.required],
      tranche_age: [''],
      lieux_naissance: ['', Validators.required],
      situat_matri: ['', Validators.required],
      date_mariage: [''],
      nbr_enfants: ['', Validators.required],
      statut: ['', Validators.required],
      corps: ['', Validators.required],
      categorie_rat: ['', Validators.required],
      branche_personnel: ['', Validators.required],
      fonction: ['', Validators.required],
      ref_nomination: ['', Validators.required],
      date_prise_fonctions: ['', Validators.required],
      responsabilite_particuliere: [''],
      grade_paye: ['', Validators.required],
      indice_paye: ['', Validators.required],
      date_premier_prise_service: ['', Validators.required],
      date_depart_retraite: [''],
      date_prise_service_departement: [''],
      reference_acte_date_prise_service_poste_actuel: [''],
      poste_actuel_service: ['', Validators.required],
      type_structure: ['', Validators.required],
      commune: ['', Validators.required],
      arrondissement: ['', Validators.required],
      zone_sanitaire: ['', Validators.required],
      poste_specifique: [''],
      etat_depart: ['', Validators.required],
      poste_anterieurs: [''],
      autres_diplome: [''],
      rib: ['', Validators.required],
      mtn: [''],
      celtics: [''],
      libercom: [''],
      email: ['', [Validators.required, Validators.email]],
      observation_particuliere: [''],
      distinction: [''],
      reference_distinction: [''],
      detail_distinction: [''],
      situation_sante: [''],
      sanction_punitive: [''],
      nature_sanction: ['']
    });

      this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.currentProfileId = +id; // Convertir l'ID en nombre
        this.isUpdateMode = true; // Activer le mode mise à jour
        this.loadProfileData(this.currentProfileId);
      }
    });

  }

  onSubmit() {
      const formValues = this.personnelForm.value;
      const profilData = this.createOBJET(formValues);

      if(this.personnelForm.valid){
        if (this.isUpdateMode) {
        // Mode mise à jour
        this.profilService.updateProfile(this.currentProfileId, profilData)
          .pipe(
            catchError(error => {
              console.error('Error updating profile:', error);
              return throwError(error);
            })
          )
          .subscribe(
            updatedProfile => {
              console.log('Profile updated:', updatedProfile);
              this.donnee = updatedProfile;
              this.personnelForm.reset();
            },
            error => {
              console.error('Error:', error);
            }
          );
      }else
        {
          this.profilService.createProfile(profilData)
            .pipe(
              catchError(error => {
                console.error('Error creating profile:', error);
                return throwError(error);
              })
            )
            .subscribe(
              createdProfile => {
                console.log('Profile created:', createdProfile);
                this.donnee = createdProfile;
                this.personnelForm.reset();
              },
              error => {
                console.error('Error:', error);
              }
            );
        } } else {
      // Marquer tous les champs du formulaire comme touchés (si nécessaire)
      Object.values(this.personnelForm.controls).forEach(control => {
        control.markAsTouched();
      });
    }
      }
  createOBJET(formValues: any): any {
    return {
      id:1,
      matricule: formValues.matricule,
      cnss: formValues.cnss,
      nom: formValues.nom,
      prenoms: formValues.prenoms,
      nom_conjoint: formValues.nom_conjoint,
      sexe: formValues.sexe,
      date_nat: formValues.date_nat,
      tranche_age: formValues.tranche_age,
      lieux_naissance: formValues.lieux_naissance,
      situat_matri: formValues.situat_matri,
      date_mariage: formValues.date_mariage,
      nbr_enfants: formValues.nbr_enfants,
      statut: formValues.statut,
      corps: formValues.corps,
      categorie_rat: formValues.categorie_rat,
      branche_personnel: formValues.branche_personnel,
      fonction: formValues.fonction,
      ref_nomination: formValues.ref_nomination,
      date_prise_fonctions: formValues.date_prise_fonctions,
      responsabilite_particuliere: formValues.responsabilite_particuliere,
      grade_paye: formValues.grade_paye,
      indice_paye: formValues.indice_paye,
      date_premier_prise_service: formValues.date_premier_prise_service,
      date_depart_retraite: formValues.date_depart_retraite,
      date_prise_service_departement: formValues.date_prise_service_departement,
      reference_acte_date_prise_service_poste_actuel: formValues.reference_acte_date_prise_service_poste_actuel,
      poste_actuel_service: formValues.poste_actuel_service,
      type_structure: formValues.type_structure,
      commune: formValues.commune,
      arrondissement: formValues.arrondissement,
      zone_sanitaire: formValues.zone_sanitaire,
      poste_specifique: formValues.poste_specifique,
      etat_depart: formValues.etat_depart,
      poste_anterieurs: formValues.poste_anterieurs,
      autres_diplome: formValues.autres_diplome,
      rib: formValues.rib,
      mtn: formValues.mtn,
      celtics: formValues.celtics,
      libercom: formValues.libercom,
      email: formValues.email,
      observation_particuliere: formValues.observation_particuliere,
      distinction: formValues.distinction,
      reference_distinction: formValues.reference_distinction,
      detail_distinction: formValues.detail_distinction,
      situation_sante: formValues.situation_sante,
      sanction_punitive: formValues.sanction_punitive,
      nature_sanction: formValues.nature_sanction
    };
  }
  loadProfileData(profileId: number) {
    this.profilService.getProfile(profileId)
      .subscribe(
        profile => {
          this.patchForm(profile); // Appeler la méthode pour patcher le formulaire avec les données du profil
        },
        error => {
          console.error('Error fetching profile:', error);
        }
      );
  }

  patchForm(profile: any) {
    this.personnelForm.patchValue({
       matricule: profile.matricule,
      cnss: profile.cnss,
      nom: profile.nom,
      prenoms: profile.prenoms,
      nom_conjoint: profile.nom_conjoint,
      sexe: profile.sexe,
      date_nat: profile.date_nat,
      tranche_age: profile.tranche_age,
      lieux_naissance: profile.lieux_naissance,
      situat_matri: profile.situat_matri,
      date_mariage: profile.date_mariage,
      nbr_enfants: profile.nbr_enfants,
      statut: profile.statut,
      corps: profile.corps,
      categorie_rat: profile.categorie_rat,
      branche_personnel: profile.branche_personnel,
      fonction: profile.fonction,
      ref_nomination: profile.ref_nomination,
      date_prise_fonctions: profile.date_prise_fonctions,
      responsabilite_particuliere: profile.responsabilite_particuliere,
      grade_paye: profile.grade_paye,
      indice_paye: profile.indice_paye,
      date_premier_prise_service: profile.date_premier_prise_service,
      date_depart_retraite: profile.date_depart_retraite,
      date_prise_service_departement: profile.date_prise_service_departement,
      reference_acte_date_prise_service_poste_actuel: profile.reference_acte_date_prise_service_poste_actuel,
      poste_actuel_service: profile.poste_actuel_service,
      type_structure: profile.type_structure,
      commune: profile.commune,
      arrondissement: profile.arrondissement,
      zone_sanitaire: profile.zone_sanitaire,
      poste_specifique: profile.poste_specifique,
      etat_depart: profile.etat_depart,
      poste_anterieurs: profile.poste_anterieurs,
      autres_diplome: profile.autres_diplome,
      rib: profile.rib,
      mtn: profile.mtn,
      celtics: profile.celtics,
      libercom: profile.libercom,
      email: profile.email,
      observation_particuliere: profile.observation_particuliere,
      distinction: profile.distinction,
      reference_distinction: profile.reference_distinction,
      detail_distinction: profile.detail_distinction,
      situation_sante: profile.situation_sante,
      sanction_punitive: profile.sanction_punitive,
      nature_sanction: profile.nature_sanction
      // Patcher d'autres champs de votre formulaire avec les données du profil
    });
  }
}


