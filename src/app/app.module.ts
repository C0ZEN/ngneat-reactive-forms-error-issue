import { ClassProvider, ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

class GlobalErrorHandler implements ErrorHandler {
  public handleError(error: unknown): void {
    console.debug('Catched error!');
    console.error(error);
  }
}

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    } as ClassProvider
  ]
})
export class AppModule {}
