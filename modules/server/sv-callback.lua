lib.callback.register("LGF_Scoreboard.GetAllPlayersData", function(source)
    local allPlayers = GetPlayers()
    local playersData = {}

    for i = 1, #allPlayers do
        local playerId = tonumber(allPlayers[i])
        local playerName = GetPlayerName(playerId)
        local rpName = LGF.Core:GetName(playerId)
        local job = LGF.Core:GetJob(playerId)
        local group = LGF.Core:GetGroup(playerId)


        playersData[#playersData + 1] = {
            targetID = playerId,
            name = playerName,
            rpName = rpName,
            job = job,
            group = group,
        }
    end


    return playersData
end)
