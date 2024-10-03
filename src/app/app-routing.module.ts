import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./paginas/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'ion-action-sheet',
    loadChildren: () => import('./paginas/ion-action-sheet/ion-action-sheet.module').then( m => m.IonActionSheetPageModule)
  },
  {
    path: 'ion-alert',
    loadChildren: () => import('./paginas/ion-alert/ion-alert.module').then( m => m.IonAlertPageModule)
  },
  {
    path: 'ion-badge',
    loadChildren: () => import('./paginas/ion-badge/ion-badge.module').then( m => m.IonBadgePageModule)
  },
  {
    path: 'ion-button',
    loadChildren: () => import('./paginas/ion-button/ion-button.module').then( m => m.IonButtonPageModule)
  },
  {
    path: 'ion-accordion',
    loadChildren: () => import('./paginas/ion-accordion/ion-accordion.module').then( m => m.IonAccordionPageModule)
  },
  {
    path: 'ion-breadcrumbs',
    loadChildren: () => import('./paginas/ion-breadcrumbs/ion-breadcrumbs.module').then( m => m.IonBreadcrumbsPageModule)
  },
  {
    path: 'ion-ripple-effect',
    loadChildren: () => import('./paginas/ion-ripple-effect/ion-ripple-effect.module').then( m => m.IonRippleEffectPageModule)
  },
  {
    path: 'ion-card',
    loadChildren: () => import('./paginas/ion-card/ion-card.module').then( m => m.IonCardPageModule)
  },
  {
    path: 'ion-checkbox',
    loadChildren: () => import('./paginas/ion-checkbox/ion-checkbox.module').then( m => m.IonCheckboxPageModule)
  },
  {
    path: 'ion-chip',
    loadChildren: () => import('./paginas/ion-chip/ion-chip.module').then( m => m.IonChipPageModule)
  },
  {
    path: 'ion-app',
    loadChildren: () => import('./paginas/ion-app/ion-app.module').then( m => m.IonAppPageModule)
  },
  {
    path: 'ion-content',
    loadChildren: () => import('./paginas/ion-content/ion-content.module').then( m => m.IonContentPageModule)
  },
  {
    path: 'ion-datetime',
    loadChildren: () => import('./paginas/ion-datetime/ion-datetime.module').then( m => m.IonDatetimePageModule)
  },
  {
    path: 'ion-datetime-button',
    loadChildren: () => import('./paginas/ion-datetime-button/ion-datetime-button.module').then( m => m.IonDatetimeButtonPageModule)
  },
  {
    path: 'ion-picker',
    loadChildren: () => import('./paginas/ion-picker/ion-picker.module').then( m => m.IonPickerPageModule)
  },
  {
    path: 'ion-fab',
    loadChildren: () => import('./paginas/ion-fab/ion-fab.module').then( m => m.IonFabPageModule)
  },
  {
    path: 'ion-grid',
    loadChildren: () => import('./paginas/ion-grid/ion-grid.module').then( m => m.IonGridPageModule)
  },
  {
    path: 'ion-infinite-scroll',
    loadChildren: () => import('./paginas/ion-infinite-scroll/ion-infinite-scroll.module').then( m => m.IonInfiniteScrollPageModule)
  },
  {
    path: 'ion-icon',
    loadChildren: () => import('./paginas/ion-icon/ion-icon.module').then( m => m.IonIconPageModule)
  },
  {
    path: 'ion-input',
    loadChildren: () => import('./paginas/ion-input/ion-input.module').then( m => m.IonInputPageModule)
  },
  {
    path: 'ion-item',
    loadChildren: () => import('./paginas/ion-item/ion-item.module').then( m => m.IonItemPageModule)
  },
  {
    path: 'ion-list',
    loadChildren: () => import('./paginas/ion-list/ion-list.module').then( m => m.IonListPageModule)
  },
  {
    path: 'ion-menu',
    loadChildren: () => import('./paginas/ion-menu/ion-menu.module').then( m => m.IonMenuPageModule)
  },
  {
    path: 'ion-modal',
    loadChildren: () => import('./paginas/ion-modal/ion-modal.module').then( m => m.IonModalPageModule)
  },
  {
    path: 'ion-nav',
    loadChildren: () => import('./paginas/ion-nav/ion-nav.module').then( m => m.IonNavPageModule)
  },
  {
    path: 'ion-popover',
    loadChildren: () => import('./paginas/ion-popover/ion-popover.module').then( m => m.IonPopoverPageModule)
  },
  {
    path: 'ion-progress-bar',
    loadChildren: () => import('./paginas/ion-progress-bar/ion-progress-bar.module').then( m => m.IonProgressBarPageModule)
  },
  {
    path: 'ion-radio',
    loadChildren: () => import('./paginas/ion-radio/ion-radio.module').then( m => m.IonRadioPageModule)
  },
  {
    path: 'ion-refresher',
    loadChildren: () => import('./paginas/ion-refresher/ion-refresher.module').then( m => m.IonRefresherPageModule)
  },
  {
    path: 'ion-searchbar',
    loadChildren: () => import('./paginas/ion-searchbar/ion-searchbar.module').then( m => m.IonSearchbarPageModule)
  },
  {
    path: 'ion-reorder',
    loadChildren: () => import('./paginas/ion-reorder/ion-reorder.module').then( m => m.IonReorderPageModule)
  },
  {
    path: 'ion-router',
    loadChildren: () => import('./paginas/ion-router/ion-router.module').then( m => m.IonRouterPageModule)
  },
  {
    path: 'ion-segment',
    loadChildren: () => import('./paginas/ion-segment/ion-segment.module').then( m => m.IonSegmentPageModule)
  },
  {
    path: 'ion-select',
    loadChildren: () => import('./paginas/ion-select/ion-select.module').then( m => m.IonSelectPageModule)
  },
  {
    path: 'ion-tabs',
    loadChildren: () => import('./paginas/ion-tabs/ion-tabs.module').then( m => m.IonTabsPageModule)
  },
  {
    path: 'ion-toast',
    loadChildren: () => import('./paginas/ion-toast/ion-toast.module').then( m => m.IonToastPageModule)
  },
  {
    path: 'ion-toggle',
    loadChildren: () => import('./paginas/ion-toggle/ion-toggle.module').then( m => m.IonTogglePageModule)
  },
  {
    path: 'ion-toolbar',
    loadChildren: () => import('./paginas/ion-toolbar/ion-toolbar.module').then( m => m.IonToolbarPageModule)
  },
  

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
