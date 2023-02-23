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

export const teamShots = derived(playersInfo, ($update, set) => {
    if (!$update) return;

    let bShots = 0;
    let oShots = 0;

    for (const p of $update.blue) {
        bShots = bShots + p.shots;
    }

    for (const p of $update.orange) {
        oShots = oShots + p.shots;
    }

    set({
        blue: bShots,
        orange: oShots,
    });

});

export const goalScored = derived(socketMessageStore, ($msg,set) => {
    if (!$msg) return;

    if ($msg.event === "game:goal_scored") {
        set($msg.data);
    } else if ($msg.event === "game:replay_end") {
        set({});
    }
});

export const currentScene = derived(socketMessageStore, ($msg, set) => {
    if ( !$msg ) return;

    switch ($msg.event) {
        case "game:initialized":
            set("pregame");
            break;

        case "game:pre_countdown_begin":
            set("gameplay");
            break;

        case "game:replay_start":
            set("replay");
            break;

        case "game:replay_end":
            set("gameplay");
            break;
            
        case "game:match_ended":
            set("end");
            break;

        case "game:podium_start":
            set("podium");
            break;
    }
})