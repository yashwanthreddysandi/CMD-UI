import { Component, Inject, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import {MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(public dialogRef : MatDialogRef<DialogComponent>) { }

  ngOnInit(): void {
  }

  closeFn() {
    this.dialogRef.close();
  }

}
