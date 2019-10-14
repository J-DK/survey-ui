import { ToastState } from './toast-state.enum';

export interface IToastMessage {
  title: ToastState;
  message: string;
}
