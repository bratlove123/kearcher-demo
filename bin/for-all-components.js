#!/usr/bin/env node
/* eslint-disable no-console */
const { spawnSync } = require('child_process');
const path = require('path');
const { argv } = require('process');
const fg = require('fast-glob');

const main = () => {
  const command = argv.slice(2);
  if (!command.length) {
    console.error('error: command is empty!');
    return;
  }
  const packageFilenames = fg.sync(['**/package.json', '!**/node_modules', '!**/layers']);
  const packagesDirs = packageFilenames.map(f => path.resolve(f)).map(path.dirname);
  console.error(`executing command '${command.join(' ')}' for package in directory:`);
  for (const dir of packagesDirs) {
    console.error(`>>> ${dir}`);
    const result = spawnSync(argv[2], argv.slice(3), {
      cwd: dir,
      stdio: 'inherit',
      shell: true,
    });
    if (result.status > 0) {
      process.exitCode = result.status;
      return;
    }
  }
};

main();
