// dossiers.js — the two archive entries and the content of their folders.
// No DOM here: the navigation renders the two entries, the dossier view renders
// the pages. Long documents are split across pages; the viewer reflows any page
// that would overflow into a continuation sheet.

export const MAIN_ITEMS = [
  {
    id: "pantheon",
    label: "PANTHÉON",
    desc: "PLUS QU'UNE ORGANISATION, UNE DOMINATION.",
  },
  {
    id: "burgershot",
    label: "BURGER SHOT",
    desc: "RESTAURATION RAPIDE — REPRISE, RELANCE COMMERCIALE ET DÉVELOPPEMENT.",
  },
];

const PANTHEON_PAGES = [
  {
    title: "FICHE D'IDENTITÉ",
    kicker: "DOSSIER DE PRÉSENTATION — ORGANISATION PARAMILITAIRE ET CRIMINELLE",
    stamp: "RESTREINT",
    doc: true,
    fields: [
      ["ORGANISATION", "LE PANTHÉON"],
      ["CLASSIFICATION", "ORGANISATION ILLÉGALE STRUCTURÉE"],
      ["COUVERTURE", "SOCIÉTÉ PRIVÉE DE SÉCURITÉ ET DE PROTECTION"],
      ["TERRITOIRES", "LOS SANTOS & CAYO PERICO"],
      ["ORIENTATION", "PARAMILITAIRE, STRATÉGIQUE, CRIMINELLE ET POLITIQUE"],
      [
        "TYPE",
        "GROUPE À HIÉRARCHIE STRICTE, OPÉRANT LÉGALEMENT EN APPARENCE ET CLANDESTINEMENT DANS L'OMBRE",
      ],
    ],
    note: "Dossier de présentation d'une organisation paramilitaire et criminelle. Diffusion restreinte au Conseil.",
  },
  {
    title: "PRÉSENTATION GÉNÉRALE",
    kicker: "SECTION 01 — PRÉSENTATION GÉNÉRALE",
    stamp: "CONFIDENTIEL",
    doc: true,
    blocks: [
      {
        type: "p",
        text: "Le Panthéon est une organisation structurée autour d'un principe simple : le véritable pouvoir n'appartient pas nécessairement à ceux qui gouvernent, mais à ceux qui possèdent les moyens de les faire tomber.",
      },
      {
        type: "p",
        text: "Officiellement, Le Panthéon se présente comme une société privée de sécurité spécialisée dans la protection rapprochée, la sécurisation de sites sensibles, l'escorte de convois et la gestion de situations à haut risque. Son image repose sur le professionnalisme, la discipline, la discrétion et une organisation interne particulièrement rigoureuse.",
      },
      {
        type: "p",
        text: "Derrière cette façade respectable se dissimule cependant une structure criminelle paramilitaire disposant de ses propres réseaux, de ses ressources et de ses ambitions.",
      },
      {
        type: "p",
        text: "Le Panthéon ne cherche pas simplement à accumuler de l'argent ou à imposer son nom dans le milieu criminel. Son ambition est bien plus grande : devenir une puissance autonome capable d'influencer, de contrôler, puis de renverser les structures de pouvoir existantes.",
      },
      {
        type: "p",
        text: "Son projet à long terme consiste à établir une domination politique et stratégique sur Los Santos et Cayo Perico, jusqu'à faire de ces territoires les fondations d'un nouvel ordre contrôlé par l'organisation.",
      },
      {
        type: "p",
        text: "Le Panthéon ne veut pas être un simple gang. Il veut devenir une institution parallèle.",
      },
    ],
  },
  {
    title: "IDENTITÉ & PHILOSOPHIE",
    kicker: "SECTION 02 — IDENTITÉ ET PHILOSOPHIE",
    stamp: "CONFIDENTIEL",
    doc: true,
    blocks: [
      {
        type: "p",
        text: "Le nom « Le Panthéon » représente l'idée d'un cercle restreint d'individus qui ne reconnaissent leur autorité qu'à travers la force, la compétence, la loyauté et la capacité à prendre des décisions difficiles.",
      },
      {
        type: "p",
        text: "L'organisation repose sur quatre principes fondamentaux :",
      },
      {
        type: "lead",
        lead: "La discipline.",
        text: "Chaque membre représente l'image et les intérêts du Panthéon. L'indiscipline répétée, les initiatives incontrôlées et les comportements susceptibles de compromettre l'organisation sont considérés comme des fautes graves.",
      },
      {
        type: "lead",
        lead: "La loyauté.",
        text: "L'appartenance au Panthéon dépasse les intérêts personnels. Les membres doivent préserver la cohésion du groupe et respecter la hiérarchie établie.",
      },
      {
        type: "lead",
        lead: "La discrétion.",
        text: "L'organisation ne cherche pas systématiquement à être reconnue comme responsable de ses opérations. Sa couverture légale et ses relations extérieures constituent des éléments essentiels de son identité.",
      },
      {
        type: "lead",
        lead: "Le pouvoir.",
        text: "L'argent, les armes, l'information et les alliances sont considérés comme des moyens d'atteindre un objectif supérieur : l'indépendance et la domination territoriale.",
      },
      { type: "p", text: "La philosophie du Panthéon est la suivante :" },
      {
        type: "quote",
        text: "Nous ne cherchons pas à régner dans la lumière. Nous cherchons à décider de ce qui s'y déroule.",
      },
    ],
  },
  {
    title: "LA FAÇADE LÉGALE",
    kicker: "SECTION 03 — SOCIÉTÉ DE SÉCURITÉ PRIVÉE",
    stamp: "RESTREINT",
    doc: true,
    blocks: [
      {
        type: "p",
        text: "La société de sécurité privée constitue le visage public du Panthéon.",
      },
      {
        type: "p",
        text: "Elle sert à donner une identité professionnelle à ses membres, à développer des relations avec les entreprises et les personnalités influentes, et à créer des opportunités de jeu légal en dehors des activités criminelles.",
      },
      { type: "p", text: "Ses prestations officielles peuvent comprendre :" },
      {
        type: "bullets",
        items: [
          "Protection rapprochée de personnalités et de dirigeants.",
          "Sécurisation d'événements privés et professionnels.",
          "Surveillance de bâtiments, d'entrepôts et de propriétés.",
          "Escorte de véhicules et de convois.",
          "Transport sécurisé de marchandises déclarées.",
          "Conseil en gestion des risques.",
          "Recherche de solutions lors de conflits commerciaux.",
          "Recrutement d'agents de sécurité et formation interne.",
        ],
      },
      {
        type: "p",
        text: "Cette activité permet au Panthéon de développer des relations avec les entreprises, les propriétaires de commerces, les personnalités influentes et certains acteurs institutionnels.",
      },
      {
        type: "p",
        text: "La façade légale ne doit pas être perçue comme une simple excuse scénaristique. Elle constitue une véritable branche RP, avec des contrats, des rendez-vous, des clients, des employés et des conséquences sur la réputation de l'organisation.",
      },
    ],
  },
  {
    title: "ACTIVITÉS CLANDESTINES",
    kicker: "SECTION 04 — PRESTATIONS ILLÉGALES",
    stamp: "CONFIDENTIEL",
    doc: true,
    blocks: [
      {
        type: "p",
        text: "Derrière son image officielle, Le Panthéon propose des services illégaux à une clientèle sélectionnée.",
      },
      {
        type: "p",
        text: "L'organisation privilégie les prestations rémunérées, les accords négociés et les relations durables plutôt que les violences gratuites. Chaque contrat représente une opportunité de gagner de l'argent, de développer son réseau ou d'accroître son influence.",
      },
      { type: "sub", text: "4.1 — TRAFIC ET VENTE D'ARMES" },
      {
        type: "p",
        text: "Le Panthéon souhaite développer une branche spécialisée dans le commerce clandestin d'armes.",
      },
      {
        type: "p",
        text: "Dans le cadre du serveur, cette activité peut prendre la forme de négociations avec des fournisseurs RP, de transactions entre organisations, de commandes spécifiques et de conflits liés aux dettes ou aux marchandises.",
      },
      { type: "p", text: "Les possibilités de jeu comprennent :" },
      {
        type: "bullets",
        items: [
          "Négociation de commandes avec des groupes intéressés.",
          "Vente d'armes et de matériel autorisés par les règles du serveur.",
          "Gestion de litiges commerciaux liés aux transactions.",
          "Mise en place d'accords entre fournisseurs et acheteurs.",
          "Développement de relations avec d'autres organisations criminelles.",
          "Concurrence avec des groupes cherchant à contrôler le même marché.",
        ],
      },
      {
        type: "p",
        text: "Le trafic d'armes constitue une source de revenus importante, mais également un risque permanent : chaque transaction peut entraîner des rivalités, des trahisons, des enquêtes ou des représailles.",
      },
    ],
  },
  {
    title: "LIVRAISON DE CIBLES",
    kicker: "SECTION 04.2 — CONTRATS SENSIBLES",
    stamp: "CONFIDENTIEL",
    doc: true,
    blocks: [
      {
        type: "p",
        text: "Le Panthéon propose des contrats de livraison de cibles dans le cadre du RP criminel.",
      },
      {
        type: "p",
        text: "Selon les règles du serveur et les accords conclus entre les joueurs, une commande peut concerner la remise d'un individu recherché par un client, le transfert d'un prisonnier RP ou la livraison d'une cible à un lieu convenu dans le cadre d'un scénario.",
      },
      {
        type: "p",
        text: "Chaque contrat doit reposer sur une interaction RP identifiable, avec un commanditaire, des conditions, une rémunération et des conséquences possibles.",
      },
      {
        type: "p",
        text: "Ces prestations peuvent créer des intrigues autour des enlèvements scénarisés, des demandes de rançon, des échanges de prisonniers, des négociations et des conflits entre organisations.",
      },
      {
        type: "p",
        text: "Le Panthéon cherche à être reconnu comme un intermédiaire capable de prendre en charge les contrats sensibles que d'autres groupes ne souhaitent pas assumer eux-mêmes.",
      },
    ],
  },
  {
    title: "TRANSPORT CLANDESTIN",
    kicker: "SECTION 04.3 — LIVRAISON DE COLIS",
    stamp: "CONFIDENTIEL",
    doc: true,
    blocks: [
      {
        type: "p",
        text: "L'organisation propose également des services de transport et de livraison de colis pour une clientèle criminelle.",
      },
      {
        type: "p",
        text: "Les contrats peuvent concerner des marchandises illégales, des objets de valeur, des documents compromettants ou d'autres éléments définis par les mécaniques du serveur.",
      },
      { type: "p", text: "Cette activité ouvre la porte à de nombreuses scènes :" },
      {
        type: "bullets",
        items: [
          "Prise de commande auprès d'un client.",
          "Négociation du prix et des conditions.",
          "Organisation d'un rendez-vous de remise.",
          "Livraison sous contrat.",
          "Gestion des retards, des litiges et des marchandises perdues.",
          "Conflits entre le commanditaire et le destinataire.",
          "Missions d'interception ou de récupération dans le cadre d'un scénario.",
        ],
      },
      {
        type: "p",
        text: "Le service doit être pensé comme une activité RP à part entière, et non comme une simple transaction automatisée.",
      },
    ],
  },
  {
    title: "NÉGOCIATIONS",
    kicker: "SECTION 04.4 / 04.5 — MÉDIATION ET PRESTATIONS",
    stamp: "CONFIDENTIEL",
    doc: true,
    blocks: [
      { type: "sub", text: "4.4 — NÉGOCIATIONS ET MÉDIATION CRIMINELLE" },
      {
        type: "p",
        text: "Le Panthéon peut intervenir comme intermédiaire entre des individus ou des organisations qui ne souhaitent pas communiquer directement.",
      },
      { type: "p", text: "Ses membres peuvent être sollicités pour :" },
      {
        type: "bullets",
        items: [
          "Négocier une trêve entre deux groupes.",
          "Organiser des échanges de marchandises ou de prisonniers RP.",
          "Résoudre des conflits liés à des dettes.",
          "Encadrer des réunions entre organisations.",
          "Négocier des accords commerciaux.",
          "Servir d'intermédiaire lors de demandes de rançon.",
          "Organiser des rencontres confidentielles entre commanditaires et prestataires.",
        ],
      },
      {
        type: "p",
        text: "La neutralité du Panthéon n'est jamais garantie. Une négociation peut être une véritable tentative de réconciliation, un contrat rémunéré ou une occasion d'obtenir des informations et de développer de nouvelles alliances.",
      },
      { type: "sub", text: "4.5 — PRESTATIONS CRIMINELLES COMPLÉMENTAIRES" },
      {
        type: "p",
        text: "Selon les règles du serveur et les possibilités offertes par les scripts, Le Panthéon pourra également proposer :",
      },
      {
        type: "bullets",
        items: [
          "La récupération de marchandises contestées.",
          "L'escorte de personnalités du milieu criminel.",
          "La surveillance RP d'individus ou de propriétés.",
          "La récupération d'objets ou de véhicules dans le cadre de contrats scénarisés.",
          "L'organisation de rencontres entre commanditaires.",
          "Le règlement négocié de conflits.",
          "La mise à disposition de personnel pour des opérations RP autorisées.",
        ],
      },
      {
        type: "p",
        text: "Chaque prestation doit donner lieu à des interactions, des décisions et des conséquences. L'objectif est de faire du Panthéon un prestataire recherché par les autres groupes, et non une organisation qui impose systématiquement le conflit.",
      },
    ],
  },
  {
    title: "OBJECTIF STRATÉGIQUE",
    kicker: "SECTION 05 — LOS SANTOS ET CAYO PERICO",
    stamp: "SECRET",
    doc: true,
    blocks: [
      {
        type: "p",
        text: "L'ambition finale du Panthéon dépasse largement les intérêts habituels d'une organisation criminelle.",
      },
      {
        type: "p",
        text: "Ses dirigeants considèrent que Los Santos et Cayo Perico représentent deux espaces complémentaires.",
      },
      {
        type: "p",
        text: "Los Santos constitue le centre économique, politique et institutionnel de leur projet. Cayo Perico représente un territoire insulaire dont le contrôle pourrait offrir de nouvelles possibilités de développement RP, d'alliances et de rivalités.",
      },
      {
        type: "p",
        text: "L'organisation entend progressivement devenir suffisamment influente pour remettre en question les autorités en place.",
      },
      { type: "sub", text: "5.1 — LOS SANTOS : L'INFLUENCE AVANT LA DOMINATION" },
      {
        type: "p",
        text: "Le Panthéon souhaite s'imposer progressivement dans la ville.",
      },
      {
        type: "p",
        text: "Son ambition consiste à développer une présence économique, à établir des relations avec les acteurs importants et à devenir un interlocuteur incontournable pour certaines organisations criminelles.",
      },
      {
        type: "p",
        text: "À long terme, ses dirigeants envisagent de remettre en cause l'autorité des institutions existantes et de provoquer un changement radical de pouvoir.",
      },
      {
        type: "p",
        text: "Ce projet de coup d'État constitue un objectif scénaristique de long terme. Il ne signifie pas que l'organisation contrôle déjà la ville, ni que son succès est garanti.",
      },
      {
        type: "p",
        text: "La progression doit dépendre des actions des joueurs, des réactions des forces de l'ordre, des alliances conclues et des décisions du staff.",
      },
      { type: "sub", text: "5.2 — CAYO PERICO : L'AMBITION TERRITORIALE" },
      {
        type: "p",
        text: "Cayo Perico représente le second objectif majeur du Panthéon.",
      },
      {
        type: "p",
        text: "L'organisation souhaite y développer une influence suffisamment importante pour contester les pouvoirs locaux et tenter d'établir sa propre autorité.",
      },
      {
        type: "p",
        text: "Ce projet pourrait se traduire par des négociations avec les acteurs présents sur l'île, des conflits territoriaux, des accords commerciaux, des opérations RP et des événements impliquant plusieurs organisations.",
      },
      {
        type: "p",
        text: "Le contrôle de Cayo Perico ne doit pas être considéré comme acquis. Il constitue un enjeu de campagne qui peut évoluer selon les rapports de force et les décisions prises par les joueurs.",
      },
    ],
  },
  {
    title: "LE COUP D'ÉTAT",
    kicker: "SECTION 05.3 — FINALITÉ RP",
    stamp: "SECRET",
    doc: true,
    blocks: [
      {
        type: "p",
        text: "Le coup d'État envisagé par Le Panthéon représente l'aboutissement potentiel de son évolution.",
      },
      {
        type: "p",
        text: "Il ne s'agit pas d'une simple prise de territoire par la force, mais d'un événement majeur susceptible de modifier durablement l'équilibre du serveur.",
      },
      { type: "p", text: "Plusieurs issues sont possibles :" },
      {
        type: "bullets",
        items: [
          "Réussite partielle, avec une influence accrue de l'organisation.",
          "Échec du projet et démantèlement d'une partie du réseau.",
          "Trahison interne compromettant les ambitions du groupe.",
          "Intervention d'organisations rivales ou des forces de l'ordre.",
          "Négociation d'un nouvel équilibre politique.",
          "Division du Panthéon entre partisans de la conquête et défenseurs de la discrétion.",
        ],
      },
      {
        type: "p",
        text: "Le projet doit être soumis au staff et construit avec lui afin de préserver le fair-play, la cohérence du lore et les possibilités de réponse des autres joueurs.",
      },
    ],
  },
  {
    title: "ORGANISATION INTERNE",
    kicker: "SECTION 06 — HIÉRARCHIE ET BRANCHES",
    stamp: "CONFIDENTIEL",
    doc: true,
    blocks: [
      {
        type: "p",
        text: "Le Panthéon fonctionne selon une structure hiérarchique inspirée des organisations paramilitaires et des sociétés privées de sécurité.",
      },
      { type: "sub", text: "6.1 — LE FONDATEUR : DIRECTION SUPRÊME" },
      {
        type: "p",
        text: "Le fondateur définit la vision générale de l'organisation, valide les grandes orientations et représente Le Panthéon auprès des interlocuteurs importants.",
      },
      {
        type: "p",
        text: "Il supervise les différentes branches et conserve l'autorité sur les décisions stratégiques.",
      },
      { type: "sub", text: "6.2 — LE CONSEIL : DIRECTION ET COORDINATION" },
      {
        type: "p",
        text: "Le Conseil réunit les membres de confiance chargés d'assister la direction.",
      },
      { type: "p", text: "Ses responsabilités peuvent comprendre :" },
      {
        type: "bullets",
        items: [
          "La validation des contrats importants.",
          "La gestion des ressources communes.",
          "La résolution des conflits internes.",
          "Le suivi des relations avec les autres groupes.",
          "La coordination des branches légales et clandestines.",
          "La préparation des événements RP majeurs.",
        ],
      },
      { type: "sub", text: "6.3 — LES RESPONSABLES DE BRANCHE" },
      {
        type: "p",
        text: "Chaque branche possède un responsable chargé de son fonctionnement quotidien. Les postes envisagés sont :",
      },
      {
        type: "bullets",
        items: [
          "Directeur des opérations légales : gestion des contrats de sécurité et des clients.",
          "Responsable des contrats clandestins : réception et suivi des commandes illégales.",
          "Responsable des relations extérieures : négociations, alliances et médiation.",
          "Responsable logistique : gestion RP des véhicules, équipements et marchandises.",
          "Responsable du recrutement : intégration et suivi des nouveaux membres.",
        ],
      },
      {
        type: "p",
        text: "Ces fonctions peuvent être cumulées lorsque les effectifs sont réduits.",
      },
      { type: "sub", text: "6.4 — LES OPÉRATEURS" },
      {
        type: "p",
        text: "Les opérateurs constituent le noyau actif du Panthéon.",
      },
      {
        type: "p",
        text: "Ils assurent les prestations de sécurité, les missions contractuelles, les escortes, les livraisons et les opérations RP validées par leur hiérarchie.",
      },
      { type: "sub", text: "6.5 — LES RECRUES" },
      {
        type: "p",
        text: "Les recrues découvrent progressivement les règles, les valeurs et le fonctionnement de l'organisation.",
      },
      {
        type: "p",
        text: "Leur intégration repose sur le comportement RP, la fiabilité, la capacité à jouer en équipe et le respect des consignes.",
      },
      {
        type: "p",
        text: "La progression hiérarchique doit être méritée et liée à l'investissement du joueur plutôt qu'à son ancienneté seule.",
      },
    ],
  },
  {
    title: "RECRUTEMENT",
    kicker: "SECTION 07 — ADMISSION ET INTÉGRATION",
    stamp: "RESTREINT",
    doc: true,
    blocks: [
      {
        type: "p",
        text: "Le Panthéon recherche des profils capables de participer à un RP sérieux, cohérent et durable.",
      },
      { type: "p", text: "Les critères privilégiés sont :" },
      {
        type: "bullets",
        items: [
          "Une bonne maîtrise du règlement du serveur.",
          "Une attitude mature et respectueuse.",
          "La capacité à interpréter un personnage crédible.",
          "Le respect de la hiérarchie RP.",
          "La discrétion et la fiabilité.",
          "La capacité à participer à des scènes de négociation comme à des scènes de tension.",
          "La volonté de développer des relations avec d'autres joueurs plutôt que de rechercher uniquement les affrontements.",
        ],
      },
      {
        type: "p",
        text: "Le recrutement peut se dérouler en plusieurs étapes : prise de contact, entretien RP, période d'observation et validation par un responsable.",
      },
      {
        type: "p",
        text: "L'organisation ne recherche pas nécessairement les joueurs les plus expérimentés au combat. Elle privilégie les personnes capables de contribuer à des histoires, de tenir un rôle sur la durée et d'accepter les conséquences de leurs décisions.",
      },
    ],
  },
  {
    title: "RELATIONS EXTÉRIEURES",
    kicker: "SECTION 08 — PARTENAIRES, ALLIÉS ET RIVAUX",
    stamp: "CONFIDENTIEL",
    doc: true,
    blocks: [
      {
        type: "p",
        text: "Le Panthéon n'a pas vocation à entrer immédiatement en guerre contre tous les groupes présents en ville.",
      },
      {
        type: "p",
        text: "Son développement repose sur une politique relationnelle flexible.",
      },
      {
        type: "lead",
        lead: "Les partenaires commerciaux :",
        text: "organisations pouvant solliciter ses prestations, conclure des accords ou participer à des échanges.",
      },
      {
        type: "lead",
        lead: "Les alliés :",
        text: "groupes partageant temporairement certains intérêts et pouvant contribuer à des intrigues communes.",
      },
      {
        type: "lead",
        lead: "Les concurrents :",
        text: "organisations cherchant à contrôler les mêmes marchés ou à attirer les mêmes clients.",
      },
      {
        type: "lead",
        lead: "Les adversaires :",
        text: "groupes dont les intérêts entrent directement en conflit avec ceux du Panthéon.",
      },
      {
        type: "lead",
        lead: "Les institutions :",
        text: "forces de l'ordre, administrations et acteurs légaux susceptibles de contracter avec sa façade officielle ou de s'opposer à ses activités clandestines.",
      },
      {
        type: "p",
        text: "Les alliances ne sont jamais considérées comme définitives. Elles peuvent évoluer selon les contrats, les événements, les dettes et les choix des personnages.",
      },
    ],
  },
  {
    title: "IMAGE PUBLIQUE",
    kicker: "SECTION 09 — IDENTITÉ VISUELLE",
    stamp: "RESTREINT",
    doc: true,
    blocks: [
      {
        type: "p",
        text: "Le Panthéon doit présenter deux identités complémentaires.",
      },
      { type: "sub", text: "IDENTITÉ OFFICIELLE" },
      {
        type: "p",
        text: "Une apparence professionnelle, sobre et crédible, associée à une entreprise de sécurité privée.",
      },
      {
        type: "p",
        text: "Les éléments envisageables comprennent des costumes sombres, des tenues professionnelles, des véhicules adaptés à la protection et une communication commerciale discrète.",
      },
      { type: "sub", text: "IDENTITÉ CLANDESTINE" },
      {
        type: "p",
        text: "Une identité plus austère, inspirée des structures paramilitaires fictives.",
      },
      {
        type: "p",
        text: "Les éléments envisageables comprennent des tenues tactiques adaptées au lore du serveur, un emblème propre au groupe, des véhicules réservés aux scènes concernées et des codes internes permettant de renforcer l'identité collective.",
      },
      {
        type: "p",
        text: "L'image du Panthéon doit inspirer la rigueur et le contrôle plutôt qu'une violence ostentatoire permanente.",
      },
    ],
  },
  {
    title: "ÉCONOMIE & CONTRATS",
    kicker: "SECTION 10 — MODÈLE ÉCONOMIQUE",
    stamp: "CONFIDENTIEL",
    doc: true,
    blocks: [
      {
        type: "p",
        text: "Le modèle économique du Panthéon repose sur plusieurs sources de revenus RP :",
      },
      {
        type: "bullets",
        items: [
          "Contrats de sécurité privée.",
          "Protection rapprochée.",
          "Escorte et transport de marchandises.",
          "Prestations de négociation et de médiation.",
          "Livraison de colis.",
          "Contrats criminels impliquant des cibles.",
          "Transactions illégales prévues par le règlement.",
          "Accords commerciaux avec d'autres organisations.",
        ],
      },
      {
        type: "p",
        text: "Chaque contrat important doit pouvoir être retracé dans l'histoire de l'organisation : commanditaire, prestation, rémunération, résultat et éventuels litiges.",
      },
      {
        type: "p",
        text: "La gestion des revenus et des dépenses doit rester cohérente avec l'économie du serveur. Les tarifs définitifs seront adaptés aux règles, aux mécaniques disponibles et aux possibilités de négociation.",
      },
    ],
  },
  {
    title: "PHASES RP",
    kicker: "SECTION 11 — ÉVOLUTION NARRATIVE",
    stamp: "SECRET",
    doc: true,
    blocks: [
      {
        type: "p",
        text: "Le développement du Panthéon peut s'articuler autour de plusieurs phases narratives.",
      },
      {
        type: "lead",
        lead: "Phase I — Fondation.",
        text: "Création de la société de sécurité, recrutement des premiers membres, obtention de clients et construction d'une réputation légale.",
      },
      {
        type: "lead",
        lead: "Phase II — Expansion.",
        text: "Développement des contrats, apparition des premières prestations clandestines et établissement de relations avec les groupes criminels.",
      },
      {
        type: "lead",
        lead: "Phase III — Influence.",
        text: "Multiplication des alliances, conflits commerciaux, rivalités et intrigues impliquant les acteurs importants de Los Santos.",
      },
      {
        type: "lead",
        lead: "Phase IV — Implantation à Cayo Perico.",
        text: "Développement d'un arc narratif territorial, avec négociations, alliances locales et confrontation éventuelle avec les groupes présents sur l'île.",
      },
      {
        type: "lead",
        lead: "Phase V — Crise politique.",
        text: "L'organisation commence à remettre ouvertement en question l'équilibre du pouvoir. Des événements majeurs peuvent opposer ses dirigeants aux autorités, aux groupes rivaux et à ses propres alliés.",
      },
      {
        type: "lead",
        lead: "Phase VI — Projet de coup d'État.",
        text: "Le Panthéon tente de concrétiser son ambition de domination politique sur Los Santos et Cayo Perico.",
      },
      {
        type: "p",
        text: "Cette dernière phase doit être construite avec le staff et dépendre des conséquences des phases précédentes. Une victoire automatique ne fait pas partie du concept.",
      },
    ],
  },
  {
    title: "INTÉRÊT POUR LE SERVEUR",
    kicker: "SECTION 12 — CONTENU ET INTERACTIONS",
    stamp: "RESTREINT",
    doc: true,
    blocks: [
      {
        type: "p",
        text: "Le Panthéon est conçu pour apporter du contenu à plusieurs catégories de joueurs.",
      },
      {
        type: "lead",
        lead: "Pour les civils et les entreprises :",
        text: "contrats de sécurité, protection, transport et relations commerciales.",
      },
      {
        type: "lead",
        lead: "Pour les organisations illégales :",
        text: "prestations contractuelles, négociations, rivalités, échanges et alliances.",
      },
      {
        type: "lead",
        lead: "Pour les forces de l'ordre :",
        text: "enquêtes, surveillance, investigations financières, découverte progressive de la façade criminelle et événements majeurs.",
      },
      {
        type: "lead",
        lead: "Pour les groupes territoriaux :",
        text: "conflits d'intérêts, accords, tensions et enjeux autour de Cayo Perico.",
      },
      {
        type: "lead",
        lead: "Pour le staff :",
        text: "une organisation évolutive permettant de créer des arcs narratifs à long terme, sans imposer un résultat prédéterminé au reste du serveur.",
      },
      {
        type: "p",
        text: "Le Panthéon cherche ainsi à devenir un moteur d'interactions et de scénarios, plutôt qu'une organisation isolée qui ne joue qu'avec ses propres membres.",
      },
    ],
  },
  {
    title: "ENGAGEMENTS",
    kicker: "SECTION 13 — ÉQUILIBRE ET FAIR-PLAY",
    stamp: "CONFIDENTIEL",
    doc: true,
    blocks: [
      {
        type: "p",
        text: "Afin de garantir un RP équilibré et durable, Le Panthéon s'engage à respecter les principes suivants :",
      },
      {
        type: "bullets",
        items: [
          "Respecter le règlement général du serveur et les règles propres aux organisations illégales.",
          "Accepter les conséquences des échecs, des arrestations et des pertes RP.",
          "Ne pas considérer les objectifs territoriaux ou politiques comme automatiquement acquis.",
          "Ne pas imposer de scènes aux autres joueurs sans respecter les règles applicables.",
          "Maintenir des interactions avec les groupes légaux comme illégaux.",
          "Soumettre au staff les projets d'envergure nécessitant une validation.",
          "Adapter ses activités aux scripts, aux mécaniques et aux limites du serveur.",
          "Privilégier la cohérence narrative et le développement des personnages.",
        ],
      },
    ],
  },
  {
    title: "CONCLUSION",
    kicker: "SECTION 14 — CONCLUSION",
    stamp: "RESTREINT",
    doc: true,
    blocks: [
      {
        type: "p",
        text: "Le Panthéon est une organisation fondée sur une ambition : transformer une société de sécurité privée en une puissance clandestine capable de bouleverser l'ordre établi.",
      },
      {
        type: "p",
        text: "Sa façade légale lui permet d'exister publiquement, de nouer des relations et de construire une réputation. Ses activités illégales lui donnent accès à un univers de contrats, de rivalités et de négociations. Sa structure paramilitaire lui apporte une identité propre, fondée sur la discipline et la hiérarchie.",
      },
      {
        type: "p",
        text: "Mais son véritable objectif reste dissimulé derrière ces différentes activités : remettre en cause le pouvoir existant et tenter d'imposer un nouvel ordre à Los Santos et Cayo Perico.",
      },
      {
        type: "p",
        text: "Le Panthéon ne revendique pas encore la domination. Il cherche à réunir les moyens, les alliances et l'influence nécessaires pour la rendre possible.",
      },
      {
        type: "quote",
        text: "Les empires ne tombent pas toujours sous les coups de leurs ennemis. Parfois, ils s'effondrent lorsque quelqu'un décide de prendre leur place.",
      },
      {
        type: "quote",
        text: "Le Panthéon — L'ordre dans l'ombre. Le pouvoir au sommet.",
        source: "DEVISE DE L'ORGANISATION",
      },
    ],
  },
];

