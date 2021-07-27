  
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, AbstractControl, AsyncValidatorFn } from '@ngneat/reactive-forms';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

interface IForm {
  count: number;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  public form: FormGroup<IForm> = new FormGroup<IForm>({
    count: new FormControl<number | null>(
      8,
      [],
      this._getCountValidators()
    )
  });

  private _getCountValidators(): AsyncValidatorFn[] {
    return [this._getCountValidator()];
  }

  private _getCountValidator(): (
    control: AbstractControl<number | null>
  ) => Observable<null> {
    return (): Observable<null> => {
      return of(null);
    };
  }
}
