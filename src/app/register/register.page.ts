import { Component, OnInit } from '@angular/core';
import { User } from "../models/user.model";
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { first } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user ={} as User;

  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private afAuth: AngularFireAuth,
    private navCtrl: NavController
  ) { }

   // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {}

  async register(user : User){
    if (this.formValidation()) {
      let loader = await this.loadingCtrl.create({
        message: "Procesando..."
      })
      await loader.present();

      try {
        await this.afAuth.createUserWithEmailAndPassword(user.email, user.password).then(data=>{
          console.log(data);

          this.navCtrl.navigateRoot("home")

        })
        
      } catch (e:any) {
        e.message = "Error en registro";
        let errorMessage = e.message || e.getlocalizedMessage();

        this.showToast(errorMessage)
        
      }

      await loader.dismiss();
      
    }
  }

  formValidation(){
    if (!this.user.email) {
      this.showToast("Ingresa un email");
      return false;
      
    }

    if (!this.user.password) {
      this.showToast("Ingresa una contraseña");
      return false;
      
    }
    return false;

  }

  showToast(message: string){
    this.toastCtrl.create({
      message: message,
      duration: 4000 
    }).then(toastData => toastData.present());
  }

}
