import { animate, state, style, transition, trigger } from '@angular/animations';

import { Component, Inject, OnDestroy } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ToastState } from './toast-state.enum';
import { SurveyToastService } from './toast.service';

import { IToastMessage } from './toast.d';

type Visibility = 'visible' | 'hidden';
interface IAlertState {
  type: string;
  icon: string;
}
@Component({
  selector: 'survey-toast',
  template: `
    <div id="toast" class="toast-container" [@visibility]="visibility">
    <div class="alert"  [ngClass]="alertType" role="alert">
      <div class="alert-items">
        <div class="alert-item ">
          <div class="alert-icon-wrapper">
            <clr-icon class="alert-icon" [attr.shape]="alertIcon"></clr-icon>
          </div>
          <span class="alert-text">{{message}}</span>
        </div>
      </div>
      <button type="button" class="close" aria-label="Close">
        <clr-icon aria-hidden="true" shape="close" (click)="hide()"></clr-icon>
      </button>
    </div>
      
    </div>
  `,
  animations: [
    trigger('visibility', [
      state(
        'hidden',
        style({
          visibility: 'hidden',
          opacity: 0,
        })
      ),
      state(
        'visible',
        style({
          visibility: 'visible',
          opacity: 1,
        })
      ),
      transition('hidden => *', animate('100ms ease-in')),
      transition('* => hidden', animate('100ms ease-out')),
    ]),
  ],
  styleUrls: ['./toast.component.scss'],
})
export class SurveyToast implements OnDestroy {
  private static readonly defaults = {
    message: 'message',
  };
  private static readonly STATES_MAP = new Map<ToastState, IAlertState>([
    [ToastState.ERROR, { type: 'alert-danger', icon: 'exclamation-circle' }],
    [ToastState.SUCCESS, { type: 'alert-success', icon: 'check-circle' }],
    [ToastState.INFO, { type: 'alert-info', icon: 'info-circle' }],
    [ToastState.WARNING, { type: 'alert-warning', icon: 'exclamation-triangle' }],
  ]);

  private _destroy$: Subject<boolean> = new Subject<boolean>();

  private _state: IAlertState = SurveyToast.STATES_MAP.get(ToastState.INFO);
  private _message: string;
  private _visibility: Visibility = 'hidden';

  public get alertType(): string {
    return this._state.type;
  }

  public get alertIcon(): string {
    return this._state.icon;
  }

  public get message(): string {
    return this._message;
  }

  public get visibility(): Visibility {
    return this._visibility;
  }

  constructor(private _toastService: SurveyToastService) {
    this._toastService.toastState.pipe(takeUntil(this._destroy$)).subscribe((toastMessage: IToastMessage) => {
      this.activate(toastMessage.title, toastMessage.message);
    });
  }

  public ngOnDestroy() {
    this._destroy$.next(true);
    this._destroy$.unsubscribe();
  }

  public activate(newState: ToastState, message = SurveyToast.defaults.message) {
    this._message = message;
    this._state = SurveyToast.STATES_MAP.get(newState);
    this.show();
  }

  public show(milliseconds: number = 3000) {
    this._visibility = 'visible';
    setTimeout(() => this.hide(), milliseconds);
  }

  public hide() {
    this._visibility = 'hidden';
  }
}
