import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
@Component({
  selector: 'app-san-jose',
  templateUrl: './san-jose.component.html',
  styleUrls: ['./san-jose.component.css']
})
export class SanJoseComponent implements OnInit {
  data;
  constructor(private _taskService: TaskService) { }

  ngOnInit() {
    this._taskService.retriveTasks('San Jose', (data)=>{
    this.data = data;
    console.log('this is callback data: ', this.data)
  });
}

}
