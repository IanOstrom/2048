twos_tile_images = [
    assets.image("""2"""),
    assets.image("""4"""),
    assets.image("""8"""),
    assets.image("""16"""),
    assets.image("""32"""),
    assets.image("""64"""),
    assets.image("""128"""),
    assets.image("""256"""),
    assets.image("""512"""),
    assets.image("""1024"""),
    assets.image("""2048""")
]

vel: number = 200

class Tile(sprites.ExtendableSprite):
    pow: number = 1

def spawn_tile():
    tile: Tile = Tile(twos_tile_images[0], SpriteKind.player)
    tiles.place_on_random_tile(tile, assets.tile("""spot"""))

def check_win(tile: Tile):
    if tile.pow == 11:
        game.game_over(True)

def on_overlap(tile: Tile, otherTile: Tile):
    if tile.pow == otherTile.pow:
        tile.pow += 1
        tile.set_image(twos_tile_images[tile.pow - 1])
        sprites.destroy(otherTile)
        check_win(tile)
    else:
        tile.set_velocity(0, 0)
        otherTile.set_velocity(0, 0)
        tiles.place_on_tile(tile, tile.tilemap_location())
        tiles.place_on_tile(otherTile, otherTile.tilemap_location())
sprites.on_overlap(SpriteKind.player, SpriteKind.player, on_overlap)

def move_tiles(xVel, yVel):
    for tile in sprites.all_of_kind(SpriteKind.player):
        tile.set_velocity(xVel, yVel)
    spawn_tile()

def on_left_pressed():
    move_tiles(-1 * vel, 0)

def on_right_pressed():
    move_tiles(1 * vel, 0)

def on_up_pressed():
    move_tiles(0, -1 * vel)

def on_down_pressed():
    move_tiles(0, 1 * vel)

controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)


tiles.set_current_tilemap(tilemap("""grid"""))

spawn_tile()
spawn_tile()