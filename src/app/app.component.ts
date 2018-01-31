import { Component } from '@angular/core';
import { HttpClient,HttpParams,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exchange rates app';

  public types = [
  	"AUD","BGN","BRL","CAD","CHF",
  	"CNY","CZK","DKK","EUR","GBP",
  	"HKD","HRK","HUF","IDR","ILS",
  	"INR","JPY","KRW","MXN","MYR",
  	"NOK","NZD","PHP","PLN","RON",
  	"RUB","SEK","SGD","THB","TRY",
  	"USD","ZAR"
  ];
  public base = "EUR";
  public target = "USD";
  public amount = 0.0;
  public targetAmount = 0.0;

  constructor(private http: HttpClient){
  }

  selectBase(base) {
  	this.base = base;
  }

  selectTarget(target) {
  	this.target = target;
  }

  getCurrencyAmount() {
  	this.http.get('http://127.0.0.1:8080/currency?base='+
  		this.base+'&target='+this.target+'&amount='+this.amount)
  	.subscribe(data => {
      console.log(data);
	  this.targetAmount = data['targetAmount'];
    });
  }
}
