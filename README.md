# C4.Giving

## TOC
1. [About us](#empowering-communities-with-compassionate-tech-solutions)
2. [Adding to Documentation](#adding-to-documentation)
3. [Adding to team pages](#adding-members-to-the-about-team-page)
<!-- TODO: 5. [Contributing Guidlines](#contributing) -->
4. [Installation](#installation) 
    1. [From the repo](#1-clone-the-repo)
    2. [With Docker](#docker-instructions)

## Empowering Communities with Compassionate Tech Solutions

*Requirements:*
- nodejs
- npm or yarn or pnpm
- docker (optional)

# Adding to **Documentation**

1. Copy the example-doc.md in the [documents directory](src/pages/documents/)
2. edit the frontmatter (the top part in between the `---`) as needed (title, published, etc.)
    1. If you don't need an image, simply delete the lines for *image, url and alt*
3. add to the body of the doc and save the file!

# Adding members to the **About Team** page

1. In the [Team](/src/content/team/) directory make a copy of an existing file.
2. edit the frontmatter as needed (the part between the `---`) 
    1. Ensure draft is set to false if you want the page generated!
3. Add an image to the [Assets](/src/assets/) folder
4. The bio page for the member is generated automatically and filled with the text in the markdown file!

# Contributing

## Installation

Building locally by cloning this repo.

### 1. Clone the repo

```bash
git clone https://github.com/surjithctly/astroship.git myProjectName
# or
git clone https://github.com/surjithctly/astroship.git .
```

The `.` will clone it to the current directory so make sure you are inside your project folder first.

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or (recommended)
pnpm install
```

### 3. Start development Server

```bash
npm run dev
# or
yarn dev
# or (recommended)
pnpm dev
```

### Preview & Build

```bash
npm run preview
npm run build
# or
yarn preview
yarn build
# or (recommended)
pnpm preview
pnpm build
```

We recommend using [pnpm](https://pnpm.io/) to save disk space on your computer.

### Other Commands

```bash
pnpm astro ...
pnpm astro add
pnpm astro --help
```

## Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── ...
├── src/
│   ├── components/
│   │   └── ...
│   ├── layouts/
│   │   └── ...
│   └── pages/
│       └── ...
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

Any static assets, like images, can be placed in the `public/` directory.

## TailwindCSS

TailwindCSS is already configured in this repo, so you can start using it without any installation.

## Docker Instructions

To build and run the Docker container, follow these steps:

1.  **Build the image:**

    ```bash
    docker build -t community-commodity-computer-coaching .
    ```

2.  **Run the container:**

    ```bash
    docker run -p 4000:4000 community-commodity-computer-coaching
    ```

    This will start the application and make it accessible at `http://localhost:4000`.

## Credits

1.  **Build the image:**

    ```bash
    docker build -t community-commodity-computer-coaching .
    ```

2.  **Run the container:**

    ```bash
    docker run -p 4000:4000 community-commodity-computer-coaching
    ```

    This will start the application and make it accessible at `http://localhost:4000`.


[![Built with Astro](https://astro.badg.es/v1/built-with-astro.svg)](https://astro.build)

Created @ DSM Hack 2025!
