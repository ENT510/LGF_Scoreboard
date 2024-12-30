![GitHub Downloads](https://img.shields.io/github/downloads/ENT510/LGF_Scoreboard/total?logo=github)
![GitHub Release](https://img.shields.io/github/v/release/ENT510/LGF_Scoreboard?logo=github)

**LGF_Scoreboard** is a simple modular and efficient scoreboard solution developed in TypeScript, designed to cater to the needs of FiveM Roleplay servers

### Features

- **Player Insights**: Displays detailed player information such as ID, name, RP name, group, and job.
- **Configurable Settings**: Supports configuration for toggling features like visibility, interaction, and focus behavior.

### Dependencies

- **LGF_Utility**: A required dependency for utility functions and framework data management.

### exports Open Scoreboard

```lua
exports.LGF_Scoreboard:openScoreboard()
```

### Get Local State of scoreboard

#### Using State Bag

```lua
---@return boolean -- The current state of the scoreboard
LocalPlayer.state.scoreboardBusy
```

#### Using Export

```lua
---@return boolean -- The current state of the scoreboard
exports.LGF_Scoreboard:getStateScoreboard()
```
