// =============================================================================
// OMORI WIDESCREEN PLUGIN — CONFIG
// =============================================================================

window.WidescreenConfig = {
    // Canvas sizing: 'small' (854x480, optimized), 'medium', 'large', 'custom'
    mode: 'small',
    customWidth: 1280,
    customHeight: 720,
    saveLoadLayout: 'auto',

    // Screen Bars & Toggles
    pillarboxEnabled: true,
    enableForceSmallOverride: true,
    enableForceCenterOverride: true,
    enableFogOfWarOverride: true,
    softEdgeFadeWidth: 16,

    // Cinematic bar transitions
    barCurtainEnabled: true,
    barCurtainDuration: 48,
    barCurtainEdgeWidth: 40,
    barCurtainEdgeMaxWidth: 120,
    barFadeMirrorEnabled: true,

    // Dialogue Window Settings
    messageBoxMode: 'vanilla',      // 'vanilla' (640px), 'extended', 'full'
    choiceBoxMode: 'vanilla',       // 'vanilla', 'follow', 'opposite'
    choiceTextAlign: 'auto',        // 'auto', 'left', 'center', 'right'
    choiceGrowUpward: 'auto',       // Flips menu above box if space is tight
    choiceGrowUpwardMinTopGap: 8,
    
    // Choice Cursor Positioning
    choiceCursorPosition: 'vanilla', // 'vanilla', 'hugText', 'mirror'
    choiceCursorTextGap: 6,
    choiceCursorFlip: 'auto',

    // Speaker Nameplate & Portrait Layout (Experimental)
    nameBoxMode: 'faceTop',         // Sits centered directly above the portrait
    nameBoxFaceTopGap: 2,
    nameBoxFaceTopTextPadding: 3,
    nameBoxFaceTopHeightTrim: 0,
    nameBoxFaceTopTextNudge: -1,
    faceBoxMode: 'vanilla',

    // Cluster Centering Controls
    faceAnchorToMessageBox: true,
    faceAnchorOffsetX: 143,
    faceAnchorOffsetY: -1,
    faceAnchorMirror: true,
    faceAnchorCenterCluster: true,
    faceAnchorDynamicCenter: true,

    titleHintsRightPadding: 2,
    ghostObjectMapIds: [87],        // Fixes culling

    // Widescreen Edge Extrusion for 4:3 Fullscreen Pictures
    pictureEdgeExtrusionEnabled: true,
    pictureEdgeExtrusionMapIds: [87],
    pictureEdgeExtrusionSampleDepth: 1,

    // Event Drop Physics / Animation
    eventDropAnimEnabled: true,
    eventDropAnimAutoSnap: true,
    eventDropAnimMapIds: [87],
    eventDropAnimAutoSnapMinDistance: 3,
    eventDropAnimHeight: 6,
    eventDropAnimDuration: 30,

    // Landing Impact & Bounce
    eventDropAnimBounceEnabled: true,
    eventDropAnimBounceHeight: 6,
    eventDropAnimBounceDuration: 8,
    eventDropAnimBounceCount: 2,
    eventDropAnimBounceDecay: 0.4,

    // Bounce Rotation Settings
    eventDropAnimSpinEnabled: true,
    eventDropAnimSpinTurns: 1,
    eventDropAnimSpinMode: 'clatter', // 'clatter' (alternating tilt), 'spin', 'none'
    eventDropAnimClatterAngleDeg: 30,
    eventDropAnimClatterDecay: 0.6,

    // Engine Drift Prevention
    eventDropAnimSettleEnabled: true,
    eventDropAnimSettleFrames: 8,
    eventDropAnimAutoPinAfterLanding: true,
    eventDropAnimAutoPinUnpinDistance: 0,
    eventDropPins: {},

    // Visual & Shadow Scaling
    eventDropAnimShadowEnabled: true,
    eventDropAnimFadeInEnabled: true,
    eventDropAnimFadeInDelayPct: 0,
    eventDropAnimFadeInFinishPct: 0.6,
    eventDropAnimLandShakeEnabled: false,
    eventDropAnimLandShakePower: 2,
    eventDropAnimLandShakeDuration: 5,

    // Audio Impact Sync
    eventDropAnimSyncLandSeEnabled: true,
    eventDropAnimSyncLandSeNames: ['drop', 'thud', 'fall', 'land', 'knife', 'page'],
    eventDropAnimSyncLandSeLookbackFrames: 90,
    eventDropAnimSyncLandSeSuppressEarly: true,
    eventDropAnimSyncLandSeOffsetFrames: 4,
    eventDropAnimSyncLandSeDebug: false,

    // Scripted Dialogue
    messageTextOverrides: {
        '01_map_whitespace.message_19': 'Seems like something is falling.'
    },

    // Skill / Equip Menu Layout Fixes
    menuFixHelpWindowWidth: true,
    menuHelpWindowYOffset: -22,
    menuHelpWindowPlateGapPx: 4,
    menuEquipBubblesYOffset: 0,
    menuFixEquipStatsPanelY: true,
    menuStatsPanelHelpGapPx: 4,
    menuHelpWindowWidthMode: 'vanilla',
    menuHelpWindowFullModeMarginPx: 90,

    // Battle UI Constraints
    battleUiCenterEnabled: true,   // Locks combat UI to a 4:3 safe zone
    battleFaceInset: 0.4,           // Pulls portraits inward from edges
    battleBgFitToScreen: true,      // Adjust battle backgrounds

    // Battle background manual offsets (applied per-frame)
    battleBgOffsetX: 0,            // Shift BG left(-) or right(+)
    battleBgOffsetY: 0,            // Shift BG up(-) or down(+)
    battleBgScaleX: 1.0,           // Horizontal scale multiplier (1.0 = no change)
    battleBgScaleY: 1.0,           // Vertical scale multiplier (1.0 = no change)

    mapOverrides: {},
    forcePillarboxMapIds: [],
    forceWidescreenMapIds: [],

    // Visual Guides
    debug: {
        enableGuides: true,
        showCanvasBounds: true,
        showSafeArea: true,
        showCrosshair: true,
        showBarRegions: true,
        showMapBounds: true,
        showWindowAnchors: true,
        showPictureInfo: true,
        showDecorationMarkers: true,
        showInfoPanel: true,
        infoPanelX: 8,
        infoPanelY: 8,
        infoPanelFontSize: 13,
        infoPanelColor: 'rgba(255, 255, 255, 0.85)',
        infoPanelBgColor: 'rgba(0, 0, 0, 0.55)',
        canvasBoundsColor: 'rgba(255, 255, 0, 0.5)',
        safeAreaColor: 'rgba(0, 255, 0, 0.35)',
        crosshairColor: 'rgba(255, 0, 0, 0.6)',
        crosshairSize: 30,
        barRegionColor: 'rgba(255, 0, 255, 0.2)',
        mapBoundsColor: 'rgba(0, 128, 255, 0.4)',
        windowAnchorColor: 'rgba(255, 128, 0, 0.7)',
        windowAnchorSize: 6,
        pictureInfoColor: 'rgba(255, 255, 255, 0.9)',
        pictureInfoBgColor: 'rgba(0, 0, 0, 0.6)',
        decorationMarkerColor: 'rgba(0, 255, 255, 0.5)',
        lineWidth: 2
    }
};

console.log('[WidescreenConfig] Properties initialized.');