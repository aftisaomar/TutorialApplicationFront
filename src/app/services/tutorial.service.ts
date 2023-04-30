import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tutorial } from '../models/tutorial.model';
import { HttpClient } from '@angular/common/http';


const baseURL = "http://localhost:8080/api/tutorials"

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  
  constructor(private http : HttpClient) { }


  public getAll() : Observable<Tutorial[]> {

      return  this.http.get<Tutorial[]>(baseURL);

  }

  public get(id: number) : Observable<Tutorial> {

    return this.http.get<Tutorial>(`${baseURL}/${id}`);

  }

  public create (data : Tutorial) : Observable<any> {

    return this.http.post(baseURL, data);

  }

  public update (id : number, data : Tutorial) : Observable <any> {

    return this.http.put(`${baseURL}/${id}`, data);

  }

  public delete (id : number) : Observable<any> {

    return this.http.delete(`${baseURL}/${id}`);


  }










}
