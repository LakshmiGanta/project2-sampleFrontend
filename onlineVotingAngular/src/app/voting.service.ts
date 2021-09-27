import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { VoterModel } from './voter-model';
import { ContestantModel } from './contestant-model';
@Injectable({
  providedIn: 'root'
})
export class VotingService {
  private url:string;
  constructor(private http:HttpClient) {
    this.url="http://localhost:7000";
   } 
   public registerVoter(vot:VoterModel):Observable<any>{
     return this.http.post<any>("http://localhost:7000/voter",vot);
   }
   public loginVoter(vot:VoterModel):Observable<any>{
    return this.http.post<any>("http://localhost:7000/voter/login",vot);
  }
  public registerContestant(cont:ContestantModel):Observable<any>{
    return this.http.post<any>("http://localhost:7000/contestant",cont);
  }
}