import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonIcon,
  IonButton,
  IonInput,
} from '@ionic/angular/standalone';
import { NavController, ToastController } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { addIcons } from 'ionicons';
import {
  add,
  mailOutline,
  arrowBackOutline,
  logoIonitron,
} from 'ionicons/icons';
import { blurActiveElement } from '../utils/dom.utils';
import { showTopToast } from '../utils/toast.utils';
import { AuthService } from '../services/auth.service';
import { isValidEmail } from '../utils/validation.utils';

@Component({
  selector: 'app-recuperar-senha',
  templateUrl: './recuperar-senha.page.html',
  styleUrls: ['./recuperar-senha.page.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonIcon,
    IonContent,
    CommonModule,
    FormsModule,
    RouterModule,
    IonInput,
  ],
})
export class RecuperarSenhaPage {
  email = '';

  private readonly authService = inject(AuthService);
  private readonly navCtrl = inject(NavController);
  private readonly toastCtrl = inject(ToastController);

  constructor() {
    addIcons({ arrowBackOutline, logoIonitron, mailOutline, add });
  }

  ionViewWillLeave() {
    blurActiveElement();
  }

  removerFocoAtual() {
    blurActiveElement();
  }

  private async exibirErroRecuperarSenha(mensagem: string) {
    await showTopToast(this.toastCtrl, mensagem, 'danger');
  }

  async enviarRecuperacao() {
    this.removerFocoAtual();

    if (!this.email) {
      await this.exibirErroRecuperarSenha(
        'Por favor, preencha o e-mail.',
      );
      return;
    }

    if (!isValidEmail(this.email)) {
      await this.exibirErroRecuperarSenha('Por favor, insira um e-mail válido.');
      return;
    }

    try {
      await this.authService.recuperarSenha(this.email);
      await showTopToast(
        this.toastCtrl,
        'Se o e-mail estiver cadastrado, você receberá um link em instantes.',
        'success',
      );
      // Voltar para a tela de login após enviar o e-mail de recuperação
      this.navCtrl.navigateBack('/login');
    } catch (error: any) {
      if (error?.code === 'auth/user-not-found') {
        await showTopToast(
          this.toastCtrl,
          'Se o e-mail estiver cadastrado, você receberá um link em instantes.',
          'success',
        );
      } else if (error?.code === 'auth/invalid-email') {
        await showTopToast(
          this.toastCtrl,
          'Por favor, insira um e-mail válido.',
          'danger',
        );
      } else {
        await showTopToast(
          this.toastCtrl,
          'Ocorreu um erro ao enviar o e-mail de recuperação. Tente novamente.',
          'danger',
        );
      }
    }
  }
}
