// Données des projets améliorées avec plus de détails et référentiels de compétences
const projectsData = {
    'ecommerce': {
        title: 'Application E-commerce',
        period: '2024-2025',
        description: `
            <h3>Présentation du projet</h3>
            <p>Application mobile complète de e-commerce développée avec Flutter et FastAPI, offrant une expérience utilisateur fluide et sécurisée. Cette solution permet aux utilisateurs de parcourir un catalogue de produits, de gérer leur panier et d'effectuer des paiements sécurisés.</p>
            
            <div class="challenges-section">
                <div class="challenge-card">
                    <div class="challenge-icon">🛍️</div>
                    <div class="challenge-content">
                        <h4>Expérience utilisateur</h4>
                        <p>Conception d'une interface intuitive avec animations fluides et transitions contextuelles, optimisée pour différentes tailles d'écrans et plateformes. L'application offre une navigation par gestes et une mise en page adaptative pour une utilisation confortable sur smartphone et tablette.</p>
                    </div>
                </div>
                <div class="challenge-card">
                    <div class="challenge-icon">🔒</div>
                    <div class="challenge-content">
                        <h4>Sécurité des transactions</h4>
                        <p>Implémentation d'un système de paiement multi-fournisseurs (Stripe, PayPal).</p>
                    </div>
                </div>
            </div>
            
            <h3>Fonctionnalités principales</h3>
            <ul>
                <li><strong>Système de panier</strong> : Sauvegarde des paniers et whishlist des différents produits préférés par les clients</li>
                <li><strong>Authentification sécurisée</strong> : Gestion des authentifications avec des tokens JWT</li>
                <li><strong>Suivi des commandes</strong> : historique détaillé</li>
            </ul>
            
            <h3>Architecture technique</h3>
            <div class="architecture-diagram">
                <div class="architecture-layer">
                    <h4>Frontend (Flutter)</h4>
                    <div class="layer-items">
                        <div class="layer-item">Bloc Pattern</div>
                        <div class="layer-item">Repository Pattern</div>
                    </div>
                </div>
                <div class="architecture-layer">
                    <h4>Backend (FastAPI)</h4>
                    <div class="layer-items">
                        <div class="layer-item">API REST sécurisée</div>
                        <div class="layer-item">Authentification JWT</div>
                        <div class="layer-item">Validation de données</div>
                        <div class="layer-item">Tâches asynchrones</div>
                    </div>
                </div>
                <div class="architecture-layer">
                    <h4>Persistance & Infrastructure</h4>
                    <div class="layer-items">
                        <div class="layer-item">MySQL</div>
                        <div class="layer-item">Microservices Docker</div>
                    </div>
                </div>
            </div>
            
            <h3>Méthodologie adoptée</h3>
            <p>Pour ce projet, j'ai organisé mes tâches sur Trello avec toutes la liste des fonctionnalités à implémenter et ceux qui sont déjà faites ou en cours. L'architecture a été conçue en suivant les principes de l'architecture MicroServices, en décomposant une application volumineuse en composants indépendants, chaque élément ayant ses propres responsabilités. Pour diffuser la requête d'un utilisateur unique, une application basée sur des microservices peut appeler plusieurs microservices internes pour composer sa réponse.</p>
            
            <h3>Montée en compétence</h3>
            <p>Ce projet m'a permis de développer mes compétences en développement mobile cross-platform avec Flutter et en développement backend avec FastAPI. J'ai notamment approfondi mes connaissances dans les domaines suivants :</p>
            <ul>
                <li>Gestion d'états complexes avec le pattern BLoC</li>
                <li>Implémentation d'interfaces utilisateur adaptatives</li>
                <li>Intégration de passerelles de paiement sécurisées</li>
                <li>Conception d'API asynchrones performantes avec Python et FastAPI</li>
                <li>Configuration d'un pipeline CI/CD pour le déploiement continu</li>
            </ul>
        `,
        images: [
            'assets/img/projects/ecommerce-1.png',
            'assets/img/projects/ecommerce-2.png',
            'assets/img/projects/ecommerce-3.png'
        ],
        skills: [
            'Développement mobile', 'UI/UX Design', 'Sécurité des données', 
            'API REST', 'Base de données', 'Architecture logicielle',
            'Paiements en ligne', 'Gestion de cache', 'CI/CD'
        ],
        technologies: [
            { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
            { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
            { name: 'MySQL', icon: 'https://upload.wikimedia.org/wikipedia/fr/6/62/MySQL.svg' },
            { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' }
        ],
        competences: [
            {
                code: 'C1',
                intitule: 'Adapter des applications sur un ensemble de supports',
                acquis: [
                    {
                        code: 'AC1',
                        description: 'Choisir et implémenter les architectures adaptées',
                        niveau: 'Élevé',
                        details: 'Architecture cross-platform optimisée pour iOS/Android, avec un backend centralisé et adaptations spécifiques à chaque plateforme'
                    },
                    {
                        code: 'AC3',
                        description: 'Intégrer des solutions dans un environnement de production',
                        niveau: 'Élevé',
                        details: 'Mise en place d\'un pipeline CI/CD pour le déploiement continu'
                    }
                ]
            },
            {
                code: 'C2',
                intitule: 'Analyser et optimiser des applications',
                acquis: [
                    {
                        code: 'AC3',
                        description: 'Choisir et utiliser des bibliothèques dédiées au domaine',
                        niveau: 'Élevé',
                        details: 'Intégration de bibliothèques spécialisées pour les paiements'
                    }
                ]
            }
        ]
    },
    
    'school-app': {
        title: 'Application de Visualisation Scolaire',
        period: '2024',
        description: `
            <h3>Présentation du projet</h3>
            <p>Application mobile moderne "Le Petit Écolier" développée avec Ionic et TypeScript, conçue pour faciliter la communication entre les établissements scolaires et les familles. Cette plateforme intuitive permet d'accéder aux informations sur les enseignants et consulter les actualités de l'école sur smartphone, tablette et web.</p>
            
            <div class="challenges-section">
                <div class="challenge-card">
                    <div class="challenge-icon">💾</div>
                    <div class="challenge-content">
                        <h4>Gestion de données complexes</h4>
                        <p>Implémentation d'un système de gestion de données hiérarchiques (écoles, classes, matières, enseignants).</p>
                    </div>
                </div>
                <div class="challenge-card">
                    <div class="challenge-icon">⚡</div>
                    <div class="challenge-content">
                        <h4>Optimisation multi-plateformes</h4>
                        <p>Développement d'une application fonctionnant de manière optimale sur différents appareils et sur des ordinateurs.</p>
                    </div>
                </div>
            </div>
            
            <h3>Fonctionnalités principales</h3>
            <ul>
                <li><strong>Fil d'actualités</strong> : Événements et informations importantes avec système de notifications et favoris</li>
                <li><strong>Galerie multimédia</strong> : Photos et documents partagés organisés par événement ou classe</li>
                <li><strong>Calendrier</strong> : Gestion des évenements importants grâce à un calendrier pour visulaiser les dates et la portée de l'évenement si elle est destinée à une seul classe ou toute l'école</li>
            </ul>
            
            <h3>Architecture technique</h3>
            <div class="architecture-diagram">
                <div class="architecture-layer">
                    <h4>Présentation (Ionic/Angular)</h4>
                    <div class="layer-items">
                        <div class="layer-item">Composants standalone</div>
                        <div class="layer-item">UI adaptative</div>
                        <div class="layer-item">Lazy loading</div>
                    </div>
                </div>
                <div class="architecture-layer">
                    <h4>Services & Logique</h4>
                    <div class="layer-items">
                        <div class="layer-item">Authentification</div>
                        <div class="layer-item">Gestion de cache</div>
                        <div class="layer-item">Favoris & Préférences</div>
                        <div class="layer-item">Notifications</div>
                    </div>
                </div>
            </div>
            
            <h3>Montée en compétence</h3>
            <p>Ce projet m'a permis d'approfondir mes connaissances techniques et méthodologiques dans plusieurs domaines clés :</p>
            <ul>
                <li>Maîtrise du framework Ionic et de l'architecture Angular standalone components</li>
                <li>Conception d'interfaces adaptatives avec Ionic CSS Variables et Grid</li>
                <li>Implémentation de stratégies de cache avancées avec Service Workers</li>
                <li>Optimisation des performances avec techniques de lazy loading</li>
            </ul>
        `,
        images: [
            'assets/img/projects/school-1.jpg',
            'assets/img/projects/school-2.jpg',
            'assets/img/projects/school-3.jpg'
        ],
        skills: [
            'Développement mobile', 'Interface utilisateur responsive', 
            , 'Gestion de données', 'UX Design',
            'Conception multi-utilisateurs', 'Optimisation performance'
        ],
        technologies: [
            { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
            { name: 'Ionic', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg' },
            { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' }
        ],
        competences: [
            {
                code: 'C1',
                intitule: 'Adapter des applications sur un ensemble de supports',
                acquis: [
                    {
                        code: 'AC1',
                        description: 'Choisir et implémenter les architectures adaptées',
                        niveau: 'Élevé',
                        details: 'Architecture PWA responsive avec adaptation intelligente des fonctionnalités selon le support et les capacités de l\'appareil'
                    }
                ]
            }
        ]
    },
    
    'opengl': {
        title: 'Démonstrateur OpenGL',
        period: '2025',
        description: `
            <h3>Présentation du projet</h3>
            <p>Ce démonstrateur OpenGL est une application qui permet de créer dynamiquement des primitives géométriques classiques comme des cubes, des sphères ou des cylindres et de visualiser des modèles 3D avec différents modes d'éclairage et options de rendu. Ce projet m'a permis d'approfondir mes connaissances en programmation graphique et en mathématiques 3D.</p>
            
            <div class="challenges-section">
                <div class="challenge-card">
                    <div class="challenge-icon">🔍</div>
                    <div class="challenge-content">
                        <h4>Modèles d'illumination physiquement réalistes</h4>
                        <p>Implémentation de modèles d'éclairage avancés (Phong, Blinn-Phong, PBR) pour un rendu réaliste des matériaux avec réflexion, réfraction et diffusion de la lumière adaptée aux propriétés physiques des surfaces.</p>
                    </div>
                </div>
                <div class="challenge-card">
                    <div class="challenge-icon">📐</div>
                    <div class="challenge-content">
                        <h4>Système de caméra et manipulations 3D</h4>
                        <p>Conception d'un système de caméra intuitif permettant des mouvements fluides et précis dans l'espace 3D, avec gestion des transformations mathématiques complexes et projections coordonnées pour une expérience utilisateur naturelle.</p>
                    </div>
                </div>
            </div>
            
            <h3>Fonctionnalités principales</h3>
            <ul>
                <li><strong>Génération procédurale de primitives</strong> : Création paramétrique de formes géométriques (plan, cube, cylindre, sphère, cône) avec contrôle sur les subdivisions et propriétés</li>
                <li><strong>Éclairage avancé</strong> : Multiples sources lumineuses (point, spot, directionnelle, ambiante) avec ombres dynamiques et techniques d'illumination globale</li>
                <li><strong>Interface utilisateur intuitive</strong> : Contrôles interactifs pour tous les paramètres avec ImGui et visualisation en temps réel des modifications</li>
            </ul>
            
            <h3>Architecture technique</h3>
            <div class="architecture-diagram">
                <div class="architecture-layer">
                    <h4>Interface & Contrôles</h4>
                    <div class="layer-items">
                        <div class="layer-item">ImGui UI Framework</div>
                        <div class="layer-item">Contrôleur de caméra</div>
                        <div class="layer-item">Inspecteur d'objets</div>
                    </div>
                </div>
                <div class="architecture-layer">
                    <h4>Moteur de rendu</h4>
                    <div class="layer-items">
                        <div class="layer-item">Système de matériaux</div>
                        <div class="layer-item">Modèles d'éclairage</div>
                    </div>
                </div>
                <div class="architecture-layer">
                    <h4>Système graphique de bas niveau</h4>
                    <div class="layer-items">
                        <div class="layer-item">Primitives géométriques</div>
                    </div>
                </div>
            </div>
            
            <h3>Montée en compétence</h3>
            <p>Ce projet a constitué une immersion complète dans l'univers de la programmation graphique moderne, me permettant d'acquérir des compétences spécialisées :</p>
            <ul>
                <li>Maîtrise approfondie d'OpenGL et du pipeline de rendu moderne (VBO, VAO, FBO, instancing)</li>
                <li>Expertise en développement de shaders GLSL pour les différentes étapes du pipeline graphique</li>
                <li>Conception d'interfaces utilisateur techniques avec ImGui pour des applications graphiques spécialisées</li>
                <li>Implémentation de techniques d'illumination avancées basées sur les principes physiques</li>
            </ul>
        `,
        images: [
            'assets/img/projects/opengl-1.png',
            'assets/img/projects/opengl-2.png',
            'assets/img/projects/opengl-3.png'
        ],
        skills: [
            'Programmation graphique', 'Mathématiques 3D', 'Shaders GLSL', 
             'Interface utilisateur technique', 
            'C++ avancé', 'Optimisation GPU'
        ],
        technologies: [
            { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
            { name: 'OpenGL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opengl/opengl-original.svg' },
            { name: 'ImGui', icon: 'https://i.ytimg.com/vi/nVaQuNXueFw/sddefault.jpg' },
            { name: 'GLSL', icon: 'https://i.ytimg.com/vi/uOErsQljpHs/maxresdefault.jpg' }
        ],
        competences: [
            {
                code: 'C2',
                intitule: 'Analyser et optimiser des applications',
                acquis: [
                    {
                        code: 'AC3',
                        description: 'Choisir et utiliser des bibliothèques dédiées au domaine',
                        niveau: 'Élevé',
                        details: 'Sélection et intégration efficace de bibliothèques 3D spécialisées (GLM, Assimp, ImGui, stb_image) avec adaptations personnalisées'
                    }
                ]
            },
                ]
            },
            
            'api-rest': {
                title: 'API REST',
                period: '2025',
                description: `
                    <h3>Présentation du projet</h3>
                    <p>ce projet est un service web RESTful développé avec TypeScript, Node.js et Express pour une gestion des évenements entre des utilisateurs et des administrateurs. Cette solution back-end robuste permet aux utilisateurs de gérer leurs évenements une API sécurisée.</p>
                    
                    <div class="challenges-section">
                        <div class="challenge-card">
                            <div class="challenge-icon">🔒</div>
                            <div class="challenge-content">
                                <h4>Sécurité et authentification avancée</h4>
                                <p>Mise en place d'un système d'authentification complet avec tokens JWT et refresh tokens. L'architecture inclut une gestion fine des autorisations basée sur les rôles et ressources.</p>
                            </div>
                        </div>
                    </div>
                    
                    <h3>Fonctionnalités principales</h3>
                    <ul>
                        <li><strong>API RESTful complète</strong> : Endpoints CRUD pour toutes les entités avec validation stricte</li>
                        <li><strong>Authentification sécurisée</strong> : JWT avec refresh tokens</li>
                        <li><strong>Documentation automatique</strong> : Spécification OpenAPI générée automatiquement</li>
                    </ul>
                    
                    <h3>Architecture technique</h3>
                    <div class="architecture-diagram">
                        <div class="architecture-layer">
                            <h4>Couche Présentation</h4>
                            <div class="layer-items">
                                <div class="layer-item">Contrôleurs Express</div>
                                <div class="layer-item">Middlewares JWT & RBAC</div>
                                <div class="layer-item">Validation & Sanitization</div>
                                <div class="layer-item">Documentation OpenAPI</div>
                            </div>
                        </div>
                        <div class="architecture-layer">
                            <h4>Couche Domaine</h4>
                            <div class="layer-items">
                                <div class="layer-item">Mappers DTO</div>
                                <div class="layer-item">Événements domaine</div>
                            </div>
                        </div>
                        <div class="architecture-layer">
                            <h4>Couche Infrastructure</h4>
                            <div class="layer-items">
                                <div class="layer-item">Repositories</div>
                                <div class="layer-item">ORM</div>
                            </div>
                        </div>
                    </div>
                    
                    <h3>Documentation et qualité de code</h3>
                    <p>Un accent particulier a été mis sur la qualité du code et la documentation de l'API :</p>
                    <ul>
                        <li>Documentation d'API interactive avec Swagger UI et exemples de requêtes pour les utilisateurs de l'API</li>
                        <li>Rapports de tests et de couverture automatisés avec insights sur les performances</li>
                    </ul>
                    
                    <h3>Extensions et évolutivité</h3>
                    <p>Le projet a été conçu avec une forte capacité d'évolution et d'extension :</p>
                    <ul>
                        <li>Architecture modulaire</li>
                        <li>Support pour différents types de bases de données via le pattern adapter</li>
                    </ul>
                `,
                images: [
                    'assets/img/projects/api-rest-1.jpg',
                    'assets/img/projects/api-rest-2.jpg',
                    'assets/img/projects/api-rest-3.jpg'
                ],
                skills: [
                    'Architecture REST', 'TypeScript', 'Node.js', 'Express', 
                    'JWT & Sécurité', 'Tests Unitaires & Intégration', 'Documentation API'
                ],
                technologies: [
                    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
                    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
                    { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
                    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' }
                ],
                competences: [
                    {
                        code: 'C1',
                        intitule: 'Adapter des applications sur un ensemble de supports',
                        acquis: [
                            {
                                code: 'AC1',
                                description: 'Choisir et implémenter les architectures adaptées',
                                niveau: 'Élevé',
                                details: 'Conception d\'une architecture REST évolutive avec séparation des couches, découplage fort et adaptabilité aux différents environnements d\'exécution'
                            },
                            {
                                code: 'AC2',
                                description: 'Mettre en œuvre des solutions inter-platformes',
                                niveau: 'Élevé',
                                details: 'Création d\'une API universelle compatible avec tout type de client (web, mobile, desktop) et environnement d\'hébergement'
                            }
                        ]
                    },
                    {
                        code: 'C2',
                        intitule: 'Analyser et optimiser des applications',
                        acquis: [
                            {
                                code: 'AC3',
                                description: 'Choisir et utiliser des bibliothèques dédiées au domaine',
                                niveau: 'Élevé',
                                details: 'Sélection pertinente et intégration optimale de bibliothèques spécialisées pour l\'authentification, la validation, la persistence et la mise en cache'
                            }
                        ]
                    },
                    {
                        code: 'C6',
                        intitule: 'Manager une équipe informatique',
                        acquis: [
                            {
                                code: 'AC1',
                                description: 'Organiser et partager une veille numérique',
                                niveau: 'Élevé',
                                details: 'Création d\'un système de documentation évolutif avec génération automatique et publication régulière de bonnes pratiques REST'
                            }
                        ]
                    }
                ]
            },
            
            'budget': {
                title: 'Gestionnaire de Budget',
                period: '2023-2024',
                description: `
                    <h3>Présentation du projet</h3>
                    <p>Ce projet est une application desktop complète développée avec C++ et Qt, offrant aux utilisateurs une solution robuste pour gérer leurs budgets personnelles. Cette application permet de suivre les dépenses et revenus, de visualiser la répartition du budget à travers des graphiques interactifs et d'analyser les habitudes financières.</p>
                    
                    <div class="challenges-section">
                        <div class="challenge-card">
                            <div class="challenge-icon">📊</div>
                            <div class="challenge-content">
                                <h4>Visualisations de données interactives</h4>
                                <p>Développement d'un système de visualisation dynamique permettant d'explorer les données financières sous différents angles (temporel, catégoriel, comparatif).</p>
                            </div>
                        </div>
                    </div>
                    
                    <h3>Fonctionnalités principales</h3>
                    <ul>
                        <li><strong>Suivi financier complet</strong> : Enregistrement et catégorisation des dépenses</li>
                        <li><strong>Budgétisation intelligente</strong> : Création de budgets par catégorie avec alertes de dépassement et suggestions d'optimisation basées sur l'historique</li>
                        <li><strong>Reporting financier</strong> : Génération de rapports périodiques (mensuels, trimestriels, annuels)</li>
                        <li><strong>Import/Export flexible</strong> : Support de l'exportation des données dans le format CSV</li>
                    </ul>
                    
                    <h3>Architecture technique</h3>
                    <div class="architecture-diagram">
                        <div class="architecture-layer">
                            <h4>Interface utilisateur (Qt)</h4>
                            <div class="layer-items">
                                <div class="layer-item">Vues & Widgets</div>
                                <div class="layer-item">Charts & Graphs</div>
                                <div class="layer-item">Thèmes & Styles</div>
                            </div>
                        </div>
                        <div class="architecture-layer">
                            <h4>Logique métier</h4>
                            <div class="layer-items">
                                <div class="layer-item">Contrôleurs</div>
                                <div class="layer-item">Gestionnaire de budgets</div>
                                <div class="layer-item">Moteur d'analyse</div>
                                <div class="layer-item">Service d'exportation</div>
                            </div>
                        </div>
                        <div class="architecture-layer">
                            <h4>Données & Persistance</h4>
                            <div class="layer-items">
                                <div class="layer-item">Modèles de données</div>
                                <div class="layer-item">SQLite Engine</div>
                                <div class="layer-item">Adaptateurs d'import</div>
                                <div class="layer-item">Gestion de sauvegardes</div>
                            </div>
                        </div>
                    </div>
                    
                    <h3>Méthodologie adoptée</h3>
                    <p>Pour ce projet de groupe, on devait adopter une approche agile en utilisant JIRA pour se répartir les tâches à faire et le suivi de projet. On a aussi fait des stories pour détailler les fonctionnalités attendu par l'utilisateur et la manière dont on devait s'y prendre pour implémenter cette fonctonnalité.</p>
                    
                    <h3>Montée en compétence</h3>
                    <p>Ce projet m'a permis de développer des compétences techniques et fonctionnelles diverses :</p>
                    <ul>
                        <li>Maîtrise du framework Qt pour le développement d'interfaces desktop riches et réactives</li>
                        <li>Conception et implémentation de visualisations de données complexes et interactives</li>
                        <li>Compréhension approfondie des problématiques de gestion financière personnelle</li>
                    </ul>
                `,
                images: [
                    'assets/img/projects/budget-1.jpg',
                    'assets/img/projects/budget-2.jpg',
                    'assets/img/projects/budget-3.jpg'
                ],
                skills: [
                    'Développement desktop', 'Visualisation de données', 
                    'Conception d\'interface', 'Gestion de données', 
                    'Expérience utilisateur', 'C++ avancé', 'Qt Framework',
                    'SQLite'
                ],
                technologies: [
                    { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
                    { name: 'Qt', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/qt/qt-original.svg' },
                    { name: 'SQLite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg' },
                    { name: 'JSON', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
                    { name: 'QtCharts', icon: 'https://doc.qt.io/qt-6/images/examples_chartthemes_light.png' }
                ],
                competences: [
                    {
                        code: 'C1',
                        intitule: 'Adapter des applications sur un ensemble de supports',
                        acquis: [
                            {
                                code: 'AC2',
                                description: 'Mettre en œuvre des solutions inter-plateformes',
                                niveau: 'Intermédiaire',
                                details: 'Utilisation des capacités cross-platform de Qt pour garantir la compatibilité avec Windows, macOS et Linux sans modification du code'
                            }
                        ]
                    },
                    {
                        code: 'C2',
                        intitule: 'Analyser et optimiser des applications',
                        acquis: [
                            {
                                code: 'AC3',
                                description: 'Choisir et utiliser des bibliothèques dédiées au domaine',
                                niveau: 'Élevé',
                                details: 'Sélection et personnalisation de bibliothèques spécialisées pour la visualisation de données financières et le traitement des formats bancaires'
                            }
                        ]
                    }
                ]
            }
        };

// Fonction pour afficher les détails d'un projet
function showProjectDetails(projectId) {
    const project = projectsData[projectId];
    if (!project) return;
    
    const modal = document.getElementById('project-details-modal');
    const container = document.getElementById('project-details-container');
    
    // Générer le contenu HTML pour les détails du projet
    let html = `
        <div class="project-detail">
            <div class="project-header">
                <h2>${project.title}</h2>
                <div class="project-period">${project.period}</div>
            </div>
            
            <div class="project-content">
                <div class="project-description">
                    ${project.description}
                    
                    <div class="competences-section">
                        <h3>Référentiel de compétences</h3>
                        <div class="competences-grid">
                            ${project.competences.map(comp => `
                                <div class="competence-card">
                                    <div class="competence-header">
                                        <h4>${comp.code} - ${comp.intitule}</h4>
                                    </div>
                                    <div class="competence-details">
                                        ${comp.acquis.map(ac => `
                                            <div class="competence-item">
                                                <div class="competence-code">${ac.code}</div>
                                                <div class="competence-desc">${ac.description}</div>
                                                <div class="competence-niveau">
                                                    <span class="niveau-badge ${ac.niveau.toLowerCase()}">${ac.niveau}</span>
                                                </div>
                                                <div class="competence-application">${ac.details}</div>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="tech-used">
                        <h3>Technologies utilisées</h3>
                        <div class="tech-icons">
                            ${project.technologies.map(tech => `
                                <div class="tech-icon">
                                    <img src="${tech.icon}" alt="${tech.name}">
                                    <span>${tech.name}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="skills-gained">
                        <h3>Compétences techniques</h3>
                        ${project.skills.map(skill => `
                            <div class="skill-tag">${skill}</div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="project-image-carousel">
                    <div class="carousel-container" id="carousel-${projectId}">
                        ${project.images.map((img, index) => `
                            <div class="carousel-slide">
                                <img src="${img}" alt="${project.title} - Image ${index + 1}">
                            </div>
                        `).join('')}
                    </div>
                    
                    <div class="carousel-navigation">
                        <button class="carousel-btn carousel-prev" onclick="moveCarousel('${projectId}', -1)">&#10094;</button>
                        <button class="carousel-btn carousel-next" onclick="moveCarousel('${projectId}', 1)">&#10095;</button>
                    </div>
                    
                    <div class="carousel-controls">
                        ${project.images.map((_, index) => `
                            <div class="carousel-dot ${index === 0 ? 'active' : ''}" onclick="goToSlide('${projectId}', ${index})"></div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
    
    container.innerHTML = html;
    modal.style.display = 'block';
    
    // Activer la fermeture de la fenêtre modale
    const closeBtn = document.querySelector('.close-modal');
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    };
    
    // Fermer la fenêtre modale si on clique en dehors du contenu
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
    
    // Gérer la touche Échap pour fermer la modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });
}

// Variables pour le carrousel
let carouselPositions = {};

// Fonction pour déplacer le carrousel
function moveCarousel(projectId, direction) {
    const carousel = document.getElementById(`carousel-${projectId}`);
    if (!carousel) return;
    
    const slides = carousel.querySelectorAll('.carousel-slide');
    if (!slides.length) return;
    
    // Initialiser la position si nécessaire
    if (carouselPositions[projectId] === undefined) {
        carouselPositions[projectId] = 0;
    }
    
    // Calculer la nouvelle position
    carouselPositions[projectId] += direction;
    
    // Boucler si nécessaire
    if (carouselPositions[projectId] < 0) {
        carouselPositions[projectId] = slides.length - 1;
    } else if (carouselPositions[projectId] >= slides.length) {
        carouselPositions[projectId] = 0;
    }
    
    // Mettre à jour l'affichage
    updateCarousel(projectId);
}

// Fonction pour aller à une diapositive spécifique
function goToSlide(projectId, slideIndex) {
    carouselPositions[projectId] = slideIndex;
    updateCarousel(projectId);
}

// Fonction pour mettre à jour l'affichage du carrousel
function updateCarousel(projectId) {
    const carousel = document.getElementById(`carousel-${projectId}`);
    const dots = document.querySelectorAll('.carousel-controls .carousel-dot');
    const position = carouselPositions[projectId];
    
    // Déplacer le carrousel
    if (carousel) {
        carousel.style.transform = `translateX(-${position * 100}%)`;
        
        // Mettre à jour les points de navigation
        dots.forEach((dot, index) => {
            if (index === position) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }
}

// Fonction pour s'assurer que les images sont chargées
function preloadImages(projectId) {
    const project = projectsData[projectId];
    if (!project || !project.images) return;
    
    project.images.forEach(imgSrc => {
        const img = new Image();
        img.src = imgSrc;
    });
}

// Précharger les images de tous les projets
document.addEventListener('DOMContentLoaded', () => {
    Object.keys(projectsData).forEach(projectId => {
        preloadImages(projectId);
    });
});