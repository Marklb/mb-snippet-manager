import { APP_SITE_PREFIX } from './constants'

export const appLink = (linkPath) => {
  if(linkPath == '/'){ linkPath = ''; }
  const link = `${APP_SITE_PREFIX}${linkPath}`;
  // console.log(link);
  return link;
}
