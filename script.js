const translations = {
    en: {
        title: "Pauper to the People",
        subtitle: "Munich’s Biggest Pauper Tournament.<br>19<sup>th</sup> October 2024.",
        register: "Register Now!",
        comingSoon: "Coming Soon",
        newsletter: "Join Our Mailing List for Updates!",
        stayTuned: "🤟 Stay Tuned",
        podcastPartner: "🎙️ Podcast Partner",
        gamestorePartner: "🎲 Gamestore Partner",
        pricePartner: "🏆 Price Partner",
        featuredArtists: "🎨 Featured Artists",
        mainContent: "Get ready for an unforgettable day of Magic: The Gathering at FunTainment on October 19th, 2024! <br>After the excitement, unwind with your new friends at a cozy Wirtshaus for a gemütliche evening with beer and some hearty bavarian food. <br><br>So, whether you’re a seasoned Pauper player or just discovering the format, this is the event of the year you won’t want to miss.",
        info1: "🎉 Over the last three years, we've established a series of Magic tournaments across Germany for the common people, and this Munich edition marks the 4th in our exciting series. 🌟",
        info2: "🧙‍♂️ Whether you’re a seasoned Pauper player or new to the format, this is an event you won’t want to miss. Compete with fellow enthusiasts, showcase your skills, and be a part of Munich's premier Pauper tournament. 🏆",
        info3: "🎁 Exciting prizes, a vibrant community, and unforgettable battles await you! ⚔️",
        info4: "Pauper To The People is an initiative of the German <a href='https://www.tastymtg.de'>Tasty MTG Podcast</a>. <br> So give it a listen or join our <br class='brIphone'> <a href='https://discord.gg/zwpK8EWTrV'><img class='discordIMG' src='img/TastyPauperCrew.png' alt='Pauper Discord Server'></img> Pauper Discord Server</a> or our <br class='brIphone'> <a href='https://discord.gg/dUSJYqun7H'><img class='discordIMG' src='img/PauperSpezl.png' alt='Munich Pauper Spezl Discord'></img> Munich Pauper Spezl Discord</a>.",
        previousEvents: "Previous Events",
        subscribe: "Subscribe to the Pauper To The People Munich Newsletter",
        emailLabel: "E-Mail Address <span class='asterisk'>*</span>",
        nameLabel: "Name",
        surnameLabel: "Surname",
        marketingPermissions: "Marketing Permissions",
        selectWays: "Please select all the ways you would like to hear from pttp-muc:",
        unsubscribeInfo: "You can unsubscribe at any time by clicking the link in the footer of our emails. For information about our privacy practices, please visit our website.",
        mailchimpInfo: "We use Mailchimp as our marketing platform. By clicking below to subscribe, you acknowledge that your information will be transferred to Mailchimp for processing. <a href='https://mailchimp.com/legal/terms'>Learn more</a> about Mailchimp's privacy practices."
    },
    de: {
        title: "Pauper to the People",
        subtitle: "Münchens größtes Pauper-Turnier.<br>19. Oktober 2024.",
        register: "Jetzt anmelden!",
        comingSoon: "Kommt bald",
        newsletter: "Treten Sie unserer Mailingliste für Updates bei!",
        stayTuned: "🤟 Bleiben Sie dran",
        podcastPartner: "🎙️ Podcast-Partner",
        gamestorePartner: "🎲 Spieleladen-Partner",
        pricePartner: "🏆 Preispartner",
        featuredArtists: "🎨 Vorgestellte Künstler",
        mainContent: "Machen Dich sich bereit für einen unvergesslichen Tag voller Magic: The Gathering im FunTainment am 19. Oktober 2024! <br>Nach der Aufregung entspannen Sie sich mit Ihren neuen Freunden in einem gemütlichen Wirtshaus bei Bier und herzhaftem bayerischen Essen. <br><br>Ob Sie ein erfahrener Pauper-Spieler sind oder das Format gerade erst entdecken, dies ist das Event des Jahres, das Sie nicht verpassen sollten.",
        info1: "🎉 In den letzten drei Jahren haben wir eine Reihe von Magic-Turnieren in ganz Deutschland für die einfachen Leute etabliert, und diese Münchner Ausgabe markiert das 4. in unserer aufregenden Serie. 🌟",
        info2: "🧙‍♂️ Ob Sie ein erfahrener Pauper-Spieler sind oder neu in diesem Format, dies ist ein Event, das Sie nicht verpassen sollten. Treten Sie gegen andere Enthusiasten an, zeigen Sie Ihre Fähigkeiten und werden Sie Teil von Münchens führendem Pauper-Turnier. 🏆",
        info3: "🎁 Spannende Preise, eine lebendige Community und unvergessliche Schlachten erwarten Sie! ⚔️",
        info4: "Pauper To The People ist eine Initiative des deutschen <a href='https://www.tastymtg.de'>Tasty MTG Podcast</a>. <br> Also hören Sie rein oder treten Sie unserem <br class='brIphone'> <a href='https://discord.gg/zwpK8EWTrV'><img class='discordIMG' src='img/TastyPauperCrew.png' alt='Pauper Discord Server'></img> Pauper Discord Server</a> bei oder unserem <br class='brIphone'> <a href='https://discord.gg/dUSJYqun7H'><img class='discordIMG' src='img/PauperSpezl.png' alt='Munich Pauper Spezl Discord'></img> Munich Pauper Spezl Discord</a>.",
        previousEvents: "Frühere Veranstaltungen",
        subscribe: "Abonnieren Sie den Pauper To The People München Newsletter",
        emailLabel: "E-Mail-Adresse <span class='asterisk'>*</span>",
        nameLabel: "Name",
        surnameLabel: "Nachname",
        marketingPermissions: "Marketing-Erlaubnisse",
        selectWays: "Bitte wählen Sie alle Möglichkeiten aus, wie Sie von pttp-muc hören möchten:",
        unsubscribeInfo: "Sie können sich jederzeit abmelden, indem Sie auf den Link im Fuß unserer E-Mails klicken. Für Informationen über unsere Datenschutzpraktiken besuchen Sie bitte unsere Website.",
        mailchimpInfo: "Wir verwenden Mailchimp als unsere Marketingplattform. Indem Sie unten auf „Abonnieren“ klicken, bestätigen Sie, dass Ihre Informationen zur Verarbeitung an Mailchimp weitergegeben werden. <a href='https://mailchimp.com/legal/terms'>Erfahren Sie mehr</a> über die Datenschutzpraktiken von Mailchimp."
    }
};

function setLanguage(language) {
    const elementsToTranslate = {
        title: 'title',
        subtitle: 'subtitle',
        register: 'register',
        comingSoon: 'comingSoon',
        newsletter: 'newsletter',
        stayTuned: 'stayTuned',
        podcastPartner: 'podcastPartner',
        gamestorePartner: 'gamestorePartner',
        pricePartner: 'pricePartner',
        featuredArtists: 'featuredArtists',
        mainContent: 'mainContent',
        info1: 'info1',
        info2: 'info2',
        info3: 'info3',
        info4: 'info4',
        previousEvents: 'previousEvents',
        subscribe: 'subscribe',
        emailLabel: 'emailLabel',
        nameLabel: 'nameLabel',
        surnameLabel: 'surnameLabel',
        marketingPermissions: 'marketingPermissions',
        selectWays: 'selectWays',
        unsubscribeInfo: 'unsubscribeInfo',
        mailchimpInfo: 'mailchimpInfo'
    };

    Object.keys(elementsToTranslate).forEach(id => {
        document.getElementById(id).innerHTML = translations[language][elementsToTranslate[id]];
    });
}
