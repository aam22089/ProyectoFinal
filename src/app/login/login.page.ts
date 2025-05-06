import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { AlertController } from '@ionic/angular/standalone'
import { Router } from '@angular/router';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {

  constructor(
    private authService: AuthService,
    private alertController: AlertController,
    private router: Router
  ) { }

  email: string = '';
  password: string = '';

  ngOnInit() {
  }

  async onSubmit() {
    try {
      await this.authService.login(this.email, this.password);
      const alert = await this.alertController.create({
        header: 'Succes!',
        message: 'logged in',
        buttons: ['OK'],
      });
      await alert.present();
      this.router.navigate(['/home']);
    } catch (error) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: ':(',
        buttons: ['OK'],
      })
      await alert.present();
    }
  }

  validateEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }

  onSignUp() {
    this.router.navigateByUrl("signup")
  }

  onReset() {
    this.router.navigateByUrl("reset")
  }

}
