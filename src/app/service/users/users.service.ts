import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Users } from 'src/app/models/user';
import { Role, RoleType } from 'src/app/models/role';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private roles: Role[] = [
    { id: RoleType.Admin },
    { id: RoleType.WebUser }
  ];

  private currentUserSubject = new BehaviorSubject<Users | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  user_list: Users[] = [
    {
      username: "admin",
      password: "admin",
      role: this.roles.find(r => r.id === RoleType.Admin)!
    },
    {
      username: "client",
      password: "client",
      role: this.roles.find(r => r.id === RoleType.WebUser)!
    }
  ];

  constructor() { }

  autentification(username: string, password: string): Users | null {
    const user = this.user_list.find(u => u.username === username && u.password === password);
    if (user) {
      this.currentUserSubject.next(user); // Actualiza el usuario actual
      return user;
    }
    return null;
  }

  logout(): void {
    this.currentUserSubject.next(null); // Limpia el usuario actual
  }

  isAuthenticated(): boolean {
    return this.currentUserSubject.getValue() !== null;
  }

  isAdmin(): boolean {
    return this.currentUserSubject.getValue()?.role.id === RoleType.Admin;
  }

  isClient(): boolean {
    return this.currentUserSubject.getValue()?.role.id === RoleType.WebUser;
  }
}
