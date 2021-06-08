import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testTask';

  tasksCount: number = 0;

  arrTasks: Array<any> = [];


  addNewTask: string = '';

  saveItem: string = '';

  isEdited: boolean = false;

  editbleItemIndex: number = 0;

  isChecked: boolean = false;

  cheked: boolean = false;

  progressBar: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.getData();
    this.currentProgress();
  }

  getData() {

    let localTasks: any = localStorage.getItem("tasks");
    localTasks = JSON.parse(localTasks);

    if (localTasks != null) {
      this.arrTasks = localTasks;
    } else {
      localTasks = [];
    }
    this.arrTasks = localTasks;

  }

  addItem(): void {

    if (this.addNewTask != '') {

      this.arrTasks.push({
        taskTitle: this.addNewTask,
        taskProgress: false

      });
      localStorage.setItem('tasks', JSON.stringify(this.arrTasks));
      this.addNewTask = '';
      this.currentProgress();
    }

  }

  editItem(i: number): void {

    this.editbleItemIndex = i;
    this.saveItem = this.arrTasks[i].taskTitle;
    this.isEdited = true;

  }


  deleteItem(i: number): void {

    this.arrTasks.splice(i, 1);
    this.currentProgress();
    localStorage.setItem('tasks', JSON.stringify(this.arrTasks));

  }

  replaceItem(): void {

    this.arrTasks[this.editbleItemIndex].taskTitle = this.saveItem;
    this.saveItem = '';
    this.isEdited = false;
    localStorage.setItem('tasks', JSON.stringify(this.arrTasks));
  }

  checker(e: any, index: number) {

    if (e.target.checked == true) {
      this.arrTasks[index].taskProgress = true;

    } else {

      this.arrTasks[index].taskProgress = false;
    }
    this.currentProgress();
    localStorage.setItem('tasks', JSON.stringify(this.arrTasks));

  }


  currentProgress() {
   
    if (this.arrTasks?.length != 0) {
      let b = this.arrTasks.filter(item => item.taskProgress == true);

      this.progressBar = Math.round(b.length * 100 / this.arrTasks.length);
    } else this.progressBar = 0;


  }

}
