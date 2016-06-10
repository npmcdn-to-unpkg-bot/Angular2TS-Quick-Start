import { Injectable } from '@angular/core';

interface List {
  label: string;
}

@Injectable()
export class ListService {
  private LIST: List[] = [
    { label: 'JavaScript' },
    { label: 'CoffeeScript' },
    { label: 'TypeScript' }
  ];

  getList() {
    return this.LIST;
  }
}
