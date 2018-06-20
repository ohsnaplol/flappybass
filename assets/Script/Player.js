cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
        gravity: 0,
        jumpHeight: 0,
        jumpDuration: 0
    },

    // use this for initialization
    onLoad: function () {
        // initialize jump action
        this.jumpAction = this.setJumpAction()

        // initialize keyboard input listener
        this.setInputControl()
    },

    setJumpAction: function() {
        // jump up
        var jumpUp = cc.jumpTo(this.jumpDuration, 200, 200, 100, 1)

        return jumpUp
    },

    setInputControl: function() {
        var self = this

        cc.SystemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, function(event) {
            if (event.keyCode == cc.Key.space) {
                self.jump = true
            }
        })
    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        if(this.jump) {
            this.setJumpAction
        }
    },
});
