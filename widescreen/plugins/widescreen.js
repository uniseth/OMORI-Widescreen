(function() {
    'use strict';
    var CFG = window.WidescreenConfig;
    if (!CFG) {
        console.error('[Widescreen] FATAL: widescreen_config.js not loaded.');
        CFG = {
            mode: 'large', customWidth: 1280, customHeight: 720,
            saveLoadLayout: 'auto', pillarboxEnabled: true,
            enableForceSmallOverride: true,
            enableForceCenterOverride: true,
            enableFogOfWarOverride: true,
            softEdgeFadeWidth: 16,
            mapOverrides: {},
            forcePillarboxMapIds: [], forceWidescreenMapIds: [],
            titleHintsRightPadding: 2,
            messageBoxMode: 'vanilla',
            choiceBoxMode: 'vanilla',
            choiceTextAlign: 'auto',
            choiceGrowUpward: 'auto',
            choiceGrowUpwardMinTopGap: 8,
            choiceCursorPosition: 'vanilla',
            choiceCursorTextGap: 6,
            choiceCursorFlip: 'auto',
            nameBoxMode: 'vanilla',
            nameBoxFaceTopGap: 2,
            nameBoxFaceTopHeightTrim: 0,
            nameBoxFaceTopTextPadding: 3,
            nameBoxFaceTopTextNudge: 0,
            faceBoxMode: 'vanilla',
            faceAnchorToMessageBox: true,
            faceAnchorOffsetX: 143,
            faceAnchorOffsetY: -1,
            faceAnchorMirror: false,
            faceAnchorCenterCluster: false,
            faceAnchorDynamicCenter: false,
            ghostObjectMapIds: null,
            pictureEdgeExtrusionEnabled: true,
            pictureEdgeExtrusionMapIds: [87],
            pictureEdgeExtrusionSampleDepth: 1,
            eventDropAnimEnabled: true,
            eventDropAnimAutoSnap: true,
            eventDropAnimMapIds: [87],
            eventDropAnimAutoSnapMinDistance: 3,
            eventDropAnimHeight: 6,
            eventDropAnimDuration: 30,
            eventDropAnimBounceEnabled: true,
            eventDropAnimBounceHeight: 6,
            eventDropAnimBounceDuration: 8,
            eventDropAnimBounceCount: 2,
            eventDropAnimBounceDecay: 0.4,
            eventDropAnimSpinEnabled: true,
            eventDropAnimSpinTurns: 1,
            eventDropAnimShadowEnabled: true,
            eventDropAnimFadeInEnabled: true,
            eventDropAnimFadeInDelayPct: 0,
            eventDropAnimFadeInFinishPct: 0.6,
            eventDropAnimLandShakeEnabled: false,
            eventDropAnimLandShakePower: 2,
            eventDropAnimLandShakeDuration: 5,
            eventDropAnimSyncLandSeEnabled: true,
            eventDropAnimSyncLandSeNames: ['drop', 'thud', 'fall', 'land', 'knife', 'page'],
            eventDropAnimSyncLandSeLookbackFrames: 90,
            eventDropAnimSyncLandSeSuppressEarly: true,
            eventDropAnimSyncLandSeOffsetFrames: 4,
            eventDropAnimSyncLandSeDebug: false,
            messageTextOverrides: {
                '01_map_whitespace.message_19': 'Seems like something is falling.'
            },
            menuFixHelpWindowWidth: true,
            menuHelpWindowYOffset: 0,
            menuHelpWindowPlateGapPx: 4,
            menuEquipBubblesYOffset: 0,
            menuFixEquipStatsPanelY: true,
            menuStatsPanelHelpGapPx: 4,
            menuHelpWindowWidthMode: 'vanilla',
            menuHelpWindowFullModeMarginPx: 10,
            barCurtainEnabled: true,
            barCurtainDuration: 48,
            barCurtainEdgeWidth: 40,
            barCurtainEdgeMaxWidth: 120,
            barFadeMirrorEnabled: true,
            battleUiCenterEnabled: true,
            debug: { enableGuides: false }
        };
    }
    if (!CFG.debug) CFG.debug = { enableGuides: false };
    if (CFG.messageBoxMode === undefined) CFG.messageBoxMode = 'vanilla';
    if (CFG.choiceBoxMode === undefined) CFG.choiceBoxMode = 'vanilla';
    if (CFG.choiceTextAlign === undefined) CFG.choiceTextAlign = 'auto';
    if (CFG.choiceGrowUpward === undefined) CFG.choiceGrowUpward = 'auto';
    if (CFG.choiceGrowUpwardMinTopGap === undefined) CFG.choiceGrowUpwardMinTopGap = 8;
    if (CFG.choiceCursorPosition === undefined) CFG.choiceCursorPosition = 'vanilla';
    if (CFG.choiceCursorTextGap === undefined) CFG.choiceCursorTextGap = 6;
    if (CFG.choiceCursorFlip === undefined) CFG.choiceCursorFlip = 'auto';
    if (CFG.nameBoxMode === undefined) CFG.nameBoxMode = 'vanilla';
    if (CFG.nameBoxFaceTopGap === undefined) CFG.nameBoxFaceTopGap = 2;
    if (CFG.nameBoxFaceTopHeightTrim === undefined) CFG.nameBoxFaceTopHeightTrim = 0;
    if (CFG.nameBoxFaceTopTextPadding === undefined) CFG.nameBoxFaceTopTextPadding = 3;
    if (CFG.nameBoxFaceTopTextNudge === undefined) CFG.nameBoxFaceTopTextNudge = 0;
    if (CFG.faceBoxMode === undefined) CFG.faceBoxMode = 'vanilla';
    if (CFG.faceAnchorToMessageBox === undefined) CFG.faceAnchorToMessageBox = false;
    if (CFG.faceAnchorOffsetX === undefined) CFG.faceAnchorOffsetX = 0;
    if (CFG.faceAnchorOffsetY === undefined) CFG.faceAnchorOffsetY = -2;
    if (CFG.faceAnchorMirror === undefined) CFG.faceAnchorMirror = false;
    if (CFG.faceAnchorCenterCluster === undefined) CFG.faceAnchorCenterCluster = false;
    if (CFG.faceAnchorDynamicCenter === undefined) CFG.faceAnchorDynamicCenter = false;
    if (CFG.ghostObjectMapIds === undefined) CFG.ghostObjectMapIds = null;
    if (CFG.pictureEdgeExtrusionEnabled === undefined) CFG.pictureEdgeExtrusionEnabled = true;
    if (CFG.pictureEdgeExtrusionMapIds === undefined) CFG.pictureEdgeExtrusionMapIds = [87];
    if (CFG.pictureEdgeExtrusionSampleDepth === undefined) CFG.pictureEdgeExtrusionSampleDepth = 1;
    if (CFG.eventDropAnimEnabled === undefined)         CFG.eventDropAnimEnabled = true;
    if (CFG.eventDropAnimAutoSnap === undefined)        CFG.eventDropAnimAutoSnap = true;
    if (CFG.eventDropAnimMapIds === undefined)          CFG.eventDropAnimMapIds = [87];
    if (CFG.eventDropAnimAutoSnapMinDistance === undefined) CFG.eventDropAnimAutoSnapMinDistance = 3;
    if (CFG.eventDropAnimHeight === undefined)          CFG.eventDropAnimHeight = 6;
    if (CFG.eventDropAnimDuration === undefined)        CFG.eventDropAnimDuration = 30;
    if (CFG.eventDropAnimBounceEnabled === undefined)   CFG.eventDropAnimBounceEnabled = true;
    if (CFG.eventDropAnimBounceHeight === undefined)    CFG.eventDropAnimBounceHeight = 6;
    if (CFG.eventDropAnimBounceDuration === undefined)  CFG.eventDropAnimBounceDuration = 8;
    if (CFG.eventDropAnimBounceCount === undefined)     CFG.eventDropAnimBounceCount = 2;
    if (CFG.eventDropAnimBounceDecay === undefined)     CFG.eventDropAnimBounceDecay = 0.4;
    if (CFG.eventDropAnimSpinEnabled === undefined)     CFG.eventDropAnimSpinEnabled = true;
    if (CFG.eventDropAnimSpinTurns === undefined)       CFG.eventDropAnimSpinTurns = 1;
    if (CFG.eventDropAnimShadowEnabled === undefined)   CFG.eventDropAnimShadowEnabled = true;
    if (CFG.eventDropAnimFadeInEnabled === undefined)   CFG.eventDropAnimFadeInEnabled = true;
    if (CFG.eventDropAnimFadeInDelayPct === undefined)  CFG.eventDropAnimFadeInDelayPct = 0;
    if (CFG.eventDropAnimFadeInFinishPct === undefined) CFG.eventDropAnimFadeInFinishPct = 0.6;
    if (CFG.eventDropAnimLandShakeEnabled === undefined) CFG.eventDropAnimLandShakeEnabled = false;
    if (CFG.eventDropAnimSyncLandSeEnabled === undefined) CFG.eventDropAnimSyncLandSeEnabled = true;
    if (CFG.eventDropAnimSyncLandSeNames === undefined) CFG.eventDropAnimSyncLandSeNames = ['drop', 'thud', 'fall', 'land', 'knife', 'page'];
    if (CFG.eventDropAnimSyncLandSeLookbackFrames === undefined) CFG.eventDropAnimSyncLandSeLookbackFrames = 90;
    if (CFG.eventDropAnimSyncLandSeSuppressEarly === undefined) CFG.eventDropAnimSyncLandSeSuppressEarly = true;
    if (CFG.eventDropAnimSyncLandSeOffsetFrames === undefined) CFG.eventDropAnimSyncLandSeOffsetFrames = 4;
    if (CFG.eventDropAnimSyncLandSeDebug === undefined) CFG.eventDropAnimSyncLandSeDebug = false;

    if (!CFG.messageTextOverrides || typeof CFG.messageTextOverrides !== 'object') {
        CFG.messageTextOverrides = {};
    }
    if (!('01_map_whitespace.message_19' in CFG.messageTextOverrides)) {
        CFG.messageTextOverrides['01_map_whitespace.message_19'] = 'Seems like something is falling.';
    }
    if (CFG.menuFixHelpWindowWidth === undefined) CFG.menuFixHelpWindowWidth = true;
    if (CFG.menuHelpWindowYOffset === undefined) CFG.menuHelpWindowYOffset = 0;
    if (CFG.menuHelpWindowPlateGapPx === undefined) CFG.menuHelpWindowPlateGapPx = 4;
    if (CFG.menuEquipBubblesYOffset === undefined) CFG.menuEquipBubblesYOffset = 0;
    if (CFG.menuFixEquipStatsPanelY === undefined) CFG.menuFixEquipStatsPanelY = true;
    if (CFG.menuStatsPanelHelpGapPx === undefined) CFG.menuStatsPanelHelpGapPx = 4;
    if (CFG.menuHelpWindowWidthMode === undefined) CFG.menuHelpWindowWidthMode = 'vanilla';
    if (CFG.menuHelpWindowFullModeMarginPx === undefined) CFG.menuHelpWindowFullModeMarginPx = 10;
    if (CFG.eventDropAnimLandShakePower === undefined)  CFG.eventDropAnimLandShakePower = 2;
    if (CFG.eventDropAnimLandShakeDuration === undefined) CFG.eventDropAnimLandShakeDuration = 5;
    if (CFG.barCurtainEnabled === undefined) CFG.barCurtainEnabled = true;
    if (CFG.barCurtainDuration === undefined) CFG.barCurtainDuration = 48;
    if (CFG.barCurtainEdgeWidth === undefined) CFG.barCurtainEdgeWidth = 40;
    if (CFG.barCurtainEdgeMaxWidth === undefined) CFG.barCurtainEdgeMaxWidth = 120;
    if (CFG.barFadeMirrorEnabled === undefined) CFG.barFadeMirrorEnabled = true;
    if (CFG.battleUiCenterEnabled === undefined) CFG.battleUiCenterEnabled = true;

    var WIDE_W, WIDE_H;

    // Canvas sizing
    switch (CFG.mode) {
        case 'small':  WIDE_W = 854;  WIDE_H = 480; break;
        case 'medium': WIDE_W = 1024; WIDE_H = 576; break;
        case 'large':  WIDE_W = 1280; WIDE_H = 720; break;
        case 'custom': WIDE_W = CFG.customWidth; WIDE_H = CFG.customHeight; break;
        default:       WIDE_W = 1280; WIDE_H = 720; break;
    }

    var SMALL_W = 854;
    var SMALL_H = 480;
    var BASE_W = 640;
    var BASE_H = 480;
    var X_OFF = Math.floor((WIDE_W - BASE_W) / 2);
    var Y_OFF = Math.floor((WIDE_H - BASE_H) / 2);
    var FOG_FADE_DISTANCE = 32;
    var SOFT_EDGE_WIDTH = (CFG.softEdgeFadeWidth !== undefined) ? CFG.softEdgeFadeWidth : 0;

    var _messageBoxMode = CFG.messageBoxMode;
    var _choiceBoxMode  = CFG.choiceBoxMode;
    var _nameBoxMode    = CFG.nameBoxMode;
    var _faceBoxMode    = CFG.faceBoxMode;
    console.log('[Widescreen] mode: ' + CFG.mode + ' (' + WIDE_W + 'x' + WIDE_H + ')');
    if (SOFT_EDGE_WIDTH > 0) console.log('[Widescreen] soft edge fade: ' + SOFT_EDGE_WIDTH + 'px');
    console.log('[Widescreen] msgBox mode: ' + _messageBoxMode);
    console.log('[Widescreen] choice mode: ' + _choiceBoxMode);
    console.log('[Widescreen] nameBox mode: ' + _nameBoxMode +
                (_nameBoxMode === 'faceTop' ? ' (gap=' + CFG.nameBoxFaceTopGap + 'px)' : ''));
    console.log('[Widescreen] faceBox mode: ' + _faceBoxMode);
    console.log('[Widescreen] faceAnchor: ' + CFG.faceAnchorToMessageBox +
                ' (offX=' + CFG.faceAnchorOffsetX + ', offY=' + CFG.faceAnchorOffsetY +
                ', mirror=' + CFG.faceAnchorMirror + ', centerCluster=' + CFG.faceAnchorCenterCluster + ')');
    var LS_OVERRIDES_KEY = 'widescreen_map_overrides';
    var mapOverrides = {};
    function _normalizeOverride(ov) {
        if (!ov) return null;
        var out = {
            pillarbox:        ov.pillarbox        !== undefined ? ov.pillarbox        : 'auto',
            letterbox:        ov.letterbox        !== undefined ? ov.letterbox        : 'auto',
            forceSmallWidth:  ov.forceSmallWidth  !== undefined ? ov.forceSmallWidth  : 'auto',
            forceSmallHeight: ov.forceSmallHeight !== undefined ? ov.forceSmallHeight : 'auto',
            forceCenter:      ov.forceCenter      !== undefined ? ov.forceCenter      : 'auto',
            fogOfWar:         ov.fogOfWar         !== undefined ? ov.fogOfWar         : 'auto'
        };

        if (ov.forceSmall !== undefined) {
            if (out.forceSmallWidth === 'auto')  out.forceSmallWidth  = ov.forceSmall;
            if (out.forceSmallHeight === 'auto') out.forceSmallHeight = ov.forceSmall;
        }
        if (ov.encloseMap !== undefined && out.fogOfWar === 'auto') out.fogOfWar = ov.encloseMap;
        if (ov.decorations && Array.isArray(ov.decorations)) out.decorations = ov.decorations;
        if (ov.backdrop !== undefined) out.backdrop = ov.backdrop;
        return out;
    }
    function _initOverridesFromConfig() {
        if (CFG.mapOverrides && typeof CFG.mapOverrides === 'object') {
            Object.keys(CFG.mapOverrides).forEach(function(id) {
                mapOverrides[id] = _normalizeOverride(CFG.mapOverrides[id]);
            });
        }
        (CFG.forcePillarboxMapIds || []).forEach(function(id) {
            mapOverrides[id] = _normalizeOverride({ pillarbox: true, letterbox: true });
        });
        (CFG.forceWidescreenMapIds || []).forEach(function(id) {
            mapOverrides[id] = _normalizeOverride({ pillarbox: false, letterbox: false });
        });
    }
    function _loadOverridesFromStorage() {
        try {
            var data = localStorage.getItem(LS_OVERRIDES_KEY);
            if (data) {
                var parsed = JSON.parse(data);
                Object.keys(parsed).forEach(function(id) {
                    mapOverrides[id] = _normalizeOverride(parsed[id]);
                });

                if (CFG.mapOverrides) {
                    Object.keys(CFG.mapOverrides).forEach(function(id) {
                        var cfgOv = CFG.mapOverrides[id];
                        if (cfgOv && cfgOv.decorations) {
                            if (!mapOverrides[id]) mapOverrides[id] = _normalizeOverride(cfgOv);
                            else if (!mapOverrides[id].decorations) mapOverrides[id].decorations = cfgOv.decorations;
                        }
                        if (cfgOv && cfgOv.backdrop !== undefined) {
                            if (!mapOverrides[id]) mapOverrides[id] = _normalizeOverride(cfgOv);
                            else if (mapOverrides[id].backdrop === undefined) mapOverrides[id].backdrop = cfgOv.backdrop;
                        }
                    });
                }
                console.log('[Widescreen] loaded overrides from storage:', Object.keys(mapOverrides).length, 'maps');
            } else {
                _initOverridesFromConfig();
            }
        } catch (e) {
            console.warn('[Widescreen] failed to load overrides:', e);
            _initOverridesFromConfig();
        }
    }
    function _saveOverridesToStorage() {
        try { localStorage.setItem(LS_OVERRIDES_KEY, JSON.stringify(mapOverrides)); }
        catch (e) { console.warn('[Widescreen] failed to save overrides:', e); }
    }
    _loadOverridesFromStorage();
    function _getOrCreateOverride(mapId) {
        if (!mapOverrides[mapId]) mapOverrides[mapId] = _normalizeOverride({});
        else mapOverrides[mapId] = _normalizeOverride(mapOverrides[mapId]);
        return mapOverrides[mapId];
    }
    function _cleanupOverride(mapId) {
        var ov = mapOverrides[mapId];
        if (!ov) return;
        var allAuto = ['pillarbox', 'letterbox', 'forceSmallWidth', 'forceSmallHeight', 'forceCenter', 'fogOfWar']
            .every(function(k) { return ov[k] === 'auto' || ov[k] === undefined; });
        if (allAuto && !ov.decorations && ov.backdrop === undefined) delete mapOverrides[mapId];
    }
    function _resolveMapId(mapId) {
        if (mapId !== undefined && mapId !== null) {
            if (typeof mapId !== 'number') {
                console.warn('[ws] mapId must be a number. got:', typeof mapId, mapId);
                return null;
            }
            return mapId;
        }
        if (typeof $gameMap !== 'undefined' && $gameMap && $gameMap.mapId() > 0) return $gameMap.mapId();
        console.warn('[ws] no map currently loaded.');
        return null;
    }
    function _isForceCenterActive() {
        if (!CFG.enableForceCenterOverride) return false;
        if (!$gameMap || !$dataMap) return false;
        var ov = mapOverrides[$gameMap.mapId()];
        return !!(ov && ov.forceCenter === true);
    }
    function _isFogOfWarActive() {
        if (!CFG.enableFogOfWarOverride) return false;
        if (!$gameMap || !$dataMap) return false;
        if ($gameMap.isLoopHorizontal() || $gameMap.isLoopVertical()) return false;
        var ov = mapOverrides[$gameMap.mapId()];
        return !!(ov && ov.fogOfWar === true);
    }
    Object.defineProperty(Graphics, 'width', { value: WIDE_W, writable: true, configurable: true });
    Object.defineProperty(Graphics, 'height', { value: WIDE_H, writable: true, configurable: true });
    Object.defineProperty(Graphics, 'boxWidth', { value: WIDE_W, writable: true, configurable: true });
    Object.defineProperty(Graphics, 'boxHeight', { value: WIDE_H, writable: true, configurable: true });
    Yanfly.Param.ScreenWidth = WIDE_W;
    Yanfly.Param.ScreenHeight = WIDE_H;
    SceneManager._screenWidth = WIDE_W;
    SceneManager._screenHeight = WIDE_H;
    SceneManager._boxWidth = WIDE_W;
    SceneManager._boxHeight = WIDE_H;

    setInterval(function() {
        if (window.__wsBattleSafeMode === true) {
            window.__wsBattleSafeMode = false;
        }
        var w = WIDE_W;
        var h = WIDE_H;
        if (Graphics.width !== w) Graphics.width = w;
        if (Graphics.height !== h) Graphics.height = h;
        if (Graphics.boxWidth !== w) Graphics.boxWidth = w;
        if (Graphics.boxHeight !== h) Graphics.boxHeight = h;
    }, 100);
    function _stretchCanvasToWindow() {
        var canvas = Graphics._canvas;
        var upperCanvas = Graphics._upperCanvas;
        if (!canvas) return;
        var winW = window.innerWidth;
        var winH = window.innerHeight;
        var gameRatio = WIDE_W / WIDE_H;
        var winRatio = winW / winH;
        var displayW, displayH;
        if (winRatio > gameRatio) { displayH = winH; displayW = winH * gameRatio; }
        else { displayW = winW; displayH = winW / gameRatio; }
        var offsetX = Math.floor((winW - displayW) / 2);
        var offsetY = Math.floor((winH - displayH) / 2);
        [canvas, upperCanvas].forEach(function(c) {
            if (!c) return;
            c.style.position = 'absolute';
            c.style.width = displayW + 'px';
            c.style.height = displayH + 'px';
            c.style.left = offsetX + 'px';
            c.style.top = offsetY + 'px';
            c.style.margin = '0';
        });
    }
    var _waitForGraphics = setInterval(function() {
        if (typeof Graphics !== 'undefined' && Graphics._updateCanvas) {
            clearInterval(_waitForGraphics);
            var _origUpdateCanvas = Graphics._updateCanvas;
            Graphics._updateCanvas = function() {
                _origUpdateCanvas.apply(this, arguments);
                _stretchCanvasToWindow();
            };
            if (Graphics._updateAllElements) {
                var _origUpdateAll = Graphics._updateAllElements;
                Graphics._updateAllElements = function() {
                    _origUpdateAll.apply(this, arguments);
                    _stretchCanvasToWindow();
                };
            }
            _stretchCanvasToWindow();
        }
    }, 10);
    window.addEventListener('resize', _stretchCanvasToWindow);
    setInterval(_stretchCanvasToWindow, 100);
    var _ConfigManager_applyData = ConfigManager.applyData;
    ConfigManager.applyData = function(config) {
        _ConfigManager_applyData.call(this, config);
        Yanfly.Param.ScreenWidth = WIDE_W;
        Yanfly.Param.ScreenHeight = WIDE_H;
        SceneManager._screenWidth = WIDE_W;
        SceneManager._screenHeight = WIDE_H;
        SceneManager._boxWidth = WIDE_W;
        SceneManager._boxHeight = WIDE_H;
        Graphics.width = WIDE_W;
        Graphics.height = WIDE_H;
        Graphics.boxWidth = WIDE_W;
        Graphics.boxHeight = WIDE_H;
        if (!ConfigManager.fullScreen) {
            Yanfly.updateResolution();
            Yanfly.moveToCenter();
        }
        setTimeout(_stretchCanvasToWindow, 50);
    };

    var FULLSCREEN_TOLERANCE = 16;

    var BASE_FIT = Math.min(WIDE_W / BASE_W, WIDE_H / BASE_H);
    function _looksLikeFullScreenFrame(width, height) {
        return Math.abs(width - BASE_W) <= FULLSCREEN_TOLERANCE &&
               Math.abs(height - BASE_H) <= FULLSCREEN_TOLERANCE;
    }

    // Picture fitting
    function _fitSpriteToScreen(sprite, frameW, frameH, overscan) {
        if (overscan === undefined) overscan = 1;
        var scale = BASE_FIT * overscan;
        var isOverhangAsset = frameW > BASE_W && frameH > BASE_H;
        if (isOverhangAsset) {
            var coverScale = Math.max(WIDE_W / frameW, WIDE_H / frameH);
            if (scale < coverScale) scale = coverScale;
        }
        var displayedW = frameW * scale;
        var displayedH = frameH * scale;
        var centeredX = Math.floor((WIDE_W - displayedW) / 2);
        var centeredY = Math.floor((WIDE_H - displayedH) / 2);
        sprite.scale.x = scale;
        sprite.scale.y = scale;
        sprite.position.x = centeredX;
        sprite.position.y = centeredY;

        _updatePictureEdgeExtrusion(sprite, frameW, frameH, scale, isOverhangAsset);
    }

    function _edgeExtrusionAllowedOnCurrentMap() {
        if (!CFG.pictureEdgeExtrusionEnabled) return false;
        var list = CFG.pictureEdgeExtrusionMapIds;
        if (list === null || list === undefined) return true;
        if (!Array.isArray(list)) return true;
        if (list.length === 0) return false;
        if (typeof $gameMap === 'undefined' || !$gameMap ||
            typeof $gameMap.mapId !== 'function' || $gameMap.mapId() <= 0) {
            return false;
        }
        return list.indexOf($gameMap.mapId()) >= 0;
    }
    function _destroyEdgeExtrusion(sprite) {
        if (!sprite || !sprite._ws_edgeChildren) return;
        for (var i = 0; i < sprite._ws_edgeChildren.length; i++) {
            var child = sprite._ws_edgeChildren[i];
            if (!child) continue;
            if (child.parent) child.parent.removeChild(child);
        }
        sprite._ws_edgeChildren = null;
        sprite._ws_edgeBitmapUid = null;
    }
    function _buildEdgeChildren(sprite) {

        var sourceBitmap = sprite.bitmap;
        var children = [];
        for (var i = 0; i < 8; i++) {
            var s = new Sprite(sourceBitmap);

            s.setFrame(0, 0, 1, 1);

            children.push(s);
            sprite.addChildAt(s, 0);
        }
        sprite._ws_edgeChildren = children;
        sprite._ws_edgeBitmapUid = sourceBitmap;
    }

    function _refreshEdgeChildren(sprite, frameW, frameH, scale) {
        var kids = sprite._ws_edgeChildren;
        if (!kids || kids.length !== 8) return;

        var d = Math.max(1, Math.floor(Number(CFG.pictureEdgeExtrusionSampleDepth) || 1));
        d = Math.min(d, Math.floor(Math.min(frameW, frameH) / 4));

        var leftBarPx   = sprite.position.x;
        var topBarPx    = sprite.position.y;
        var rightBarPx  = WIDE_W - (sprite.position.x + frameW * scale);
        var bottomBarPx = WIDE_H - (sprite.position.y + frameH * scale);

        var L = Math.max(0, leftBarPx)   / scale;
        var T = Math.max(0, topBarPx)    / scale;
        var R = Math.max(0, rightBarPx)  / scale;
        var B = Math.max(0, bottomBarPx) / scale;

        var anyBar = (L + T + R + B) > 0.5;
        for (var i = 0; i < 8; i++) kids[i].visible = anyBar;
        if (!anyBar) return;

        var top = kids[0];
        top.visible = T > 0;
        if (top.visible) {
            top.setFrame(0, 0, frameW, d);
            top.x = 0;
            top.y = -T;
            top.scale.set(1, T / d);
        }

        var bot = kids[1];
        bot.visible = B > 0;
        if (bot.visible) {
            bot.setFrame(0, frameH - d, frameW, d);
            bot.x = 0;
            bot.y = frameH;
            bot.scale.set(1, B / d);
        }

        var lft = kids[2];
        lft.visible = L > 0;
        if (lft.visible) {
            lft.setFrame(0, 0, d, frameH);
            lft.x = -L;
            lft.y = 0;
            lft.scale.set(L / d, 1);
        }

        var rgt = kids[3];
        rgt.visible = R > 0;
        if (rgt.visible) {
            rgt.setFrame(frameW - d, 0, d, frameH);
            rgt.x = frameW;
            rgt.y = 0;
            rgt.scale.set(R / d, 1);
        }

        var tl = kids[4];
        tl.visible = (T > 0 && L > 0);
        if (tl.visible) {
            tl.setFrame(0, 0, d, d);
            tl.x = -L; tl.y = -T;
            tl.scale.set(L / d, T / d);
        }
        var tr = kids[5];
        tr.visible = (T > 0 && R > 0);
        if (tr.visible) {
            tr.setFrame(frameW - d, 0, d, d);
            tr.x = frameW; tr.y = -T;
            tr.scale.set(R / d, T / d);
        }
        var bl = kids[6];
        bl.visible = (B > 0 && L > 0);
        if (bl.visible) {
            bl.setFrame(0, frameH - d, d, d);
            bl.x = -L; bl.y = frameH;
            bl.scale.set(L / d, B / d);
        }
        var br = kids[7];
        br.visible = (B > 0 && R > 0);
        if (br.visible) {
            br.setFrame(frameW - d, frameH - d, d, d);
            br.x = frameW; br.y = frameH;
            br.scale.set(R / d, B / d);
        }
    }
    function _updatePictureEdgeExtrusion(sprite, frameW, frameH, scale, isOverhangAsset) {

        if (isOverhangAsset) { _destroyEdgeExtrusion(sprite); return; }
        if (!_edgeExtrusionAllowedOnCurrentMap()) {
            _destroyEdgeExtrusion(sprite);
            return;
        }
        if (!sprite.bitmap || !sprite.bitmap.isReady ||
            !sprite.bitmap.isReady() || frameW <= 0 || frameH <= 0) {
            return;
        }

        if (!sprite._ws_edgeChildren ||
            sprite._ws_edgeBitmapUid !== sprite.bitmap) {
            _destroyEdgeExtrusion(sprite);
            _buildEdgeChildren(sprite);
        }
        _refreshEdgeChildren(sprite, frameW, frameH, scale);
    }
    function _checkAndFitAllPictures(spriteset) {
        if (!spriteset || typeof $gameScreen === 'undefined' || !$gameScreen) return;
        var container = spriteset._pictureContainer || spriteset._baseSprite;
        if (!container || !container.children) return;
        for (var i = 0; i < container.children.length; i++) {
            var sprite = container.children[i];
            if (!sprite) continue;

            if (!sprite.bitmap || !sprite._pictureId) {
                _destroyEdgeExtrusion(sprite);
                continue;
            }
            if (!sprite.bitmap.isReady || !sprite.bitmap.isReady()) continue;
            var picture = $gameScreen.picture(sprite._pictureId);
            if (!picture) { _destroyEdgeExtrusion(sprite); continue; }
            var frameW, frameH;
            if (sprite._frame && sprite._frame.width > 0) {
                frameW = sprite._frame.width;
                frameH = sprite._frame.height;
            } else if (picture._frameData && picture._frameData.frames && picture._frameData.frames.length > 0) {
                frameW = picture._frameData.frames[0].width;
                frameH = picture._frameData.frames[0].height;
            } else {
                frameW = sprite.bitmap.width;
                frameH = sprite.bitmap.height;
            }

            var isTopLeftOrigin =
                _looksLikeFullScreenFrame(frameW, frameH) &&
                picture._x === 0 && picture._y === 0 &&
                picture._origin === 0 &&
                picture._scaleX === picture._scaleY &&
                picture._scaleX >= 100;

            var isCenteredOrigin =
                _looksLikeFullScreenFrame(frameW, frameH) &&
                picture._origin === 1 &&
                picture._scaleX === picture._scaleY &&
                picture._scaleX >= 100 &&
                Math.abs(picture._x - BASE_W / 2) <= 16 &&
                Math.abs(picture._y - BASE_H / 2) <= 16;

            if (!isTopLeftOrigin && !isCenteredOrigin) { _destroyEdgeExtrusion(sprite); continue; }

            _fitSpriteToScreen(sprite, frameW, frameH, picture._scaleX / 100);

            if (isCenteredOrigin) {
                sprite.x = Math.floor(WIDE_W / 2);
                sprite.y = Math.floor(WIDE_H / 2);
            }
        }
    }
    if (typeof Spriteset_Base !== 'undefined') {
        var _SB_update_wspic = Spriteset_Base.prototype.update;
        Spriteset_Base.prototype.update = function() {
            _SB_update_wspic.call(this);
            _checkAndFitAllPictures(this);
        };
    }
    var _GS_showPic = Game_Screen.prototype.showPicture;
    Game_Screen.prototype.showPicture = function(pictureId, name, origin, x, y, scaleX, scaleY, opacity, blendMode) {
        var lowerName = (name || '').toLowerCase();
        if (lowerName.indexOf('dw_mirror') >= 0) {
            _GS_showPic.call(this, pictureId - 1, 'black_screen', origin, 0, 0, 400, 400, 192, blendMode);
        } else if (lowerName.indexOf('black_screen') >= 0) {
            var scaleMult = Math.max(WIDE_W / BASE_W, WIDE_H / BASE_H) * 100;
            _GS_showPic.call(this, pictureId, name, origin, 0, 0,
                             scaleX * scaleMult / 100, scaleY * scaleMult / 100,
                             opacity, blendMode);
        } else if (lowerName.indexOf('lighting_overlay') >= 0 || lowerName.indexOf('dark_overlay') >= 0 || lowerName.indexOf('light_overlay') >= 0) {
            _GS_showPic.call(this, pictureId, name, 1, WIDE_W / 2, WIDE_H / 2, 100, 100, opacity, blendMode);
            var picture = this.picture(pictureId);
            if (picture) {
                var bitmap = ImageManager.loadPicture(name);
                var applyStretchScale = function() {
                    if (bitmap.width > 0 && bitmap.height > 0) {
                        var sx = (WIDE_W / bitmap.width) * 100;
                        var sy = (WIDE_H / bitmap.height) * 100;
                        picture._scaleX = sx;
                        picture._scaleY = sy;
                        picture._targetScaleX = sx;
                        picture._targetScaleY = sy;
                    }
                };
                if (bitmap.isReady()) applyStretchScale();
                else bitmap.addLoadListener(applyStretchScale);
            }
        } else {
            _GS_showPic.call(this, pictureId, name, origin, x, y, scaleX, scaleY, opacity, blendMode);
        }
    };

    // Drop animation
    function _dropAnimOpts(opts) {

        opts = opts || {};
        return {
            height:           ('height'         in opts) ? opts.height         : CFG.eventDropAnimHeight,
            duration:         ('duration'       in opts) ? opts.duration       : CFG.eventDropAnimDuration,
            bounceEnabled:    ('bounceEnabled'  in opts) ? opts.bounceEnabled  : CFG.eventDropAnimBounceEnabled,
            bounceHeight:     ('bounceHeight'   in opts) ? opts.bounceHeight   : CFG.eventDropAnimBounceHeight,
            bounceDuration:   ('bounceDuration' in opts) ? opts.bounceDuration : CFG.eventDropAnimBounceDuration,
            bounceCount:      ('bounceCount'    in opts) ? opts.bounceCount    : CFG.eventDropAnimBounceCount,
            bounceDecay:      ('bounceDecay'    in opts) ? opts.bounceDecay    : CFG.eventDropAnimBounceDecay,
            spinEnabled:      ('spinEnabled'    in opts) ? opts.spinEnabled    : CFG.eventDropAnimSpinEnabled,
            spinTurns:        ('spinTurns'      in opts) ? opts.spinTurns      : CFG.eventDropAnimSpinTurns,

            spinMode:         ('spinMode'       in opts) ? opts.spinMode       : CFG.eventDropAnimSpinMode,
            clatterAngleDeg:  ('clatterAngleDeg' in opts) ? opts.clatterAngleDeg : CFG.eventDropAnimClatterAngleDeg,
            clatterDecay:     ('clatterDecay'   in opts) ? opts.clatterDecay   : CFG.eventDropAnimClatterDecay,

            settleEnabled:    ('settleEnabled'  in opts) ? opts.settleEnabled  : CFG.eventDropAnimSettleEnabled,
            settleFrames:     ('settleFrames'   in opts) ? opts.settleFrames   : CFG.eventDropAnimSettleFrames,
            shadowEnabled:    ('shadowEnabled'  in opts) ? opts.shadowEnabled  : CFG.eventDropAnimShadowEnabled,
            fadeInEnabled:    ('fadeInEnabled'  in opts) ? opts.fadeInEnabled  : CFG.eventDropAnimFadeInEnabled,
            fadeInDelayPct:   ('fadeInDelayPct' in opts) ? opts.fadeInDelayPct : CFG.eventDropAnimFadeInDelayPct,
            fadeInFinishPct:  ('fadeInFinishPct') in opts ? opts.fadeInFinishPct : CFG.eventDropAnimFadeInFinishPct,
            landShakeEnabled: ('landShakeEnabled' in opts) ? opts.landShakeEnabled : CFG.eventDropAnimLandShakeEnabled,
            landShakePower:   ('landShakePower'   in opts) ? opts.landShakePower   : CFG.eventDropAnimLandShakePower,
            landShakeDuration:('landShakeDuration') in opts ? opts.landShakeDuration : CFG.eventDropAnimLandShakeDuration
        };
    }
    function _easeInCubic(t) { return t * t * t; }

    var _recentSeBuffer = [];
    var MAX_SE_BUFFER = 16;

    var _suppressedSeAge = 0;
    function _isMessageActive() {
        return !!(typeof $gameMessage !== 'undefined' && $gameMessage &&
                  typeof $gameMessage.isBusy === 'function' && $gameMessage.isBusy());
    }
    function _tickLookbackClock() {
        if (!_isMessageActive()) _suppressedSeAge++;
    }

    var _decodedSeCache = {};
    var DECODED_SE_CACHE_MAX = 8;
    var _dropSeDiagnostic = { events: [] };
    var DROP_SE_DIAG_MAX = 32;
    function _logDropSeEvent(kind, info) {

        if (!CFG.eventDropAnimSyncLandSeDebug) return;
        var entry = { frame: Graphics.frameCount, kind: kind };
        if (info) Object.keys(info).forEach(function(k) { entry[k] = info[k]; });
        _dropSeDiagnostic.events.push(entry);
        if (_dropSeDiagnostic.events.length > DROP_SE_DIAG_MAX) {
            _dropSeDiagnostic.events.shift();
        }
        console.log('[ws][dropSe]', JSON.stringify(entry));
    }
    function _warmDecodedSe(name) {

        if (!name || typeof AudioManager === 'undefined' ||
            typeof AudioManager.createBuffer !== 'function') return null;
        var entry = _decodedSeCache[name];
        if (entry && entry.buffer) {
            entry.lastUsedFrame = Graphics.frameCount;

            if (!entry.ready && entry.buffer.isReady && entry.buffer.isReady()) {
                entry.ready = true;
            }
            return entry;
        }
        try {
            var buf = AudioManager.createBuffer('se', name);
            entry = {
                buffer: buf,
                ready:  !!(buf && buf.isReady && buf.isReady()),
                lastUsedFrame: Graphics.frameCount
            };
            _decodedSeCache[name] = entry;
            _evictDecodedSeIfNeeded();
            _logDropSeEvent('warm', { name: name, ready: entry.ready });
            return entry;
        } catch (e) {
            _logDropSeEvent('warm-error', { name: name, msg: String(e && e.message) });
            return null;
        }
    }
    function _evictDecodedSeIfNeeded() {
        var keys = Object.keys(_decodedSeCache);
        if (keys.length <= DECODED_SE_CACHE_MAX) return;

        var oldestKey = keys[0];
        var oldestFrame = _decodedSeCache[oldestKey].lastUsedFrame;
        for (var i = 1; i < keys.length; i++) {
            var f = _decodedSeCache[keys[i]].lastUsedFrame;
            if (f < oldestFrame) { oldestFrame = f; oldestKey = keys[i]; }
        }

        var ent = _decodedSeCache[oldestKey];
        try { if (ent.buffer && ent.buffer.stop) ent.buffer.stop(); } catch (e) {}
        delete _decodedSeCache[oldestKey];
    }
    function _playDecodedSeNow(seSnapshot) {

        if (!seSnapshot || !seSnapshot.name || typeof AudioManager === 'undefined') {
            return false;
        }
        var entry = _decodedSeCache[seSnapshot.name];
        if (entry && entry.buffer && entry.buffer.isReady && entry.buffer.isReady() &&
            typeof entry.buffer.play === 'function') {
            try {

                if (typeof AudioManager.updateBufferParameters === 'function') {
                    AudioManager.updateBufferParameters(entry.buffer,
                        AudioManager._seVolume !== undefined ? AudioManager._seVolume : 100,
                        seSnapshot);
                } else {
                    if (entry.buffer.volume !== undefined) entry.buffer.volume = (seSnapshot.volume || 90) / 100;
                    if (entry.buffer.pitch  !== undefined) entry.buffer.pitch  = (seSnapshot.pitch  || 100) / 100;
                    if (entry.buffer.pan    !== undefined) entry.buffer.pan    = (seSnapshot.pan    || 0)   / 100;
                }

                if (typeof entry.buffer.stop === 'function') entry.buffer.stop();
                entry.buffer.play(false, 0);
                entry.lastUsedFrame = Graphics.frameCount;
                _logDropSeEvent('play-cached', { name: seSnapshot.name });
                return true;
            } catch (e) {
                _logDropSeEvent('play-cached-error', { name: seSnapshot.name, msg: String(e && e.message) });

            }
        }

        try {
            var orig = AudioManager.__wsOrigPlaySe;
            if (orig) {
                orig.call(AudioManager, seSnapshot);
            } else if (AudioManager.playSe) {
                AudioManager.playSe(seSnapshot);
            }
            _logDropSeEvent('play-fallback', {
                name: seSnapshot.name,
                reason: entry ? (entry.ready ? 'play-failed' : 'not-ready') : 'cache-miss'
            });
        } catch (e2) {}
        return false;
    }
    function _seLooksLikeLandingSound(name) {
        if (!name) return false;
        var lower = String(name).toLowerCase();
        var list = CFG.eventDropAnimSyncLandSeNames;
        if (!Array.isArray(list) || list.length === 0) return false;
        for (var i = 0; i < list.length; i++) {
            var needle = String(list[i] || '').toLowerCase();
            if (needle && lower.indexOf(needle) >= 0) return true;
        }
        return false;
    }
    function _dropSyncActiveOnCurrentMap() {
        if (!CFG.eventDropAnimEnabled || !CFG.eventDropAnimSyncLandSeEnabled) return false;
        var list = CFG.eventDropAnimMapIds;
        if (list === null || list === undefined) return true;
        if (!Array.isArray(list)) return true;
        if (list.length === 0) return false;
        if (typeof $gameMap === 'undefined' || !$gameMap ||
            typeof $gameMap.mapId !== 'function' || $gameMap.mapId() <= 0) return false;
        return list.indexOf($gameMap.mapId()) >= 0;
    }
    function _anyEventCurrentlyDropping() {
        if (typeof $gameMap === 'undefined' || !$gameMap || typeof $gameMap.events !== 'function') return false;
        var evs = $gameMap.events();
        for (var i = 0; i < evs.length; i++) {
            if (evs[i] && evs[i]._ws_dropAnim) return true;
        }
        return false;
    }

    function _hookAudioManagerForLandingSe() {
        if (typeof AudioManager === 'undefined' || !AudioManager.playSe) return;
        if (AudioManager.__wsDropSeHooked) return;
        AudioManager.__wsDropSeHooked = true;
        var _origPlaySe = AudioManager.playSe;

        AudioManager.__wsOrigPlaySe = _origPlaySe;

        function _flushExpiredBufferedSes() {
            if (!CFG.eventDropAnimSyncLandSeSuppressEarly) return;

            if (_isMessageActive()) return;
            var lookback = Math.max(0, Number(CFG.eventDropAnimSyncLandSeLookbackFrames) || 0);
            for (var i = _recentSeBuffer.length - 1; i >= 0; i--) {
                var entry = _recentSeBuffer[i];

                if ((_suppressedSeAge - entry.frame) > lookback) {
                    if (!entry.played) _origPlaySe.call(AudioManager, entry.se);
                    _recentSeBuffer.splice(i, 1);
                }
            }
        }

        AudioManager.__wsFlushBuffer = _flushExpiredBufferedSes;
        AudioManager.playSe = function(se) {
            _flushExpiredBufferedSes();

            if (!se || !se.name || !_dropSyncActiveOnCurrentMap() ||
                !_seLooksLikeLandingSound(se.name)) {
                return _origPlaySe.call(this, se);
            }

            _warmDecodedSe(se.name);
            var snapshot = {
                name:   se.name,
                volume: (se.volume   !== undefined) ? se.volume   : 90,
                pitch:  (se.pitch    !== undefined) ? se.pitch    : 100,
                pan:    (se.pan      !== undefined) ? se.pan      : 0
            };
            _logDropSeEvent('intercept', { name: se.name });

            var attached = false;
            if (typeof $gameMap !== 'undefined' && $gameMap && typeof $gameMap.events === 'function') {
                var evs = $gameMap.events();
                for (var i = 0; i < evs.length; i++) {
                    var ev = evs[i];
                    if (ev && ev._ws_dropAnim) {
                        ev._ws_dropAnim.pendingLandSe = snapshot;
                        attached = true;
                    }
                }
            }
            if (attached) {
                _logDropSeEvent('attached-to-active-drop', { name: se.name });
                return;
            }

            _recentSeBuffer.push({ se: snapshot, frame: _suppressedSeAge, played: false });
            if (_recentSeBuffer.length > MAX_SE_BUFFER) _recentSeBuffer.shift();

            if (CFG.eventDropAnimSyncLandSeSuppressEarly) {
                _logDropSeEvent('buffered-suppressed', { name: se.name });
                return;
            }

            _recentSeBuffer[_recentSeBuffer.length - 1].played = true;
            _logDropSeEvent('buffered-additive', { name: se.name });
            return _origPlaySe.call(this, se);
        };
        console.log('[Widescreen] AudioManager.playSe hooked (v10.64 landing-SE sync + decoded-buffer cache + message-paused lookback)');
    }
    function _claimRecentLandingSeForDrop(anim) {

        if (!CFG.eventDropAnimSyncLandSeEnabled || anim.pendingLandSe) return;
        var lookback = Math.max(0, Number(CFG.eventDropAnimSyncLandSeLookbackFrames) || 0);

        for (var i = _recentSeBuffer.length - 1; i >= 0; i--) {
            var entry = _recentSeBuffer[i];
            if ((_suppressedSeAge - entry.frame) > lookback) break;
            anim.pendingLandSe = entry.se;

            _recentSeBuffer.splice(i, 1);
            break;
        }
    }

    function _queueLandingSe(ev, seSnapshot) {
        if (!seSnapshot || typeof AudioManager === 'undefined') return;

        _warmDecodedSe(seSnapshot.name);
        var offset = Math.floor(Number(CFG.eventDropAnimSyncLandSeOffsetFrames) || 0);
        if (offset <= 0) {
            _playDecodedSeNow(seSnapshot);
            return;
        }

        if (!ev._ws_deferredLandSes) ev._ws_deferredLandSes = [];
        ev._ws_deferredLandSes.push({ se: seSnapshot, framesLeft: offset });
    }
    function _tickDeferredLandingSes(ev) {
        var list = ev._ws_deferredLandSes;
        if (!list || list.length === 0) return;
        for (var i = list.length - 1; i >= 0; i--) {
            list[i].framesLeft--;
            if (list[i].framesLeft <= 0) {
                _playDecodedSeNow(list[i].se);
                list.splice(i, 1);
            }
        }
        if (list.length === 0) ev._ws_deferredLandSes = null;
    }
    function _startDropAnimOnEvent(ev, destX, destY, opts) {

        opts = _dropAnimOpts(opts);

        _origSetPosition.call(ev, destX, destY);

        ev._ws_dropAutoSeeded = true;

        var groundRealY = ev._realY;
        ev._ws_dropAnim = {
            destX: destX,
            destY: destY,
            groundRealY: groundRealY,
            elapsed: 0,
            phase: 'fall',

            bounceIndex: 0,
            bounceHeightCurrent: 0,
            bounceDurationCurrent: 0,
            opts: opts,

            originalOpacity: (ev._opacity !== undefined) ? ev._opacity : 255,

            pendingLandSe: null
        };

        _claimRecentLandingSeForDrop(ev._ws_dropAnim);

        ev._realY = groundRealY - opts.height;

        if (opts.fadeInEnabled) {
            ev._opacity = 0;
        }

        if (opts.shadowEnabled) {
            ev._shadow = {
                opacity: 0,
                angle:   0,
                scaleY:  -0.02,
                x:       0,
                y:       0
            };
            ev._ws_dropAnimShadow = true;
        }
    }
    function _advanceDropAnim(ev) {
        var anim = ev._ws_dropAnim;
        if (!anim) return;
        anim.elapsed++;
        var opts = anim.opts;
        if (anim.phase === 'fall') {

            var t = Math.min(1, anim.elapsed / Math.max(1, opts.duration));
            var eased = _easeInCubic(t);
            ev._realY = (anim.groundRealY - opts.height) + (opts.height * eased);

            if (opts.fadeInEnabled) {
                var delay  = Math.max(0, Math.min(1, Number(opts.fadeInDelayPct)  || 0));
                var finish = Math.max(delay + 0.01, Math.min(1, Number(opts.fadeInFinishPct) || 1));
                var fadeT;
                if (t <= delay) fadeT = 0;
                else if (t >= finish) fadeT = 1;
                else fadeT = (t - delay) / (finish - delay);
                ev._opacity = Math.round(anim.originalOpacity * fadeT);
            }
            if (opts.shadowEnabled && ev._shadow) {

                ev._shadow.opacity = Math.floor(160 * eased);
                ev._shadow.scaleY  = -(0.02 + 0.16 * eased);

                var liftTiles = anim.groundRealY - ev._realY;
                ev._shadow.y = liftTiles * $gameMap.tileHeight();
            }
            if (t >= 1) {
                ev._realY = anim.groundRealY;

                if (anim.pendingLandSe && typeof AudioManager !== 'undefined') {
                    _queueLandingSe(ev, anim.pendingLandSe);
                    anim.pendingLandSe = null;
                }
                var bCount = Math.max(0, Math.floor(Number(opts.bounceCount) || 0));
                if (opts.bounceEnabled && opts.bounceHeight > 0 &&
                    opts.bounceDuration > 0 && bCount > 0) {
                    anim.phase = 'bounce';
                    anim.elapsed = 0;
                    anim.bounceIndex = 0;
                    anim.bounceHeightCurrent   = Number(opts.bounceHeight);
                    anim.bounceDurationCurrent = Math.max(1, Number(opts.bounceDuration));

                    anim.bounceElapsedAcrossAll = 0;
                    var decayForTotal = Number(opts.bounceDecay);
                    if (!isFinite(decayForTotal) || decayForTotal < 0) decayForTotal = 0.4;
                    if (decayForTotal > 1) decayForTotal = 1;
                    var totalDur = 0;
                    var curDur = Math.max(1, Number(opts.bounceDuration));
                    for (var __b = 0; __b < bCount; __b++) {
                        totalDur += curDur;
                        curDur = Math.max(1, Math.floor(curDur * decayForTotal));
                    }
                    anim.bounceTotalDuration = totalDur;
                } else {
                    _finishDropAnim(ev);
                    return;
                }

                if (opts.landShakeEnabled && typeof $gameScreen !== 'undefined' && $gameScreen) {
                    $gameScreen.startShake(opts.landShakePower, 9, opts.landShakeDuration);
                }
            }
        } else if (anim.phase === 'bounce') {

            var bCount = Math.max(1, Math.floor(Number(opts.bounceCount) || 1));
            var dur = Math.max(1, anim.bounceDurationCurrent);
            var bt = Math.min(1, anim.elapsed / dur);
            var th = $gameMap.tileHeight();

            var lift;
            if (bt >= 0.5) {
                lift = 0;
            } else {
                lift = (anim.bounceHeightCurrent / th) * Math.sin(Math.PI * bt);
            }
            ev._realY = anim.groundRealY - lift;
            if (opts.shadowEnabled && ev._shadow) {
                ev._shadow.opacity = 160;
                ev._shadow.scaleY  = -0.18;
                ev._shadow.y = (anim.groundRealY - ev._realY) * th;
            }

            if (opts.spinEnabled && opts.spinMode !== 'none') {
                var mode = opts.spinMode;
                if (mode !== 'clatter' && mode !== 'spin') mode = 'clatter';
                if (mode === 'clatter') {

                    var baseDeg = Number(opts.clatterAngleDeg);
                    if (!isFinite(baseDeg)) baseDeg = 30;
                    var decayC = Number(opts.clatterDecay);
                    if (!isFinite(decayC) || decayC < 0) decayC = 0.6;
                    if (decayC > 1) decayC = 1;
                    var peakDeg = baseDeg * Math.pow(decayC, anim.bounceIndex);

                    var dir = (anim.bounceIndex % 2 === 0) ? 1 : -1;

                    var clatter = Math.sin(Math.PI * bt);
                    ev._wsSpinAngle = dir * peakDeg * (Math.PI / 180) * clatter;
                } else {

                    var turns = Number(opts.spinTurns);
                    if (!isFinite(turns)) turns = 1;
                    if (turns !== 0) {
                        var spinAccum = (anim.bounceElapsedAcrossAll || 0) + anim.elapsed;
                        var spinTotal = Math.max(1, anim.bounceTotalDuration || dur);
                        var st = Math.min(1, spinAccum / spinTotal);
                        var ease = 1 - Math.pow(1 - st, 3);
                        ev._wsSpinAngle = ease * turns * Math.PI * 2;
                    }
                }
            } else {

                if (ev._wsSpinAngle) ev._wsSpinAngle = 0;
            }
            if (bt >= 1) {
                ev._realY = anim.groundRealY;
                anim.bounceIndex++;
                anim.bounceElapsedAcrossAll = (anim.bounceElapsedAcrossAll || 0) + dur;
                if (anim.bounceIndex >= bCount) {

                    ev._wsSpinAngle = 0;

                    if (opts.settleEnabled && (Number(opts.settleFrames) | 0) > 0) {
                        anim.phase = 'settle';
                        anim.elapsed = 0;
                        anim.settleFrames = Math.max(1, Math.floor(Number(opts.settleFrames) || 1));
                        anim.settleRealX = ev._realX;
                        anim.settleRealY = ev._realY;
                        return;
                    }
                    _finishDropAnim(ev);
                    return;
                }

                var decay = Number(opts.bounceDecay);
                if (!isFinite(decay) || decay < 0) decay = 0.4;
                if (decay > 1) decay = 1;
                anim.bounceHeightCurrent   *= decay;
                anim.bounceDurationCurrent  = Math.max(1, Math.floor(anim.bounceDurationCurrent * decay));
                anim.elapsed = 0;
            }
        } else if (anim.phase === 'settle') {

            var sframes = Math.max(1, anim.settleFrames || 1);

            var stt = Math.min(1, anim.elapsed / sframes);
            var strength = Math.pow(1 - stt, 3);
            ev._realX = ev._realX + (anim.settleRealX - ev._realX) * strength;
            ev._realY = ev._realY + (anim.settleRealY - ev._realY) * strength;
            ev._wsSpinAngle = 0;
            if (anim.elapsed >= sframes) {

                ev._realX = anim.settleRealX;
                ev._realY = anim.settleRealY;
                _finishDropAnim(ev);
                return;
            }
        }
    }

    function _enforceDropPin(ev) {
        if (!ev) return;

        var ap = ev._wsAutoPin;
        if (ap) {
            var sameMap = (!$gameMap || $gameMap.mapId() === ap.mapId);
            if (sameMap) {

                var pinTileX = Math.round(ap.realX);
                var pinTileY = Math.round(ap.realY);

                var unpinDist = Number(CFG.eventDropAnimAutoPinUnpinDistance);
                if (!isFinite(unpinDist) || unpinDist <= 0) unpinDist = 0;
                var dx = Math.abs(ev._x - pinTileX);
                var dy = Math.abs(ev._y - pinTileY);
                if (unpinDist > 0 && Math.max(dx, dy) > unpinDist) {
                    ev._wsAutoPin = null;
                } else {

                    ev._realX = ap.realX;
                    ev._realY = ap.realY;
                    ev._x = pinTileX;
                    ev._y = pinTileY;
                    if (ev._wsSpinAngle) ev._wsSpinAngle = 0;
                }
            } else {

                ev._wsAutoPin = null;
            }
        }

        var pinsByMap = CFG.eventDropPins;
        if (pinsByMap && $gameMap) {
            var mapPins = pinsByMap[$gameMap.mapId()];
            if (mapPins && mapPins.length) {
                var matched = null;

                var roundedX = Math.round(ev._realX);
                var roundedY = Math.round(ev._realY);
                for (var i = 0; i < mapPins.length; i++) {
                    var p = mapPins[i];
                    var px, py;
                    if (Array.isArray(p)) { px = p[0]; py = p[1]; }
                    else                  { px = p.x;   py = p.y;   }
                    var snapMatch = ev._wsExplicitPinSnapshot &&
                                    ev._wsExplicitPinSnapshot.tileX === px &&
                                    ev._wsExplicitPinSnapshot.tileY === py;
                    if (snapMatch ||
                        (ev._x === px && ev._y === py) ||
                        (roundedX === px && roundedY === py)) {
                        matched = { x: px, y: py };
                        break;
                    }
                }
                if (matched) {
                    var snap = ev._wsExplicitPinSnapshot;
                    if (!snap || snap.tileX !== matched.x || snap.tileY !== matched.y) {

                        var captureRX, captureRY;
                        if (Math.abs(ev._realX - matched.x) <= 1 &&
                            Math.abs(ev._realY - matched.y) <= 1) {
                            captureRX = ev._realX;
                            captureRY = ev._realY;
                        } else {
                            captureRX = matched.x;
                            captureRY = matched.y;
                        }
                        ev._wsExplicitPinSnapshot = {
                            tileX: matched.x,
                            tileY: matched.y,
                            realX: captureRX,
                            realY: captureRY
                        };
                    } else {

                        ev._realX = snap.realX;
                        ev._realY = snap.realY;
                        ev._x = Math.round(snap.realX);
                        ev._y = Math.round(snap.realY);
                        if (ev._wsSpinAngle) ev._wsSpinAngle = 0;
                    }
                } else if (ev._wsExplicitPinSnapshot) {

                    ev._wsExplicitPinSnapshot = null;
                }
            }
        }
    }
    function _finishDropAnim(ev) {
        var anim = ev._ws_dropAnim;
        ev._ws_dropAnim = null;

        if (ev._wsSpinAngle) ev._wsSpinAngle = 0;
        if (ev._ws_dropAnimShadow) {

            ev._shadow = null;
            ev._ws_dropAnimShadow = false;
        }

        if (anim && anim.opts && anim.opts.fadeInEnabled &&
            ev._opacity !== anim.originalOpacity) {
            ev._opacity = anim.originalOpacity;
        }

        if (anim && anim.pendingLandSe && typeof AudioManager !== 'undefined') {
            _queueLandingSe(ev, anim.pendingLandSe);
        }

        if (CFG.eventDropAnimAutoPinAfterLanding) {
            ev._wsAutoPin = {
                realX:  ev._realX,
                realY:  ev._realY,
                mapId:  ($gameMap ? $gameMap.mapId() : 0)
            };
            ev._x = Math.round(ev._realX);
            ev._y = Math.round(ev._realY);
        }
    }

    var _origSetPosition = null;
    if (typeof Game_CharacterBase !== 'undefined') {
        _origSetPosition = Game_CharacterBase.prototype.setPosition;
        Game_CharacterBase.prototype.dropTo = function(x, y, opts) {
            if (!CFG.eventDropAnimEnabled) {
                _origSetPosition.call(this, x, y);
                return;
            }
            _startDropAnimOnEvent(this, x, y, opts);
        };
        Game_CharacterBase.prototype.armDropAnimation = function(opts) {
            if (!CFG.eventDropAnimEnabled) return;
            this._ws_dropArmed = opts || true;
        };

        function _shouldAutoAnimateSetPosition(ev, destX, destY) {
            if (!CFG.eventDropAnimEnabled || !CFG.eventDropAnimAutoSnap) return false;
            if (typeof Game_Event === 'undefined' || !(ev instanceof Game_Event)) return false;
            if (ev._ws_dropAnim) return false;

            var list = CFG.eventDropAnimMapIds;
            if (list !== null && list !== undefined) {
                if (!Array.isArray(list)) return false;
                if (typeof $gameMap === 'undefined' || !$gameMap ||
                    typeof $gameMap.mapId !== 'function' || $gameMap.mapId() <= 0) return false;
                if (list.length === 0) return false;
                if (list.indexOf($gameMap.mapId()) < 0) return false;
            }

            if (!ev._ws_dropAutoSeeded) return false;

            var dx = Math.abs((destX || 0) - (ev._x || 0));
            var dy = Math.abs((destY || 0) - (ev._y || 0));
            var minDist = Number(CFG.eventDropAnimAutoSnapMinDistance);
            if (!isFinite(minDist) || minDist < 0) minDist = 3;
            return Math.max(dx, dy) >= minDist;
        }

        Game_CharacterBase.prototype.setPosition = function(x, y) {
            if (this._ws_dropArmed && CFG.eventDropAnimEnabled) {
                var opts = (typeof this._ws_dropArmed === 'object') ? this._ws_dropArmed : null;
                this._ws_dropArmed = false;
                _startDropAnimOnEvent(this, x, y, opts);
                this._ws_dropAutoSeeded = true;
                return;
            }
            if (_shouldAutoAnimateSetPosition(this, x, y)) {
                _startDropAnimOnEvent(this, x, y, null);
                return;
            }
            _origSetPosition.call(this, x, y);

            if (this._wsAutoPin) {
                var pdx = Math.abs(x - this._wsAutoPin.realX);
                var pdy = Math.abs(y - this._wsAutoPin.realY);
                if (Math.max(pdx, pdy) > 0.5) {
                    this._wsAutoPin = null;
                } else {

                    this._realX = this._wsAutoPin.realX;
                    this._realY = this._wsAutoPin.realY;
                    this._x = Math.round(this._wsAutoPin.realX);
                    this._y = Math.round(this._wsAutoPin.realY);
                }
            }
            if (this._wsExplicitPinSnapshot &&
                (this._wsExplicitPinSnapshot.tileX !== x ||
                 this._wsExplicitPinSnapshot.tileY !== y)) {

                var sdx = Math.abs(x - this._wsExplicitPinSnapshot.tileX);
                var sdy = Math.abs(y - this._wsExplicitPinSnapshot.tileY);
                if (Math.max(sdx, sdy) >= 1) {
                    this._wsExplicitPinSnapshot = null;
                }
            }

            if (typeof Game_Event !== 'undefined' && this instanceof Game_Event) {
                this._ws_dropAutoSeeded = true;
            }
        };

        var _origCharUpdate = Game_CharacterBase.prototype.update;
        Game_CharacterBase.prototype.update = function() {
            _origCharUpdate.call(this);
            if (this._ws_dropAnim) _advanceDropAnim(this);

            if (!this._ws_dropAnim) _enforceDropPin(this);

            if (this._ws_deferredLandSes) _tickDeferredLandingSes(this);

            if (this === $gamePlayer) {

                _tickLookbackClock();
                if (_recentSeBuffer.length > 0 &&
                    typeof AudioManager !== 'undefined' && AudioManager.__wsFlushBuffer) {
                    AudioManager.__wsFlushBuffer();
                }
            }
        };
        console.log('[Widescreen] Game_CharacterBase.setPosition/update hooked (v10.59 event drop anim + auto-detect)');
    }

    if (typeof Sprite_Character !== 'undefined' && Sprite_Character.prototype &&
        typeof Sprite_Character.prototype.update === 'function' &&
        !Sprite_Character.__wsSpinHooked) {
        var _origSCUpdate_spin = Sprite_Character.prototype.update;
        Sprite_Character.prototype.update = function() {
            _origSCUpdate_spin.apply(this, arguments);
            if (this._character && this._character._wsSpinAngle) {
                this.rotation = this._character._wsSpinAngle;
            } else if (this.rotation && this._character && this._character._wsSpinAngle === 0) {

                this.rotation = 0;
            }
        };
        Sprite_Character.__wsSpinHooked = true;
        console.log('[Widescreen] Sprite_Character.update hooked for drop-anim spin (v10.83)');
    }

    _hookAudioManagerForLandingSe();

    // Message and menu hooks
    function _maybeOverrideMessageData(key, data) {
        if (!data || !CFG.messageTextOverrides) return data;
        var override = CFG.messageTextOverrides[key];
        if (override === undefined || override === null) return data;
        var cloned = {};
        for (var k in data) {
            if (Object.prototype.hasOwnProperty.call(data, k)) cloned[k] = data[k];
        }
        cloned.text = String(override);
        return cloned;
    }
    function _hookLanguageManagerForOverrides() {
        if (typeof LanguageManager === 'undefined' ||
            typeof LanguageManager.getMessageData !== 'function') return false;
        if (LanguageManager.__wsTextOverrideHooked) return true;
        var _origGetMessageData = LanguageManager.getMessageData;
        LanguageManager.getMessageData = function(key) {
            var data = _origGetMessageData.apply(this, arguments);
            return _maybeOverrideMessageData(key, data);
        };
        LanguageManager.__wsTextOverrideHooked = true;
        LanguageManager.__wsOrigGetMessageData = _origGetMessageData;
        var n = Object.keys(CFG.messageTextOverrides || {}).length;
        console.log('[Widescreen] LanguageManager.getMessageData hooked (v10.66 text overrides; ' + n + ' active)');
        return true;
    }
    if (!_hookLanguageManagerForOverrides()) {

        if (typeof Scene_Boot !== 'undefined' && Scene_Boot.prototype &&
            typeof Scene_Boot.prototype.start === 'function') {
            var _SB_start_msgOverride = Scene_Boot.prototype.start;
            Scene_Boot.prototype.start = function() {
                _hookLanguageManagerForOverrides();
                _SB_start_msgOverride.apply(this, arguments);
            };
        }
    }
    var OMORI_MENUS = ['Scene_OmoMenuEquip', 'Scene_OmoMenuSkill', 'Scene_OmoMenuItem', 'Scene_OmoMenuOptions'];
    function _installLegacyMenuShift() {
        OMORI_MENUS.forEach(function(sceneName) {
            var SceneClass = window[sceneName];
            if (!SceneClass || !SceneClass.prototype) return;
            if (SceneClass.__wsLegacyShifted) return;
            var _create = SceneClass.prototype.create;
            SceneClass.prototype.create = function() {
                _create.call(this);
                if (this._windowLayer) {
                    var kids = this._windowLayer.children;
                    for (var i = 0; i < kids.length; i++) {
                        var w = kids[i];
                        if (w instanceof Window) {
                            if (Math.abs(w.width - BASE_W) < 20) { w.width = WIDE_W; w.x = 0; }
                            else if (w.x < BASE_W && w.width < WIDE_W - 50) { w.x += X_OFF; }
                        }
                    }
                }
            };
            SceneClass.__wsLegacyShifted = true;
        });
    }
    _installLegacyMenuShift();

    function _installMenuHelpWidthFix() {
        if (!CFG.menuFixHelpWindowWidth) return;

        function _wsHelpBarTargetY(helpHeight) {
            var gap = Number(CFG.menuHelpWindowPlateGapPx);
            if (!isFinite(gap)) gap = 4;
            var plateH = 109;
            var extraOff = Number(CFG.menuHelpWindowYOffset) || 0;
            return Graphics.height - plateH - gap - helpHeight + extraOff;
        }

        function _wsHelpBarTargetWidth() {
            if (!CFG.menuFixHelpWindowWidth) return Graphics.width - 175;
            var mode = CFG.menuHelpWindowWidthMode;
            if (typeof mode === 'number' && isFinite(mode)) {
                return Math.max(1, Math.floor(mode));
            }
            if (mode === 'full') {
                var m = Number(CFG.menuHelpWindowFullModeMarginPx);
                if (!isFinite(m) || m < 0) m = 10;
                return Math.max(1, WIDE_W - 2 * Math.floor(m));
            }

            return BASE_W - 175;
        }

        if (typeof Scene_OmoMenuSkill !== 'undefined' &&
            Scene_OmoMenuSkill.prototype &&
            typeof Scene_OmoMenuSkill.prototype.createHelpWindow === 'function' &&
            !Scene_OmoMenuSkill.__wsHelpFixed) {
            Scene_OmoMenuSkill.prototype.createHelpWindow = function() {
                Scene_OmoMenuBase.prototype.createHelpWindow.call(this);

                this._helpWindow.width  = _wsHelpBarTargetWidth();
                this._helpWindow.height = 109;
                this._helpWindow.x      = 10;
                this._helpWindow.y      = _wsHelpBarTargetY(this._helpWindow.height);
                this._helpWindow.createContents();
                this._helpWindow.width  = 0;
            };
            Scene_OmoMenuSkill.__wsHelpFixed = true;
            console.log('[Widescreen] Scene_OmoMenuSkill.createHelpWindow overridden (v10.80 plate-anchored help y)');
        }

        if (typeof Scene_OmoMenuEquip !== 'undefined' &&
            Scene_OmoMenuEquip.prototype &&
            typeof Scene_OmoMenuEquip.prototype.createHelpWindow === 'function' &&
            !Scene_OmoMenuEquip.__wsHelpFixed) {
            Scene_OmoMenuEquip.prototype.createHelpWindow = function() {
                Scene_OmoMenuBase.prototype.createHelpWindow.call(this);
                this._helpWindow.width  = _wsHelpBarTargetWidth();
                this._helpWindow.height = 109;
                this._helpWindow.x      = 10;
                this._helpWindow.y      = _wsHelpBarTargetY(this._helpWindow.height);
                this._helpWindow.createContents();
                this._helpWindow.width  = 0;
            };
            Scene_OmoMenuEquip.__wsHelpFixed = true;
            console.log('[Widescreen] Scene_OmoMenuEquip.createHelpWindow overridden (v10.80 plate-anchored help y)');
        }

        if (typeof Scene_OmoMenuBase !== 'undefined' &&
            Scene_OmoMenuBase.prototype &&
            typeof Scene_OmoMenuBase.prototype.showInfoWindow === 'function' &&
            !Scene_OmoMenuBase.__wsInfoFixed) {
            Scene_OmoMenuBase.prototype.showInfoWindow = function(obj, duration) {
                if (duration === undefined) duration = 15;
                var targetW = _wsHelpBarTargetWidth();
                var data = {
                    obj: obj,
                    properties: ['x', 'width'],
                    from: { x: obj.x, width: obj.width },
                    to:   { x: 165,    width: targetW },
                    speeds: {}
                };
                data.speeds.x     = Math.abs(data.from.x     - data.to.x)     / duration;
                data.speeds.width = Math.abs(data.from.width - data.to.width) / duration;
                this.move.startMove(data);
            };
            Scene_OmoMenuBase.__wsInfoFixed = true;
            console.log('[Widescreen] Scene_OmoMenuBase.showInfoWindow overridden (v10.78 help-width fix)');
        }

        if (typeof Window_OmoMenuEquipStatus !== 'undefined' &&
            Window_OmoMenuEquipStatus.prototype &&
            typeof Window_OmoMenuEquipStatus.prototype.createBubbleSprites === 'function' &&
            !Window_OmoMenuEquipStatus.__wsBubblesYFixed) {
            var _origCreateBubbles = Window_OmoMenuEquipStatus.prototype.createBubbleSprites;
            Window_OmoMenuEquipStatus.prototype.createBubbleSprites = function() {
                _origCreateBubbles.call(this);
                var yOff = Number(CFG.menuEquipBubblesYOffset) || 0;
                if (yOff === 0 || !this._bubbleSprites) return;
                for (var i = 0; i < this._bubbleSprites.length; i++) {
                    var s = this._bubbleSprites[i];
                    if (!s) continue;
                    s.y += yOff;
                    if (s._originY !== undefined) s._originY = s.y;
                }
            };
            Window_OmoMenuEquipStatus.__wsBubblesYFixed = true;
            console.log('[Widescreen] Window_OmoMenuEquipStatus.createBubbleSprites patched (v10.79 bubble y-offset)');
        }

        if (typeof Scene_OmoMenuEquip !== 'undefined' &&
            Scene_OmoMenuEquip.prototype &&
            typeof Scene_OmoMenuEquip.prototype.createActorEquipStatusWindow === 'function' &&
            !Scene_OmoMenuEquip.__wsStatsPanelYFixed) {
            var _origCreateActorEquipStatusWindow = Scene_OmoMenuEquip.prototype.createActorEquipStatusWindow;
            Scene_OmoMenuEquip.prototype.createActorEquipStatusWindow = function() {
                _origCreateActorEquipStatusWindow.call(this);
                if (!CFG.menuFixEquipStatsPanelY) return;
                var panel = this._actorEquipStatus;
                if (!panel) return;

                var helpH = 109;
                var helpTop = _wsHelpBarTargetY(helpH);
                var statsGap = Number(CFG.menuStatsPanelHelpGapPx);
                if (!isFinite(statsGap)) statsGap = 4;
                panel.y = helpTop - statsGap - panel.height;
            };
            Scene_OmoMenuEquip.__wsStatsPanelYFixed = true;
            console.log('[Widescreen] Scene_OmoMenuEquip.createActorEquipStatusWindow patched (v10.81 stats panel y stacking)');
        }
    }
    _installMenuHelpWidthFix();

    if (typeof Scene_Boot !== 'undefined' && Scene_Boot.prototype &&
        typeof Scene_Boot.prototype.start === 'function' &&
        !Scene_Boot.__wsMenuHelpFixRetry) {
        var _SB_start_menuHelp = Scene_Boot.prototype.start;
        Scene_Boot.prototype.start = function() {
            _installMenuHelpWidthFix();
            _SB_start_menuHelp.apply(this, arguments);
        };
        Scene_Boot.__wsMenuHelpFixRetry = true;
    }
    var _Title_createTitleSprites = Scene_OmoriTitleScreen.prototype.createTitleSprites;
    Scene_OmoriTitleScreen.prototype.createTitleSprites = function() {
        _Title_createTitleSprites.call(this);
        this._titleTextContainerSprite.x = 167 + X_OFF;
        this._titleTextContainerSprite.y = 130 + Y_OFF;
    };
    var _Title_createTitleCommands = Scene_OmoriTitleScreen.prototype.createTitleCommands;
    Scene_OmoriTitleScreen.prototype.createTitleCommands = function() {
        _Title_createTitleCommands.call(this);
        var totalWidth = 0;
        for (var i = 0; i < this._titleCommands.length; i++) {
            totalWidth += this._titleCommands[i].width;
            if (i < this._titleCommands.length - 1) totalWidth += 39;
        }
        var startX = Math.floor((WIDE_W - totalWidth) / 2);
        var currentX = startX;
        for (var i = 0; i < this._titleCommands.length; i++) {
            this._titleCommands[i].x = currentX;
            currentX += this._titleCommands[i].width + 39;
        }
    };
    var _Title_createCommandHints = Scene_OmoriTitleScreen.prototype.createCommandHints;
    Scene_OmoriTitleScreen.prototype.createCommandHints = function() {
        _Title_createCommandHints.call(this);
        if (this._commandHints) this._commandHints.x = WIDE_W - 252;
    };
    var _Title_refreshCommandHints = Scene_OmoriTitleScreen.prototype.refreshCommandHints;
    Scene_OmoriTitleScreen.prototype.refreshCommandHints = function() {
        _Title_refreshCommandHints.call(this);
        if (this._commandHints) {
            var bitmap = this._commandHints.bitmap;
            var confirm = LanguageManager.languageData().text.System.plugins.optionsMenu.buttonHints["confirm"];
            var cancel = LanguageManager.languageData().text.System.plugins.optionsMenu.buttonHints["cancel"];
            var iconSize = 24;
            var contentWidth = iconSize + 15 + bitmap.measureTextWidth(confirm) +
                               iconSize + 15 + bitmap.measureTextWidth(cancel) + 10;
            this._commandHints.x = WIDE_W - contentWidth - (CFG.titleHintsRightPadding || 2);
        }
    };
    Scene_OmoriTitleScreen.prototype.start = function() {
        Scene_BaseEX.prototype.start.call(this);
        this.initFrameAnimations();
        if (this._instantIntro) {
            this._titleTextContainerSprite.opacity = 255;
            this._titleTextContainerSprite.y = -30 + Y_OFF;
            this._titleTextSprite.opacity = 255;
            if (this._omoriSprite) this._omoriSprite.opacity = 255;
            this._lightBulbLinesSprite.opacity = 255;
            for (var i = 0; i < this._titleCommands.length; i++) {
                var win = this._titleCommands[i];
                win.y = (WIDE_H - win.height) - 15;
                win.opacity = 255;
                win.contentsOpacity = 255;
            }
            this._commandActive = true;
            if (this._omoriSprite) this._frameAnimations[1].active = true;
            else this._frameAnimations[0].active = true;
            this._glitchSettings.active = this._worldType === 445;
            return;
        }
        var self = this;
        this.queue(function() {
            var duration = 60;
            var obj = self._titleTextContainerSprite;
            var data = {obj: obj, properties: ['opacity'], from: {opacity: obj.opacity}, to: {opacity: 255}, durations: {opacity: duration}};
            data.easing = Object_Movement.linearTween;
            self.move.startMove(data);
            if (self._omoriSprite) self._frameAnimations[1].active = true;
            else self._frameAnimations[0].active = true;
        });
        this.queue('setWaitMode', 'movement');
        this.queue('wait', 15);
        this.queue(function() {
            var duration = 60;
            var obj = self._titleTextSprite;
            var data = {obj: obj, properties: ['opacity'], from: {opacity: obj.opacity}, to: {opacity: 255}, durations: {opacity: duration}};
            data.easing = Object_Movement.linearTween;
            self.move.startMove(data);
            var obj2 = self._lightBulbLinesSprite;
            var data2 = {obj: obj2, properties: ['opacity'], from: {opacity: obj2.opacity}, to: {opacity: 255}, durations: {opacity: duration}};
            data2.easing = Object_Movement.linearTween;
            self.move.startMove(data2);
        });
        this.queue('setWaitMode', 'movement');
        this.queue('wait', 30);
        this.queue(function() {
            var duration = 60;
            var obj = self._titleTextContainerSprite;
            var data = {obj: obj, properties: ['y'], from: {y: obj.y}, to: {y: -30 + Y_OFF}, durations: {y: duration}};
            data.easing = Object_Movement.linearTween;
            self.move.startMove(data);
        });
        this.queue('setWaitMode', 'movement');
        this.queue('wait', 30);
        if (this._omoriSprite) {
            this.queue(function() {
                var duration = 60;
                var obj = self._omoriSprite;
                var data = {obj: obj, properties: ['opacity'], from: {opacity: obj.opacity}, to: {opacity: 255}, durations: {opacity: duration}};
                data.easing = Object_Movement.linearTween;
                self.move.startMove(data);
            });
            this.queue('wait', 30);
        }
        for (var i = 0; i < this._titleCommands.length; i++) {
            this.queue(function(index) {
                var duration = 30;
                var obj = self._titleCommands[index];
                obj.select(-1);
                var data = {
                    obj: obj,
                    properties: ['y', 'opacity', 'contentsOpacity'],
                    from: {y: obj.y, opacity: obj.opacity, contentsOpacity: obj.contentsOpacity},
                    to: {y: (WIDE_H - obj.height) - 22, opacity: 255, contentsOpacity: 255},
                    durations: {y: duration, opacity: duration, contentsOpacity: duration}
                };
                data.easing = Object_Movement.easeOutCirc;
                self.move.startMove(data);
            }.bind(this, i));
            this.queue('wait', 15);
        }
        this.queue(function() {
            self._glitchSettings.active = self._worldType === 445;
            self._commandActive = true;
            self.updateCommandWindowSelection();
        });
    };
    Scene_OmoriTitleScreen.prototype.commandOptions = function() {
        var self = this;
        this.queue(function() {
            for (var i = 0; i < self._titleCommands.length; i++) {
                var duration = 15;
                var obj = self._titleCommands[i];
                var data = {
                    obj: obj,
                    properties: ['y', 'opacity', 'contentsOpacity'],
                    from: {y: obj.y, opacity: obj.opacity, contentsOpacity: obj.contentsOpacity},
                    to: {y: WIDE_H, opacity: 255, contentsOpacity: 255},
                    durations: {y: duration, opacity: duration, contentsOpacity: duration}
                };
                data.easing = Object_Movement.easeOutCirc;
                self.move.startMove(data);
            }
            var duration = 35;
            var obj = self._optionsWindowsContainer;
            var data = {
                obj: obj,
                properties: ['y', 'opacity'],
                from: {y: obj.y, opacity: obj.opacity},
                to: {y: 37, opacity: 255},
                durations: {y: duration, opacity: duration}
            };
            data.easing = Object_Movement.easeOutCirc;
            self.move.startMove(data);
        });
        this.queue('setWaitMode', 'movement');
        this.queue(function() {
            self._optionCategoriesWindow.activate();
            self._controlOptionsWindow.refresh();
        });
    };
    Scene_OmoriTitleScreen.prototype.onCategoryCancel = function() {
        ConfigManager.save();
        var self = this;
        this.queue(function() {
            for (var i = 0; i < self._titleCommands.length; i++) {
                var duration = 15;
                var obj = self._titleCommands[i];
                var data = {
                    obj: obj,
                    properties: ['y', 'opacity', 'contentsOpacity'],
                    from: {y: obj.y, opacity: obj.opacity, contentsOpacity: obj.contentsOpacity},
                    to: {y: (WIDE_H - obj.height) - 22, opacity: 255, contentsOpacity: 255},
                    durations: {y: duration, opacity: duration, contentsOpacity: duration}
                };
                data.easing = Object_Movement.easeOutCirc;
                self.move.startMove(data);
            }
            var duration = 25;
            var obj = self._optionsWindowsContainer;
            var data = {
                obj: obj,
                properties: ['y', 'opacity'],
                from: {y: obj.y, opacity: obj.opacity},
                to: {y: -406, opacity: 255},
                durations: {y: duration, opacity: duration}
            };
            data.easing = Object_Movement.easeOutCirc;
            self.move.startMove(data);
        });
        this.queue('setWaitMode', 'movement');
        this.queue(function() { self._commandActive = true; });
    };

    var _skipSaveLoadMod = false;
    if (CFG.saveLoadLayout === false) {
        _skipSaveLoadMod = true;
        console.log('[Widescreen] save/load layout disabled via config.');
    } else if (CFG.saveLoadLayout === 'auto' || CFG.saveLoadLayout === true) {
        if (CFG.saveLoadLayout === 'auto') {
            try {
                if (typeof $modLoader !== 'undefined' && $modLoader.allMods) {
                    for (var mod of $modLoader.allMods.values()) {
                        var name = (mod.name || '').toLowerCase();
                        var id = (mod.id || '').toLowerCase();
                        if ((name.indexOf('save') >= 0 && name.indexOf('load') >= 0) ||
                            (id.indexOf('save') >= 0 && id.indexOf('load') >= 0)) {
                            _skipSaveLoadMod = true;
                            console.log('[Widescreen] detected save/load mod "' + mod.name + '" — skipping save/load layout changes.');
                            break;
                        }
                    }
                }
            } catch (e) { console.warn('[Widescreen] could not check for save/load mods:', e); }
        }
    }
    if (typeof Scene_OmoriFile !== 'undefined' && !_skipSaveLoadMod) {
        var FILE_WIDTH = 436;
        var FILE_HEIGHT = 142;
        var FILE_ROW_GAP = 10;
        var FILE_COL_GAP = 40;
        var COMMAND_TO_FILES_GAP = 30;
        var TOP_PADDING = 28;
        var availableHeight = WIDE_H - TOP_PADDING;
        var ROWS_PER_COL = Math.max(3, Math.floor((availableHeight + FILE_ROW_GAP) / (FILE_HEIGHT + FILE_ROW_GAP)));
        ROWS_PER_COL = Math.min(ROWS_PER_COL, 5);
        var MAX_SAVES = ROWS_PER_COL * 2;
        var requiredWidth = 119 + COMMAND_TO_FILES_GAP + 2 * FILE_WIDTH + FILE_COL_GAP;
        var useOneColumn = (WIDE_W < requiredWidth);
        if (useOneColumn) MAX_SAVES = ROWS_PER_COL;
        console.log('[Widescreen] save/load layout: ' + (useOneColumn ? '1' : '2') + ' col(s) x ' + ROWS_PER_COL + ' rows = ' + MAX_SAVES + ' slots');
        var LAYOUT_WIDTH = useOneColumn ? (119 + COMMAND_TO_FILES_GAP + FILE_WIDTH) : (119 + COMMAND_TO_FILES_GAP + 2 * FILE_WIDTH + FILE_COL_GAP);
        var LAYOUT_START_X = Math.floor((WIDE_W - LAYOUT_WIDTH) / 2);
        DataManager.maxSavefiles = function() { return MAX_SAVES; };
        var _SF_createCommandWindow = Scene_OmoriFile.prototype.createCommandWindow;
        Scene_OmoriFile.prototype.createCommandWindow = function() {
            _SF_createCommandWindow.call(this);
            this._commandWindow.x = LAYOUT_START_X;
        };
        Scene_OmoriFile.prototype.createfileWindows = function() {
            this._fileWindows = [];
            var colStartX = this._commandWindow.x + this._commandWindow.width + COMMAND_TO_FILES_GAP;
            for (var i = 0; i < MAX_SAVES; i++) {
                var win = new Window_OmoriFileInformation(i);
                var col = Math.floor(i / ROWS_PER_COL);
                var row = i % ROWS_PER_COL;
                win.x = colStartX + col * (FILE_WIDTH + FILE_COL_GAP);
                win.y = TOP_PADDING + row * (FILE_HEIGHT + FILE_ROW_GAP);
                this._fileWindows[i] = win;
                this.addChild(win);
            }
        };
        Scene_OmoriFile.prototype.loadReservedBitmaps = function() {
            Scene_Base.prototype.loadReservedBitmaps.call(this);
            for (var i = 1; i <= MAX_SAVES; i++) {
                var info = DataManager.loadSavefileInfo(i);
                if (info) {
                    var actor = info.actorData;
                    ImageManager.reserveFace(actor.faceName, actor.faceIndex, this._imageReservationId);
                }
            }
            ImageManager.reserveSystem('faceset_states', 0, this._imageReservationId);
            ImageManager.reserveParallax('polaroidBG_BS_sky', 0, this._imageReservationId);
        };
        Scene_OmoriFile.prototype.onCommandWindowOk = function() {
            this._canSelect = true;
            var latestFile = !!this._canSave ? DataManager.lastAccessedSavefileId() : DataManager.latestSavefileId();
            this._saveIndex = (latestFile - 1) % MAX_SAVES;
            this.updateSaveIndexCursor();
        };
        Scene_OmoriFile.prototype.updateSelectInput = function() {
            if (Input.isTriggered('ok')) { this.onSelectInputOk(); return; }
            if (Input.isTriggered('cancel')) { SoundManager.playCancel(); this.onSelectInputCancel(); return; }
            var numCols = useOneColumn ? 1 : 2;
            var col = Math.floor(this._saveIndex / ROWS_PER_COL);
            var row = this._saveIndex % ROWS_PER_COL;
            var changed = false;
            if (Input.isRepeated('up')) { SoundManager.playCursor(); row = (row - 1 + ROWS_PER_COL) % ROWS_PER_COL; changed = true; }
            else if (Input.isRepeated('down')) { SoundManager.playCursor(); row = (row + 1) % ROWS_PER_COL; changed = true; }
            else if (Input.isRepeated('left') && numCols > 1) { SoundManager.playCursor(); col = (col - 1 + numCols) % numCols; changed = true; }
            else if (Input.isRepeated('right') && numCols > 1) { SoundManager.playCursor(); col = (col + 1) % numCols; changed = true; }
            if (changed) { this._saveIndex = col * ROWS_PER_COL + row; this.updateSaveIndexCursor(); }
        };
        Scene_OmoriFile.prototype.updatePlacement = function() { };
        Scene_OmoriFile.prototype.isOutOfBounds = function() { return 0; };
    }
    if (typeof Scene_OmoriTitleScreen !== 'undefined' && !_skipSaveLoadMod) {
        var maxToCheck = (typeof DataManager.maxSavefiles === 'function') ? DataManager.maxSavefiles() : 6;
        var _Title_initialize_save = Scene_OmoriTitleScreen.prototype.initialize;
        Scene_OmoriTitleScreen.prototype.initialize = function() {
            _Title_initialize_save.call(this);
            this._canContinue = false;
            for (var i = 1; i <= maxToCheck; i++) {
                if (StorageManager.exists(i)) { this._canContinue = true; break; }
            }
        };
    }

    var _ghostSprites = [];
    function _collectMapObjects() {
        var objects = [];
        if (typeof DataManager === 'undefined' || !DataManager._tempTiledData) return objects;
        if (!DataManager._tempTiledData.layers) return objects;
        DataManager._tempTiledData.layers.forEach(function(layer, layerIdx) {
            if (layer.type !== 'objectgroup') return;
            if (!layer.objects) return;
            var zIndex = (layer.properties && layer.properties.zIndex) ?
                         parseInt(layer.properties.zIndex) : 3;
            layer.objects.forEach(function(obj) {
                if (!obj.gid || obj.visible === false) return;
                objects.push({
                    gid: obj.gid,
                    x: obj.x,
                    y: obj.y,
                    width: obj.width,
                    height: obj.height,
                    layerIdx: layerIdx,
                    zIndex: zIndex
                });
            });
        });
        return objects;
    }
    function _getTilesetTextureForGid(gid) {
        if (!DataManager._tempTiledData) return null;
        var tilesets = DataManager._tempTiledData.tilesets;
        for (var i = 0; i < tilesets.length; i++) {
            var ts = tilesets[i];
            if (gid >= ts.firstgid && gid < ts.firstgid + ts.tilecount) {
                return { tileset: ts, textureIdx: i, localId: gid - ts.firstgid };
            }
        }
        return null;
    }

    function _ghostsAllowedOnCurrentMap() {
        var list = CFG.ghostObjectMapIds;
        if (list === null || list === undefined) return true;
        if (!Array.isArray(list)) return true;
        if (!$gameMap || $gameMap.mapId() <= 0) return false;
        return list.indexOf($gameMap.mapId()) >= 0;
    }
    function _createGhostSprites(scene) {
        _destroyGhostSprites();
        if (!_ghostsAllowedOnCurrentMap()) return;
        if (!$gameMap || !$gameMap.isTiledMap || !$gameMap.isTiledMap()) return;
        if (!scene._spriteset || !scene._spriteset._tilemap) return;
        var tilemap = scene._spriteset._tilemap;
        if (!tilemap.bitmaps) return;
        var objects = _collectMapObjects();
        if (objects.length === 0) return;
        objects.forEach(function(obj) {
            var info = _getTilesetTextureForGid(obj.gid);
            if (!info) return;
            var bitmap = tilemap.bitmaps[info.textureIdx];
            if (!bitmap) return;
            var ts = info.tileset;
            var tw = ts.tilewidth;
            var th = ts.tileheight;
            var cols = ts.columns || Math.floor(ts.imagewidth / tw);
            var ux = (info.localId % cols) * tw;
            var uy = Math.floor(info.localId / cols) * th;
            var sprite = new Sprite(bitmap);
            sprite.setFrame(ux, uy, tw, th);
            sprite._ws_ghost_objX = obj.x;
            sprite._ws_ghost_objY = obj.y - obj.height;
            sprite._ws_ghost_w = tw;
            sprite._ws_ghost_h = th;
            sprite.z = obj.zIndex;
            sprite.visible = false;
            tilemap.addChild(sprite);
            _ghostSprites.push(sprite);
        });
        if (_ghostSprites.length > 0) {
            console.log('[Widescreen] created ' + _ghostSprites.length + ' ghost sprite(s) for YED objects.');
        }
    }
    function _destroyGhostSprites() {
        _ghostSprites.forEach(function(s) {
            if (s.parent) s.parent.removeChild(s);
        });
        _ghostSprites = [];
    }
    function _updateGhostSprites() {
        if (_ghostSprites.length === 0) return;
        if (!$gameMap) return;
        var scene = SceneManager._scene;
        if (!scene || !scene._spriteset || !scene._spriteset._tilemap) return;
        var tilemap = scene._spriteset._tilemap;
        var tw = $gameMap.tileWidth();
        var th = $gameMap.tileHeight();
        var ox = tilemap.origin ? tilemap.origin.x : ($gameMap.displayX() * tw);
        var oy = tilemap.origin ? tilemap.origin.y : ($gameMap.displayY() * th);
        var mapPixelW = $gameMap.width() * tw;
        var mapPixelH = $gameMap.height() * th;
        var loopH = $gameMap.isLoopHorizontal();
        var loopV = $gameMap.isLoopVertical();
        _ghostSprites.forEach(function(s) {
            var sx = s._ws_ghost_objX - ox;
            var sy = s._ws_ghost_objY - oy;
            if (loopH) {
                while (sx < -s._ws_ghost_w) sx += mapPixelW;
                while (sx > WIDE_W) sx -= mapPixelW;
            }
            if (loopV) {
                while (sy < -s._ws_ghost_h) sy += mapPixelH;
                while (sy > WIDE_H) sy -= mapPixelH;
            }
            if (sx > -s._ws_ghost_w && sx < WIDE_W &&
                sy > -s._ws_ghost_h && sy < WIDE_H) {
                s.x = Math.round(sx);
                s.y = Math.round(sy);
                s.visible = true;
            } else {
                s.visible = false;
            }
        });
    }
    console.log('[Widescreen] YED tiled: ghost sprites only (no prototype patching).');

    var _backdropSprite = null;
    var _DEFAULT_BACKDROP_COLOR = '#ffffff';
    function _getBackdropColorForMap() {
        if ($gameMap && $gameMap.mapId() > 0) {
            var ov = mapOverrides[$gameMap.mapId()];
            if (ov && ov.backdrop) return ov.backdrop;
        }
        return _DEFAULT_BACKDROP_COLOR;
    }
    function _createBackdropSprite(scene) {
        _destroyBackdropSprite();
        if (!scene || !scene._spriteset) return;
        var spriteset = scene._spriteset;
        if (!spriteset._baseSprite) return;
        var color = _getBackdropColorForMap();
        var bmp = new Bitmap(WIDE_W, WIDE_H);
        bmp.fillAll(color);
        _backdropSprite = new Sprite(bmp);
        _backdropSprite.x = 0;
        _backdropSprite.y = 0;
        _backdropSprite.z = -100;
        spriteset._baseSprite.addChildAt(_backdropSprite, 0);
        console.log('[Widescreen] backdrop sprite created (color: ' + color + ').');
    }
    function _destroyBackdropSprite() {
        if (!_backdropSprite) return;
        if (_backdropSprite.parent) _backdropSprite.parent.removeChild(_backdropSprite);
        if (_backdropSprite.bitmap) _backdropSprite.bitmap = null;
        _backdropSprite = null;
    }
    function _refreshBackdropSprite() {
        var scene = SceneManager._scene;
        if (!scene || !(scene instanceof Scene_Map)) return;
        _createBackdropSprite(scene);
    }

    function _getPillarboxInfo() {
        if (!CFG.pillarboxEnabled) return null;
        if (!$gameMap || !$dataMap) return null;
        var mapId = $gameMap.mapId();
        var tileWidth = $gameMap.tileWidth();
        var tileHeight = $gameMap.tileHeight();
        var mapPixelW = $gameMap.width() * tileWidth;
        var mapPixelH = $gameMap.height() * tileHeight;
        var ov = mapOverrides[mapId] || {};
        var forceSmallW = false;
        var forceSmallH = false;
        if (CFG.enableForceSmallOverride) {
            if (ov.forceSmallWidth === true && WIDE_W > SMALL_W)  forceSmallW = true;
            if (ov.forceSmallHeight === true && WIDE_H > SMALL_H) forceSmallH = true;
        }
        var leftBar, rightBar, shouldPillarbox;
        if (forceSmallW) {
            var horizPad = Math.floor((WIDE_W - SMALL_W) / 2);
            leftBar = rightBar = Math.max(horizPad, 0);
            shouldPillarbox = leftBar > 0;
        } else {
            if (ov.pillarbox === true) shouldPillarbox = true;
            else if (ov.pillarbox === false) shouldPillarbox = false;
            else shouldPillarbox = mapPixelW < WIDE_W;
            leftBar = shouldPillarbox ? Math.floor((WIDE_W - Math.min(mapPixelW, WIDE_W)) / 2) : 0;
            rightBar = leftBar;
        }
        var topBar, bottomBar, shouldLetterbox;
        if (forceSmallH) {
            var vertPad = Math.floor((WIDE_H - SMALL_H) / 2);
            topBar = bottomBar = Math.max(vertPad, 0);
            shouldLetterbox = topBar > 0;
        } else {
            if (ov.letterbox === true) shouldLetterbox = true;
            else if (ov.letterbox === false) shouldLetterbox = false;
            else shouldLetterbox = mapPixelH < WIDE_H;
            topBar = shouldLetterbox ? Math.floor((WIDE_H - Math.min(mapPixelH, WIDE_H)) / 2) : 0;
            bottomBar = topBar;
        }
        return {
            pillarbox: shouldPillarbox, letterbox: shouldLetterbox,
            leftBar: leftBar, rightBar: rightBar, topBar: topBar, bottomBar: bottomBar,
            forceSmallWActive: forceSmallW, forceSmallHActive: forceSmallH
        };
    }
    function _easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }

    function _easeInOutSine(t) { return -(Math.cos(Math.PI * t) - 1) / 2; }
    function _createBarBitmap(barWidth, barHeight, direction, fadeOverride) {
        var fadeW = (fadeOverride !== undefined) ? fadeOverride : SOFT_EDGE_WIDTH;
        var onHorizontalAxis = (direction === 'left' || direction === 'right');
        var totalW = onHorizontalAxis ? Math.max(barWidth + fadeW, 1) : Math.max(barWidth, 1);
        var totalH = onHorizontalAxis ? Math.max(barHeight, 1) : Math.max(barHeight + fadeW, 1);
        var bmp = new Bitmap(totalW, totalH);
        if (fadeW <= 0 || barWidth <= 0 || barHeight <= 0) {
            bmp.fillAll('rgba(255, 255, 255, 1)');
            return { bitmap: bmp, totalW: totalW, totalH: totalH, fadeW: 0 };
        }
        var ctx = bmp._context;
        if (!ctx) {
            bmp.fillAll('rgba(255, 255, 255, 1)');
            return { bitmap: bmp, totalW: totalW, totalH: totalH, fadeW: 0 };
        }
        var grad;
        switch (direction) {
            case 'left':
                bmp.fillRect(0, 0, barWidth, totalH, 'rgba(255, 255, 255, 1)');
                grad = ctx.createLinearGradient(barWidth, 0, barWidth + fadeW, 0);
                grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
                grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
                ctx.fillStyle = grad;
                ctx.fillRect(barWidth, 0, fadeW, totalH);
                break;
            case 'right':
                grad = ctx.createLinearGradient(0, 0, fadeW, 0);
                grad.addColorStop(0, 'rgba(255, 255, 255, 0)');
                grad.addColorStop(1, 'rgba(255, 255, 255, 1)');
                ctx.fillStyle = grad;
                ctx.fillRect(0, 0, fadeW, totalH);
                bmp.fillRect(fadeW, 0, barWidth, totalH, 'rgba(255, 255, 255, 1)');
                break;
            case 'top':
                bmp.fillRect(0, 0, totalW, barHeight, 'rgba(255, 255, 255, 1)');
                grad = ctx.createLinearGradient(0, barHeight, 0, barHeight + fadeW);
                grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
                grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
                ctx.fillStyle = grad;
                ctx.fillRect(0, barHeight, totalW, fadeW);
                break;
            case 'bottom':
                grad = ctx.createLinearGradient(0, 0, 0, fadeW);
                grad.addColorStop(0, 'rgba(255, 255, 255, 0)');
                grad.addColorStop(1, 'rgba(255, 255, 255, 1)');
                ctx.fillStyle = grad;
                ctx.fillRect(0, 0, totalW, fadeW);
                bmp.fillRect(0, fadeW, totalW, barHeight, 'rgba(255, 255, 255, 1)');
                break;
            default: bmp.fillAll('rgba(255, 255, 255, 1)');
        }
        bmp._setDirty();
        return { bitmap: bmp, totalW: totalW, totalH: totalH, fadeW: fadeW };
    }
    function _findPillarInsertIndex(scene) {
        if (!scene || !scene.children) return 0;
        for (var i = 0; i < scene.children.length; i++) {
            var child = scene.children[i];
            if (!child) continue;
            if (child === scene._spriteset) return i + 1;
            if (typeof Spriteset_Base !== 'undefined' && child instanceof Spriteset_Base) return i + 1;
        }
        if (scene._windowLayer) {
            var wlIdx = scene.children.indexOf(scene._windowLayer);
            if (wlIdx >= 0) return wlIdx;
        }
        return Math.min(1, scene.children.length);
    }
    var _pillarSprites = null;
    var _pillarBitmapCache = { leftW: -1, rightW: -1, topH: -1, bottomH: -1 };

    var _barCurtainState = {
        left:   { size: 0, progress: 0, target: 0, pendingSize: null },
        right:  { size: 0, progress: 0, target: 0, pendingSize: null },
        top:    { size: 0, progress: 0, target: 0, pendingSize: null },
        bottom: { size: 0, progress: 0, target: 0, pendingSize: null }
    };
    var _barsFirstScene = true;
    function _barCurtainEnabled() {
        return (CFG.barCurtainEnabled !== undefined) ? !!CFG.barCurtainEnabled : true;
    }
    function _barCurtainDuration() {
        return Math.max(1, Number(CFG.barCurtainDuration) || 48);
    }
    function _barCurtainEdge() {
        var e = (CFG.barCurtainEdgeWidth !== undefined) ? Number(CFG.barCurtainEdgeWidth) : 40;
        if (isNaN(e) || e < 0) e = 40;

        return Math.max(e, SOFT_EDGE_WIDTH);
    }

    function _barCurtainEdgeMax() {
        var m = (CFG.barCurtainEdgeMaxWidth !== undefined) ? Number(CFG.barCurtainEdgeMaxWidth) : 120;
        if (isNaN(m) || m < 0) m = 120;
        return Math.max(m, _barCurtainEdge());
    }

    function _barCurtainEdgeAt(easedProgress) {
        var base = _barCurtainEdge();
        var max = _barCurtainEdgeMax();
        return base + (max - base) * (1 - easedProgress);
    }

    function _ensureBarBitmap(key, size, mode, fadeW) {
        var s = _pillarSprites[key];

        var fq = (mode === 'curtain') ? Math.round((fadeW || _barCurtainEdge()) / 8) * 8 : -1;
        if (s._wsBarMode === mode && s._wsBarSize === size &&
            s._wsBarFade === fq && s.bitmap) return;
        var horiz = (key === 'left' || key === 'right');
        var fade = (mode === 'curtain') ? fq : undefined;
        var bmp = horiz ? _createBarBitmap(size, WIDE_H, key, fade)
                        : _createBarBitmap(WIDE_W, size, key, fade);
        s.bitmap = bmp.bitmap;
        s._wsTotalW = bmp.totalW;
        s._wsTotalH = bmp.totalH;
        s._wsBarMode = mode;
        s._wsBarSize = size;
        s._wsBarFade = fq;
    }

    function _applyBarSide(key) {
        if (!_pillarSprites) return;
        var st = _barCurtainState[key];
        var s = _pillarSprites[key];
        if (!s) return;
        if (st.progress <= 0 || st.size <= 0) { s.visible = false; return; }
        if (st.progress >= 1) {

            _ensureBarBitmap(key, st.size, 'rest');
            if (key === 'left')        { s.x = 0; s.y = 0; }
            else if (key === 'right')  { s.x = WIDE_W - st.size - SOFT_EDGE_WIDTH; s.y = 0; }
            else if (key === 'top')    { s.x = 0; s.y = 0; }
            else                       { s.x = 0; s.y = WIDE_H - st.size - SOFT_EDGE_WIDTH; }
        } else {

            var eased = _easeInOutSine(st.progress);
            var F = _barCurtainEdgeAt(eased);
            _ensureBarBitmap(key, st.size, 'curtain', F);
            var Fs = (s._wsBarFade >= 0) ? s._wsBarFade : Math.round(F);

            var travel = st.size + Math.max(F, Fs);
            var off = Math.round((1 - eased) * travel);
            if (key === 'left')        { s.x = -off; s.y = 0; }
            else if (key === 'right')  { s.x = WIDE_W - st.size - Fs + off; s.y = 0; }
            else if (key === 'top')    { s.x = 0; s.y = -off; }
            else                       { s.x = 0; s.y = WIDE_H - st.size - Fs + off; }
        }
        s.setFrame(0, 0, s._wsTotalW, s._wsTotalH);
        s.visible = true;
    }

    function _updateBarCurtainAnim() {
        if (!_pillarSprites) return;
        var step = 1 / _barCurtainDuration();
        Object.keys(_barCurtainState).forEach(function(key) {
            var st = _barCurtainState[key];
            if (st.progress === st.target) {

                if (st.progress === 0 && st.pendingSize !== null) {
                    st.size = st.pendingSize;
                    st.pendingSize = null;
                    var s = _pillarSprites[key];
                    if (s) s._wsBarSize = -1;
                    if (st.size > 0) {
                        st.target = 1;
                        st.progress = 1;
                        _applyBarSide(key);
                    }
                }
                return;
            }
            if (st.progress < st.target) st.progress = Math.min(st.target, st.progress + step);
            else                         st.progress = Math.max(st.target, st.progress - step);
            _applyBarSide(key);
        });
    }

    function _findBarParent(scene) {
        var ss = scene ? scene._spriteset : null;
        if (ss) {
            if (ss._pictureContainer) {
                var pi = ss.children.indexOf(ss._pictureContainer);
                if (pi >= 0) return { parent: ss, index: pi };
            }
            if (ss._baseSprite) {
                var bi = ss.children.indexOf(ss._baseSprite);
                if (bi >= 0) return { parent: ss, index: bi + 1 };
            }
            return { parent: ss, index: Math.min(1, ss.children.length) };
        }

        return { parent: scene, index: _findPillarInsertIndex(scene) };
    }

    var BAR_TINT_BLACK = 0x000000;
    function _barFadeMirrorEnabled() {
        return (CFG.barFadeMirrorEnabled !== undefined) ? !!CFG.barFadeMirrorEnabled : true;
    }

    var _solidPicCache = {};
    function _solidColorOfPicture(name) {
        if (_solidPicCache[name] !== undefined) return _solidPicCache[name];
        var bmp;
        try { bmp = ImageManager.loadPicture(name); } catch (e) { return (_solidPicCache[name] = false); }
        if (!bmp || !bmp.isReady || !bmp.isReady()) return undefined;
        if (bmp.width < BASE_W - 32 || bmp.height < BASE_H - 32) {
            return (_solidPicCache[name] = false);
        }
        try {
            var ctx = bmp._context;
            if (!ctx) return (_solidPicCache[name] = false);
            var w = bmp.width, h = bmp.height;
            var first = null, ok = true;
            for (var gy = 0; gy < 4 && ok; gy++) {
                for (var gx = 0; gx < 4 && ok; gx++) {
                    var px = ctx.getImageData(
                        Math.floor(w * (gx + 0.5) / 4),
                        Math.floor(h * (gy + 0.5) / 4), 1, 1).data;
                    if (px[3] < 250) { ok = false; break; }
                    if (!first) first = [px[0], px[1], px[2]];
                    else if (Math.abs(px[0] - first[0]) > 12 ||
                             Math.abs(px[1] - first[1]) > 12 ||
                             Math.abs(px[2] - first[2]) > 12) { ok = false; }
                }
            }
            _solidPicCache[name] = (ok && first) ? { r: first[0], g: first[1], b: first[2] } : false;
        } catch (e) {
            _solidPicCache[name] = false;
        }
        return _solidPicCache[name];
    }
    function _getActiveScreenFade() {
        if (typeof $gameScreen === 'undefined' || !$gameScreen) return null;
        var best = null;
        function consider(r, g, b, a) {
            if (a <= 0.004) return;
            if (!best || a > best.alpha) best = { r: r, g: g, b: b, alpha: a };
        }

        var flash = $gameScreen._flashColor;
        if (flash && flash[3] > 0) {
            consider(flash[0], flash[1], flash[2], flash[3] / 255);
        }

        if (typeof $gameScreen.brightness === 'function') {
            var bright = $gameScreen.brightness();
            if (bright < 255) consider(0, 0, 0, 1 - bright / 255);
        }

        if (typeof $gameScreen.tone === 'function') {
            var tone = $gameScreen.tone();
            if (tone) {
                var tMin = Math.min(tone[0], tone[1], tone[2]);
                if (tMin > 0) {
                    consider(Math.min(tone[0], 255),
                             Math.min(tone[1], 255),
                             Math.min(tone[2], 255), 1);
                }
            }
        }

        for (var pid = 1; pid <= 100; pid++) {
            var pic = $gameScreen.picture(pid);
            if (!pic) continue;
            var nm = (pic._name || '');
            if (!nm) continue;
            var op = (pic._opacity !== undefined) ? pic._opacity :
                     (typeof pic.opacity === 'function' ? pic.opacity() : 0);
            if (op <= 0) continue;
            var lower = nm.toLowerCase();
            if (lower.indexOf('white_screen') >= 0 || lower.indexOf('white_fade') >= 0) {
                consider(255, 255, 255, op / 255);
                continue;
            }
            if (lower.indexOf('black_screen') >= 0 || lower.indexOf('black_fade') >= 0) {
                consider(0, 0, 0, op / 255);
                continue;
            }
            var solid = _solidColorOfPicture(nm);
            if (solid) consider(solid.r, solid.g, solid.b, op / 255);
        }
        return best;
    }
    function _currentBarTint() {
        if (!_barFadeMirrorEnabled()) return BAR_TINT_BLACK;
        var fade = _getActiveScreenFade();
        if (!fade) return BAR_TINT_BLACK;

        var r = Math.round(fade.r * fade.alpha);
        var g = Math.round(fade.g * fade.alpha);
        var b = Math.round(fade.b * fade.alpha);
        return (r << 16) | (g << 8) | b;
    }
    function _updateBarFadeMirror() {
        var tint = _currentBarTint();
        if (_pillarSprites) {
            Object.keys(_pillarSprites).forEach(function(key) {
                _pillarSprites[key].tint = tint;
            });
        }
        if (_fogSprites) {
            Object.keys(_fogSprites).forEach(function(key) {
                _fogSprites[key].tint = tint;
            });
        }
    }
    function _createPillarSprites(scene) {
        if (!scene || _pillarSprites) return;
        _pillarSprites = {
            left:   new Sprite(new Bitmap(1, 1)),
            right:  new Sprite(new Bitmap(1, 1)),
            top:    new Sprite(new Bitmap(1, 1)),
            bottom: new Sprite(new Bitmap(1, 1))
        };
        Object.keys(_pillarSprites).forEach(function(k) { _pillarSprites[k].tint = BAR_TINT_BLACK; });
        var spot = _findBarParent(scene);
        spot.parent.addChildAt(_pillarSprites.left,   spot.index);
        spot.parent.addChildAt(_pillarSprites.right,  spot.index + 1);
        spot.parent.addChildAt(_pillarSprites.top,    spot.index + 2);
        spot.parent.addChildAt(_pillarSprites.bottom, spot.index + 3);
    }
    function _destroyPillarSprites() {
        if (!_pillarSprites) return;
        Object.keys(_pillarSprites).forEach(function(key) {
            var sprite = _pillarSprites[key];
            if (sprite && sprite.parent) sprite.parent.removeChild(sprite);
            if (sprite && sprite.bitmap) sprite.bitmap = null;
        });
        _pillarSprites = null;

    }

    function _updatePillarSprites(instant) {
        if (!_pillarSprites) return;
        var info = _getPillarboxInfo();
        var want = {
            left:   (info && info.pillarbox && info.leftBar   > 0) ? info.leftBar   : 0,
            right:  (info && info.pillarbox && info.rightBar  > 0) ? info.rightBar  : 0,
            top:    (info && info.letterbox && info.topBar    > 0) ? info.topBar    : 0,
            bottom: (info && info.letterbox && info.bottomBar > 0) ? info.bottomBar : 0
        };
        var animate = _barCurtainEnabled() && !instant && !_barsFirstScene;
        _barsFirstScene = false;
        Object.keys(want).forEach(function(key) {
            var st = _barCurtainState[key];
            var size = want[key];
            if (!animate) {

                st.size = size;
                st.pendingSize = null;
                st.target = size > 0 ? 1 : 0;
                st.progress = st.target;
                var s = _pillarSprites[key];
                if (s) s._wsBarSize = -1;
                _applyBarSide(key);
                return;
            }
            if (size > 0) {
                if (st.size === size && st.progress > 0) {

                    st.pendingSize = null;
                    st.target = 1;
                } else if (st.progress > 0) {

                    st.size = size;
                    st.pendingSize = null;
                    st.target = 1;
                    st.progress = 1;
                    var spw = _pillarSprites[key];
                    if (spw) spw._wsBarSize = -1;
                    _applyBarSide(key);
                } else {

                    st.size = size;
                    st.pendingSize = null;
                    st.target = 1;
                    st.progress = 1;
                    var sp = _pillarSprites[key];
                    if (sp) sp._wsBarSize = -1;
                    _applyBarSide(key);
                }
            } else {

                st.pendingSize = null;
                st.target = 0;
            }
            if (st.progress === st.target && st.pendingSize === null) _applyBarSide(key);
        });
    }
    var _SM_createDisplayObjects = Scene_Map.prototype.createDisplayObjects;
    Scene_Map.prototype.createDisplayObjects = function() {
        _SM_createDisplayObjects.call(this);
        _createBackdropSprite(this);
        _createPillarSprites(this);
        _createFogSprites(this);
        _createDecorationSprites(this);
        _createGhostSprites(this);
        _updatePillarSprites();
        _updateFogSprites();
        _updateDecorationSprites();
        _updateGhostSprites();
    };
    var _SM_terminate = Scene_Map.prototype.terminate;
    Scene_Map.prototype.terminate = function() {
        _destroyBackdropSprite();
        _destroyPillarSprites();
        _destroyFogSprites();
        _destroyDecorationSprites();
        _destroyGhostSprites();
        _destroyDebugOverlay();
        _SM_terminate.call(this);
    };
    var _GM_setup = Game_Map.prototype.setup;
    Game_Map.prototype.setup = function(mapId) {
        _GM_setup.call(this, mapId);
        _pillarBitmapCache = { leftW: -1, rightW: -1, topH: -1, bottomH: -1 };
        _fogBitmapCache = { leftW: -1, rightW: -1, topH: -1, bottomH: -1 };
        setTimeout(function() {
            var scene = SceneManager._scene;
            _updatePillarSprites();
            _updateFogSprites();
            _destroyDecorationSprites();
            _destroyGhostSprites();
            if (scene && scene instanceof Scene_Map) {
                _refreshBackdropSprite();
                _createDecorationSprites(scene);
                _updateDecorationSprites();
                _createGhostSprites(scene);
                _updateGhostSprites();
            }
        }, 100);
    };
    function _addPillarSpritesToScene(scene) {
        var info = _getPillarboxInfo();
        if (!info) return;
        var leftBar = info.leftBar, rightBar = info.rightBar;
        var topBar = info.topBar, bottomBar = info.bottomBar;
        if (!info.forceSmallWActive) {
            var MENU_PILLAR_EXTRA = 10;
            leftBar += MENU_PILLAR_EXTRA;
            rightBar += MENU_PILLAR_EXTRA;
        }
        if (leftBar <= 0 && rightBar <= 0 && topBar <= 0 && bottomBar <= 0) return;
        var sprites = { left: null, right: null, top: null, bottom: null };
        if (leftBar > 0) {
            var bL = _createBarBitmap(leftBar, WIDE_H, 'left');
            sprites.left = new Sprite(bL.bitmap);
            sprites.left.tint = BAR_TINT_BLACK;
            sprites.left.x = 0; sprites.left.y = 0;
            sprites.left.setFrame(0, 0, bL.totalW, bL.totalH);
            sprites.left.visible = true;
        }
        if (rightBar > 0) {
            var bR = _createBarBitmap(rightBar, WIDE_H, 'right');
            sprites.right = new Sprite(bR.bitmap);
            sprites.right.tint = BAR_TINT_BLACK;
            sprites.right.x = WIDE_W - rightBar - SOFT_EDGE_WIDTH;
            sprites.right.y = 0;
            sprites.right.setFrame(0, 0, bR.totalW, bR.totalH);
            sprites.right.visible = true;
        }
        if (topBar > 0) {
            var bT = _createBarBitmap(WIDE_W, topBar, 'top');
            sprites.top = new Sprite(bT.bitmap);
            sprites.top.tint = BAR_TINT_BLACK;
            sprites.top.x = 0; sprites.top.y = 0;
            sprites.top.setFrame(0, 0, bT.totalW, bT.totalH);
            sprites.top.visible = true;
        }
        if (bottomBar > 0) {
            var bB = _createBarBitmap(WIDE_W, bottomBar, 'bottom');
            sprites.bottom = new Sprite(bB.bitmap);
            sprites.bottom.tint = BAR_TINT_BLACK;
            sprites.bottom.x = 0;
            sprites.bottom.y = WIDE_H - bottomBar - SOFT_EDGE_WIDTH;
            sprites.bottom.setFrame(0, 0, bB.totalW, bB.totalH);
            sprites.bottom.visible = true;
        }
        var insertAt = _findPillarInsertIndex(scene);
        var added = 0;
        ['left', 'right', 'top', 'bottom'].forEach(function(k) {
            if (sprites[k]) { scene.addChildAt(sprites[k], insertAt + added); added++; }
        });
    }
    var _SMB_create = Scene_MenuBase.prototype.create;
    Scene_MenuBase.prototype.create = function() {
        _SMB_create.call(this);
        _addPillarSpritesToScene(this);
    };
    var OMORI_MENU_SCENES_FOR_BARS = [
        'Scene_OmoMenuOptions', 'Scene_OmoMenuEquip', 'Scene_OmoMenuSkill',
        'Scene_OmoMenuItem', 'Scene_OmoMenuStatus'
    ];
    OMORI_MENU_SCENES_FOR_BARS.forEach(function(sceneName) {
        var SceneClass = window[sceneName];
        if (!SceneClass || !SceneClass.prototype || !SceneClass.prototype.create) return;
        var _origCreate = SceneClass.prototype.create;
        SceneClass.prototype.create = function() {
            _origCreate.call(this);
            _addPillarSpritesToScene(this);
        };
    });
    var _GP_updateScroll = Game_Player.prototype.updateScroll;
    Game_Player.prototype.updateScroll = function(lastScrolledX, lastScrolledY) {
        if (_isForceCenterActive()) {
            var centerX = this.scrolledX();
            var centerY = this.scrolledY();
            var halfScreenX = $gameMap.screenTileX() / 2;
            var halfScreenY = $gameMap.screenTileY() / 2;
            var dx = centerX - halfScreenX + 0.5;
            var dy = centerY - halfScreenY + 0.5;
            if (dx !== 0) { $gameMap._displayX += dx; $gameMap._parallaxX = $gameMap._displayX; }
            if (dy !== 0) { $gameMap._displayY += dy; $gameMap._parallaxY = $gameMap._displayY; }
            return;
        }
        _GP_updateScroll.call(this, lastScrolledX, lastScrolledY);
    };

    var FACE_BOX_CANDIDATES = [
        'Window_MessageFaceBox',
        'Window_OmoFacePicture',
        'Window_OmoFace',
        'Window_OmoMessageFace',
        'Window_FacePicture',
        'Window_OmoMessageFacePicture',
        'Window_OmoMessageFaceBox',
        'Window_OmoMessagePortrait',
        'Window_OmoPortrait',
        'Window_MessageFace',
        'Window_OmoFaceBox'
    ];
    function _faceBoxIsShowingContent(faceBox) {
        if (!faceBox) return false;
        if (faceBox.visible === false) return false;
        if (faceBox.opacity !== undefined && faceBox.opacity <= 0) return false;
        if (faceBox.openness !== undefined && faceBox.openness <= 0) return false;
        if ((faceBox.width || 0) <= 0 || (faceBox.height || 0) <= 0) return false;
        var p = faceBox.parent;
        while (p) {
            if (p.visible === false) return false;
            if (p.opacity !== undefined && p.opacity <= 0) return false;
            p = p.parent;
        }
        if (faceBox.worldAlpha !== undefined && faceBox.worldAlpha <= 0.01) return false;
        if (typeof $gameMessage !== 'undefined' && $gameMessage) {
            if (typeof $gameMessage.faceName === 'function') {
                var fn = $gameMessage.faceName();
                if (!fn || fn.length === 0) return false;
            }
        }
        return true;
    }
    function _findActiveFaceBox() {
        var scene = SceneManager._scene;
        if (!scene) return null;
        if (scene._windowLayer && scene._windowLayer.children) {
            for (var i = 0; i < scene._windowLayer.children.length; i++) {
                var c = scene._windowLayer.children[i];
                if (c && c.constructor &&
                    FACE_BOX_CANDIDATES.indexOf(c.constructor.name) >= 0) {
                    if (_faceBoxIsShowingContent(c)) return c;
                }
            }
        }
        if (scene.children) {
            for (var i = 0; i < scene.children.length; i++) {
                var c = scene.children[i];
                if (!c) continue;
                if (c.constructor && FACE_BOX_CANDIDATES.indexOf(c.constructor.name) >= 0) {
                    if (_faceBoxIsShowingContent(c)) return c;
                }
                if (c.children) {
                    for (var j = 0; j < c.children.length; j++) {
                        var child = c.children[j];
                        if (child && child.constructor &&
                            FACE_BOX_CANDIDATES.indexOf(child.constructor.name) >= 0) {
                            if (_faceBoxIsShowingContent(child)) return child;
                        }
                    }
                }
            }
        }
        var mw = scene._messageWindow;
        if (mw) {
            var keys = Object.keys(mw);
            for (var j = 0; j < keys.length; j++) {
                var v = mw[keys[j]];
                if (v && v.constructor &&
                    FACE_BOX_CANDIDATES.indexOf(v.constructor.name) >= 0) {
                    if (_faceBoxIsShowingContent(v)) return v;
                }
            }
        }
        return null;
    }

    function _findExpectedFaceBox() {

        if (typeof $gameMessage === 'undefined' || !$gameMessage) return null;
        if (typeof $gameMessage.faceName !== 'function') return null;
        var fn = $gameMessage.faceName();
        if (!fn || fn.length === 0) return null;

        var live = _findActiveFaceBox();
        if (live) return live;

        var scene = SceneManager._scene;
        if (!scene) return null;
        function plausible(sprite) {
            if (!sprite) return false;
            if (sprite.constructor &&
                FACE_BOX_CANDIDATES.indexOf(sprite.constructor.name) < 0) return false;
            if ((sprite.width || 0) <= 0 || (sprite.height || 0) <= 0) return false;

            return true;
        }

        var mw = scene._messageWindow;
        if (mw) {
            if (plausible(mw._faceBoxWindow)) return mw._faceBoxWindow;
            if (mw._faceBoxWindows && plausible(mw._faceBoxWindows[0])) {
                return mw._faceBoxWindows[0];
            }
        }

        function scan(arr) {
            if (!arr) return null;
            for (var i = 0; i < arr.length; i++) {
                if (plausible(arr[i])) return arr[i];
            }
            return null;
        }
        var hit = (scene._windowLayer && scan(scene._windowLayer.children)) || scan(scene.children);
        if (hit) return hit;
        if (scene.children) {
            for (var i = 0; i < scene.children.length; i++) {
                var c = scene.children[i];
                if (c && c.children) {
                    hit = scan(c.children);
                    if (hit) return hit;
                }
            }
        }
        return null;
    }
    function _getClusterCenterShift() {
        if (!CFG.faceAnchorToMessageBox) return 0;
        if (!CFG.faceAnchorCenterCluster) return 0;

        var face = _findExpectedFaceBox() || _findActiveFaceBox();
        if (!face || !face.width) return 0;

        var shift = Math.floor(face.width / 2);
        return CFG.faceAnchorMirror ? shift : -shift;
    }
    function _getMessageBoxWidth() {
        if (typeof Scene_Battle !== 'undefined' &&
            SceneManager._scene instanceof Scene_Battle) {
            return 360;
        }
        switch (_messageBoxMode) {
            case 'full':     return WIDE_W;
            case 'extended': return Math.min(Math.floor((BASE_W + WIDE_W) / 2), WIDE_W);
            case 'vanilla':
            default:         return BASE_W;
        }
    }

    function _getEffectiveClusterShift() {
        if (!CFG.faceAnchorToMessageBox || !CFG.faceAnchorCenterCluster) return 0;
        if (_dynamicCenterEnabled()) return Math.round(_clusterShiftCurrent);
        var live = _getClusterCenterShift();
        if (live !== 0) return live;
        var scene = SceneManager._scene;
        var mw = scene ? scene._messageWindow : null;
        if (mw && mw.openness > 0 && _lastClusterShift !== 0) return _lastClusterShift;
        return 0;
    }
    function _getMessageBoxX(width) {
        return Math.floor((WIDE_W - width) / 2) + _getEffectiveClusterShift();
    }

    if (typeof Window_Message !== 'undefined') {
        var _WM_updatePlacement = Window_Message.prototype.updatePlacement;
        Window_Message.prototype.updatePlacement = function() {
            _WM_updatePlacement.call(this);
            var targetW = _getMessageBoxWidth();
            if (this.width !== targetW) {
                this.width = targetW;
                if (typeof this.createContents === 'function' && this.contents) {
                    this.createContents();
                }
            }
            this.x = _getMessageBoxX(this.width);
        };
    }
    if (typeof Window_Message !== 'undefined' &&
        typeof Window_Message.prototype.windowWidth === 'function') {
        var _WM_windowWidth = Window_Message.prototype.windowWidth;
        Window_Message.prototype.windowWidth = function() {
            if (CFG.faceAnchorToMessageBox && CFG.faceAnchorCenterCluster) {
                return _getMessageBoxWidth();
            }
            return _WM_windowWidth.call(this);
        };
        console.log('[Widescreen] Window_Message.windowWidth hooked for cluster centering');
    }
    if (typeof Window_Message !== 'undefined' &&
        typeof Window_Message.prototype.adjustWindowSettings === 'function') {
        var _WM_adjustWindowSettings = Window_Message.prototype.adjustWindowSettings;
        Window_Message.prototype.adjustWindowSettings = function() {
            _WM_adjustWindowSettings.call(this);
            if (CFG.faceAnchorToMessageBox && CFG.faceAnchorCenterCluster) {
                var targetW = _getMessageBoxWidth();
                if (this.width !== targetW) {
                    this.width = targetW;
                    if (typeof this.createContents === 'function') this.createContents();
                }
                this.x = _getMessageBoxX(this.width);
            }
        };
        console.log('[Widescreen] YEP adjustWindowSettings hooked for cluster centering');
    }
    var _lastClusterShift = 0;

    var _msgPrevOpenness = 0;
    var _msgSettleFrames = 0;
    var MSG_OPEN_SETTLE_FRAMES = 1;
    function _isMsgOpenSettling() { return _msgSettleFrames > 0; }
    function _msgFaceExpected() {
        return !!(typeof $gameMessage !== 'undefined' && $gameMessage &&
                  typeof $gameMessage.faceName === 'function' &&
                  $gameMessage.faceName());
    }

    var _clusterShiftCurrent = 0;
    var _clusterNoFaceFrames = 0;
    var CLUSTER_NOFACE_HYSTERESIS = 12;
    var CLUSTER_GLIDE_RATE = 0.18;
    function _dynamicCenterEnabled() {
        return (CFG.faceAnchorDynamicCenter !== undefined) ? !!CFG.faceAnchorDynamicCenter : false;
    }

    function _isMsgBoxClosing() {
        var scene = SceneManager._scene;
        var mw = scene ? scene._messageWindow : null;
        if (!mw) return false;
        if (typeof mw.isClosing === 'function' && mw.isClosing()) return true;

        if (mw.openness > 0 && mw.openness < 255 &&
            !(typeof mw.isOpening === 'function' && mw.isOpening())) return true;
        return false;
    }
    if (typeof Window_Message !== 'undefined' &&
        typeof Window_Message.prototype.update === 'function') {
        var _WM_update_lock = Window_Message.prototype.update;
        Window_Message.prototype.update = function() {
            _WM_update_lock.apply(this, arguments);
            if (!this || this.width === undefined || this.width <= 0) return;

            if (_msgPrevOpenness === 0 && this.openness > 0 && _msgFaceExpected()) {
                _msgSettleFrames = MSG_OPEN_SETTLE_FRAMES;
            } else if (_msgSettleFrames > 0) {
                _msgSettleFrames--;
            }
            _msgPrevOpenness = this.openness;
            if (CFG.faceAnchorToMessageBox && CFG.faceAnchorCenterCluster) {
                if (this.openness === 0) {
                    _lastClusterShift = 0;
                    _clusterShiftCurrent = 0;
                    _clusterNoFaceFrames = 0;
                    return;
                }

                if (this.openness < 255 &&
                    !(typeof this.isOpening === 'function' && this.isOpening())) {
                    return;
                }
                var targetW = _getMessageBoxWidth();
                if (this.width !== targetW) {
                    this.width = targetW;
                    if (typeof this.createContents === 'function') this.createContents();
                }
                var liveShift = _getClusterCenterShift();
                var currentShift;
                if (_dynamicCenterEnabled()) {

                    var targetShift;
                    if (liveShift !== 0) {
                        _clusterNoFaceFrames = 0;
                        _lastClusterShift = liveShift;
                        targetShift = liveShift;
                    } else {
                        _clusterNoFaceFrames++;

                        targetShift = (_clusterNoFaceFrames >= CLUSTER_NOFACE_HYSTERESIS)
                            ? 0 : _lastClusterShift;
                    }
                    var delta = targetShift - _clusterShiftCurrent;
                    if (Math.abs(delta) <= 1) _clusterShiftCurrent = targetShift;
                    else _clusterShiftCurrent += delta * CLUSTER_GLIDE_RATE;
                    currentShift = Math.round(_clusterShiftCurrent);
                } else {

                    currentShift = liveShift;
                    if (currentShift !== 0) {
                        _lastClusterShift = currentShift;
                    } else if (this.openness > 0 && _lastClusterShift !== 0) {
                        currentShift = _lastClusterShift;
                    }
                    _clusterShiftCurrent = currentShift;
                }
                var targetX = Math.floor((WIDE_W - this.width) / 2) + currentShift;
                if (this.x !== targetX) this.x = targetX;
            } else {
                _lastClusterShift = 0;
                _clusterShiftCurrent = 0;
                _clusterNoFaceFrames = 0;
            }
        };
        console.log('[Widescreen] Window_Message.update hooked for cluster-center x lock');
    }

    function _faceIsActive() {

        return !!_findActiveFaceBox();
    }
    function _resolveChoiceTextAlign() {
        var align = CFG.choiceTextAlign;
        if (align === 'left' || align === 'center' || align === 'right') return align;

        return (_choiceBoxMode === 'follow') ? 'center' : 'left';
    }
    function _shouldChoiceGrowUpward(win) {
        var cfg = CFG.choiceGrowUpward;
        if (cfg === false) return false;
        if (cfg === true)  return true;

        if (!win) return false;
        var bottom = win.y + win.height;
        return bottom > WIDE_H;
    }
    if (typeof Window_ChoiceList !== 'undefined') {
        var _WCL_updatePlacement = Window_ChoiceList.prototype.updatePlacement;
        Window_ChoiceList.prototype.updatePlacement = function() {
            _WCL_updatePlacement.call(this);

            var actual = _getActualMsgBoxGeom();
            var msgX = actual ? actual.x : _getMessageBoxX(_getMessageBoxWidth());
            var msgW = actual ? actual.width : _getMessageBoxWidth();
            if (_choiceBoxMode === 'follow') {
                var targetW = _getMessageBoxWidth();
                if (this.width !== targetW) {
                    this.width = targetW;
                    if (typeof this.createContents === 'function' && this.contents) {
                        this.createContents();
                    }
                }
                this.x = msgX;
            } else if (_choiceBoxMode === 'opposite' &&
                       CFG.faceAnchorToMessageBox && _faceIsActive()) {

                if (CFG.faceAnchorMirror) {
                    this.x = (msgX + msgW) - this.width;
                } else {
                    this.x = msgX;
                }
            } else {

                var anchorRight = msgX + msgW;
                var faceBox = _findActiveFaceBox();
                if (!CFG.faceAnchorMirror && faceBox && faceBox.worldTransform) {
                    var faceLeft = faceBox.worldTransform.tx;
                    if (faceLeft < anchorRight) anchorRight = faceLeft - 4;
                }
                this.x = anchorRight - this.width;
            }

            if (_shouldChoiceGrowUpward(this)) {

                var msgY = (actual && this._messageWindow) ? this._messageWindow.y : 0;
                var newY = msgY - this.height - 4;

                var minTop = (CFG.choiceGrowUpwardMinTopGap !== undefined)
                    ? Number(CFG.choiceGrowUpwardMinTopGap) : 8;
                if (newY < minTop) newY = minTop;
                this.y = newY;
            }

            if (this.x < 0) this.x = 0;
            var rightOverflow = (this.x + this.width) - WIDE_W;
            if (rightOverflow > 0) this.x -= rightOverflow;
        };

        if (typeof Window_ChoiceList.prototype.drawItem === 'function') {
            var _WCL_drawItem = Window_ChoiceList.prototype.drawItem;
            Window_ChoiceList.prototype.drawItem = function(index) {
                var align = _resolveChoiceTextAlign();
                if (align === 'left') {

                    return _WCL_drawItem.call(this, index);
                }

                var ret = _WCL_drawItem.call(this, index);
                if (!this.contents) return ret;
                var rect = (typeof this.itemRectForText === 'function')
                    ? this.itemRectForText(index)
                    : (typeof this.itemRect === 'function' ? this.itemRect(index) : null);
                if (!rect) return ret;

                this.contents.clearRect(rect.x, rect.y, rect.width, rect.height);

                var text = (typeof this.commandName === 'function')
                    ? this.commandName(index)
                    : (this._list && this._list[index] ? this._list[index].name : '');
                if (!text) return ret;

                if (typeof this.changePaintOpacity === 'function' &&
                    typeof this.isCommandEnabled === 'function') {
                    this.changePaintOpacity(this.isCommandEnabled(index));
                }
                this.drawText(text, rect.x, rect.y, rect.width, align);
                if (typeof this.changePaintOpacity === 'function') {
                    this.changePaintOpacity(true);
                }
                return ret;
            };
        }
    }

    function _resolveCursorPosition() {
        var p = CFG.choiceCursorPosition;
        if (p === 'hugText' || p === 'mirror' || p === 'vanilla') return p;
        return 'vanilla';
    }
    function _shouldFlipCursor(cursorOnRight) {
        var f = CFG.choiceCursorFlip;
        if (f === true) return true;
        if (f === false) return false;

        return !!cursorOnRight;
    }
    function _measureChoiceItemTextWidth(win, index) {
        if (!win || !win.contents) return 0;
        var text = '';
        if (typeof win.commandName === 'function') text = win.commandName(index);
        else if (win._list && win._list[index]) text = win._list[index].name;
        if (!text) return 0;
        try {
            if (typeof win.textWidthEx === 'function') return win.textWidthEx(text);
        } catch (e) {  }
        try {
            if (typeof win.textWidth === 'function') return win.textWidth(text);
        } catch (e) {  }
        return 0;
    }

    function _applyChoiceCursorPlacement(win, sprite, index) {
        if (!sprite || !sprite.visible) return;
        if (!(win instanceof Window_ChoiceList)) return;
        var mode = _resolveCursorPosition();
        if (mode === 'vanilla' && CFG.choiceCursorFlip !== true) {

            if (sprite._ws_flipped) {
                sprite.scale.x = Math.abs(sprite.scale.x);
                sprite._ws_flipped = false;
            }
            return;
        }
        var rect = (typeof win.itemRect === 'function') ? win.itemRect(index) : null;
        if (!rect) return;
        var gap = Number(CFG.choiceCursorTextGap);
        if (!isFinite(gap)) gap = 6;
        var cursorOnRight = false;
        if (mode === 'hugText') {

            var textW = _measureChoiceItemTextWidth(win, index);
            if (textW > 0) {
                var align = _resolveChoiceTextAlign();
                var textLeft;
                if (align === 'center') {
                    textLeft = rect.x + Math.floor((rect.width - textW) / 2);
                } else if (align === 'right') {
                    textLeft = rect.x + rect.width - textW;
                } else {
                    textLeft = rect.x;
                }
                if (align === 'right') {

                    sprite.x = Math.min(textLeft + textW + gap, rect.x + rect.width);
                    cursorOnRight = true;
                } else {

                    sprite.x = Math.max(rect.x, textLeft - gap);
                    cursorOnRight = false;
                }
            }
        } else if (mode === 'mirror') {

            sprite.x = rect.x + rect.width - gap;
            cursorOnRight = true;
        }

        var wantFlip = _shouldFlipCursor(cursorOnRight);
        var absX = Math.abs(sprite.scale.x);
        if (wantFlip && !sprite._ws_flipped) {
            sprite.scale.x = -absX;
            sprite._ws_flipped = true;
        } else if (!wantFlip && sprite._ws_flipped) {
            sprite.scale.x = absX;
            sprite._ws_flipped = false;
        }
    }
    if (typeof Window_Selectable !== 'undefined' &&
        typeof Window_Selectable.prototype.updateCustomCursorRectSprite === 'function') {
        var _WS_updateCustomCursorRectSprite =
            Window_Selectable.prototype.updateCustomCursorRectSprite;
        Window_Selectable.prototype.updateCustomCursorRectSprite = function(sprite, index) {
            _WS_updateCustomCursorRectSprite.call(this, sprite, index);
            if (index === undefined && typeof this.index === 'function') index = this.index();
            _applyChoiceCursorPlacement(this, sprite, index);
        };
        console.log('[Widescreen] Window_Selectable.updateCustomCursorRectSprite hooked (v10.56 choice cursor)');
    }

    var NAME_PLATE_CANDIDATES = [
        'Window_NameBox',
        'Window_OmoNameBox',
        'Window_OmoMessageName',
        'Window_MessageName',
        'Window_NamePopup',
        'Window_SpeakerName'
    ];

    function _getFaceDesiredScreenPos(faceW) {
        if (!CFG.faceAnchorToMessageBox) return null;
        var scene = SceneManager._scene;
        var mw = scene ? scene._messageWindow : null;
        if (!mw || mw.width <= 0) return null;

        var opening = (typeof mw.isOpening === 'function' && mw.isOpening());
        if (mw.openness <= 0 && !opening) return null;
        var wl = scene._windowLayer;
        var wlx = wl ? wl.x : 0;
        var wly = wl ? wl.y : 0;
        var msgX = mw.x + wlx;
        var msgY = mw.y + wly;
        var msgW = mw.width;
        var mirror = !!CFG.faceAnchorMirror;
        var x;
        if (_faceBoxMode === 'follow') {
            x = mirror ? (msgX + msgW - faceW) : msgX;
        } else {
            x = mirror ? msgX : (msgX + msgW - faceW);
        }
        var offX = Number(CFG.faceAnchorOffsetX) || 0;
        x += mirror ? -offX : offX;
        var y = msgY + (Number(CFG.faceAnchorOffsetY) || 0);
        return { x: x, y: y };
    }
    function _getNameBoxFaceTopLayout(nameBox) {
        if (_nameBoxMode !== 'faceTop') return null;
        if (!CFG.faceAnchorToMessageBox) return null;

        var face = _findActiveFaceBox();
        if (face && !_faceBoxIsShowingContent(face)) face = null;
        if (!face) face = _findExpectedFaceBox();
        if (!face) return null;
        if (face.width <= 0 || face.height <= 0) return null;
        var faceW = face.width;

        var det = _getFaceDesiredScreenPos(faceW);
        var faceScreenX, faceScreenY;
        if (det) {
            faceScreenX = det.x;
            faceScreenY = det.y;
        } else if (face.worldTransform) {
            faceScreenX = face.worldTransform.tx;
            faceScreenY = face.worldTransform.ty;
        } else {
            return null;
        }

        var gap = (CFG.nameBoxFaceTopGap !== undefined) ? CFG.nameBoxFaceTopGap : 2;
        var targetScreenX = faceScreenX;
        var targetScreenY = faceScreenY - (nameBox.height || 0) - gap;

        var localX, localY;
        if (nameBox.parent && nameBox.parent.worldTransform) {
            var pt = nameBox.parent.worldTransform;
            localX = targetScreenX - pt.tx;
            localY = targetScreenY - pt.ty;
        } else {
            localX = targetScreenX;
            localY = targetScreenY;
        }
        return { x: localX, y: localY, width: faceW };
    }

    function _getActualMsgBoxGeom() {
        var scene = SceneManager._scene;
        var mw = scene ? scene._messageWindow : null;
        if (mw && mw.width > 0 && mw.openness > 0) {
            return { x: mw.x, width: mw.width };
        }
        return null;
    }
    function _getNameBoxTargetX(sprite) {

        var actual = _getActualMsgBoxGeom();
        if (actual) return actual.x;
        return _getMessageBoxX(_getMessageBoxWidth());
    }

    function _measureNameBoxInk(nameBox, lineH) {
        var fs = nameBox.contents.fontSize;

        var baseline = lineH - (lineH - fs * 0.7) / 2;
        var ascent = null, descent = null;
        try {
            var ctx = nameBox.contents._context;
            if (ctx && typeof nameBox.contents._makeFontNameText === 'function') {
                var prevFont = ctx.font;
                ctx.font = nameBox.contents._makeFontNameText();
                var m = ctx.measureText(nameBox._text || 'M');
                ctx.font = prevFont;
                if (m && m.actualBoundingBoxAscent !== undefined &&
                    m.actualBoundingBoxAscent > 0) {
                    ascent = m.actualBoundingBoxAscent;
                    descent = m.actualBoundingBoxDescent || 0;
                }
            }
        } catch (e) {  }
        if (ascent === null) {

            ascent = fs * 0.55;
            descent = fs * 0.08;
        }

        var ow = (nameBox.contents.outlineWidth !== undefined) ? nameBox.contents.outlineWidth : 4;
        var top = baseline - ascent - ow / 2;
        var bottom = baseline + descent + ow / 2;
        return { top: top, height: bottom - top };
    }

    function _redrawNameBoxTextCentered(nameBox) {
        if (!_nameBoxHasRealText(nameBox)) return;
        if (!nameBox.contents) return;
        var fontSize = nameBox.contents.fontSize || nameBox.standardFontSize();

        var lineH = fontSize + 8;
        var ink = _measureNameBoxInk(nameBox, lineH);
        var breathe = (CFG.nameBoxFaceTopTextPadding !== undefined) ?
                      Number(CFG.nameBoxFaceTopTextPadding) : 3;
        var trim = (CFG.nameBoxFaceTopHeightTrim !== undefined) ?
                   Number(CFG.nameBoxFaceTopHeightTrim) : 0;
        var contentsH = Math.ceil(ink.height) + breathe * 2 - trim;

        contentsH = Math.max(contentsH, Math.ceil(fontSize * 0.5));
        var targetWindowH = contentsH + nameBox.standardPadding() * 2;
        if (nameBox.height !== targetWindowH) {
            nameBox.height = targetWindowH;
            if (typeof nameBox.createContents === 'function') {
                nameBox.createContents();
            }
        }

        var savedFontFace = nameBox.contents.fontFace;
        var savedFontSize = nameBox.contents.fontSize;
        var savedTextColor = nameBox.contents.textColor;
        var savedFontBold = nameBox.contents.fontBold;
        var savedFontItalic = nameBox.contents.fontItalic;
        var savedOutlineColor = nameBox.contents.outlineColor;
        var savedOutlineWidth = nameBox.contents.outlineWidth;
        nameBox.contents.clear();
        nameBox.contents.fontFace = savedFontFace;
        nameBox.contents.fontSize = savedFontSize;
        nameBox.contents.textColor = savedTextColor;
        nameBox.contents.fontBold = savedFontBold;
        nameBox.contents.fontItalic = savedFontItalic;
        nameBox.contents.outlineColor = savedOutlineColor;
        nameBox.contents.outlineWidth = savedOutlineWidth;
        var textW = nameBox.textWidthEx ? nameBox.textWidthEx(nameBox._text) : 0;
        var centeredPadding = Math.max(0, Math.floor((nameBox.contents.width - textW) / 2));

        var ink2 = _measureNameBoxInk(nameBox, lineH);
        var desiredTop = (nameBox.contents.height - ink2.height) / 2;
        var nudge = (CFG.nameBoxFaceTopTextNudge !== undefined) ?
                    Number(CFG.nameBoxFaceTopTextNudge) : 0;
        var yOff = Math.round(desiredTop - ink2.top) + nudge;
        nameBox.drawTextEx(nameBox._text, centeredPadding, yOff, nameBox.contents.width);
    }

    function _nameBoxHasRealText(nameBox) {
        var t = nameBox._text;
        if (typeof t !== 'string') return false;
        if (t.length === 0) return false;
        if (t === 'undefined' || t === 'null') return false;
        return true;
    }

    function _enforceNameBoxGhostPolicy(nameBox) {
        if (_nameBoxHasRealText(nameBox)) {
            if (nameBox._ws_ghostHidden) {
                nameBox._ws_ghostHidden = false;
                nameBox.visible = true;
            }
            return false;
        }

        if (!nameBox._ws_ghostHidden && nameBox.contents &&
            typeof nameBox.contents.clear === 'function') {
            nameBox.contents.clear();
        }
        nameBox._ws_ghostHidden = true;
        nameBox.visible = false;
        return true;
    }
    function _captureNameBoxVanillaGeom(nameBox) {
        if (nameBox._ws_vanillaGeom) return;
        nameBox._ws_vanillaGeom = {
            width: nameBox.width,
            height: nameBox.height,
            y: nameBox.y
        };
    }
    function _restoreNameBoxVanillaGeom(nameBox) {

        if (!nameBox._ws_faceTopApplied) return false;
        if (nameBox._ws_restoringGeom) return false;
        nameBox._ws_faceTopApplied = false;
        var g = nameBox._ws_vanillaGeom;
        nameBox._ws_vanillaGeom = null;
        if (!g) return false;
        var changed = (nameBox.width !== g.width || nameBox.height !== g.height);
        nameBox._ws_restoringGeom = true;
        try {
            nameBox.width = g.width;
            nameBox.height = g.height;
            nameBox.y = g.y;
            if (nameBox._baseY !== undefined) nameBox._baseY = g.y;
            if (nameBox._homeY !== undefined) nameBox._homeY = g.y;
            if (nameBox._originalY !== undefined) nameBox._originalY = g.y;
            if (nameBox._targetY !== undefined) nameBox._targetY = g.y;
            if (changed && typeof nameBox.createContents === 'function' && nameBox.contents) {
                nameBox.createContents();
            }

            var hasText = (typeof nameBox._text === 'string' && nameBox._text.length > 0);
            if (changed) {
                if (hasText && typeof nameBox.refresh === 'function') {
                    nameBox.refresh();
                } else if (!hasText && nameBox.contents &&
                           typeof nameBox.contents.clear === 'function') {
                    nameBox.contents.clear();
                }
            }
        } finally {
            nameBox._ws_restoringGeom = false;
        }
        return true;
    }

    function _applyNameBoxLayout(nameBox) {
        var ftLayout = _getNameBoxFaceTopLayout(nameBox);
        if (ftLayout) {

            _captureNameBoxVanillaGeom(nameBox);
            nameBox._ws_faceTopApplied = true;

            if (nameBox.width !== ftLayout.width) {
                nameBox.width = ftLayout.width;
                if (typeof nameBox.createContents === 'function' && nameBox.contents) {
                    nameBox.createContents();
                }
                _redrawNameBoxTextCentered(nameBox);
            } else if (!nameBox._ws_heightAdjusted) {

                _redrawNameBoxTextCentered(nameBox);
                nameBox._ws_heightAdjusted = true;
            }

            var ftLayout2 = _getNameBoxFaceTopLayout(nameBox);
            if (ftLayout2) ftLayout = ftLayout2;
            nameBox.x = ftLayout.x;
            nameBox.y = ftLayout.y;
            if (nameBox._baseX !== undefined) nameBox._baseX = ftLayout.x;
            if (nameBox._homeX !== undefined) nameBox._homeX = ftLayout.x;
            if (nameBox._originalX !== undefined) nameBox._originalX = ftLayout.x;
            if (nameBox._targetX !== undefined) nameBox._targetX = ftLayout.x;
            if (nameBox._baseY !== undefined) nameBox._baseY = ftLayout.y;
            if (nameBox._homeY !== undefined) nameBox._homeY = ftLayout.y;
            if (nameBox._originalY !== undefined) nameBox._originalY = ftLayout.y;
            if (nameBox._targetY !== undefined) nameBox._targetY = ftLayout.y;
            return true;
        }

        nameBox._ws_heightAdjusted = false;

        _restoreNameBoxVanillaGeom(nameBox);

        if (_nameBoxMode === 'follow') {
            var targetW = _getMessageBoxWidth();
            if (nameBox.width !== targetW) {
                nameBox.width = targetW;
                if (typeof nameBox.createContents === 'function' && nameBox.contents) {
                    nameBox.createContents();
                }
            }
        }
        var targetX = _getNameBoxTargetX(nameBox);
        nameBox.x = targetX;
        if (nameBox._baseX !== undefined) nameBox._baseX = targetX;
        if (nameBox._homeX !== undefined) nameBox._homeX = targetX;
        if (nameBox._originalX !== undefined) nameBox._originalX = targetX;
        if (nameBox._targetX !== undefined) nameBox._targetX = targetX;
        return false;
    }

    var NAME_OPEN_SETTLE_FRAMES = 1;
    function _isNameBoxOpenSettling(nameBox) {
        return (nameBox._ws_nameSettleFrames || 0) > 0;
    }
    function _tickNameBoxSettle(nameBox) {
        var prev = nameBox._ws_prevOpenness || 0;
        var cur  = nameBox.openness || 0;
        if (prev === 0 && cur > 0 && _msgFaceExpected()) {
            nameBox._ws_nameSettleFrames = NAME_OPEN_SETTLE_FRAMES;
        } else if (nameBox._ws_nameSettleFrames > 0) {
            nameBox._ws_nameSettleFrames--;
        }
        nameBox._ws_prevOpenness = cur;
    }
    function _applyNameBoxHook(WindowClass, className) {
        if (!WindowClass || !WindowClass.prototype) return false;
        if (WindowClass.__wsNameHooked) return true;
        WindowClass.__wsNameHooked = true;

        ['refresh', 'drawName', 'redrawText'].forEach(function(fn) {
            if (typeof WindowClass.prototype[fn] !== 'function') return;
            var _orig = WindowClass.prototype[fn];
            WindowClass.prototype[fn] = function() {
                var ret = _orig.apply(this, arguments);

                if (_nameBoxMode === 'faceTop' && !_nameBoxHasRealText(this)) {
                    if (this.contents && typeof this.contents.clear === 'function') {
                        this.contents.clear();
                    }
                    this.visible = false;
                    this._ws_ghostHidden = true;
                    return ret;
                }

                if (this.width > 0 && _nameBoxHasRealText(this)) {
                    _applyNameBoxLayout(this);
                }
                return ret;
            };
        });
        if (typeof WindowClass.prototype.update === 'function') {
            var _origUpdate = WindowClass.prototype.update;
            WindowClass.prototype.update = function() {
                _origUpdate.apply(this, arguments);
                _tickNameBoxSettle(this);

                if (_nameBoxMode === 'faceTop' &&
                    _enforceNameBoxGhostPolicy(this)) return;
                if (!this.visible || this.width <= 0) return;

                var layoutOk = _applyNameBoxLayout(this);
                if (!layoutOk && _nameBoxMode === 'faceTop' &&
                    CFG.faceAnchorToMessageBox && _msgFaceExpected() &&
                    (_isMsgOpenSettling() || _isNameBoxOpenSettling(this))) {
                    this.visible = false;
                    this._ws_ghostHidden = true;
                }
            };
            console.log('[Widescreen] name plate hooked: ' + className + '.update + .refresh (v10.54 sync layout)');
        } else {

            console.log('[Widescreen] name plate hooked: ' + className + '.refresh-only (no update method)');
        }
        return true;
    }
    NAME_PLATE_CANDIDATES.forEach(function(className) {
        if (typeof window[className] !== 'undefined') {
            _applyNameBoxHook(window[className], className);
        }
    });

    function _screenToLocalViaParent(sprite, screenX, screenY) {
        var px = 0, py = 0;
        if (sprite.parent && sprite.parent.worldTransform) {
            px = sprite.parent.worldTransform.tx;
            py = sprite.parent.worldTransform.ty;
        }
        return { x: screenX - px, y: screenY - py };
    }
    function _getFaceBoxTargetX(sprite) {
        if (sprite.width <= 0) return sprite.x;

        var det = _getFaceDesiredScreenPos(sprite.width);
        var desiredScreenX;
        if (det) {
            desiredScreenX = det.x;
        } else {

            var msgX = _getMessageBoxX(_getMessageBoxWidth());
            var msgW = _getMessageBoxWidth();
            var mirror = !!CFG.faceAnchorMirror;
            if (_faceBoxMode === 'follow') {
                desiredScreenX = mirror ? (msgX + msgW - sprite.width) : msgX;
            } else {
                desiredScreenX = mirror ? msgX : (msgX + msgW - sprite.width);
            }
            if (CFG.faceAnchorToMessageBox) {
                var offX = Number(CFG.faceAnchorOffsetX) || 0;
                desiredScreenX += mirror ? -offX : offX;
            }
        }
        return _screenToLocalViaParent(sprite, desiredScreenX, 0).x;
    }
    function _getFaceBoxTargetY(sprite) {
        if (!CFG.faceAnchorToMessageBox) return null;
        if (sprite.height <= 0) return null;
        var scene = SceneManager._scene;
        if (!scene || !scene._messageWindow) return null;
        var msgWin = scene._messageWindow;
        if (msgWin.width <= 0 || msgWin.height <= 0 || msgWin.openness <= 0) return null;

        var wl = scene._windowLayer;
        var msgTopScreenY = msgWin.y + (wl ? wl.y : 0);
        var desiredScreenY = msgTopScreenY + (Number(CFG.faceAnchorOffsetY) || 0);
        return _screenToLocalViaParent(sprite, 0, desiredScreenY).y;
    }
    function _bringFaceWrapperToFront(faceBox) {
        if (!CFG.faceAnchorToMessageBox) return;
        var scene = SceneManager._scene;
        if (!scene) return;
        var node = faceBox;
        while (node && node.parent && node.parent !== scene) {
            node = node.parent;
        }
        if (!node || node.parent !== scene) return;
        var siblings = scene.children;
        var lastIdx = siblings.length - 1;
        var curIdx = siblings.indexOf(node);
        if (curIdx < 0 || curIdx === lastIdx) return;
        siblings.splice(curIdx, 1);
        siblings.push(node);
    }
    function _applyFaceBoxHook(WindowClass, className) {
        if (!WindowClass || !WindowClass.prototype) return false;
        if (WindowClass.__wsFaceHooked) return true;
        WindowClass.__wsFaceHooked = true;
        if (typeof WindowClass.prototype.update === 'function') {
            var _origUpdate = WindowClass.prototype.update;
            WindowClass.prototype.update = function() {
                _origUpdate.apply(this, arguments);

                if (CFG.faceAnchorToMessageBox && _isMsgOpenSettling()) {
                    this.visible = false;
                    this._ws_faceVeiled = true;
                    return;
                }
                if (this._ws_faceVeiled) {
                    this._ws_faceVeiled = false;
                    this.visible = true;
                }
                if (!this.visible || this.width <= 0) return;
                if (_faceBoxMode === 'follow') {
                    var targetW = _getMessageBoxWidth();
                    if (this.width !== targetW) {
                        this.width = targetW;
                        if (typeof this.createContents === 'function' && this.contents) {
                            this.createContents();
                        }
                    }
                }
                var targetX = _getFaceBoxTargetX(this);
                this.x = targetX;
                if (this._baseX !== undefined) this._baseX = targetX;
                if (this._homeX !== undefined) this._homeX = targetX;
                if (this._originalX !== undefined) this._originalX = targetX;
                if (this._targetX !== undefined) this._targetX = targetX;
                var targetY = _getFaceBoxTargetY(this);
                if (targetY !== null) {
                    this.y = targetY;
                    if (this._baseY !== undefined) this._baseY = targetY;
                    if (this._homeY !== undefined) this._homeY = targetY;
                    if (this._originalY !== undefined) this._originalY = targetY;
                    if (this._targetY !== undefined) this._targetY = targetY;
                    _bringFaceWrapperToFront(this);
                }
            };
            console.log('[Widescreen] face box hooked: ' + className + '.update (worldTransform positioning)');
        } else if (typeof WindowClass.prototype.refresh === 'function') {
            var _origRefresh = WindowClass.prototype.refresh;
            WindowClass.prototype.refresh = function() {
                var ret = _origRefresh.apply(this, arguments);
                if (this.width > 0) {
                    if (_faceBoxMode === 'follow') {
                        var targetW = _getMessageBoxWidth();
                        if (this.width !== targetW) {
                            this.width = targetW;
                            if (typeof this.createContents === 'function' && this.contents) {
                                this.createContents();
                            }
                        }
                    }
                    this.x = _getFaceBoxTargetX(this);
                    var targetY = _getFaceBoxTargetY(this);
                    if (targetY !== null) {
                        this.y = targetY;
                        _bringFaceWrapperToFront(this);
                    }
                }
                return ret;
            };
            console.log('[Widescreen] face box hooked: ' + className + '.refresh (fallback)');
        }
        return true;
    }
    FACE_BOX_CANDIDATES.forEach(function(className) {
        if (typeof window[className] !== 'undefined') {
            _applyFaceBoxHook(window[className], className);
        }
    });

    var _fogSprites = null;
    var _fogBitmapCache = { leftW: -1, rightW: -1, topH: -1, bottomH: -1 };
    function _createFogSprites(scene) {
        if (!scene || _fogSprites) return;
        _fogSprites = {
            left:   new Sprite(new Bitmap(1, 1)),
            right:  new Sprite(new Bitmap(1, 1)),
            top:    new Sprite(new Bitmap(1, 1)),
            bottom: new Sprite(new Bitmap(1, 1))
        };
        Object.keys(_fogSprites).forEach(function(k) { _fogSprites[k].tint = BAR_TINT_BLACK; });
        Object.keys(_fogSprites).forEach(function(key) { _fogSprites[key].visible = false; });

        var parent, insertIndex;
        if (_pillarSprites && _pillarSprites.bottom && _pillarSprites.bottom.parent) {
            parent = _pillarSprites.bottom.parent;
            insertIndex = parent.children.indexOf(_pillarSprites.bottom) + 1;
        } else {
            var spot = _findBarParent(scene);
            parent = spot.parent;
            insertIndex = spot.index;
        }
        parent.addChildAt(_fogSprites.left,   insertIndex);
        parent.addChildAt(_fogSprites.right,  insertIndex + 1);
        parent.addChildAt(_fogSprites.top,    insertIndex + 2);
        parent.addChildAt(_fogSprites.bottom, insertIndex + 3);
    }
    function _destroyFogSprites() {
        if (!_fogSprites) return;
        Object.keys(_fogSprites).forEach(function(key) {
            var sprite = _fogSprites[key];
            if (sprite && sprite.parent) sprite.parent.removeChild(sprite);
            if (sprite && sprite.bitmap) sprite.bitmap = null;
        });
        _fogSprites = null;
    }
    function _updateFogSprites() {
        if (!_fogSprites) return;
        if (!_isFogOfWarActive()) {
            Object.keys(_fogSprites).forEach(function(k) { _fogSprites[k].visible = false; });
            return;
        }
        var tileWidth = $gameMap.tileWidth();
        var tileHeight = $gameMap.tileHeight();
        var mapPixelW = $gameMap.width() * tileWidth;
        var mapPixelH = $gameMap.height() * tileHeight;
        var mapScreenX = -Math.floor($gameMap.displayX() * tileWidth);
        var mapScreenY = -Math.floor($gameMap.displayY() * tileHeight);
        var mapScreenRight = mapScreenX + mapPixelW;
        var mapScreenBottom = mapScreenY + mapPixelH;
        var pillarInfo = _getPillarboxInfo() || { leftBar: 0, rightBar: 0, topBar: 0, bottomBar: 0 };
        var visibleLeft = pillarInfo.leftBar;
        var visibleRight = WIDE_W - pillarInfo.rightBar;
        var visibleTop = pillarInfo.topBar;
        var visibleBottom = WIDE_H - pillarInfo.bottomBar;
        var visH = visibleBottom - visibleTop;
        var visW = visibleRight - visibleLeft;
        var leftBarRight = Math.min(mapScreenX, visibleRight);
        var leftBarWidth = Math.max(0, leftBarRight - visibleLeft);
        if (leftBarWidth > 0) {
            if (_fogBitmapCache.leftW !== leftBarWidth) {
                var fL = _createBarBitmap(leftBarWidth, visH, 'left');
                _fogSprites.left.bitmap = fL.bitmap;
                _fogSprites.left._wsTotalW = fL.totalW;
                _fogSprites.left._wsTotalH = fL.totalH;
                _fogBitmapCache.leftW = leftBarWidth;
            }
            _fogSprites.left.x = visibleLeft;
            _fogSprites.left.y = visibleTop;
            _fogSprites.left.setFrame(0, 0, _fogSprites.left._wsTotalW || (leftBarWidth + SOFT_EDGE_WIDTH), visH);
            _fogSprites.left.visible = true;
        } else { _fogSprites.left.visible = false; }
        var rightBarLeft = Math.max(mapScreenRight, visibleLeft);
        var rightBarWidth = Math.max(0, visibleRight - rightBarLeft);
        if (rightBarWidth > 0) {
            if (_fogBitmapCache.rightW !== rightBarWidth) {
                var fR = _createBarBitmap(rightBarWidth, visH, 'right');
                _fogSprites.right.bitmap = fR.bitmap;
                _fogSprites.right._wsTotalW = fR.totalW;
                _fogSprites.right._wsTotalH = fR.totalH;
                _fogBitmapCache.rightW = rightBarWidth;
            }
            _fogSprites.right.x = rightBarLeft - SOFT_EDGE_WIDTH;
            _fogSprites.right.y = visibleTop;
            _fogSprites.right.setFrame(0, 0, _fogSprites.right._wsTotalW || (rightBarWidth + SOFT_EDGE_WIDTH), visH);
            _fogSprites.right.visible = true;
        } else { _fogSprites.right.visible = false; }
        var topBarBottom = Math.min(mapScreenY, visibleBottom);
        var topBarHeight = Math.max(0, topBarBottom - visibleTop);
        if (topBarHeight > 0) {
            if (_fogBitmapCache.topH !== topBarHeight) {
                var fT = _createBarBitmap(visW, topBarHeight, 'top');
                _fogSprites.top.bitmap = fT.bitmap;
                _fogSprites.top._wsTotalW = fT.totalW;
                _fogSprites.top._wsTotalH = fT.totalH;
                _fogBitmapCache.topH = topBarHeight;
            }
            _fogSprites.top.x = visibleLeft;
            _fogSprites.top.y = visibleTop;
            _fogSprites.top.setFrame(0, 0, visW, _fogSprites.top._wsTotalH || (topBarHeight + SOFT_EDGE_WIDTH));
            _fogSprites.top.visible = true;
        } else { _fogSprites.top.visible = false; }
        var bottomBarTop = Math.max(mapScreenBottom, visibleTop);
        var bottomBarHeight = Math.max(0, visibleBottom - bottomBarTop);
        if (bottomBarHeight > 0) {
            if (_fogBitmapCache.bottomH !== bottomBarHeight) {
                var fB = _createBarBitmap(visW, bottomBarHeight, 'bottom');
                _fogSprites.bottom.bitmap = fB.bitmap;
                _fogSprites.bottom._wsTotalW = fB.totalW;
                _fogSprites.bottom._wsTotalH = fB.totalH;
                _fogBitmapCache.bottomH = bottomBarHeight;
            }
            _fogSprites.bottom.x = visibleLeft;
            _fogSprites.bottom.y = bottomBarTop - SOFT_EDGE_WIDTH;
            _fogSprites.bottom.setFrame(0, 0, visW, _fogSprites.bottom._wsTotalH || (bottomBarHeight + SOFT_EDGE_WIDTH));
            _fogSprites.bottom.visible = true;
        } else { _fogSprites.bottom.visible = false; }
    }
    var _SM_update = Scene_Map.prototype.update;
    Scene_Map.prototype.update = function() {
        _SM_update.call(this);
        _updateBarCurtainAnim();
        _updateBarFadeMirror();
        _updateFogSprites();
        _updateGhostSprites();
        _updateDebugOverlay(this);
    };

    var _decorationSprites = [];
    function _getDecorationsForCurrentMap() {
        if (!$gameMap || $gameMap.mapId() <= 0) return [];
        var mapId = $gameMap.mapId();
        var ov = mapOverrides[mapId];
        if (!ov || !ov.decorations || !Array.isArray(ov.decorations)) return [];
        return ov.decorations;
    }
    function _createDecorationSprites(scene) {
        _destroyDecorationSprites();
        var decorations = _getDecorationsForCurrentMap();
        if (decorations.length === 0) return;
        var spriteset = scene._spriteset;
        var container = spriteset ? (spriteset._tilemap || spriteset._baseSprite) : null;
        if (!container) return;
        decorations.forEach(function(deco, index) {
            if (!deco.image) {
                console.warn('[Widescreen] decoration #' + index + ' missing "image" property, skipping.');
                return;
            }
            var tileX = deco.x || 0;
            var tileY = deco.y || 0;
            var direction = deco.direction || 2;
            var pattern = (deco.pattern !== undefined) ? deco.pattern : 1;
            var characterIndex = deco.characterIndex || 0;
            var spriteOffsetX = (deco.spriteOffset && deco.spriteOffset[0]) || 0;
            var spriteOffsetY = (deco.spriteOffset && deco.spriteOffset[1]) || 0;
            var priority = (deco.priority !== undefined) ? deco.priority : 1;
            var dummy = {
                _realX: tileX, _realY: tileY, _x: tileX, _y: tileY,
                _direction: direction, _pattern: pattern,
                _characterName: deco.image, _characterIndex: characterIndex,
                _tileId: 0, _isBigCharacter: false, _isObjectCharacter: false,
                _priorityType: priority, _bushDepth: 0, _blendMode: 0,
                _opacity: 255, _transparent: false, _moveSpeed: 4,
                _stepAnime: false, _walkAnime: false, _directionFix: true, _through: true,
                scrolledX: function() { return $gameMap.adjustX(this._realX); },
                scrolledY: function() { return $gameMap.adjustY(this._realY); },
                screenX: function() {
                    var tw = $gameMap.tileWidth();
                    return Math.round(this.scrolledX() * tw + tw / 2) + spriteOffsetX;
                },
                screenY: function() {
                    var th = $gameMap.tileHeight();
                    return Math.round(this.scrolledY() * th + th) + spriteOffsetY;
                },
                screenZ: function() {
                    if (this._priorityType === 2) return 5;
                    if (this._priorityType === 0) return 1;
                    return 3;
                },
                isTransparent: function() { return this._transparent; },
                characterName: function() { return this._characterName; },
                characterIndex: function() { return this._characterIndex; },
                direction: function() { return this._direction; },
                pattern: function() { return this._pattern; },
                tileId: function() { return this._tileId; },
                isTile: function() { return false; },
                isBigCharacter: function() { return this._isBigCharacter; },
                isObjectCharacter: function() { return this._isObjectCharacter; },
                bushDepth: function() { return this._bushDepth; },
                blendMode: function() { return this._blendMode; },
                opacity: function() { return this._opacity; },
                maxPattern: function() { return 3; },
                hasStepAnime: function() { return this._stepAnime; },
                hasWalkAnime: function() { return this._walkAnime; },
                isDirectionFixed: function() { return this._directionFix; },
                priorityType: function() { return this._priorityType; },
                shiftY: function() { return 0; }
            };
            if (deco.image.charAt(0) === '$') dummy._isBigCharacter = true;
            var sprite = new Sprite_Character(dummy);
            sprite._ws_isDecoration = true;
            sprite._ws_decoIndex = index;
            sprite._ws_decoData = deco;
            _decorationSprites.push(sprite);
            container.addChild(sprite);
        });
        if (_decorationSprites.length > 0) {
            console.log('[Widescreen] created ' + _decorationSprites.length + ' decoration sprite(s) for map ' + $gameMap.mapId());
        }
    }
    function _destroyDecorationSprites() {
        _decorationSprites.forEach(function(sprite) {
            if (sprite && sprite.parent) sprite.parent.removeChild(sprite);
        });
        _decorationSprites = [];
    }
    function _updateDecorationSprites() {

    }

    var SPLASH_FADE_DURATION = 30;
    var _pendingSplashFade = null;
    var SAVELOAD_FADE_DURATION = 12;
    function _isSaveLoadSceneClass(sceneClass) {
        if (!sceneClass) return false;
        var name = sceneClass.name ||
                   (sceneClass.prototype && sceneClass.prototype.constructor && sceneClass.prototype.constructor.name);
        if (!name) return false;
        return name === 'Scene_OmoriFile' || name === 'Scene_Save' ||
               name === 'Scene_Load' || name === 'Scene_File' ||
               (name.indexOf('Save') >= 0 && name.indexOf('Load') >= 0);
    }
    function _isSaveLoadSceneInstance(scene) {
        if (!scene) return false;
        return _isSaveLoadSceneClass(scene.constructor);
    }
    function _createBlackOverlay(scene, opacity) {
        var bmp = new Bitmap(WIDE_W, WIDE_H);
        bmp.fillAll('rgba(0, 0, 0, 1)');
        var sprite = new Sprite(bmp);
        sprite.x = 0; sprite.y = 0;
        sprite.opacity = opacity;
        scene.addChild(sprite);
        return sprite;
    }
    function _tweenFade(sprite, fromOp, toOp, duration, scene) {
        var frame = 0;
        var interval = setInterval(function() {
            frame++;
            var t = Math.min(frame / duration, 1);
            var eased = _easeOutCubic(t);
            sprite.opacity = Math.round(fromOp + (toOp - fromOp) * eased);
            if (sprite.parent && scene.children.indexOf(sprite) !== scene.children.length - 1) {
                scene.addChild(sprite);
            }
            if (frame >= duration) {
                clearInterval(interval);
                if (sprite.parent) sprite.parent.removeChild(sprite);
            }
        }, 1000 / 60);
    }
    var _pendingSaveLoadFadeIn = false;
    var _pendingSaveLoadFadeOut = false;
    var _origGoto_combined = SceneManager.goto;
    SceneManager.goto = function(sceneClass) {
        var currentScene = SceneManager._scene;
        if (currentScene && currentScene._backSprite && Array.isArray(currentScene._sprites)) {
            var bgSprite = currentScene._backSprite;
            if (bgSprite.bitmap) _pendingSplashFade = { bitmap: bgSprite.bitmap };
        }
        if (_isSaveLoadSceneInstance(currentScene)) _pendingSaveLoadFadeOut = true;
        if (_isSaveLoadSceneClass(sceneClass)) _pendingSaveLoadFadeIn = true;
        return _origGoto_combined.apply(this, arguments);
    };
    var _origPush_sl = SceneManager.push;
    SceneManager.push = function(sceneClass) {
        if (_isSaveLoadSceneClass(sceneClass)) _pendingSaveLoadFadeIn = true;
        return _origPush_sl.apply(this, arguments);
    };
    var _origPop_sl = SceneManager.pop;
    SceneManager.pop = function() {
        var currentScene = SceneManager._scene;
        if (_isSaveLoadSceneInstance(currentScene)) _pendingSaveLoadFadeOut = true;
        return _origPop_sl.apply(this, arguments);
    };
    var _origSceneBaseStart_combined = Scene_Base.prototype.start;
    Scene_Base.prototype.start = function() {
        _origSceneBaseStart_combined.call(this);
        var scene = this;
        if (_pendingSplashFade) {
            var fadeData = _pendingSplashFade;
            _pendingSplashFade = null;
            var fadeSprite = new TilingSprite(fadeData.bitmap);
            fadeSprite.move(0, 0, WIDE_W, WIDE_H);
            fadeSprite.opacity = 255;
            this.addChild(fadeSprite);
            var frame = 0;
            var fadeInterval = setInterval(function() {
                frame++;
                var t = Math.min(frame / SPLASH_FADE_DURATION, 1);
                fadeSprite.opacity = Math.round(255 * (1 - _easeOutCubic(t)));
                if (fadeSprite.parent && scene.children.indexOf(fadeSprite) !== scene.children.length - 1) {
                    scene.addChild(fadeSprite);
                }
                if (frame >= SPLASH_FADE_DURATION) {
                    clearInterval(fadeInterval);
                    if (fadeSprite.parent) fadeSprite.parent.removeChild(fadeSprite);
                }
            }, 1000 / 60);
        }
        if (_pendingSaveLoadFadeIn) {
            _pendingSaveLoadFadeIn = false;
            var fadeIn = _createBlackOverlay(this, 255);
            _tweenFade(fadeIn, 255, 0, SAVELOAD_FADE_DURATION, this);
        }
        if (_pendingSaveLoadFadeOut) {
            _pendingSaveLoadFadeOut = false;
            var fadeOut = _createBlackOverlay(this, 255);
            _tweenFade(fadeOut, 255, 0, SAVELOAD_FADE_DURATION, this);
        }
    };

    // Debug overlay
    var _debugOverlayVisible = false;
    var _debugOverlaySprite = null;
    var _debugInfoSprite = null;
    var _debugFrameCounter = 0;
    var DEBUG_REDRAW_INTERVAL = 6;
    var DCFG = CFG.debug;
    function _createDebugOverlay(scene) {
        if (!DCFG.enableGuides) return;
        _destroyDebugOverlay();
        var bmp = new Bitmap(WIDE_W, WIDE_H);
        _debugOverlaySprite = new Sprite(bmp);
        _debugOverlaySprite.x = 0; _debugOverlaySprite.y = 0;
        _debugOverlaySprite.visible = _debugOverlayVisible;
        _debugOverlaySprite.z = 999;
        scene.addChild(_debugOverlaySprite);
        var infoBmp = new Bitmap(400, 300);
        _debugInfoSprite = new Sprite(infoBmp);
        _debugInfoSprite.x = DCFG.infoPanelX || 8;
        _debugInfoSprite.y = DCFG.infoPanelY || 8;
        _debugInfoSprite.visible = _debugOverlayVisible && (DCFG.showInfoPanel !== false);
        _debugInfoSprite.z = 1000;
        scene.addChild(_debugInfoSprite);
    }
    function _destroyDebugOverlay() {
        if (_debugOverlaySprite) {
            if (_debugOverlaySprite.parent) _debugOverlaySprite.parent.removeChild(_debugOverlaySprite);
            if (_debugOverlaySprite.bitmap) _debugOverlaySprite.bitmap = null;
            _debugOverlaySprite = null;
        }
        if (_debugInfoSprite) {
            if (_debugInfoSprite.parent) _debugInfoSprite.parent.removeChild(_debugInfoSprite);
            if (_debugInfoSprite.bitmap) _debugInfoSprite.bitmap = null;
            _debugInfoSprite = null;
        }
    }
    function _drawRect(ctx, x, y, w, h, color, lineW) {
        ctx.strokeStyle = color;
        ctx.lineWidth = lineW || (DCFG.lineWidth || 2);
        ctx.strokeRect(x, y, w, h);
    }
    function _drawLine(ctx, x1, y1, x2, y2, color, lineW) {
        ctx.strokeStyle = color;
        ctx.lineWidth = lineW || (DCFG.lineWidth || 2);
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
    }
    function _drawFilledRect(ctx, x, y, w, h, color) {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, w, h);
    }
    function _drawDiamond(ctx, cx, cy, size, color) {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(cx, cy - size);
        ctx.lineTo(cx + size, cy);
        ctx.lineTo(cx, cy + size);
        ctx.lineTo(cx - size, cy);
        ctx.closePath();
        ctx.fill();
    }
    function _drawLabel(ctx, text, x, y, fgColor, bgColor, fontSize) {
        ctx.font = (fontSize || 11) + 'px monospace';
        var metrics = ctx.measureText(text);
        var tw = metrics.width;
        var th = (fontSize || 11) + 4;
        if (bgColor) {
            ctx.fillStyle = bgColor;
            ctx.fillRect(x - 2, y - th + 2, tw + 6, th + 2);
        }
        ctx.fillStyle = fgColor || 'white';
        ctx.fillText(text, x, y);
    }
    function _updateDebugOverlay(scene) {
        if (!DCFG.enableGuides) return;
        if (!_debugOverlaySprite && _debugOverlayVisible) _createDebugOverlay(scene);
        if (!_debugOverlaySprite) return;
        _debugOverlaySprite.visible = _debugOverlayVisible;
        if (_debugInfoSprite) _debugInfoSprite.visible = _debugOverlayVisible && (DCFG.showInfoPanel !== false);
        if (!_debugOverlayVisible) return;
        if (_debugOverlaySprite.parent) {
            var parent = _debugOverlaySprite.parent;
            var idx = parent.children.indexOf(_debugOverlaySprite);
            if (idx < parent.children.length - 2) {
                parent.removeChild(_debugOverlaySprite);
                parent.addChild(_debugOverlaySprite);
                if (_debugInfoSprite && _debugInfoSprite.parent === parent) {
                    parent.removeChild(_debugInfoSprite);
                    parent.addChild(_debugInfoSprite);
                }
            }
        }
        _debugFrameCounter++;
        if (_debugFrameCounter % DEBUG_REDRAW_INTERVAL !== 0) return;
        var bmp = _debugOverlaySprite.bitmap;
        if (!bmp) return;
        var ctx = bmp._context;
        if (!ctx) return;
        bmp.clear();
        var lineW = DCFG.lineWidth || 2;
        if (DCFG.showCanvasBounds !== false) {
            var cbColor = DCFG.canvasBoundsColor || 'rgba(255, 255, 0, 0.5)';
            _drawRect(ctx, 1, 1, WIDE_W - 2, WIDE_H - 2, cbColor, lineW);
            _drawLabel(ctx, WIDE_W + 'x' + WIDE_H, 4, WIDE_H - 8, cbColor, 'rgba(0,0,0,0.5)');
        }
        if (DCFG.showSafeArea !== false) {
            var saColor = DCFG.safeAreaColor || 'rgba(0, 255, 0, 0.35)';
            _drawRect(ctx, X_OFF, Y_OFF, BASE_W, BASE_H, saColor, lineW);
            _drawLabel(ctx, '4:3 safe (' + BASE_W + 'x' + BASE_H + ')', X_OFF + 4, Y_OFF + 14, saColor, 'rgba(0,0,0,0.4)');
        }
        if (DCFG.showCrosshair !== false) {
            var chColor = DCFG.crosshairColor || 'rgba(255, 0, 0, 0.6)';
            var chSize = DCFG.crosshairSize || 30;
            var cx = Math.floor(WIDE_W / 2);
            var cy = Math.floor(WIDE_H / 2);
            _drawLine(ctx, cx - chSize, cy, cx + chSize, cy, chColor, 1);
            _drawLine(ctx, cx, cy - chSize, cx, cy + chSize, chColor, 1);
        }
        if (DCFG.showBarRegions !== false) {
            var brColor = DCFG.barRegionColor || 'rgba(255, 0, 255, 0.2)';
            var info = _getPillarboxInfo();
            if (info) {
                if (info.leftBar > 0)   _drawFilledRect(ctx, 0, 0, info.leftBar, WIDE_H, brColor);
                if (info.rightBar > 0)  _drawFilledRect(ctx, WIDE_W - info.rightBar, 0, info.rightBar, WIDE_H, brColor);
                if (info.topBar > 0)    _drawFilledRect(ctx, 0, 0, WIDE_W, info.topBar, brColor);
                if (info.bottomBar > 0) _drawFilledRect(ctx, 0, WIDE_H - info.bottomBar, WIDE_W, info.bottomBar, brColor);
            }
        }
        if (DCFG.showMapBounds !== false && $gameMap && $dataMap) {
            var mbColor = DCFG.mapBoundsColor || 'rgba(0, 128, 255, 0.4)';
            var tw = $gameMap.tileWidth();
            var th = $gameMap.tileHeight();
            var msx = -Math.floor($gameMap.displayX() * tw);
            var msy = -Math.floor($gameMap.displayY() * th);
            var mpw = $gameMap.width() * tw;
            var mph = $gameMap.height() * th;
            _drawRect(ctx, msx, msy, mpw, mph, mbColor, lineW);
            _drawLabel(ctx, 'map ' + $gameMap.mapId() + ' (' + $gameMap.width() + 'x' + $gameMap.height() + ' tiles)',
                       msx + 4, msy + 14, mbColor, 'rgba(0,0,0,0.4)');
        }
        if (DCFG.showWindowAnchors !== false && scene._windowLayer) {
            var waColor = DCFG.windowAnchorColor || 'rgba(255, 128, 0, 0.7)';
            var waSize = DCFG.windowAnchorSize || 6;
            var kids = scene._windowLayer.children;
            for (var i = 0; i < kids.length; i++) {
                var w = kids[i];
                if (w && w.visible && w instanceof Window && w.width > 0 && w.height > 0) {
                    var wx = w.x;
                    var wy = w.y;
                    _drawDiamond(ctx, wx, wy, waSize, waColor);
                    _drawRect(ctx, wx, wy, w.width, w.height, waColor, 1);
                }
            }
        }
        if (DCFG.showPictureInfo !== false && scene._spriteset) {
            var piColor = DCFG.pictureInfoColor || 'rgba(255, 255, 255, 0.9)';
            var piBgColor = DCFG.pictureInfoBgColor || 'rgba(0, 0, 0, 0.6)';
            var container = scene._spriteset._pictureContainer || scene._spriteset._baseSprite;
            if (container && container.children) {
                for (var i = 0; i < container.children.length; i++) {
                    var sp = container.children[i];
                    if (!sp || !sp._pictureId || !sp.visible) continue;
                    if (!sp.bitmap || !sp.bitmap.isReady || !sp.bitmap.isReady()) continue;
                    var pic = $gameScreen ? $gameScreen.picture(sp._pictureId) : null;
                    if (!pic) continue;
                    var picName = pic._name || '(unnamed)';
                    var fw = sp._frame ? sp._frame.width : sp.bitmap.width;
                    var fh = sp._frame ? sp._frame.height : sp.bitmap.height;
                    var label = 'P' + sp._pictureId + ': ' + picName +
                                ' [' + fw + 'x' + fh + '] @(' +
                                Math.round(sp.x) + ',' + Math.round(sp.y) +
                                ') s=' + sp.scale.x.toFixed(2);
                    _drawLabel(ctx, label, Math.round(sp.x) + 2, Math.round(sp.y) - 4, piColor, piBgColor, 10);
                    _drawRect(ctx, Math.round(sp.x), Math.round(sp.y),
                              Math.round(fw * sp.scale.x), Math.round(fh * sp.scale.y),
                              'rgba(255,255,0,0.3)', 1);
                }
            }
        }
        if (DCFG.showDecorationMarkers !== false && _decorationSprites.length > 0 && $gameMap) {
            var dmColor = DCFG.decorationMarkerColor || 'rgba(0, 255, 255, 0.5)';
            var tw2 = $gameMap.tileWidth();
            var th2 = $gameMap.tileHeight();
            _decorationSprites.forEach(function(ds, idx) {
                if (!ds || !ds._character) return;
                var sx = ds._character.screenX();
                var sy = ds._character.screenY();
                _drawDiamond(ctx, sx, sy - th2 / 2, 8, dmColor);
                var ddata = ds._ws_decoData;
                var dlabel = 'D' + idx + ': ' + (ddata ? ddata.image : '?') +
                             ' @tile(' + ds._character._realX + ',' + ds._character._realY + ')';
                _drawLabel(ctx, dlabel, sx + 10, sy - th2 / 2 + 4, dmColor, 'rgba(0,0,0,0.4)', 10);
            });
        }
        if (_ghostSprites.length > 0) {
            var gsColor = 'rgba(0, 200, 255, 0.6)';
            _ghostSprites.forEach(function(gs, idx) {
                if (!gs.visible) return;
                _drawRect(ctx, gs.x, gs.y, gs._ws_ghost_w, gs._ws_ghost_h, gsColor, 1);
                _drawLabel(ctx, 'G' + idx, gs.x + 2, gs.y + 10, gsColor, 'rgba(0,0,0,0.4)', 9);
            });
        }
        bmp._setDirty();
        if (_debugInfoSprite && DCFG.showInfoPanel !== false) _updateDebugInfoPanel();
    }
    function _updateDebugInfoPanel() {
        if (!_debugInfoSprite || !_debugInfoSprite.bitmap) return;
        var bmp = _debugInfoSprite.bitmap;
        var ctx = bmp._context;
        if (!ctx) return;
        bmp.clear();
        var fontSize = DCFG.infoPanelFontSize || 13;
        var fg = DCFG.infoPanelColor || 'rgba(255, 255, 255, 0.85)';
        var bg = DCFG.infoPanelBgColor || 'rgba(0, 0, 0, 0.55)';
        var lines = [];
        lines.push('=== ws debug v10.88 ===');
        lines.push('canvas: ' + WIDE_W + 'x' + WIDE_H + ' (' + CFG.mode + ')');
        lines.push('base:   ' + BASE_W + 'x' + BASE_H + '  offset: ' + X_OFF + ',' + Y_OFF);
        lines.push('softEdge: ' + SOFT_EDGE_WIDTH + 'px');
        lines.push('msgBox: ' + _messageBoxMode + ' (' + _getMessageBoxWidth() + 'px)');
        lines.push('choice: ' + _choiceBoxMode +
                   ' align=' + _resolveChoiceTextAlign() +
                   ' growUp=' + CFG.choiceGrowUpward);
        lines.push('choiceCursor: ' + _resolveCursorPosition() +
                   ' gap=' + CFG.choiceCursorTextGap +
                   ' flip=' + CFG.choiceCursorFlip);
        lines.push('nameBox: ' + _nameBoxMode +
                   (_nameBoxMode === 'faceTop' ? ' (gap=' + CFG.nameBoxFaceTopGap + ')' : ''));
        lines.push('faceBox: ' + _faceBoxMode);
        lines.push('faceAnchor: ' + CFG.faceAnchorToMessageBox + ' (offX=' + CFG.faceAnchorOffsetX +
                   ' offY=' + CFG.faceAnchorOffsetY + ' mirror=' + CFG.faceAnchorMirror +
                        ' center=' + CFG.faceAnchorCenterCluster + ')');
        if ($gameMap && $gameMap.mapId() > 0) {
            var tw = $gameMap.tileWidth();
            var th = $gameMap.tileHeight();
            lines.push('');
            lines.push('map ' + $gameMap.mapId() + ': ' + $gameMap.width() + 'x' + $gameMap.height() + ' tiles');
            lines.push('pixels: ' + ($gameMap.width() * tw) + 'x' + ($gameMap.height() * th));
            lines.push('loop: H=' + $gameMap.isLoopHorizontal() + ' V=' + $gameMap.isLoopVertical());
            lines.push('display: ' + $gameMap.displayX().toFixed(2) + ', ' + $gameMap.displayY().toFixed(2));
            var info = _getPillarboxInfo();
            if (info) {
                lines.push('pillar: ' + (info.pillarbox ? 'ON' : 'off') + ' L=' + info.leftBar + ' R=' + info.rightBar);
                lines.push('letter: ' + (info.letterbox ? 'ON' : 'off') + ' T=' + info.topBar + ' B=' + info.bottomBar);
                if (info.forceSmallWActive) lines.push('forceSmallW: ACTIVE');
                if (info.forceSmallHActive) lines.push('forceSmallH: ACTIVE');
            }
            lines.push('center: ' + (_isForceCenterActive() ? 'ACTIVE' : 'off'));
            lines.push('fog:    ' + (_isFogOfWarActive() ? 'ACTIVE' : 'off'));
            lines.push('backdrop: ' + _getBackdropColorForMap());
            if ($gamePlayer) lines.push('player: ' + $gamePlayer._realX.toFixed(1) + ', ' + $gamePlayer._realY.toFixed(1));
            var face = _findActiveFaceBox();
            lines.push('faceActive: ' + (face ? 'YES (' + face.constructor.name + ')' : 'no'));
            if (typeof $gameMessage !== 'undefined' && $gameMessage.faceName) {
                lines.push('faceName: "' + $gameMessage.faceName() + '"');
            }
            var decos = _getDecorationsForCurrentMap();
            if (decos.length > 0) lines.push('decorations: ' + decos.length);
            if (_ghostSprites.length > 0) {
                var visGhosts = _ghostSprites.filter(function(g) { return g.visible; }).length;
                lines.push('ghosts: ' + visGhosts + '/' + _ghostSprites.length + ' visible');
            }
            var ov = mapOverrides[$gameMap.mapId()];
            if (ov) {
                var ovParts = [];
                ['pillarbox', 'letterbox', 'forceSmallWidth', 'forceSmallHeight', 'forceCenter', 'fogOfWar'].forEach(function(k) {
                    if (ov[k] !== 'auto' && ov[k] !== undefined) ovParts.push(k + '=' + ov[k]);
                });
                if (ovParts.length > 0) lines.push('overrides: ' + ovParts.join(', '));
            }
            var scene = SceneManager._scene;
            if (scene && scene._spriteset && scene._spriteset._tilemap) {
                var tm = scene._spriteset._tilemap;
                lines.push('tilemap: ' + tm._width + 'x' + tm._height +
                           ' (layer ' + tm._layerWidth + 'x' + tm._layerHeight + ')');
            }
        } else {
            lines.push('');
            lines.push('no map loaded');
        }
        if (typeof $gameScreen !== 'undefined' && $gameScreen) {
            var picCount = 0;
            for (var pi = 1; pi <= 100; pi++) {
                if ($gameScreen.picture(pi)) picCount++;
            }
            if (picCount > 0) lines.push('pictures: ' + picCount + ' active');
        }
        if (Graphics._fpsMeter && Graphics._fpsMeter.fps !== undefined) {
            lines.push('fps: ' + Math.round(Graphics._fpsMeter.fps));
        }
        ctx.font = fontSize + 'px monospace';
        var maxW = 0;
        lines.forEach(function(line) {
            var m = ctx.measureText(line);
            if (m.width > maxW) maxW = m.width;
        });
        var panelW = maxW + 16;
        var panelH = lines.length * (fontSize + 3) + 12;
        if (bmp.width < panelW || bmp.height < panelH) {
            bmp.resize(Math.max(panelW, bmp.width), Math.max(panelH, bmp.height));
            ctx = bmp._context;
            ctx.font = fontSize + 'px monospace';
        }
        ctx.fillStyle = bg;
        var radius = 4;
        ctx.beginPath();
        ctx.moveTo(radius, 0);
        ctx.lineTo(panelW - radius, 0);
        ctx.quadraticCurveTo(panelW, 0, panelW, radius);
        ctx.lineTo(panelW, panelH - radius);
        ctx.quadraticCurveTo(panelW, panelH, panelW - radius, panelH);
        ctx.lineTo(radius, panelH);
        ctx.quadraticCurveTo(0, panelH, 0, panelH - radius);
        ctx.lineTo(0, radius);
        ctx.quadraticCurveTo(0, 0, radius, 0);
        ctx.closePath();
        ctx.fill();
        ctx.fillStyle = fg;
        ctx.font = fontSize + 'px monospace';
        for (var li = 0; li < lines.length; li++) {
            var lineText = lines[li];
            var ly = 6 + (li + 1) * (fontSize + 3) - 3;
            if (lineText.indexOf('===') >= 0) ctx.fillStyle = 'rgba(100, 180, 255, 1)';
            else if (lineText.indexOf('ACTIVE') >= 0) ctx.fillStyle = 'rgba(100, 255, 100, 1)';
            else ctx.fillStyle = fg;
            ctx.fillText(lineText, 8, ly);
        }
        bmp._setDirty();
    }
    var _SM_createDisplayObjects_debug = Scene_Map.prototype.createDisplayObjects;
    Scene_Map.prototype.createDisplayObjects = function() {
        _SM_createDisplayObjects_debug.call(this);
        if (_debugOverlayVisible) _createDebugOverlay(this);
    };

    function _setOverride(mapId, key, value) {
        mapId = _resolveMapId(mapId);
        if (mapId === null) return false;
        var ov = _getOrCreateOverride(mapId);
        ov[key] = value;
        _cleanupOverride(mapId);
        _saveOverridesToStorage();
        _updatePillarSprites();
        _updateFogSprites();
        return true;
    }
    function _describeState(value) {
        if (value === true)  return 'FORCED ON';
        if (value === false) return 'FORCED OFF';
        return 'auto';
    }
    window.ws = {

        addPillar:    function(mapId) { if (_setOverride(mapId, 'pillarbox', true))   console.log('[ws] map ' + _resolveMapId(mapId) + ' pillarbox: FORCED ON'); },
        removePillar: function(mapId) { if (_setOverride(mapId, 'pillarbox', false))  console.log('[ws] map ' + _resolveMapId(mapId) + ' pillarbox: FORCED OFF'); },
        autoPillar:   function(mapId) { if (_setOverride(mapId, 'pillarbox', 'auto')) console.log('[ws] map ' + _resolveMapId(mapId) + ' pillarbox: auto'); },

        addLetter:    function(mapId) { if (_setOverride(mapId, 'letterbox', true))   console.log('[ws] map ' + _resolveMapId(mapId) + ' letterbox: FORCED ON'); },
        removeLetter: function(mapId) { if (_setOverride(mapId, 'letterbox', false))  console.log('[ws] map ' + _resolveMapId(mapId) + ' letterbox: FORCED OFF'); },
        autoLetter:   function(mapId) { if (_setOverride(mapId, 'letterbox', 'auto')) console.log('[ws] map ' + _resolveMapId(mapId) + ' letterbox: auto'); },

        addBox: function(mapId) {
            var id = _resolveMapId(mapId);
            if (id === null) return;
            _setOverride(id, 'pillarbox', true);
            _setOverride(id, 'letterbox', true);
            console.log('[ws] map ' + id + ' pillar + letter: FORCED ON');
        },
        removeBox: function(mapId) {
            var id = _resolveMapId(mapId);
            if (id === null) return;
            _setOverride(id, 'pillarbox', false);
            _setOverride(id, 'letterbox', false);
            console.log('[ws] map ' + id + ' pillar + letter: FORCED OFF');
        },
        autoBox: function(mapId) {
            var id = _resolveMapId(mapId);
            if (id === null) return;
            _setOverride(id, 'pillarbox', 'auto');
            _setOverride(id, 'letterbox', 'auto');
            console.log('[ws] map ' + id + ' pillar + letter: auto');
        },

        addSmallWidth:    function(mapId) { if (_setOverride(mapId, 'forceSmallWidth', true))   console.log('[ws] map ' + _resolveMapId(mapId) + ' forceSmallWidth: FORCED ON'); },
        removeSmallWidth: function(mapId) { if (_setOverride(mapId, 'forceSmallWidth', false))  console.log('[ws] map ' + _resolveMapId(mapId) + ' forceSmallWidth: FORCED OFF'); },
        autoSmallWidth:   function(mapId) { if (_setOverride(mapId, 'forceSmallWidth', 'auto')) console.log('[ws] map ' + _resolveMapId(mapId) + ' forceSmallWidth: auto'); },
        addSmallHeight:    function(mapId) { if (_setOverride(mapId, 'forceSmallHeight', true))   console.log('[ws] map ' + _resolveMapId(mapId) + ' forceSmallHeight: FORCED ON'); },
        removeSmallHeight: function(mapId) { if (_setOverride(mapId, 'forceSmallHeight', false))  console.log('[ws] map ' + _resolveMapId(mapId) + ' forceSmallHeight: FORCED OFF'); },
        autoSmallHeight:   function(mapId) { if (_setOverride(mapId, 'forceSmallHeight', 'auto')) console.log('[ws] map ' + _resolveMapId(mapId) + ' forceSmallHeight: auto'); },

        addSmall: function(mapId) {
            var id = _resolveMapId(mapId);
            if (id === null) return;
            _setOverride(id, 'forceSmallWidth', true);
            _setOverride(id, 'forceSmallHeight', true);
            console.log('[ws] map ' + id + ' forceSmall: FORCED ON');
        },
        removeSmall: function(mapId) {
            var id = _resolveMapId(mapId);
            if (id === null) return;
            _setOverride(id, 'forceSmallWidth', false);
            _setOverride(id, 'forceSmallHeight', false);
            console.log('[ws] map ' + id + ' forceSmall: FORCED OFF');
        },
        autoSmall: function(mapId) {
            var id = _resolveMapId(mapId);
            if (id === null) return;
            _setOverride(id, 'forceSmallWidth', 'auto');
            _setOverride(id, 'forceSmallHeight', 'auto');
            console.log('[ws] map ' + id + ' forceSmall: auto');
        },

        addCenter:    function(mapId) { if (_setOverride(mapId, 'forceCenter', true))   console.log('[ws] map ' + _resolveMapId(mapId) + ' forceCenter: FORCED ON'); },
        removeCenter: function(mapId) { if (_setOverride(mapId, 'forceCenter', false))  console.log('[ws] map ' + _resolveMapId(mapId) + ' forceCenter: FORCED OFF'); },
        autoCenter:   function(mapId) { if (_setOverride(mapId, 'forceCenter', 'auto')) console.log('[ws] map ' + _resolveMapId(mapId) + ' forceCenter: auto'); },

        addFog:    function(mapId) { if (_setOverride(mapId, 'fogOfWar', true))   console.log('[ws] map ' + _resolveMapId(mapId) + ' fogOfWar: FORCED ON'); },
        removeFog: function(mapId) { if (_setOverride(mapId, 'fogOfWar', false))  console.log('[ws] map ' + _resolveMapId(mapId) + ' fogOfWar: FORCED OFF'); },
        autoFog:   function(mapId) { if (_setOverride(mapId, 'fogOfWar', 'auto')) console.log('[ws] map ' + _resolveMapId(mapId) + ' fogOfWar: auto'); },

        setBackdrop: function(color, mapId) {
            mapId = _resolveMapId(mapId);
            if (mapId === null) return;
            var ov = _getOrCreateOverride(mapId);
            if (color === null || color === undefined) {
                delete ov.backdrop;
            } else {
                ov.backdrop = color;
            }
            _cleanupOverride(mapId);
            _saveOverridesToStorage();
            _refreshBackdropSprite();
            console.log('[ws] map ' + mapId + ' backdrop: ' + (color || 'cleared (default white)'));
        },

        setMessageBox: function(mode) {
            var valid = ['vanilla', 'extended', 'full'];
            if (valid.indexOf(mode) < 0) { console.log('[ws] setMessageBox: must be one of ' + valid.join(', ')); return; }
            _messageBoxMode = mode;
            console.log('[ws] msgBox mode: ' + mode + ' (' + _getMessageBoxWidth() + 'px)');
        },
        setChoiceBox: function(mode) {
            var valid = ['vanilla', 'follow', 'opposite'];
            if (valid.indexOf(mode) < 0) { console.log('[ws] setChoiceBox: must be one of ' + valid.join(', ')); return; }
            _choiceBoxMode = mode;
            var note = '';
            if (mode === 'opposite') {
                note = ' (anchors opposite the face; needs faceAnchorToMessageBox=true' +
                       (CFG.faceAnchorToMessageBox ? '' : ' — currently OFF') + ')';
            }
            console.log('[ws] choice mode: ' + mode + note);
        },
        setChoiceTextAlign: function(align) {
            var valid = ['auto', 'left', 'center', 'right'];
            if (valid.indexOf(align) < 0) { console.log('[ws] setChoiceTextAlign: must be one of ' + valid.join(', ')); return; }
            CFG.choiceTextAlign = align;
            console.log('[ws] choice text align: ' + align +
                        (align === 'auto' ? ' (resolved: ' + _resolveChoiceTextAlign() + ')' : ''));
        },
        setChoiceGrowUp: function(mode, minTopGap) {

            if (mode !== true && mode !== false && mode !== 'auto') {
                console.log('[ws] setChoiceGrowUp: must be true, false, or "auto"');
                return;
            }
            CFG.choiceGrowUpward = mode;
            if (minTopGap !== undefined) {
                CFG.choiceGrowUpwardMinTopGap = Number(minTopGap) || 0;
            }
            console.log('[ws] choice growUpward: ' + CFG.choiceGrowUpward +
                        ' (minTopGap=' + CFG.choiceGrowUpwardMinTopGap + 'px)');
        },
        setChoiceCursor: function(position, gap, flip) {

            if (position !== undefined) {
                var validPos = ['vanilla', 'hugText', 'mirror'];
                if (validPos.indexOf(position) < 0) {
                    console.log('[ws] setChoiceCursor: position must be one of ' + validPos.join(', '));
                    return;
                }
                CFG.choiceCursorPosition = position;
            }
            if (gap !== undefined) {
                CFG.choiceCursorTextGap = Number(gap) || 0;
            }
            if (flip !== undefined) {
                if (flip !== true && flip !== false && flip !== 'auto') {
                    console.log('[ws] setChoiceCursor: flip must be true, false, or "auto"');
                    return;
                }
                CFG.choiceCursorFlip = flip;
            }
            console.log('[ws] choice cursor: position=' + CFG.choiceCursorPosition +
                        ', gap=' + CFG.choiceCursorTextGap + 'px' +
                        ', flip=' + CFG.choiceCursorFlip);
        },
        setEventDropAnim: function(enabled, height, duration, bounceEnabled) {

            if (enabled !== undefined) {
                if (enabled !== true && enabled !== false) {
                    console.log('[ws] setEventDropAnim: enabled must be true or false');
                    return;
                }
                CFG.eventDropAnimEnabled = enabled;
            }
            if (height !== undefined) {
                CFG.eventDropAnimHeight = Math.max(0, Number(height) || 0);
            }
            if (duration !== undefined) {
                CFG.eventDropAnimDuration = Math.max(1, Math.floor(Number(duration) || 1));
            }
            if (bounceEnabled !== undefined) {
                CFG.eventDropAnimBounceEnabled = !!bounceEnabled;
            }
            console.log('[ws] event drop anim: enabled=' + CFG.eventDropAnimEnabled +
                        ', height=' + CFG.eventDropAnimHeight + ' tiles' +
                        ', duration=' + CFG.eventDropAnimDuration + 'f' +
                        ', bounce=' + CFG.eventDropAnimBounceEnabled);
        },
        setEventDropAnimAdvanced: function(opts) {

            opts = opts || {};
            if ('bounceHeight'      in opts) CFG.eventDropAnimBounceHeight = Number(opts.bounceHeight) || 0;
            if ('bounceDuration'    in opts) CFG.eventDropAnimBounceDuration = Math.max(1, Math.floor(Number(opts.bounceDuration) || 1));
            if ('bounceCount'       in opts) CFG.eventDropAnimBounceCount = Math.max(0, Math.floor(Number(opts.bounceCount) || 0));
            if ('bounceDecay'       in opts) CFG.eventDropAnimBounceDecay = Math.max(0, Math.min(1, Number(opts.bounceDecay) || 0));
            if ('spinEnabled'       in opts) CFG.eventDropAnimSpinEnabled = !!opts.spinEnabled;
            if ('spinTurns'         in opts) CFG.eventDropAnimSpinTurns = Number(opts.spinTurns) || 0;
            if ('spinMode'          in opts) {
                var sm = String(opts.spinMode);
                if (sm === 'clatter' || sm === 'spin' || sm === 'none') CFG.eventDropAnimSpinMode = sm;
                else console.log('[ws] spinMode must be "clatter", "spin", or "none" — ignored: ' + opts.spinMode);
            }
            if ('clatterAngleDeg'   in opts) CFG.eventDropAnimClatterAngleDeg = Math.max(0, Number(opts.clatterAngleDeg) || 0);
            if ('clatterDecay'      in opts) CFG.eventDropAnimClatterDecay = Math.max(0, Math.min(1, Number(opts.clatterDecay) || 0));
            if ('settleEnabled'     in opts) CFG.eventDropAnimSettleEnabled = !!opts.settleEnabled;
            if ('settleFrames'      in opts) CFG.eventDropAnimSettleFrames = Math.max(0, Math.floor(Number(opts.settleFrames) || 0));
            if ('shadowEnabled'     in opts) CFG.eventDropAnimShadowEnabled = !!opts.shadowEnabled;
            if ('fadeInEnabled'     in opts) CFG.eventDropAnimFadeInEnabled = !!opts.fadeInEnabled;
            if ('fadeInDelayPct'    in opts) CFG.eventDropAnimFadeInDelayPct = Math.max(0, Math.min(0.99, Number(opts.fadeInDelayPct) || 0));
            if ('fadeInFinishPct'   in opts) CFG.eventDropAnimFadeInFinishPct = Math.max(0.01, Math.min(1, Number(opts.fadeInFinishPct) || 0.6));
            if ('landShakeEnabled'  in opts) CFG.eventDropAnimLandShakeEnabled = !!opts.landShakeEnabled;
            if ('landShakePower'    in opts) CFG.eventDropAnimLandShakePower = Math.max(1, Math.min(9, Number(opts.landShakePower) || 2));
            if ('landShakeDuration' in opts) CFG.eventDropAnimLandShakeDuration = Math.max(1, Math.floor(Number(opts.landShakeDuration) || 1));
            console.log('[ws] event drop anim advanced: bounceH=' + CFG.eventDropAnimBounceHeight + 'px' +
                        ', bounceD=' + CFG.eventDropAnimBounceDuration + 'f' +
                        ', bounceCount=' + CFG.eventDropAnimBounceCount +
                        ', bounceDecay=' + CFG.eventDropAnimBounceDecay +
                        ', spin=' + CFG.eventDropAnimSpinEnabled +
                        ' (mode=' + CFG.eventDropAnimSpinMode +
                        ', turns=' + CFG.eventDropAnimSpinTurns +
                        ', clatterDeg=' + CFG.eventDropAnimClatterAngleDeg +
                        ', clatterDecay=' + CFG.eventDropAnimClatterDecay + ')' +
                        ', settle=' + CFG.eventDropAnimSettleEnabled +
                        ' (frames=' + CFG.eventDropAnimSettleFrames + ')' +
                        ', shadow=' + CFG.eventDropAnimShadowEnabled +
                        ', fadeIn=' + CFG.eventDropAnimFadeInEnabled +
                        ' (delay=' + CFG.eventDropAnimFadeInDelayPct +
                        ', finish=' + CFG.eventDropAnimFadeInFinishPct + ')' +
                        ', landShake=' + CFG.eventDropAnimLandShakeEnabled +
                        ' (power=' + CFG.eventDropAnimLandShakePower +
                        ', dur=' + CFG.eventDropAnimLandShakeDuration + 'f)');
        },
        setEventDropAnimAuto: function(enabled, mapIds, minDistance) {

            if (enabled !== undefined) {
                if (enabled !== true && enabled !== false) {
                    console.log('[ws] setEventDropAnimAuto: enabled must be true or false');
                    return;
                }
                CFG.eventDropAnimAutoSnap = enabled;
            }
            if (mapIds !== undefined) {
                if (mapIds !== null && !Array.isArray(mapIds)) {
                    console.log('[ws] setEventDropAnimAuto: mapIds must be null or an array of map ids');
                    return;
                }
                CFG.eventDropAnimMapIds = mapIds;
            }
            if (minDistance !== undefined) {
                CFG.eventDropAnimAutoSnapMinDistance = Math.max(0, Number(minDistance) || 0);
            }
            console.log('[ws] event drop anim auto: enabled=' + CFG.eventDropAnimAutoSnap +
                        ', mapIds=' + JSON.stringify(CFG.eventDropAnimMapIds) +
                        ', minDistance=' + CFG.eventDropAnimAutoSnapMinDistance + ' tiles');
        },
        setEventDropAnimSyncSe: function(enabled, names, lookbackFrames, suppressEarly, offsetFrames) {

            if (enabled !== undefined) {
                if (enabled !== true && enabled !== false) {
                    console.log('[ws] setEventDropAnimSyncSe: enabled must be true or false');
                    return;
                }
                CFG.eventDropAnimSyncLandSeEnabled = enabled;
            }
            if (names !== undefined) {
                if (!Array.isArray(names)) {
                    console.log('[ws] setEventDropAnimSyncSe: names must be an array of strings');
                    return;
                }
                CFG.eventDropAnimSyncLandSeNames = names.slice();
            }
            if (lookbackFrames !== undefined) {
                CFG.eventDropAnimSyncLandSeLookbackFrames = Math.max(0, Math.floor(Number(lookbackFrames) || 0));
            }
            if (suppressEarly !== undefined) {
                CFG.eventDropAnimSyncLandSeSuppressEarly = !!suppressEarly;
            }
            if (offsetFrames !== undefined) {
                CFG.eventDropAnimSyncLandSeOffsetFrames = Math.floor(Number(offsetFrames) || 0);
            }
            console.log('[ws] event drop anim SE sync: enabled=' + CFG.eventDropAnimSyncLandSeEnabled +
                        ', names=' + JSON.stringify(CFG.eventDropAnimSyncLandSeNames) +
                        ', lookback=' + CFG.eventDropAnimSyncLandSeLookbackFrames + 'f' +
                        ', suppressEarly=' + CFG.eventDropAnimSyncLandSeSuppressEarly +
                        ', offset=' + CFG.eventDropAnimSyncLandSeOffsetFrames + 'f');
        },

        setDropAnimAutoPin: function(enabled) {
            if (enabled !== true && enabled !== false) {
                console.log('[ws] setDropAnimAutoPin: pass true or false');
                console.log('  current: ' + CFG.eventDropAnimAutoPinAfterLanding);
                return;
            }
            CFG.eventDropAnimAutoPinAfterLanding = enabled;

            if (!enabled && $gameMap && $gameMap.events) {
                $gameMap.events().forEach(function(ev) {
                    if (ev && ev._wsAutoPin) ev._wsAutoPin = null;
                });
            }
            console.log('[ws] drop anim auto-pin after landing: ' + enabled);
        },

        addDropPin: function(mapId, x, y) {
            if (mapId === undefined || x === undefined || y === undefined) {
                console.log('[ws] addDropPin(mapId, x, y) — all three required');
                return;
            }
            mapId = Math.floor(Number(mapId));
            x = Math.floor(Number(x));
            y = Math.floor(Number(y));
            if (!CFG.eventDropPins) CFG.eventDropPins = {};
            if (!CFG.eventDropPins[mapId]) CFG.eventDropPins[mapId] = [];
            var arr = CFG.eventDropPins[mapId];

            for (var i = 0; i < arr.length; i++) {
                var p = arr[i];
                var px = Array.isArray(p) ? p[0] : p.x;
                var py = Array.isArray(p) ? p[1] : p.y;
                if (px === x && py === y) {
                    console.log('[ws] drop pin already exists: map=' + mapId + ' (' + x + ',' + y + ')');
                    return;
                }
            }
            arr.push({ x: x, y: y });
            console.log('[ws] drop pin added: map=' + mapId + ' (' + x + ',' + y + '). total on map: ' + arr.length);
        },
        removeDropPin: function(mapId, x, y) {
            if (mapId === undefined || x === undefined || y === undefined) {
                console.log('[ws] removeDropPin(mapId, x, y) — all three required');
                return;
            }
            mapId = Math.floor(Number(mapId));
            x = Math.floor(Number(x));
            y = Math.floor(Number(y));
            if (!CFG.eventDropPins || !CFG.eventDropPins[mapId]) {
                console.log('[ws] no pins on map ' + mapId);
                return;
            }
            var arr = CFG.eventDropPins[mapId];
            for (var i = 0; i < arr.length; i++) {
                var p = arr[i];
                var px = Array.isArray(p) ? p[0] : p.x;
                var py = Array.isArray(p) ? p[1] : p.y;
                if (px === x && py === y) {
                    arr.splice(i, 1);

                    if ($gameMap && $gameMap.mapId() === mapId && $gameMap.events) {
                        $gameMap.events().forEach(function(ev) {
                            if (ev && ev._x === x && ev._y === y && ev._wsExplicitPinSnapshot) {
                                ev._wsExplicitPinSnapshot = null;
                            }
                        });
                    }
                    if (arr.length === 0) delete CFG.eventDropPins[mapId];
                    console.log('[ws] drop pin removed: map=' + mapId + ' (' + x + ',' + y + ')');
                    return;
                }
            }
            console.log('[ws] no pin at map=' + mapId + ' (' + x + ',' + y + ')');
        },
        clearDropPins: function(mapId) {
            if (!CFG.eventDropPins) CFG.eventDropPins = {};
            if (mapId === undefined) {
                CFG.eventDropPins = {};

                if ($gameMap && $gameMap.events) {
                    $gameMap.events().forEach(function(ev) {
                        if (ev && ev._wsExplicitPinSnapshot) ev._wsExplicitPinSnapshot = null;
                    });
                }
                console.log('[ws] all drop pins cleared');
                return;
            }
            mapId = Math.floor(Number(mapId));
            delete CFG.eventDropPins[mapId];
            if ($gameMap && $gameMap.mapId() === mapId && $gameMap.events) {
                $gameMap.events().forEach(function(ev) {
                    if (ev && ev._wsExplicitPinSnapshot) ev._wsExplicitPinSnapshot = null;
                });
            }
            console.log('[ws] drop pins cleared for map ' + mapId);
        },
        listDropPins: function() {
            var pins = CFG.eventDropPins || {};
            var maps = Object.keys(pins);
            if (maps.length === 0) {
                console.log('[ws] no drop pins configured');
                return;
            }
            console.log('[ws] === drop pins ===');
            maps.forEach(function(mid) {
                var arr = pins[mid] || [];
                console.log('  map ' + mid + ': ' + arr.length + ' pin(s)');
                arr.forEach(function(p, i) {
                    var px = Array.isArray(p) ? p[0] : p.x;
                    var py = Array.isArray(p) ? p[1] : p.y;
                    console.log('    [' + i + '] (' + px + ',' + py + ')');
                });
            });
            console.log('  auto-pin after landing: ' + CFG.eventDropAnimAutoPinAfterLanding);
        },

        diagDropEvents: function() {
            if (!$gameMap || !$gameMap.events) {
                console.log('[ws] no map loaded');
                return;
            }
            var mid = $gameMap.mapId();
            console.log('[ws] === events on map ' + mid + ' ===');
            var events = $gameMap.events();
            if (events.length === 0) {
                console.log('  (no events)');
                return;
            }

            if ($gamePlayer) {
                console.log('  player:   tile=(' + $gamePlayer._x + ',' + $gamePlayer._y + ')' +
                            '  real=(' + $gamePlayer._realX.toFixed(3) + ',' + $gamePlayer._realY.toFixed(3) + ')');
            }
            events.forEach(function(ev) {
                if (!ev) return;
                var name = '';
                try { if (ev.event() && ev.event().name) name = ' "' + ev.event().name + '"'; } catch (_) {}
                var dx = (ev._realX !== ev._x) ? ((ev._realX - ev._x).toFixed(3)) : '0';
                var dy = (ev._realY !== ev._y) ? ((ev._realY - ev._y).toFixed(3)) : '0';
                var flags = [];
                if (ev._ws_dropAnim)            flags.push('anim:' + ev._ws_dropAnim.phase);
                if (ev._wsAutoPin)              flags.push('autoPin');
                if (ev._wsExplicitPinSnapshot)  flags.push('explicitPin');
                if (ev._wsSpinAngle)            flags.push('spin:' + ev._wsSpinAngle.toFixed(2));
                console.log('  event ' + ev._eventId + name +
                            ':  tile=(' + ev._x + ',' + ev._y + ')' +
                            '  real=(' + ev._realX.toFixed(3) + ',' + ev._realY.toFixed(3) + ')' +
                            '  delta=(' + dx + ',' + dy + ')' +
                            (flags.length ? '  [' + flags.join(',') + ']' : ''));
            });

            var pins = (CFG.eventDropPins || {})[mid];
            if (pins && pins.length) {
                console.log('  pinned tiles on this map:');
                pins.forEach(function(p) {
                    var px = Array.isArray(p) ? p[0] : p.x;
                    var py = Array.isArray(p) ? p[1] : p.y;
                    console.log('    (' + px + ',' + py + ')');
                });
            }
            console.log('  auto-pin after landing: ' + CFG.eventDropAnimAutoPinAfterLanding);
            console.log('  use: ws.addDropPin(' + mid + ', x, y) to pin a tile');
        },

        snapEventsToSprites: function(mapId) {
            if (!$gameMap || !$gameMap.events) {
                console.log('[ws] no map loaded');
                return;
            }

            var mid = $gameMap.mapId();
            if (mapId !== undefined && Math.floor(Number(mapId)) !== mid) {
                console.log('[ws] snapEventsToSprites: current map is ' + mid +
                            ', cannot snap events on map ' + mapId +
                            ' (transfer to that map first)');
                return;
            }
            var events = $gameMap.events();
            var fixed = 0;
            events.forEach(function(ev) {
                if (!ev) return;
                var tx = Math.round(ev._realX);
                var ty = Math.round(ev._realY);
                if (tx === ev._x && ty === ev._y) return;
                var oldX = ev._x, oldY = ev._y;
                ev._x = tx;
                ev._y = ty;

                if (ev._wsAutoPin) {
                    ev._wsAutoPin.tileX = tx;
                    ev._wsAutoPin.tileY = ty;
                    ev._wsAutoPin.realX = ev._realX;
                    ev._wsAutoPin.realY = ev._realY;
                }
                if (ev._wsExplicitPinSnapshot) {
                    ev._wsExplicitPinSnapshot.tileX = tx;
                    ev._wsExplicitPinSnapshot.tileY = ty;
                    ev._wsExplicitPinSnapshot.realX = ev._realX;
                    ev._wsExplicitPinSnapshot.realY = ev._realY;
                }
                fixed++;
                console.log('[ws] snapped event ' + ev._eventId +
                            ': tile (' + oldX + ',' + oldY + ') -> (' + tx + ',' + ty + ')' +
                            '  visual=(' + ev._realX.toFixed(3) + ',' + ev._realY.toFixed(3) + ')');
            });
            if (fixed === 0) console.log('[ws] no events needed snapping (all in sync)');
            else             console.log('[ws] snapped ' + fixed + ' event(s) to their sprite position');
        },

        diagDropSe: function(toggleDebug) {
            if (toggleDebug === true || toggleDebug === false) {
                CFG.eventDropAnimSyncLandSeDebug = toggleDebug;
                if (!toggleDebug) _dropSeDiagnostic.events = [];
                console.log('[ws] dropSe debug: ' + CFG.eventDropAnimSyncLandSeDebug);
            }
            console.log('[ws] === dropSe diagnostic ===');
            console.log('  cache:');
            var keys = Object.keys(_decodedSeCache);
            if (keys.length === 0) console.log('    (empty)');
            else keys.forEach(function(k) {
                var e = _decodedSeCache[k];
                var live = !!(e.buffer && e.buffer.isReady && e.buffer.isReady());
                console.log('    "' + k + '": ready=' + e.ready +
                            ', liveReady=' + live +
                            ', lastUsedFrame=' + e.lastUsedFrame);
            });
            console.log('  lookback clock: ' + _suppressedSeAge +
                        ' (message active: ' + _isMessageActive() + ')');
            console.log('  recent buffer (' + _recentSeBuffer.length + '):');
            _recentSeBuffer.forEach(function(b) {
                console.log('    stamped@' + b.frame + ' (age=' + (_suppressedSeAge - b.frame) + ') ' +
                            b.se.name + ' played=' + b.played);
            });
            console.log('  active drops + pending SEs:');
            if (typeof $gameMap !== 'undefined' && $gameMap && typeof $gameMap.events === 'function') {
                $gameMap.events().forEach(function(ev) {
                    if (ev._ws_dropAnim) {
                        console.log('    event ' + ev._eventId +
                                    ' anim: phase=' + ev._ws_dropAnim.phase +
                                    ', elapsed=' + ev._ws_dropAnim.elapsed +
                                    '/' + ev._ws_dropAnim.opts.duration +
                                    ', pendingLandSe=' + (ev._ws_dropAnim.pendingLandSe ?
                                        ev._ws_dropAnim.pendingLandSe.name : 'none'));
                    }
                    if (ev._ws_deferredLandSes && ev._ws_deferredLandSes.length > 0) {
                        ev._ws_deferredLandSes.forEach(function(d) {
                            console.log('    event ' + ev._eventId +
                                        ' deferred: ' + d.se.name +
                                        ', framesLeft=' + d.framesLeft);
                        });
                    }
                });
            }
            console.log('  recent debug events:');
            _dropSeDiagnostic.events.forEach(function(ev) {
                console.log('    ', JSON.stringify(ev));
            });
        },

        setMessageTextOverride: function(key, text) {
            if (arguments.length === 0) {
                console.log('[ws] message text overrides:');
                var keys = Object.keys(CFG.messageTextOverrides || {});
                if (keys.length === 0) { console.log('  (none)'); return; }
                keys.forEach(function(k) {
                    console.log('  "' + k + '" -> "' + CFG.messageTextOverrides[k] + '"');
                });
                return;
            }
            if (!key || typeof key !== 'string') {
                console.log('[ws] setMessageTextOverride: key must be a string (e.g. "01_map_whitespace.message_19")');
                return;
            }
            if (!CFG.messageTextOverrides) CFG.messageTextOverrides = {};
            if (text === null || text === undefined || text === '') {
                delete CFG.messageTextOverrides[key];
                console.log('[ws] cleared override for "' + key + '"');
            } else {
                CFG.messageTextOverrides[key] = String(text);
                console.log('[ws] override set: "' + key + '" -> "' + CFG.messageTextOverrides[key] + '"');
            }
        },
        clearMessageTextOverride: function(key) {
            if (!key) { console.log('[ws] clearMessageTextOverride: pass the key to clear'); return; }
            if (CFG.messageTextOverrides && key in CFG.messageTextOverrides) {
                delete CFG.messageTextOverrides[key];
                console.log('[ws] cleared override for "' + key + '"');
            } else {
                console.log('[ws] no override set for "' + key + '"');
            }
        },

        setMenuFixHelpWindowWidth: function(enabled) {
            if (enabled !== true && enabled !== false) {
                console.log('[ws] setMenuFixHelpWindowWidth: enabled must be true or false');
                return;
            }
            CFG.menuFixHelpWindowWidth = enabled;
            if (enabled) _installMenuHelpWidthFix();
            console.log('[ws] menu help-window width fix: ' + enabled);
        },

        setMenuHelpWindowYOffset: function(px) {
            if (px === undefined) {
                console.log('[ws] menuHelpWindowYOffset: ' + CFG.menuHelpWindowYOffset + 'px');
                return;
            }
            CFG.menuHelpWindowYOffset = Number(px) || 0;
            console.log('[ws] menuHelpWindowYOffset set to ' + CFG.menuHelpWindowYOffset + 'px (effective on next menu open)');
        },

        setMenuEquipBubblesYOffset: function(px) {
            if (px === undefined) {
                console.log('[ws] menuEquipBubblesYOffset: ' + CFG.menuEquipBubblesYOffset + 'px');
                return;
            }
            CFG.menuEquipBubblesYOffset = Number(px) || 0;
            console.log('[ws] menuEquipBubblesYOffset set to ' + CFG.menuEquipBubblesYOffset + 'px (effective on next menu open)');
        },

        setMenuStatsPanelHelpGapPx: function(px) {
            if (px === undefined) {
                console.log('[ws] menuStatsPanelHelpGapPx: ' + CFG.menuStatsPanelHelpGapPx + 'px');
                return;
            }
            CFG.menuStatsPanelHelpGapPx = Math.max(0, Number(px) || 0);
            console.log('[ws] menuStatsPanelHelpGapPx set to ' + CFG.menuStatsPanelHelpGapPx + 'px (effective on next menu open)');
        },

        setMenuHelpWindowWidthMode: function(mode) {
            if (mode === undefined) {
                console.log('[ws] menuHelpWindowWidthMode: ' + JSON.stringify(CFG.menuHelpWindowWidthMode));
                return;
            }
            if (mode !== 'vanilla' && mode !== 'full' && typeof mode !== 'number') {
                console.log('[ws] setMenuHelpWindowWidthMode: must be "vanilla", "full", or a pixel number');
                return;
            }
            CFG.menuHelpWindowWidthMode = mode;
            console.log('[ws] menuHelpWindowWidthMode set to ' + JSON.stringify(CFG.menuHelpWindowWidthMode) +
                        ' (effective on next menu open; resolved width: ' + _wsHelpBarTargetWidth() + 'px)');
        },

        setMenuHelpWindowFullModeMarginPx: function(px) {
            if (px === undefined) {
                console.log('[ws] menuHelpWindowFullModeMarginPx: ' + CFG.menuHelpWindowFullModeMarginPx + 'px');
                return;
            }
            CFG.menuHelpWindowFullModeMarginPx = Math.max(0, Number(px) || 0);
            console.log('[ws] menuHelpWindowFullModeMarginPx set to ' + CFG.menuHelpWindowFullModeMarginPx + 'px (effective on next menu open)');
        },

        setPictureEdgeExtrusion: function(enabled, mapIds, sampleDepth) {

            if (enabled !== undefined) {
                if (enabled !== true && enabled !== false) {
                    console.log('[ws] setPictureEdgeExtrusion: enabled must be true or false');
                    return;
                }
                CFG.pictureEdgeExtrusionEnabled = enabled;
            }
            if (mapIds !== undefined) {
                if (mapIds !== null && !Array.isArray(mapIds)) {
                    console.log('[ws] setPictureEdgeExtrusion: mapIds must be null or an array of map ids');
                    return;
                }
                CFG.pictureEdgeExtrusionMapIds = mapIds;
            }
            if (sampleDepth !== undefined) {
                var n = Math.max(1, Math.floor(Number(sampleDepth) || 1));
                CFG.pictureEdgeExtrusionSampleDepth = n;
            }
            console.log('[ws] picture edge extrusion: enabled=' + CFG.pictureEdgeExtrusionEnabled +
                        ', mapIds=' + JSON.stringify(CFG.pictureEdgeExtrusionMapIds) +
                        ', sampleDepth=' + CFG.pictureEdgeExtrusionSampleDepth);
        },
        setNameBox: function(mode) {
            var valid = ['vanilla', 'follow', 'faceTop'];
            if (valid.indexOf(mode) < 0) { console.log('[ws] setNameBox: must be one of ' + valid.join(', ')); return; }
            _nameBoxMode = mode;
            console.log('[ws] nameBox mode: ' + mode +
                        (mode === 'faceTop' ? ' (gap=' + CFG.nameBoxFaceTopGap + 'px, requires faceAnchor=true)' : ''));
        },
        setFaceBox: function(mode) {
            var valid = ['vanilla', 'follow'];
            if (valid.indexOf(mode) < 0) { console.log('[ws] setFaceBox: must be one of ' + valid.join(', ')); return; }
            _faceBoxMode = mode;
            console.log('[ws] faceBox mode: ' + mode);
        },

        setNameBoxGap: function(pixels) {
            CFG.nameBoxFaceTopGap = Number(pixels) || 0;
            console.log('[ws] nameBoxFaceTopGap: ' + CFG.nameBoxFaceTopGap + 'px');
        },

        setNameBoxTrim: function(pixels) {
            CFG.nameBoxFaceTopHeightTrim = Number(pixels) || 0;
            console.log('[ws] nameBoxFaceTopHeightTrim: ' + CFG.nameBoxFaceTopHeightTrim +
                        'px (takes effect on next name tag redraw)');
        },

        setNameBoxPad: function(pixels) {
            CFG.nameBoxFaceTopTextPadding = Number(pixels) || 0;
            console.log('[ws] nameBoxFaceTopTextPadding: ' + CFG.nameBoxFaceTopTextPadding +
                        'px (takes effect on next name tag redraw)');
        },

        setNameBoxNudge: function(pixels) {
            CFG.nameBoxFaceTopTextNudge = Number(pixels) || 0;
            console.log('[ws] nameBoxFaceTopTextNudge: ' + CFG.nameBoxFaceTopTextNudge +
                        'px (takes effect on next name tag redraw)');
        },

        setFaceAnchor: function(enabled, offsetX, offsetY, centerCluster) {
            CFG.faceAnchorToMessageBox = !!enabled;
            if (offsetX !== undefined) CFG.faceAnchorOffsetX = Number(offsetX) || 0;
            if (offsetY !== undefined) CFG.faceAnchorOffsetY = Number(offsetY) || 0;
            if (centerCluster !== undefined) CFG.faceAnchorCenterCluster = !!centerCluster;
            console.log('[ws] faceAnchor: ' + (CFG.faceAnchorToMessageBox ? 'ON' : 'OFF') +
                        ' (offX=' + CFG.faceAnchorOffsetX + ' offY=' + CFG.faceAnchorOffsetY +
                        ' centerCluster=' + CFG.faceAnchorCenterCluster + ')');
        },
        setFaceAnchorCenter: function(enabled) {
            CFG.faceAnchorCenterCluster = !!enabled;
            console.log('[ws] faceAnchor cluster centering: ' + (CFG.faceAnchorCenterCluster ? 'ON' : 'OFF') +
                        (CFG.faceAnchorToMessageBox ? '' : ' (no effect — faceAnchorToMessageBox is off)'));
        },

        setBarCurtain: function(enabled, duration, edgeWidth, edgeMaxWidth) {
            CFG.barCurtainEnabled = !!enabled;
            if (duration !== undefined) CFG.barCurtainDuration = Math.max(1, Number(duration) || 48);
            if (edgeWidth !== undefined) CFG.barCurtainEdgeWidth = Math.max(0, Number(edgeWidth) || 0);
            if (edgeMaxWidth !== undefined) CFG.barCurtainEdgeMaxWidth = Math.max(0, Number(edgeMaxWidth) || 0);
            console.log('[ws] barCurtain: ' + (CFG.barCurtainEnabled ? 'ON' : 'OFF') +
                        ' (duration=' + CFG.barCurtainDuration + 'f, edge=' + CFG.barCurtainEdgeWidth +
                        'px -> ' + CFG.barCurtainEdgeMaxWidth + 'px stretch)');
        },
        setFaceAnchorDynamicCenter: function(enabled) {
            CFG.faceAnchorDynamicCenter = !!enabled;
            console.log('[ws] faceAnchor dynamic centering: ' + (CFG.faceAnchorDynamicCenter ? 'ON (recenter when faceless)' : 'OFF (freeze last shift)') +
                        ((CFG.faceAnchorToMessageBox && CFG.faceAnchorCenterCluster) ? '' :
                         ' (no effect — needs faceAnchorToMessageBox + faceAnchorCenterCluster)'));
        },
        setFaceAnchorMirror: function(enabled) {
            CFG.faceAnchorMirror = !!enabled;
            console.log('[ws] faceAnchor mirror: ' + (CFG.faceAnchorMirror ? 'ON (face left of msg box)' : 'OFF (face right of msg box)') +
                        (CFG.faceAnchorToMessageBox ? '' : ' (no effect — faceAnchorToMessageBox is off)'));
        },

        listOverrides: function() {
            var ids = Object.keys(mapOverrides);
            if (ids.length === 0) { console.log('[ws] no overrides set.'); return; }
            console.log('[ws] === map overrides ===');
            ids.forEach(function(id) {
                var ov = mapOverrides[id];
                var parts = [];
                parts.push('pillarbox=' + _describeState(ov.pillarbox));
                parts.push('letterbox=' + _describeState(ov.letterbox));
                parts.push('forceSmallW=' + _describeState(ov.forceSmallWidth));
                parts.push('forceSmallH=' + _describeState(ov.forceSmallHeight));
                parts.push('forceCenter=' + _describeState(ov.forceCenter));
                parts.push('fogOfWar=' + _describeState(ov.fogOfWar));
                if (ov.decorations && ov.decorations.length > 0) parts.push('decorations=' + ov.decorations.length);
                if (ov.backdrop) parts.push('backdrop=' + ov.backdrop);
                console.log('     map ' + id + ': ' + parts.join(', '));
            });
        },
        clearOverrides: function() {
            mapOverrides = {};
            _saveOverridesToStorage();
            _updatePillarSprites();
            _updateFogSprites();
            _refreshBackdropSprite();
            console.log('[ws] all overrides cleared.');
        },
        saveOverrides: function() { _saveOverridesToStorage(); console.log('[ws] overrides saved.'); },

        debug: function() {
            if (!$gameMap || $gameMap.mapId() <= 0) { console.log('[ws] no map loaded.'); return; }
            var info = _getPillarboxInfo();
            var mapId = $gameMap.mapId();
            console.log('[ws] === current map info ===');
            console.log('     map id:       ' + mapId);
            console.log('     map size:     ' + $gameMap.width() + 'x' + $gameMap.height() + ' tiles');
            console.log('     pixel size:   ' + ($gameMap.width() * $gameMap.tileWidth()) + 'x' + ($gameMap.height() * $gameMap.tileHeight()));
            console.log('     canvas size:  ' + WIDE_W + 'x' + WIDE_H);
            console.log('     map looping:  H=' + $gameMap.isLoopHorizontal() + ' V=' + $gameMap.isLoopVertical());
            console.log('     backdrop:     ' + _getBackdropColorForMap());
            console.log('     msgBoxMode:   ' + _messageBoxMode + ' (' + _getMessageBoxWidth() + 'px)');
            console.log('     choiceMode:   ' + _choiceBoxMode +
                        ' (align=' + _resolveChoiceTextAlign() +
                        ', growUp=' + CFG.choiceGrowUpward +
                        ', minTopGap=' + CFG.choiceGrowUpwardMinTopGap + 'px)');
            console.log('     choiceCursor: ' + _resolveCursorPosition() +
                        ' (gap=' + CFG.choiceCursorTextGap + 'px' +
                        ', flip=' + CFG.choiceCursorFlip + ')');
            console.log('     nameBoxMode:  ' + _nameBoxMode +
                        (_nameBoxMode === 'faceTop' ? ' (gap=' + CFG.nameBoxFaceTopGap + ')' : ''));
            console.log('     faceBoxMode:  ' + _faceBoxMode);
            console.log('     faceAnchor:   ' + CFG.faceAnchorToMessageBox + ' (offX=' + CFG.faceAnchorOffsetX +
                        ' offY=' + CFG.faceAnchorOffsetY + ' mirror=' + CFG.faceAnchorMirror +
                        ' center=' + CFG.faceAnchorCenterCluster + ')');
            var face = _findActiveFaceBox();
            console.log('     faceActive:   ' + (face ? 'YES (' + face.constructor.name + ')' : 'no'));
            if (typeof $gameMessage !== 'undefined' && $gameMessage.faceName) {
                console.log('     faceName:     "' + $gameMessage.faceName() + '"');
            }
            if (info) {
                console.log('     pillarbox:    ' + info.pillarbox + ' (L=' + info.leftBar + ' R=' + info.rightBar + ')');
                console.log('     letterbox:    ' + info.letterbox + ' (T=' + info.topBar + ' B=' + info.bottomBar + ')');
            }
            console.log('     forceCenter:  ' + (_isForceCenterActive() ? 'ACTIVE' : 'inactive'));
            console.log('     fogOfWar:     ' + (_isFogOfWarActive() ? 'ACTIVE' : 'inactive'));
            console.log('     ghost sprites: ' + _ghostSprites.length + ' total, ' +
                        _ghostSprites.filter(function(g) { return g.visible; }).length + ' visible');
            var scene = SceneManager._scene;
            if (scene && scene._spriteset && scene._spriteset._tilemap) {
                var tm = scene._spriteset._tilemap;
                console.log('     tilemap:      ' + tm._width + 'x' + tm._height +
                            ' (layer ' + tm._layerWidth + 'x' + tm._layerHeight + ')');
            }
        },

        fades: function() {
            console.log('[ws] === fade mirror diagnostics ===');
            console.log('  mirror enabled: ' + _barFadeMirrorEnabled());
            if (typeof $gameScreen === 'undefined' || !$gameScreen) { console.log('  no $gameScreen'); return; }
            var flash = $gameScreen._flashColor;
            console.log('  flash: ' + (flash ? JSON.stringify(flash) : 'none'));
            console.log('  brightness: ' + $gameScreen.brightness());
            if (typeof $gameScreen.tone === 'function') {
                console.log('  tone: ' + JSON.stringify($gameScreen.tone()));
            }
            var anyPics = false;
            for (var pid = 1; pid <= 100; pid++) {
                var pic = $gameScreen.picture(pid);
                if (!pic) continue;
                var op = (pic._opacity !== undefined) ? pic._opacity : 0;
                if (op <= 0) continue;
                anyPics = true;
                var solid = _solidColorOfPicture(pic._name || '');
                console.log('  pic ' + pid + ': "' + pic._name + '" opacity=' + op +
                            ' solid=' + (solid === undefined ? 'loading...' : JSON.stringify(solid)));
            }
            if (!anyPics) console.log('  pictures: none visible');
            var fade = _getActiveScreenFade();
            console.log('  => detected fade: ' + (fade ?
                'rgb(' + fade.r + ',' + fade.g + ',' + fade.b + ') alpha=' + fade.alpha.toFixed(2) : 'NONE'));
            console.log('  if a fade is visibly on screen but detected=NONE, it does not go');
            console.log('  through $gameScreen — note the scene/moment and report it.');
        },
        ghosts: function() {
            console.log('[ws] === ghost sprite status ===');
            console.log('  total: ' + _ghostSprites.length);
            console.log('  visible: ' + _ghostSprites.filter(function(g) { return g.visible; }).length);
            _ghostSprites.forEach(function(g, i) {
                console.log('  G' + i + ': obj(' + g._ws_ghost_objX + ',' + g._ws_ghost_objY + ')' +
                            ' size ' + g._ws_ghost_w + 'x' + g._ws_ghost_h +
                            ' screen(' + Math.round(g.x) + ',' + Math.round(g.y) + ')' +
                            ' visible=' + g.visible);
            });
        },
        rebuildGhosts: function() {
            var scene = SceneManager._scene;
            if (!scene || !(scene instanceof Scene_Map)) { console.log('[ws] not on a map scene.'); return; }
            if (!_ghostsAllowedOnCurrentMap()) {
                console.log('[ws] ghosts disabled on map ' + ($gameMap ? $gameMap.mapId() : '?') +
                            ' (ghostObjectMapIds: ' + JSON.stringify(CFG.ghostObjectMapIds) + ')');
            }
            _destroyGhostSprites();
            _createGhostSprites(scene);
            _updateGhostSprites();
            console.log('[ws] rebuilt ' + _ghostSprites.length + ' ghost sprite(s).');
        },
        resolution: function() {
            console.log('[ws] === resolution info ===');
            console.log('     mode:         ' + CFG.mode);
            console.log('     canvas:       ' + WIDE_W + 'x' + WIDE_H);
            console.log('     base (4:3):   ' + BASE_W + 'x' + BASE_H);
            console.log('     x offset:     ' + X_OFF);
            console.log('     y offset:     ' + Y_OFF);
        },
        dumpScene: function(maxDepth) {
            maxDepth = maxDepth || 4;
            var scene = SceneManager._scene;
            if (!scene) { console.log('[ws] no active scene.'); return; }
            console.log('[ws] === scene tree: ' + (scene.constructor.name || 'unknown') + ' ===');
            function walk(obj, depth, prefix) {
                if (depth > maxDepth) return;
                var name = obj.constructor ? obj.constructor.name : 'Object';
                var extra = '';
                if (obj instanceof Window) {
                    extra = ' [' + obj.width + 'x' + obj.height + ' @' + Math.round(obj.x) + ',' + Math.round(obj.y) + ']';
                    if (!obj.visible) extra += ' (hidden)';
                } else if (obj instanceof Sprite) {
                    extra = ' @' + Math.round(obj.x) + ',' + Math.round(obj.y);
                    if (obj.bitmap) extra += ' bmp:' + obj.bitmap.width + 'x' + obj.bitmap.height;
                    if (!obj.visible) extra += ' (hidden)';
                    if (obj._pictureId) extra += ' picId=' + obj._pictureId;
                    if (obj._ws_ghost_w) extra += ' [GHOST]';
                }
                console.log(prefix + name + extra);
                if (obj.children) {
                    for (var i = 0; i < obj.children.length; i++) walk(obj.children[i], depth + 1, prefix + '  ');
                }
            }
            walk(scene, 0, '  ');
        },
        toggleGuides: function() {
            if (!DCFG.enableGuides) { console.log('[ws] debug guides disabled in config.'); return; }
            _debugOverlayVisible = !_debugOverlayVisible;
            console.log('[ws] debug overlay: ' + (_debugOverlayVisible ? 'VISIBLE' : 'HIDDEN'));
            var scene = SceneManager._scene;
            if (_debugOverlayVisible && scene && !_debugOverlaySprite) _createDebugOverlay(scene);
            if (_debugOverlaySprite) _debugOverlaySprite.visible = _debugOverlayVisible;
            if (_debugInfoSprite) _debugInfoSprite.visible = _debugOverlayVisible && (DCFG.showInfoPanel !== false);
        },
        status: function() {
            console.log('[ws] === widescreen plugin v10.88 ===');
            console.log('  mode:        ' + CFG.mode + ' (' + WIDE_W + 'x' + WIDE_H + ')');
            console.log('  overrides:   ' + Object.keys(mapOverrides).length + ' map(s)');
            console.log('  ghost spr:   ' + _ghostSprites.length + ' total');
            console.log('  picEdges:    enabled=' + CFG.pictureEdgeExtrusionEnabled +
                        ', mapIds=' + JSON.stringify(CFG.pictureEdgeExtrusionMapIds) +
                        ', sampleDepth=' + CFG.pictureEdgeExtrusionSampleDepth);
            console.log('  dropAnim:    enabled=' + CFG.eventDropAnimEnabled +
                        ', height=' + CFG.eventDropAnimHeight + ' tiles' +
                        ', dur=' + CFG.eventDropAnimDuration + 'f' +
                        ', bounce=' + CFG.eventDropAnimBounceEnabled +
                        ', shadow=' + CFG.eventDropAnimShadowEnabled +
                        ', fadeIn=' + CFG.eventDropAnimFadeInEnabled);
            console.log('  dropAnim auto:' + ' enabled=' + CFG.eventDropAnimAutoSnap +
                        ', mapIds=' + JSON.stringify(CFG.eventDropAnimMapIds) +
                        ', minDist=' + CFG.eventDropAnimAutoSnapMinDistance + ' tiles');
            console.log('  dropAnim SE:  enabled=' + CFG.eventDropAnimSyncLandSeEnabled +
                        ', names=' + JSON.stringify(CFG.eventDropAnimSyncLandSeNames) +
                        ', lookback=' + CFG.eventDropAnimSyncLandSeLookbackFrames + 'f' +
                        ', suppressEarly=' + CFG.eventDropAnimSyncLandSeSuppressEarly +
                        ', offset=' + CFG.eventDropAnimSyncLandSeOffsetFrames + 'f');
            console.log('  msgOverride: ' + Object.keys(CFG.messageTextOverrides || {}).length +
                        ' active (ws.setMessageTextOverride() to list)');
            console.log('  menuHelpFix: ' + CFG.menuFixHelpWindowWidth +
                        ' (Skill/Equip/Item help+info window width uses BASE_W not Graphics.width)');
            console.log('  menuHelpYOff:' + CFG.menuHelpWindowYOffset + 'px, bubblesYOff:' +
                        CFG.menuEquipBubblesYOffset + 'px, statsHelpGap:' +
                        CFG.menuStatsPanelHelpGapPx + 'px (statsPanelFix=' +
                        CFG.menuFixEquipStatsPanelY + ')');
            console.log('  menuHelpWidth: mode=' + JSON.stringify(CFG.menuHelpWindowWidthMode) +
                        ', resolved=' + _wsHelpBarTargetWidth() + 'px' +
                        ' (full-margin=' + CFG.menuHelpWindowFullModeMarginPx + 'px)');
            console.log('  msgBoxMode:  ' + _messageBoxMode + ' (' + _getMessageBoxWidth() + 'px)');
            console.log('  choiceMode:  ' + _choiceBoxMode +
                        ' (align=' + _resolveChoiceTextAlign() +
                        ', growUp=' + CFG.choiceGrowUpward + ')');
            console.log('  choiceCursor:' + ' pos=' + _resolveCursorPosition() +
                        ', gap=' + CFG.choiceCursorTextGap + 'px' +
                        ', flip=' + CFG.choiceCursorFlip);
            console.log('  nameBoxMode: ' + _nameBoxMode +
                        (_nameBoxMode === 'faceTop' ? ' (gap=' + CFG.nameBoxFaceTopGap + ')' : ''));
            console.log('  faceBoxMode: ' + _faceBoxMode);
            console.log('  faceAnchor:  ' + CFG.faceAnchorToMessageBox + ' (offX=' + CFG.faceAnchorOffsetX +
                        ' offY=' + CFG.faceAnchorOffsetY + ' mirror=' + CFG.faceAnchorMirror +
                        ' center=' + CFG.faceAnchorCenterCluster + ')');
            console.log('  YED patch:   none (ghost sprites + backdrop only)');
            if ($gameMap && $gameMap.mapId() > 0) {
                console.log('  current map: ' + $gameMap.mapId() + ' (' + $gameMap.width() + 'x' + $gameMap.height() + ')');
                console.log('  backdrop:    ' + _getBackdropColorForMap());
            }
        },
        help: function() {
            console.log('[ws] omori widescreen console commands v10.88');
            console.log('  pillarbox:     ws.addPillar/removePillar/autoPillar(mapId?)');
            console.log('  letterbox:     ws.addLetter/removeLetter/autoLetter(mapId?)');
            console.log('  box (both):    ws.addBox/removeBox/autoBox(mapId?)');
            console.log('  forceSmall:    ws.addSmall/removeSmall/autoSmall(mapId?)');
            console.log('  forceCenter:   ws.addCenter/removeCenter/autoCenter(mapId?)');
            console.log('  fogOfWar:      ws.addFog/removeFog/autoFog(mapId?)');
            console.log('  backdrop:      ws.setBackdrop("#color", mapId?)');
            console.log('  barCurtain:    ws.setBarCurtain(enabled, durationFrames?, edgePx?, edgeMaxPx?)');
            console.log('  msgBox:        ws.setMessageBox("vanilla"|"extended"|"full")');
            console.log('  choice:        ws.setChoiceBox("vanilla"|"follow"|"opposite")');
            console.log('  choiceAlign:   ws.setChoiceTextAlign("auto"|"left"|"center"|"right")');
            console.log('  choiceGrowUp:  ws.setChoiceGrowUp(true|false|"auto", minTopGapPx?)');
            console.log('  choiceCursor:  ws.setChoiceCursor("vanilla"|"hugText"|"mirror", gapPx?, true|false|"auto")');
            console.log('  nameBox:       ws.setNameBox("vanilla"|"follow"|"faceTop")  [faceTop EXPERIMENTAL]');
            console.log('  nameBoxGap:    ws.setNameBoxGap(pixels)  [faceTop mode only]');
            console.log('  nameBoxPad:    ws.setNameBoxPad(pixels)  [faceTop: breathing room around text]');
            console.log('  nameBoxTrim:   ws.setNameBoxTrim(pixels)  [faceTop: extra height shave]');
            console.log('  nameBoxNudge:  ws.setNameBoxNudge(pixels)  [faceTop: text +down/-up]');
            console.log('  faceBox:       ws.setFaceBox("vanilla"|"follow")');
            console.log('  faceAnchor:    ws.setFaceAnchor(enabled, offsetX?, offsetY?, centerCluster?)  [EXPERIMENTAL]');
            console.log('  faceCenter:    ws.setFaceAnchorCenter(enabled)  [EXPERIMENTAL]');
            console.log('  faceMirror:    ws.setFaceAnchorMirror(enabled)  [EXPERIMENTAL, face left of msg box]');
            console.log('  faceDynCenter: ws.setFaceAnchorDynamicCenter(enabled)  [EXPERIMENTAL, recenter when faceless]');
            console.log('  ghosts:        ws.ghosts(), ws.rebuildGhosts()');
            console.log('  picEdges:      ws.setPictureEdgeExtrusion(enabled?, mapIdsArr?|null, sampleDepth?)');
            console.log('  dropAnim:      ws.setEventDropAnim(enabled?, heightTiles?, durationFrames?, bounce?)');
            console.log('  dropAnimAdv:   ws.setEventDropAnimAdvanced({bounceHeight?, bounceDuration?, bounceCount?, bounceDecay?, spinEnabled?, spinMode?(clatter|spin|none), spinTurns?, clatterAngleDeg?, clatterDecay?, settleEnabled?, settleFrames?, shadowEnabled?, fadeInEnabled?, fadeInDelayPct?, fadeInFinishPct?, landShakeEnabled?, ...})');
            console.log('  dropAnimAuto:  ws.setEventDropAnimAuto(enabled?, mapIdsArr?|null, minTileDist?)  [auto-detect spawn snaps]');
            console.log('  dropAnimSE:    ws.setEventDropAnimSyncSe(enabled?, namesArr?, lookbackFrames?, suppressEarly?, offsetFrames?)  [resync thud SEs to landing; +offset delays]');
            console.log('  dropAnimAutoPin: ws.setDropAnimAutoPin(true|false)  [hard-clamp landed events to their tile every frame]');
            console.log('  dropPins:      ws.addDropPin(mapId, x, y) / ws.removeDropPin(mapId, x, y) / ws.clearDropPins(mapId?) / ws.listDropPins()  [hard-pin tiles so events on them never drift]');
            console.log('  diagDropEvents: ws.diagDropEvents()  [list events on current map with tile + sub-tile coords; copy coords into ws.addDropPin]');
            console.log('  snapEvtsSprite: ws.snapEventsToSprites()  [repair desync\'d events: snap collision tile _x/_y to Math.round(_realX/_realY)]');
            console.log('  diagDropSe:    ws.diagDropSe(true|false?)  [toggle live SE-sync logging + dump current state]');
            console.log('  msgOverride:   ws.setMessageTextOverride(key?, text?)  [no args = list; pass text=null to clear]');
            console.log('  menuHelpFix:   ws.setMenuFixHelpWindowWidth(true|false)  [Skill/Equip/Item help+info window width fix]');
            console.log('  menuHelpYOff:  ws.setMenuHelpWindowYOffset(px)  [shifts help bar DOWN to align with OMORI portrait]');
            console.log('  menuBubblesYOff: ws.setMenuEquipBubblesYOffset(px)  [shifts equip stat-panel decorative bubbles by same Y]');
            console.log('  menuStatsGap:  ws.setMenuStatsPanelHelpGapPx(px)  [gap between stats panel BOTTOM and help bar TOP]');
            console.log('  menuHelpWidth: ws.setMenuHelpWindowWidthMode("vanilla"|"full"|<pixels>)  [help bar width mode]');
            console.log('  menuHelpFullMargin: ws.setMenuHelpWindowFullModeMarginPx(px)  [side margin in "full" mode]');
            console.log('                 ws.clearMessageTextOverride(key)');
            console.log('  dropAnim use:  AUTO by default on map 87; manual: event.dropTo(x, y) or event.armDropAnimation()');
            console.log('  fades:         ws.fades()  [run during a fade to debug bar mirroring]');
            console.log('  debug:         ws.debug(), ws.resolution(), ws.status()');
            console.log('  inspection:    ws.dumpScene(maxDepth?)');
            console.log('  overlay:       ws.toggleGuides()');
            console.log('  management:    ws.listOverrides/clearOverrides/saveOverrides');
        }
    };
    console.log('[Widescreen] v0.10.53 loaded. type ws.help() for commands.');

})();

