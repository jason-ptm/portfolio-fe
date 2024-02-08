const themeModeKey = 'themeMode';
const langKey = 'lang';

export class StorageService {
  static getThemeMode(): string | null {
    return localStorage.getItem(themeModeKey);
  }

  static setThemeMode(mode: 'light' | 'dark') {
    localStorage.setItem(themeModeKey, mode);
  }

  static getLang(): string | null {
    return localStorage.getItem(langKey);
  }

  static setLang(lang: string) {
    localStorage.setItem(langKey, lang);
  }
}
