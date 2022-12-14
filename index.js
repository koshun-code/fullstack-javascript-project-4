import loader from './src/index.js';

export default (url, pathSave = process.cwd()) => loader(new URL(url), pathSave);
