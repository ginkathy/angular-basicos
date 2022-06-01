import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America'];
  heroeBorrado: string = '';
  //hayHeroeBorrado: boolean = false;

  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '' ;
    /*if(this.heroeBorrado.length > 0){
      this.hayHeroeBorrado = true;
    } else {
      this.hayHeroeBorrado = false;
    }*/
  }

}
