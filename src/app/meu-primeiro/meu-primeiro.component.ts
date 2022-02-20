import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-primeiro',
  templateUrl: './meu-primeiro.component.html',
  styleUrls: ['./meu-primeiro.component.css']
})
export class MeuPrimeiroComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  title = 'curso de angular';
  nome = 'Fabrizio';
  cor = 'vermelho';
  valorDigitado = '';
  cpfDigitado : string = '';
  msgCpf : string = '';
  public mask: any = {
    mask: '+{7} (000) 000-00-00',
    lazy: false
  };

  botaoClick() {
    alert('Uma mensagem');
    console.log(this.testaCPF('27999620098'))
    this.cor = (this.cor == 'azul' ? 'vermelho' : 'azul');
  }


  getValor() {
    return 'BRQ';
  }

  onCpfBlur(){
    let cpfValido = this.testaCPF( this.cpfDigitado );

    if (cpfValido){
      this.msgCpf = 'CPF é Válido';
    }
    else {
      this.msgCpf = 'CPF não é válido';
    }

  }
  

  testaCPF(strCPF: string) {
    var Soma;
    var Resto;
    Soma = 0;
    if (strCPF == "00000000000") return false;

    for (let i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10))) return false;

    Soma = 0;
    for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11))) return false;
    return true;
  }

}