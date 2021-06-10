const core = require('@actions/core');
const fs = require("fs");
const path = require('path');
const clover2lcov = require('clover2lcov');

async function run() {
  try {
    let data;
    const src = core.getInput('src');
    let dst = core.getInput('dst');

    if (!dst) {
      dst = path.parse(src).name + '.info';
    }

    core.info(`Converting Clover to LCOV format...`);
    
    try {
      // eslint-disable-next-line no-undef
      const srcPath = path.join(GITHUB_WORKSPACE, src);
      data = await fs.promises.readFile(srcPath);
    } catch (error) {
      core.setFailed('⛔️ Source file does not exist');
      return;
    }
    
    let lcovData = await clover2lcov.toLcov(data);

    try {
      // eslint-disable-next-line no-undef
      const dstPath = path.join(GITHUB_WORKSPACE, dst);
      await fs.promises.mkdir(path.dirname(dstPath), { recursive: true });
      await fs.promises.writeFile(dstPath, lcovData);
    } catch (error) {
      core.setFailed('⛔️ Unable to convert to LCOV');
      return;
    }

    core.setOutput('file', dst);
    core.info('🎉 Successfully converted Clover file to LCOV format');
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
