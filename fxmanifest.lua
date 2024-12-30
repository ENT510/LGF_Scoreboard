fx_version 'cerulean'
game 'gta5'
version '1.0.0'
lua54 'yes'
author 'ENT510'

shared_scripts {
  'shared/*.lua',
  '@ox_lib/init.lua',
  'init.lua',
  'locale/init_locale.lua',
  'locale/locales/*.lua',
}

client_scripts {
  'modules/client/cl-nui.lua',
  'modules/client/cl-callback.lua',

}

server_scripts {
  '@oxmysql/lib/MySQL.lua',
  'modules/server/sv-callback.lua',


}

files {
  'web/build/index.html',
  'web/build/**/*',
}

ui_page 'web/build/index.html'

escrow_ignore {
  'shared/*.lua',
  'init.lua',
  'locale/init_locale.lua',
  'locale/locales/*.lua',

}
