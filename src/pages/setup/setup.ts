import { Component } from '@angular/core';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions } from '@ionic-native/camera-preview';
import { File } from '@ionic-native/file';
import { ConnectorService } from '../../app/connector.service';
import { HTTP } from '@ionic-native/http';


@Component({
  selector: 'page-setup',
  templateUrl: 'setup.html'
})
export class SetupPage {
	empCount: number;
	trainPath: string;
	image: any;
	message: string;

	constructor(private cameraPreview: CameraPreview, private file: File, private connector: ConnectorService, private http: HTTP) {
  		this.file.checkDir(this.file.externalDataDirectory,'train-unprocessed').then((res) => {
  			this.trainPath = this.file.externalDataDirectory + 'train-unprocessed';
  			this.file.readAsText(this.file.externalDataDirectory,'empCount.txt').then((res) => {
  				this.empCount = Number(res);
  				this.message = "Current number of trusted faces = " + this.empCount;
  			}, (err) => {
  				alert(JSON.stringify(err));
  			});
  		}, (err) => {
  			this.file.createDir(this.file.externalDataDirectory, 'train-unprocessed', true).then((res) => {
  				this.trainPath = this.file.externalDataDirectory + 'train-unprocessed';
  				this.file.writeFile(this.file.externalDataDirectory,'empCount.txt','0').then((res) => {
  					this.file.readAsText(this.file.externalDataDirectory,'empCount.txt').then((res) => {
		  				this.empCount = Number(res);
		  				this.message = "Current number of trusted faces = " + this.empCount;
		  			}, (err) => {
		  				alert(JSON.stringify(err));
		  			});
  				}, (err) => {
  					alert(JSON.stringify(err));
  				});
  			}, (err) => {
  				alert(JSON.stringify(err));
  			});
  		});
  	}


  	onClick(event: Event) {
  	
	const cameraPreviewOpts: CameraPreviewOptions = {
		x: 0,
		y: 0,
		width: window.screen.width,
		height: window.screen.height,
		camera: 'front',
		tapPhoto: false,
		toBack: false,
		alpha: 1
	};

	const pictureOpts: CameraPreviewPictureOptions = {
		quality: 100
	};

  	this.cameraPreview.startCamera(cameraPreviewOpts).then(
		(res) => {
			alert('Press OK to Capture a Photo')
			this.cameraPreview.takePicture(pictureOpts).then((imageData) => {
				this.http.post(this.connector.apiURL + '/upload',{'imageData':imageData, 'empCount':this.empCount},{}).then((res) => {
					alert('Image Upload Successful')
					this.empCount = this.empCount + 1;
					this.file.writeExistingFile(this.file.externalDataDirectory,'empCount.txt',String(this.empCount));
					this.message = "Current number of trusted faces = " + this.empCount;
				}, (err) => {
					alert(JSON.stringify(err));
				});
				this.cameraPreview.stopCamera();
			}, (err) => {
			  alert(err);
			  this.cameraPreview.stopCamera();
			});	
		}, (err) => {
		  alert(err)
		  this.cameraPreview.stopCamera();
		});
  	}

  	onClick2(event: Event) {
  	this.http.get(this.connector.apiURL + '/train',{},{}).then((res) => {
  		alert(res.data); 
  	}, (err) => {
  		alert(JSON.stringify(err))
  	});
  }

}
