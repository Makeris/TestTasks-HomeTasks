import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homework1',
  templateUrl: './homework1.component.html',
  styleUrls: ['./homework1.component.scss']
})
export class Homework1Component implements OnInit {

  
  arrNames: Array<string> = ['Valera','Egor','Slava'];
  arrSnames : Array<string> = ['Cobez','Gusarov','Goryn'];
  arrEmails : Array<string> = ['cobez.@gmail.com','E.gusarov.@gmail.com','makeris.@gmail.com'];
  newName : string = '';
  newSName : string = '';
  newEmail : string = '';
  editIndex : number = 0;

  isEdit: boolean = false;
  isAdd: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  addName(): void {
    this.arrNames.push(this.newName);
    this.newName = '';
  }
  addSName(): void {
    this.arrSnames.push(this.newSName);
    this.newSName = '';
    
  }
  addEmail(): void {
    this.arrEmails.push(this.newEmail);
    this.newEmail = '';
  }


  deleteItem(i: number) : void {
      
      this.arrNames.splice(i,1);
      this.arrSnames.splice(i,1);
      this.arrEmails.splice(i,1);
  }


  editName(i:number) : void {
    this.newName = `${this.arrNames[i]}`;
    this.newSName = `${this.arrSnames[i]}`;
    this.newEmail = `${this.arrEmails[i]}`;
    this.editIndex = i;
    this.isEdit = true;
    this.isAdd = false;

  }

  saveName() : void {
    this.arrNames[this.editIndex] = this.newName;
    this.arrSnames[this.editIndex] = this.newSName;
    this.arrEmails[this.editIndex] = this.newEmail;
    this.newSName = '';
    this.newName = '';
    this.newEmail = '';
    this.isEdit = false;
    this.isAdd = true;
  }

}
