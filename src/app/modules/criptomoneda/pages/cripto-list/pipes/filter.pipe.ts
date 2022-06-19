import { Pipe, PipeTransform } from '@angular/core';
import { empty } from 'rxjs';
import { CriptoListComponent } from '../cripto-list.component';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], query: string) {
    if(query === '' || query === undefined) {
      return value;
    }
    //alert("Hola");
    return value.filter(cripto => cripto.name.toLowerCase().indexOf(query) != -1)
  }

}