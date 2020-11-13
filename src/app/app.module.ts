import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChessboardComponent } from './chessboard/chessboard.component';
import { WhitecellComponent } from './whitecell/whitecell.component';
import { BlackcellComponent } from './blackcell/blackcell.component';

@NgModule({
  declarations: [
    AppComponent,
    ChessboardComponent,
    WhitecellComponent,
    BlackcellComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
