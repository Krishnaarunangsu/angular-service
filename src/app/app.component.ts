import { Component } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  data1 =`{
      "ID": "1",
      "Source": [
        "AA",
        "AVV",
        "WEB",
        "DEB"
      ]
    }`;

 data = `{
    "List": [
    {
    "CityCode": "1248991",
    "CityName": "Colombo",
    "Temp": "33.0",
    "Status": "Clouds"
    },
    {
    "CityCode": "1850147",
    "CityName": "Tokyo",
    "Temp": "8.6",
    "Status": "Clear"
    },
    {
    "CityCode": "2644210",
    "CityName": "Liverpool",
    "Temp": "16.5",
    "Status": "Rain"
    }
]
}`;

  location={    
    code: '1248991'  //Passing Area Code Manually
  };

  public dataList: any[] = [];
  public weather: any[] = [];
  public sourceList: any[] = [];

  constructor(private weatherService:WeatherService) {

  }
    ngOnInit() {

    if(this.data){
       this.dataList = JSON.parse(this.data).List;
      for(let temp of this.dataList){
        this.weatherService.getWeather(temp.CityCode).subscribe((Response:any)=>{
          console.log(Response);
          if(Response && Response.list){          
            this.weather.push(Response.list[0]);
          }
        })
      }
    }
    if(this.data1){
       this.sourceList = JSON.parse(this.data1).Source;
    }

    }

}
