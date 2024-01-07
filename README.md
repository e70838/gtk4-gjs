sudo apt install flatpak

flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo

flatpak search org.gnome.Platform

flatpak install flathub org.gnome.Platform//45 org.gnome.Sdk//45

flatpak install org.flatpak.Builder

flatpak run org.flatpak.Builder --force-clean --user --install build-dir tk.e70838.filebrowser.yml

flatpak run tk.e70838.filebrowser