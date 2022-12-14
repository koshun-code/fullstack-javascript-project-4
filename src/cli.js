import axios from 'axios';
import path from 'path';

export const loadContent = (url) => axios.get(url, { responseType: 'arraybuffer' })
  .then((response) => response.data);

export const cebabCase = (url) => url.replace(/\W+/ig, '-');

export const urlToFilename = (link, defaultFormat = '.html') => {
  const { dir, name, ext } = path.parse(link);
  const pathToFile = dir.length === 0 ? path.join(name, ext) : path.join(dir, name);
  const formatIn = dir.length === 0 ? defaultFormat : ext;
  const slug = cebabCase(pathToFile);
  const format = formatIn || defaultFormat;
  return `${slug}${format}`;
};

export const urlToDirname = (link) => {
  const { dir, name, ext } = path.parse(link);
  const slug = cebabCase(path.join(dir, name, ext));
  return `${slug}_files`;
};

export const makeLink = (url) => {
  const { hostname, pathname } = url;
  return `${hostname}${pathname}`;
};
