# native-cdn

## What is native-cdn ?

**native-cdn** is a local content delivery network like **cdnjs** which allows you to run all your commonly used **CSS and Javascript** files from a single server offline on your local machine instead of having multiple and lots of different files in different folders serving the same purpose

## Who is native cdn for ?

native cdn is for everyone who uses external css or javascript file in the link or script tag.

## Why native cdn ?

Most developers when writing code or when downloading templates, we do download all css files and jquery files along. After downloading 7 templates which all have bootstrap in it, the user gets 7 bootstrap files. So with **native-cdn**, one can run all the 7 templates with just one bootstrap file which pretends to be a bootstrap file from the cdn.

## Installation / Help

Its best You install the package globally using [npm](https://npmjs.com/) (you'll need at least [Node.js LTS](https://nodejs.org/en/)):

```bash
npm i -g native-cdn
```
Or with yarn

```bash
yarn add native-cdn
```

Once that's done, you can run this command anywhere to start  your server

```bash
native-cdn --serve
```

Finally, run this command to see a list of all available options:

```bash
native-cdn --help
```

## Usage

- Adding a file either css or javascript
  ```bash
  native-cdn --add <url>
  ```
  Note: **The url should end with css or  js**

- Removing a file
  ```bash
  native-cdn --remove <filename>
  ```
  Note: **File name should end with css or js**
  e.g ```native-cdn --remove bootstrap.min.css```

- List all css and javascript files
  ```bash
  native-cdn --list
  ```

- Clear a specific folder
  ```bash
  native-cdn --clear <folder-type>
  ```
  Note: **Folder-type should be either css or js**

- Start server
  ```
  native-cdn --serve
  ```
  Note: **Server starts on default port [8900]**

- Start server on a specific port
  ```bash
  native-cdn --serve --port <PORT>
  ```
  Note: **PORT can be as you wish**

## Examples

- Add bootstrap to native-cdn
  ```bash
  native-cdn -a https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.2/js/bootstrap.min.js
  ```

- Remove bootstrap.min.js from native CDN
  ```bash
  native-cdn --remove bootstrap.min.js
  ```

- Start server on port 4500
  ```
  native-cdn --serve -p 4500
  ```

## Contributing

You can contribute to the project on [Github](https://github.com/Qudusayo/native-cdn.git) to make native-cdn better!

## Author

[Qudusayo](https://github.com/Qudusayo)