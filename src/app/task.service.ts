import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class TaskService {
  tasks = [];
  constructor(private _http: Http) { }
  retriveTasks(cityname, callback){
    this._http.get('http://api.openweathermap.org/data/2.5/weather?q='+ cityname + '&APPID=3293984c2fab0cbf7a479c14193c9383').subscribe(
      (response) =>{
        callback(response.json()) 
        console.log('this is json data: ', response.json())
      },
        
        (error) =>{callback(error.json())
        console.log('this is the error:', error)}
    )
    
  }
  createTask(task){
    this.tasks.push(task);
  }
}
