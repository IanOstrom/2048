let twos_tile_images = [assets.image`2`, assets.image`4`, assets.image`8`, assets.image`16`, assets.image`32`, assets.image`64`, assets.image`128`, assets.image`256`, assets.image`512`, assets.image`1024`, assets.image`2048`]
let vel = 200
class Tile extends sprites.ExtendableSprite {
    static pow: number
    private ___pow_is_set: boolean
    private ___pow: number
    get pow(): number {
        return this.___pow_is_set ? this.___pow : Tile.pow
    }
    set pow(value: number) {
        this.___pow_is_set = true
        this.___pow = value
    }
    
    public static __initTile() {
        Tile.pow = 1
    }
    
}

Tile.__initTile()

function spawn_tile() {
    let tile = new Tile(twos_tile_images[0], SpriteKind.Player)
    tiles.placeOnRandomTile(tile, assets.tile`spot`)
}

function check_win(tile: Tile) {
    if (tile.pow == 11) {
        game.gameOver(true)
    }
    
}

sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function on_overlap(tile: Tile, otherTile: Tile) {
    if (tile.pow == otherTile.pow) {
        tile.pow += 1
        tile.setImage(twos_tile_images[tile.pow - 1])
        sprites.destroy(otherTile)
        check_win(tile)
    } else {
        tile.setVelocity(0, 0)
        otherTile.setVelocity(0, 0)
        tiles.placeOnTile(tile, tile.tilemapLocation())
        tiles.placeOnTile(otherTile, otherTile.tilemapLocation())
    }
    
})
function move_tiles(xVel: number, yVel: number) {
    for (let tile of sprites.allOfKind(SpriteKind.Player)) {
        tile.setVelocity(xVel, yVel)
    }
    spawn_tile()
}

controller.left.onEvent(ControllerButtonEvent.Pressed, function on_left_pressed() {
    move_tiles(-1 * vel, 0)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function on_right_pressed() {
    move_tiles(1 * vel, 0)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function on_up_pressed() {
    move_tiles(0, -1 * vel)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function on_down_pressed() {
    move_tiles(0, 1 * vel)
})
tiles.setCurrentTilemap(tilemap`grid`)
spawn_tile()
spawn_tile()
