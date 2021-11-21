import { Injectable } from '@angular/core';
import { Tournament } from './tournament.model';
import { StaticDataSource } from './static.datasource';
import { User } from './user.model';

@Injectable()
export class TournamentRepo
{
    private tournaments: Tournament[] = [];
    private users: User[] = [];
    private player: String[] = [];
    
    constructor(private dataSource: StaticDataSource)
    {
        dataSource.getTournaments().subscribe(data => {
        this.tournaments = data;
        this.player = this.getData(data);
        });
    }

    getData(data: any[]){
        data.map(b => b.players)
            .filter((a, index, array) => array.indexOf(a) === index).sort()
        return data;
    }

    getTournaments(player: String | null): Tournament[]
    {
        return this.tournaments
        .filter(b => player == null || player === b.players);
    }

    getTournament(id: number): Tournament
    {
        return this.tournaments.find(b => b._id === id)!;
    }

    getPlayers(): String[]
    {
        return this.player;
    }

    createTournament(data: any)
    {
        this.tournaments.push(data);
    }

    updateTournament(data: any, id: number){
       this.tournaments.find(b => b._id === id)!.name = data.name;
       this.tournaments.find(b => b._id === id)!.players = data.players;
       this.tournaments.find(b => b._id === id)!.schedule = data.schedule;
        
    }

    deleteTournament(id: any){
        let idToRemove = id;

        let index = this.tournaments.map(function(item) {
            return item._id
        }).indexOf(idToRemove);

        this.tournaments.splice(index, 1);
    }

    createUser(data: any){
        this.users.push(data);
    }
}
