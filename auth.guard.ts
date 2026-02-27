import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  if (typeof localStorage !== 'undefined') {

    if (
      localStorage.getItem('email') === "rakshitha@gmail.com" &&
      localStorage.getItem('password') === "123456"
    ) {
      return true;
    }
  }

  return false;
};