(function() {
    'use strict';

    var CFG = window.WidescreenConfig || {};
    if (!CFG) CFG = {};
    if (!CFG.battle) CFG.battle = {};
    var B = CFG.battle;

    function ensureBattleDefaults() {
        if (CFG.battleUiCenterEnabled === undefined) CFG.battleUiCenterEnabled = true;
        if (B.enabled === undefined) B.enabled = true;
        if (B.backgroundOffsetX === undefined) B.backgroundOffsetX = 0;
        if (B.backgroundOffsetY === undefined) B.backgroundOffsetY = 0;
        if (B.backgroundScaleX === undefined) B.backgroundScaleX = 1.0;
        if (B.backgroundScaleY === undefined) B.backgroundScaleY = 1.0;
        if (CFG.battleBgFitToScreen === undefined) CFG.battleBgFitToScreen = true;
        if (B.enemyOffsetX === undefined) B.enemyOffsetX = 0;
        if (B.enemyOffsetY === undefined) B.enemyOffsetY = 0;
        if (B.enemyScaleX === undefined) B.enemyScaleX = 1.0;
        if (B.enemyScaleY === undefined) B.enemyScaleY = 1.0;
        if (B.battleFieldOffsetX === undefined) B.battleFieldOffsetX = 0;
        if (B.battleFieldOffsetY === undefined) B.battleFieldOffsetY = 0;
        if (B.statusWindowOffsetX === undefined) B.statusWindowOffsetX = 0;
        if (B.statusWindowOffsetY === undefined) B.statusWindowOffsetY = 0;
        if (B.statusWindowScaleX === undefined) B.statusWindowScaleX = 1.0;
        if (B.statusWindowScaleY === undefined) B.statusWindowScaleY = 1.0;
        if (B.actorCommandOffsetX === undefined) B.actorCommandOffsetX = 0;
        if (B.actorCommandOffsetY === undefined) B.actorCommandOffsetY = 0;
        if (B.actorCommandScaleX === undefined) B.actorCommandScaleX = 1.0;
        if (B.actorCommandScaleY === undefined) B.actorCommandScaleY = 1.0;
        if (B.helpWindowOffsetX === undefined) B.helpWindowOffsetX = 0;
        if (B.helpWindowOffsetY === undefined) B.helpWindowOffsetY = 0;
        if (B.helpWindowScaleX === undefined) B.helpWindowScaleX = 1.0;
        if (B.helpWindowScaleY === undefined) B.helpWindowScaleY = 1.0;
        if (B.faceWindowsOffsetX === undefined) B.faceWindowsOffsetX = 0;
        if (B.faceWindowsOffsetY === undefined) B.faceWindowsOffsetY = 0;
        if (B.faceWindowsScaleX === undefined) B.faceWindowsScaleX = 1.0;
        if (B.faceWindowsScaleY === undefined) B.faceWindowsScaleY = 1.0;
        if (B.stressBarOffsetX === undefined) B.stressBarOffsetX = 0;
        if (B.stressBarOffsetY === undefined) B.stressBarOffsetY = 0;
        if (B.lowHpOverlayOffsetX === undefined) B.lowHpOverlayOffsetX = 0;
        if (B.lowHpOverlayOffsetY === undefined) B.lowHpOverlayOffsetY = 0;
    }

    ensureBattleDefaults();

    var debugState = {
        overlay: null,
        bitmap: null,
        visible: false,
        scene: null
    };

    function getBattleScene() {
        if (!SceneManager || !SceneManager._scene) return null;
        return (SceneManager._scene instanceof Scene_Battle) ? SceneManager._scene : null;
    }

    function ensureOrigins(scene) {
        if (!scene) return null;
        if (!scene._wsBattleDebugOrigins) scene._wsBattleDebugOrigins = {};
        return scene._wsBattleDebugOrigins;
    }

    function getOrigin(scene, key, index) {
        var origins = ensureOrigins(scene);
        if (!origins) return null;
        if (!origins[key]) origins[key] = {};
        if (origins[key][index] === undefined) {
            var target = resolveBattleElement(scene, key, index);
            if (!target) return null;
            origins[key][index] = {
                x: target.x || 0,
                y: target.y || 0,
                scaleX: target.scale ? (target.scale.x || 1) : 1,
                scaleY: target.scale ? (target.scale.y || 1) : 1
            };
        }
        return origins[key][index];
    }

    function resolveBattleElement(scene, key, index) {
        if (!scene) return null;
        var spriteset = scene._spriteset;
        switch (key) {
            case 'background1': return spriteset ? spriteset._back1Sprite : null;
            case 'background2': return spriteset ? spriteset._back2Sprite : null;
            case 'battleField': return spriteset ? spriteset._battleField : null;
            case 'enemy': return spriteset && spriteset._enemySprites ? spriteset._enemySprites[index || 0] : null;
            case 'statusWindow': return scene._statusWindow;
            case 'actorCommandWindow': return scene._actorCommandWindow;
            case 'helpWindow': return scene._helpWindow;
            case 'faceWindowsContainer': return scene._faceWindowsContainer;
            case 'stressBar': return scene._stressBar;
            case 'lowHpOverlay': return scene._lowHpOverlay;
            default: return null;
        }
    }

    var BASE_W = 640;
    var BASE_H = 480;

    function getBattleCenterOffsets() {
        return {
            x: Math.floor((Graphics.width - BASE_W) / 2),
            y: Math.floor((Graphics.height - BASE_H) / 2)
        };
    }

    function applyBattleLayout(scene) {
        if (!scene || !(scene instanceof Scene_Battle)) return;
        ensureBattleDefaults();
        var spriteset = scene._spriteset;
        var center = getBattleCenterOffsets();

        function applyTransform(key, index, offsetX, offsetY, scaleX, scaleY) {
            var target = resolveBattleElement(scene, key, index);
            if (!target) return;
            var origin = getOrigin(scene, key, index);
            if (!origin) return;
            target.x = origin.x + (offsetX || 0);
            target.y = origin.y + (offsetY || 0);
            if (target.scale) {
                target.scale.x = (origin.scaleX || 1) * (scaleX || 1);
                target.scale.y = (origin.scaleY || 1) * (scaleY || 1);
            }
        }

        if (spriteset && spriteset._back1Sprite) {
            applyTransform('background1', 0, center.x + B.backgroundOffsetX, center.y + B.backgroundOffsetY, B.backgroundScaleX, B.backgroundScaleY);
        }
        if (spriteset && spriteset._back2Sprite) {
            applyTransform('background2', 0, center.x + B.backgroundOffsetX, center.y + B.backgroundOffsetY, B.backgroundScaleX, B.backgroundScaleY);
        }
        if (spriteset && spriteset._battleField) {
            applyTransform('battleField', 0, center.x + B.battleFieldOffsetX, center.y + B.battleFieldOffsetY, 1, 1);
        }
        if (spriteset && spriteset._enemySprites) {
            for (var i = 0; i < spriteset._enemySprites.length; i++) {
                applyTransform('enemy', i, center.x + B.enemyOffsetX, center.y + B.enemyOffsetY, B.enemyScaleX, B.enemyScaleY);
            }
        }
        if (scene._statusWindow) {
            applyTransform('statusWindow', 0, center.x + B.statusWindowOffsetX, center.y + B.statusWindowOffsetY, B.statusWindowScaleX, B.statusWindowScaleY);
        }
        if (scene._actorCommandWindow) {
            applyTransform('actorCommandWindow', 0, center.x + 16 + B.actorCommandOffsetX, center.y + B.actorCommandOffsetY, B.actorCommandScaleX, B.actorCommandScaleY);
        }
        if (scene._helpWindow) {
            applyTransform('helpWindow', 0, center.x + B.helpWindowOffsetX, center.y + B.helpWindowOffsetY, B.helpWindowScaleX, B.helpWindowScaleY);
        }
        if (scene._faceWindowsContainer) {
            applyTransform('faceWindowsContainer', 0, center.x + B.faceWindowsOffsetX, center.y + B.faceWindowsOffsetY, B.faceWindowsScaleX, B.faceWindowsScaleY);
        }
        if (scene._stressBar) {
            applyTransform('stressBar', 0, center.x + B.stressBarOffsetX, center.y + B.stressBarOffsetY, 1, 1);
        }
        if (scene._lowHpOverlay) {
            applyTransform('lowHpOverlay', 0, center.x + B.lowHpOverlayOffsetX, center.y + B.lowHpOverlayOffsetY, 1, 1);
        }
    }

    function drawDebugOverlay(scene) {
        if (!debugState.visible || !scene || !(scene instanceof Scene_Battle)) return;
        if (!debugState.overlay) {
            var bmp = new Bitmap(Graphics.width, Graphics.height);
            var sprite = new Sprite(bmp);
            sprite.z = 9999;
            scene.addChild(sprite);
            debugState.overlay = sprite;
            debugState.bitmap = bmp;
        }

        if (!debugState.bitmap) return;
        var bmp = debugState.bitmap;
        var ctx = bmp._context;
        bmp.clear();

        function drawBox(target, color, label) {
            if (!target || !target.visible) return;
            var w = target.width || 128;
            var h = target.height || 128;
            var x = target.x || 0;
            var y = target.y || 0;
            if (target.scale) {
                w = w * (target.scale.x || 1);
                h = h * (target.scale.y || 1);
            }
            ctx.strokeStyle = color;
            ctx.lineWidth = 2;
            ctx.strokeRect(x, y, w, h);
            ctx.fillStyle = color;
            ctx.font = '12px monospace';
            ctx.fillText(label, x + 4, y + 14);
        }

        if (scene._spriteset) {
            drawBox(scene._spriteset._back1Sprite, '#00aaff', 'BG1');
            drawBox(scene._spriteset._back2Sprite, '#0088cc', 'BG2');
            if (scene._spriteset._enemySprites) {
                for (var i = 0; i < scene._spriteset._enemySprites.length; i++) {
                    drawBox(scene._spriteset._enemySprites[i], '#ff00ff', 'Enemy ' + (i + 1));
                }
            }
        }
        drawBox(scene._statusWindow, '#00ff00', 'Status');
        drawBox(scene._actorCommandWindow, '#ffff00', 'Command');
        drawBox(scene._helpWindow, '#00ffff', 'Help');
        drawBox(scene._faceWindowsContainer, '#ff8800', 'Faces');
        drawBox(scene._stressBar, '#ff00aa', 'Stress');
        drawBox(scene._lowHpOverlay, '#ff0000', 'LowHP');
        bmp._setDirty();
    }

    function refreshDebugOverlay() {
        var scene = getBattleScene();
        if (!scene) return;
        applyBattleLayout(scene);
        drawDebugOverlay(scene);
    }

    function ensureWs() {
        if (!window.ws) window.ws = {};
        return window.ws;
    }

    ensureWs().toggleBattleDebug = function() {
        debugState.visible = !debugState.visible;
        var scene = getBattleScene();
        if (debugState.visible && scene) {
            refreshDebugOverlay();
        } else if (debugState.overlay && debugState.overlay.parent) {
            debugState.overlay.parent.removeChild(debugState.overlay);
            debugState.overlay = null;
            debugState.bitmap = null;
        }
        console.log('[ws] Battle debug overlay: ' + (debugState.visible ? 'ON' : 'OFF'));
    };

    ensureWs().showBattleDebug = function(enabled) {
        debugState.visible = !!enabled;
        var scene = getBattleScene();
        if (debugState.visible && scene) {
            refreshDebugOverlay();
        } else if (debugState.overlay && debugState.overlay.parent) {
            debugState.overlay.parent.removeChild(debugState.overlay);
            debugState.overlay = null;
            debugState.bitmap = null;
        }
        console.log('[ws] Battle debug overlay: ' + (debugState.visible ? 'ON' : 'OFF'));
    };

    ensureWs().setBattlePosition = function(key, x, y) {
        ensureBattleDefaults();
        var scene = getBattleScene();
        if (!scene) {
            console.log('[ws] No battle scene is active yet.');
            return null;
        }
        if (key === 'enemy') {
            B.enemyOffsetX = x;
            B.enemyOffsetY = y;
        } else if (key === 'background1' || key === 'background2') {
            B.backgroundOffsetX = x;
            B.backgroundOffsetY = y;
        } else if (key === 'battleField') {
            B.battleFieldOffsetX = x;
            B.battleFieldOffsetY = y;
        } else if (key === 'statusWindow') {
            B.statusWindowOffsetX = x;
            B.statusWindowOffsetY = y;
        } else if (key === 'actorCommandWindow') {
            B.actorCommandOffsetX = x;
            B.actorCommandOffsetY = y;
        } else if (key === 'helpWindow') {
            B.helpWindowOffsetX = x;
            B.helpWindowOffsetY = y;
        } else if (key === 'faceWindowsContainer') {
            B.faceWindowsOffsetX = x;
            B.faceWindowsOffsetY = y;
        } else if (key === 'stressBar') {
            B.stressBarOffsetX = x;
            B.stressBarOffsetY = y;
        } else if (key === 'lowHpOverlay') {
            B.lowHpOverlayOffsetX = x;
            B.lowHpOverlayOffsetY = y;
        } else {
            console.log('[ws] Unknown battle element: ' + key);
            return null;
        }
        applyBattleLayout(scene);
        refreshDebugOverlay();
        console.log('[ws] ' + key + ' position set to (' + x + ', ' + y + ')');
        return { key: key, x: x, y: y };
    };

    ensureWs().setBattleScale = function(key, scaleX, scaleY) {
        ensureBattleDefaults();
        var scene = getBattleScene();
        if (!scene) {
            console.log('[ws] No battle scene is active yet.');
            return null;
        }
        if (key === 'enemy') {
            B.enemyScaleX = scaleX;
            B.enemyScaleY = scaleY;
        } else if (key === 'background1' || key === 'background2') {
            B.backgroundScaleX = scaleX;
            B.backgroundScaleY = scaleY;
        } else if (key === 'statusWindow') {
            B.statusWindowScaleX = scaleX;
            B.statusWindowScaleY = scaleY;
        } else if (key === 'actorCommandWindow') {
            B.actorCommandScaleX = scaleX;
            B.actorCommandScaleY = scaleY;
        } else if (key === 'helpWindow') {
            B.helpWindowScaleX = scaleX;
            B.helpWindowScaleY = scaleY;
        } else if (key === 'faceWindowsContainer') {
            B.faceWindowsScaleX = scaleX;
            B.faceWindowsScaleY = scaleY;
        } else {
            console.log('[ws] Unknown battle element: ' + key);
            return null;
        }
        applyBattleLayout(scene);
        refreshDebugOverlay();
        console.log('[ws] ' + key + ' scale set to (' + scaleX + ', ' + scaleY + ')');
        return { key: key, scaleX: scaleX, scaleY: scaleY };
    };

    ensureWs().inspectBattleLayout = function() {
        var scene = getBattleScene();
        if (!scene) {
            console.log('[ws] No battle scene is active yet.');
            return null;
        }
        var report = [];
        var keys = ['background1', 'background2', 'battleField', 'enemy', 'statusWindow', 'actorCommandWindow', 'helpWindow', 'faceWindowsContainer', 'stressBar', 'lowHpOverlay'];
        for (var i = 0; i < keys.length; i++) {
            var target = resolveBattleElement(scene, keys[i], 0);
            if (!target) continue;
            report.push(keys[i] + ': x=' + Math.round(target.x || 0) + ', y=' + Math.round(target.y || 0) + ', scaleX=' + ((target.scale && target.scale.x) ? target.scale.x.toFixed(3) : '1') + ', scaleY=' + ((target.scale && target.scale.y) ? target.scale.y.toFixed(3) : '1'));
        }
        console.log('[ws] Battle layout report:');
        console.log(report.join('\n'));
        return report;
    };

    ensureWs().exportBattleConfig = function() {
        ensureBattleDefaults();
        var snippet = JSON.stringify({ battle: B }, null, 2);
        var text = 'Paste this into your battle config block:\n' + snippet;
        if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(snippet).catch(function() {});
        }
        console.log(text);
        return snippet;
    };

    ensureWs().resetBattleDebug = function() {
        ensureBattleDefaults();
        B.backgroundOffsetX = 0; B.backgroundOffsetY = 0; B.backgroundScaleX = 1; B.backgroundScaleY = 1;
        B.enemyOffsetX = 0; B.enemyOffsetY = 0; B.enemyScaleX = 1; B.enemyScaleY = 1;
        B.battleFieldOffsetX = 0; B.battleFieldOffsetY = 0;
        B.statusWindowOffsetX = 0; B.statusWindowOffsetY = 0; B.statusWindowScaleX = 1; B.statusWindowScaleY = 1;
        B.actorCommandOffsetX = 0; B.actorCommandOffsetY = 0; B.actorCommandScaleX = 1; B.actorCommandScaleY = 1;
        B.helpWindowOffsetX = 0; B.helpWindowOffsetY = 0; B.helpWindowScaleX = 1; B.helpWindowScaleY = 1;
        B.faceWindowsOffsetX = 0; B.faceWindowsOffsetY = 0; B.faceWindowsScaleX = 1; B.faceWindowsScaleY = 1;
        B.stressBarOffsetX = 0; B.stressBarOffsetY = 0;
        B.lowHpOverlayOffsetX = 0; B.lowHpOverlayOffsetY = 0;
        var scene = getBattleScene();
        if (scene) applyBattleLayout(scene);
        refreshDebugOverlay();
        console.log('[ws] Battle debug offsets reset.');
    };

    var _origSceneBattleUpdate = Scene_Battle.prototype.update;
    Scene_Battle.prototype.update = function() {
        _origSceneBattleUpdate.call(this);
        if (debugState.visible) {
            refreshDebugOverlay();
        }
    };

    console.log('[Widescreen] Battle debug helpers loaded. Use ws.toggleBattleDebug(), ws.showBattleDebug(true), ws.setBattlePosition(key, x, y), ws.setBattleScale(key, sx, sy), ws.inspectBattleLayout(), ws.exportBattleConfig().');
})();


