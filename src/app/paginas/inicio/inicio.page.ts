import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  componentes: string[] = [
    '1. ion-action-sheet',
    '2. Alert',
    '3. Insignia',
    '4. Button',
    '5. Ion-accordion',
    '6. Ion-breadcrumbs',
    '7. Ion-ripple-effect',
    '8. Ion-card',
    '9. Ion-checkbox',
    '10. Ion-chip',
    '11. Ion-app',
    '12. Ion-content',
    '13. Ion-datetime',
    '14. Ion-datetime-button',
    '15. Ion-picker',
    '16. Ion-fab',
    '17. Ion-grid',
    '18. Ion-infinite-scroll',
    '19. ion-icon',
    '20. ion-input',
    '21. ion-item',
    '22. ion-list',
    '23. ion-menu',
    '24. ion-modal',
    '25. ion-nav',
    '26. ion-popover',
    '27. ion-progress-bar',
    '28. ion-radio',
    '29. ion-refresher',
    '30. ion-searchbar',
    '31. ion-reorder',
    '32. ion-router',
    '33. ion-segment',
    '34. ion-select',
    '35. ion-tabs',
    '36.ion-toast',
    '37. ion-toggle',
    '38. ion-toolbar',

  ];

  constructor(private router: Router) { }

  ngOnInit() {}

  navegar(componente: string) {
    if (componente === '1. ion-action-sheet') {
      this.router.navigate(['/ion-action-sheet']);
    } 
    else if (componente === '2. Alert') {
      this.router.navigate(['/ion-alert']);
    }
    else if (componente === '3. Insignia') {
      this.router.navigate(['/ion-badge']);
    }
    else if (componente === '4. Button') {
      this.router.navigate(['/ion-button']);
    }
    else if (componente === '5. Ion-accordion') {
      this.router.navigate(['/ion-accordion']);
    }
    else if (componente === '6. Ion-breadcrumbs') {
      this.router.navigate(['/ion-breadcrumbs']);
    }
    else if (componente === '7. Ion-ripple-effect') {
      this.router.navigate(['/ion-ripple-effect']);
    }
    else if (componente === '8. Ion-card') {
      this.router.navigate(['/ion-card']);
    }
    else if (componente === '9. Ion-checkbox') {
      this.router.navigate(['/ion-checkbox']);
    }
    else if (componente === '10. Ion-chip') {
      this.router.navigate(['/ion-chip']);
    }
    else if (componente === '11. Ion-app') {
      this.router.navigate(['/ion-app']);
    }
    else if (componente === '12. Ion-content') {
      this.router.navigate(['/ion-content']);
    }
    else if (componente === '13. Ion-datetime') {
      this.router.navigate(['/ion-datetime']);
    }
    else if (componente === '14. Ion-datetime-button') {
      this.router.navigate(['/ion-datetime-button']);
    }
    else if (componente === '15. Ion-picker') {
      this.router.navigate(['/ion-picker']);
    }
    else if (componente === '16. Ion-fab') {
      this.router.navigate(['/ion-fab']);
    }
    else if (componente === '17. Ion-grid') {
      this.router.navigate(['/ion-grid']);
    }
    else if (componente === '18. Ion-infinite-scroll') {
      this.router.navigate(['/ion-infinite-scroll']);
    }
    else if (componente === '19. ion-icon') {
      this.router.navigate(['/ion-icon']);
    }
    else if (componente === '20. ion-input') {
      this.router.navigate(['/ion-input']);
    }
    else if (componente === '21. ion-item') {
      this.router.navigate(['/ion-item']);
    }
    else if (componente === '22. ion-list') {
      this.router.navigate(['/ion-list']);
    }
    else if (componente === '23. ion-menu') {
      this.router.navigate(['/ion-menu']);
    }
    else if (componente === '24. ion-modal') {
      this.router.navigate(['/ion-modal']);
    }
    else if (componente === '25. ion-nav') {
      this.router.navigate(['/ion-nav']);
    }
    else if (componente === '26. ion-popover') {
      this.router.navigate(['/ion-popover']);
    }
    else if (componente === '27. ion-progress-bar') {
      this.router.navigate(['/ion-progress-bar']);
    }
    else if (componente === '28. ion-radio') {
      this.router.navigate(['/ion-radio']);
    }
    else if (componente === '29. ion-refresher') {
      this.router.navigate(['/ion-refresher']);
    }
    else if (componente === '30. ion-searchbar') {
      this.router.navigate(['/ion-searchbar']);
    }
    else if (componente === '31. ion-reorder') {
      this.router.navigate(['/ion-reorder']);
    }
    else if (componente === '32. ion-router') {
      this.router.navigate(['/ion-router']);
    }
    else if (componente === '33. ion-segment') {
      this.router.navigate(['/ion-segment']);
    }
    else if (componente === '34. ion-select') {
      this.router.navigate(['/ion-select']);
    }
    else if (componente === '35. ion-tabs') {
      this.router.navigate(['/ion-tabs']);
    }
    else if (componente === '36. ion-toast') {
      this.router.navigate(['/ion-toast']);
    }
    else if (componente === '37. ion-toggle') {
      this.router.navigate(['/ion-toggle']);
    }
    else if (componente === '38. ion-toolbar') {
      this.router.navigate(['/ion-toolbar']);
    }
  }
}