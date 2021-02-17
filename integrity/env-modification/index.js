const fs = require('fs');
const exec = require('child_process').execSync;
const core = require('@actions/core');
const github = require('@actions/github');


try {
  exec('sudo npm config set registry https://example.com --global');

} catch (error) {
  core.setFailed(error.message);
}