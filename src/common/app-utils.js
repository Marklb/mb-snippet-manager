import { APP_SITE_PREFIX } from './constants'

export const appLink = (linkPath) => {
  return `${APP_SITE_PREFIX}${linkPath}`;
}
