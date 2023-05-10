import { Component } from '@angular/core';

@Component({
  selector: 'app-edit1',
  templateUrl: './edit1.component.html',
  styleUrls: ['./edit1.component.sass'],
})
export class Edit1Component {
  isCollapsed = true;
  isCollapsedcordonnee = true;
  isCollapsedliens = true;
  isCollapsedhobby = true;
  name: string;
  email: string;
  phone: string;
  address: string;
  imageUrl: string;

  onFileSelected(event): void {
    const file = event.target.files[0]; // get the selected file
    const reader = new FileReader(); // create a new FileReader object
    reader.readAsDataURL(file); // read the file data as a base64-encoded string
    reader.onload = () => {
      // set the onload event handler
      this.imageUrl = reader.result as string; // set the imageUrl variable to the image data
    };
  }
}
