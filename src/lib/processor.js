import { derived } from "svelte/store";
import { socketMessageStore } from "./socket";

export const updateState = derived(socketMessageStore, ($msg, set) => {
    if (!$msg) return;

    if ($msg.event === "game:update_state") {
        set($msg.data);
    }
});

export const targetPlayer = derived(updateState, ($update, set) => {
    if (!$update) return;

    if ($update.game.hasTarget) {
        const player = $update.players[$update.game.target];
        set(player);
    } else {
        set({});
    }
});

export const scoreboardInfo = derived(updateState, ($update, set) => {
    if (!$update) return;

    const game = $update.game;
    set(game);
});

export const playersInfo = derived(updateState, ($update, set) => {
    if (!$update) return;

    // set(Object.values($update.players));

    const players = Object.values($update.players);
    const b = Object.values($update.players).filter(p => p.team === 0);
    const o = Object.values($update.players).filter(p => p.team === 1);

    set({
        blue: b,
        orange: o,
    });

});