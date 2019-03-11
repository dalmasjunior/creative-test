import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule,
         MatPaginatorModule,
         MatSortModule,
         MatButtonModule,
         MatToolbarModule,
         MatListModule,
         MatDialogModule,
         MatFormFieldModule,
         MatInputModule,
         MatIconModule,
         MatCheckboxModule,
         MatTooltipModule,
         MatSnackBar,
         MatSnackBarModule} from '@angular/material';
import { FormsModule } from '@angular/forms';

import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { UsersComponent } from './components/users/users.component';
import { UsersDetailComponent } from './components/users-detail/users-detail.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
    UsersComponent,
    UsersDetailComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatSnackBarModule
  ],
  entryComponents: [UsersComponent, UsersDetailComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
