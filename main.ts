namespace SpriteKind {
    export const ThurstKind = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.darkGroundCenter, function (sprite, location) {
    game.over(false, effects.splatter)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (info.life() > 0) {
        mySprite.ax = THRUST
        thrustSprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. 2 4 d . . . . . . . . . . . . 
2 2 4 5 d . . . . . . . . . . . 
. 2 4 d . . . . . . . . . . . . 
2 2 4 5 d . . . . . . . . . . . 
. 2 4 d . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (info.life() > 0) {
        mySprite.ay = GRAVITY - THRUST
        thrustSprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . d d 5 5 d d . . . . . 
. . . . . d d 5 5 d d . . . . . 
. . . . . 2 d d d d 2 . . . . . 
. . . . . 2 d 4 4 d 2 . . . . . 
. . . . . 2 4 4 4 4 2 . . . . . 
. . . . . 2 2 . . 2 2 . . . . . 
. . . . . 2 2 . . 2 2 . . . . . 
. . . . . . 2 . . 2 . . . . . . 
. . . . . . . . . . . . . . . . 
`)
    }
})
function land (multiplier: number) {
    if (mySprite.vy > 16) {
        game.over(false, effects.slash)
    } else {
        info.setScore(multiplier * info.life())
        game.over(true, effects.smiles)
    }
}
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    reset_thrust()
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    reset_thrust()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorLight0, function (sprite, location) {
    land(1)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (info.life() > 0) {
        mySprite.ax = 0 - THRUST
        thrustSprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . d . . 
. . . . . . . . . . . . d 5 4 2 
. . . . . . . . . . . . . d 4 . 
. . . . . . . . . . . . . d 4 2 
. . . . . . . . . . . . . d 4 2 
. . . . . . . . . . . . d 5 4 2 
. . . . . . . . . . . . . d . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorClosedNorth, function (sprite, location) {
    land(2)
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    reset_thrust()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorLockedWest, function (sprite, location) {
    land(4)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    land(10)
})
function reset_thrust () {
    mySprite.ay = GRAVITY
    thrustSprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
    mySprite.ax = 0
}
info.onLifeZero(function () {
    reset_thrust()
})
let thrustSprite: Sprite = null
let mySprite: Sprite = null
let GRAVITY = 0
let THRUST = 0
let idle = 0
THRUST = 20
GRAVITY = 4
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 2 1 1 1 1 1 1 2 . . . 
. . . . . 2 1 9 9 9 9 1 2 . . . 
. . . . . 2 1 7 7 7 7 1 2 . . . 
. . . . . 2 1 7 7 7 7 1 2 . . . 
. . . . . 2 1 1 1 1 1 1 2 . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
mySprite.ay = GRAVITY
tiles.setTilemap(tiles.createTilemap(
            hex`180010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000f0f0f0f0f0000000000000000000000000f12120f0000000a0a0a090f0f00000000000000000000000f09090f0000000a0a0a0a0a0f0f1111110f00000000000f0f0a090f0c00000a0a0a0a0a090f0f110f0f00000000000f0a0a0a0f0f000f0a0a0a0a0a0a0a0a0a090f101010100f0f0a0a0a0a0a0a0a`,
            img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,sprites.builtin.oceanSand7,sprites.builtin.oceanSand6,sprites.builtin.oceanSand11,sprites.builtin.oceanSand13,sprites.builtin.oceanSand14,sprites.builtin.oceanSand15,sprites.builtin.oceanDepths10,sprites.builtin.oceanDepths11,sprites.builtin.oceanSand9,sprites.builtin.oceanDepths3,sprites.builtin.oceanSand8,sprites.dungeon.collectibleInsignia,sprites.builtin.oceanDepths0,sprites.builtin.coral0,sprites.dungeon.darkGroundCenter,sprites.dungeon.floorLight0,sprites.dungeon.doorClosedNorth,sprites.dungeon.doorLockedWest],
            TileScale.Sixteen
        ))
scene.cameraFollowSprite(mySprite)
effects.starField.startScreenEffect()
info.setLife(300)
mySprite.setFlag(SpriteFlag.ShowPhysics, true)
thrustSprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.ThurstKind)
thrustSprite.setFlag(SpriteFlag.Ghost, true)
game.onUpdate(function () {
    thrustSprite.setPosition(mySprite.x, mySprite.y)
})
game.onUpdate(function () {
    if (controller.left.isPressed() || controller.right.isPressed() || controller.down.isPressed()) {
        info.changeLifeBy(-1)
    }
})
