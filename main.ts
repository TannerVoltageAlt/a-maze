namespace SpriteKind {
    export const goalSpot = SpriteKind.create()
    export const failSpot = SpriteKind.create()
    export const lifeItem = SpriteKind.create()
    export const coinItem = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.lifeItem, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.hearts, 500)
    info.changeLifeBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.goalSpot, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    tileUtil.unloadTilemap()
    currentLevel += 1
    if (currentLevel < 6) {
        music.play(music.createSong(hex`00780004080200`), music.PlaybackMode.LoopingInBackground)
        loadCurrentLevel()
    } else {
        game.gameOver(true)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Render.jumpWithHeightAndDuration(mySprite, 16, 500)
})
function loadCurrentLevel () {
    tiles.setCurrentTilemap(list[currentLevel])
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.coinItem, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.rings, 500)
    info.changeScoreBy(1)
})
tileUtil.onMapLoaded(function (tilemap2) {
    tileUtil.createSpritesOnTiles(assets.tile`coin`, assets.image`coin`, SpriteKind.coinItem)
    tileUtil.createSpritesOnTiles(assets.tile`life`, assets.image`life`, SpriteKind.lifeItem)
    tileUtil.createSpritesOnTiles(assets.tile`goal`, assets.image`goal`, SpriteKind.goalSpot)
    tileUtil.createSpritesOnTiles(assets.tile`fail`, assets.image`fail`, SpriteKind.failSpot)
    tiles.placeOnRandomTile(mySprite, assets.tile`spawnTile`)
})
sprites.onCreated(SpriteKind.lifeItem, function (sprite) {
    Render.setSpriteAnimations(sprite, Render.createAnimations(100, assets.animation`lifeAnim`))
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    Render.toggleViewMode()
})
sprites.onCreated(SpriteKind.coinItem, function (sprite) {
    Render.setSpriteAnimations(sprite, Render.createAnimations(100, assets.animation`coinAnim`))
})
let currentLevel = 0
let list: tiles.TileMapData[] = []
let mySprite: Sprite = null
mySprite = Render.getRenderSpriteVariable()
list = [
tilemap`level0`,
tilemap`level1`,
tilemap`level2`,
tilemap`level3`,
tilemap`level4`,
tilemap`level5`
]
currentLevel = 0
info.setLife(3)
loadCurrentLevel()
