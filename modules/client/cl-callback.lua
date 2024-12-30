FN = {}
FN.__index = FN
local Config = LGF:LuaLoader("shared/Config")

function FN:new()
    local self = setmetatable({}, FN)
    self.players = {}
    return self
end

function FN:setupScoreboard()
    self.allPlayersData = lib.callback.await("LGF_Scoreboard.GetAllPlayersData", 100) or {}

    if not self.allPlayersData or #self.allPlayersData == 0 then
        self.players = {}
        return
    end

    self.players = {}
    self.fallBack = "Unknown"

    for _, playerData in ipairs(self.allPlayersData) do
        if playerData.targetID then
            local playerName = playerData.name or self.fallBack
            local playerRPName = playerData.rpName or self.fallBack
            local playerJob = playerData.job or self.fallBack
            local playerGroup = playerData.group or self.fallBack

            self.players[#self.players + 1] = {
                id = playerData.targetID,
                name = playerName,
                rpName = playerRPName,
                job = playerJob,
                group = playerGroup,
            }
        end
    end
end

function FN:openScoreboard()
    self:setupScoreboard()

    local PlayersData = self.players or {}

    NUI.toggleUI("openScoreboard", {
        Visible = true,
        Data = PlayersData
    })
end

local function open_SCOREBOARD()
    local scoreboard = FN:new()
    scoreboard:openScoreboard()
end

AddEventHandler('gameEventTriggered', function(name, args)
    -- Requested to prevent Event is triggered before the Boolean value return true
    SetTimeout(500, function()
        if name == "CEventNetworkEntityDamage" then
            if Config.DeathCheck(args[1]) == true and LocalPlayer.state.scoreboardBusy then
                NUI.toggleUI("openScoreboard", {
                    Visible = false,
                    Data = {}
                })
            end
        end
    end)
end)

exports("openScoreboard", open_SCOREBOARD)

RegisterCommand(Config.CommandScoreboard, function()
    if Config.DeathCheck(LGF.Player:Ped()) then return end
    open_SCOREBOARD()
end)
