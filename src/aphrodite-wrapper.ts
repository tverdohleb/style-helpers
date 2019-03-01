// tslint:disable-next-line:no-submodule-imports
import * as aphrodite from 'aphrodite/no-important';

// tslint:disable-next-line:no-duplicate-imports
import {
  StyleDeclaration,
  StyleDeclarationValue,
  CSSPropertiesComplete,
  CSSPropertiesLossy,
  CSSProperties,
  // tslint:disable-next-line:no-submodule-imports
} from 'aphrodite/no-important';

import { StyleSheetTestUtilsStatic, StyleSheetServerStatic } from './aphrodite.interface';

const hasParentRef = (selector: string): boolean => selector.indexOf('&') !== -1;
const parentRegExp = /&/g;

const nestSelectorHandler = (
  selector: string,
  baseSelector: string,
  generateCSS: (selector: string) => string,
): string | null => {
  if (hasParentRef(selector)) {
    return generateCSS(selector.replace(parentRegExp, baseSelector));
  }
  return null;
};

const globalSelectorHandler = (
  selector: string,
  baseSelector: string,
  generateSubtreeStyles: (selector: string) => string,
): string | null => {
  if (selector[0] !== '*') {
    return null;
  }
  return generateSubtreeStyles(selector.slice(1));
};

const extendedAphrodite = aphrodite.StyleSheet.extend([
  { selectorHandler: globalSelectorHandler },
  { selectorHandler: nestSelectorHandler },
]);
const { StyleSheet } = extendedAphrodite;
const css = extendedAphrodite.css.bind(extendedAphrodite);
const StyleSheetServer: StyleSheetServerStatic = extendedAphrodite.StyleSheetServer;
const StyleSheetTestUtils: StyleSheetTestUtilsStatic = extendedAphrodite.StyleSheetTestUtils;

export {
  StyleSheet,
  css,
  CSSPropertiesLossy,
  CSSProperties,
  StyleDeclaration,
  StyleDeclarationValue,
  CSSPropertiesComplete,
  StyleSheetServer,
  StyleSheetTestUtils,
};
