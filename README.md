# www.rchain.coop

##### Development

You can run this site as a nodeJS application for development purpose

```
npm i
npm run start
```

Compile scss to ./css/style.css (you need to have sass installed). Don't forget to change the `style.css?version=x` of in the html (cache invalidation).

```
npm run style
```

Build the `navAndFooter/index.js` react app to `js/navAndFooter.js`. Don't forget to change the `navAndFooter.js?version=x` of in the html (cache invalidation).

```
npm run build:nav
```
