import { templateJitUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { VoterModel } from '../voter-model';
import { VotingService } from '../voting.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-voter-login',
  templateUrl: './voter-login.component.html',
  styleUrls: ['./voter-login.component.css'],
  // template:"<h2>{{Voter.id}}</h2>"
})
export class VoterLoginComponent  {
  vot=new VoterModel();
  constructor(private service:VotingService,private router: Router){}
 public loginVoterAngular(){
  this.service.loginVoter(this.vot).subscribe(res=>{
         this.vot=new VoterModel();
         this.router.navigate(['/VotePage']);
  })
 }
}