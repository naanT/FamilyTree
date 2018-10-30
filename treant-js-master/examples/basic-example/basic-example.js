var config = {
        container: "#basic-example",
        
        connectors: {
            type: 'step'
        },
        node: {
            HTMLclass: 'nodeExample1'
        }
    },
    Ertuğrul = {
        text: {
            name: "Ertuğrul",
            title: "ĠĀZĪ (The Warrior)",
            dataFromUntil: "unknown - 1280",
            desc: "The father of Osman I. The founder of the Ottoman Empire.",
            
        },
        image: "../headshots/75px-TM-2001-500manat-Ärtogrul_Gazy-b.png"
    },

    OsmanI = {
        parent: Ertuğrul,
        text: {
            name: "Osman I",
            title: "ĠĀZĪ (The Warrior)",
            dataFromUntil: "1299 - 1323",
            desc: "Son of Ertuğrul Bey and Halime hatun. Reigned until his death",
            
        },
        image: "../headshots/75px-Osman_Gazi.jpg"
    },

    Orhan = {
        parent: OsmanI,
        text: {
            name: "Orhan",
            title: "ĠĀZĪ (The Warrior)",
            dataFromUntil: "1323 - 1362",
            desc: "Son of Osman I and Malhun Hatun. Reigned until his death",
            
        },
        image: "../headshots/75px-Orhan_I.jpg"
    },

    MuradI = {
        parent: Orhan,
        text: {
            name: "Murad I",
            title: "SULTAN-İ AZAM (The Most Exalted Sultan) HÜDAVENDİGÂR (The devotee of God) ŞEHÎD (Martyr)",
            dataFromUntil: "1362 - 1389",
            desc: "Son of Orhan and Nilüfer Hatun. Reigned until his death. Killed on the battlefield at the Battle of Kosovo on June 15, 1389.",
            
        },
        image: "../headshots/Murat_Hüdavendigar.jpg"
    },

    BayezidI = {
        parent: MuradI,
        text: {
            name: "Bayezid I",
            title: "SULTAN-İ RÛM (Sultan of the Roman Empire) YILDIRIM (Lightning)",
            dataFromUntil: "1389 - 1402",
            desc: "Son of Murad I and Gülçiçek Hatun. Captured on the battlefield at the Battle of Ankara (de facto end of reign); Died in captivity in Akşehir on 8 March 1403.",
        },
        image: "../headshots/Bayezid_I_by_Cristofano_dell'Altissimo.jpg "
    },

    MehmedI = {
        parent: BayezidI,
        text: {
            name: "Mehmed I",
            title: "ÇELEBİ (The Affable) KİRİŞÇİ (lit. The Bowstring Maker for his support)",
            dataFromUntil: "1413 - 1421",
            desc: "Son of Bayezid I and Devlet Hatun. Reigned until his death",
        },
        image: "../headshots/Çelebi_Mehmet.jpg"
    },

    MuradII = {
        parent: MehmedI,
        text: {
            name: "Murad II",
            title: "KOCA (The Great)",
            dataFromUntil: "1421 - 1444, 1446 - 1451",
            desc: "Son of Mehmed I and Emine Hatun, Abdicated of his own free will in favour of his son Mehmed II. Second reign; Forced to return to the throne following a Janissary insurgence; Reigned until his death.",
        },
        image: "../headshots/Murat_II.jpg"
    },

    MehmedII = {
        parent: MuradII,
        text: {
            name: "Mehmed II",
            title: "FĀTİḤ (The Conqueror) فاتح‬ KAYSER-İ RÛM (Caesar of the Roman Empire)",
            dataFromUntil: "1444 - 1446",
            desc: "Son of Murad II and Hüma Hatun. Surrendered the throne to his father after having asked him to return to power, along with rising threats from Janissaries.  Second reign;Conquered Constantinople in 1453;Reigned until his death.",
        },
        image: "../headshots/Gentile_Bellini_003.jpg"
    },

    BayezidII = {
        parent: MehmedII,
        text: {
            name: "Bayezid II",
            title: "VELÎ (The Saint)",
            dataFromUntil: "1481 - 1512",
            desc: "Son of Mehmed II and Gülbahar Hatun. Abdicated. Died near Didymoteicho on 26 May 1512.",
        },
        image: "../headshots/100px-Beyazid_II.jpg"
    },

    SelimI = {
        parent: BayezidII,
        text: {
            name: "Selim I",
            title: "YAVUZ (The Strong) Hadim'ul Haramain'ish-Sharifain (Servant of Mecca and Medina)",
            dataFromUntil: "1512 - 1520",
            desc: "Son of Bayezid II and Gülbahar Hatun. Reigned until his death.",
        },
        image: "../headshots/100px-Yavuz_Sultan_I._Selim_Han.jpg"
    },

    SuleimanI = {
        parent: SelimI,
        text: {
            name: "Suleiman I",
            title: "MUHTEŞEM (The Magnificent) or KANÛNÎ (The Lawgiver) قانونى‬",
            dataFromUntil: "1520 - 1566",
            desc: "Son of Selim I and Hafsa Sultan;Reigned until his death.",
        },
        image: "../headshots/200px-EmperorSuleiman.jpg"
    },

    SelimII = {
        parent: SuleimanI,
        text: {
            name: "Selim II",
            title: "SARI (The Blond) MEST (the Sot)",
            dataFromUntil: "1566 - 1574",
            desc: "Son of Suleiman I and Hürrem Sultan;Reigned until his death.",
        },
        image: "../headshots/100px-II._Selim_Han.jpg"
    },

    MuradIII = {
        parent: SelimII,
        text: {
            name: "Murad II",
            title: "N/A",
            dataFromUntil: "1574 - 1595",
            desc: "Son of Selim II and Nurbanu Sultan;Reigned until his death",
        },
        image: "../headshots/100px-Sultan_Murad_III.jpeg"
    },

    MehmedIII = {
        parent: MuradIII,
        text: {
            name: "Mehmed II",
            title: "ADLÎ (The Just)	",
            dataFromUntil: "1595 - 1603",
            desc: "Son of Murad III and Safiye Sultan;Reigned until his death;",
        },
        image: "../headshots/100px-Sultan_Mehmet_III_of_the_Ottoman_Empire.jpg"
    },

    AhmedI = {
        parent: MehmedIII,
        text: {
            name: "Ahmed II",
            title: "BAḪTī (The Fortunate)",
            dataFromUntil: "1595 - 1603",
            desc: "Son of Mehmed III and Handan Sultan;Reigned until his death.",
        },
        image: "../headshots/100px-Sultan_I._Ahmet.jpg"
    },

    MustafaI = {
        parent: MehmedIII,
        text: {
            name: "Mustafa I",
            title: "DELİ (The Mad)",
            dataFromUntil: "1617 - 1618, 1622-1623",
            desc: "Son of Mehmed III and Halime Sultan;Deposed due to his mental instability in favour of his young nephew Osman II. Second reign;Returned to the throne after the assassination of his nephew Osman II;Deposed due to his poor mental health and confined until his death in Istanbul on 20 January 1639.",
        },
        image: "../headshots/100px-I_Mustafa_(cropped).jpg"
    },

    OsmanII = {
        parent: AhmedI,
        text: {
            name: "Osman II",
            title: "GENÇ (The Young) ŞEHÎD (The Martyr) شهيد‬",
            dataFromUntil: "1618 - 1622",
            desc: "Son of Ahmed I and Mahfiruz Hatun;Deposed in a Janissary riot on 19 May 1622;Murdered on 20 May 1622 by the Grand Vizier Kara Davud Pasha.",
        },
        image: "../headshots/100px-Osman_2.jpg"
    },

    MuradIV = {
        parent: AhmedI,
        text: {
            name: "Murad IV",
            title: "SAHİB-Î KIRAN The Conqueror of Baghdad ĠĀZĪ (The Warrior) غازى‬‬",
            dataFromUntil: "1623 - 1640",
            desc: "Son of Ahmed I and Kösem Sultan. Reigned until his death.",
        },
        image: "../headshots/100px-Murad_IV.jpg"
    },

    Ibrahim = {
        parent: AhmedI,
        text: {
            name: "Ibrahim",
            title: "DELİ (The Mad) The Conqueror of Crete ŞEHÎD‬‬",
            dataFromUntil: "1640 - 1648",
            desc: "Son of Ahmed I and Kösem Sultan;Deposed on 8 August 1648 in a coup led by the Sheikh ul-Islam;Strangled in Istanbul on 18 August 1648[42] at the behest of the Grand Vizier Mevlevî Mehmed Paşa (Sofu Mehmed Pasha).",
        },
        image: "../headshots/100px-Ibrahim_I.jpg"
    },

    MehmedIV = {
        parent: Ibrahim,
        text: {
            name: "Mehmed IV",
            title: "AVCI (The Hunter) ĠĀZĪ (The Warrior)  غازى‬‬‬",
            dataFromUntil: "1648 - 1687",
            desc: "Son of Ibrahim and Turhan Sultan;Deposed on 8 November 1687 following the Ottoman defeat at the Second Battle of Mohács;Died in Edirne on 6 January 1693.",
        },
        image: "../headshots/100px-Sultan_Mehmed_IV_(2).jpg"
    },

    SuleimanII = {
        parent: Ibrahim,
        text: {
            name: "Suleiman II",
            title: "ĠĀZĪ (The Warrior)‬‬‬",
            dataFromUntil: "1687 - 1691",
            desc: "Son of Ahmed I and Kösem Sultan;Deposed on 8 August 1648 in a coup led by the Sheikh ul-Islam;Strangled in Istanbul on 18 August 1648[42] at the behest of the Grand Vizier Mevlevî Mehmed Paşa (Sofu Mehmed Pasha).",
        },
        image: "../headshots/100px-Süleyman_II.jpg"
    },
    

  

    chart_config = [
        config,
        Ertuğrul,
        OsmanI,
        Orhan,
        MuradI,
        BayezidI,
        MehmedI,
        MuradII,
        MehmedII,
        BayezidII,
        SelimI,
        SuleimanI,
        SelimII,
        MuradIII,
        MehmedIII,
        AhmedI,
        MustafaI,
        OsmanII,
        MuradIV,
        Ibrahim,
        MehmedIV,
        SuleimanII
    ];




    // Another approach, same result
    // JSON approach

