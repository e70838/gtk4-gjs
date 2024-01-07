import Gtk from 'gi://Gtk';
import GObject from 'gi://GObject';

export const FbrApplication = GObject.registerClass({
	GTypeName: 'FbrApplication'
}, class extends Gtk.Application {
    vfunc_activate() {
		const window = new Gtk.ApplicationWindow({ application: this });
	    const box = new Gtk.Box({ orientation: Gtk.Orientation.VERTICAL,
            marginTop: 36,
            marginBottom: 36,
            marginStart: 36,
            marginEnd: 36,
            spacing: 18,
            valign: Gtk.Align.CENTER
        });

        // flatpak run org.gnome.design.IconLibrary
        const image = new Gtk.Image({
            iconName: 'system-file-manager-symbolic',
            iconSize: Gtk.IconSize.LARGE
        });
        box.append(image);

        const label = new Gtk.Label({
            label: 'Welcome to our new file browser!',
            wrap: true
        });
        box.append(label);

        const button = new Gtk.Button({
            label: 'Let\'s go!',
            halign: Gtk.Align.CENTER
        });
        box.append(button);

        window.child = box;
	    window.present();
	}
});