export const DOSSIERS = {
  pantheon: {
    id: "pantheon",
    name: "LE PANTHÉON",
    ref: "P-01",
    seal: "assets/images/pantheon-seal.png",
    sealKind: "round",
    pages: PANTHEON_PAGES,
  },

  burgershot: {
    id: "burgershot",
    name: "BURGER SHOT",
    ref: "B-02",
    seal: "assets/images/burgershot-logo.png",
    sealKind: "round",
    pages: [
      {
        title: "DOSSIER DE REPRISE",
        kicker: "BUR-SHT-001 · DOSSIER DE PROJET RP",
        stamp: "RESTREINT",
        doc: true,
        masthead: true,
        fields: [
          ["RÉFÉRENCE", "BUR-SHT-001"],
          ["CLASSIFICATION", "DIFFUSION RESTREINTE — DOCUMENT INTERNE"],
          ["CANDIDAT À LA REPRISE", "TREVOR MCALLISTER"],
          ["ÉTABLISSEMENT", "BURGER SHOT — LOS SANTOS"],
          [
            "OBJET",
            "REPRISE DE LA GESTION, RELANCE COMMERCIALE ET DÉVELOPPEMENT SUR LE LONG TERME",
          ],
          ["STATUT", "DOSSIER DE PROJET RP"],
          ["DIFFUSION", "DIRECTION ET PERSONNEL AUTORISÉ"],
        ],
        blocks: [
          {
            type: "sub",
            text: "RESTAURATION RAPIDE — LOS SANTOS · UNIVERS FICTIF GTA RP",
          },
          {
            type: "quote",
            text: "« Faire du Burger Shot un lieu incontournable de Los Santos : rapide, accueillant, rentable et vivant. »",
            source: "PROJET DE REPRISE — T. MCALLISTER",
          },
          {
            type: "callout",
            label: "AVERTISSEMENT",
            text: "Ce document appartient à l'univers fictif du serveur GTA RP. Les références mentionnées ne correspondent à aucune entreprise réelle.",
          },
        ],
        end: "DIRECTION DU BURGER SHOT",
      },
      {
        title: "PRÉSENTATION DU PROJET",
        kicker: "SECTION 01 — PRÉSENTATION DU PROJET",
        stamp: "RESTREINT",
        doc: true,
        fields: [
          ["RÉFÉRENCE", "BUR-SHT-001-A"],
          ["NIVEAU", "RESTREINT"],
          ["OBJET", "PRÉSENTATION GÉNÉRALE DE LA REPRISE"],
        ],
        blocks: [
          {
            type: "p",
            text: "Je suis Trevor McAllister et je souhaite reprendre la direction du Burger Shot afin de lui donner une nouvelle dynamique commerciale et humaine.",
          },
          {
            type: "p",
            text: "Mon objectif n'est pas simplement de rouvrir un restaurant, mais d'en faire un véritable lieu de vie à Los Santos, capable d'attirer une clientèle régulière, de créer des emplois et de participer activement à l'économie de la ville.",
          },
          {
            type: "p",
            text: "La reprise reposera sur trois principes fondamentaux :",
          },
          {
            type: "bullets",
            items: [
              "La qualité du service.",
              "Une présence régulière et une gestion sérieuse.",
              "L'animation de la ville et le développement du roleplay.",
            ],
          },
          {
            type: "p",
            text: "Le Burger Shot conservera son identité populaire et accessible, tout en améliorant son organisation interne, son accueil et sa visibilité.",
          },
          { type: "sub", text: "1.1 — MES OBJECTIFS PRINCIPAUX" },
          {
            type: "bullets",
            items: [
              "Assurer une ouverture cohérente avec les horaires et les besoins de la ville.",
              "Recruter, former et fidéliser une équipe fiable.",
              "Proposer une carte claire, des offres régulières et un service constant.",
              "Développer des partenariats avec les entreprises et les organisations locales.",
              "Organiser des animations qui donnent envie aux habitants de revenir.",
            ],
          },
          { type: "sub", text: "1.2 — MA VISION DE L'ÉTABLISSEMENT" },
          {
            type: "p",
            text: "Je souhaite diriger un établissement structuré, mais accessible.",
          },
          {
            type: "p",
            text: "Chaque employé devra connaître son rôle, respecter les clients et contribuer à la réputation du restaurant.",
          },
          {
            type: "p",
            text: "La hiérarchie servira à faciliter le travail et à maintenir une bonne organisation, et non à créer une distance inutile entre la direction et les employés.",
          },
          { type: "sub", text: "1.3 — POSITIONNEMENT COMMERCIAL" },
          {
            type: "p",
            text: "Le Burger Shot se positionnera comme une enseigne de restauration rapide conviviale, proposant des prix adaptés à l'économie du serveur.",
          },
          { type: "p", text: "La clientèle visée sera variée :" },
          {
            type: "bullets",
            items: [
              "Les travailleurs en pause.",
              "Les groupes d'amis.",
              "Les automobilistes.",
              "Les entreprises souhaitant commander pour leurs équipes.",
              "Les habitants recherchant un lieu convivial.",
            ],
          },
        ],
        end: "FIN DE SECTION — 01",
      },
      {
        title: "PROJET À COURT TERME",
        kicker: "SECTION 02 — PROJET À COURT TERME (0 À 30 JOURS)",
        stamp: "RESTREINT",
        doc: true,
        fields: [
          ["RÉFÉRENCE", "BUR-SHT-001-B"],
          ["NIVEAU", "RESTREINT"],
          ["OBJET", "RÉOUVERTURE, RECRUTEMENT ET OFFRE DE LANCEMENT"],
        ],
        blocks: [
          {
            type: "p",
            text: "La première étape consistera à remettre l'établissement en ordre de marche, à rassurer la clientèle et à poser des bases solides pour son fonctionnement.",
          },
          { type: "sub", text: "2.1 — RÉOUVERTURE ET REMISE EN ÉTAT" },
          {
            type: "bullets",
            items: [
              "Faire un état des lieux du bâtiment, des équipements et des espaces accessibles au public.",
              "Vérifier les stocks disponibles et établir une liste des produits à réapprovisionner.",
              "Nettoyer et organiser les espaces de travail, la cuisine et la zone de service.",
              "Définir des horaires d'ouverture réalistes et les communiquer à la population.",
              "Mettre en place une procédure d'ouverture et de fermeture.",
            ],
          },
          { type: "sub", text: "2.2 — RECRUTEMENT ET ORGANISATION" },
          {
            type: "p",
            text: "Je souhaite constituer une équipe sérieuse et motivée.",
          },
          { type: "p", text: "Pour cela, plusieurs actions seront mises en place :" },
          {
            type: "bullets",
            items: [
              "Lancer une campagne de recrutement dans la ville.",
              "Organiser des entretiens RP pour chaque candidat.",
              "Évaluer la motivation, la disponibilité et le comportement des candidats.",
              "Nommer un responsable de service lorsque l'effectif le permettra.",
              "Former les nouveaux employés à l'accueil, à la prise de commande, à l'encaissement et au rangement.",
              "Mettre en place un planning partagé.",
            ],
          },
          { type: "sub", text: "2.3 — OFFRE COMMERCIALE DE LANCEMENT" },
          { type: "p", text: "Afin de relancer l'activité, je souhaite proposer :" },
          {
            type: "bullets",
            items: [
              "Une carte courte, lisible et facile à produire.",
              "Une formule de lancement comprenant burger, accompagnement et boisson.",
              "Un produit vedette de la semaine.",
              "Une offre de bienvenue limitée dans le temps.",
            ],
          },
          {
            type: "p",
            text: "Les tarifs seront adaptés à l'économie du serveur.",
          },
          { type: "sub", text: "2.4 — COMMUNICATION ET VISIBILITÉ" },
          {
            type: "bullets",
            items: [
              "Annoncer officiellement la reprise du Burger Shot.",
              "Publier les horaires et la carte.",
              "Communiquer sur les recrutements.",
              "Faire connaître l'établissement auprès des entreprises et des services de la ville.",
              "Mettre en place une signalétique claire si les règles du serveur le permettent.",
            ],
          },
          { type: "sub", text: "OBJECTIFS À ATTEINDRE APRÈS 30 JOURS" },
          {
            type: "bullets",
            items: [
              "Avoir une équipe opérationnelle.",
              "Assurer des horaires d'ouverture réguliers.",
              "Mettre en place une gestion des stocks.",
              "Obtenir les premiers retours clients.",
              "Relancer progressivement la fréquentation du restaurant.",
            ],
          },
        ],
        end: "FIN DE SECTION — 02",
      },
      {
        title: "PROJET À MOYEN TERME",
        kicker: "SECTION 03 — PROJET À MOYEN TERME (1 À 3 MOIS)",
        stamp: "RESTREINT",
        doc: true,
        fields: [
          ["RÉFÉRENCE", "BUR-SHT-001-C"],
          ["NIVEAU", "RESTREINT"],
          ["OBJET", "DÉVELOPPEMENT COMMERCIAL ET ANIMATION"],
        ],
        blocks: [
          {
            type: "p",
            text: "Une fois l'activité stabilisée, l'objectif sera de développer la clientèle, d'améliorer les ventes et de faire du Burger Shot un établissement reconnu dans la ville.",
          },
          { type: "sub", text: "3.1 — DÉVELOPPEMENT COMMERCIAL" },
          {
            type: "p",
            text: "Je souhaite faire évoluer progressivement l'offre commerciale.",
          },
          { type: "p", text: "Plusieurs initiatives seront étudiées :" },
          {
            type: "bullets",
            items: [
              "Création de menus thématiques.",
              "Mise en place d'une carte de fidélité.",
              "Création de promotions ponctuelles.",
              "Mise en avant de nouveaux produits.",
              "Analyse des produits les plus vendus.",
              "Adaptation des stocks à la demande.",
            ],
          },
          {
            type: "p",
            text: "L'objectif sera de fidéliser les clients sans dévaloriser les produits.",
          },
          { type: "sub", text: "3.2 — PARTENARIATS AVEC LES ENTREPRISES" },
          {
            type: "p",
            text: "Le Burger Shot devra devenir un partenaire de la vie économique de Los Santos.",
          },
          { type: "p", text: "Je souhaite notamment démarcher :" },
          {
            type: "bullets",
            items: [
              "Les garages automobiles.",
              "Les sociétés de transport.",
              "Les entreprises privées.",
              "Les services publics.",
              "Les autres commerces de la ville.",
            ],
          },
          {
            type: "p",
            text: "Des commandes groupées pourront être proposées aux entreprises afin de fournir des repas à leurs employés.",
          },
          {
            type: "p",
            text: "Des accords de restauration pourront également être organisés lors de certains événements.",
          },
          { type: "sub", text: "3.3 — ANIMATIONS ET ÉVÉNEMENTS" },
          {
            type: "p",
            text: "Afin de faire vivre l'établissement, je souhaite organiser régulièrement des événements RP.",
          },
          { type: "p", text: "Quelques exemples :" },
          {
            type: "bullets",
            items: [
              "Soirées à thème au Burger Shot.",
              "Journées promotionnelles.",
              "Défis culinaires RP.",
              "Offres spéciales lors des événements de la ville.",
              "Journées de recrutement et de découverte du métier.",
            ],
          },
          {
            type: "p",
            text: "Une inauguration officielle pourra également être organisée après la stabilisation de l'équipe.",
          },
          { type: "sub", text: "3.4 — AMÉLIORATION DU MANAGEMENT" },
          {
            type: "p",
            text: "La gestion du personnel devra progressivement devenir plus structurée.",
          },
          { type: "p", text: "Je souhaite mettre en place :" },
          {
            type: "bullets",
            items: [
              "Des fiches de poste.",
              "Des objectifs simples pour chaque fonction.",
              "Des réunions régulières avec l'équipe.",
              "Un suivi des présences et des formations.",
              "Un système d'évolution interne.",
              "Une délégation progressive des responsabilités.",
            ],
          },
          {
            type: "p",
            text: "Les employés motivés et investis pourront obtenir davantage de responsabilités.",
          },
          { type: "sub", text: "OBJECTIFS À ATTEINDRE APRÈS 3 MOIS" },
          {
            type: "bullets",
            items: [
              "Disposer d'une équipe opérationnelle et organisée.",
              "Développer une clientèle régulière.",
              "Avoir plusieurs partenariats actifs.",
              "Organiser des animations récurrentes.",
              "Améliorer le chiffre d'affaires et la rentabilité.",
            ],
          },
        ],
        end: "FIN DE SECTION — 03",
      },
      {
        title: "PROJET À LONG TERME",
        kicker: "SECTION 04 — PROJET À LONG TERME (3 À 6 MOIS ET PLUS)",
        stamp: "RESTREINT",
        doc: true,
        fields: [
          ["RÉFÉRENCE", "BUR-SHT-001-D"],
          ["NIVEAU", "RESTREINT"],
          ["OBJET", "CONSOLIDATION, RESPONSABILITÉS ET EXPANSION"],
        ],
        blocks: [
          {
            type: "p",
            text: "À long terme, mon ambition est de faire du Burger Shot une enseigne durable, reconnue et capable de fonctionner efficacement même en mon absence.",
          },
          { type: "sub", text: "4.1 — CONSOLIDER L'IMAGE DU BURGER SHOT" },
          {
            type: "p",
            text: "Je souhaite développer une véritable identité commerciale.",
          },
          { type: "p", text: "Cela passera par :" },
          {
            type: "bullets",
            items: [
              "Une communication régulière.",
              "Une présentation professionnelle de la carte.",
              "Des campagnes promotionnelles saisonnières.",
              "Des nouveautés commerciales.",
              "Une qualité de service constante.",
              "Une fidélisation de la clientèle professionnelle.",
            ],
          },
          {
            type: "p",
            text: "Le but est que le Burger Shot devienne une référence de la restauration rapide à Los Santos.",
          },
          { type: "sub", text: "4.2 — DÉVELOPPER LES RESPONSABILITÉS INTERNES" },
          {
            type: "p",
            text: "À mesure que l'entreprise grandira, je souhaite faire évoluer les employés les plus investis.",
          },
          { type: "p", text: "Plusieurs postes pourront être développés :" },
          {
            type: "bullets",
            items: [
              "Directeur adjoint.",
              "Responsable du personnel.",
              "Chef d'équipe.",
              "Responsable des stocks.",
              "Responsable événementiel.",
            ],
          },
          {
            type: "p",
            text: "Cela permettra de répartir les responsabilités et de garantir le bon fonctionnement de l'établissement.",
          },
          { type: "sub", text: "4.3 — ORGANISATION DE GRANDS ÉVÉNEMENTS" },
          {
            type: "p",
            text: "Je souhaite organiser au minimum un événement important par mois.",
          },
          { type: "p", text: "Quelques idées :" },
          {
            type: "bullets",
            items: [
              "Grand rassemblement automobile devant le Burger Shot.",
              "Concours et défis entre habitants.",
              "Soirées promotionnelles.",
              "Événements en partenariat avec d'autres entreprises.",
              "Opérations communautaires.",
            ],
          },
          {
            type: "p",
            text: "Ces événements permettront de créer des interactions entre les différentes organisations de Los Santos.",
          },
          { type: "sub", text: "4.4 — POSSIBILITÉS D'EXPANSION" },
          {
            type: "p",
            text: "Si l'activité devient suffisamment importante, plusieurs possibilités pourront être étudiées :",
          },
          {
            type: "bullets",
            items: [
              "Mise en place d'un service de livraison.",
              "Développement de commandes professionnelles.",
              "Extension des horaires d'ouverture.",
              "Création d'une seconde équipe.",
              "Étude d'un éventuel second point de vente, sous réserve des possibilités offertes par le serveur.",
            ],
          },
          {
            type: "p",
            text: "Toute expansion sera étudiée en fonction de la rentabilité et des règles du serveur.",
          },
          { type: "sub", text: "VISION À LONG TERME" },
          {
            type: "p",
            text: "Je souhaite que le Burger Shot soit reconnu comme une enseigne fiable, animée par une équipe soudée et comme un lieu où les habitants peuvent travailler, se retrouver et créer des histoires RP.",
          },
          {
            type: "p",
            text: "La croissance devra rester progressive et cohérente avec la population ainsi qu'avec l'économie du serveur.",
          },
        ],
        end: "FIN DE SECTION — 04",
      },
      {
        title: "ORGANISATION ET HIÉRARCHIE",
        kicker: "SECTION 05 — ORGANISATION ET HIÉRARCHIE",
        stamp: "RESTREINT",
        doc: true,
        fields: [
          ["RÉFÉRENCE", "BUR-SHT-001-E"],
          ["NIVEAU", "RESTREINT"],
          ["OBJET", "STRUCTURE DE GESTION DE L'ÉTABLISSEMENT"],
        ],
        blocks: [
          {
            type: "p",
            text: "Afin d'assurer une gestion efficace, je souhaite instaurer une hiérarchie claire.",
          },
          { type: "sub", text: "5.1 — FONCTIONS ET RESPONSABILITÉS" },
          {
            type: "facts",
            items: [
              [
                "DIRECTEUR — TREVOR MCALLISTER",
                "Gestion générale, finances, recrutement, partenariats et décisions stratégiques.",
              ],
              [
                "DIRECTEUR ADJOINT",
                "Gestion quotidienne, planning et accompagnement du personnel.",
              ],
              [
                "CHEF D'ÉQUIPE",
                "Organisation des services et supervision des employés.",
              ],
              [
                "EMPLOYÉ POLYVALENT",
                "Préparation, commandes, encaissement et entretien.",
              ],
            ],
          },
          {
            type: "p",
            text: "Chaque membre devra respecter son rôle et contribuer au bon fonctionnement de l'entreprise.",
          },
          {
            type: "p",
            text: "Les promotions seront accordées en fonction de l'investissement, de la régularité, du sérieux et des compétences.",
          },
        ],
        end: "FIN DE SECTION — 05",
      },
      {
        title: "GESTION FINANCIÈRE",
        kicker: "SECTION 06 — GESTION FINANCIÈRE",
        stamp: "RESTREINT",
        doc: true,
        fields: [
          ["RÉFÉRENCE", "BUR-SHT-001-F"],
          ["NIVEAU", "RESTREINT"],
          ["OBJET", "SUIVI COMPTABLE ET RENTABILITÉ"],
        ],
        blocks: [
          {
            type: "p",
            text: "La gestion financière sera un élément essentiel de la reprise.",
          },
          {
            type: "p",
            text: "Je souhaite mettre en place une comptabilité simple et consultable permettant de suivre :",
          },
          {
            type: "bullets",
            items: [
              "Les recettes quotidiennes.",
              "Les dépenses liées aux stocks.",
              "Les éventuels salaires.",
              "Les frais de fonctionnement.",
              "Les bénéfices réalisés.",
            ],
          },
          {
            type: "p",
            text: "Un bilan hebdomadaire permettra de suivre l'activité et un bilan mensuel permettra d'évaluer la rentabilité.",
          },
          {
            type: "p",
            text: "Aucune dépense importante ne sera engagée sans avoir préalablement étudié son intérêt pour l'établissement.",
          },
          {
            type: "p",
            text: "L'objectif sera de garantir une entreprise économiquement viable sur le long terme.",
          },
        ],
        end: "FIN DE SECTION — 06",
      },
      {
        title: "ENGAGEMENT PERSONNEL",
        kicker: "SECTION 07 — ENGAGEMENT DE TREVOR MCALLISTER",
        stamp: "RESTREINT",
        doc: true,
        fields: [
          ["RÉFÉRENCE", "BUR-SHT-001-G"],
          ["NIVEAU", "RESTREINT"],
          ["OBJET", "ENGAGEMENTS DU CANDIDAT À LA REPRISE"],
        ],
        blocks: [
          {
            type: "p",
            text: "En reprenant le Burger Shot, je souhaite m'investir pleinement dans le développement de l'établissement.",
          },
          { type: "p", text: "Je m'engage à :" },
          {
            type: "bullets",
            items: [
              "Assurer une gestion sérieuse et cohérente.",
              "Respecter les règles du serveur.",
              "Être présent et disponible pour mon équipe.",
              "Traiter chaque employé avec équité.",
              "Favoriser les promotions internes.",
              "Développer des partenariats avec les autres entreprises.",
              "Organiser régulièrement des événements RP.",
              "Faire évoluer le Burger Shot sans compromettre sa stabilité financière.",
            ],
          },
          {
            type: "p",
            text: "Je souhaite construire une entreprise dans laquelle les employés auront envie de s'investir et où les clients auront plaisir à revenir.",
          },
          {
            type: "quote",
            text: "Mon objectif n'est pas simplement de posséder un commerce, mais de faire du Burger Shot une entreprise active et importante dans la vie de Los Santos.",
          },
        ],
        end: "FIN DE SECTION — 07",
      },
      {
        title: "CONCLUSION",
        kicker: "CONCLUSION — REPRISE DU BURGER SHOT",
        stamp: "RESTREINT",
        doc: true,
        fields: [
          ["RÉFÉRENCE", "BUR-SHT-001-H"],
          ["NIVEAU", "RESTREINT"],
          ["OBJET", "CONCLUSION ET SIGNATURE DU DOSSIER"],
        ],
        blocks: [
          {
            type: "p",
            text: "La reprise du Burger Shot représente pour moi une véritable opportunité de développer une entreprise sur le long terme.",
          },
          {
            type: "p",
            text: "Mon projet repose sur une vision progressive : stabiliser l'établissement, développer son activité, puis construire une enseigne reconnue dans toute la ville.",
          },
          {
            type: "p",
            text: "Je suis convaincu qu'avec une équipe motivée, une gestion rigoureuse et des projets réguliers, le Burger Shot pourra retrouver une place importante dans l'économie et la vie sociale de Los Santos.",
          },
          {
            type: "p",
            text: "Je suis prêt à m'investir personnellement dans cette reprise et à mettre en œuvre les moyens nécessaires pour assurer sa réussite.",
          },
          {
            type: "facts",
            items: [
              ["CANDIDAT À LA REPRISE", "TREVOR MCALLISTER"],
              ["FONCTION VISÉE", "DIRECTEUR — BURGER SHOT, LOS SANTOS"],
              ["DATE", "02 / 11 / 2026"],
            ],
          },
        ],
        sign: "T. MCALLISTER",
        end: "FIN DU DOSSIER — BUR-SHT-001",
      },
    ],
  },
};

export function getDossier(id) {
  return DOSSIERS[id] || null;
}

export function dossierExists(id) {
  return Object.prototype.hasOwnProperty.call(DOSSIERS, id);
}
