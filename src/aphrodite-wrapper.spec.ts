import { StyleSheet, css, StyleSheetTestUtils } from './aphrodite-wrapper';

import { JSDOM } from 'jsdom';
import asap from 'asap';

beforeEach(() => {
  // Object.assign(global, { document: new JSDOM('').window.document });
  (global as any).document = new JSDOM('').window.document;
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

afterEach(() => {
  (global as any).document.close();
  (global as any).document = undefined;
});

const getSheetText = (sheet: CSSStyleSheet): string => {
  let allRules = '';
  // tslint:disable-next-line:prefer-for-of
  for (let i = 0; i < sheet.cssRules.length; i++) {
    allRules += sheet.cssRules[i].cssText + ' ';
  }
  return allRules;
};

const getStyleText = (): string => {
  const styleTags = (global as any).document.getElementsByTagName('style');
  const lastTag = styleTags[styleTags.length - 1];
  return getSheetText(lastTag.sheet);
};

describe('Aphrodite wrapper', () => {
  it('Nested styles', done => {
    const styleSheet = StyleSheet.create({
      parentStyle: {
        '& .childStyle': {
          position: 'relative',
        },
        display: 'block',
      },
    });

    css(styleSheet.parentStyle);

    asap(() => {
      const styleText = getStyleText();
      expect(styleText).toMatchSnapshot();
      done();
    });
  });

  it('Global styles', done => {
    const styleSheet = StyleSheet.create({
      globals: {
        '* p': {
          display: 'block',
        },
      },
    });

    css(styleSheet.globals);

    asap(() => {
      const styleText = getStyleText();
      expect(styleText).toMatchSnapshot();
      done();
    });
  });
});
