import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent implements OnInit {

  photoSelected!: string | ArrayBuffer | null;
  file!: File;

  constructor(private notesService: NotesService, private router: Router) { }

  ngOnInit(): void {
  }

  onPhotoSelected(event: Event): void {

    const target = event.target as HTMLInputElement;
    const fileList = target.files as FileList;

    if (fileList && fileList[0]) {

      this.file = <File>fileList[0];

      // The FileReader is for read the contents of files (or raw data buffers) 
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result; // The FileReader result property returns the file's contents
      reader.readAsDataURL(this.file); // The readAsDataURL method is used to read the contents of the specified Blob or File

    }

  }

  addNote(description: HTMLTextAreaElement): boolean {

    this.notesService.createNote(description.value, this.file)
      .subscribe(
        res => {
          this.router.navigate(['/notes']);
        }, 
        err => console.log(err)
      )

    return false;

  }

}
