![Banner](banner.png)

# JAZinator

#### JAZ calculator made with React and TailwindCSS

<br>

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
# Use locally

## Source Code

1. Clone the repository

    `git clone https://github.com/rosch-ei-ti-kruh/jazinator.git`
    
2. Open terminal in the cloned directory and start the applicaton

    `npm run start`

3. Open your browser at `localhost:3000`

<br>

## Docker Container

### Not logged into the GitHub Container Registry

1. Go to "Settings" and then to "Developer settings"

2. Click on "Tokens (classic)" in "Personal access tokens"

3. Generate a new token and check the "read:packages" box. Copy the token for later on

4. Open your command line and type in

    `docker login ghcr.io -u YOUR_USERNAME -p COPIED_PAT`

5. Replace YOUR_USERNAME with your username and COPIED_PAT with the token you created in the previous step

Now you can continue with the "Logged "in" section


### Logged in

1. Open your command line and pull the image

    `docker pull ghcr.io/rosch-ei-ti-kruh/jazinator:latest`

2. Start up a container by using

    `docker run --name jazinator -it -d -p 3000:3000 ghcr.io/rosch-ei-ti-kruh/jazinator:latest`

3. Open your browser at `localhost:3000`

<br>

## Contributing

Feel free to contribute to this project by opening an issue to request features / report bugs or create a pull request which will be reviewed by us!