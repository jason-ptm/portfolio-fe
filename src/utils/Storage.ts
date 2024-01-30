const themeModeKey = 'themeMode';

export class StorageService {
  static getThemeMode(): string | null {
    return localStorage.getItem(themeModeKey);
  }

  static setThemeMode(mode: 'light' | 'dark') {
    localStorage.setItem(themeModeKey, mode);
  }
}
