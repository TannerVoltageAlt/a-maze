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
            case "level2":
            case "level2":return tiles.createTilemap(hex`1400140003030303030303030303030303000000030303000302010101000300000000000303030304000300030303030300030403030300000000000300030000000000030003030303030003030300030003000000000003000300000003000304030003010300000000000300030003000300030003000300030000000000030003000300030003000300000003000000000003000000030003000300030303000300000000000303030303000000030003040300030000000000000003040303030303000300030003000000000000000300000000000000000003000300000000000000030003030300030303030300030000000000000003000304030000000000000003000000000000000300030003030303030303030300000000000000030000000000000000000000030000000000000003030303030303030303030503000000000000000000000000000000000003030300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
2222222222222...222.
2.....2.....2222..2.
22222.2.222.....2.2.
....2.22222.222.2.2.
....2.2...2.2.2.2.2.
....2.2.2.2.2.2.2.2.
....2.2.2.2.2.2...2.
....2...2.2.2.222.2.
....22222...2.2.2.2.
......2.22222.2.2.2.
......2.........2.2.
......2.222.22222.2.
......2.2.2.......2.
......2.2.222222222.
......2...........2.
......22222222222.2.
................222.
....................
....................
....................
`, [myTiles.transparency16,myTiles.tile2,myTiles.tile1,sprites.castle.tileGrass2,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.collectibleBlueCrystal], TileScale.Sixteen);


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
