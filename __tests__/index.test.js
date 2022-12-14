import fs from 'fs/promises';
import path from 'path';
import os from 'os';
import nock from 'nock';
import loader from '../index.js';

nock.disableNetConnect();

let tmpDirPath = '';

beforeAll(async () => {
  // await fs.mkdtemp(path.join(os.tmpdir(), 'page-loader-')); (в хуке beforeEach()).
  tmpDirPath = await fs.mkdtemp(path.join(os.tmpdir(), 'test'));
});

describe('test of page loader', () => {
  it('shoud contain page', async () => {
    nock('https://ru.hexlet.io')
      .get('/courses')
      .reply(200, 'saved');

    await loader('https://ru.hexlet.io/courses', tmpDirPath);
    const files = await fs.readdir(tmpDirPath);
    expect(files).toContain('ru-hexlet-io-courses.html');
  });
});
