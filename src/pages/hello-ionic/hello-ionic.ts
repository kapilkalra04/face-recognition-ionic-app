import { Component } from '@angular/core';
import { ConnectorService } from '../../app/connector.service';
import { HTTP } from '@ionic-native/http';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
	url: string;
	result: JSON;
	message: string;
  constructor(private connector: ConnectorService, private http: HTTP) {

  }
  connect(){
  	this.connector.apiURL = 'http://' + this.url + ':5000';
  	this.http.get(this.connector.apiURL,{},{}).then((res) => {
  		this.message = 'Status: ' + res.status + '		Message: ' + res.data; 
  	}, (err) => {
  		alert(JSON.stringify(err))
  	});
  }
}
