import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'length'
})
export class MessageLengthPipe implements PipeTransform {
  transform(value: string, args: string[]): any {
    return `${value.length}`
  }
}
