
  OMORI WIDESCREEN MOD - Development Preview
  ------------

  STATUS: NOT PLAYABLE. THIS IS A WORK IN PROGRESS.

  This mod adds widescreen support to OMORI. It is NOT
  finished and WILL break things.


  WHAT IT DOES
  ------------

  Extends the game beyond 640x480 to support wider
  resolutions. Adjusts UI, pictures, battlebacks, menus,
  transitions, and various effects to work at the new
  aspect ratio. Designed as a base for modders to tweak.


  INSTALLATION
  ------------

  1. Drop widescreen_config.js and widescreen.js into
     your mods folder.


  RESOLUTIONS
  -----------

    small   854x480    Least problems.
    medium  1024x576   Mostly untested.
    large   1280x720   Mostly untested.
    custom  whatever   You're on your own.


  KNOWN ISSUES
  ------------

  - Battle backgrounds may look wrong
  - Transitions may be misaligned
  - Overlays may not cover the full screen
  - Menus may break at weird resolutions
  - Save/load may act up
  - Tiled maps may have quirks
  - Probably other stuff too

  If it looks broken, it is.


  CONSOLE
  -------

  Press F8 or F12, then type:

    ws.help()     Full command list
    ws.status()   Current settings
    ws.debug()    Map and UI info
    ws.toggleGuides()  Debug overlay

  There's a lot of commands. ws.help() lists most of them.


  FOR MODDERS
  -----------

  Two files:

    widescreen_config.js   All settings here.
    widescreen.js          The plugin itself.

  The config has comments explaining everything.
  The code is slightly commented too.


  CREDITS
  -------
  sierra - i did like a lot i think
  
================================================================
