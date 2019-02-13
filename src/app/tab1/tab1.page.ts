import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
    n_value:string = "";
    constructor(public http: HttpClient) {}

    getMedianPrimes() {
        let domainURL = 'https://jayde-randomionicserver.herokuapp.com/';
        let apiURL = 'get_median_prime/';
        console.log(this.n_value);
        this.http.get(domainURL + apiURL + this.n_value).
        subscribe(data => {
            document.getElementById("MedianPrimesOutput").innerHTML = data.result;
        },(err)=>{
            alert(err);
        });
    }
}
