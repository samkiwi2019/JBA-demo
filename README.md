# venus-spa

## Project setup

```shell
npm install
or
yarn install
```

### Compiles and hot-reloads for development

```shell
npm run serve
or
yarn dev
```

### Compiles and minifies for production

```shell
npm run build
or
yarn build
```

### Run your unit tests

```shell
npm run test:unit
```

### Deploy on Linux

```shell

# step 1: build in local environment
# /config => baseUrl => pro indicates that the profix of APIs in product env'

# The attribute pro of baseUrl should correctly correspond to '.com' or '.cn' base on Linux server position

npm run build
or
yarn build

# step 2: commit code to master branch

git push

# step 3: pull latest code in Linux
# The code must be builded in local environment and then push it on remote master branch.
# The code will do not be builded in Linux, so make sure your code is avaliable for production env.

cd /var/www/venus-spa

git pull

# step 4: To check the website https://venus.buyanz.com if it works well.

```
