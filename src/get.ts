export function get(obj: any, path: string): any {
    const keys = path.split('.')
    let result = obj
    for (let key of keys) {
        let bufKey:RegExpMatchArray| null = key.match(/(\w+)/);
        let value:string|undefined=""
        if (bufKey) {
            value = result[bufKey[0]]
        }

        if (!value) {
            return bufKey[0];
        }

        result = value
    }

    return result
}