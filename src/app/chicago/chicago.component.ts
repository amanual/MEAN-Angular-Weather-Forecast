import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  data;
  constructor(private _taskService: TaskService) { }

  ngOnInit() {
    this._taskService.retriveTasks('Chicago', (data)=>{
    this.data = data;
    console.log('this is callback data: ', this.data)
      
      });
  }

}
