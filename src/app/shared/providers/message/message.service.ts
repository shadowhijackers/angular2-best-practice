import {Injectable} from '@angular/core';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatDialog} from '@angular/material';
import {Store} from '@ngrx/store';

import {AlertComponent, LoaderComponent} from '../../components/messages';
import {CloseProgressBar, OpenProgressBar} from '@app/store/messages/actions/progress-bar.actions';
import {State} from '@app/store/reducers';


@Injectable()
export class MessageService {

  durationInSeconds = 2;
  matSnackBarHorizontalPosition: MatSnackBarHorizontalPosition = 'center';
  matSnackBarVerticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private store: Store<State>
  ) {

  }

  showSnackBar(msg: string, callBackFunc = () => {
  }) {

    const ref = this.snackBar.open(msg, '', {
      duration: this.durationInSeconds * 1000,
      horizontalPosition: this.matSnackBarHorizontalPosition,
      verticalPosition: this.matSnackBarVerticalPosition
    });

    ref.afterDismissed().subscribe(() => {
      if (this.isFunction(callBackFunc)) {
        callBackFunc();
      }
    });

  }


  showYesOrNoDialog(msg: string, callBackFunc?: (a) => {}) {

    const dialogRef = this.dialog.open(AlertComponent, {
      width: '400px',
      height: '160px',
      role: 'alertdialog',
      data: {message: msg, isAlertPopup: false},
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(res => {

      if (res && this.isFunction(callBackFunc)) {
        callBackFunc(res);
      }
      return;

    });

  }


  showAlertDialog(msg: string, callBackFunc?: (a) => {}): void {
    const res = false;
    const dialogRef = this.dialog.open(AlertComponent, {
      width: '400px',
      height: '160px',
      role: 'alertdialog',
      data: {message: msg, isAlertPopup: true},
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(res => {

      if (res && this.isFunction(callBackFunc)) {
        callBackFunc(res);
      }
      return;
    });
  }


  showLoaderDialog(callBackFunc?: (a) => {}) {

    this.closeIfDialogAlreadyOpened('app-loader');
    const dialogRef = this.dialog.open(LoaderComponent, {
      width: '25%',
      id: 'app-loader',
      disableClose: true,
      role: 'alertdialog',

    });

    dialogRef.afterClosed().subscribe(res => {

      if (res && this.isFunction(callBackFunc)) {
        callBackFunc(res);
      }

      return;

    });

  }

  closeTheLoaderDialog() {
    const ref = this.dialog.getDialogById('app-loader');
    if (!ref) {
      return false;
    }
    ref.close();
  }

  showProgressBar(operation = '') {
    this.store.dispatch(new OpenProgressBar({
      isProgessBarOpen: true,
      operationName: operation
    }));
  }

  closeProgressBar(operation = '') {
    this.store.dispatch(new CloseProgressBar({
      isProgessBarOpen: false,
      operationName: operation
    }));
  }

  private isFunction(callBackFunc) {
    return typeof callBackFunc === 'function';
  }

  private closeIfDialogAlreadyOpened(dialogId: string) {
    const ref = this.dialog.getDialogById(dialogId);
    if (!ref) {
      return false;
    }
    ref.close();
  }

}


