export interface User {
    userId?: string, 
    first_name: string,
    last_name: string,
    email: string,
    password: string,
    fav_notes?: string[]
}