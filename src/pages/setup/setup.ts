import { Component } from '@angular/core';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions } from '@ionic-native/camera-preview';
import { File } from '@ionic-native/file';
/*import * as toImage from 'base64-img';
*/

@Component({
  selector: 'page-setup',
  templateUrl: 'setup.html'
})
export class SetupPage {
	empCount: number;
	trainPath: string;
	image: any;

	/**
	 * Turn base 64 image into a blob, so we can send it using multipart/form-data posts
	 * @param b64Data
	 * @param contentType
	 * @param sliceSize
	 * @return {Blob}
	 */
	private getBlob(b64Data:string, contentType:string, sliceSize:number= 512) {
	    contentType = contentType || '';
	    sliceSize = sliceSize || 512;

	    let byteCharacters = atob(b64Data);
	    let byteArrays = [];

	    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
	        let slice = byteCharacters.slice(offset, offset + sliceSize);

	        let byteNumbers = new Array(slice.length);
	        for (let i = 0; i < slice.length; i++) {
	            byteNumbers[i] = slice.charCodeAt(i);
	        }

	        let byteArray = new Uint8Array(byteNumbers);

	        byteArrays.push(byteArray);
	    }

	    let blob = new Blob(byteArrays, {type: contentType});
	    return blob;
	}

  	constructor(private cameraPreview: CameraPreview, private file: File) {
  		this.file.checkDir(this.file.externalDataDirectory,'train-unprocessed').then((res) => {
  			alert('train-unprocessed-dir-present');
  			this.trainPath = this.file.externalDataDirectory + 'train-unprocessed';
  			alert(this.trainPath)
  			this.file.readAsText(this.file.externalDataDirectory,'empCount.txt').then((res) => {
  				this.empCount = Number(res);
  				alert(this.empCount); 
  			}, (err) => {
  				alert(JSON.stringify(err));
  			});
  		}, (err) => {
  			this.file.createDir(this.file.externalDataDirectory, 'train-unprocessed', true).then((res) => {
  				alert('directory-created');
  				this.trainPath = this.file.externalDataDirectory + 'train-unprocessed';
  				alert(this.trainPath)
  				this.file.writeFile(this.file.externalDataDirectory,'empCount.txt','0').then((res) => {
  					alert('file-created');
  					this.file.readAsText(this.file.externalDataDirectory,'empCount.txt').then((res) => {
		  				this.empCount = Number(res);
		  				alert(this.empCount); 
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
		toBack: true,
		alpha: 1
	};

	const pictureOpts: CameraPreviewPictureOptions = {
		quality: 100
	};

  	this.cameraPreview.startCamera(cameraPreviewOpts).then(
		(res) => {
			alert(res)
			this.cameraPreview.takePicture(pictureOpts).then((imageData) => {
				alert('captured');
				var blob = this.getBlob(imageData,'jpeg');
				this.file.writeFile(this.trainPath,'EMP'+String(this.empCount+1)+'.jpeg',blob).then((res) => {
					alert('image-saved');
					this.empCount = this.empCount + 1;
					this.file.writeExistingFile(this.file.externalDataDirectory,'empCount.txt',String(this.empCount));
				}, (err) => {
					alert(JSON.stringify(err));
				});
				this.cameraPreview.stopCamera().then((res) => {
			  		alert('stopped')
			  	}, (err)=> {
			  		alert(err)
			  	});
			}, (err) => {
			  alert(err);
			  this.cameraPreview.stopCamera();
			});	
		}, (err) => {
		  alert(err)
		  this.cameraPreview.stopCamera();
		});
  	}
}
