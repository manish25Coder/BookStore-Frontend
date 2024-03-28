# BookStore FrontEnd

### Set Up Instructrion

1. Clone The Project
```
    git clone https://github.com/manish25Coder/BookStore-Frontend.git
``` 

2. Move Into The Directory 
```
    cd BookStore_Frontend
```

3. Install The Dependencies 
```
    npm i
```

4. Run The Server 
```
    npm run dev
```

### Set Up Instruction For Tailwind

[Tail Wind Official Instruction Doc ](https://tailwindcss.com/docs/installation)

1. Install Tailwind Css
```
    npm install -D tailwindcss postcss autoprefixer
```

2. Create Tailwind Config File
```
    npx tailwindcss init
```

3. Add File Extensions To Tailwind Config File In The Content Property
```
    "./src/**/*.{html,js,jsx,ts,tsx}","./index.html",
```

4. Add The Tailwind Directives At The Top Of The  `index.css` file
```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
```
5. Add The Following Details In The Plugin property Of Tailwind Config
```
    [require("daisyui")]
```

### Addind Plugins And Dependencies

```
npm i -D daisyui@latest
```

