import { Component } from '@angular/core';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions } from '@ionic-native/camera-preview';
import { ConnectorService } from '../../app/connector.service';
import { HTTP } from '@ionic-native/http';


@Component({
  selector: 'page-setup',
  templateUrl: 'verify.html'
})
export class VerifyPage {
	message: string;

	constructor(private cameraPreview: CameraPreview, private connector: ConnectorService, private http: HTTP) {
   	}

   	onClick(event: Event) {
  	/*alert('wait')
	*/const cameraPreviewOpts: CameraPreviewOptions = {
		x: 0,
		y: 0,
		width: window.screen.width,
		height: window.screen.height,
		camera: 'front',
		tapPhoto: false,
		toBack: true,
		alpha: 1
	};

	const pictureOpts: CameraPreviewPictureOptions = {
		quality: 100
	};

	function takePicture(){
		
	}


	this.cameraPreview.startCamera(cameraPreviewOpts).then(
		(res) => {
			this.message = "Uploading....."
			setTimeout(()=>{
				this.cameraPreview.takePicture(pictureOpts).then((imageData) => {
				this.message = "Working....."
				this.http.post(this.connector.apiURL + '/verify',{'imageData':imageData},{}).then((res) => {
					this.message = 'Norm Distances' + res.data;
				}, (err) => {
					this.message = err.data;
					alert(JSON.stringify(err));
					this.cameraPreview.stopCamera();
				});
				this.cameraPreview.stopCamera();	
				}, (err) => {
					alert(err);
					this.cameraPreview.stopCamera();
				});	
			}, 300);

		}, (err) => {
		  	alert(err)
		  	this.cameraPreview.stopCamera();
		});
  	}	

}
