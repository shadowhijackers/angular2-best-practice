export class ShUtilities {

  static isEmpty(data: any) {
    return !data;
  }

  static isFunction(data) {
    return typeof data === 'function';
  }

  static isNumber(data) {
    return typeof data === 'number';
  }

  static isObject(data) {
    return typeof data === 'object';
  }

  static isString(data) {
    return typeof data === 'string';
  }

  static isArray(data) {
    return Array.isArray(data);
  }

}
