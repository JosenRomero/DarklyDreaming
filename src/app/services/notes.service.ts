import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'; // import HttpClientModule in app.module.ts 

import Note from '../interfaces/Note';

import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  URI = `${environment.API_URL}/api/note`;

  constructor(private http: HttpClient) { }

  createNote(userId: string, description: string, photo: File) {

    const data = new FormData();

    data.append('userId', userId);
    data.append('description', description);
    data.append('image', photo);

    return this.http.post(this.URI, data);

  }

  updateNote(id: string, description: string) {

    const data = {
      description
    }

    return this.http.put(`${this.URI}/${id}`, data);

  }

  getNotes(userId: string) {

    return this.http.get<Note[]>(`${this.URI}/all/userId/${userId}`);

  }

  getNote(id: string) {

    return this.http.get<Note>(`${this.URI}/${id}`);
    
  }

  deleteNote(id: string) {
    return this.http.delete(`${this.URI}/${id}`);
  }

}
