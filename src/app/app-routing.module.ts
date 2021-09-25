import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotesListComponent } from './components/notes-list/notes-list.component';
import { NoteFormComponent } from './components/note-form/note-form.component';
import { NoteViewComponent } from './components/note-view/note-view.component';

const routes: Routes = [
  {
    path: 'notes',
    component: NotesListComponent
  },
  {
    path: 'notes/new',
    component: NoteFormComponent
  },
  {
    path: 'notes/:id',
    component: NoteViewComponent
  },
  {
    path: '',
    redirectTo: '/notes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
