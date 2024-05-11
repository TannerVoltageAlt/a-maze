namespace SpriteKind {
    export const goalSpot = SpriteKind.create()
    export const failSpot = SpriteKind.create()
    export const lifeSprite = SpriteKind.create()
}
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    Render.toggleViewMode()
})
tileUtil.onMapLoaded(function (tilemap2) {
    tiles.placeOnRandomTile(mySprite, assets.tile`spawnPoint`)
    tileUtil.createSpritesOnTiles(sprites.dungeon.collectibleBlueCrystal, assets.image`goal`, SpriteKind.goalSpot)
    tileUtil.createSpritesOnTiles(sprites.dungeon.collectibleRedCrystal, assets.image`failSpot`, SpriteKind.failSpot)
    tileUtil.createSpritesOnTiles(assets.tile`life`, assets.image`life`, SpriteKind.lifeSprite)
})
let mySprite: Sprite = null
let currentLevel = 0
scene.setBackgroundImage(assets.image`title`)
Render.setViewMode(ViewMode.tilemapView)
pauseUntil(() => controller.A.isPressed())
Render.setViewMode(ViewMode.raycastingView)
mySprite = Render.getRenderSpriteVariable()
let levels = [tilemap`level1`, tilemap`level2`]
tiles.setCurrentTilemap(levels.get(currentLevel))
scene.setBackgroundImage(assets.image`sky`)
