var people = [{"id":"S3J5c3R5bmEgQ2hvZG9yb3dza2E=","name":"Krystyna Chodorowska"},{"id":"QW5uYSBTaWVtb215cz9hIEhyeWN5c3p5bg==","name":"Anna Siemomysła Hrycyszyn"},{"id":"Sm9hbm5hICJkemlld2k_dG5hc3RrYSIgS2FuaWV3c2thIFtTRE5IIFVXIC8gV2hvc29tZSAvIFJhZGlvIEthcGl0YT9d","name":"Joanna \"dziewiętnastka\" Kaniewska [SDNH UW / Whosome / Radio Kapitał]"},{"id":"TWFnZGFsZW5hIFNhbGlr","name":"Magdalena Salik"},{"id":"R2Vla296YXVydXM=","name":"Geekozaurus"},{"id":"QW5uYSBKYW5pc3pld3NrYSBbUG9kcz91Y2hhbmUucGxd","name":"Anna Janiszewska [Podsłuchane.pl]"},{"id":"S2FwaXRhbiBGYW5kb20=","name":"Kapitan Fandom"},{"id":"QW5uYSAiTXlzemEiIFBpb3Ryb3dza2EgW1BvZHM_dWNoYW5lLnBsXQ==","name":"Anna \"Mysza\" Piotrowska [Podsłuchane.pl]"},{"id":"TWFqYSAiWXVrYSIgU3phZnJhP3NrYSBbV2hvc29tZV0=","name":"Maja \"Yuka\" Szafrańska [Whosome]"},{"id":"R2lubnkgTmF3cm9ja2kgW1dob3NvbWVd","name":"Ginny Nawrocki [Whosome]"},{"id":"S2lyYSBOaW4gTmFkb2xuaWsgW1dob3NvbWVd","name":"Kira Nin Nadolnik [Whosome]"},{"id":"QWlyaXM=","name":"Airis"},{"id":"S3ViYSBTa3Vyenk_c2tpIFtCP2R6aWUgR3JhbmUgLyBOZXJkIFNpcmVuc10=","name":"Kuba Skurzyński [Będzie Grane / Nerd Sirens]"},{"id":"V29qdGVrIFtrYXBpdHU_YSBRdWVudGluYV0=","name":"Wojtek [kapituła Quentina]"},{"id":"WmJpZ25pZXcgIlplZCIgWnljaCBbTGFuc01hY2FicmUgLyBMTVB1Ymxpc2hpbmdd","name":"Zbigniew \"Zed\" Zych [LansMacabre / LMPublishing]"},{"id":"QWRhbSBKdXN6Y3phaw==","name":"Adam Juszczak"},{"id":"SmFrdWIgS2FwZWw=","name":"Jakub Kapel"},{"id":"SmFnbmEgUm9sc2th","name":"Jagna Rolska"},{"id":"TmVyZCBLb2JpZXRh","name":"Nerd Kobieta"},{"id":"S2F0YXJ6eW5hIFdpZXJ6Ymlja2E=","name":"Katarzyna Wierzbicka"},{"id":"QXJ0dXIgS3VyYXNpP3NraSBbU3BlbGxhcmVuYV0=","name":"Artur Kurasiński [Spellarena]"},{"id":"S3VyY3phayBbQXZhbmdhcmRhXQ==","name":"Kurczak [Avangarda]"},{"id":"VEJE","name":"TBD"},{"id":"S2FjcGVyIEpha3ViaWFr","name":"Kacper Jakubiak"},{"id":"QW5uYSBLYT90b2No","name":"Anna Kańtoch"},{"id":"S2F0YXJ6eW5hIEJlcmVuaWthIE1pc3pjenVr","name":"Katarzyna Berenika Miszczuk"},{"id":"QW5uYSBNdXNpYT9vd2ljeg==","name":"Anna Musiałowicz"},{"id":"WmVzcD8_IENvcGVybmljdXMgQ29ycG9yYXRpb24=","name":"Zespół Copernicus Corporation"},{"id":"TGl6IEthdHJpbiBbQ29wZXJuaWN1cyBDb3Jwb3JhdGlvbl0=","name":"Liz Katrin [Copernicus Corporation]"},{"id":"S2FyY3ptYQ==","name":"Karczma"},{"id":"P3VrYXN6IEt1Y2hhcmN6eWs=","name":"Łukasz Kucharczyk"},{"id":"U2ViYXN0aWFuIE11c2llbGFrIFtTdG93YXJ6eXN6ZW5pZSBUP3VtYWN6eSBMaXRlcmF0dXJ5XQ==","name":"Sebastian Musielak [Stowarzyszenie Tłumaczy Literatury]"},{"id":"S3J6eXN6dG9mIEtpZXR6bWFu","name":"Krzysztof Kietzman"},{"id":"QW5uYSBTdHVkbmlhcmVrIFtTdG93YXJ6eXN6ZW5pZSBUP3VtYWN6eSBMaXRlcmF0dXJ5XQ==","name":"Anna Studniarek [Stowarzyszenie Tłumaczy Literatury]"},{"id":"TWF0ZXVzeiBBbGJlcnNraSBbRnVuZGFjamEgSGVyb2VzIE9yY2hlc3RyYV0=","name":"Mateusz Alberski [Fundacja Heroes Orchestra]"},{"id":"ZHIgUGlvdHIgUnljaWVsc2tpIFtSRVNRTF0=","name":"dr Piotr Rycielski [RESQL]"},{"id":"Vz9nbG93eSBTem93aW5pc3Rh","name":"Węglowy Szowinista"},{"id":"SmFuICJIYW5zIiBNaWxld3NraSBbRG9icmUgUnp1dHld","name":"Jan \"Hans\" Milewski [Dobre Rzuty]"},{"id":"QWduaWVzemthIEhhP2Fz","name":"Agnieszka Hałas"},{"id":"Sm9hbm5hIEt1P2Frb3dza2E=","name":"Joanna Kułakowska"},{"id":"SmVyenkgUnp5bW93c2tp","name":"Jerzy Rzymowski"},{"id":"P3VrYXN6IFdpP25pZXdza2k=","name":"Łukasz Wiśniewski"},{"id":"UmFkZWsgJ1J5bnZvcmQnIFBvbGE_c2tp","name":"Radek 'Rynvord' Polański"},{"id":"QWxxdWE=","name":"Alqua"},{"id":"QmFyYmFyYSAiVmFzaWEiIEtyYXNvd2ljeiBbIkphayBiP2R6aWUgdyBOaWdodCBDaXR5PyJd","name":"Barbara \"Vasia\" Krasowicz [\"Jak będzie w Night City?\"]"},{"id":"TWFnZGFsZW5hIEt1Y2VudHk=","name":"Magdalena Kucenty"},{"id":"Sm9hbm5hIFcuIEdhanpsZXI=","name":"Joanna W. Gajzler"},{"id":"QW5uYSBTdHVkbmlhcmVr","name":"Anna Studniarek"},{"id":"S2FtaWwgQm9yZWsgW1BvZHM_dWNoYW5lLnBsXQ==","name":"Kamil Borek [Podsłuchane.pl]"},{"id":"QW5uYSBTenVtYWNoZXI=","name":"Anna Szumacher"},{"id":"TWFyaWsgVmFvIFtXYXJzemF3c2tpIEZhbmtsdWIgU3RhciBXYXJzIENlbnRlcnBvaW50IC8gTWFuZGEnWWFpbV0=","name":"Marik Vao [Warszawski Fanklub Star Wars Centerpoint / Manda'Yaim]"},{"id":"QXJ0dHJpY2lh","name":"Arttricia"},{"id":"UGFubmEgS2FsaW5h","name":"Panna Kalina"},{"id":"U2xvZSBbQXZhbmdhcmRhXQ==","name":"Sloe [Avangarda]"},{"id":"U2hldnU=","name":"Shevu"},{"id":"QW50b25pIENlc2FyeiBbS28_byBuYXVrb3dlIGJhZGFuaWEgZ2llciBBTEVBIFVXXQ==","name":"Antoni Cesarz [Koło naukowe badania gier ALEA UW]"},{"id":"P3VrYXN6ICJMYW53b29rIiBLb2t1cmV3aWN6IFtCPz9raXRueSBLbHVjel0=","name":"Łukasz \"Lanwook\" Kokurewicz [Błękitny Klucz]"},{"id":"U3R1ZHppbiBbM2s2IG9waW5paSBwb2RjYXN0IC8gVG9wb3J5XQ==","name":"Studzin [3k6 opinii podcast / Topory]"},{"id":"UGF0cnlrID9hd25pY3phayBbV3lkYXduaWN0d28gQ29wZXJuaWN1cyBDb3Jwb3JhdGlvbl0=","name":"Patryk Ławniczak [Wydawnictwo Copernicus Corporation]"},{"id":"RG9va28_YSBUZW1hdHU=","name":"Dookoła Tematu"},{"id":"RWlyZWU=","name":"Eiree"},{"id":"RW1pbGlhICJFbWkgZGUgQ2xhbSIgTWFybGV3c2th","name":"Emilia \"Emi de Clam\" Marlewska"},{"id":"SWxvbmEgIktvYmlldGEgP2xpbWFrIiBNeXN6a293c2th","name":"Ilona \"Kobieta Ślimak\" Myszkowska"},{"id":"QWdhdGEgImtwdC5wdW5rIiBTdXRrb3dza2EgW05hZGFd","name":"Agata \"kpt.punk\" Sutkowska [Nada]"},{"id":"QW5uYSBNYXJpYSBWYW5pdGFjaGk=","name":"Anna Maria Vanitachi"},{"id":"VHlncnp5ayBbUG9sc2thIEZ1bmRhY2phIEZhbnRhc3R5a2kgTmF1a293ZWpd","name":"Tygrzyk [Polska Fundacja Fantastyki Naukowej]"},{"id":"UGF0cnlrICJOb2J1IiBLb25pZWN6bnk=","name":"Patryk \"Nobu\" Konieczny"},{"id":"RXdhIFRvbWFzemV3aWN6IFtXaG9zb21lXQ==","name":"Ewa Tomaszewicz [Whosome]"},{"id":"Uml2ZXIgUmF3aT9za2EgW1dob3NvbWVd","name":"River Rawińska [Whosome]"},{"id":"S290","name":"Kot"},{"id":"RW50ZXIgW0Jhc3RhcmR6aSBSUEdd","name":"Enter [Bastardzi RPG]"},{"id":"SmFrdWIgUG9tcGVqdXN6IFNvbGVja2kgIFtCPz9raXRueSBLbHVjel0=","name":"Jakub Pompejusz Solecki  [Błękitny Klucz]"},{"id":"V2lrdG9yICJBZ29yYSIgSm9ybWFuIFtDb3Blcm5pY3VzIENvcnBvcmF0aW9uXQ==","name":"Wiktor \"Agora\" Jorman [Copernicus Corporation]"},{"id":"QXd3IE5vcGUgKExlbmEpIFtDaGFvcyBFcnBlZ293eV0=","name":"Aww Nope (Lena) [Chaos Erpegowy]"},{"id":"QmVuaWFtaW4gTXVzenk_c2tpIFtXeWRhd25pY3R3byBXaWVsb2tyb3RuZWdvIFd5Ym9ydV0=","name":"Beniamin Muszyński [Wydawnictwo Wielokrotnego Wyboru]"},{"id":"SmFrdWIgWmFwYT9hIFtDb3Blcm5pY3VzIENvcnBvcmF0aW9uIC8gRWtpcGEgRHppZWR6aWN0d2EgSW1wZXJpdW1d","name":"Jakub Zapała [Copernicus Corporation / Ekipa Dziedzictwa Imperium]"},{"id":"S2FyY3ptYXJ6IFtDb3Blcm5pY3VzIENvcnBvcmF0aW9uXQ==","name":"Karczmarz [Copernicus Corporation]"},{"id":"RWw_biBbRWw_bm93ZSBUYWJsZXRvcHld","name":"Elán [Elánowe Tabletopy]"},{"id":"V2lrdG9yIER5bWtvd3NraSBpIEthY3BlciBLYXJ3YWNraSBbS28_byBOYXVrb3dlIEJhZGFuaWEgR2llciBBTEVBXQ==","name":"Wiktor Dymkowski i Kacper Karwacki [Koło Naukowe Badania Gier ALEA]"},{"id":"Zmx1b3IgW1BpZXJ3c3phIER5cmVrdHl3YSBGbHVvcmFd","name":"fluor [Pierwsza Dyrektywa Fluora]"},{"id":"aGFsbGlkYXk=","name":"halliday"},{"id":"R2FtYml0Lg==","name":"Gambit."},{"id":"S3J6eXN6dG9mIFJ6ZT9jYSBbUkVTUUxd","name":"Krzysztof Rzeńca [RESQL]"},{"id":"R3J1cGEgU3plcm1pZXJraSBTY2VuaWN6bmVqIFN6ZXJtamU_ZSA=","name":"Grupa Szermierki Scenicznej Szermjeże "},{"id":"SGFubmEgUmFzemV3c2thLUt1cnNhIFtXYXJzemF3c2thIFByYWNvd25pYSBLaW5ldG9ncmFmaWN6bmFd","name":"Hanna Raszewska-Kursa [Warszawska Pracownia Kinetograficzna]"},{"id":"ZHIgUmFkb3M_YXcgS2FjemFuIFtSRVNRTF0=","name":"dr Radosław Kaczan [RESQL]"},{"id":"S29ybmVsaWEgIlBlcj9hIiBKYW5rb3dza2EgW1dob3NvbWVd","name":"Kornelia \"Perła\" Jankowska [Whosome]"},{"id":"S2FtaWwgW1N0b3dhcnp5c3plbmllIEc_c2kgUG9sc2tpY2ggKFNHUCld","name":"Kamil [Stowarzyszenie Gęsi Polskich (SGP)]"},{"id":"TWFyY2luIEI_ayBbU3plcm1qZT9lXQ==","name":"Marcin Bąk [Szermjeże]"},{"id":"RGFyaXVzeiBLb3Ntb3dza2kgW1N0dWRpbyBQREtd","name":"Dariusz Kosmowski [Studio PDK]"},{"id":"Uj8_YSA_dWNqYSBSPz95Y2thIFtBdmFuZ2FyZGFd","name":"Róża Łucja Różycka [Avangarda]"},{"id":"RHJlandlbg==","name":"Drejwen"},{"id":"TWFjaWVqIEdvcnl3b2Rh","name":"Maciej Gorywoda"},{"id":"P290ciBbP290ci9GYWplcmJvbF0=","name":"Łotr [Łotr/Fajerbol]"},{"id":"Q2hvY2hsaWsgW0Nob2NobGlrIFJQR2lybCAvIFRvcG9yeV0=","name":"Chochlik [Chochlik RPGirl / Topory]"},{"id":"U2tyeWJhIFtCaWdPUyAoYmlqYXR5a2kgdyBBdmFuZ2FyZHppZSld","name":"Skryba [BigOS (bijatyki w Avangardzie)]"},{"id":"TkZHIGkgV2FmZXJnaXg=","name":"NFG i Wafergix"},{"id":"V29qdGVrICJJYmFuZXpNIiA_ZWJrb3dza2kgW1RvcG9yeV0=","name":"Wojtek \"IbanezM\" Łebkowski [Topory]"},{"id":"TWFrc3ltaWxpYW4gSmFrdWJpYWs=","name":"Maksymilian Jakubiak"},{"id":"Qm90QyBXYXJzemF3YQ==","name":"BotC Warszawa"},{"id":"QWdnaWU=","name":"Aggie"},{"id":"SXphYWsgW0dhbWVzIGZvciBNdXNpYyB3aWtpXQ==","name":"Izaak [Games for Music wiki]"},{"id":"QWxla3NhbmRyYSAiU2lvc3RyYSBSYWJpbmEiIEs_c28_","name":"Aleksandra \"Siostra Rabina\" Kęsoń"},{"id":"UD8_a2kgZG8gU3A_P2tp","name":"Półki do Spółki"},{"id":"QXF1YQ==","name":"Aqua"},{"id":"SGFuZ2FyIHogUG90d29yYW1pIFtLbHViIE1vZGVsYXJza2ld","name":"Hangar z Potworami [Klub Modelarski]"},{"id":"TWF0aXNvZnQ=","name":"Matisoft"},{"id":"UGlvdHIgIlRjaW9uYWwiIFRyemNpb25rb3dza2k=","name":"Piotr \"Tcional\" Trzcionkowski"},{"id":"VG9tYXN6IEhlYmVsICJTY2hhbGF6YXIiIFtQaWFzZWN6eT9za2kgS2x1YiBHaWVyIEJpdGV3bnljaCAiUGlhc2Vjem5pa2kiXQ==","name":"Tomasz Hebel \"Schalazar\" [Piaseczyński Klub Gier Bitewnych \"Piaseczniki\"]"},{"id":"V2Fyc3phd3NraSBLbHViIEdv","name":"Warszawski Klub Go"},{"id":"UGF3ZT8gR29yZG9uIFtQPz9tcm9rXQ==","name":"Paweł Gordon [Półmrok]"},{"id":"TW9yZGFkcmVkIFtGYWJ1bGFybnkgV2F3ZXJd","name":"Mordadred [Fabularny Wawer]"},{"id":"R29yZGlhbiBbQXZhbmdhcmRhXQ==","name":"Gordian [Avangarda]"},{"id":"RGFtaWFuIFBvbGE_c2tp","name":"Damian Polański"},{"id":"UmFmYT8gW0F2YW5nYXJkYV0=","name":"Rafał [Avangarda]"},{"id":"RGFjYXIgQXJpYSBBcnVuZG90dGlyIFtBdmFuZ2FyZGFd","name":"Dacar Aria Arundottir [Avangarda]"},{"id":"bm8_bmVqbSBbQXZhbmdhcmRhXQ==","name":"nołnejm [Avangarda]"},{"id":"N2gzbTBuIFtEaWFiZWxza2llIFdlcnNldHld","name":"7h3m0n [Diabelskie Wersety]"},{"id":"QXJlaw==","name":"Arek"},{"id":"QW5neSBbR3Jvem5hd2N6ZSBLbz9vIE5hdWtvd2UgIkdla29uIiAvIFJvZ2FsZSAtIFBvem5hP3NraWUgR3JhbmllXQ==","name":"Angy [Groznawcze Koło Naukowe \"Gekon\" / Rogale - Poznańskie Granie]"},{"id":"S2F0c3Vrbw==","name":"Katsuko"},{"id":"RWxpIFphbGV3c2tpIFtFa2lwYSBEemllZHppY3R3YSBJbXBlcml1bV0=","name":"Eli Zalewski [Ekipa Dziedzictwa Imperium]"},{"id":"TXljaGEgKFJORykgW0NvcGVybmljdXMgQ29ycG9yYXRpb25d","name":"Mycha (RNG) [Copernicus Corporation]"},{"id":"QW50b25pICJSdWdoYWx0IiBTb2Jrb3dpY3ogW0RyYWdvbnNob3JuIFN0dWRpb3Nd","name":"Antoni \"Rughalt\" Sobkowicz [Dragonshorn Studios]"},{"id":"UGl4ZWw=","name":"Pixel"},{"id":"TXIuIFBvc25payAtIFJhZmE_IFBvP25payBbQ29wZXJuaWN1cyBDb3Jwb3JhdGlvbiAvIEF2YW5nYXJkYSAvIE1yLiBQb3NuaWtd","name":"Mr. Posnik - Rafał Pośnik [Copernicus Corporation / Avangarda / Mr. Posnik]"},{"id":"Z2VtR2VtaW5p","name":"gemGemini"},{"id":"QXRpY2EgW0hhcmRDb3J5IFJQR10=","name":"Atica [HardCory RPG]"},{"id":"TWFyY2luICJTZWppIiBTZWdpdA==","name":"Marcin \"Seji\" Segit"},{"id":"Qm9vZHppayBbQm9vZHppayAvIEF2YW5nYXJkYV0=","name":"Boodzik [Boodzik / Avangarda]"},{"id":"Q2FyeWNhIFtBdmFuZ2FyZGFd","name":"Caryca [Avangarda]"},{"id":"Q29lbiBbQ29lbnMgQ2F2ZV0=","name":"Coen [Coens Cave]"},{"id":"U2VjaWEgWz9vd2N5IER3dWR6aWVzdGVrXQ==","name":"Secia [Łowcy Dwudziestek]"},{"id":"TXJ1aw==","name":"Mruk"},{"id":"Uz9hd2Vr","name":"Sławek"},{"id":"TWFyZWsgSm9iZGEgW0ZhYnVsYXJueSBXYXdlciBd","name":"Marek Jobda [Fabularny Wawer ]"},{"id":"QWxpYSBbVGVtcG9yYWxueSBUZWF0cnp5ayBDaHJvbm9zYV0=","name":"Alia [Temporalny Teatrzyk Chronosa]"},{"id":"S3J6eT8=","name":"Krzyś"},{"id":"SWZyeXQgW01pYXN0byB6ZSBTcGk_dSAoaWZyeXRycGcuYmxvZ3Nwb3QuY29tKSAvIEthcGl0dT9hIFF1ZW50aW5hXQ==","name":"Ifryt [Miasto ze Spiżu (ifrytrpg.blogspot.com) / Kapituła Quentina]"},{"id":"Um9iZXJ0IFdlYmVy","name":"Robert Weber"},{"id":"RXZnZW55IExlZG92c2tpa2g=","name":"Evgeny Ledovskikh"},{"id":"RmlsZXVzIFtGaWxldXMgWmVyb10=","name":"Fileus [Fileus Zero]"},{"id":"UmFkb3M_YXcgV2FuYXQ=","name":"Radosław Wanat"},{"id":"V3VqZWsgSmFzaXJ1cyBbWmE_b2dhIE5hdXRpbHVzYSAvIEdyYWxuaWEgV3Vqa2EgSmFzaXJ1c2Fd","name":"Wujek Jasirus [Załoga Nautilusa / Gralnia Wujka Jasirusa]"},{"id":"S29yemVtIFtMYWJpcnludCBLb3N0ZWtd","name":"Korzem [Labirynt Kostek]"},{"id":"S2FyaW9u","name":"Karion"},{"id":"R3J6ZXNpZWsgS2F3a2EtT3NpayBbQXZhbmdhcmRhXQ==","name":"Grzesiek Kawka-Osik [Avangarda]"},{"id":"TWFnZ29yIFtLcmFrb3dza2EgU2llPyBGYW50YXN0eWtpXQ==","name":"Maggor [Krakowska Sieć Fantastyki]"},{"id":"UmFuZ2FyIFtLb3Q_b3duaWEgKEZhamVyYm9sKV0=","name":"Rangar [Kotłownia (Fajerbol)]"},{"id":"VG9tZWsgTi4=","name":"Tomek N."},{"id":"TmllZD93aWVkPyBbSWR6aWVOaWVkendpZWR6LnBsXQ==","name":"Niedźwiedź [IdzieNiedzwiedz.pl]"},{"id":"RG9taW5pa2EgIk5lZXJkaWUiIEtsZWR6aWsgW1J6dWNhaiBuaWUgR2FkYWohIC8gQ29wZXJuaWNvbiAvIFJQR293YSBLcnlqP3drYV0=","name":"Dominika \"Neerdie\" Kledzik [Rzucaj nie Gadaj! / Copernicon / RPGowa Kryjówka]"},{"id":"QmFzaWEgU2FkcmFrdT9hIFtEb20gUD9vbj9jZWogU3Rhcm8_Y2ld","name":"Basia Sadrakuła [Dom Płonącej Starości]"},{"id":"QUluYWsgW0ltYWdpbmFyaXVtUlBHIC8gVG9wb3J5XQ==","name":"AInak [ImaginariumRPG / Topory]"},{"id":"U21vY3phcmthICBbRXJwZWdvd3kgTWF0ZWN6bmlrIC8gU3Rvd2FyenlzemVuaWUgTmllemFsZT9ueWNoIEtvYm9sZD93XQ==","name":"Smoczarka  [Erpegowy Matecznik / Stowarzyszenie Niezależnych Koboldów]"},{"id":"SmFua28_IFtTdG93YXJ6eXN6ZW5pZSBUb3Bvcnld","name":"Jankoś [Stowarzyszenie Topory]"},{"id":"RnJhbmVrIFdyP2JlbCBbUD8_bXJva10=","name":"Franek Wróbel [Półmrok]"},{"id":"QXJhbnggW0xhbnMgTWFjYWJyZV0=","name":"Aranx [Lans Macabre]"},{"id":"VGhvcmdhbHNvbiBbSGVuZ2FsXQ==","name":"Thorgalson [Hengal]"},{"id":"U2hhZXJsb2M=","name":"Shaerloc"},{"id":"UmV5c2FuIFtBdmFuZ2FyZGFd","name":"Reysan [Avangarda]"},{"id":"V3lkYXduaWN0d28gSVVWSQ==","name":"Wydawnictwo IUVI"},{"id":"V3lkYXduaWN0d28gTXVkdWtv","name":"Wydawnictwo Muduko"},{"id":"UGF0cnlrID9hd25pY3phayBbQ29wZXJuaWN1cyBDb3Jwb3JhdGlvbl0=","name":"Patryk Ławniczak [Copernicus Corporation]"},{"id":"TmFzdGlp","name":"Nastii"}]