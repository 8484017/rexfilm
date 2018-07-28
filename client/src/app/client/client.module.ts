import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientLayoutComponent } from './layout/client-layout/client-layout.component';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FilmsPageComponent } from './pages/films-page/films-page.component';
import { FilmsListComponent } from './components/films-list/films-list.component';
import { FilmItemListComponent } from './components/film-item-list/film-item-list.component';
import { OnlinePageComponent } from './pages/online-page/online-page.component';
import { PlayerComponent } from './components/player/player.component';
import { LrBlockComponent } from './components/lr-block/lr-block.component';
import { RatingComponent } from './components/rating/rating.component';
import { FeaturesComponent } from './components/features/features.component';
import { ActorsListComponent } from './components/actors-list/actors-list.component';
import { ForNumberPipe } from '../pipes/forNumber.pipe';
import { FilmsResolver } from '../resolvers/films.resolver';
import { FilterComponent } from './components/filter/filter.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgValueDirective } from '../directive/ng-value.directive';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module
import { FilmResolver } from '../resolvers/film.resolver';
import { IndexFilmsResolver } from '../resolvers/index.films.resolver';
import { FilmItemIndexComponent } from './components/film-item-index/film-item-index.component';
import { NamePageComponent } from './pages/name-page/name-page.component';
import { NameResolver } from '../resolvers/name.resolver';
import { FadePanelComponent } from './components/fade-panel/fade-panel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FilmInfoPanelComponent } from './components/film-info-panel/film-info-panel.component';
import { MyFilmsPageComponent } from './pages/my-films-page/my-films-page.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: "", component: ClientLayoutComponent, children: [
          { path: "", resolve: [IndexFilmsResolver], component: IndexPageComponent },
          { path: ":type", resolve: [FilmsResolver], component: FilmsPageComponent },
          { path: "online/:id/:slug", resolve: [FilmResolver], component: OnlinePageComponent },
          { path: "name/:id", resolve: [NameResolver], component: NamePageComponent },
          { path: "my/playlist", component: MyFilmsPageComponent },
        ]
      }
    ])
  ],
  declarations: [ClientLayoutComponent,
    IndexPageComponent, NavbarComponent,
    FilmsPageComponent, FilmsListComponent,
    FilmItemListComponent, OnlinePageComponent,
    PlayerComponent, LrBlockComponent,
    RatingComponent, FeaturesComponent,
    ActorsListComponent,
    ForNumberPipe,
    FilterComponent, NgValueDirective, FilmItemIndexComponent, NamePageComponent, FadePanelComponent, FilmInfoPanelComponent, MyFilmsPageComponent
  ],
  providers: [FilmsResolver, FilmResolver, IndexFilmsResolver, NameResolver]

})
export class ClientModule { }
