import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsideComponent, HeaderComponent } from '@startup-doska/ui';

@Component({
  imports: [RouterOutlet, HeaderComponent, AsideComponent],
  standalone: true,
  templateUrl: './layout.component.html',
})
export class LayoutComponent {}
