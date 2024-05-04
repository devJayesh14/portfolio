import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  isSideMenu: boolean = false;

  constructor() { }
}
