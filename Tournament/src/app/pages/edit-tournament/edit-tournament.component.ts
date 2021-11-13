import { Component, Input, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import { Tournament } from '../../model/tournament.model';
import { TournamentRepo } from '../../model/tournament.repository';
@Component({
  selector: 'app-edit-tournament',
  templateUrl: './edit-tournament.component.html',
  styleUrls: ['./edit-tournament.component.css']
})
export class EditTournamentComponent implements OnInit {
  id!: number;
  form!: FormGroup;

  tour!: Tournament;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router, 
    private repository: TournamentRepo,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      schedule: ['', Validators.required],
      players: ['', Validators.required]
    });
    this.id = JSON.parse(this.route.snapshot.params['id']);
    this.tour = this.repository.getTournament(this.id);
  }
  

  onSubmit() {
    console.log(this.form.value)
    this.repository.updateTournament(this.form.value, this.id);
    this.router.navigate(['tournament-list']);
    // this.apiService.createUser(this.addForm.value)
    //   .subscribe( data => {
    //     this.router.navigate(['list-user']);
    //   });
  }
}
