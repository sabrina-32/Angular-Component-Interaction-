import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { EDEADLK } from 'constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
 
  title = 'Component Interaction';

  imgUrl = 'https://picsum.photos/200';

  count = 0;

  name:string;
  userName:string;
  private _customerName:string;
  @ViewChild('nameRef',null)  nameElementRef:ElementRef;

  ngAfterViewInit() {
    this.nameElementRef.nativeElement.focus();
    console.log(this.nameElementRef);
    
  }

  get cutomerName():string{
    return this._customerName;
  }

  set cutomerName(value:string){
     this._customerName = value;

     if(value==='Sabrina'){
      alert('hiii Sabrina!')
    }
  }

  incrementCount(){
    this.count+=1;

  }

  greetMe(updatedValue){
    this.userName = updatedValue;
    if(updatedValue==='Sabrina'){
      alert('Hey Sabrina!')
    }
  }

}
