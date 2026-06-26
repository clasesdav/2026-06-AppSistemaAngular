import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Bienvenida } from './bienvenida/bienvenida';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Bienvenida],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('appSistema');

   nombre = 'David';
cursos = signal(['Angular', 'TypeScript', 'HTML', 'CSS']);
}
