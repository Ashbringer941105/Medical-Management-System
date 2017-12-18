import { Component } from '@angular/core';

export class Topic {
  id: number;
  teacher:string;
  name: string;
}
const TOPICES: Topic[] = [
    {id:1,teacher:'A',name:'a'},
    {id:2,teacher:'B',name:'b'},
    {id:3,teacher:'C',name:'c'},
    {id:4,teacher:'D',name:'d'},
    {id:5,teacher:'E',name:'e'},
    {id:6,teacher:'F',name:'f'},
    {id:7,teacher:'G',name:'g'},
    {id:8,teacher:'H',name:'h'},
]


@Component({
  selector: 'my-app',
  // templateUrl:'./ap.componnt.html',
  template: `
  <h2 >{{title}}</h2>
  
           `,
    //  styleUrls:['D:/webstrom/Myfirst_Angular/Medical-Management-System/Medical-Management-System/src/bootstrap/css/bootstrap.css'],
})
export class AppComponent {
  title = 'Medical  Management  System';
  topices = TOPICES;
  selectedTopic : Topic;

  onSelect(topic:Topic):void{
      this.selectedTopic = topic;
  }

}