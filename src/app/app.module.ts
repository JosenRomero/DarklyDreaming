import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NoteFormComponent } from './components/note-form/note-form.component';
import { NotesListComponent } from './components/notes-list/notes-list.component';
import { NoteViewComponent } from './components/note-view/note-view.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { environment } from '../environments/environment.prod';
import { SendEmailComponent } from './components/send-email/send-email.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';

const firebaseConfig = {
  apiKey: environment.apiKey,
  authDomain: environment.authDomain,
  projectId: environment.projectId,
  storageBucket: environment.storageBucket,
  messagingSenderId: environment.messagingSenderId,
  appId: environment.appId
}

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NoteFormComponent,
    NotesListComponent,
    NoteViewComponent,
    LoginComponent,
    RegisterComponent,
    SendEmailComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
