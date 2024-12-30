NUI = {}
LocalPlayer.state.scoreboardBusy = false
local Config = LGF:LuaLoader("shared/Config")
local SetNuiFocus = SetNuiFocus
local RegisterNuiCallback = RegisterNuiCallback
local SendNUIMessage = SendNUIMessage

if Config.PressToInteract.EnablePressToInteract then
  local ALT_State = lib.addKeybind({
    name = 'open_scoreboard_+++',
    description = Config.PressToInteract.Description,
    defaultKey = Config.PressToInteract.Key,
    onPressed = function(self)
      if not LocalPlayer.state.scoreboardBusy and not Config.DeathCheck(LGF.Player:Ped()) then return end
      SetNuiFocus(true, true)
    end,
  })
end

function NUI.toggleUI(action, data)
  if data.Visible == true and LocalPlayer.state.scoreboardBusy then return end

  if data.Visible == false and (IsNuiFocused() or IsNuiFocusKeepingInput()) and Config.PressToInteract.EnablePressToInteract then
    SetNuiFocus(false, false)
  end

  if not Config.PressToInteract.EnablePressToInteract then
    SetNuiFocus(data.Visible, data.Visible)
  end

  LocalPlayer.state.scoreboardBusy = data.Visible
  SendNUIMessage({ action = action, data = data })
end

RegisterNuiCallback("LGF_Scoreboard:closePanel", function(data, cb)
  NUI.toggleUI("openScoreboard", { Visible = false, Data = {} })
  cb(true)
end)

exports("getStateScoreboard", function()
  return LocalPlayer.state.scoreboardBusy
end)
