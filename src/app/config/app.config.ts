export interface AbstractApp {
  name: string;
  version: string;
}

export class AppConfig implements AbstractApp {

  name = 'SHADOW NG2';
  version = '0.0.1';

  private constructor() {
  }

  static getInstance() {
    return new AppConfig();
  }
}

export const config = AppConfig.getInstance();

export function APPVersion() {
  return (target, propertyKey: string) => {
    Object.defineProperty(target, propertyKey, {
      get: () => config.version,
      configurable: false
    });
  };
}

export function APPName() {
  return (target, propertyKey: string) => {
    Object.defineProperty(target, propertyKey, {
      get: () => config.name,
      configurable: false
    });
  };
}

