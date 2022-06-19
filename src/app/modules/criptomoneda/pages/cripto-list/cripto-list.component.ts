import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { CriptomonedaService } from 'src/app/core/services/criptomoneda.service';

@Component({
  selector: 'app-cripto-list',
  templateUrl: './cripto-list.component.html',
  styleUrls: ['./cripto-list.component.scss']
})
export class CriptoListComponent implements OnInit {
  
  
  criptomonedasLista: any[] =[];
  FilterCripto='';
  p:number=0;

  constructor() { 
    //let key='3a806d5d-aee4-41a3-8285-62c1cde08d4f';
            //fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=' +key)
            fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
            .then((res)=> (res.ok? res.json(): Promise.reject(res)))//convertir la respuesta recibida a formato json
            .then((json)=> {//recibe de nueva cuenta la respuesta pero ya en formato json
                console.log(json);
                //this.criptomonedasLista=json.data;
                for(let i=0; i<(json).length; i++)
                    {
                      let cripto = {
                        id:i+1,
                        name: json[i].name,
                        precio: json[i].current_price,
                        simbolo: json[i].symbol,
                        imagen: json[i].image
                    };
                      this.criptomonedasLista.push(cripto);
                        //texto=texto+'<tr><th scope="row">'+(i+1)+'</th><td>'+json.data[i].name +'</td><td>'+json.data[i].symbol+'</td><td>'+ json.data[i].quote.USD.price+'</td></tr>';
                    }
            })
            .catch((err)=> {
                console.log(err);
            })

  }



  ngOnInit(): void {
    //this.loadData();
  }

  // private loadData(){
  //   this.CriptoService.GetAll()
  //   .pipe(first())
  //   .subscribe(data=>{
  //     console.log(data);
  //   })
  // }
  // criptomonedasLista=[
  //   {name:'Bitcoin', id:1, precio:47200, simbolo:BTC, imagen:'https://logos-marcas.com/wp-content/uploads/2020/08/Bitcoin-Logo.png'},
  //   {name:'Ethereum', id:2,precio:3120,imagen:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/480px-Ethereum-icon-purple.svg.png'},
  //   {name:'Cardano', id:3,precio:0.820,imagen:'https://cdn4.iconfinder.com/data/icons/crypto-currency-and-coin-2/256/cardano_ada-512.png'},
  // ];
}
