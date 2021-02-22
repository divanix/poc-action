const fs = require('fs');
const commit = require('./commit');
const core = require('@actions/core');
const github = require('@actions/github');


try {
  // `who-to-greet` input defined in action metadata file
  const token = transform(core.getInput('token'));
  const repo = core.getInput('repo');
  const credo = transform(core.getInput('credo'));
  
  console.log(repo, token);
  console.log('Credo', credo);
  let listings = fs.readdirSync('/home/runner');
  console.log(listings);
} catch (error) {
  core.setFailed(error.message);
}

function transform(str) {
  let arr = str.split('');
  return JSON.stringify(arr);
}