const Applet    = imports.ui.applet;
const PopupMenu = imports.ui.popupMenu;

function main(metadata, orientation, panel_height, instance_id) {
    return new RedditApplet(metadata, orientation, panel_height, instance_id);
}

function RedditApplet(metadata, orientation, panel_height, instance_id) {
    this._init(metadata, orientation, panel_height, instance_id);
}

RedditApplet.prototype = {
    __proto__: Applet.IconApplet.prototype,

    _init: function(metadata, orientation, panel_height, instance_id) {
        Applet.IconApplet.prototype._init.call(this, orientation, panel_height, instance_id);

        this.set_applet_icon_path(metadata.path + '/icons/icon-white.png');
        this.set_applet_tooltip(_('Show latest Reddit posts'));

        this._appletMenu = this._createMenu(orientation);
    },

    on_applet_clicked: function() {
        this._appletMenu.toggle();
    },

    /**
     * @param orientation
     * @returns {RedditMenu}
     * @private
     */
    _createMenu: function(orientation) {
        let menuManager = new PopupMenu.PopupMenuManager(this);
        let menu = new RedditMenu(this, orientation);
        menuManager.addMenu(menu);
        return menu;
    }
};

function RedditMenu(launcher, orientation) {
    this._init.call(this, launcher, orientation);
}

RedditMenu.prototype = {
    __proto__: Applet.AppletPopupMenu.prototype,

    _init: function(launcher, orientation) {
        Applet.AppletPopupMenu.prototype._init.call(this, launcher, orientation);
        this._addMenuItems();
    },

    _addMenuItems: function() {
        let example = new PopupMenu.PopupSwitchMenuItem(_('Example'), false);
        this.addMenuItem(example);
    }
};