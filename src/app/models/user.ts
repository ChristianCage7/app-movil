import { Role } from 'src/app/models/role';

export interface Users{
    username: string;
    password: string;
    role:Role;
}
