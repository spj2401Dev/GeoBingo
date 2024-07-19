# Geobingo IRL

Geobingo is an open-source game where you and your friends are assigned prompts to find and photograph objects in the real world.

> [!Tip]
> This project is not related to [GeoBingo.io](https://github.com/s0er3n/GeoBingo.io), but check them out on Github. It is very similar to this repo, but in Google Street View, if going outside is not your thing.

![GeoBingoLogo](https://github.com/user-attachments/assets/093db3b5-3e0f-43bd-8315-30d773b804e8)
[Brushes from Brusheezy!](https://www.brusheezy.com)

# Hosting for Production
This will be using Docker via docker-compose.

First you might want to edit the docker-compose.yml. In there you can configure the enviorment variabels, to define on which Ports the Server and Websocket
run on.

After that it's as easy as running

```
docker-compose up --build
```

# Selfhosting
Download the Repo and open in up in your favorite IDE. Then install all the required packages.

```
npm i
```

After that make sure you edit the .env file. There is a .env.template. In this file you can configure on which ports the Server and Websocket run on.

Like this its configured to run on your localhost. Then you just have to configure the Client to connect to the right WebSocket. Go to /client/resources/webSocketService.mjs. There you should see an IP adresse. Just change this to the same then you configured in the config.json
After that just run the project using

```
npm start
```

or use nodemon, to automatically restart the server once you saved a file. (Often not recommended, because all the game data is stored in the runtime. Meaning restarting the server resets the game)

```
npm run dev
```

### Setting Default words

In GeoBingo you can set default words, which will be randomly choosen if you dont fill out all the words. You can find those in /src/utility/wordsList.mjs. In there just put the Words you want to use.

# Features

- 🤝 Teams are supported. Play with multiple people together
- 📝 Voting. Give extra points to the best photos.
- 🔎 As Admin remove pictures that do not follow the prompt.
- 🔗 Compression Build in. Save Data when on the run
- 💻 Good looking UI

## Contributing

Contributions are always welcome!

There are still a lot of issues in terms of security, since the was programmed in about two Weeks and is only meant for Friends.

If you have any ideas for improvements, just create a Pull Request :)

## License

[MIT](https://choosealicense.com/licenses/mit/)
