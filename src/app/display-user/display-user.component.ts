import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'app/shared/auth.service';
import { UserInfo } from 'app/shared/user-info';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'app-display-user',
    templateUrl: './display-user.component.html',
    styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent implements OnInit {
    @Output() onLoggedOut = new EventEmitter();


    constructor(private authService: AuthService, private router: Router) { }

    currentUser(): Observable<UserInfo> {
        return this.authService.currentUser();
    }

    ngOnInit() {
        if (!this.authService.isLoggedIn()) {
            this.router.navigateByUrl('/login');
        }
    }

    // this.authService.isLoggedIn();

    logout() {
        this.authService.logout().subscribe(() => this.onLoggedOut.emit('success'));
    }
}
