const Discord = require('discord.js');
const bot = new Discord.Client();
bot.login("NDg4NDUxNzE4MTIwNDcyNTc3.DncbAA.BNclyiMeWnPr1gqFq0Tk6dEkbUA");


bot.on("ready", () => {
    console.log("Je suis prêt !")
    client.user.setGame(`taper la commande *aide`);
});

bot.on("guildMemberAdd", member => {
	member.guild.channels.find("name","general").send(`**Bienvenue à Akiryu Camp, ${member.user.username} !** 
Avant de commencer l'aventure, nous te recommandons de faire ta **fiche de personnage** et de la poster dans ce channel fiches-de-personnages 
Si tu as **besoin d'aide**, viens en discuter dans general
Ton personnage aura besoin d'un **logement** ! Fais un tour ici: demandes-de-logements 

fuck comment on met des liens Marie soit ma force 

*Aaron & Rey sont là pour t'aider parce qu'ils sont les plus beaux alley yolo*`)
})


bot.on('message' , message => {

	//QUE POUR LES MODOS
	if (message.member != null)
	{
		message.member.roles.forEach((role) =>{
		
			console.log(role.name);
	
			if(role.name == 'gérant du serveur')
			{
				if(message.content === "Tu es très mignon !"){
					message.reply("HAHA !!! Je sais que je suis mignon !");
					console.log('Juste pour un message');
				}
	
				if(message.content === prefix + "ping") {
					message.reply("Pong!");
				  } else
				  if (message.content === prefix + "blah") {
					message.reply("Meh.");
				  }
	
				if(message.content === prefix + "Braeghor"){
				var help_embed = new Discord.RichEmbed()
				.setColor("#40A497")
			.setImage("https://i.pinimg.com/564x/13/33/78/133378484b3a82c78ff8b9803caebf8d.jpg")
				.setTitle("Une attaque surprise !")
				.setThumbnail("https://zupimages.net/up/18/37/th01.png")
				.setDescription("**Braeghor** | Level: **3** | Type: **Animal** \n Équivalent des envoyés du Diable, les Braeghor ne ressentent pas la peur. Ils ont tendance à désirer mourir dans la gloire et l’honneur du combat, ce qui a poussé plusieurs Braeghor à combattre jusqu'à leurs derniers souffle de vie. Leurs crocs acérés trois fois plus tranchant qu'une lame de couteau font d'eux de véritable prédateurs. ")
				.addField("Liste des capacités - Braeghor" , "1• Morsure mortelle \n ")
				.addField("Principaux points faibles", "1• En règle général, les Braeghor ne suivent que leurs instincts primaires. \n 2• Leurs rapidités est à double tranchant.")
				.setFooter("©Scénario crée pour Akiryu Camp.")
				message.channel.sendMessage(help_embed);
				console.log("Braeghor")
				}
	
				if(message.content === prefix + "Korrozyf"){
					var help_embed = new Discord.RichEmbed()
					.setColor("#40A497")
					.setImage("https://i.pinimg.com/564x/59/fe/28/59fe288526cd9ee2cc40a4101fcd6ac7.jpg")
					.setTitle("Une attaque surprise !")
					.setThumbnail("https://zupimages.net/up/18/37/th01.png")
					.setDescription("**Korrozyf** | Level: **3** | Type: **Fluide** \n Créature redoutable qui draine l’énergie vitale d’une cible vivante, se produit automatiquement lorsqu’une attaque de corps à corps ou à distance touche. Chaque attaque d’absorption d’énergie réussie inflige un ou plusieurs niveaux négatifs, ses capacités sont comparables aux Biest à la seule différence qu'ils doivent attraper et 'stocker' leurs proies à l'intérieur de leurs corps pour absorder leurs énergies. Monstre à l'esprit trompeur, ils possèdent aussi le don d'incarner nos plus grandes peurs.")
					.addField("Liste des capacités - Korrozyf" , "1• Transformation \n 2• Buveur d'âme ")
					.addField("Principaux points faibles", "1• Ce monstre à beau être redoutable, il possède une défense très médiocre. ")
					.setFooter("©Scénario crée pour Akiryu Camp.")
					message.channel.sendMessage(help_embed);
					console.log("Korrozyf")
					}
	
			
				if(message.content === prefix + "Biest"){
						
						var help_embed = new Discord.RichEmbed()
						.setColor("#40A497")
					.setImage("https://i.pinimg.com/564x/26/50/2c/26502cda7336d63d239665e4a905adc7.jpg")
						.setTitle("Une attaque surprise !")
						.setThumbnail("https://zupimages.net/up/18/37/th01.png")
						.setDescription("**Biest** | Level: **3** | Type: **Mage** \n Les Biest sont les plus craints par toute la population, et avec raison. En plus d’avoir l’apparence de corps en décomposition, les Biest peuvent utiliser la magie et n’hésite pas à mentir et à tricher pour obtenir ce qu’ils désirent. Capable d'absorber l'énergie vitale de tout être vivant, ces créatures démoniaques n'ont aucune scruptule à voler l'âme d'autrui pour alimenter leurs pouvoirs.")
						.addField("Liste des capacités - Biest" , "1• Buveur d'âme \n 2• Sacrifice \n 3• Absorption d'énergie")
						.addField("Principaux points faibles", "1• Pendant qu'il absorbe l'énergie d'un être vivant, sa défense baisse de moitié.")
						.setFooter("©Scénario crée pour Akiryu Camp.")
						message.channel.sendMessage(help_embed);
						console.log("Biest")
						}



						if(message.content === prefix + "Crocz"){
							var help_embed = new Discord.RichEmbed()
							.setColor("#40A497")
							.setImage("https://i.pinimg.com/564x/70/2c/9b/702c9bf554c5d4b802bec0a1980721f7.jpg")
								.setTitle("Une attaque surprise !")
								.setThumbnail("https://zupimages.net/up/18/37/th01.png")
								.setDescription("**Crocz** | Level: **2** | Type: **Poison** \n Doté d'un physique qui inspire la crainte et l'horreur, les Crocz sont classés dans la catégorie des monstres les plus agressifs. Et malgré leurs physiques si horriblement, si typiquement propre aux morts-vivants recèlent aux bouts de leurs doigts de longues ongles pointus et acérer. Ils se battent à mains nues et en émissent du gaz empoisonné depuis leurs voies orales.")
								.addField("Liste des capacités - Crocz" , "1• Jet de poison \n 2• Morsure \n 3• Attaque de griffes")
								.addField("Ses principaux points faibles", "1• Il se déplace très rapidement mais s'épuise vite. \n 2• Leurs plus grandes faiblesses sommeille au niveau du ventre. ")
								.setFooter("©Scénario crée pour Akiryu Camp.")
								message.channel.sendMessage(help_embed);
							console.log("Crocz")
							}
				
							if(message.content === prefix + "Dodecaponzor"){
								var help_embed = new Discord.RichEmbed()
								.setColor("#40A497")
								.setImage("https://i.pinimg.com/564x/03/f7/ba/03f7ba5413c42491a64651f69ba34a72.jpg")
									.setTitle("Une attaque surprise !")
									.setThumbnail("https://zupimages.net/up/18/37/th01.png")
									.setDescription("**Dodecaponzor** | Level: **1** | Type: **Air** \n En dépit du fait qu'ils marchent très lentement et en piquet, ils arrivent à atteindre une très grande vitesse de course en vol. Les Dodecaponzor sont loin d'être dépourvus d'intelligence mais leurs attaques sont plutôt faibles comparés aux autres monstres. Ils utilisent pour se battre un arc et une épée.")
									.addField("Liste des capacités - Dodecaponzor" , "1• Attaque aérienne \n 2• Coup de sabre \n 3• Tire à l'arc")
									.addField("Ses principaux points faibles", "1• Les dégâts qu'ils occasionnent sont plus légers que d'autres attaques provenant d'autres monstres. \n 2• Ils peuvent survoler le ciel jusqu'à seulement 10 mètres de hauteur.")
									.setFooter("©Scénario crée pour Akiryu Camp.")
									message.channel.sendMessage(help_embed);
								console.log("Dodecaponzor")
								}
				
						
							if(message.content === prefix + "Damonfeuer"){
								var help_embed = new Discord.RichEmbed()
								.setColor("#40A497")
													.setImage("https://i.pinimg.com/564x/7c/93/49/7c9349f52d6519dbd2a7a7b68ef3e490.jpg")
														.setTitle("Une attaque surprise !")
														.setThumbnail("https://zupimages.net/up/18/37/th01.png")
														.setDescription("**Damonfeuer** | Level: **3** | Type: **Mage** \n Ce monstre possède une intelligence humaine. Cette capacité, combinée à l'appel à la magie, rend le Damonfeuer difficile à vaincre. Très dangereusement réputés pour leurs vivacités d'esprits et leurs capacités à percer à jour les styles de combats de leurs adversaires, ils sont potentiellement capable d'utiliser des sortilèges. Néanmoins, leurs invocations peuvent durer plus de trentes secondes.")
														.addField("Liste des capacités - Damonfeuer" , "1• Attaque de feu \n 2• Attaque de glace \n 3• Invocations")
														.addField("Principaux points faibles", "1• Les sorts qu'ils utilisent prennent 10 à 30 secondes en moyenne avant de se composer. \n 2• Ils deviennent vulnérables au contacte de l'eau.")
														.setFooter("©Scénario crée pour Akiryu Camp.")
														message.channel.sendMessage(help_embed);
									console.log("Damonfeuer")
									}
											
						if (message.content.startsWith("*rp")) {
						message.channel.sendMessage(("") + (message.content.replace('*rp ',''))); 
						};









						//LES MISSIONS RANDOM
						mission1 = "./mission/mission1.png"; mission2 ="./mission/mission2.png";
												if (message.content ==="Choix de mission"){
													random();

													if (randnum == 1){
														message.reply({ files: [mission1]});
														console.log(randnum);
													}

													if (randnum == 2){
														message.reply({ files: [mission2]});
														console.log(randnum);
													}
												}



















												if(message.content.includes("lol")){
													random();

													if (randnum == 1){
														{
															var help_embed = new Discord.RichEmbed()
															.setColor("#40A497")
														.setImage("https://i.pinimg.com/564x/70/2c/9b/702c9bf554c5d4b802bec0a1980721f7.jpg")
															.setTitle("Une attaque surprise !")
															.setThumbnail("https://zupimages.net/up/18/37/th01.png")
															.setDescription("**Crocz** | Level: **2** | Type: **Poison** \n Doté d'un physique qui inspire la crainte et l'horreur, les Crocz sont classés dans la catégorie des monstres les plus agressifs. Et malgré leurs physiques si horriblement, si typiquement propre aux morts-vivants recèlent aux bouts de leurs doigts de longues ongles pointus et acérer. Ils se battent à mains nues et en émissent du gaz empoisonné depuis leurs voies orales.")
															.addField("Liste des capacités - Crocz" , "1• Jet de poison \n 2• Morsure \n 3• Attaque de griffes")
															.addField("Ses principaux points faibles", "1• Il se déplace très rapidement mais s'épuise vite. \n 2• Leurs plus grandes faiblesses sommeille au niveau du ventre. ")
															.setFooter("©Scénario crée pour Akiryu Camp.")
															message.channel.sendMessage(help_embed);
															console.log(randnum);
															}
														
													}

													if (randnum == 2){
														{
														var help_embed = new Discord.RichEmbed()
														.setColor("#40A497")
													.setImage("https://i.pinimg.com/564x/03/f7/ba/03f7ba5413c42491a64651f69ba34a72.jpg")
														.setTitle("Une attaque surprise !")
														.setThumbnail("https://zupimages.net/up/18/37/th01.png")
														.setDescription("**Dodecaponzor** | Level: **1** | Type: **Air** \n En dépit du fait qu'ils marchent très lentement et en piquet, ils arrivent à atteindre une très grande vitesse de course en vol. Les Dodecaponzor sont loin d'être dépourvus d'intelligence mais leurs attaques sont plutôt faibles comparés aux autres monstres. Ils utilisent pour se battre un arc et une épée.")
														.addField("Liste des capacités - Dodecaponzor" , "1• Attaque aérienne \n 2• Coup de sabre \n 3• Tire à l'arc")
														.addField("Ses principaux points faibles", "1• Les dégâts qu'ils occasionnent sont plus légers que d'autres attaques provenant d'autres monstres. \n 2• Ils peuvent survoler le ciel jusqu'à seulement 10 mètres de hauteur.")
														.setFooter("©Scénario crée pour Akiryu Camp.")
														message.channel.sendMessage(help_embed);
														console.log(randnum);
														}
														
													}



											
												}










												if(message.content.includes("kiwi")){
													random();

													if (randnum == 1){
														{
														var help_embed = new Discord.RichEmbed()
														.setColor("#40A497")
													.setImage("https://i.pinimg.com/564x/7c/93/49/7c9349f52d6519dbd2a7a7b68ef3e490.jpg")
														.setTitle("Une attaque surprise !")
														.setThumbnail("https://zupimages.net/up/18/37/th01.png")
														.setDescription("**Damonfeuer** | Level: **3** | Type: **Mage** \n Ce monstre possède une intelligence humaine. Cette capacité, combinée à l'appel à la magie, rend le Damonfeuer difficile à vaincre. Très dangereusement réputés pour leurs vivacités d'esprits et leurs capacités à percer à jour les styles de combats de leurs adversaires, ils sont potentiellement capable d'utiliser des sortilèges. Néanmoins, leurs invocations peuvent durer plus de trentes secondes.")
														.addField("Liste des capacités - Damonfeuer" , "1• Attaque de feu \n 2• Attaque de glace \n 3• Invocations")
														.addField("Principaux points faibles", "1• Les sorts qu'ils utilisent prennent 10 à 30 secondes en moyenne avant de se composer. \n 2• Ils deviennent vulnérables au contacte de l'eau.")
														.setFooter("©Scénario crée pour Akiryu Camp.")
														message.channel.sendMessage(help_embed);
														console.log(randnum);
														}
														
													}
	
													if (randnum == 2){
														{
														var help_embed = new Discord.RichEmbed()
														.setColor("#40A497")
													.setImage("https://i.pinimg.com/564x/13/33/78/133378484b3a82c78ff8b9803caebf8d.jpg")
														.setTitle("Une attaque surprise !")
														.setThumbnail("https://zupimages.net/up/18/37/th01.png")
														.setDescription("**Braeghor** | Level: **3** | Type: **Animal** \n Équivalent des envoyés du Diable, les Braeghor ne ressentent pas la peur. Ils ont tendance à désirer mourir dans la gloire et l’honneur du combat, ce qui a poussé plusieurs Braeghor à combattre jusqu'à leurs derniers souffle de vie. Leurs crocs acérés trois fois plus tranchant qu'une lame de couteau font d'eux de véritable prédateurs. ")
														.addField("Liste des capacités - Braeghor" , "1• Morsure mortelle \n ")
														.addField("Principaux points faibles", "1• En règle général, les Braeghor ne suivent que leurs instincts primaires. \n 2• Leurs rapidités est à double tranchant.")
														.setFooter("©Scénario crée pour Akiryu Camp.")
														message.channel.sendMessage(help_embed);
														console.log(randnum);
														}
														
													}
	



											
												}














												if(message.content.includes("uly")){
													random();

													if (randnum == 1){
														{
														var help_embed = new Discord.RichEmbed()
														.setColor("#40A497")
													.setImage("https://i.pinimg.com/564x/26/50/2c/26502cda7336d63d239665e4a905adc7.jpg")
														.setTitle("Une attaque surprise !")
														.setThumbnail("https://zupimages.net/up/18/37/th01.png")
														.setDescription("**Biest** | Level: **3** | Type: **Mage** \n Les Biest sont les plus craints par toute la population, et avec raison. En plus d’avoir l’apparence de corps en décomposition, les Biest peuvent utiliser la magie et n’hésite pas à mentir et à tricher pour obtenir ce qu’ils désirent. Capable d'absorber l'énergie vitale de tout être vivant, ces créatures démoniaques n'ont aucune scruptule à voler l'âme d'autrui pour alimenter leurs pouvoirs.")
														.addField("Liste des capacités - Biest" , "1• Buveur d'âme \n 2• Sacrifice \n 3• Absorption d'énergie")
														.addField("Principaux points faibles", "1• Pendant qu'il absorbe l'énergie d'un être vivant, sa défense baisse de moitié.")
														.setFooter("©Scénario crée pour Akiryu Camp.")
														message.channel.sendMessage(help_embed);
														console.log(randnum);
														}
														
													}
	
													if (randnum == 2){
														{
														var help_embed = new Discord.RichEmbed()
														.setColor("#40A497")
													.setImage("https://i.pinimg.com/564x/59/fe/28/59fe288526cd9ee2cc40a4101fcd6ac7.jpg")
														.setTitle("Une attaque surprise !")
														.setThumbnail("https://zupimages.net/up/18/37/th01.png")
														.setDescription("**Korrozyf** | Level: **3** | Type: **Fluide** \n Créature redoutable qui draine l’énergie vitale d’une cible vivante, se produit automatiquement lorsqu’une attaque de corps à corps ou à distance touche. Chaque attaque d’absorption d’énergie réussie inflige un ou plusieurs niveaux négatifs, ses capacités sont comparables aux Biest à la seule différence qu'ils doivent attraper et 'stocker' leurs proies à l'intérieur de leurs corps pour absorder leurs énergies. Monstre à l'esprit trompeur, ils possèdent aussi le don d'incarner nos plus grandes peurs.")
														.addField("Liste des capacités - Korrozyf" , "1• Transformation \n 2• Buveur d'âme ")
														.addField("Principaux points faibles", "1• Ce monstre à beau être redoutable, il possède une défense très médiocre. ")
														.setFooter("©Scénario crée pour Akiryu Camp.")
														message.channel.sendMessage(help_embed);
														console.log(randnum);
														}
														
													}
	



											
												}















									}

								
								});
							}
							

						});


						//POUR EFFACER LES MESSAGES A LA FIN DU DEROULEMENT remplacer monstres
						bot.on('message' , message => {
							if(message.content === prefix + "monstre"){
							message.delete(); }})

						bot.on('message' , message => {
							if(message.content === prefix + "monstre2"){
								message.delete(); }})

						bot.on('message' , message => {
							if(message.content === prefix + "monstre3"){
								message.delete(); }})

								bot.on('message' , message => {
									if(message.content.startsWith("*rp")){
										message.delete(); }})


						//TEST ROLES

						bot.on("guildMemberAdd", function(member)
						{    
						let memberRole = member.guild.roles.find("name" , "Member");
						member.addRole(memberRole);
						});
						bot.on('message', function(message){
							if(message.content == 'Je veux participer à la mission 1')
							{
								message.channel.send(`Salut ` + message.author + `, pour valider, écrit: ***"Je confirme ma participation pour la mission 1"***`);
							
							}
							if(message.content == 'Je confirme ma participation pour la mission 1')
							{   
								if (message.member != null)
						{
						message.member.send("Ta participation a bien été enregistré pour la mission 1.");
								let memberRole = message.member.guild.roles.find("name" , "Mission1");
								message.member.addRole(memberRole);
							(function(Mission1)
								{
									message.member.addRole(Mission1);
									
								});
						}
								
							}
						});

						//TEST ROLES 2

						bot.on("guildMemberAdd", function(member)
						{   
						let memberRole = member.guild.roles.find("name" , "Member");
						member.addRole(memberRole);
						});
						bot.on('message', function(message){
							if(message.content == 'Je veux participer à la mission 2')
							{
								message.channel.send(`Salut ` + message.author + `, pour valider, écrit: ***"Je confirme ma participation pour la mission 2"***`);
							
							}
							
							if(message.content == prefix + 'aide')
							{
								message.channel.send(`Un petit coup de main ` + message.author + ` ? **Voici la liste des commandes !**
								** *rp ** - Faire parler le bot
								
								"**Je veux participer à la mission 2**" - Cette phrase permettre au bot de répondre par un message, demandant __une confirmation__
								"**Je confirme ma participation pour la mission 2**" - __Rang de la mission 2 ajouté__ au profil de l'utilisateur + Reception d'un __message de confirmation en pv__
								Même fonctionnement pour la mission 1:
								"**Je veux participer à la mission 1**" - Confirmation
								"**Je confirme ma participation pour la mission 1**" - Ajout rang + pv

								Petite astuce: On peut éviter d'écrire car on y est pas obligé: "Je veux participer à la mission x" et directement valider la participation avec "Je confirme ma participation pour la mission x"
								"**Choix de mission**" - Faire pop une __mission aléatoire__
								Pour le moment, je n'ai mis que deux images random ! Quand on aurait créer les vraies images de mission, je les remplacerai ;v;
								
								--------------------------
								
								*Ce que comporte le bot en plus des monstres et des missions:*
								- Les monstres apparaissent aléatoirement 
								- Un message de bienvenue quand un nouvel utilisateur arrive sur le serveur
								- Un message de bienvenue en privé (bon à la base, c'était juste pour expliquer les règles etc et pour tester que je l'ai mis)
								- La permission qu'à nous deux de faire pop des monstres grâce au rang Gérant du serveur hehe
								- Le bot envoie un message en pv lorsqu'une mission est acceptée
								`);
							
							}
							if(message.content == 'Je confirme ma participation pour la mission 2')
							{   
								if (message.member != null)
						{
						message.member.send("Ta participation a bien été enregistré pour la mission 2.");
								let memberRole = message.member.guild.roles.find("name" , "Mission2");
								message.member.addRole(memberRole);
							(function(Mission2)
								{
									message.member.addRole(Mission2);
									
								});
						}  }
						});


						//AJOUT ROLE MEMBRE DES LE DEPART
						bot.on("guildMemberAdd", member => {
							member.send("Sois la bienvenue ici");
							let memberRole = member.guild.roles.find("name" , "Membre");
							member.addRole(memberRole)
								});


						//LE MODULE RANDOM
						function random(min, max) {
							min = Math.ceil(0);
							max = Math.floor(2);
							randnum = Math.floor(Math.random() * (max - min +1) + min);

						}

						bot.login("NDg4NDUxNzE4MTIwNDcyNTc3.DncbAA.BNclyiMeWnPr1gqFq0Tk6dEkbUA");
