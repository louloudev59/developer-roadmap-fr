# Contribution

Tout d'abord, merci de vouloir contribuer. Veuillez consulter les détails ci-dessous :

- [Contributions Hacktoberfest](#hacktoberfest-contributions)
- [Nouveaux Roadmaps](#new-roadmaps)
- [Roadmaps Existants](#existing-roadmaps)
- [Ajout de Projets](#adding-projects)
- [Ajout de Contenu](#adding-content)
- [Directives](#guidelines)

## Contributions Hacktoberfest

Nous participons à [Hacktoberfest 11](https://hacktoberfest.com/) !

Avant de commencer à contribuer à notre projet pour répondre aux [exigences de Hacktoberfest](https://hacktoberfest.com/participation/#contributors), veuillez garder à l'esprit les points suivants :

* Il n'y a pas de t-shirt Hacktoberfest cette année [(voir leur FAQ)](https://hacktoberfest.com/participation/#faq).
* Les opportunités de contribution au projet roadmap.sh ne sont pas infinies.

### Règles spécifiques aux contributions Hacktoberfest

Comme Hacktoberfest attire beaucoup de contributeurs (ce qui est génial), il est nécessaire d'appliquer un ensemble de directives plus strictes que pour une contribution classique.

Voici ces règles :

1. Pas de contributions d'un seul fichier, veuillez en soumettre au minimum deux.

Bien que les contributions d'un seul fichier, comme l'ajout d'un lien à un sujet, soient tout à fait acceptables en dehors de Hacktoberfest, cela peut (et probablement) entraîner la soumission facile de 4 pull requests par tout le monde, ce qui ferait de nous un projet « farming » pour Hacktoberfest.

***Note : Si vous contribuez à l'intégralité d'un sujet, c'est-à-dire un sujet qui n'a ni texte ni liens, cela comptera.***

2. Les corrections de fautes d'orthographe ne compteront pas (seules).

Bien que corriger des fautes soit une bonne chose, regroupons-les avec des contributions substantielles lorsque nous les trouvons !

3. Les mêmes règles de base s'appliquent.

- Le contenu doit être en anglais.
- Maximum de 8 liens par sujet.
- Suivez le guide de style ci-dessous pour le contenu.

Voici un exemple de sujet **complètement rempli** :

```markdown
# Redis

Redis est un magasin de données en mémoire open-source, connu pour sa rapidité et sa polyvalence. Il prend en charge divers types de données, notamment les chaînes, les listes, les ensembles, les hachages et les ensembles triés, et offre des fonctionnalités telles que la mise en cache, la gestion des sessions, l'analyse en temps réel et la gestion des messages. Redis fonctionne comme un magasin clé-valeur, permettant des opérations de lecture et d'écriture rapides, et est souvent utilisé pour améliorer les performances et l'évolutivité des applications. Il prend en charge des options de persistance pour enregistrer les données sur disque, la réplication pour une haute disponibilité, et le clustering pour une mise à l'échelle horizontale. Redis est largement utilisé pour les scénarios nécessitant un accès à faible latence aux données et une performance élevée.

Apprenez-en plus à partir des ressources suivantes :

[@official@Lien 1](https:/google.com)
[@article@Lien 2](https:/google.com)
[@article@Lien 3](https:/google.com)
[@course@Lien 4](https:/google.com)
[@course@Lien 5](https:/google.com)
[@video@Lien 6](https:/google.com)
[@video@Lien 7](https:/google.com)
[@video@Lien 8](https:/google.com)
```

Les contributions au projet qui respectent ces exigences recevront l'étiquette `hacktoberfest-accepted` et seront fusionnées. Les contributions qui ne répondent pas aux exigences seront simplement fermées.

Toute tentative de PR spam recevra l'étiquette `spam`. Si vous recevez 2 étiquettes `spam`, vous serez [disqualifié de Hacktoberfest](https://hacktoberfest.com/participation/#spam).

## Nouveaux Roadmaps

Pour les nouveaux roadmaps, vous pouvez :
- Soumettre un roadmap en fournissant [un roadmap textuel similaire à celui-ci](https://gist.github.com/kamranahmedse/98758d2c73799b3a6ce17385e4c548a5) dans une [issue](https://github.com/kamranahmedse/developer-roadmap/issues).
- Créer un roadmap interactif en utilisant [notre éditeur de roadmap](https://draw.roadmap.sh/) et soumettre le lien de ce roadmap dans une [issue](https://github.com/kamranahmedse/developer-roadmap/issues).

## Roadmaps Existants

Pour les roadmaps existants, veuillez suivre les détails indiqués en fonction de la nature de la contribution :

- **Correction de fautes** — Faites vos modifications dans le [fichier JSON du roadmap](https://github.com/kamranahmedse/developer-roadmap/tree/master/src/data/roadmaps) et soumettez une [PR](https://github.com/kamranahmedse/developer-roadmap/pulls).
- **Ajout ou suppression de nœuds** — Veuillez ouvrir une [issue](https://github.com/kamranahmedse/developer-roadmap/issues) avec votre suggestion.

**Note :** Veuillez noter que notre objectif n'est **pas d'avoir la plus grande liste d'éléments**, mais de lister les éléments ou compétences les plus pertinents aujourd'hui.

## Ajout de Projets

Si vous avez une idée de projet que vous pensez que nous devrions ajouter au roadmap, n'hésitez pas à ouvrir une issue avec autant de détails que possible sur le projet et le roadmap auquel vous pensez qu'il devrait être ajouté.

Le format détaillé de l'issue devrait être comme suit :

```
## De quoi parle ce projet ?

(Ajoutez une introduction au projet.)

## Compétences couvertes par ce projet

(Liste des compétences séparées par des virgules, par exemple, Connaissance en programmation, Base de données, etc.)

## Exigences

(Liste détaillée des exigences, c'est-à-dire entrée, sortie, indices pour aider à construire cela, etc.)
```

Jetez un coup d'œil à ce projet pour vous faire une idée de [ce que nous recherchons](https://roadmap.sh/projects/github-user-activity).

## Ajout de Contenu

Trouvez [le répertoire de contenu à l'intérieur du roadmap concerné](https://github.com/kamranahmedse/developer-roadmap/tree/master/src/data/roadmaps). Veuillez respecter les directives suivantes lors de la soumission de contenu :

- Le contenu doit être en anglais.
- Maximum de 8 liens par sujet.
- Suivez le guide de style ci-dessous pour le contenu.

### Comment structurer le contenu

Veuillez respecter le style suivant lorsque vous ajoutez du contenu à un sujet :

```
# Titre du Sujet

(Contenu)

Consultez les ressources suivantes pour en savoir plus :

- [@type@Description du lien](Lien)
```

`@type@` doit être l'un des suivants et décrire le type de contenu que vous ajoutez :

- `@official@`
- `@opensource@`
- `@article@`
- `@course@`
- `@podcast@`
- `@video@`

Il est important d'ajouter un type valide, cela nous aidera à catégoriser le contenu et à l'afficher correctement sur le roadmap.

## Directives

- <p><strong>Veuillez ne pas utiliser le projet pour vous auto-promouvoir !</strong><br />

## Lignes directrices

- <p><strong>Merci de ne pas utiliser le projet pour l'auto-promotion !</strong><br />

  Nous considérons que ce projet est un atout précieux pour la communauté des développeurs, car il contient de nombreuses ressources utiles. Nous vous demandons de ne pas soumettre de pull requests dans le but unique de vous auto-promouvoir. Nous apprécions les contributions qui apportent une véritable valeur ajoutée, comme des guides provenant des mainteneurs de frameworks bien connus, et nous pourrions accepter ces contributions même si elles sont rédigées par vous-même. Merci pour votre compréhension et votre coopération !

- <p><strong>Ajouter tout ce qui existe n'est pas l'objectif !</strong><br />

  Les roadmaps représentent l'ensemble des compétences les plus précieuses aujourd'hui, c'est-à-dire que si vous deviez entrer dans l'un des domaines listés aujourd'hui, que devriez-vous apprendre ? Il est possible que certaines choses soient encore utilisées aujourd'hui, mais il faut prioriser ce qui est le plus demandé aujourd'hui, par exemple, beaucoup de gens utilisent encore Angular.js, mais vous ne voudriez pas apprendre cela à la place de React, Angular ou Vue. Utilisez votre esprit critique pour filtrer les éléments non essentiels et apportez des arguments honnêtes pour justifier l'inclusion de la ressource.</p>

- <p><strong>Ne proposez pas des ressources que vous n'avez pas personnellement évaluées !</strong><br />

  Utilisez votre esprit critique pour filtrer les éléments non essentiels. Donnez des arguments honnêtes pour justifier l'inclusion de la ressource. Avez-vous lu ce livre ? Pouvez-vous donner un bref résumé de l'article ?</p>

- <p><strong>Créez une seule PR pour les ajouts de contenu</strong></p>

  Si vous prévoyez de contribuer en ajoutant du contenu aux roadmaps, nous vous recommandons de cloner le dépôt, d'ajouter du contenu dans le [répertoire de contenu de la roadmap](./src/data/roadmaps/) et de créer une seule PR pour faciliter la révision et la fusion de la PR.

- <p><strong>Rédigez des messages de commit significatifs</strong><br >

  Des messages de commit significatifs aident à accélérer le processus de révision et permettent aux autres contributeurs d'avoir une bonne vue d'ensemble de l'historique des commits du dépôt sans avoir à examiner chaque commit.

  </p>
- <p><strong>Consultez les problèmes/pull requests existants avant d'en ouvrir de nouveaux</strong></p>

### Bonnes vs. Moins Bonnes Contributions

<strong>Bonnes Contributions</strong>

  - Nouvelles roadmaps.
  - Liens vers du contenu engageant et nouveau.
  - Corrections de fautes de frappe et de grammaire.
  - Contenu de sujets qui n'ont pas encore de contenu (ou très peu).

<strong>Moins Bonnes Contributions</strong>

  - Ajouter des espaces blancs qui n'améliorent pas la lisibilité du contenu.
  - Réécrire le contenu d'une manière qui n'apporte aucune valeur ajoutée.
  - Contenu non traduit en anglais.
  - PR qui ne suivent pas notre guide de style, sans description, et avec un titre par défaut.
  - Liens vers vos propres articles de blog.