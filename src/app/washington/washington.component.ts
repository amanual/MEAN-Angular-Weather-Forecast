import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
@Component({
  selector: 'app-washington',
  templateUrl: './washington.component.html',
  styleUrls: ['./washington.component.css']
})
export class WashingtonComponent implements OnInit {
  data;
  constructor(private _taskService: TaskService) { }

  ngOnInit() {
    this._taskService.retriveTasks('Washington,DC', (data)=>{
    this.data = data;
    console.log('this is callback data: ', this.data)
      
      });
  }

}
