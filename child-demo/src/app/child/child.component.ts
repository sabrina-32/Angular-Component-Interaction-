import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges {
  

  @Input() loggedIn: boolean ;

message:string;
name = "Sabrina";


// get loggedIn():boolean{
//   return this._loggedIn;

// }
// @Input()

// set loggedIn(value:boolean){
//    this._loggedIn = value;
//   if(value===true){
//     this.message = "welcome  back  to  home";
//   }
//   else{
//     this.message = "please log  in first";

//   }
// }

  constructor() { }
  ngOnChanges(changes:  SimpleChanges) {
    console.log(changes);
    const  loggedInValue = changes['loggedIn'];
    if(loggedInValue.currentValue===true){
      this.message = 'welcome back  Sabrina';
    }
    else{
      this.message = "please log  in first";
    }
    
  }


  greetSabrina(){
    alert("hey  Sabrina");
    
  }
}
