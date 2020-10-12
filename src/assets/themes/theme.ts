const HashMap = require('hashmap');

export const Theme = {
  themeData: {
    theme: 'cyan',
    fullScreen: false,
    nightMode: false,
    effectOnSidebar: false,
    effectOnHeader: false,
    minimizedHeader: false,
    hideDashboardLogo: false
  },

  loadTheme() {
    this.setTheme(this.themeData.theme);
    this.setFullScreen(this.themeData.fullScreen);
    this.setNightMode(this.themeData.nightMode);
    this.setEffectOnSidebar(this.themeData.effectOnSidebar);
    this.hideDashboardLogo(this.themeData.hideDashboardLogo);
    this.setMinimizeHeader(this.themeData.minimizedHeader);
  },

  setTheme(themeKey: string) {
    this.themeData.theme = themeKey;
    top.document.body.setAttribute('theme-skin', themeKey);
  },

  getTheme() {
    return this.themeData.theme;
  },

  setFullScreen(isFull: boolean) {
    this.themeData.fullScreen = isFull;
    top.document.body.setAttribute('full-screen', isFull ? 'true' : 'false');
  },

  isFullScreen() {
    return this.themeData.fullScreen;
  },

  setNightMode(nightMode: boolean) {
    this.themeData.nightMode = nightMode;
  },

  isNightMode() {
    return this.themeData.nightMode;
  },

  setEffectOnSidebar(isEffective: boolean) {
    this.themeData.effectOnSidebar = isEffective;
    top.document.body.setAttribute(
      'effect-on-sidebar',
      isEffective ? 'true' : 'false'
    );
  },

  isEffectOnSidebar() {
    return this.themeData.effectOnSidebar;
  },

  setEffectOnHeader(isEffective: boolean) {
    this.themeData.effectOnHeader = isEffective;
    top.document.body.setAttribute(
      'effect-on-header',
      isEffective ? 'true' : 'false'
    );
  },

  isEffectOnHeader() {
    return this.themeData.effectOnHeader;
  },

  hideDashboardLogo(isHidden: boolean) {
    this.themeData.hideDashboardLogo = isHidden;
    top.document.body.setAttribute(
      'hide-dashboard-logo',
      isHidden ? 'true' : 'false'
    );
  },

  isHiddenDashboardLogo() {
    return this.themeData.hideDashboardLogo;
  },

  toggleMinimalizerSidebar(isHidden: boolean) {
    top.document.body.setAttribute('hide-sidebar', isHidden ? 'true' : 'false');
  },

  setMinimizeHeader(isMinimizedHeader: boolean) {
    this.themeData.minimizedHeader = isMinimizedHeader;
    top.document.body.setAttribute(
      'minimized-header',
      isMinimizedHeader ? 'true' : 'false'
    );
  },

  isMinimizedHeader() {
    return this.themeData.minimizedHeader;
  }
};
