import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TournamentRepo } from 'src/app/model/tournament.repository';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private firebase: AngularFireModule ,
    private formBuilder: FormBuilder,
    private router: Router, 
    private repository: TournamentRepo) { }
    userForm!: FormGroup;
    
    ngOnInit() {
      this.userForm = this.formBuilder.group({
        id: [],
        username: ['', Validators.required],
        password: ['', Validators.required],
        email: ['', Validators.required],
        displayName: ['', Validators.required]
      });
    }

    onSubmit() {
      console.log(this.firebase)
      this.repository.createUser(this.firebase);
      this.router.navigate(['login']);
      // this.apiService.createUser(this.addForm.value)
      //   .subscribe( data => {
      //     this.router.navigate(['list-user']);
      //   });
    }

}
