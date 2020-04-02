Git workflow

- Clone using the template [once!]
- git pull origin master [You need to be on master to do this]
- git checkout -b new-branch
- write some code
- git status / add / commit
- git checkout master
- git pull origin master [to have updated code]
- git checkout new-branch
- git merge master (if there's been a change on master)
- git push origin new-branch
- create a pull request on github
- your teammate merge to master on github
- go to second step above