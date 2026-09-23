import type { ScreenshotGallery } from '$types';
import { alpha1 } from './a1';
import { preAlpha13 } from './pa13';

export { alpha1, preAlpha13 };

/** Every gallery, oldest game version first. */
export const galleries: ScreenshotGallery[] = [preAlpha13, alpha1];
