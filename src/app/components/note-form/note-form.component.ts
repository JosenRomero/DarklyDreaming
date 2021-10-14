import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormGroup, FormControl } from '@angular/forms'; // import ReactiveFormsModule in app.module.ts 

import { NotesService } from '../../services/notes.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent implements OnInit {

  photoSelected!: string | ArrayBuffer | null;
  file!: File;

  noteForm = new FormGroup({
    description: new FormControl('')
  });

  constructor(private notesService: NotesService, private authService: AuthService, private router: Router) { }

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

  // return false;  it Prevents the browsers default behaviour, Prevents the event from bubbling up the DOM
  async addNote(): Promise<boolean | any> {

    try {

      const { description } = this.noteForm.value;

      const user = await this.authService.getUser();

      if(user) {
      
        this.notesService.createNote(user.uid, description, this.file)
          .subscribe(
            res => {
              this.router.navigate(['/notes']);
            }, 
            err => console.log(err)
          )

      }

      return false;

    }catch(err) {
      console.log(err);
    } 

  }

}
