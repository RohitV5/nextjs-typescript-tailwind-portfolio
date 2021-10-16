# nextjs-typescript-tailwind-tuts
This project helps understand the basics of framework like nextjs with typescript and tailwind

Install yarn (optional, you can use npm also but we are using yarn)

<!-- create next app with typescript -->
yarn create next-app --typescript .  

<!-- Tailwind config guide for nextjs -->
https://tailwindcss.com/docs/guides/nextjs

<!-- Intall tailwind dev dependencies -->
yarn install -D tailwindcss@latest postcss@latest autoprefixer@latest


<!-- Initialize tailwind config -->
npx tailwindcss init -p



Modify purge setting in tailwind.

Add tailwind in global css

Setup done.


Husky for fixing lint issue, typescript issues, prettier issues.
https://www.youtube.com/watch?v=oWty0Nw1ydk&t=304s

Husky : Stopper for preventing bad commit. 

cmd : npx husky init

yarn add  lint-staged prettier --dev

in pre commit hook file add

in tsconfig we set some parameters we want before commiting.

added cypress test suite.
https://www.youtube.com/watch?v=908tha_vR8Q




we have git hooks for different actions like precommit , premerge

added cypress test




