import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'EstudiantesDemo';
  miNombre:string='Arturo Castillo'
  a:number=1;
  b:number=5;
  suma:number=0;

  Sumar() {
      this.suma= this.a+this.b;   
    }
}
