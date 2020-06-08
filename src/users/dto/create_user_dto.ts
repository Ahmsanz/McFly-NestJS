export class CreateUserDto {
    readonly userId?: string;
    readonly first_name: string;
    readonly last_name: string;
    readonly email: string;
    readonly password: string;
    readonly fav_notes?: string[];
}