import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonInput,
  IonButton,
} from '@ionic/angular/standalone';
import { logoIonitron } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonInput,
    IonIcon,
    IonContent,
    CommonModule,
    FormsModule,
  ],
})
export class LoginPage implements OnInit {
  constructor() {
    addIcons({ logoIonitron });
  }

  ngOnInit() {}
}
