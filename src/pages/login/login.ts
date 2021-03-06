import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoginProvider } from '../../providers/login/login';

import { HomePage } from '../home/home';
import { SignUpPage } from '../signup/signup';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})

export class LoginPage {
    enp = {
        email: '',
        password: ''
    }
    
    constructor(public navCtrl: NavController, public navParams: NavParams, public afAuth: AngularFireAuth, public db: AngularFireDatabase, public _lp: LoginProvider, public toastCtrl: ToastController) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LoginPage');
    }
    
    loggedInToast() {
        const toast = this.toastCtrl.create({
            message: 'Logged in successfully',
            showCloseButton: true,
            closeButtonText: 'Ok',
            position: 'top'
        });
        toast.present();
        this.navCtrl.setRoot(HomePage, {}, {animate: true, animation: 'wp-transition', direction: 'forward'});
    }
    
    loginWithEmail() {
        console.log('Logging in with Email and Password')
        this._lp.signInWithEmail(this.enp);
        this.loggedInToast();
    }
    
    loginWithGoogle() {
        console.log('Logging in with Google')
        this._lp.signInWithGoogle();
        this.loggedInToast();
    }

    openSignUp() {
        this.navCtrl.setRoot(SignUpPage, {}, {animate: true, animation: 'wp-transition', direction: 'forward'});
    }

}
