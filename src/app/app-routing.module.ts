import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotesListComponent } from './components/notes-list/notes-list.component';
import { NoteFormComponent } from './components/note-form/note-form.component';
import { NoteViewComponent } from './components/note-view/note-view.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SendEmailComponent } from './components/send-email/send-email.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';

import { CheckLoginGuard } from './guards/check-login.guard';
import { CheckLogoutGuard } from './guards/check-logout.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/notes',
    pathMatch: 'full'
  },
  {
    path: 'notes',
    component: NotesListComponent,
    canActivate: [CheckLoginGuard],
  },
  {
    path: 'notes/new',
    component: NoteFormComponent,
    canActivate: [CheckLoginGuard],
  },
  {
    path: 'notes/:id',
    component: NoteViewComponent,
    canActivate: [CheckLoginGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [CheckLogoutGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [CheckLogoutGuard]
  },
  {
    path: 'verification-email',
    component: SendEmailComponent,
    canActivate: [CheckLoginGuard],
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    canActivate: [CheckLogoutGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
