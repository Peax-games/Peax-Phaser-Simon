export default function bootState(){
    return{
        preload: function () {

            this.load.image('preloaderBackground', 'assets/preloadbck.png');
            this.load.image('preloaderBar', 'assets/preloadbar.png');
    
        },    
        create: function(){
            this.game.physics.startSystem(window.Phaser.Physics.ARCADE);
            this.game.state.start('load');
        }
    }
}