
START-UP PROCEDURE
==================
- Install and configure mongoDB 
- sudo service mongod start|stop|restart  or simply mongod
- clone the repo
- npm install && npm start


ROUTINES
=================
1. pull a particular branch

> git pull origin <branch>

2. Create a new branch named "feature_x" and switch to it using

> git checkout -b feature_x

3. push the branch to your remote repository

> git push origin <branch>

4. switch back to master

> git checkout master

5. and delete the branch again

> git branch -d feature_x

Remove the old origin and readd the correct one:

> git remote remove origin
> git remote add origin <correct address>

Update the existing remote links:

> git remote set-url origin <correct url>


TODO TASKLIST
=================

- [x] Staff
- [ ] Student
- [ ] Lesson


API ROUTES
================

1. api/staff
------------
- **List Staff**
    - get /api/staff


- **Add Student**
    - post /api/students


- **Delete Lesson**
    - delete /api/lesson/{lessonId}


- **Update Marksheet**
    - put /api/marksheet/{marksheetId}


## FUNCTIONALITY
=========================

- ** From Questionnaire, you can create Assessment (CBT) **

- ** From Assessment (CBT), you can process it into Marksheet **

- ** From Marksheet, you can create Result (CBT) **
