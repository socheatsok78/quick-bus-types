// Type definitions for quick-bus 0.3
// Project: https://github.com/baz/foo (Does not have to be to GitHub, but prefer linking to a source code repository rather than to a project website.)
// Definitions by: Socheat Sok <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/*~ If this module is a UMD module that exposes a global variable 'myLib' when
 *~ loaded outside a module loader environment, declare that global here.
 *~ Otherwise, delete this declaration.
 */
export as namespace Bus;

/*~ If this module has methods, declare them as functions like so.
 */
export function on(a: string): string;
export function off(a: number): number;
