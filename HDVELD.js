var storyContent = ﻿{"inkVersion":20,"root":[[{"#":"author: Noé Carette"},"^- \"Hé salut ! T'es la nouvelle personne en charge du diabète ici, c'est ça?\"  S'exclame à toi une petite fille à l'air pressé, munie d'un drôle de tambour qu'elle fait résonner de manière rythmée.","\n","ev","str","^Assurément oui, c'est moi !","/str","/ev",{"*":"0.c-0","flg":4},"ev","str","^Je ne sais pas ?","/str","/ev",{"*":"0.c-1","flg":4},"ev","str","^En tout cas, je suis nouvelleau ici.","/str","/ev",{"*":"0.c-2","flg":4},{"c-0":["^ - \"Assurément oui, c'est moi !\"","\n",{"->":"situation"},{"->":"0.g-0"},{"#f":5}],"c-1":["^ - \"Je ne sais pas ?\"","\n",{"->":"situation"},{"->":"0.g-0"},{"#f":5}],"c-2":["^ - \"En tout cas, je suis nouvelleau ici.\"","\n",{"->":"situation"},{"->":"0.g-0"},{"#f":5}],"g-0":["done",{"#f":5}]}],"done",{"situation":[["^- \"Beta est en congé maladie et il n'y a plus personne pour le diabète, on est en stand-by, Zzoé a réussi à provoquer une extrême fatigue de notre hôte mais si on veut pas perdre nos jobs il faudrait songer à lae réveiller.","\n","^Tu t'y connais en diabète, j'espère ?\" Te dit-elle avec un élan d'espoir.","\n","ev","str","^Assurément pas","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Même si je vois ce que c'est...","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^Oui, la personne atteinte doit prendre de l'insuline à intervalle régulière, et..","/str","/ev",{"*":".^.c-2","flg":4},"ev","str","^Mais quel·le hôte ?","/str","/ev",{"*":".^.c-3","flg":4},{"c-0":["^ - \"Assurément pas\" ","\n",{"->":"bonnechance"},{"#f":5}],"c-1":["^ - \"Même si je vois ce que c'est...\"","\n",{"->":"bonnechance"},{"#f":5}],"c-2":["^ - \"Oui, la personne atteinte doit prendre de l'insuline à intervalle régulière, et..\"","\n",{"->":"bonnechance"},{"#f":5}],"c-3":["^ - \"Mais quel·le hôte ?\"","\n",{"->":"bonnechance"},{"#f":5}]}],{"#f":1}],"bonnechance":[["^- \"Eh bien, je vais te laisser avec taon pote. J'ai moi-même un coeur à faire battre ici. Bonne chance !\"","\n","ev","str","^Merci !","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^ -\"Merci !\"","\n",{"->":"chapitre1"},{"#f":5}]}],{"#f":1}],"chapitre1":[["^Chapitre I : être ou ne pas être ",{"#":"Le texte s'efface. Jeu de couleur + description quand même après annonce du chapitre"},"\n","^<i>Tout s'efface autour de toi. Tu es comme transporté loin de tout, dans une enveloppe chaude et à première vue presque réconfortante. Il fait très sombre. Petit à petit, tout s'éclaire.</i> L'hôte [se réveille].","\n","^Iel regarde autour de lui. Un [immense soleil] traverse les persiennes.","\n","^\"Mais quelle heure il est là ?\" pense-iel en se retournant sur le ventre afin de cacher son visage dans les plis du coussin.","\n","^Soudain, une voix résonne <i>comme dans ta tête:</i>","\n","^- \"Allo ? Je viens aux nouvelles. ça se passe ? T'as prévu quoi de beau pour lae pote ?\" ",{"#":"commentaire meta genre au téléphone"},"\n","ev","str","^Mais qui parle ?","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Prévu ? Comment ça ?","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["^ - \"Mais qui parle ?\"","\n",{"->":"Boom"},{"#f":5}],"c-1":["^ - \"Prévu ? Comment ça ?\"","\n",{"->":"quoifaire"},{"#f":5}]}],{"#f":1}],"Boom":[["^- \"C'est moi Boom, du coeur ! Oh je n'me suis pas présentée avant, excuse-moi. Je m'occupe de tout c'qui est réponse émotionnelle directement dans le coeur. On va souvent travailler en collaboration toi et moi, je le sens. Donc, quoi de beau ?\"","\n",["ev",{"^->":"Boom.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^\"Je ne comprends pas ce que tu me demandes.\" ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Boom.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":"quoifaire"},{"#f":5}]}],{"#f":1}],"quoifaire":["^- \"Eh bien, son diabète n'arrête pas d'exister tu sais ? C'est une maladie chronique, traitable ok, mais pas curable. Il faut qu'iel sente un peu que son pancréas n'est pas chillou billou en train de régler et corriger le taux de sucre dans son sang ! Fais preuve d'inventivité j'sais pas, j'suis sur que tu gères. On t'a pas choisi pour rien !","\n","^Bon, j'ai toujours un coeur à faire vasciller moi. – à plus !\"","\n","^<i>Boom raccroche. Tu te demandes quel est le fuck ici. Mais l'hôte bouge et toi avec.</i> Le réveil semble être certain [maintenant].","\n",{"->":"end"},{"#f":1}],"end":[[["^Fin de la démo.","\n","end",{"#f":5,"#n":"g-0"}],null],{"#f":1}],"#f":1}],"listDefs":{}};