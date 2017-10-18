import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
  data;
  constructor(private _taskService: TaskService) { }

  ngOnInit() {
    this._taskService.retriveTasks('Dallas', (data)=>{
    this.data = data;
    console.log('this is callback data: ', this.data)
      
      });
  }

}
