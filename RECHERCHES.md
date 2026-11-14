# Journal des recherches scientifiques

Ce fichier garde la trace de tout ce qui a été vérifié dans la littérature pour
construire le programme (`MonAppTacking.md`, `index.html`). Il sert à ne pas
refaire les mêmes recherches d'une session à l'autre.

Dernière mise à jour : 14 novembre 2026.

## Comment lire ce fichier

Chaque source porte un niveau de vérification :

| Niveau | Signification |
|---|---|
| **Résumé** | Résumé de l'article lu (PubMed, PMC, dépôt universitaire), chiffres tirés du résumé |
| **Secondaire** | Chiffres repris d'une synthèse ou d'un communiqué, article original non ouvert |
| **Hérité** | Citation déjà présente dans le programme avant l'audit, non revérifiée |
| **Non confirmé** | Affirmation cherchée mais non retrouvée dans la source : ne pas l'utiliser |

Aucun texte intégral n'a été lu en entier. Les pages `pubmed.ncbi.nlm.nih.gov`
ne s'ouvrent pas directement depuis l'environnement Claude (mur de cookies) :
passer par la recherche web, par PMC ou par un dépôt universitaire.

Règle : seules les sources évaluées par des pairs (méta-analyses, revues
systématiques, essais, prises de position ACSM / OMS / ISSN) entrent dans le
programme. Les blogs et sites de vulgarisation servent au mieux à retrouver
l'article d'origine.

## Ce que la science ne dit pas

- **Aucun essai contrôlé n'a testé un programme de planche**, ni la vitesse de
  progression vers la full planche. Tout ce qui concerne la planche est déduit
  de l'isométrie et de la biologie du tendon. Les délais des phases sont des
  repères de terrain.
- **L'espacement de 72 h entre deux séances de planche** est déduit de la
  cinétique du collagène, jamais testé directement.
- **Le placement de la 3ᵉ course le dimanche** est un choix de programmation.
- **« Ne pas courir ni sauter avec le gilet »** est une précaution, pas un
  résultat d'étude.
- **Un élastique tire moins en position étirée** : raisonnement mécanique, pas
  une étude.
- **Fréquence de course 2 contre 3 fois par semaine** : aucune méta-analyse ne
  compare directement les deux chez des amateurs.

## Pistes écartées ou non confirmées

| Affirmation | Statut |
|---|---|
| « L'interférence course / musculation ne touche que les muscles qui courent » attribuée à Wilson 2012 | **Non confirmé** dans le résumé. Ne pas citer Wilson pour ça |
| « Se concentrer sur l'extérieur (focus externe) améliore l'apprentissage moteur » (Chua 2021) | Contesté : McKay 2024 trouve un biais de publication modéré à fort. **Non utilisé** |
| « Boire 5-7 ml/kg avant l'effort » attribué à l'ACSM 2007 | **Non confirmé** dans le résumé. Seul le seuil de 2 % de perte de poids est vérifié |
| « L'entraînement polarisé est le meilleur pour les amateurs » (Muñoz 2014) | Faux tel quel : écart non significatif. Corrigé dans le programme |
| « L'impingement est le risque n°1 en handstand, causé par un mauvais placement de l'omoplate » | Non étayé (Hogan 2021). Retiré du programme |
| Lien `summify.io` pour Helms | Source non scientifique, remplacée par l'article |
| PMC12869050 présenté comme « méta-analyse 2026 » | C'est une revue systématique (Wolf et al. 2025). Corrigé |
| Chiffres de la prise de position ACSM 2026 (≥ 2 jours/semaine, ~10 séries par muscle) | **Secondaire** uniquement. À vérifier dans *Medicine & Science in Sports & Exercise* avant de citer un chiffre |

## Force et hypertrophie

