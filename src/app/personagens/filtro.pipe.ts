import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'filtroPipe'
})

export class Filtro implements PipeTransform{

  transform(value: any[], filterText: string) {
    return filterText.length>3 ? value.filter(x=> x.name.toLowerCase()
    .includes(filterText.toLowerCase())): value;
  }
}
