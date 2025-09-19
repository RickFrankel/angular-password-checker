import { ModuleWithProviders, NgModule } from '@angular/core';
import { PasswordCheckerLibDirective } from './password-checker-lib.directive';
import { Partial, PasswordCheckerConfig, PasswordCheckerConfigValue } from './password-checker.config';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  exports: [PasswordCheckerLibDirective], imports: [PasswordCheckerLibDirective, HttpClientModule], providers: [],
})
export class PasswordCheckerModule {
  static forRoot(config: Partial<PasswordCheckerConfig> = {}): ModuleWithProviders<PasswordCheckerModule> {
    return {
      ngModule: PasswordCheckerModule,
      providers: [
        {
          provide: PasswordCheckerConfigValue,
          useValue: config,
        }
      ]
    };
  }
}