import { languages, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const pathSegments = url.pathname.split('/').filter(Boolean); // Remove empty segments
  const lang = pathSegments.find(segment => segment in languages);

  return lang || defaultLang;
}

