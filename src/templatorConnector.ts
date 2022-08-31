import {get} from "./get";

export class Templator {
    _TEMPLATE_REGULAR_EXPRESSION = /\{\{(.*?)\}\}/gi

    constructor(template) {
        this._template = template
    }

    compile(ctx) {
        return this._compileTemplate(this._template, ctx)
    }

    _compileTemplate(template, ctx) {
        console.log(ctx)
        let tmpl = this._template
        let tmpl2 = tmpl //<-- был баг в коде с теории, некоторые переменные не отрабатывались регуляркой, вопрос решился введением копии, дабы н зацикливаться и не пропускать данные
        let key = null
        const regExp = this._TEMPLATE_REGULAR_EXPRESSION

        // Важно делать exec именно через константу, иначе уйдёте в бесконечный цикл
        while ((key = regExp.exec(tmpl))) {
            if (key[1]) {
                const data = get(ctx, key[1])
                let myRegExp = new RegExp(key[0], 'gi')
                tmpl2 = tmpl2.replace(myRegExp, data)
            }
        }
        return tmpl2;
    }
}

export function templatorConnector(template:string, context:any):string {
    const tmpl: Templator = new Templator(template);
    return tmpl.compile(context);

}