import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
  providers: [MessageService]
})
export class FileUploadComponent {

  uploadedFiles: any[] = [];

  constructor(private messageService: MessageService) {}

  onUpload(event) {
      for (const file of event.files) {
          this.uploadedFiles.push(file);
      }

      this.messageService.add({severity: 'info', summary: 'Success', detail: 'File Uploaded'});
  }

  onBasicUpload(event) {
      this.messageService.add({severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode'});
  }

  onBasicUploadAuto(event) {
      this.messageService.add({severity: 'info', summary: 'Success', detail: 'File Uploaded with Auto Mode'});
  }

}
