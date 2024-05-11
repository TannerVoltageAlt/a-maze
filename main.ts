namespace SpriteKind {
    export const goalSpot = SpriteKind.create()
    export const failSpot = SpriteKind.create()
    export const lifeItem = SpriteKind.create()
    export const coinItem = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Render.jumpWithHeightAndDuration(mySprite, 16, 500)
})
tileUtil.onMapLoaded(function (tilemap2) {
    tileUtil.createSpritesOnTiles(assets.tile`coin`, assets.image`coin`, SpriteKind.coinItem)
    tileUtil.createSpritesOnTiles(assets.tile`life`, assets.image`life`, SpriteKind.lifeItem)
    tileUtil.createSpritesOnTiles(assets.tile`goal`, assets.image`goal`, SpriteKind.goalSpot)
    tileUtil.createSpritesOnTiles(assets.tile`fail`, assets.image`fail`, SpriteKind.failSpot)
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
let mySprite: Sprite = null
mySprite = Render.getRenderSpriteVariable()
let list = [
tilemap`level0`,
tilemap`level1`,
tilemap`level3`,
tilemap`level4`,
tilemap`level6`,
tilemap`level7`
]
tiles.setCurrentTilemap(list[0])
info.setLife(3)