/*
    var chart_config = {
        chart: {
            container: "#basic-example",
            
            connectors: {
                type: 'step'
            },
            node: {
                HTMLclass: 'nodeExample1'
            }
        },
        nodeStructure: {
            text: {
                name: "Mark Hill",
                title: "Chief executive officer",
                contact: "Tel: 01 213 123 134",
            },
            image: "../headshots/2.jpg",
            children: [
                {
                    text:{
                        name: "Joe Linux",
                        title: "Chief Technology Officer",
                    },
                    stackChildren: true,
                    image: "../headshots/1.jpg",
                    children: [
                        {
                            text:{
                                name: "Ron Blomquist",
                                title: "Chief Information Security Officer"
                            },
                            image: "../headshots/8.jpg"
                        },
                        {
                            text:{
                                name: "Michael Rubin",
                                title: "Chief Innovation Officer",
                                contact: "we@aregreat.com"
                            },
                            image: "../headshots/9.jpg"
                        }
                    ]
                },
                {
                    stackChildren: true,
                    text:{
                        name: "Linda May",
                        title: "Chief Business Officer",
                    },
                    image: "../headshots/5.jpg",
                    children: [
                        {
                            text:{
                                name: "Alice Lopez",
                                title: "Chief Communications Officer"
                            },
                            image: "../headshots/7.jpg"
                        },
                        {
                            text:{
                                name: "Mary Johnson",
                                title: "Chief Brand Officer"
                            },
                            image: "../headshots/4.jpg"
                        },
                        {
                            text:{
                                name: "Kirk Douglas",
                                title: "Chief Business Development Officer"
                            },
                            image: "../headshots/11.jpg"
                        }
                    ]
                },
                {
                    text:{
                        name: "John Green",
                        title: "Chief accounting officer",
                        contact: "Tel: 01 213 123 134",
                    },
                    image: "../headshots/6.jpg",
                    children: [
                        {
                            text:{
                                name: "Erica Reel",
                                title: "Chief Customer Officer"
                            },
                            link: {
                                href: "http://www.google.com"
                            },
                            image: "../headshots/10.jpg"
                        }
                    ]
                }
            ]
        }
    };

*/