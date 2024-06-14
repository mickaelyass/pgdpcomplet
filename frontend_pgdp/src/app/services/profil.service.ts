import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile } from '../model/profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {
  private apiUrl = 'http://localhost:3000/api/profiles';

  constructor(private http: HttpClient) {}

  // Get all profiles
  getProfiles(): Observable<Profile[]> {
    return this.http.get<Profile[]>(this.apiUrl);
  }

  // Get a single profile by id
  getProfile(id: number): Observable<Profile> {
    return this.http.get<Profile>(`${this.apiUrl}/${id}`);
  }

  // Create a new profile
  createProfile(profile: any):Observable<any> {
    return this.http.post<any>(this.apiUrl, profile);
  }

  // Update an existing profile
  updateProfile(profile: Profile): Observable<Profile> {
    return this.http.put<Profile>(`${this.apiUrl}/${profile.id}`, profile);
  }

  // Delete a profile
  deleteProfile(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
