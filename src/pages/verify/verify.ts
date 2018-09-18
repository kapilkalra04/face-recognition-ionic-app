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
	message2: string;
	message5: string;
	message4: string;
	message3: string;
	message6: string;

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
			this.message2 = null; 
			this.message3 = null;
			this.message4 = null;
			this.message5 = null;
			setTimeout(()=>{
				this.cameraPreview.takePicture(pictureOpts).then((imageData) => {
				this.message = "Comparing Face Embeddings(of test vs train subjects) generated using FaceNet ..."
				setTimeout(() => {this.message2 = "STEP-1: Crop-out the main Face from the captured image (FACE DETECTION)"}, 5000)
			  	setTimeout(() => {this.message3 = "STEP-2: Straighten the cropped face using eye detection (FACE-ALIGNMENT)"}, 10000)
			  	setTimeout(() => {this.message4 = "STEP-3: Generate and compare the Facial Embedding with the stored facial embeddings(FACE-RECOGNITION)"}, 15000)
			  	this.http.post(this.connector.apiURL + '/verify',{'imageData':imageData},{}).then((res) => {
			  		let response = JSON.parse(res.data);
					this.message = 'Norm Distances - ' + response.norm;
					this.message2 = 'Are you an employee? - ' + response.result  
					this.message3 = null;
					this.message4 = null;
					this.message5 = null;
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
