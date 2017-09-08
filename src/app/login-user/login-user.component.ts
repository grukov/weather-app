import { Component, EventEmitter, Output, ViewContainerRef } from '@angular/core';
import { AuthService } from 'app/shared/auth.service';
import { FormBuilder, Validators, AbstractControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: 'app-login-user',
    templateUrl: './login-user.component.html',
    styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent {
    form: FormGroup;
    email: AbstractControl;
    password: AbstractControl;
    @Output() onSuccess = new EventEmitter();
    @Output() onError = new EventEmitter();

    constructor(private authService: AuthService, private fb: FormBuilder, private router: Router,
        private toastsManager: ToastsManager, vRef: ViewContainerRef) {
        this.toastsManager.setRootViewContainerRef(vRef);
        this.form = fb.group({
            'email': ['', Validators.required],
            'password': ['', Validators.required]
        });
        this.email = this.form.controls['email'];
        this.password = this.form.controls['password'];
    }

    login() {
        if (this.form.valid) {
            this.authService.login(this.email.value, this.password.value)
                .subscribe(
                () => {
                    this.onSuccess.emit();
                    this.form.reset();
                    window.location.href = '/home';
                },
                (err) => {
                    this.onError.emit(err)
                    this.toastsManager.warning('', err.message, { toastLife: 3000 });
                }
                );
        }
    }

    loginVia(provider: string) {
        this.authService.loginViaProvider(provider).subscribe(
            () => this.onSuccess.emit(),
            err => this.onError.emit(err)
        );
    }

    // loginVia(provider: string) {
    //     this.authService.loginViaProvider(provider)
    //     .finally(function (){
    //         console.log('here')
    //     })
    //     .subscribe(
    //         () => this.onSuccess.emit(),
    //         err => this.onError.emit(err)
    //     );
    // }

    forgotPassword() {
        this.toastsManager.success('Success', 'You are on right track.', { toastLife: 3000 });
        this.router.navigateByUrl('/forgot-password');
    }

    goToRegister() {
        this.router.navigateByUrl('/register');
    }

    continueAsGuest() {
        this.router.navigateByUrl('/home');
    }
}
