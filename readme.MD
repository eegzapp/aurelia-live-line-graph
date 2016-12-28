

## Setting up the project
---
1. Create project on github (or branch if you're basing off this code)
2. Cloned project locally
   - *github clone https://github.com/eegzapp/aurelia-live-line-graph.github*
   - This copies the repository contents to your local filesystem in the directory you ran the command from (and adds some management files in the .git directory)
3. cd to the local folder just created by the clone operation
4. Make sure you have a recent version of node.
    - node -v will give you the version
    - If the version is not recent you can update by
        - Windows: Download the latest installer and run it
5. Make sure you have a recent version of npm
    - Even if you just installed node, npm may have a newer version than what came with the node installer
    - *npm install npm@latest -g* (this will wipe out existing install and replace with the latest)
6. Initialize npm
    - *npm init*
7. Install aurelia-cli globally
    - aurelia-cli is a set of tools for building and running aurelia projects. Install globally and you can use it anywhere.
    - *npm install aurelia-cli -g*
8. Use aurelia-cli to bootstrap project
    - *au new --here*
    - Options: Web, Babel, Sass, No unit testing, Visual studio code, Yes create project, Yes install dependencies
9. Test that the basic app runs
    - au run
    - Open browser to http://localhost:9000/.
    - options are:
        - *au run --watch* (updates running client bundle whenever changes are saved)
        - *au build --env prod* (creates a production build)

## Notes
---
- Store name/password so you don't have to submit every push
    - *ssh-add -k ~/.ssh/id_rsa* (haven't tried this, got it off stackoverflow)
