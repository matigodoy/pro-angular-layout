import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER } from "@taiga-ui/core";
import { TuiThemeNightModule, TuiModeModule } from '@taiga-ui/core';
import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TuiBrightness } from '@taiga-ui/core';
import { TuiThemeNightService } from '@taiga-ui/addon-doc/services';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    TuiThemeNightModule,
    TuiModeModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [{ provide: TUI_SANITIZER, useClass: NgDompurifySanitizer }]
})
export class AppComponent {
  constructor(@Inject(TuiThemeNightService) readonly night: TuiThemeNightService) {
    // night.toggle(); con esto se pone modo claro
  }

  get mode(): TuiBrightness | null {
    return this.night.value ? 'onDark' : null;
  }
}
