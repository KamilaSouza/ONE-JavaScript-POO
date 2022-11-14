export class AuthenticationSystem {
    static login(authenticable, password) {
        if (AuthenticationSystem.isAuthenticable(authenticable)) {
            return authenticable.authenticate(password);
        }
        return false;
    }

    static isAuthenticable(authenticable) {
        return "authenticate" in authenticable && authenticable.authenticate instanceof Function;
    }
}

