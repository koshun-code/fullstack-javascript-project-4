import fs from 'fs/promises';
import path from 'path';
import { loadContent, urlToFilename, makeLink } from './cli.js';

const loader = (url, pathToSave = process.cwd()) => loadContent(url.toString())
  .then((data) => {
    const link = makeLink(url);
    const fileName = urlToFilename(link);
    const pathToDir = path.join(pathToSave, fileName);
    return fs.writeFile(pathToDir, data)
      .then(() => console.log('saved'))
      .catch(() => console.error(`something wrong with save data to ${pathToDir}`));
  })
  .catch(() => console.error(`Can't get data from ${url}`));

export default loader;
