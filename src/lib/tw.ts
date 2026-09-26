/**
 * A no-op to get type hints for Tailwind classes through .vscode/settings.json.
 *
 * Prefer `twMerge` instead when joining multiple strings of classes to ensure
 * those classes are merged in the correct order.
 */
export const tw = (classes: string) => classes;
