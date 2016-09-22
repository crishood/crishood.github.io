var animData = {
        wrapper: document.getElementById('bodymovin'),
        animType: 'svg',
        loop: true,
        prerender: true,
        autoplay: true,
        path: 'data.json'
    };
    var anim = bodymovin.loadAnimation(animData);
    bodymovin.setSubframeRendering(false);