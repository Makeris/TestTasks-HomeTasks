import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homework2',
  templateUrl: './homework2.component.html',
  styleUrls: ['./homework2.component.scss']
})
export class Homework2Component implements OnInit {

  tasksCount: number = 0;

  arrTasks: Array<string> = ['HTML5','CSS3','Bootstrap','SCSS','JavaScript','Jquery','Angular'];

  addNewTask : string = '';
  saveItem : string = '';

  isEdited: boolean = false;

  editbleItemIndex: number = 0;

  isChecked: boolean = false;

  cbTest: boolean = false;

  data = {checked : false};

  change: boolean = false;

  cheked : boolean = false;

  color: string = 'red';

  done: string = 'Done';

  inProgress : string = 'In Progress';

 



  constructor() { }

  ngOnInit(): void {
     
  }

  addItem() : void {
    

    this.arrTasks.push(this.addNewTask);
   

  }

  editItem(i:number) : void {
    console.log('edit ' + i);
    this.editbleItemIndex = i;
    this.saveItem = this.arrTasks[i];
    this.isEdited = true;

  }


  deleteItem(i:number) : void {

    console.log('Delete ' + i);
    this.arrTasks.splice(i,1);

  }

  replaceItem() : void {
    console.log(this.editbleItemIndex);
    this.arrTasks[this.editbleItemIndex] = this.saveItem;
    this.saveItem = '';
    this.isEdited = false;
  }

checker(e: any, index:number) {
  let status = document.getElementsByClassName('status');
  console.log(e);
  if(e.target.checked == true) {
    console.log(index + 'true');
    
    status[index].innerHTML =  `<span style =" color: lime;">${this.done}</span>`;
  } else {
    console.log(index + 'false');
    status[index].innerHTML = this.inProgress;
    

  }
}

 
}
