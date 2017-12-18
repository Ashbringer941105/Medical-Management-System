import { Component } from '@angular/core'



@Component({
    selector:'topic-detail',
     template:`
     <div *ngIf="topic">
        <h2>{{topic.name}} details<h2>
        <div><label>id:</label>{{topic.id}}</div>
        <div>
            <label>topic name</label>
            
     
     `,
})

export class TopicDetatilComponent{

}