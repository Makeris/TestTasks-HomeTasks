import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cenzor',
  templateUrl: './cenzor.component.html',
  styleUrls: ['./cenzor.component.scss']
})
export class CenzorComponent implements OnInit {

  badWordsArr = ['React', 'SCSS', 'Logos'];

  addWord: string = '';
  textarea: string = '';
  
  isWordsListEmpty: boolean = true;

  constructor() { }

  ngOnInit(): void {
    console.log(this.textarea.length > 0  );
  }

  resetWords(): void {
    this.badWordsArr = [];
  }

  addNewWord() : void {
    // console.log(this.addWord);
    this.badWordsArr.push(this.addWord);
    this.addWord = '';
  }


  cenzor(): void {
    
    
    
    if(this.textarea != '') {
      console.log(this.textarea.length);

      let a = this.textarea.split(' ');

      console.log(a);


      this.badWordsArr.forEach((element, index) => {

     

              for (let i = 0; i < a.length; i++) {
      
      
                if (element.toLocaleLowerCase() == a[i].toLocaleLowerCase()) {
      
                  let stars = '';
      
                  for (let j = 0; j < element.length; j++) {
                    stars += '*';
                  }
      
                  a[i] = stars;
      
                  this.textarea = a.join(' ');
                }
              }

            });
      
    } else {
      console.log('Empty');
    }

  }

}
