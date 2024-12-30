local Config = {}

-- Input Focus Scoreboard
Config.PressToInteract = {
    EnablePressToInteract = true, -- Enable the functionality to only interact when ALT is pressed
    Key = "LMENU",                -- The key to toggle chat input (LMENU is ALT)
    Description = "Press ALT to enable scoreboard input focus"
}

-- Command to Open scoreboard
Config.CommandScoreboard = "scoreboard"

-- Prevent open Scoreboard when player is Death
Config.DeathCheck = function(entity)
    return LocalPlayer.state.dead or (IsEntityDead(entity) or IsPedDeadOrDying(entity, true))
end

return Config
