import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ToastState } from './toast-state.enum';
import { IToastMessage } from './toast.d';

@Injectable()
export class SurveyToastService {
  private toastSubject = new Subject<IToastMessage>();
  public get toastState(): Observable<IToastMessage> {
    return this.toastSubject.asObservable();
  }

  public activate(title?: ToastState, message?: string) {
    this.toastSubject.next({ title, message });
  }
}
