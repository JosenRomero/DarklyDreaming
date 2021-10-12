import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NotesService } from '../../services/notes.service';
import { AuthService } from '../../services/auth.service';

import Note from '../../interfaces/Note';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {

  notes: Note[] = [];

  constructor(private notesService: NotesService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {

    this.getAllUserNotes()

  }

  async getAllUserNotes() {

    const user = await this.authService.getUser();

    if(user) {
      
      this.notesService.getNotes(user.uid).subscribe(
        res => {
          this.notes = res;
        },
        err => console.log(err)
      )

    }

  }

  selectedNote(id: string) {

    this.router.navigate([`/notes/${id}`]);

  }

}
