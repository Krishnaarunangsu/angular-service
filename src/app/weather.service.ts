import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class WeatherService {

  apiKey = '9402da6bd74c395f71604c624cc2b231';
  url;

  constructor(private http:HttpClient) { 
    this.url='https://api.openweathermap.org/data/2.5/group?id=';  //API GET URL

  }

  public getWeather(cityCode){
    return this.http.get(this.url+cityCode+'&units=metric&appid='+this.apiKey);
  }

}