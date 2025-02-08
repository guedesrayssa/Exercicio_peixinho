var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update,
    }
};

var game = new Phaser.Game(config);
var peixinho;

function preload() {
    this.load.image('mar', 'assets/bg_azul-escuro.png');
     // carregar imagem de fundo

    this.load.image('logo', 'assets/logo-inteli_branco.png');
    // carregar logo

    this.load.image('tubarao', 'assets/peixes/tubarao.png');
     // carregar tubarao

    this.load.image('seaweed', 'assets/seaweed.png');
     // carrega alga

}

function create() {
    this.add.image(400, 300, 'mar');   
    // adiciona a imagem de fundo na tela

    this.add.image(400, 525, 'logo').setScale(0.5); 
    // adiciona o logo na tela

    this.add.image(800, 600, 'seaweed')
        .setOrigin(1, 1)
        .setScale(0.1);
        // alga direita

    this.add.image(0, 600, 'seaweed')
        .setOrigin(0, 1)
        .setScale(0.1);
        // alga esquerda

    peixinho = this.add.image(400, 300, 'tubarao')
        .setOrigin(0.5, 0.5)
        .setScale(0.8); // diminui o tamanho do tubarao
}

function update() {
    
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;

}

