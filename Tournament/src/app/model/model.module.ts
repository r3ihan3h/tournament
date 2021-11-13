import { NgModule } from "@angular/core";
import { TournamentRepo } from "./tournament.repository";
import { StaticDataSource } from "./static.datasource";

@NgModule({
    providers: [TournamentRepo, StaticDataSource]
})
export class ModelModule{

} 