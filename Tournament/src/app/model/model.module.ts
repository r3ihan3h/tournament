import { NgModule } from "@angular/core";
import { TournamentRepo } from "./tournament.repository";
import { StaticDataSource } from "./static.datasource";
import { AuthService } from './auth.service';
import { RestDataSource } from "./rest.datasource";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

@NgModule({
    imports: [HttpClientModule,FormsModule],
    providers: [TournamentRepo, StaticDataSource,
        RestDataSource, AuthService]
})
export class ModelModule{

} 