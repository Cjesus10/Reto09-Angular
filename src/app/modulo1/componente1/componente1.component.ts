import { Component } from '@angular/core';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component {

  mostrar = false;
  
  Generar(){
    if(this.mostrar == false){
      this.mostrar = true;
    }else{
      this.mostrar = false;
    }
    
  }
}
