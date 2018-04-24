import widgets from 'phosphor-widgets';
import dragdrop from 'phosphor-dragdrop';
import messaging from 'phosphor-messaging';
import { CommandRegistry } from 'phosphor-commands';

window.phosphor = {
    commands: {
        CommandRegistry: CommandRegistry
    },
    dragdrop: dragdrop,
    messaging: messaging,
    widgets: widgets
}
