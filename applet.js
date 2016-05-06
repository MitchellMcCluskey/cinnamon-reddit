const Applet = imports.ui.applet;
const Util = imports.misc.util;

function RedditApplet(orientation, panel_height, instance_id) {
    this._init(orientation, panel_height, instance_id);
}

RedditApplet.prototype = {
    __proto__: Applet.IconApplet.prototype,

    _init: function(orientation, panel_height, instance_id) {
        Applet.IconApplet.prototype._init.call(this, orientation, panel_height, instance_id);

        this.set_applet_icon_name('force-exit');
        this.set_applet_tooltip(_('Show latest Reddit posts'));
    },

    on_applet_clicked: function() {
        Util.spawn(['xkill']);
    }
};

function main(metadata, orientation, panel_height, instance_id) {
    return new RedditApplet(orientation, panel_height, instance_id);
}