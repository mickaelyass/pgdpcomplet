const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');

const pool = new Pool({
  user: 'mickaelyass',
  host: 'localhost',
  database: 'db_pgdp',
  password: 'mickaelyass2001',
  port: 5432,
});

const app = express();

app.use(bodyParser.json());
app.use(cors());

// Get all profiles
app.get('/api/profiles', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM employes');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching profiles', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get a single profile by id
app.get('/api/profiles/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM employes WHERE id = $1', [id]);
    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).json({ error: 'Profile not found' });
    }
  } catch (err) {
    console.error(`Error fetching profile with id ${id}`, err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create a new profile
app.post('/api/profiles', async (req, res) => {
  const {
    matricule, cnss, nom, prenoms, nom_conjoint, sexe, date_nat, tranche_age,
    lieux_naissance, situat_matri, date_mariage, nbr_enfants, statut, corps,
    categorie_rat, branche_personnel, fonction, ref_nomination, date_prise_fonctions,
    responsabilite_particuliere, grade_paye, indice_paye, date_premier_prise_service,
    date_depart_retraite, date_prise_service_departement, reference_acte_date_prise_service_poste_actuel,
    poste_actuel_service, type_structure, commune, arrondissement, zone_sanitaire,
    poste_specifique, etat_depart, poste_anterieurs, autres_diplome, rib, mtn, celtics,
    libercom, email, observation_particuliere, distinction, reference_distinction,
    detail_distinction, situation_sante, sanction_punitive, nature_sanction
  } = req.body;

  const queryText = `
    INSERT INTO employes (
      matricule, cnss, nom, prenoms,nom_conjoint, sexe, date_nat, tranche_age, lieux_naissance,
      situat_matri, date_mariage, nbr_enfants, statut, corps, categorie_rat, branche_personnel,
      fonction, ref_nomination, date_prise_fonctions, responsabilite_particuliere, grade_paye,
      indice_paye, date_premier_prise_service, date_depart_retraite, date_prise_service_departement,
      reference_acte_date_prise_service_poste_actuel, poste_actuel_service, type_structure, commune,
      arrondissement, zone_sanitaire, poste_specifique, etat_depart, poste_anterieurs, autres_diplome,
      rib, mtn, celtics, libercom, email, observation_particuliere, distinction, reference_distinction,
      detail_distinction, situation_sante, sanction_punitive, nature_sanction
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20,
       $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32, $33, $34, $35, $36, $37, $38, $39, $40,
       $41, $42, $43, $44, $45, $46,$47)
    RETURNING *;
  `;

  const values = [
    matricule, cnss, nom, prenoms,nom_conjoint, sexe, date_nat, tranche_age, lieux_naissance,
    situat_matri, date_mariage, nbr_enfants, statut, corps, categorie_rat, branche_personnel,
    fonction, ref_nomination, date_prise_fonctions, responsabilite_particuliere, grade_paye,
    indice_paye, date_premier_prise_service, date_depart_retraite, date_prise_service_departement,
    reference_acte_date_prise_service_poste_actuel, poste_actuel_service, type_structure, commune,
    arrondissement, zone_sanitaire, poste_specifique, etat_depart, poste_anterieurs, autres_diplome,
    rib, mtn, celtics, libercom, email, observation_particuliere, distinction, reference_distinction,
    detail_distinction, situation_sante, sanction_punitive, nature_sanction
  ];

  try {
    const result = await pool.query(queryText, values);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error creating profile', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update an existing profile
app.put('/api/profiles/:id', async (req, res) => {
  const { id } = req.params;
  const {
    matricule, cnss, nom, prenoms, nom_conjoint, sexe, date_nat, tranche_age, lieux_naissance, situat_matri, date_mariage, nbr_enfants, statut, corps, categorie_rat, branche_personnel, fonction, ref_nomination, date_prise_fonctions, responsabilite_particuliere, grade_paye, indice_paye, date_premier_prise_service, date_depart_retraite, date_prise_service_departement, reference_acte_date_prise_service_poste_actuel, poste_actuel_service, type_structure, commune, arrondissement, zone_sanitaire, poste_specifique, etat_depart, poste_anterieurs, autres_diplome, rib, mtn, celtics, libercom, email, observation_particuliere, distinction, reference_distinction, detail_distinction, situation_sante, sanction_punitive, nature_sanction
  } = req.body;
  try {
    const result = await pool.query(
      `UPDATE employes SET
        matricule=$1, cnss=$2, nom=$3, prenoms=$4, nom_conjoint=$5, sexe=$6, date_nat=$7, tranche_age=$8,
        lieux_naissance=$9, situat_matri=$10, date_mariage=$11, nbr_enfants=$12, statut=$13, corps=$14,
        categorie_rat=$15, branche_personnel=$16, fonction=$17, ref_nomination=$18, date_prise_fonctions=$19,
        responsabilite_particuliere=$20, grade_paye=$21, indice_paye=$22, date_premier_prise_service=$23,
        date_depart_retraite=$24, date_prise_service_departement=$25,
        reference_acte_date_prise_service_poste_actuel=$26, poste_actuel_service=$27, type_structure=$28,
        commune=$29, arrondissement=$30, zone_sanitaire=$31, poste_specifique=$32, etat_depart=$33,
        poste_anterieurs=$34, autres_diplome=$35, rib=$36, mtn=$37, celtics=$38, libercom=$39, email=$40,
        observation_particuliere=$41, distinction=$42, reference_distinction=$43, detail_distinction=$44,
        situation_sante=$45, sanction_punitive=$46, nature_sanction=$47 WHERE id = $48
        RETURNING *`,
      [matricule, cnss, nom, prenoms, nom_conjoint, sexe, date_nat, tranche_age, lieux_naissance,
      situat_matri, date_mariage, nbr_enfants, statut, corps, categorie_rat, branche_personnel, fonction,
       ref_nomination, date_prise_fonctions, responsabilite_particuliere, grade_paye, indice_paye,
       date_premier_prise_service, date_depart_retraite, date_prise_service_departement,
       reference_acte_date_prise_service_poste_actuel, poste_actuel_service, type_structure, commune,
       arrondissement, zone_sanitaire, poste_specifique, etat_depart, poste_anterieurs, autres_diplome, rib,
       mtn, celtics, libercom, email, observation_particuliere, distinction, reference_distinction,
       detail_distinction, situation_sante, sanction_punitive, nature_sanction, id]
    );
    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).json({ error: `Profile with id ${id} not found` });
    }
  } catch (err) {
    console.error(`Error updating profile with id ${id}`, err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Delete a profile
app.delete('/api/profiles/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM employes WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length > 0) {
      res.status(204).send(); // No content
    } else {
      res.status(404).json({ error: `Profile with id ${id} not found` });
    }
  } catch (err) {
    console.error(`Error deleting profile with id ${id}`, err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

