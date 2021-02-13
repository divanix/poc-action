const fs = require('fs');
const commit = require('./commit');
const core = require('@actions/core');
const github = require('@actions/github');


try {
  // `who-to-greet` input defined in action metadata file
  const token = core.getInput('token');
  const repo = core.getInput('repo');

  console.log(repo, token);
  
} catch (error) {
  core.setFailed(error.message);
}