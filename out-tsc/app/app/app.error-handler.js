import { Observable } from "rxjs/Observable";
import { Response } from "@angular/http";
var ErrorHandler = (function () {
    function ErrorHandler() {
    }
    ErrorHandler.handleError = function (erro) {
        var errorMessage;
        if (erro instanceof Response) {
            errorMessage = "Erro " + erro.status + " ao acessar a URL " + erro.url + " - " + erro.statusText;
        }
        else {
            errorMessage = erro.toString();
        }
        console.log(errorMessage);
        return Observable.throw(errorMessage);
    };
    return ErrorHandler;
}());
export { ErrorHandler };
//# sourceMappingURL=app.error-handler.js.map