import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotesListComponent } from './components/notes-list/notes-list.component';
import { NoteFormComponent } from './components/note-form/note-form.component';
import { NoteViewComponent } from './components/note-view/note-view.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SendEmailComponent } from './components/send-email/send-email.component';

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
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'verification-email',
    component: SendEmailComponent
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
