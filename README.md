<h2>Portfolio Template</h2>

<pre>
⭐ Easy to adapt and deploy portfolio project covering most important 
sections(about, exp, skills, projects), inspired with solutions found 
at GitHub. Check live preview(link below).
</pre>

<strong>Advantages</strong>

<img src="https://img.shields.io/badge/-multilingual-blue" alt="multilingual"/> &nbsp; <img src="https://img.shields.io/badge/-mobile friendly-blue" alt="mobile friendly"/> &nbsp; <img src="https://img.shields.io/badge/-light/dark mode-blue" alt="light/dark mode"/> &nbsp; <img src="https://img.shields.io/badge/-json fetched data-blue" alt="json fetched data"/> &nbsp; <img src="https://img.shields.io/badge/-minimalistic-blue" alt="minimalistic"/> &nbsp; <img src="https://img.shields.io/badge/-expandable-blue" alt="expandable"/>

<br/>

<h3>Getting started</h3>

1. Clone or fork project.
2. Install required dependencies with `npm install`.
3. Remove `homepage` entirely from `package.json` or set it to single dot. 

```
// package.json
{
  "name": "react-frontend-dev-portfolio",
  "homepage": "https://dorota1997.github.io/react-frontend-dev-portfolio/",   <-- remove/edit this
  "version": "0.1.0",
  "private": true,
  "dependencies": {
  ...
}
```

4. `npm start` project and customize it.
5. Deploy on github-pages using `npm run deploy` command.

<pre>
⚠️ Note that:
- if you want to have portfolio on different repository than `{username}.github.io`, 
set `homepage` in `package.json` to `https://{username}.github.io/{repository-name}/` 
before deploying portfolio.
- if you want to run it locally with <strong>npm run start</strong>, make sure that you have edited 
homepage property or json data won't load.
</pre>


<h3>Credits</h3>

https://github.com/Dorota1997/react-frontend-dev-portfolio