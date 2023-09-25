import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'roundedThousand'
})
export class RoundedThousandPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): string | number {
    if (value < 1000) {
      return value
    }
    return value / 1000 + 'K'
  }
}
