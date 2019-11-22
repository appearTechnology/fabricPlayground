import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'data', redirectTo: 'data-filter', pathMatch: 'full' },
  { path: '', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'data-filter', loadChildren: './data-filter/data-filter.module#DataFilterPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
