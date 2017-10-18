import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  data;  
  constructor(private _taskService: TaskService) { }
  ngOnInit() {
    this._taskService.retriveTasks('Seattle', (data)=>{
    this.data = data;
    console.log('this is callback data: ', this.data)
    
    });
  }

}
