import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  title = 'bytebank';
  transferencia: any;
  valor!: number;
  destino!: number;


    transferir (){
    console.log('Solicitada nova transferência');
    const valorEmitir = {valor: this.valor, destino: this.destino};
    this.aoTransferir.emit(valorEmitir);
    this.limparCampos();
    }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;

  }
}
