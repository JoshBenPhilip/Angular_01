import { Routes } from '@angular/router';
import { MapBattleground } from './map-battleground/map-battleground';

export const routes: Routes = [


// 1. The redirect rule
{ path: '', redirectTo: 'map', pathMatch: 'full'},

// 2. The actual destination route
{ path: 'map', component: MapBattleground },
{ path: '**', redirectTo: 'map' }, 

];
