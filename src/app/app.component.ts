import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
data={
  title :'AngularIntroduction'
}

// click the image its alert a message
  onLogoClicked() {
    alert("Welcome to RL Family");
  }

// change the value dynamically
  onKeyUp(newTitle:string){
    this.data.title = newTitle;
  }
}
// To change the new value
// this.data.title = newTitle;
