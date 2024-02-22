
ng build --configuration=production --output-path=../volumes
npm install --save @nestjs/serve-static --legacy-peer-deps


#### Création d'un image pour dev local : 

```bash
docker build -t bdd:dev -f Dockerfile.bdd .
```


#### Lencement conteneur depuis image Mysql pour dev :

```bash
docker container run --name=mysql-dev -p 3310:3306 bdd:dev
```


#### Arrêter/Démarrer/Redémarrer  containeur Mysql :

```bash
docker stop mysql-dev
```

```bash
docker start mysql-dev
```

```bash
docker restart mysql-dev
```

# Application basée sur NestJs et Angular avec une base de données MySQL

Tout le développement se base sur les branches de fix, de feature et de release avec les noms de branche suivants :

    fix_*
    feature_*
    release_*

À partir de ces branches, le développement de l’application principale (back-end) et du client (front-end) peut être effectué.

Pour le nommage des branches de développement de l’application principale, les noms doivent strictement suivre le format :

    be_fix_*
    be_feature_*
    be_release_*

Pour le nommage des branches de développement du client, les noms doivent strictement suivre le format :

    fe_fix_*
    fe_feature_*
    fe_release_*

Lorsque vous poussez des branches commençant par ```be_*```, le workflow “**Test and Coverage**“ exécute des tests et vérifie la couverture du code pour la partie back-end de l’application, puis envoie le rapport de test à Coveralls.
Ce processus atteste que le code satisfait un seuil défini de couverture de test (en l’occurence, supérieur à 90%).

Lorsque vous poussez des branches commençant par ```fe_*```, le workflow “**Lint for front**“ effectue des vérifications de linting sur le code front-end de votre projet.

⚠️☠️ Avant de créer une Pull Request, assurez-vous que tous les workflows sont ✔️ **valides** ❗

# Diagramme représentant les workflows

![workflows_diagram](https://cdn.discordapp.com/attachments/1157225843194597387/1209958630099517450/V.3.1.drawio.png?ex=65e8d0c9&is=65d65bc9&hm=2e3483ad4f7023aa1b3f461005d0bee2acd7d3bc2c323a2fcad10a49552c17d6&)

**Ces workflows garantissent la qualité du code, assurent l’absence d’erreurs ou de bugs, et veillent au respect des normes établies pour le projet.
Ils facilitent également la collaboration entre les développeurs et le processus de révision du code.** 🚀

# Quelles sont les commandes à exécuter ?

#### Création de l’image de la base de données (MySQL) pour un environnement de développement local :

```bash
docker image build -t bdd:dev -f Dockerfile.bdd .
```

#### Lancement du conteneur depuis l’image MySQL pour l’environnement de développement :

```bash
    docker container run --name=mysql-dev -p 3310:3306 bdd:dev
```

#### Arrêter/Démarrer/Redémarrer ce conteneur Mysql :

```bash
    docker container stop mysql-dev
```
```bash
    docker container start mysql-dev
```
```bash
    docker container restart mysql-dev
```

Une fois que le conteneur de base de données est en place et fonctionnel, nous pouvons nous atteler à la fabrication de l’image de l’application.

#### Création de l’image de l’application:

```bash
    docker image build ??? # (image de l'application)
```

#### Arrêter/Démarrer/Redémarrer ce conteneur:

```bash
    docker image build ??? # (image de l'application)
```

voir ce qu’il reste à faire