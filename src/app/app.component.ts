import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Component Interaction';

  imgUrl = 'https://picsum.photos/200';

  count = 0;

  name:string;
  userName:string;

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
