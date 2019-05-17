import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'devise' })
export class DevisePipe implements PipeTransform {
    transform(value: any, devise: string = '€', rate: number = 1): string {
        if (value as number) {
            return `${(value * rate).toFixed(2)} ${devise}`;
        }
        return ``;
    }
}
