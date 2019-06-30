import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app1';
  public jogoEmAndamento: boolean = true;
  public tipoEncerramento: string;

  public encerrarJogo(tipo: string): void {
      this.jogoEmAndamento = false;
      this.tipoEncerramento = tipo;
  }

  public reiniciarJogo() {
    this.jogoEmAndamento = true;
    this.tipoEncerramento = undefined;
  }
}
