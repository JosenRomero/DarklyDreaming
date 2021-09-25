import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NoteFormComponent } from './components/note-form/note-form.component';
import { NotesListComponent } from './components/notes-list/notes-list.component';
import { NoteViewComponent } from './components/note-view/note-view.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NoteFormComponent,
    NotesListComponent,
    NoteViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
