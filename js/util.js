// Ref: https://medium.com/javascript-in-plain-english/how-to-deep-copy-objects-and-arrays-in-javascript-7c911359b089
export class Util {
    static deepCopy(object) {
        let objectCopy;
        if (typeof object !== "object" || object === null) {
            return object; // Return the value if object is not an object
        }
        // Create an array or object to hold the values
        objectCopy = Array.isArray(object) ? [] : {};
        for (let key in object) {
            const value = object[key];
            // Recursively (deep) copy for nested objects, including arrays
            objectCopy[key] = this.deepCopy(value);
        }
        return objectCopy;
    }
}
