# Thunderstorm

This boilerplate is a unification of both frontend and backend in one repo.. 

---

## First things first...

 * First and foremost you need [**bash** (4.4 and higher)](https://www.google.com/search?q=how+to+install+bash) if you don't have/use it..  grow up and install it..

### What is in the repo:
 
 Right after you've cloned the repo you will see:
  * **app-frontend** - Contains all the frontend files.
  * **app-backend** - Contains all the backend files.
  * **app-shared** - where all the shared types between the frontend and backend are stored.
  
  
# Fork this repo: 
 * First you will need to install [firebase tools](https://firebase.google.com/docs/cli) `npm i -g firebase-tools`.
 * You will then have to **Login** using the firebase tools cli `firebase login`.
 * [create an empty Firebase project](https://console.firebase.google.com/). and acquire the project id (NOT project name)
 * Create a realtime **Database and Firestore**. (and acquire the location e.g. us-cenrtal1...) 
 * Prepare an empty repo and acquire the repo remote tracking url `(e.g. git@github.com:${username}/${my-project}.git)`
 * Clone this repo locally `git clone --recursive git@github.com:nu-art-js/thunderstorm-web-app.git && cd thunderstorm-web-app`
 * Then run from within this cloned repo: `bash ./dev-tools/scripts/dev/typescript/fork-thunderstorm.sh`
 * From this point on Follow the script and provide the required input.
 * Once the fork is completed you can follow the steps bellow to setup, launch or deploy your function.
 
Now you have forked the boilerplate...

**ATTENTION:** You should pay attention to the `./.config`, `./app-frontend/.config` and `./app-backend/.config` folders as they contain all of the project configurations 
and are version controlled, thus MUST not contain any sensitive data such as passwords or private keys. 
You should also note the `./app-frontend/src/main/.config` and `./app-backend/src/main/.config` files, these hold the projects selected environment configuration, and are NOT version controlled!
  
### Set Environment
 Before you can run the project you need to set it up...
 
 You can setup **dev** environment using this command: `bash build-and-install.sh --install --set-env=dev` 
 
**NOTE:** Install whatever other node packages the script asks and re-run the script
 
  * Finally (if you have configured everything correctly) you can launch the "Hello World" sample from your own firebase project by executing: `bash build-and-install.sh --launch-frontend --launch-backend`


### Run your app locally  
 Once you have configured everything correctly, you can launch the "Hello World" sample from your own firebase project by executing: 
 
 `bash build-and-install.sh --launch=app-frontend --launch=app-backend`

**NOTE:** you can run each individually


### Deploy your app to firebase

 Once you have configured everything correctly, executing the following command would deploy the frontend and backend to the firebase function: 

`bash build-and-install.sh  --set-env=${env} --deploy=app-frontend --deploy=app-backend`

**NOTE:** you can deploy each individually


# More stuff...

For now I am not sure what is missing in terms of the script.. you can run `bash build-and-install.sh --help` to see the full 
capabilities of the script!

The script was designed and tested MOSTLY on MacOS, so guys with Linux forgive me.. and please ping me with issues so I may fix them!!

If you have found a bug or think there is a feature missing, don't be a stranger.. open a ticket.. 
I promise I will take it seriously and try to assist as soon as possible...

Have a good one... :)