(function() {
    'use strict';

    var CFG = window.WidescreenConfig || {};
    if (CFG.battleBgFitToScreen === undefined) CFG.battleBgFitToScreen = true;
    if (CFG.battleBgOffsetX === undefined) CFG.battleBgOffsetX = 0;
    if (CFG.battleBgOffsetY === undefined) CFG.battleBgOffsetY = 0;
    if (CFG.battleBgScaleX === undefined) CFG.battleBgScaleX = 1.0;
    if (CFG.battleBgScaleY === undefined) CFG.battleBgScaleY = 1.0;

    var _origBgState = {};
    function _applyBgTransform(sprite, key) {
        if (!sprite) return;
        if (!_origBgState[key]) {
            _origBgState[key] = {
                x: sprite.x, y: sprite.y,
                scaleX: sprite.scale ? sprite.scale.x : 1,
                scaleY: sprite.scale ? sprite.scale.y : 1
            };
        }
        var o = _origBgState[key];
        sprite.x = o.x + CFG.battleBgOffsetX;
        sprite.y = o.y + CFG.battleBgOffsetY;
        if (sprite.scale) {
            sprite.scale.x = o.scaleX * CFG.battleBgScaleX;
            sprite.scale.y = o.scaleY * CFG.battleBgScaleY;
        }
    }

    var _wsBgInstalled = false;

    function _installBgHooks() {
        if (_wsBgInstalled) return;
        if (typeof Spriteset_Battle === 'undefined') return;
        _wsBgInstalled = true;

        var _origUpdate = Spriteset_Battle.prototype.update;
        Spriteset_Battle.prototype.update = function() {
            _origUpdate.call(this);
            if (!CFG.battleBgFitToScreen) return;
            _applyBgTransform(this._back1Sprite, 'back1');
            _applyBgTransform(this._back2Sprite, 'back2');
        };

        console.log('[Widescreen] battle BG offset/scale installed.');
        console.log('  Use ws.setBattleBgOffset(x, y) and ws.setBattleBgScale(sx, sy) to adjust.');
    }

    if (typeof Spriteset_Battle !== 'undefined') {
        _installBgHooks();
    } else if (typeof Scene_Battle !== 'undefined') {
        var _origSC = Scene_Battle.prototype.create;
        Scene_Battle.prototype.create = function() {
            _installBgHooks();
            _origSC.call(this);
        };
    }

    // Console API
    if (!window.ws) window.ws = {};
    window.ws.setBattleBgOffset = function(x, y) {
        if (x !== undefined) CFG.battleBgOffsetX = Number(x) || 0;
        if (y !== undefined) CFG.battleBgOffsetY = Number(y) || 0;
        console.log('[ws] battleBgOffset: x=' + CFG.battleBgOffsetX + ' y=' + CFG.battleBgOffsetY);
    };
    window.ws.setBattleBgScale = function(sx, sy) {
        if (sx !== undefined) CFG.battleBgScaleX = Number(sx) || 1;
        if (sy !== undefined) CFG.battleBgScaleY = Number(sy) || 1;
        console.log('[ws] battleBgScale: x=' + CFG.battleBgScaleX + ' y=' + CFG.battleBgScaleY);
    };
    window.ws.battleBgStatus = function() {
        console.log('[ws] battleBgOffset: x=' + CFG.battleBgOffsetX + ' y=' + CFG.battleBgOffsetY);
        console.log('[ws] battleBgScale: x=' + CFG.battleBgScaleX + ' y=' + CFG.battleBgScaleY);
        console.log('[ws] battleBgFitToScreen: ' + CFG.battleBgFitToScreen);
    };

    console.log('[Widescreen] battle BG offset/scale module loaded.');
})();


