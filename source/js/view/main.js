var Ractive = require('../module');

module.exports = function() {
    images = [
        {name:'../gif/agastopia.gif'},
        {name:'../gif/agelast.gif'},
        {name:'../gif/aloof.gif'},
        {name:'../gif/amiable.gif'},
        {name:'../gif/appease.gif'},
        {name:'../gif/arcane.gif'},
        {name:'../gif/aurora.gif'},
        {name:'../gif/autotonsorialist.gif'},
        {name:'../gif/avarice.gif'},
        {name:'../gif/bamboozle.gif'},
        {name:'../gif/basorexia.gif'},
        {name:'../gif/bealeaguer.gif'},
        {name:'../gif/benumb.gif'},
        {name:'../gif/bibble.gif'},
        {name:'../gif/bumfuzzle.gif'},
        {name:'../gif/callipygian.gif'},
        {name:'../gif/chide.gif'},
        {name:'../gif/clandestine.gif'},
        {name:'../gif/comminatory.gif'},
        {name:'../gif/coquette.gif'},
        {name:'../gif/denouement.gif'},
        {name:'../gif/diffident.gif'},
        {name:'../gif/dolor.gif'},
        {name:'../gif/ecdysiast.gif'},
        {name:'../gif/egomaniac.gif'},
        {name:'../gif/elated.gif'},
        {name:'../gif/eloquence.gif'},
        {name:'../gif/epethany.gif'},
        {name:'../gif/epoch.gif'},
        {name:'../gif/erubescent.gif'},
        {name:'../gif/ethereal.gif'},
        {name:'../gif/extravagant.gif'},
        {name:'../gif/flabbergast.gif'},
        {name:'../gif/Fugacious.gif'},
        {name:'../gif/gasconade.gif'},
        {name:'../gif/giftionary identity.psd'},
        {name:'../gif/habile.gif'},
        {name:'../gif/heavy-headed.gif'},
        {name:'../gif/idle.gif'},
        {name:'../gif/illicit.gif'},
        {name:'../gif/incandescence.gif'},
        {name:'../gif/incessant.gif'},
        {name:'../gif/inebriant.gif'},
        {name:'../gif/ineffable.gif'},
        {name:'../gif/inquisitive.gif'},
        {name:'../gif/inspissate.gif'},
        {name:'../gif/iridescent.gif'},
        {name:'../gif/kakorrhaphiophobia.gif'},
        {name:'../gif/lagoon.gif'},
        {name:'../gif/limerence.gif'},
        {name:'../gif/lithe.gif'},
        {name:'../gif/logomachy.gif'},
        {name:'../gif/luminescence.gif'},
        {name:'../gif/macrosmatic.gif'},
        {name:'../gif/Maladroit.gif'},
        {name:'../gif/malnourished.gif'},
        {name:'../gif/maverick.gif'},
        {name:'../gif/meacock.gif'},
        {name:'../gif/melliflous.gif'},
        {name:'../gif/meretricious2.gif'},
        {name:'../gif/merrythought.gif'},
        {name:'../gif/monotonous.gif'},
        {name:'../gif/moppet.gif'},
        {name:'../gif/multitudinous.gif'},
        {name:'../gif/nefarious.gif'},
        {name:'../gif/negligent.gif'},
        {name:'../gif/novice.gif'},
        {name:'../gif/oblivious.gif'},
        {name:'../gif/odyssey.gif'},
        {name:'../gif/omnipotent.gif'},
        {name:'../gif/perplexed.gif'},
        {name:'../gif/perusal.gif'},
        {name:'../gif/petrichor.gif'},
        {name:'../gif/plethora.gif'},
        {name:'../gif/previse.gif'},
        {name:'../gif/promenade.gif'},
        {name:'../gif/quire.gif'},
        {name:'../gif/quixotic.gif'},
        {name:'../gif/reverie.gif'},
        {name:'../gif/serendipity.gif'},
        {name:'../gif/shaghettification.gif'},
        {name:'../gif/solitude.gif'},
        {name:'../gif/somnambulist.gif'},
        {name:'../gif/sonder.gif'},
        {name:'../gif/supine.gif'},
        {name:'../gif/syzygy.gif'},
        {name:'../gif/taciturn.gif'},
        {name:'../gif/truculent.gif'},
        {name:'../gif/ulotrichous.gif'},
        {name:'../gif/vellichor.gif'},
        {name:'../gif/veneer.gif'},
        {name:'../gif/woebegone.gif'},
        {name:'../gif/xertz.gif'},
        {name:'../gif/yarnborough.gif'}
    ];

    var ractive, images;

  return new Ractive({


    el: document.querySelector('.main'),

    template: require('./main.html'),

    goto: function( imageNum ){

        var images = this.get('images');

        var random = imageNum || Math.floor((Math.random() * 90) + 1);

        while (random < 0 ) {
            random += images.length;
        }

        random %= images.length;

        this.set({
            image: images[random],
            current: random,
        });
    },



    data: {
        images: images
    },


    computed: {
    },

    oninit: function( options) {
        this.on('goto', function(event, index){
            this.goto(index);
        });


        this.goto(0);
    },

    onrender: function() {
    }

  });

};
