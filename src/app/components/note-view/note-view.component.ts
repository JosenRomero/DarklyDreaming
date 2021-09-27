import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NotesService } from '../../services/notes.service';

import Note from '../../interfaces/Note';

@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.css']
})
export class NoteViewComponent implements OnInit {

  id: string = "";
  note!: Note;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private notesService: NotesService) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .subscribe(params => {

        this.id = params['id'];

        this.notesService.getNote(this.id).subscribe(
          res => {
            this.note = res;
          },
          err => console.log(err)
        )

      }
    )

  }

  deleteNote() {

    this.notesService.deleteNote(this.id).subscribe(
      res => {

        console.log(res);

        this.router.navigate(['/notes']);

      },
      err => console.log(err)
    )

  }

  // return false;  it Prevents the browsers default behaviour, Prevents the event from bubbling up the DOM
  updateNote(description: HTMLTextAreaElement): boolean {

    this.notesService.updateNote(this.id, description.value).subscribe(
      res => {
        this.router.navigate(['/notes']);
      },
      err => console.log(err)
    )

    return false;

  }

}