(function() {
    'use strict';

    var CFG = window.WidescreenConfig || {};
    if (CFG.battleUiCenterEnabled === undefined) CFG.battleUiCenterEnabled = true;

    var BASE_W = 640;
    function centerX() { return Math.floor((Graphics.width - BASE_W) / 2); }

    if (typeof Scene_Battle === 'undefined') return;

    var KEYS = ['_statusWindow', '_partyCommandWindow', '_actorCommandWindow',
                '_stressBar', '_logWindow', '_helpWindow',
                '_skillWindow', '_itemWindow'];

    function centerBattleCluster(scene) {
        if (!CFG.battleUiCenterEnabled) return;
        if (!scene || !(scene instanceof Scene_Battle)) return;
        var dx = centerX();
        for (var i = 0; i < KEYS.length; i++) {
            var obj = scene[KEYS[i]];
            if (!obj) continue;
            if (obj._wsClusterBaseX === undefined) obj._wsClusterBaseX = obj.x;
            var targetX = obj._wsClusterBaseX + dx;
            if (obj.x !== targetX) obj.x = targetX;
        }
    }

    var _wsCC_start = Scene_Battle.prototype.start;
    Scene_Battle.prototype.start = function() {
        _wsCC_start.apply(this, arguments);
        centerBattleCluster(this);
    };

    var _wsCC_update = Scene_Battle.prototype.update;
    Scene_Battle.prototype.update = function() {
        _wsCC_update.apply(this, arguments);
        centerBattleCluster(this);
    };

    if (typeof Object_Movement !== 'undefined') {
        Scene_Battle.prototype.showPartyCommand = function() {
            var duration = 15;
            var obj, data;
            obj = this._stressBar;
            if (obj) { data = { obj: obj, properties: ['y'], from: { y: obj.y },
                to: { y: Graphics.height - 140 }, durations: { y: duration },
                easing: Object_Movement.easeOutCirc }; this.move.startMove(data); }
            obj = this._partyCommandWindow;
            if (obj) { data = { obj: obj, properties: ['y'], from: { y: obj.y },
                to: { y: Graphics.height - 92 }, durations: { y: duration },
                easing: Object_Movement.easeOutCirc }; this.move.startMove(data); }
            obj = this._actorCommandWindow;
            if (obj) { data = { obj: obj, properties: ['y'], from: { y: obj.y },
                to: { y: Graphics.height - 92 }, durations: { y: duration },
                easing: Object_Movement.easeOutCirc }; this.move.startMove(data); }
        };
    }

    function ensureWs() { if (!window.ws) window.ws = {}; return window.ws; }
    ensureWs().diagBattleCluster = function() {
        var s = SceneManager._scene;
        if (!(s instanceof Scene_Battle)) { console.log('[ws] not in battle'); return; }
        console.log('[ws] === battle cluster center (X-only) ===');
        console.log('  enabled: ' + CFG.battleUiCenterEnabled + ', shiftX: ' + centerX());
        KEYS.forEach(function(k) {
            var o = s[k];
            if (o) console.log('  ' + k + ' x=' + Math.round(o.x) +
                ' (base ' + (o._wsClusterBaseX !== undefined ? o._wsClusterBaseX : '?') + ')' +
                (o.visible === false ? ' HIDDEN' : ''));
        });
    };

    ensureWs().listBattleElements = function() {
        var s = SceneManager._scene;
        if (!(s instanceof Scene_Battle)) { console.log('[ws] not in battle'); return; }
        function worldPos(o) {
            var x = 0, y = 0, n = o;
            while (n) { x += (n.x || 0); y += (n.y || 0); if (n === s) break; n = n.parent; }
            return { x: Math.round(x), y: Math.round(y) };
        }
        function report(name, o) {
            if (!o) return;
            var vis = (o.visible === false) ? ' HIDDEN' : '';
            var op = (o.opacity !== undefined && o.opacity < 255) ? (' op=' + o.opacity) : '';
            var wp = worldPos(o);
            var w = (o.width !== undefined) ? o.width : (o.bitmap ? o.bitmap.width : '?');
            var h = (o.height !== undefined) ? o.height : (o.bitmap ? o.bitmap.height : '?');
            console.log('  ' + name + ': screen(' + wp.x + ',' + wp.y + ') local(' +
                Math.round(o.x || 0) + ',' + Math.round(o.y || 0) + ') ' + w + 'x' + h + vis + op);
        }
        console.log('[ws] === battle elements (screen = on-canvas px) ===');
        console.log('  Graphics ' + Graphics.width + 'x' + Graphics.height);

        ['_statusWindow','_partyCommandWindow','_actorCommandWindow','_stressBar',
         '_helpWindow','_logWindow','_faceWindowsContainer','_actorWindow','_enemyWindow',
         '_skillWindow','_itemWindow','_scrollTextWindow','_lowHpOverlay'].forEach(function(k){
            if (k in s) report(k, s[k]);
        });

        if (s._windowLayer && s._windowLayer.children) {
            console.log('  --- windowLayer children ---');
            s._windowLayer.children.forEach(function(c, i) {
                report('winLayer[' + i + '] ' + (c.constructor ? c.constructor.name : '?'), c);
            });
        }
    };

    console.log('[Widescreen] battle cluster centering loaded (status + commands + stress, X-only). ws.diagBattleCluster() / ws.listBattleElements() to inspect.');
})();

