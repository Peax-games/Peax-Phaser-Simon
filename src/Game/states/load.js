export default function loadState() {
    return {
        preload: function () {
            var loadingLabel = this.game.add.text(80, 150, 'loading...',
                { font: '30px Courier', fill: '#fff' });

            this.game.scale.scaleMode = window.Phaser.ScaleManager.SHOW_ALL;
            this.game.scale.pageAlignHorizontally = true;
            this.game.scale.pageAlignVertically = true;
            //game.stage.backgroundColor = '#eee';

            this.game.load.spritesheet('item', 'img/number-buttons.png', 160, 160);

            this.bck = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBackground');
            this.bck.anchor.setTo(0.5, 0.5);
            this.bck.scale.setTo(0.5, 0.5);
            this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBar');
            this.preloadBar.anchor.setTo(0, 0.5);
            this.preloadBar.scale.setTo(0.5, 1);
            this.preloadBar.x = this.world.centerX - this.preloadBar.width / 2;


            this.load.setPreloadSprite(this.preloadBar);

            this.load.atlas('spriteset', 'assets/spriteset.png', 'assets/spriteset.jsona');
            this.load.image('tweet', 'assets/twit.png');
            this.load.audio('sfx', ['assets/sfx.mp3', 'assets/sfx.ogg', 'assets/sfx.wav', 'assets/sfx.m4a']);

        },
        create: function () {
            this.game.state.start('play')
        }
    }
}