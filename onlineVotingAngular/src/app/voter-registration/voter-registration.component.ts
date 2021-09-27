import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VoterModel } from '../voter-model';
import { VotingService } from '../voting.service';

@Component({
  selector: 'app-voter-registration',
  templateUrl: './voter-registration.component.html',
  styleUrls: ['./voter-registration.component.css'],
 
})
export class VoterRegistrationComponent {
  vot=new VoterModel();
  constructor(private service:VotingService,private router: Router){
  }
  public registerVoterAngular(){
    this.service.registerVoter(this.vot).subscribe(res=>{
      this.vot=new VoterModel();
      this.router.navigate(['/VoterLogin']);
    })
  }
}