import { Component } from '@angular/core';
import { ComAdEditComponent } from './com-ad-edit/com-ad-edit.component';
import {MatDialog} from '@angular/material/dialog';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularApp';

  constructor(private _dialog: MatDialog) {}

  openAdEditCompForm() {
  this._dialog.open(ComAdEditComponent);
  }
}
