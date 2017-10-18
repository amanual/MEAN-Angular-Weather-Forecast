import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  data;
  constructor(private _taskService: TaskService) { }

  ngOnInit() {
    this._taskService.retriveTasks('Burbank', (data)=>{
    this.data = data;
    console.log('this is callback data: ', this.data)
      
      });
  }

}
