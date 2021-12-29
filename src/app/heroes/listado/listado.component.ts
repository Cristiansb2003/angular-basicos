import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes:string[] = ['Spierman', 'Ironman', 'Thor'];
  heroeBorrado:string = '';

  eliminar():void{
    const borrado = this.heroes.shift();
    if(typeof borrado === 'string'){
      this.heroeBorrado = borrado || '';
      console.log('YA');
    }else{
      this.heroeBorrado = '';
      alert('Ya no hay elementos');
    }
  }

}


