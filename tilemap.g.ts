// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "grid":
            case "grid1":return tiles.createTilemap(hex`080007000000000000000000000001020202020300000809090909040000080909090904000008090909090400000809090909040000070606060605`, img`
. . . . . . . . 
. . 2 2 2 2 2 2 
. . 2 . . . . 2 
. . 2 . . . . 2 
. . 2 . . . . 2 
. . 2 . . . . 2 
. . 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterWest0,myTiles.tile1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "spot":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
