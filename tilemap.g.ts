// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000010101010101010101010101010101040105000000000000000000000000020401010101010101000101010101010104000000000000010001000000000000000000000000000100010000000000000000000000000001000100000000000000000000000000010001000000000000000000000000000100010000000000000000000000000001000100000000000000000000000000010301000000000000000000000000000404040000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 
. . . . . . 2 . 2 . . . . . . . 
. . . . . . 2 . 2 . . . . . . . 
. . . . . . 2 . 2 . . . . . . . 
. . . . . . 2 . 2 . . . . . . . 
. . . . . . 2 . 2 . . . . . . . 
. . . . . . 2 . 2 . . . . . . . 
. . . . . . 2 . 2 . . . . . . . 
. . . . . . 2 2 2 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.builtin.forestTiles22,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.collectibleBlueCrystal,sprites.builtin.forestTiles2,myTiles.tile1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "life":
            case "tile2":return tile2;
            case "spawnPoint":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
