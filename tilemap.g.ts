// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100004030303030303030903030303030305070909090909090909090906090909060709090906090909090909090909090607090903030303030303030303030306070909090609090909090909090909060709090909090909090909060909090607030303030305090909040303030306070809060909070909090708070909060709090909090709090909090909070607090906090909090909070909090806040303030303030909030303030303050209090909090909090907090909090102090908060909090909090906090801020909030303030303030303030303010209090609090909090609090909090102090909090906090909090906090901`, img`
2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 
2 . . . . . . . . . . 2 . . . 2 
2 . . . 2 . . . . . . . . . . 2 
2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . 2 . . . . . . . . . . 2 
2 . . . . . . . . . . 2 . . . 2 
2 2 2 2 2 2 2 . . . 2 2 2 2 2 2 
2 . . 2 . . 2 . . . 2 . 2 . . 2 
2 . . . . . 2 . . . . . . . 2 2 
2 . . 2 . . . . . . 2 . . . . 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 . . . . . . . . . 2 . . . . 2 
2 . . . 2 . . . . . . . 2 . . 2 
2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . 2 . . . . . 2 . . . . . 2 
2 . . . . . 2 . . . . . 2 . . 2 
`, [myTiles.transparency16,sprites.dungeon.purpleOuterEast1,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterWest1,sprites.dungeon.chestOpen,sprites.dungeon.floorLight0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
