import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'; // import HttpClientModule in app.module.ts 

import Note from '../interfaces/Note';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  URI = 'http://localhost:3001/api/note';

  constructor(private http: HttpClient) { }

  createNote(description: string, photo: File) {

    const data = new FormData();

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

  getNotes() {

    return this.http.get<Note[]>(this.URI);

  }

  getNote(id: string) {

    return this.http.get<Note>(`${this.URI}/${id}`);
    
  }

  deleteNote(id: string) {
    return this.http.delete(`${this.URI}/${id}`);
  }

}
