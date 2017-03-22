//scene1
var tl = new TimelineMax();
    tl
    .from("#s1_x5F_top2",2,{scale:0,x:600, ease:Bounce.easeOut})
    .from("#s1_x5F_top3", 1, {scale:0,  ease:Back.easeOut}, 0.5)
    .from("#s1_x5F_top1", 1, {scale:0,  ease:Back.easeOut}, 0.8, "+=0.5")
    .from("#s1_x5F_top4", 1, {scale:0,  ease:Back.easeOut}, 0.8, "+=0.5")
    .staggerFrom(".st248", 1.5, {scale:0,  ease:Elastic.easeOut.config(1, 0.3)}, 0.2)
    .staggerFrom(".st265", 2, {scale:0,  ease:Elastic.easeOut.config(1, 0.3)}, 0.2, "-=2")
    .staggerFrom(".st266", 2, {scale:0,  ease:Elastic.easeOut.config(1, 0.3)}, 0.2, "-=2")
    .from("#s1_x5F_top0", 1, {scale:0,  ease:Back.easeOut}, 0.1, "+=0.5");
  