(function() {
    'use strict';

    var CFG = window.WidescreenConfig || {};
    if (CFG.battleUiCenterEnabled === undefined) CFG.battleUiCenterEnabled = true;
    if (CFG.battleFaceInset === undefined) CFG.battleFaceInset = 0.4;

    if (typeof Scene_Battle === 'undefined') return;

    var FACE_W = 114;
    var VANILLA_LEFT_X  = 174;
    var VANILLA_RIGHT_X = 352;
    var VANILLA_GAP     = VANILLA_RIGHT_X - VANILLA_LEFT_X;   // 178
    var VANILLA_PAIR_W  = (VANILLA_RIGHT_X + FACE_W) - VANILLA_LEFT_X; // 466-174 = 292

    function clampInset(v) {
        v = Number(v);
        if (!isFinite(v)) v = 0;
        if (v < 0) v = 0;
        if (v > 1) v = 1;
        return v;
    }

    function centeredColumnX(col /* 0=left,1=right */) {
        var leftX = Math.floor((Graphics.width - VANILLA_PAIR_W) / 2);
        return (col === 0) ? leftX : leftX + VANILLA_GAP;
    }

    function applyFaceInset(scene) {
        if (!CFG.battleUiCenterEnabled) return;
        if (!scene || !(scene instanceof Scene_Battle)) return;
        var faces = scene._faceWindows;
        if (!faces || !faces.length) return;
        var t = clampInset(CFG.battleFaceInset);

        for (var i = 0; i < faces.length; i++) {
            var w = faces[i];
            if (!w) continue;

            if (typeof w.actor === 'function' && !w.actor()) continue;
            if (!w._homePosition) continue;

            if (w._wsFaceNativeHomeX === undefined) {
                w._wsFaceNativeHomeX = w._homePosition.x;
            }
            var nativeX = w._wsFaceNativeHomeX;
            var col = i % 2;               // even index = left column, odd = right
            var targetX = centeredColumnX(col);
            var finalX = Math.round(nativeX + t * (targetX - nativeX));

            w._homePosition.x = finalX;
            w.x = finalX;
        }
    }

    var _wsFI_start = Scene_Battle.prototype.start;
    Scene_Battle.prototype.start = function() {
        _wsFI_start.apply(this, arguments);
        applyFaceInset(this);
    };

    var _wsFI_update = Scene_Battle.prototype.update;
    Scene_Battle.prototype.update = function() {
        _wsFI_update.apply(this, arguments);
        if (!CFG.battleUiCenterEnabled) return;
        var faces = this._faceWindows;
        if (!faces) return;
        var t = clampInset(CFG.battleFaceInset);
        for (var i = 0; i < faces.length; i++) {
            var w = faces[i];
            if (!w || !w._homePosition) continue;
            if (typeof w.actor === 'function' && !w.actor()) continue;
            if (w._wsFaceNativeHomeX === undefined) w._wsFaceNativeHomeX = w._homePosition.x;
            var finalX = Math.round(w._wsFaceNativeHomeX + t * (centeredColumnX(i % 2) - w._wsFaceNativeHomeX));
            if (w._homePosition.x !== finalX) w._homePosition.x = finalX;
        }
    };

    function ensureWs() { if (!window.ws) window.ws = {}; return window.ws; }

    ensureWs().setFaceInset = function(v) {
        if (v === undefined) { console.log('[ws] battleFaceInset: ' + CFG.battleFaceInset); return; }
        CFG.battleFaceInset = clampInset(v);
        var scene = SceneManager._scene;
        if (scene instanceof Scene_Battle) applyFaceInset(scene);
        console.log('[ws] battleFaceInset set to ' + CFG.battleFaceInset +
                    ' (0=edges, 1=vanilla-spacing centered)' +
                    (scene instanceof Scene_Battle ? ' — applied live' : ' — next battle'));
    };

    ensureWs().diagFaces = function() {
        var s = SceneManager._scene;
        if (!(s instanceof Scene_Battle) || !s._faceWindows) { console.log('[ws] not in battle'); return; }
        console.log('[ws] === face portraits (inset=' + CFG.battleFaceInset + ', canvas ' + Graphics.width + ') ===');
        s._faceWindows.forEach(function(w, i) {
            if (!w) { console.log('  [' + i + '] null'); return; }
            var hasActor = (typeof w.actor === 'function') ? !!w.actor() : '?';
            console.log('  [' + i + '] col=' + (i % 2 === 0 ? 'L' : 'R') +
                ' actor=' + hasActor +
                ' native=' + (w._wsFaceNativeHomeX !== undefined ? w._wsFaceNativeHomeX : '?') +
                ' home=' + (w._homePosition ? Math.round(w._homePosition.x) : '?') +
                ' cur=' + Math.round(w.x) +
                ' target=' + centeredColumnX(i % 2));
        });
    };

    console.log('[Widescreen] face portrait centering loaded (inset=' + CFG.battleFaceInset + '). ws.setFaceInset(0..1), ws.diagFaces().');
})();