| Source | Ce qu'elle dit | Niveau | Utilisé pour |
|---|---|---|---|
| [Pelland et al. 2024](https://sportrxiv.org/index.php/server/preprint/view/460), méta-régression, 67 études | Le muscle grossit avec le volume, à rendements décroissants ; pour la force, les rendements décroissent encore plus vite ; la fréquence n'a d'effet net que sur la force. Prépublication, version de revue non confirmée | Secondaire | Dimanche : 16 séries de poussée au lieu de 19 |
| [Nunes et al. 2021](https://pubmed.ncbi.nlm.nih.gov/32077380/), méta-analyse, 11 études | Les gains de force sont les plus grands sur les exercices faits en début de séance ; aucun effet de l'ordre sur l'hypertrophie | Résumé | Planche avant le HSPU le dimanche |
| [Schoenfeld et al. 2017](https://pubmed.ncbi.nlm.nih.gov/28834797/), méta-analyse, 21 études | Force maximale (1RM) meilleure avec des charges lourdes ; hypertrophie identique avec charges légères ou lourdes quand les séries vont à l'échec | Résumé | Gilet sur les exercices de force, élastiques près de l'échec |
| [Lopes et al. 2019](https://pmc.ncbi.nlm.nih.gov/articles/PMC6383082), méta-analyse, 8 études | Élastiques et charges classiques donnent des gains de force similaires. Un erratum corrige une valeur du résumé | Résumé | Élastiques pour l'isolation |
| Robinson et al. 2024, *Sports Medicine*, [DOI 10.1007/s40279-024-02069-2](https://doi.org/10.1007/s40279-024-02069-2) | Force : gains similaires quelle que soit la marge avant l'échec. Hypertrophie : meilleure près de l'échec. Analyse exploratoire | Secondaire | 2 reps en réserve sur la force, près de l'échec en isolation |
| [Singer et al. 2024](https://www.frontiersin.org/journals/sports-and-active-living/articles/10.3389/fspor.2024.1429789/abstract), méta-analyse bayésienne | Petit avantage à se reposer plus de 60 s ; rien de net au-delà de 90 s | Résumé | Repos de 45-60 s acceptables en superset d'accessoires |
| [Zhang et al. 2025](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12011898/), méta-analyse, 19 études | Supersets : mêmes gains de force et de muscle, séances plus courtes, mais plus de fatigue et de dommages musculaires | Résumé | Supersets non concurrents |
| [Wolf et al. 2025](https://pmc.ncbi.nlm.nih.gov/articles/PMC12869050), revue systématique | S'entraîner en position longue semble donner plus d'hypertrophie globale ; effet sur la longueur des fibres incertain | Résumé | Curl bras derrière, soulevé de terre unilatéral, Reverse Nordic |
| [Maeo et al. 2022](https://pubmed.ncbi.nlm.nih.gov/35819335/), 21 adultes | Extension du coude bras au-dessus de la tête : longue portion du triceps +28,5 % contre +19,6 % bras le long du corps | Résumé | Extension triceps au-dessus de la tête (mercredi) |
| Maeo et al. 2021, *Med Sci Sports Exerc* 53(4) | Leg curl assis (ischios étirés) : +14,1 % contre +9,3 % couché | Secondaire | Argument d'appui, non cité dans l'app |
| Grgic et al. 2018, *Sports Medicine* 48(5) | À volume égal, la fréquence n'a pas d'effet significatif sur la force | Secondaire | Contexte |
| [Grgic et al. 2019](https://vuir.vu.edu.au/40086/), méta-analyse, 11 études | La force est plus haute le soir, mais s'entraîner le matin ou le soir fait progresser autant | Résumé | Entraînement à 7 h |
| [Coleman et al. 2024](https://pmc.ncbi.nlm.nih.gov/articles/PMC10809978/), essai randomisé | Une semaine d'arrêt complet au milieu de 9 semaines : aucun gain, un peu moins de force des jambes | Résumé | Décharge allégée, jamais d'arrêt |
| Bell et al. 2023, consensus Delphi, *Sports Medicine – Open* 9:87 | Définit la décharge ; les recommandations de fréquence n'ont pas été retrouvées | Secondaire | Contexte |
| [Kotarsky et al. 2018](https://pubmed.ncbi.nlm.nih.gov/29466268/), 23 hommes, 4 semaines | Pompes progressives et développé couché améliorent tous deux la force ; aucune différence d'épaisseur musculaire | Résumé | Seule étude trouvée sur la calisthénie progressive |
| [Schoenfeld et al. 2016](https://pubmed.ncbi.nlm.nih.gov/27102172/) | Chaque muscle 2 fois par semaine fait mieux qu'une | Hérité | Structure de la semaine |

## Isométrie, tendons, planche

| Source | Ce qu'elle dit | Niveau | Utilisé pour |
|---|---|---|---|
| [Oranchuk et al. 2019](https://pubmed.ncbi.nlm.nih.gov/30580468/), revue systématique, 26 études | Isométrie en position longue : plus d'hypertrophie. Intensité ≥ 70 % nécessaire pour le tendon. Intention balistique : meilleure production rapide de force | Résumé | Toucher le palier suivant chaque semaine, « pousser le sol » |
| [Lum & Barbosa 2019](https://bibliotecadigital.ipb.pt/handle/10198/19389), revue narrative | Force maximale : 80-100 % du max, 1-5 s par contraction, 30-90 s au total par séance. Hypertrophie : 70-75 %, 3-30 s, plus de 80-150 s au total | Secondaire | 5 × 8-10 s le dimanche, 60 s le mercredi |
| [Bohm et al. 2015](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4532714/), méta-analyse, 27 études | La raideur du tendon répond à l'intensité de la charge, pas au type de contraction ; effet un peu plus grand après 12 semaines | Résumé | Charge lourde plutôt que volume pour les tendons |
| [Magnusson et al. 2010](https://research.regionh.dk/en/publications/the-pathogenesis-of-tendinopathy-balancing-the-response-to-loadin/), *Nat Rev Rheumatol* | Synthèse de collagène : pic vers 24 h, élevée environ 3 jours ; la dégradation culmine plus tôt | Résumé | 72 h entre les séances de planche, muscle-up au vendredi |
| [Miller et al. 2005](https://pubmed.ncbi.nlm.nih.gov/16002437/) | Même cinétique du collagène | Hérité, confirmé indirectement par Magnusson 2010 | Idem |
| [Rosaci et al. 2025](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12097699/), EMG de la planche | Huit muscles enregistrés ; les exercices préparatoires n'activent pas les muscles comme la planche elle-même. Valeurs par muscle non récupérées | Résumé | Contexte |
| [Méta-analyse 2025, poignets des gymnastes](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12804664/), 26 études | 53 % de douleurs de poignet chez les gymnastes adolescents ; preuves de faible certitude. Données d'adolescents, pas d'adultes | Résumé | Préparation et renforcement des poignets |

## Handstand

| Source | Ce qu'elle dit | Niveau | Utilisé pour |
|---|---|---|---|
| [Kerwin & Trewartha 2001](https://sponet.de/sponet/Record/4007028), *Med Sci Sports Exerc* | Chez les gymnastes les plus stables, c'est le couple du poignet qui corrige l'équilibre ; épaules et hanches interviennent chez les moins stables | Résumé | Consigne « corrige avec les poignets » |
| [Rohleder & Vogt 2019](https://doaj.org/article/c5fa4ef1f7b243f4962ed73ae0a6b528), *Science of Gymnastics Journal* | Enseigner explicitement la stratégie du poignet améliore le temps d'équilibre des débutants en 3 semaines | Résumé | Idem |
| Prépublication de l'Université Charles, 111 novices | La mobilité d'épaule ne prédit pas la qualité du handstand chez des novices. Non évaluée par des pairs | Secondaire | Nuance sur le « dos banane » : ne pas en faire une certitude |

## Cardio et course

| Source | Ce qu'elle dit | Niveau | Utilisé pour |
|---|---|---|---|
| [OMS 2020, Bull et al.](https://digibug.ugr.es/handle/10481/66573), *BJSM* | 150-300 min d'effort modéré ou 75-150 min d'effort soutenu par semaine ; plus est mieux | Résumé | Repère de volume |
| [Garber et al. 2011](https://digitalcommons.uri.edu/kinesiology_facpubs/137), prise de position ACSM | Effort soutenu : au moins 20 min, au moins 3 jours par semaine | Résumé | 3ᵉ course optionnelle |
| [Méta-régression 2025](https://pubmed.ncbi.nlm.nih.gov/39390310/), *Sports Medicine* | La charge d'entraînement (volume × intensité) prédit le gain de VO2max ; plus de séances par semaine, plus de mitochondries | Résumé | 3ᵉ course optionnelle |
| [Wen et al. 2019](https://pubmed.ncbi.nlm.nih.gov/30733142/), méta-analyse | Les plus gros gains de VO2max viennent d'intervalles ≥ 2 min, ≥ 15 min d'effort par séance, sur 4 à 12 semaines | Résumé | 4 × 1000 m deux semaines sur trois |
| [Helgerud et al. 2007](https://pubmed.ncbi.nlm.nih.gov/17414804/) | 4 × 4 min : environ +7 % de VO2max en 8 semaines | Hérité | Idem |
| [Mandsager et al. 2018](https://pmc.ncbi.nlm.nih.gov/articles/PMC6324439), 122 007 patients | Plus la capacité cardio est haute, plus la mortalité est basse, sans plafond observé. Étude d'observation | Résumé | Pourquoi le cardio compte |
| [Muñoz et al. 2014](https://pubmed.ncbi.nlm.nih.gov/23752040/), 30 coureurs | Polarisé +5,0 % contre +3,6 % sur 10 km : écart **non significatif** | Résumé | Correction d'une citation |
| [Silva Oliveira et al. 2024](https://link.springer.com/article/10.1007/s40279-024-02034-z), méta-analyse | Petit avantage du polarisé sur la VO2max, surtout chez les athlètes très entraînés et sur moins de 12 semaines | Résumé | Idem |
| Rosenblat et al. 2024, méta-analyse en réseau | Pas de différence globale ; les amateurs progresseraient plutôt avec une répartition pyramidale | Secondaire | Idem |
| [Schumann et al. 2022](https://pubmed.ncbi.nlm.nih.gov/34757594/), méta-analyse, 43 études | Course + musculation : ni la force maximale ni le muscle ne sont freinés ; la force explosive l'est, surtout dans la même séance | Résumé | Courses séparées, sauts sans course |
| Wilson et al. 2012, *JSCR* 26(8), méta-analyse | La course (pas le vélo) réduit hypertrophie et force ; plus de fréquence et de durée d'endurance, plus l'effet est marqué | Résumé | Garder la 3ᵉ course courte et facile |
| [Aird et al. 2018](https://pure.ul.ie/en/publications/effects-of-fasted-vs-fed-state-exercise-on-performance-and-post-e/), méta-analyse, 46 études | Manger avant améliore l'effort aérobie long, pas l'effort court | Résumé | Course et séance à jeun à 7 h |
| [Racinais et al. 2015](https://opus.lib.uts.edu.au/handle/10453/36140), consensus *BJSM* | S'acclimater à la chaleur en 1 à 2 semaines ; partir hydraté | Résumé | Courses d'été à Tel Aviv |
| [de Villarreal et al. 2009](https://pubmed.ncbi.nlm.nih.gov/19197203/), méta-analyse, 56 études | Détente : meilleurs résultats au-delà de 10 semaines, 20 séances et 50 sauts par séance | Résumé | ~65 sauts le vendredi |
| Lundberg 2022, Frandsen 2025, Llanos-Lagos 2024 | Voir `MonAppTacking.md` | Hérité | Interférence sur les jambes, progression des distances, pliométrie |

## Mobilité et souplesse

| Source | Ce qu'elle dit | Niveau | Utilisé pour |
|---|---|---|---|
| [Ingram et al. 2025](https://pubmed.ncbi.nlm.nih.gov/39614059/), méta-analyse, 189 études | Les gains de souplesse plafonnent à 4 min par séance et 10 min par semaine et par muscle ; ni l'intensité ni la fréquence ne changent le résultat | Résumé | ~8 min par semaine pour épaules et pancake |
| [Afonso et al. 2021](https://estudogeral.uc.pt/handle/10316/104612), méta-analyse, 11 essais | La musculation en amplitude complète améliore la mobilité autant que les étirements | Résumé | Exercices en amplitude complète |

## Prévention des blessures

| Source | Ce qu'elle dit | Niveau | Utilisé pour |
|---|---|---|---|
| [Harøy et al. 2019](https://search.pedro.org.au/search-results/record-detail/55148), essai en grappes, 652 footballeurs | Le Copenhagen réduit de 41 % le risque de problème d'adducteurs (prévalence 13,5 % contre 21,3 %) | Résumé | Copenhagen plank (mercredi) |
| [Cuthbert et al. 2020](https://pmc.ncbi.nlm.nih.gov/articles/PMC6942028), méta-analyse | Un petit volume de Nordic curls donne les mêmes gains de force excentrique qu'un gros | Résumé | 3 séries de Nordic suffisent |
| [van Dyk et al. 2019](https://bjsm.bmj.com/content/53/21/1362) | Les Nordic curls divisent environ par deux les blessures aux ischios | Hérité | Nordic curls |
| [Hogan et al. 2021](https://research.monash.edu/en/publications/scapular-dyskinesis-is-not-an-isolated-risk-factor-for-shoulder-i/), méta-analyse, 7 études | Mauvais placement de l'omoplate : risque relatif de blessure 1,07, non significatif. Hickey 2018 trouvait +43 % de douleurs d'épaule | Résumé | Formulation prudente sur l'équilibre poussée / tirage |
| Sommeil et blessure | Les revues se contredisent : lien non établi chez l'adulte selon une revue de 2021. Le manque de sommeil réduit bien force, puissance et endurance | Secondaire | Feu tricolore |

## Nutrition

| Source | Ce qu'elle dit | Niveau | Utilisé pour |
|---|---|---|---|
| [Helms et al. 2023](https://doi.org/10.1186/s40798-023-00651-y), 17 participants | Un surplus calorique plus grand ajoute surtout du gras, sans différence claire de muscle | Résumé | Objectif « maintien » |
| [Constantini et al. 2010](https://pubmed.ncbi.nlm.nih.gov/20818195/), 98 sportifs en Israël | Vitamine D sous 30 ng/mL : 48 % des sportifs d'extérieur, 80 % en salle | Résumé | Vitamine D seulement sur dosage |
| [ACSM 2007, Sawka et al.](https://pubmed.ncbi.nlm.nih.gov/17277604/) | Ne pas perdre plus de 2 % du poids en eau ; partir hydraté ; les besoins sont individuels | Résumé | Hydratation en extérieur |
| [Aragon & Schoenfeld 2013](https://pmc.ncbi.nlm.nih.gov/articles/PMC3577439/) | Pas de « fenêtre anabolique » de 30 min ; manger tôt après compte davantage quand on s'est entraîné à jeun | Hérité | Repas 1 dans l'heure après la séance |
| Morton 2018, Schoenfeld & Aragon 2018, Snijders 2019, ISSN 2021, Shaw 2017 | Voir `MonAppTacking.md` | Hérité | Protéines, répartition, caféine, gélatine |

## Notes de l'audit

Notes sur 10, jugement calibré sur la littérature et non mesure.

| Compétence | Audit initial | Après les changements | Ce qui plafonne |
|---|---|---|---|
| Planche | 8,5 | 9 | Aucun essai sur la planche |
| HSPU | 9 | 9 | |
| Handstand | 9 | 9,5 | |
| Muscle-up / front lever | 8 | 8,5 | Muscle-up 1 fois par semaine |
| Force haut du corps | 9 | 9 | |
| Force jambes | 7 | ~8 | Charge limitée au gilet de 10 kg |
| Hypertrophie | 8,5 | 9 | |
| Cardio / VO2max | 7,5 | 8,5-9 avec la 3ᵉ course | 4-5 sorties empiéteraient sur la planche |
| Puissance | 6,5 | 8 | |
| Mobilité | 7,5 | 9 | |
| Gainage | 8 | 9 | |
| Équilibre poussée / tirage | 9 | 9 | |
| Prévention / tendons | 8,5 | 9 | |
| Récupération | 8,5 | 8,5 | Décharge peu prouvée |
| Nutrition | 9 | 9,5 | |

## Décisions prises et leur raison

| Décision | Raison |
|---|---|
| Planche avant le HSPU le dimanche | Nunes 2021 ; la planche est l'objectif n°1 |
| Dimanche : 19 → 16 séries de poussée | Pelland 2024 ; négatives lean → tuck retirées |
| Muscle-up du mardi au vendredi | Magnusson 2010 : 48 h avant la planche au lieu de 24 h |
| Soulevé de terre unilatéral le mardi | Ischios à 2 séances par semaine, en position longue |
| Extension triceps au-dessus de la tête | Maeo 2022 |
| Copenhagen plank | Harøy 2019 ; plan latéral absent du programme |
| ~65 sauts le vendredi | de Villarreal 2009 |
| 4 × 1000 m deux semaines sur trois | Wen 2019 |
| Étirements statiques à ~8 min par semaine | Ingram 2025 |
| 3ᵉ course optionnelle le dimanche, 3 → 5 km | Garber 2011, méta-régression 2025 ; jambes fraîches, séance haut du corps |
| Gilet de 10 kg sur les exercices de force | Schoenfeld 2017 |
| Maintien calorique | Helms 2023 |
| Fenêtre alimentaire ouverte après la séance de 7 h | Aird 2018, Aragon & Schoenfeld 2013 |
