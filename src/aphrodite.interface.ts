/**
 * Copy-pasted from aphrodite sources to allow exporting of
 * StyleSheetTestUtils and StyleSheetServer
 */

/**
 * Utilities for Aphrodite testing
 */
export interface StyleSheetTestUtilsStatic {
  /**
   * Prevent styles from being injected into the DOM.
   *
   * This is useful in situations where you'd like to test rendering UI
   * components which use Aphrodite without any of the side-effects of
   * Aphrodite happening. Particularly useful for testing the output of
   * components when you have no DOM, e.g. testing in Node without a fake DOM.
   *
   * Should be paired with a subsequent call to
   * clearBufferAndResumeStyleInjection.
   */
  suppressStyleInjection(): void;
  /**
   * Opposite method of preventStyleInject.
   */
  clearBufferAndResumeStyleInjection(): void;
  /**
   * Returns a string of buffered styles which have not been flushed
   *
   * @returns {string}  Buffer of styles which have not yet been flushed.
   */
  getBufferedStyles(): string[];
}

interface StaticRendererResult {
  html: string;
  css: {
    content: string;
    renderedClassNames: string[];
  };
}

/**
 * Utilities for using Aphrodite server-side.
 */
export interface StyleSheetServerStatic {
  renderStatic(renderFunc: () => string): StaticRendererResult;
}
