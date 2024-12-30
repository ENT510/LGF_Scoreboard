![GitHub Downloads](https://img.shields.io/github/downloads/ENT510/LGF_Scoreboard/total?logo=github)
![GitHub Release](https://img.shields.io/github/v/release/ENT510/LGF_Scoreboard?logo=github)

**LGF_Scoreboard** is a simple modular and efficient scoreboard solution developed in TypeScript, designed to cater to the needs of FiveM Roleplay servers

# Features

- **Player Insights**: Displays detailed player information such as ID, name, RP name, group, and job.
- **Configurable Settings**: Supports configuration for toggling features like visibility, interaction, and focus behavior.

# Dependencies

- **LGF_Utility**: A required dependency for utility functions and framework data management. [Link to LGF_Utility](https://github.com/Legacy-Scripts/LGF_Utility)

# Usage

## exports Open Scoreboard

```lua
exports.LGF_Scoreboard:openScoreboard()
```

## Get Local State of scoreboard

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

![Image 1](https://cdn.discordapp.com/attachments/1259473258286153780/1323281121835880458/image.png?ex=6773f114&is=67729f94&hm=5ff96c82c9aa860ff6483a6d3e4fddb0dd672df16660062010a271b40694cd09&)
![Image 2](https://cdn.discordapp.com/attachments/1259473258286153780/1323281388404998225/image.png?ex=6773f154&is=67729fd4&hm=44b9e420c182354d808d823d6321bd06c47a3d31057cbbdb0279466d66b84653&)



