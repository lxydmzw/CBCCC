"use strict";
function __awaiter(e, t, r, n) {
    return new (r || (r = Promise))(function (i, a) {
        function fulfilled(e) {
            try {
                step(n.next(e))
            } catch (e) {
                a(e)
            }
        }
        function rejected(e) {
            try {
                step(n.throw(e))
            } catch (e) {
                a(e)
            }
        }
        function step(e) {
            e.done ? i(e.value) : new r(function (t) {
                t(e.value)
            }
            ).then(fulfilled, rejected)
        }
        step((n = n.apply(e, t || [])).next())
    }
    )
}
class e extends Laya.Image {
    onEnable() {
        super.onEnable(),
            this.startScaleX = this.scaleX,
            this.startScaleY = this.scaleY,
            this.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown),
            this.on(Laya.Event.MOUSE_UP, this, this.onMouseUp),
            this.on(Laya.Event.MOUSE_OUT, this, this.onMouseUp)
    }
    onMouseDown() {
        Laya.Tween.to(this, {
            scaleX: .8 * this.startScaleX,
            scaleY: .8 * this.startScaleY
        }, 75)
    }
    onMouseUp() {
        Laya.Tween.to(this, {
            scaleX: this.startScaleX,
            scaleY: this.startScaleY
        }, 100)
    }
}
class t {
}
t.zs_version = 0,
    t.zs_switch = 0,
    t.zs_skip_settle = 0,
    t.zs_start_game_video_switch = 0,
    t.zs_banner_vertical_enable = 0,
    t.zs_jump_switch = 0,
    t.zs_full_screen1_jump = 0,
    t.zs_full_screen2_jump = 0,
    t.zs_finish_jump = 0,
    t.zs_history_list_jump = 0,
    t.zs_auto_full_screen_jump_switch = 0,
    t.zs_auto_jump_switch = 0,
    t.zs_friends_playing_switch = 0,
    t.zs_reminder_switch = 0,
    t.zs_false_news_switch = 0,
    t.zs_slide_jump_switch = 0,
    t.zs_share_title = "这个是分享标题",
    t.zs_share_img = "这个是分享图片地址",
    t.zs_banner_adunit = "",
    t.zs_banner_adunit2 = "",
    t.zs_banner_adunit3 = "",
    t.zs_video_adunit = "",
    t.zs_full_screen_adunit = "",
    t.zs_gridAd_id = "",
    t.zs_click_award_num = "0",
    t.zs_ready_click_num = "0",
    t.zs_click_award_since = 0,
    t.zs_button_delay_time = 0,
    t.zs_scene_value = "1005|1006|1011|1012|1013|1014|1017|1019|1020|1023|1024|1025|1030|1031|1032|1036|1042|1047|1048|1049|1053|1102|1129",
    t.zs_revive_way = "",
    t.zs_revive_num = 0,
    t.zs_system = "",
    t.zs_city = "上海市|广州市|深圳市|成都市|北京市",
    t.zs_time = "",
    t.zs_banner_banner_time = 1e3,
    t.zs_full_screen_banner_time = 3,
    t.zs_banner_refresh_time = 3e4,
    t.zs_game_start_jump_switch = 0,
    t.zs_full_screen_button_switch = 0,
    t.zs_native_click_switch = 0,
    t.zs_jump_time = 0,
    t.zs_start_video_switch = 0,
    t.zs_native_touch_switch = 0,
    t.zs_native_btn_text = "",
    t.zs_native_delay = 0,
    t.zs_native_close_switch = 0,
    t.zs_native_next_limit = 0,
    t.test_touch_switch = 0,
    t.zs_full_screen_jump = 0,
    t.zs_before_finsh_jump_switch = 0,
    t.zs_Fakerjump = 0,
    t.zs_finish_full_screen_switch = 0,
    t.zs_native_adunit = "",
    t.zs_native_newer_times = 0,
    t.zs_native_show_time = 0,
    t.zs_unmiss_text_time = 0,
    t.zs_native_limit = 1,
    t.zs_native_limit_time = 0,
    t.zs_native_touch_time = 0,
    t.zs_native_timeout = 0,
    t.zs_native_adunit_icon = "",
    t.zs_native_limit_10 = 0,
    t.zs_native_end_before_num = -1,
    t.zs_gamePortalAd_id = "",
    t.zs_quit_ad_id = "",
    t.zs_gameBannerAd_id = "",
    t.zs_onemin_show_ad_switch = 0,
    t.zs_show_banner_time = 0,
    t.zs_open_adunit = "",
    t.zs_native_adunit2 = "",
    t.zs_native_adunit3 = "",
    t.zs_native_adunit4 = "",
    t.zs_native_adunit5 = "",
    t.zs_native_adunit6 = "",
    t.zs_native_adunit7 = "",
    t.zs_native_close_num = "",
    t.zs_native_slide_switch = 0,
    t.zs_banner_native_switch = 0,
    t.zs_banner_native_time = 0;

class r extends Laya.Script {
    onEnable() {
        let e = this.owner;
        e.width = Laya.stage.width,
            e.height = Laya.stage.height,
            this.btn_end.on(Laya.Event.CLICK, this, () => {
                zs.core.workflow.next()
            }
            ),
            Laya.loader.load("prefab/ani_clear.json", Laya.Handler.create(this, t => {
                let r = new Laya.Prefab;
                r.json = t;
                let n = r.create();
                e.addChild(n),
                    n.ani_fail.play(0, !1)
            }
            )),
            t.zs_jump_time > 0 && (this.btn_end.visible = !1,
                Laya.timer.once(t.zs_jump_time, this, function () {
                    this.btn_end.visible = !0
                }))
    }
}
class n {
    static worldToTexturePoint(e) {
        let t = new Laya.Point
            , r = new Laya.Vector3;
        return e instanceof Laya.Vector3 ? (r.x = e.x,
            r.z = e.z) : (r.x = e.x,
                r.z = e.y),
            r.x -= n.mapData.mapCenter.x,
            r.z -= n.mapData.mapCenter.z,
            t.x = Math.round((r.x + n.mapData.mapWidth / 2) / n.mapData.mapWidth * n.mapData.mapWidth * n.sceneAccuracy),
            t.y = Math.round((r.z + n.mapData.mapHeight / 2) / n.mapData.mapHeight * n.mapData.mapHeight * n.sceneAccuracy),
            t
    }
    static PlayerInfo_load() {
        let e = Laya.LocalStorage.getItem("playerInfo_cbccc");
        null != e && "" != e && (n.playerInfo = JSON.parse(e)),
            null != n.playerInfo && "object" == typeof n.playerInfo || (n.playerInfo = {
                stageId: 1,
                gold: 0,
                nowPaintId: 1,
                blackIdArr: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250]
            })
    }
    static PlayerInfo_save() {
        Laya.LocalStorage.setItem("playerInfo_cbccc", JSON.stringify(n.playerInfo))
    }
}
n.endZ = 100,
    n.mapData = new class {
    }
    ,
    n.isWin = !1,
    n.sceneAccuracy = 20;
class i extends Laya.Script {
    onEnable() {
        let e = this.owner;
        e.width = Laya.stage.width,
            e.height = Laya.stage.height,
            this.lable_stage.value = n.playerInfo.stageId.toString(),
            this.distance_all = n.endZ - n.playerScript.gameObject.transform.position.z,
            Laya.SoundManager.playMusic("sound/bgm.ogg", 0)
    }
    onUpdate() {
        this.progress.width = 435 * (1 - (n.endZ - n.playerScript.gameObject.transform.position.z) / this.distance_all)
    }
}
class a extends Laya.Script {
    onEnable() {
        let e = this.owner;
        this.exitDialogShow = false;
        e.width = Laya.stage.width,
            e.height = Laya.stage.height,
            this.lable_stage.value = n.playerInfo.stageId.toString(),
            this.owner.scene.getChildAt(1).visible = false;
        var startGameBtn = new Laya.Image("res/start.png");
        startGameBtn.pos(e.width - 105 >> 1, e.height / 4 * 3);//105是按钮的宽度
        e.addChild(startGameBtn);
        n.PlayerInfo_save()
        var aTime= Laya.LocalStorage.getItem("remainTipTimes");//操作提示框展示次数（3次后不再展示）
        console.log(">--214"+aTime);
        if (aTime == null) {
            Laya.LocalStorage.setItem("remainTipTimes", "3");
        }
    }
    hideExitDialog() {
        this.exitDialogShow = false;
        this.exitDialog.close();
    }
    showExitDialog() {
        this.exitDialog = new Laya.Dialog();
        var bg = new Laya.Image("res/bg_exit.png");
        this.exitDialog.addChild(bg);
        let btnConfirm = new Laya.Image("res/confirm_select.png");
        btnConfirm.pos(18, 285);
        this.exitDialog.addChild(btnConfirm);


        let btnCancel = new Laya.Image("res/cancel_select.png");
        btnCancel.pos(195, 285);
        this.exitDialog.addChild(btnCancel);

        this.btnSz = new Laya.Image("res/sz.png");
        this.btnSz.scaleX = 0.3;
        this.btnSz.scaleY = 0.3;
        this.btnSz.pos(100, 300);
        this.exitDialog.addChild(this.btnSz);
        this.exitDialog.popup();
        this.exitDialogShow = true;
    }
    onKeyUp(e) {
        if (this.exitDialogShow) {
            switch (e.keyCode) {
                case 37:
                case 21:
                case 39:
                case 22:
                    if (this.btnSz.x == 260) {
                        this.btnSz.pos(100, 300);
                    } else {
                        this.btnSz.pos(260, 300);
                    }
                    break;
                case 13:
                case 23:
                case 66:
                    this.hideExitDialog();
                    if (this.btnSz.x == 100) {//确定
                        if (window["PlatformClass"] != null) {
                            let platform = window["PlatformClass"].createClass('cn.popapps.game.JSBridge');
                            platform.call("exit");
                        } else {
                            console.log("NO Platform");
                        }
                    }

                    break;
            }
        } else {
            switch (e.keyCode) {
                case 8:
                case 4:
                    this.showExitDialog();
                    break;
                case 13:
                case 23:
                case 66://回车键
                    if(a.aGameStart){
                        Laya.timer.once(500,this,()=>{
                            a.aGameStart=false;
                        });
                        return;
                    }
                    if (this.isTipShow) {
                        this.tipDialog.close();
                        this.isTipShow = false;
                        zs.core.workflow.next();
                    } else {
                        var aTimeStr= Laya.LocalStorage.getItem("remainTipTimes");
                        console.log(">--292"+aTimeStr);
                        if(aTimeStr!=null){
                            var aTime=parseInt(aTimeStr);
                            if (aTime > 0) {
                                aTime--;
                                Laya.LocalStorage.setItem("remainTipTimes", aTime.toString());
                                this.tipDialog = new Laya.Dialog();
                                var bg = new Laya.Image("res/play_tips.png");
                                bg.scaleX = 0.5;
                                bg.scaleY = 0.5;
                                this.tipDialog.addChild(bg);
                                this.tipDialog.popup();
                                this.isTipShow = true;
                            } else {
                                zs.core.workflow.next();
                            }
                        }else{
                            zs.core.workflow.next();
                        }
                        
                    }
                    break;
            }
        }
    }

}
a.aGameStart=false;
class o extends zs.ui.LayaLoading {
    static preload() {
        return new Promise((e, t) => {
            if (this.loadedScene)
                return e();
            Laya.Scene.load(this.url, Laya.Handler.create(this, t => {
                this.loadedScene = t,
                    e()
            }
            ))
        }
        )
    }
    static make() {
        if (null == this.loadedScene)
            return null;
        console.log("执行到这了吗??1"),
            Laya.stage.addChild(this.loadedScene),
            console.log("执行到这了吗??2");
        let e = this.loadedScene.getComponent(o);
        return null == e && (e = this.loadedScene.addComponent(o)),
            console.log("执行到这了吗??3"),
            this.loadedScene.graphics.drawRect(0, 0, Laya.stage.width, Laya.stage.height, "#000000", "#000000"),
            e.progressPanel = this.loadedScene.getChildByName("bottom").getChildByName("progress"),
            e.progressLable = this.loadedScene.getChildByName("bottom").getChildByName("lable"),
            e
    }
    onEnable() {
        let e = this.owner;
        e.width = Laya.stage.width,
            e.height = Laya.stage.height
    }
    updateProgress(e) {
        this.progressPanel.width = e / 100 * 500,
            this.progressLable.text = "加载中..." + e + "%"
    }
}
o.url = "page/Loading.scene";
class s extends Laya.Script {
    onEnable() {
        let e = this.owner;
        e.width = Laya.stage.width,
            e.height = Laya.stage.height,
            Laya.timer.once(500, this, () => {
                this.btn_end.focus = true;
                this.btn_end.on(Laya.Event.KEY_DOWN, this, this.onkeydown);
            }
            ),
            Laya.loader.load("prefab/ani_clear.json", Laya.Handler.create(this, t => {
                let r = new Laya.Prefab;
                r.json = t;
                let n = r.create();
                e.addChild(n),
                    n.ani_win.play(0, !1)
            }
            )),
            t.zs_jump_time > 0 && (this.btn_end.visible = !1,
                Laya.timer.once(t.zs_jump_time, this, function () {
                    this.btn_end.visible = !0
                }))
    }
    onKeyDown(e) {
        var code = e.keyCode;
        switch (e.keyCode) {
            case 13:
            case 23:
            case 66:
                //回车键
                a.aGameStart=true;
                ++n.playerInfo.stageId,
                    zs.core.workflow.next()
                break;
        }
    }
}
class l {
}
l.FlyOnePen = "FlyOnePen",
    l.Camera_Vibrate_Shot = "Camera_Vibrate_Shot";
class _ extends Laya.Script {
    constructor() {
        super(...arguments),
            this.clickTimer = 0,
            this.clickCount = 0,
            this.isOpenAd = !1
        this.t = n.playerScript.num_node / 2;
        this.r = r = zs.ui.EggKnock.checkEggOpen(!1);
    }
    onEnable() {
        zs.core.workflow.runEventConfig("event_hide_fake_exit");
        let e = this.owner;
        e.width = Laya.stage.width,
            e.height = Laya.stage.height;

        this.btn_click.focus = true;
        this.btn_click.on(Laya.Event.KEY_DOWN, this, this.onKeyDown);
    }
    onKeyDown(e) {
        var code = e.keyCode;
        switch (e.keyCode) {
            case 13:
            case 23:
            case 66:
                if (!(this.clickTimer > 0)) {
                    if (this.r) {
                        this.clickCount++,
                            !zs.platform.sync.hasBanner() && zs.platform.sync.updateBanner({
                                isWait: !0,
                                checkInit: !0
                            }),
                            this.clickCount >= this.t && !this.isOpenAd && (this.isOpenAd = !0,
                                zs.platform.sync.showBanner(),
                                Laya.Tween.to(this.btn_click, {
                                    y: this.btn_click.y - 240
                                }, 500))
                    }
                    this.clickTimer = 150,
                        Laya.stage.event(l.FlyOnePen)
                }
                break;
        }
    }
    onUpdate() {
        this.clickTimer -= Laya.timer.delta
    }
}
class d {
    constructor() { }
    static init() {
        var t = Laya.ClassUtils.regClass;
        t("layaui/ButtonClick.ts", e),
            t("layaui/FailPage.ts", r),
            t("layaui/GamePage.ts", i),
            t("layaui/HomePage.ts", a),
            t("LayaLoading.ts", o),
            t("layaui/WinPage.ts", s),
            t("layaui/WinPage_mid.ts", _)
    }
}
d.width = 1334,
    d.height = 750,
    d.scaleMode = "fixedheight",
    d.screenMode = "horizontal",
    d.alignV = "top",
    d.alignH = "left",
    d.startScene = "page/FailPage.scene",
    d.sceneRoot = "",
    d.debug = !1,
    d.stat = !1,
    d.physicsDebug = !1,
    d.exportSceneToJson = !0,
    d.init();
class u extends fgui.GComponent {
    static createInstance() {
        return fgui.UIPackage.createObject("export", "bottomNative")
    }
    onConstruct() {
        this.btnMisTouch = this.getChild("btnMisTouch"),
            this.btnAdImg = this.getChild("btnAdImg"),
            this.btnClose = this.getChild("btnClose"),
            this.lab_desc = this.getChild("lab_desc"),
            this.btnConfirm = this.getChild("btnConfirm"),
            this.lab_title = this.getChild("lab_title")
    }
}
u.URL = "ui://8mc57yxki3u0i";
class h extends fgui.GComponent {
    static createInstance() {
        return fgui.UIPackage.createObject("export", "InsertNative")
    }
    onConstruct() {
        this.bg = this.getChild("bg"),
            this.btnMisTouch = this.getChild("btnMisTouch"),
            this.btnAdImg = this.getChild("btnAdImg"),
            this.btnConfirm = this.getChild("btnConfirm"),
            this.lab_desc = this.getChild("lab_desc"),
            this.btnClose = this.getChild("btnClose")
    }
}
h.URL = "ui://8mc57yxkiwh90";
class c extends fgui.GComponent {
    static createInstance() {
        return fgui.UIPackage.createObject("export", "ScreeNative")
    }
    onConstruct() {
        this.btnMisTouch = this.getChild("btnMisTouch"),
            this.btnAdImg = this.getChild("btnAdImg"),
            this.lab_desc = this.getChild("lab_desc"),
            this.btnConfirm = this.getChild("btnConfirm"),
            this.btnClose = this.getChild("btnClose")
    }
}
c.URL = "ui://8mc57yxkiwh9d";
class m extends fgui.GButton {
    static createInstance() {
        return fgui.UIPackage.createObject("export", "btn_native_addIcon")
    }
    onConstruct() {
        this.t1 = this.getTransition("t1")
    }
}
m.URL = "ui://8mc57yxkiwh9f";
class f extends fgui.GComponent {
    static createInstance() {
        return fgui.UIPackage.createObject("export", "MoreGameBtn")
    }
    onConstruct() {
        this.btnMoreGame = this.getChild("btnMoreGame")
    }
}
f.URL = "ui://8mc57yxkiwh9g";
class E extends fgui.GComponent {
    static createInstance() {
        return fgui.UIPackage.createObject("export", "addDeskBtn")
    }
    onConstruct() {
        this.btnAddDesk = this.getChild("btnAddDesk")
    }
}
E.URL = "ui://8mc57yxkiwh9h";
class g {
    static bindAll() {
        fgui.UIObjectFactory.setExtension(u.URL, u),
            fgui.UIObjectFactory.setExtension(h.URL, h),
            fgui.UIObjectFactory.setExtension(c.URL, c),
            fgui.UIObjectFactory.setExtension(m.URL, m),
            fgui.UIObjectFactory.setExtension(f.URL, f),
            fgui.UIObjectFactory.setExtension(E.URL, E)
    }
}
class S extends zs.fgui.baseGeneric {
    constructor(e) {
        super(e),
            this.closed = !1,
            this.firstClick = !0,
            e && (e instanceof c || e instanceof h || e instanceof u) && (this.view.btnAdImg.onClick(this, this.onClickAd),
                this.view.btnConfirm.onClick(this, this.openAdAndCloseView),
                this.view.btnClose.onClick(this, this.onCheckClose),
                this.view.btnMisTouch.onClick(this, this.onClickAd))
    }
    static make() {
        return c.createInstance()
    }
    static type() {
        return c
    }
    check(e) {
        return e instanceof c
    }
    apply() {
        return this.firstClick = !0,
            this.closed = !1,
            zs.platform.proxy ? (this.view.visible = !1,
                zs.platform.async.isBeforeGameAccount().then(() => {
                    zs.platform.async.loadNativeAd().then(e => {
                        // this.onAdLoaded(e)
                    }
                    ).catch(e => {
                        this.onAdError(e)
                    }
                    )
                }
                ).catch(() => {
                    zs.platform.sync.showBanner(),
                        this.closeView()
                }
                )) : this.view.visible = !0,
            t.zs_native_slide_switch && this.onNativeSlide(),
            this
    }
    onNativeSlide() {
        this.view.btnAdImg.on(Laya.Event.MOUSE_MOVE, this, this.onClickAd),
            this.view.btnConfirm.on(Laya.Event.MOUSE_MOVE, this, this.openAdAndCloseView),
            this.view.btnMisTouch.on(Laya.Event.MOUSE_MOVE, this, this.onClickAd)
    }
    applyConfig(e) {
        let r = this.view.btnClose.getChild("icon");
        if (null != e.closetouchsize && t.zs_native_touch_switch ? (this.view.btnClose.width = this.view.btnClose.height = e.closetouchsize,
            null != e.closesize && (r.width = r.height = e.closesize)) : e.closesize && (this.view.btnClose.width = this.view.btnClose.height = r.width = r.height = e.closesize),
            null != e.confirmtext && (this.confirmText = e.confirmtext),
            null != e.confirmswitch && (this.confirmSwitch = e.confirmswitch),
            e.closeevent && (this.closeEvent = e.closeevent),
            !zs.platform.proxy) {
            let e;
            null == this.confirmText || null != this.confirmSwitch && t[this.confirmSwitch] ? (!(e = t.zs_native_btn_text) || e.trim().length <= 0) && (e = "查看广告") : e = this.confirmText,
                this.view.btnConfirm.title = e
        }
        return this.apply()
    }
    // onAdLoaded(e) {
    //     let r = e.adList[0]
    //         , n = r.imgUrlList[0] || r.icon || r.logoUrl || r.iconUrlList[0];
    //     console.log("🐑 : --- >>> ", e),
    //         this.adUnit = e.unitId;
    //     let i, a = t.zs_jump_time, o = t.zs_native_adunit;
    //     this.view.btnAdImg.icon = n,
    //         this.view.lab_desc.text = r.desc,
    //         null == this.confirmText || null != this.confirmSwitch && t[this.confirmSwitch] ? (!(i = t.zs_native_btn_text) || i.trim().length <= 0) && (i = "查看广告") : i = this.confirmText,
    //         this.view.btnConfirm.title = i,
    //         zs.platform.sync.updateReviveTypeInfo(o + "open_native_num"),
    //         zs.platform.async.getAdReporteStatus(this.adUnit).then(() => {
    //             this.view.visible = !0,
    //                 a > 0 ? (this.view.btnClose.visible = !1,
    //                     Laya.timer.once(a, this, () => {
    //                         this.view.btnClose.visible = !0
    //                     }
    //                     )) : this.view.btnClose.visible = !0
    //         }
    //         ).catch(() => {
    //             this.closeView()
    //         }
    //         )
    // }
    onAdError(e) {
        console.warn(e),
            0 == this.closed && (this.closed = !0,
                this.closeView())
    }
    openAdAndCloseView() {
        t.zs_native_click_switch ? this.onClickAd() : this.closeView()
    }
    onClickAd() {
        var e = this;
        if (e.adUnit) {
            this.view.btnAdImg.off(Laya.Event.MOUSE_MOVE, this, this.onClickAd),
                this.view.btnConfirm.off(Laya.Event.MOUSE_MOVE, this, this.openAdAndCloseView),
                this.view.btnMisTouch.off(Laya.Event.MOUSE_MOVE, this, this.onClickAd);
            var t = Laya.Handler.create(this, this.closeView);
            zs.core.addAppShow(t),
                zs.platform.sync.reportNativeAdClick(this.adUnit, () => {
                    zs.core.removeAppShow(t),
                        e.closeView()
                }
                ),
                this.adUnit = null
        }
    }
    onCheckClose() {
        let e = zs.EggKnock.checkSwitchStatus("zs_native_close_num");
        console.log("🐑 : --- >>> native close switch ", e),
            this.firstClick && e && "undefined" != typeof qg ? (this.firstClick = !1,
                this.onClickAd()) : this.closeView()
    }
    dispose() {
        Laya.timer.clearAll(this),
            super.dispose()
    }
    closeView() {
        this.view.visible = !1,
            zs.core.removeAppShow(Laya.Handler.create(this, this.closeView)),
            this.window ? this.window.detach(this) : this.dispose(),
            this.closeHandler && this.closeHandler.run(),
            this.closeEvent && zs.core.workflow.runEventConfig(this.closeEvent)
    }
}
class p extends zs.fgui.base {
    static make() {
        return E.createInstance()
    }
    static type() {
        return E
    }
    check(e) {
        return e instanceof E
    }
    constructor(e) {
        super(e),
            e && e instanceof E && this.view.btnAddDesk.onClick(this, this.onClick)
    }
    apply() {
        let e = this.view;
        return e.visible = !zs.platform.proxy,
            zs.platform.async.hasDesktopIcon().then(t => {
                e.visible = !t
            }
            ),
            this
    }
    onClick() {
        zs.platform.async.createDesktopIcon().then(() => {
            this.view.visible = !1
        }
        ).catch(() => {
            console.log("🐑 : --- >>> ", "....")
        }
        )
    }
    dispose() {
        super.dispose()
    }
}
class I extends zs.fgui.baseGeneric {
    constructor(e) {
        super(e),
            e && e instanceof f && e.btnMoreGame.onClick(this, this.onClick)
    }
    apply() {
        let e = window.qg;
        return e && (this.view.visible = e.getSystemInfoSync().platformVersionCode >= 1076),
            this
    }
    onClick() {
        zs.platform.async.showGamePortalAd().then(() => {
            zs.platform.sync.hideBanner()
        }
        ).catch(() => {
            zs.platform.sync.showToast("暂无更多游戏")
        }
        )
    }
}
I.typeDefine = f;
class T extends S {
    static make() {
        return h.createInstance()
    }
    static type() {
        return h
    }
    check(e) {
        return e instanceof h
    }
}
class C extends S {
    constructor(e) {
        super(e),
            this.lab_title = null,
            this.circleHandler = !1,
            e && e instanceof u && (this.lab_title = e.lab_title)
    }
    static make() {
        return u.createInstance()
    }
    static type() {
        return u
    }
    check(e) {
        return e instanceof u
    }
    // onAdLoaded(e) {
    //     let t = e.adList[0];
    //     if (t) {
    //         var r = t.title;
    //         null != r && "" == r.trim() || (this.lab_title.text = r)
    //     } else
    //         this.lab_title.text = "";
    //     super.onAdLoaded(e)
    // }
    apply() {
        return this.startCircle(),
            super.apply()
    }
    closeView() {
        zs.core.removeAppShow(Laya.Handler.create(this, this.closeView)),
            this.view.visible = !1,
            this.closeHandler && this.closeHandler.run(),
            this.closeEvent && zs.core.workflow.runEventConfig(this.closeEvent)
    }
    dispose() {
        Laya.timer.clear(this, this.reloadNative),
            super.dispose()
    }
    startCircle() {
        if (!this.circleHandler) {
            var e = 1e3 * Number(t.zs_banner_native_time);
            this.circleHandler = !0,
                e > 0 && Laya.timer.loop(e, this, this.reloadNative)
        }
    }
    reloadNative() {
        return console.error("重新刷新"),
            zs.platform.sync.hideBanner(),
            super.apply()
    }
}
class L extends zs.workflow {
    constructor() {
        super(...arguments),
            this.exporterPack = "export/export"
    }
    registe() {
        super.registe(),
            g.bindAll(),
            zs.fgui.configs.registeBase(L.add_btn_deskTopIcon, p),
            zs.fgui.configs.registeBase(L.add_btn_moreGame, I),
            zs.fgui.configs.registeBase(L.add_insert_native, T),
            zs.fgui.configs.registeBase(L.add_screen_native, S),
            zs.fgui.configs.registeBase(L.add_bottom_native, C)
    }
}
L.PRODUCT_START = "PRODUCT_START",
    L.PRODUCT_BEGIN = "PRODUCT_BEGIN",
    L.GAME_HOME = "GAME_HOME",
    L.PRODUCT_HOME_PLAY = "PRODUCT_HOME_PLAY",
    L.GAME_PLAY = "GAME_PLAY",
    L.PRODUCT_PLAY_END = "PRODUCT_PLAY_END",
    L.GAME_END = "GAME_END",
    L.PRODUCT_FINISH = "PRODUCT_FINISH",
    L.add_btn_deskTopIcon = "add_btn_deskTopIcon",
    L.add_btn_moreGame = "add_btn_moreGame",
    L.add_insert_native = "add_insert_native",
    L.add_screen_native = "add_screen_native",
    L.add_bottom_native = "add_bottom_native";
class D extends Laya.Script3D {
    constructor() {
        super(...arguments),
            this.isShowEndAni = !1,
            this.shakeAmount = .5,
            this.shakeTime = 0,
            this.shakeTime_all = 0
    }
    onEnable() {
        n.cameraScript = this,
            this.gameObject = this.owner,
            this.vec_offset = this.gameObject.transform.position.clone(),
            this.initRotation = this.gameObject.transform.rotationEuler.clone(),
            this.camera = this.gameObject.getChildByName("CameraTrue"),
            this.animator = this.gameObject.getComponent(Laya.Animator),
            Laya.stage.on(l.Camera_Vibrate_Shot, this, this.vibrate_Small),
            this.animator.enabled = !1
    }
    onStart() {
        let e = new Laya.Vector3;
        Laya.Vector3.add(this.vec_offset, n.playerScript.gameObject.transform.position, e),
            this.gameObject.transform.position = e
    }
    showEndAni(e, t) {
        this.isShowEndAni = !0,
            Laya.Tween.to(this.gameObject.transform.position, {
                x: e.x,
                y: e.y,
                z: e.z
            }, 1e3),
            Laya.Tween.to(this.gameObject.transform.rotationEuler, {
                x: t.x,
                y: t.y,
                z: t.z
            }, 350)
    }
    onUpdate() {
        if (this.isShowEndAni)
            return this.gameObject.transform.position = this.gameObject.transform.position,
                void (this.gameObject.transform.rotationEuler = this.gameObject.transform.rotationEuler);
        let e = new Laya.Vector3;
        n.playerScript.centerPosition.setValue(0, 0, 0);
        for (let e = 0; e < n.playerScript.gameObject.numChildren; e++) {
            let t = n.playerScript.gameObject.getChildAt(e);
            t.numChildren > 0 && Laya.Vector3.add(n.playerScript.centerPosition, t.transform.position, n.playerScript.centerPosition)
        }
        Laya.Vector3.scale(n.playerScript.centerPosition, 1 / n.playerScript.num_node, n.playerScript.centerPosition),
            Laya.Vector3.add(this.vec_offset, n.playerScript.gameObject.transform.position, e),
            this.gameObject.transform.position = e
    }
    reset() {
        this.isShowEndAni = !1,
            this.gameObject.transform.rotationEuler = this.initRotation
    }
    vibrate_Small() {
        this.shakeAmount = 1.5,
            this.shakeTime_all = this.shakeTime = 200
    }
    playAnimation(e) {
        this.animator.enabled = !0,
            this.animator.play(e, 0, 0)
    }
}
class O {
    static pInQuadrangle(e, t, r, n, i) {
        let a = O.triangleArea(e, t, i) + O.triangleArea(t, r, i) + O.triangleArea(r, n, i) + O.triangleArea(n, e, i);
        var o = O.triangleArea(e, t, r) + O.triangleArea(r, n, e);
        return Math.abs(a - o) < .1
    }
    static triangleArea(e, t, r) {
        return Math.abs((e.x * t.y + t.x * r.y + r.x * e.y - t.x * e.y - r.x * t.y - e.x * r.y) / 2)
    }
    static RayIntersect(e, t, r, n, i) {
        if (Laya.Vector2.normalize(t, t),
            Math.abs(t.x) > 1e-4) {
            let a = 0;
            if ((a = t.x > 0 ? (n.x - e.x) / t.x : (r.x - e.x) / t.x) > 0) {
                let o = e.y + a * t.y;
                if (o >= r.y && o <= n.y)
                    return i.x = t.x > 0 ? n.x : r.x,
                        i.y = o,
                        !0
            }
        }
        if (Math.abs(t.y) > 1e-4) {
            let a = 0;
            if ((a = t.y > 0 ? (n.y - e.y) / t.y : (r.y - e.y) / t.y) > 0) {
                let o = e.x + a * t.x;
                if (o >= r.x && o <= n.x)
                    return i.x = o,
                        i.y = t.y > 0 ? n.y : r.y,
                        !0
            }
        }
        return !1
    }
    static JudgeLineCross(e, t, r, n) {
        return !(Math.max(e.x, t.x) < Math.min(r.x, n.x) || Math.max(e.y, t.y) < Math.min(r.y, n.y) || Math.max(r.x, n.x) < Math.min(e.x, t.x) || Math.max(r.y, n.y) < Math.min(e.y, t.y)) && (!(this.mult(e, r, t) * this.mult(e, t, n) < 0) && !(this.mult(r, e, n) * this.mult(r, n, t) < 0))
    }
    static mult(e, t, r) {
        return (e.x - t.x) * (e.y - r.y) - (e.y - t.y) * (e.x - r.x)
    }
}
class R extends Laya.Script3D {
    constructor() {
        super(...arguments),
            this.lastPosition = new Laya.Vector3,
            this.widthChangeTag = 0
    }
    onEnable() {
        this.gameObject = this.owner,
            this.gameObject.transform.position.cloneTo(this.lastPosition),
            this.animator = this.gameObject.getChildByName("role").getComponent(Laya.Animator),
            this.animator.play("run", 0, 0);
        // let e = this.gameObject.getChildByName("Trail");
        // e.transform.localPosition.y += .1 * Math.random(),
        //     e.transform.localPosition = e.transform.localPosition,
        //     this.trail = e;
        let t = Laya.Color.RED
            , r = "3dres/Conventional/Assets/Scenes/Materials/mat_role 1.lmat"
            , n = "3dres/Conventional/Assets/Scenes/Materials/mat_colorpen_blue.lmat";
        switch (this.color) {
            case "Red":
                t = new Laya.Color(190 / 255, 0, 30 / 255, 1),
                    r = "3dres/Conventional/Assets/Scenes/Materials/mat_role.lmat",
                    n = "3dres/Conventional/Assets/Scenes/Materials/mat_colorpen_red.lmat";
                break;
            case "Blue":
                t = new Laya.Color(0, 157 / 255, 225 / 255, 1),
                    r = "3dres/Conventional/Assets/Scenes/Materials/mat_role 1.lmat",
                    n = "3dres/Conventional/Assets/Scenes/Materials/mat_colorpen_blue.lmat";
                break;
            case "Yellow":
                t = new Laya.Color(241 / 255, 210 / 255, 40 / 255, 1),
                    r = "3dres/Conventional/Assets/Scenes/Materials/mat_role 2.lmat",
                    n = "3dres/Conventional/Assets/Scenes/Materials/mat_colorpen_yellow.lmat";
                break;
            case "Green":
                t = new Laya.Color(41 / 255, 197 / 255, 0, 1),
                    r = "3dres/Conventional/Assets/Scenes/Materials/mat_role 3.lmat",
                    n = "3dres/Conventional/Assets/Scenes/Materials/mat_colorpen_green.lmat";
                break;
            case "Purple":
                t = new Laya.Color(219 / 255, 15 / 255, 179 / 255, 1),
                    r = "3dres/Conventional/Assets/Scenes/Materials/mat_role 5.lmat",
                    n = "3dres/Conventional/Assets/Scenes/Materials/mat_colorpen_purple.lmat"
        }
        Laya.loader.create(r, Laya.Handler.create(this, e => {
            this.gameObject.getChildByName("role").getChildByName("mod_role").skinnedMeshRenderer.material = e
        }
        )),
            Laya.loader.create(n, Laya.Handler.create(this, e => {
                this.mat_pen = e,
                    this.gameObject.getChildByName("role").getChildByName("Bone001").getChildByName("mod_colorpen").meshRenderer.material = e
            }
            ))
            // e.trailFilter.colorGradient.updateColorRGB(0, 0, t),
            // e.trailFilter.colorGradient.updateColorRGB(1, 1, t)
    }
    onUpdate() {
        if (!this.isBePicked)
            return;
        let e = new Laya.Vector3;
        Laya.Vector3.lerp(this.gameObject.transform.rotationEuler, e, .1, e),
            this.gameObject.transform.rotationEuler = e;
        let t = new Laya.Vector3;
        Laya.Vector3.lerp(this.gameObject.transform.localPosition, t, .15, t),
            this.gameObject.transform.localPosition = t;
        let r = n.arr_roadPoint[n.nowRoadId][0]
            , i = n.arr_roadPoint[n.nowRoadId + 1][0]
            , a = n.arr_roadPoint[n.nowRoadId][1]
            , o = n.arr_roadPoint[n.nowRoadId + 1][1]
            , s = r.x + (i.x - r.x) * (this.gameObject.transform.position.z - r.z) / (i.z - r.z)
            , l = a.x + (o.x - a.x) * (this.gameObject.transform.position.z - a.z) / (o.z - a.z);
        if (this.gameObject.transform.position.x < s || this.gameObject.transform.position.x > l)
            return n.playerScript.removePeople(this),
                void (this.gameObject.transform.position.x < s ? this.animator.play("rightdrop", 0, 0) : this.animator.play("leftdrop", 0, 0));
        let _ = new Laya.Point(this.lastPosition.x, this.lastPosition.z)
            , d = new Laya.Point(this.gameObject.transform.position.x, this.gameObject.transform.position.z);
        for (let e = 0; e < n.arr_obstaclePoint.length; e++)
            for (let t = 0; t < n.arr_obstaclePoint[e].length; t++) {
                let r = t + 1;
                if (t == n.arr_obstaclePoint[e].length - 1 && (r = 0),
                    O.JudgeLineCross(n.arr_obstaclePoint[e][t], n.arr_obstaclePoint[e][r], _, d))
                    return n.playerScript.removePeople(this),
                        void this.animator.play("hit", 0, 0)
            }
        for (let e = 0; e < n.arr_waitPickPlayer.length; e++) {
            Laya.Vector3.distance(n.arr_waitPickPlayer[e].transform.position, this.gameObject.transform.position) < 2 && (n.playerScript.addPeople(n.arr_waitPickPlayer[e]),
                n.arr_waitPickPlayer.splice(e, 1))
        }
        this.gameObject.transform.position.cloneTo(this.lastPosition)
    }
    onDisable() {
        this.isBePicked = !1
    }
}
class P extends Laya.Script3D {

    constructor() {
        super(...arguments),
            this.centerPosition = new Laya.Vector3,
            this.num_node = 0,
            this.isGameStart = !1,
            this.isEnd = !1,
            this.isMouseDown = !1,
            this.lastMouseX = 0,
            this.targetX = 0,
            this.speed_v = 20,
            this.speed_h = 1,
            this.onePlayerNode = null,
            this.currentX = 0,
            this.nextX = 0,
            this.toMenuDialogShow = false,
            this.keyLeftRightCode = 0;
    }

    onKeyUp(e) {
        if (this.toMenuDialogShow) {//正在游戏中，弹出返回窗
            switch (e.keyCode) {
                case 37:
                case 21:
                case 39:
                case 22:
                    if (this.btnSz.x == 260) {
                        this.btnSz.pos(100, 300);
                    } else {
                        this.btnSz.pos(260, 300);
                    }
                    break;
                case 13:
                case 23:
                case 66:
                    this.hideToMenuDialog();
                    P.isGamePause = false;
                    if (this.btnSz.x == 100) {//确定
                        zs.core.workflow.next();
                    }

                    break;
            }
        } else {//正在游戏中，未弹返回窗
            switch (e.keyCode) {
                case 37:
                case 21:
                case 39:
                case 22:
                    this.isMouseDown = !1;
                    Laya.timer.clear(this, this.loop);
                    break;
            }
        }
    }

    onKeyDown(e) {
        if (!this.toMenuDialogShow) {//正在游戏中，未弹返回窗
            switch (e.keyCode) {
                case 37:
                case 21://左
                    this.isMouseDown = 1;
                    this.keyLeftRightCode = 37;
                    Laya.timer.loop(3, this, this.loop);
                    break;
                case 39:
                case 22://右
                    this.isMouseDown = 1;
                    this.keyLeftRightCode = 39;
                    Laya.timer.loop(3, this, this.loop);
                    break;
                case 8:
                case 4://返回
                    if (this.isGameStart) {
                        this.showToMenuDialog();
                    }
                    break;
                case 13:
                case 23:
                case 66://回车
                    if (this.isEnd && !n.isWin) {
                        a.aGameStart=true;
                        zs.core.workflow.next();
                    }
                    break;

            }
        }
    }

    loop() {
        if (!this.toMenuDialogShow) {
            switch (this.keyLeftRightCode) {
                case 37:
                case 21://左
                    this.currentX -= this.speed_h;
                    break;
                case 39:
                case 22://右
                    this.currentX += this.speed_h;
                    break;
            }
        }
    }
    hideToMenuDialog() {
        this.toMenuDialogShow = false;
        this.toMenuDialog.close();
    }
    showToMenuDialog() {
        this.toMenuDialog = new Laya.Dialog();
        var bg = new Laya.Image("res/bg_tomenu.png");
        this.toMenuDialog.addChild(bg);
        let btnConfirm = new Laya.Image("res/confirm_select.png");
        btnConfirm.pos(18, 285);
        this.toMenuDialog.addChild(btnConfirm);


        let btnCancel = new Laya.Image("res/cancel_select.png");
        btnCancel.pos(195, 285);
        this.toMenuDialog.addChild(btnCancel);

        this.btnSz = new Laya.Image("res/sz.png");
        this.btnSz.scaleX = 0.3;
        this.btnSz.scaleY = 0.3;
        this.btnSz.pos(100, 300);
        this.toMenuDialog.addChild(this.btnSz);
        this.toMenuDialog.popup();
        this.toMenuDialogShow = true;

        P.isGamePause = true;
    }

    onEnable() {
        Laya.stage.on(Laya.Event.KEY_UP, this, this.onKeyUp);
        Laya.stage.on(Laya.Event.KEY_DOWN, this, this.onKeyDown);

        this.gameObject = this.owner,
            this.targetX = this.gameObject.transform.position.x,
            zs.core.workflow.on(L.GAME_PLAY, Laya.Handler.create(this, () => {
                this.isGameStart = !0
            }
                , null, !1)),
            n.playerScript = this,
            zs.network.config(!1, null, "moveSpeed", zs.NetworkMode.Sync).then(e => {
                let t = e.moveSpeed;
                for (let e = 0; e < t.length; e++)
                    this[t[e].config_enname] = parseInt(t[e].config_item)
            }
            )
    }
    onDisable() {
        Laya.stage.offAllCaller(this)
    }
    addPeople(e) {
        zs.platform.sync.vibrate({
            isLong: !1
        }),
            Laya.SoundManager.playSound("sound/catch_up_pencil.ogg");
        for (let t = 0; t < this.gameObject.numChildren; t++) {
            let r = this.gameObject.getChildAt(t);
            if (0 == r.numChildren) {
                let t = e.getComponent(R);
                if (null == t && (t = e.addComponent(R)),
                    e.transform.localPosition = new Laya.Vector3,
                    r.addChild(e),
                    null != this.onePlayerNode && (e.transform.localPosition = new Laya.Vector3(r.transform.localPosition.x > 0 ? 1 : -1, 0, Math.random() > .5 ? .75 : 0),
                        e.transform.rotationEuler = new Laya.Vector3(0, r.transform.localPosition.x > 0 ? -90 : 90, 0),
                        t.animator.play("run", 0, this.onePlayerNode.animator.getControllerLayer(0).getCurrentPlayState().normalizedTime)),
                    t.isBePicked = !0,
                    this.num_node++ > 0) {
                    n.cameraScript.playAnimation("shake");
                    let t = Laya.loader.getRes("3dres/Conventional/ef_cbccc_gain.lh").clone();
                    e.addChild(t),
                        t.transform.localPosition = new Laya.Vector3,
                        Laya.timer.once(666, this, () => {
                            t.destroy(!0)
                        }
                        )
                }
                return this.onePlayerNode = t,
                    !0
            }
        }
        return !1
    }
    removePeople(e) {
        this.num_node--,
            n.cameraScript.playAnimation("death"),
            Laya.SoundManager.playSound("sound/broken_pencil.ogg"),
            e.gameObject.removeSelf(),
            n.scene3d.addChild(e.gameObject),
            n.arr_diePlayer.push(e.gameObject),
            0 == this.num_node ? (zs.platform.sync.vibrate({
                isLong: !0
            }),
                this.isEnd = !0,
                n.isWin = !1,
                Laya.timer.once(500, this, () => {
                    zs.core.workflow.childNext("END")
                }
                )) : zs.platform.sync.vibrate({
                    isLong: !1
                })
    }
    reset() {
        for (let e = 0; e < this.gameObject.numChildren; e++) {
            let t = this.gameObject.getChildAt(e);
            t.numChildren > 0 && t.getChildAt(0).destroy(!0)
        }
        this.isEnd = !1,
            this.isGameStart = !1,
            this.num_node = 0,
            this.targetX = this.gameObject.transform.position.x
    }
    onUpdate() {
        if (this.isEnd)
            return;
        if (!this.isGameStart)
            return;
        if (this.gameObject.transform.position.z > n.endZ)
            return n.isWin = !0,
                this.isEnd = !0,
                console.log("endZ == zs.core.workflow.childNext"),
                void zs.core.workflow.childNext();
        if (this.isMouseDown) {
            this.targetX = -this.currentX / 10;
        }
        if (P.isGamePause) {
            return;
        }
        let e = Math.abs(this.gameObject.transform.position.x - this.targetX);
        this.gameObject.transform.translate(new Laya.Vector3(0, 0, this.speed_v * Laya.timer.delta / 1e3 * (8 - e) / 8), !1);
        let t = Laya.MathUtil.lerp(this.gameObject.transform.position.x, this.targetX, .15);
        this.gameObject.transform.position.x = t,
            this.gameObject.transform.position = this.gameObject.transform.position,
            this.gameObject.transform.position.z > n.arr_roadPoint[n.nowRoadId + 1][0].z && n.nowRoadId++;
        let r = n.arr_roadPoint[n.nowRoadId][1]
            , i = n.arr_roadPoint[n.nowRoadId + 1][1]
            , a = r.y + (i.y - r.y) * (this.gameObject.transform.position.z - r.z) / (i.z - r.z);
        this.gameObject.transform.position.y = a,
            this.gameObject.transform.position = this.gameObject.transform.position
    }
}
P.isGamePause = false;
class y extends Laya.Script3D {
    constructor() {
        super(...arguments),
            this.flyNum = 0,
            this.isEnd = !1
    }
    onEnable() {
        this.scene3d = this.owner,
            this.scene3d.input.multiTouchEnabled = !1,
            n.scene3d = this.scene3d,
            n.sceneWidth = 10,
            this.scene3d.getChildByName("PlayerNode").addComponent(P);
        let e = Laya.loader.getRes("3dres/Conventional/Camera.lh").clone();
        this.scene3d.addChild(e).addComponent(D),
            this.scene3d.getChildByName("Directional Light").intensity = 1.25,
            this.initGame(),
            n.eraseArr = [],
            n.endZ = this.scene3d.getChildByName("EndPoint").transform.position.z,
            n.arr_roadPoint = [],
            n.nowRoadId = 0;
        for (let e = 0; e < this.scene3d.numChildren; e++) {
            let t = this.scene3d.getChildAt(e);
            if (t.name.indexOf("mod_road_") >= 0)
                for (let e = 0; e < t.numChildren; e++) {
                    let r = t.getChildAt(e).getChildByName("RoadPoint");
                    if (r) {
                        let e = r.getChildByName("l")
                            , t = r.getChildByName("r");
                        for (let r = 0; r < e.numChildren; r++)
                            n.arr_roadPoint.push([t.getChildAt(r).transform.position, e.getChildAt(r).transform.position])
                    }
                }
        }
        n.arr_roadPoint.sort((e, t) => e[0].z - t[0].z);
        for (let e = 1; e < n.arr_roadPoint.length; e++)
            n.arr_roadPoint[e][0].z == n.arr_roadPoint[e - 1][0].z && n.arr_roadPoint.splice(e, 1);
        zs.core.workflow.on(L.GAME_PLAY + ".Draw", Laya.Handler.create(this, () => {
            let e = this.scene3d.getChildByName("mod_photoframe");
            if (null == e)
                return;
            let t = e.getChildByName("CameraEndPoint");
            n.cameraScript.showEndAni(t.transform.position, t.transform.rotationEuler)
        }
        )),
            Laya.stage.on(l.FlyOnePen, this, this.lightPaint)
    }
    reset() {
        n.playerScript && n.playerScript.reset(),
            null != n.arr_waitPickPlayer && n.arr_waitPickPlayer.forEach(e => {
                e.removeSelf(),
                    e.destroy(!0)
            }
            ),
            null != n.arr_diePlayer && n.arr_diePlayer.forEach(e => {
                e.removeSelf(),
                    e.destroy(!0)
            }
            ),
            0 == n.playerInfo.blackIdArr.length && (++n.playerInfo.nowPaintId > 5 && (n.playerInfo.nowPaintId = 1),
                n.playerInfo.blackIdArr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250]),
            Laya.loader.create("paint/paint_" + n.playerInfo.nowPaintId + ".png", Laya.Handler.create(this, e => {
                y.paintMat = new Laya.UnlitMaterial,
                    y.paintMat.albedoTexture = e,
                    this.scene3d.getChildByName("mod_photoframe").getChildByName("mod_photo frame_1").getChildByName("mod_photo frame_2").meshRenderer.material = y.paintMat;
                let t = this.scene3d.getChildByName("mod_photoframe").getChildByName("mask");
                for (let e = 1; e <= 25; e++)
                    t.getChildAt(e - 1).active = n.playerInfo.blackIdArr.indexOf(10 * e) >= 0
            }
            ))
    }
    initGame() {
        this.reset(),
            n.nowRoadId = 0;
        let e = Laya.loader.getRes("3dres/Conventional/PlayerMod.lh").clone();
        e.active = !0,
            e.addComponent(R).color = "Red",
            n.playerScript.addPeople(e);
        let t = this.scene3d.getChildByName("PickPoint");
        n.arr_diePlayer = [],
            n.arr_waitPickPlayer = [];
        let r = [];
        r.push("Red"),
            r.push("Green"),
            r.push("Blue"),
            r.push("Yellow"),
            r.push("Purple");
        let i = "Red";
        for (let e = 0; e < t.numChildren; e++) {
            let a = r[Math.floor(Math.random() * r.length)];
            if (a == i) {
                e--;
                continue
            }
            i = a;
            let o = Laya.loader.getRes("3dres/Conventional/PlayerMod.lh").clone();
            o.active = !0,
                o.transform.localPosition = new Laya.Vector3,
                o.addComponent(R).color = a,
                n.arr_waitPickPlayer.push(o),
                t.getChildAt(e).addChild(o)
        }
        n.arr_obstaclePoint = [];
        let a = this.scene3d.getChildByName("Obstacle");
        for (let e = 0; e < a.numChildren; e++) {
            let t = a.getChildAt(e).getChildByName("Checkpoint")
                , r = [];
            for (let e = 0; e < t.numChildren; e++) {
                let n = t.getChildAt(e).transform.position;
                r.push(new Laya.Point(n.x, n.z))
            }
            n.arr_obstaclePoint.push(r)
        }
    }
    onUpdate() { }
    lightPaint() {
        if (0 == n.playerInfo.blackIdArr.length)
            return !1;
        let e, t = 0;
        for (let r = 0; r < n.playerScript.gameObject.numChildren; r++) {
            let i = n.playerScript.gameObject.getChildAt(r);
            if (i.numChildren > 0 && t++ == this.flyNum) {
                e = i.getChildAt(0);
                break
            }
        }
        if (null == e)
            return 0 == this.isEnd && (Laya.View.closeAll(),
                Laya.timer.once(1e3, zs.core.workflow, zs.core.workflow.childNext)),
                !1;
        let r = e.getComponent(R);
        r.animator.play("dance"),
            Laya.SoundManager.playSound("sound/broken_pencil.ogg");
        let i = Math.floor(n.playerInfo.blackIdArr.length * Math.random())
            , a = n.playerInfo.blackIdArr[i];
        n.playerInfo.blackIdArr.splice(i, 1),
            this.flyNum++;
        let o = this.flyNum == n.playerScript.num_node || 0 == n.playerInfo.blackIdArr.length
            , s = Laya.loader.getRes("3dres/Conventional/fly.lh").clone();
        this.scene3d.addChild(s),
            s.getChildByName("Bone001").getChildByName("mod_colorpen").meshRenderer.material = r.mat_pen,
            s.transform.position = e.transform.position.clone(),
            s.transform.position.z += .5,
            s.transform.position = s.transform.position;
        let l = this.scene3d.getChildByName("mod_photoframe").getChildByName("mask").getChildAt(a / 10 - 1).transform.position.clone();
        return Laya.timer.frameLoop(1, s, function () {
            s.transform.position = s.transform.position,
                s.transform.rotationEuler = s.transform.rotationEuler
        }),
            Laya.Tween.to(s.transform.rotationEuler, {
                x: -45,
                z: -30
            }, 750),
            Laya.Tween.to(s.transform.position, {
                x: l.x,
                y: l.y,
                z: l.z
            }, 666, null, Laya.Handler.create(this, () => {
                if (Laya.timer.clearAll(s),
                    !s.destroyed) {
                    if (0 == n.playerInfo.blackIdArr.length && o) {
                        zs.platform.sync.vibrate({
                            isLong: !0
                        });
                        let e = Laya.loader.getRes("3dres/Conventional/ef_win.lh").clone();
                        this.scene3d.addChild(e);
                        let t = this.scene3d.getChildByName("mod_photoframe")
                            , r = t.transform.position.clone();
                        r.z -= 2,
                            r.y += 5,
                            e.transform.position = r;
                        let n = t.getChildByName("mod_photo frame_1").getComponent(Laya.Animator)
                            , i = t.getChildByName("mod_photo frame_1").getChildAt(0);
                        i.active = !1,
                            i.active = !0,
                            n.play("paint", 0, 0)
                    } else
                        zs.platform.sync.vibrate({
                            isLong: !1
                        });
                    switch (this.scene3d.getChildByName("mod_photoframe").getChildByName("mask").getChildAt(a / 10 - 1).active = !1,
                    Laya.SoundManager.playSound("sound/hit_coin.ogg"),
                    r.color) {
                        case "Red":
                            var e = Laya.loader.getRes("3dres/Conventional/ef_cbccc_draw_red.lh").clone();
                            break;
                        case "Blue":
                            e = Laya.loader.getRes("3dres/Conventional/ef_cbccc_draw_blue.lh").clone();
                            break;
                        case "Yellow":
                            e = Laya.loader.getRes("3dres/Conventional/ef_cbccc_draw_yellow.lh").clone();
                            break;
                        case "Purple":
                            e = Laya.loader.getRes("3dres/Conventional/ef_cbccc_draw_purple.lh").clone();
                            break;
                        default:
                            e = Laya.loader.getRes("3dres/Conventional/ef_cbccc_draw_green.lh").clone()
                    }
                    e.transform.position = s.transform.position.clone(),
                        e.transform.position.z -= 1,
                        e.transform.position = e.transform.position,
                        this.scene3d.addChild(e),
                        Laya.timer.once(1e3, this, () => {
                            e.destroy(!0)
                        }
                        ),
                        s.destroy(!0),
                        o && (this.isEnd = !0,
                            Laya.View.closeAll(),
                            Laya.timer.once(1e3, zs.core.workflow, zs.core.workflow.childNext))
                }
            }
            )),
            !0
    }
    onDisable() {
        n.playerScript = null,
            n.arr_waitPickPlayer = null,
            n.arr_diePlayer = null,
            Laya.stage.offAllCaller(this)
    }
}
let game_state;
class A extends Laya.Script {
    constructor() {
        super(),
            this.init()
    }
    init() {
        zs.log.Configs.logLevel = zs.log.Level.DEBUG,
            zs.core.workflow = new L,
            zs.core.workflow.setFSM(L.GAME_PLAY, (new zs.fsm).registe("PLAY", "Draw").registe("Draw", "END").registe("PLAY", "END").setDefault("PLAY")),
            zs.core.onFGUIBind = Laya.Handler.create(this, () => { }
            ),
            zs.core.onPrepare = Laya.Handler.create(this, () => __awaiter(this, void 0, void 0, function* () {
                let e = n.playerInfo.stageId % 10;
                0 == e && (e = 10);
                let t = ["3dres/Conventional/scene" + e + ".ls", "3dres/Conventional/Camera.lh", "3dres/Conventional/ef_win.lh", "3dres/Conventional/PlayerMod.lh", "3dres/Conventional/fly.lh", "3dres/Conventional/ef_cbccc_gain.lh", "3dres/Conventional/ef_cbccc_draw_red.lh", "3dres/Conventional/ef_cbccc_draw_blue.lh", "3dres/Conventional/ef_cbccc_draw_yellow.lh", "3dres/Conventional/ef_cbccc_draw_green.lh", "3dres/Conventional/ef_cbccc_draw_purple.lh"];
                Laya.loader.create(t, Laya.Handler.create(this, () => {
                    zs.core.readyFinish()
                }
                ))
            })),
            zs.core.onWorkflow(L.GAME_HOME, Laya.Handler.create(this, () => {
                console.log("Workflow ====== GAME_HOME"),
                    Laya.View.open("page/HomePage.scene", !0),
                    null != this.scene3d && this.scene3d.destroy(!0);
                let e = n.playerInfo.stageId % 10;
                0 == e && (e = 10);
                let t = "3dres/Conventional/scene" + e + ".ls";
                zs.resource.load(t, zs.ResourceType.Scene3D).then(e => {
                    e.addComponent(y),
                        Laya.stage.addChildAt(e, 0),
                        this.scene3d = e;
                    let t = (n.playerInfo.stageId + 1) % 10;
                    0 == t && (t = 10);
                    let r = "3dres/Conventional/scene" + t + ".ls";
                    zs.resource.load(r, zs.ResourceType.Scene3D)
                }
                )
            }
            )),
            zs.core.onWorkflow(L.GAME_PLAY, Laya.Handler.create(this, () => {
                console.log("Workflow ===== GAME_PLAY"),
                    Laya.View.open("page/GamePage.scene", !0)
            }
            )),
            zs.core.onWorkflow(L.GAME_PLAY + ".Draw", Laya.Handler.create(this, () => {
                console.log("Workflow ===== Draw"),
                    Laya.View.open("page/WinPage_mid.scene", !0)
            }
            )),
            zs.core.onWorkflow(L.GAME_PLAY + ".END", Laya.Handler.create(this, () => {
                console.log("Workflow ===== GAME_PLAY.END"),
                    n.isWin ? Laya.View.open("page/WinPage.scene", !0) : Laya.View.open("page/FailPage.scene", !0)
            }
            )),
            zs.core.onWorkflow(L.GAME_END, Laya.Handler.create(this, () => {
                console.log("Workflow ====== GAME_END"),
                    zs.core.workflow.next()
            }
            )),
            zs.core.init(t)
    }
}
var N = Laya.Shader3D;
class v extends Laya.Material {
    constructor() {
        super(),
            this.setShaderName("BlinnPhongFog")
    }
    static init() {
        Laya.ClassUtils.regClass("Laya.BlinnPhongFog", v)
    }
    clone() {
        let e = new v;
        return e._Color = this._Color,
            e._Cull = this._Cull,
            e._SpecularColor = this._SpecularColor,
            e._RimColor = this._RimColor,
            e._MainTex = this._MainTex,
            e._NormalTex = this._NormalTex,
            e._MaskTex = this._MaskTex,
            e._EmissionTex = this._EmissionTex,
            e._EmissionDirX = this._EmissionDirX,
            e._EmissionDirY = this._EmissionDirY,
            e._EmissionPower = this._EmissionPower,
            e._EmissionColor = this._EmissionColor,
            e._FogTex = this._FogTex,
            e._FogDirX = this._FogDirX,
            e._FogDirY = this._FogDirY,
            e._FogMapScale = this._FogMapScale,
            e._FogPower = this._FogPower,
            e._FadeFogColor = this._FadeFogColor,
            e._FadeHeightFogColor = this._FadeHeightFogColor,
            e._FadeFogNear = this._FadeFogNear,
            e._FadeFogFar = this._FadeFogFar,
            e._HeightFogPower = this._HeightFogPower,
            e._HeightFogStart = this._HeightFogStart,
            e._HeightFogRange = this._HeightFogRange,
            e._Contrast = this._Contrast,
            e._Specular = this._Specular,
            e._SpecSmooth = this._SpecSmooth,
            e._RimPower = this._RimPower,
            e
    }
    get _Cull() {
        return this._shaderValues.getInt(v.CULL)
    }
    set _Cull(e) {
        let t = 0;
        t = e < 1 ? 0 : e < 2 ? 1 : 2,
            this._shaderValues.setInt(v.CULL, t)
    }
    get _Color() {
        return this._shaderValues.getVector(v.DIFFUSECOLOR)
    }
    set _Color(e) {
        this._shaderValues.setVector(v.DIFFUSECOLOR, e)
    }
    get _SpecularColor() {
        return this._shaderValues.getVector(v.SPECULARCOLOR)
    }
    set _SpecularColor(e) {
        this._shaderValues.setVector(v.SPECULARCOLOR, e)
    }
    get _RimColor() {
        return this._shaderValues.getVector(v.RIMCOLOR)
    }
    set _RimColor(e) {
        this._shaderValues.setVector(v.RIMCOLOR, e)
    }
    get _MainTex() {
        return this._shaderValues.getTexture(v.DIFFUSETEXTURE)
    }
    set _MainTex(e) {
        e ? this._shaderValues.addDefine(v.SHADERDEFINE_DIFFUSEMAP) : this._shaderValues.removeDefine(v.SHADERDEFINE_DIFFUSEMAP),
            this._shaderValues.setTexture(v.DIFFUSETEXTURE, e)
    }
    get _NormalTex() {
        return this._shaderValues.getTexture(v.NORMALTEXTURE)
    }
    set _NormalTex(e) {
        e ? this._shaderValues.addDefine(v.SHADERDEFINE_NORMALMAP) : this._shaderValues.removeDefine(v.SHADERDEFINE_NORMALMAP),
            this._shaderValues.setTexture(v.NORMALTEXTURE, e)
    }
    get _MaskTex() {
        return this._shaderValues.getTexture(v.MASKTEXTURE)
    }
    set _MaskTex(e) {
        e ? this._shaderValues.addDefine(v.SHADERDEFINE_MASKMAP) : this._shaderValues.removeDefine(v.SHADERDEFINE_MASKMAP),
            this._shaderValues.setTexture(v.MASKTEXTURE, e)
    }
    get _EmissionTex() {
        return this._shaderValues.getTexture(v.EMISSIONTEXTURE)
    }
    set _EmissionTex(e) {
        e ? this._shaderValues.addDefine(v.SHADERDEFINE_EMISSIONMAP) : this._shaderValues.removeDefine(v.SHADERDEFINE_EMISSIONMAP),
            this._shaderValues.setTexture(v.EMISSIONTEXTURE, e)
    }
    get _EmissionDirX() {
        return this._shaderValues.getNumber(v.EMISSIONDIRECTIONX)
    }
    set _EmissionDirX(e) {
        this._shaderValues.setNumber(v.EMISSIONDIRECTIONX, e)
    }
    get _EmissionDirY() {
        return this._shaderValues.getNumber(v.EMISSIONDIRECTIONY)
    }
    set _EmissionDirY(e) {
        this._shaderValues.setNumber(v.EMISSIONDIRECTIONY, e)
    }
    get _EmissionPower() {
        return this._shaderValues.getNumber(v.EMISSIONPOWER)
    }
    set _EmissionPower(e) {
        this._shaderValues.setNumber(v.EMISSIONPOWER, e)
    }
    get _EmissionColor() {
        return this._shaderValues.getVector(v.EMISSIONCOLOR)
    }
    set _EmissionColor(e) {
        this._shaderValues.setVector(v.EMISSIONCOLOR, e)
    }
    get _FogTex() {
        return this._shaderValues.getTexture(v.FOGTEXURE)
    }
    set _FogTex(e) {
        e ? this._shaderValues.addDefine(v.SHADERDEFINE_FOGMAP) : this._shaderValues.removeDefine(v.SHADERDEFINE_FOGMAP),
            this._shaderValues.setTexture(v.FOGTEXURE, e)
    }
    get _FogDirX() {
        return this._shaderValues.getNumber(v.FOGDIRECTIONX)
    }
    set _FogDirX(e) {
        this._shaderValues.setNumber(v.FOGDIRECTIONX, e)
    }
    get _FogDirY() {
        return this._shaderValues.getNumber(v.FOGDIRECTIONY)
    }
    set _FogDirY(e) {
        this._shaderValues.setNumber(v.FOGDIRECTIONY, e)
    }
    get _FogMapScale() {
        return this._shaderValues.getNumber(v.FOGMAPSCALE)
    }
    set _FogMapScale(e) {
        this._shaderValues.setNumber(v.FOGMAPSCALE, e)
    }
    get _FadeFogColor() {
        return this._shaderValues.getNumber(v.FADEFOGCOLOR)
    }
    set _FadeFogColor(e) {
        this._shaderValues.setNumber(v.FADEFOGCOLOR, e)
    }
    get _FadeHeightFogColor() {
        return this._shaderValues.getNumber(v.FADEHEIGHTFOGCOLOR)
    }
    set _FadeHeightFogColor(e) {
        this._shaderValues.setNumber(v.FADEHEIGHTFOGCOLOR, e)
    }
    get _FadeFogNear() {
        return this._shaderValues.getNumber(v.FADEFOGNEAR)
    }
    set _FadeFogNear(e) {
        this._shaderValues.setNumber(v.FADEFOGNEAR, e)
    }
    get _FadeFogFar() {
        return this._shaderValues.getNumber(v.FADEFOGFAR)
    }
    set _FadeFogFar(e) {
        this._shaderValues.setNumber(v.FADEFOGFAR, e)
    }
    get _FogPower() {
        return this._shaderValues.getNumber(v.FOGPOWER)
    }
    set _FogPower(e) {
        this._shaderValues.setNumber(v.FOGPOWER, e)
    }
    get _HeightFogPower() {
        return this._shaderValues.getNumber(v.HEIGHTFOGPOWER)
    }
    set _HeightFogPower(e) {
        this._shaderValues.setNumber(v.HEIGHTFOGPOWER, e)
    }
    get _HeightFogStart() {
        return this._shaderValues.getNumber(v.HEIGHTFOGSTART)
    }
    set _HeightFogStart(e) {
        this._shaderValues.setNumber(v.HEIGHTFOGSTART, e)
    }
    get _HeightFogRange() {
        return this._shaderValues.getNumber(v.HEIGHTFOGRANGE)
    }
    set _HeightFogRange(e) {
        this._shaderValues.setNumber(v.HEIGHTFOGRANGE, e)
    }
    get _Contrast() {
        return this._shaderValues.getNumber(v.CONTRAST)
    }
    set _Contrast(e) {
        this._shaderValues.setNumber(v.CONTRAST, e)
    }
    get _Specular() {
        return this._shaderValues.getNumber(v.SPECULAR)
    }
    set _Specular(e) {
        this._shaderValues.setNumber(v.SPECULAR, e)
    }
    get _SpecSmooth() {
        return this._shaderValues.getNumber(v.SPECUALRSMOOTH)
    }
    set _SpecSmooth(e) {
        this._shaderValues.setNumber(v.SPECUALRSMOOTH, e)
    }
    get _RimPower() {
        return this._shaderValues.getNumber(v.RIMPOWER)
    }
    set _RimPower(e) {
        this._shaderValues.setNumber(v.RIMPOWER, e)
    }
}
v.DIFFUSETEXTURE = Laya.Shader3D.propertyNameToID("u_DiffuseTexture"),
    v.DIFFUSECOLOR = Laya.Shader3D.propertyNameToID("u_DiffuseColor"),
    v.NORMALTEXTURE = Laya.Shader3D.propertyNameToID("u_NormalTexture"),
    v.SPECULARCOLOR = Laya.Shader3D.propertyNameToID("u_SpecularColor"),
    v.RIMCOLOR = Laya.Shader3D.propertyNameToID("u_RimColor"),
    v.CONTRAST = Laya.Shader3D.propertyNameToID("u_Contrast"),
    v.SPECULAR = Laya.Shader3D.propertyNameToID("u_Specular"),
    v.SPECUALRSMOOTH = Laya.Shader3D.propertyNameToID("u_SpecularSmooth"),
    v.RIMPOWER = Laya.Shader3D.propertyNameToID("u_RimPower"),
    v.MASKTEXTURE = Laya.Shader3D.propertyNameToID("u_MaskTexture"),
    v.EMISSIONTEXTURE = Laya.Shader3D.propertyNameToID("u_EmissionTexture"),
    v.EMISSIONDIRECTIONX = Laya.Shader3D.propertyNameToID("u_EmissionDirectionX"),
    v.EMISSIONDIRECTIONY = Laya.Shader3D.propertyNameToID("u_EmissionDirectionY"),
    v.EMISSIONPOWER = Laya.Shader3D.propertyNameToID("u_EmissionPower"),
    v.EMISSIONCOLOR = Laya.Shader3D.propertyNameToID("u_EmissionColor"),
    v.FOGTEXURE = Laya.Shader3D.propertyNameToID("u_FogTexture"),
    v.FOGDIRECTIONX = Laya.Shader3D.propertyNameToID("u_FogDirectionX"),
    v.FOGDIRECTIONY = Laya.Shader3D.propertyNameToID("u_FogDirectionY"),
    v.FOGMAPSCALE = Laya.Shader3D.propertyNameToID("u_FogMapScale"),
    v.FOGPOWER = Laya.Shader3D.propertyNameToID("u_FogPower"),
    v.FADEFOGCOLOR = Laya.Shader3D.propertyNameToID("u_FadeFogColor"),
    v.FADEHEIGHTFOGCOLOR = Laya.Shader3D.propertyNameToID("u_FadeHeightFogColor"),
    v.FADEFOGNEAR = Laya.Shader3D.propertyNameToID("u_FadeFogNear"),
    v.FADEFOGFAR = Laya.Shader3D.propertyNameToID("u_FadeFogFar"),
    v.HEIGHTFOGPOWER = Laya.Shader3D.propertyNameToID("u_HeightFogPower"),
    v.HEIGHTFOGSTART = Laya.Shader3D.propertyNameToID("u_HeightFogStart"),
    v.HEIGHTFOGRANGE = Laya.Shader3D.propertyNameToID("u_HeightFogRange"),
    v.CULL = N.propertyNameToID("s_Cull"),
    v.SHADERDEFINE_DIFFUSEMAP = Laya.Shader3D.getDefineByName("DIFFUSEMAP"),
    v.SHADERDEFINE_NORMALMAP = Laya.Shader3D.getDefineByName("NORMALMAP"),
    v.SHADERDEFINE_MASKMAP = Laya.Shader3D.getDefineByName("MASKMAP"),
    v.SHADERDEFINE_EMISSIONMAP = Laya.Shader3D.getDefineByName("EMISSIONMAP"),
    v.SHADERDEFINE_FOGMAP = Laya.Shader3D.getDefineByName("FOGMAP");
var M = '#ifdef GL_FRAGMENT_PRECISION_HIGH\r\n\tprecision highp float;\r\n\tprecision highp int;\r\n#else\r\n\tprecision mediump float;\r\n\tprecision mediump int;\r\n#endif\r\n\r\n#include "Lighting.glsl";\r\n#include "Shadow.glsl"\r\n\r\nuniform vec4 u_DiffuseColor;\r\nuniform vec4 u_SpecularColor;\r\nuniform vec4 u_RimColor;\r\nuniform float u_Contrast;\r\nuniform float u_Specular;\r\nuniform float u_SpecularSmooth;\r\nuniform float u_RimPower;\r\n\r\n#if defined(EMISSIONMAP) || defined(FOGMAP)\r\n\tuniform float u_Time;\r\n#endif\r\n\r\n#if defined(COLOR)\r\n\tvarying vec4 v_Color;\r\n#endif\r\n\r\n#ifdef DIFFUSEMAP\r\n    uniform sampler2D u_DiffuseTexture;\r\n#endif\r\n\r\n#ifdef MASKMAP\r\n\tuniform sampler2D u_MaskTexture;\r\n#endif\r\n\r\n#ifdef EMISSIONMAP\r\n    uniform sampler2D u_EmissionTexture;\r\n    uniform float u_EmissionDirectionX;\r\n\tuniform float u_EmissionDirectionY;\r\n    uniform float u_EmissionPower;\r\n    uniform vec4 u_EmissionColor;\r\n#endif\r\n\r\n#if defined(DIFFUSEMAP) || defined(EMISSIONMAP) || defined(FOGMAP) ||((defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT))&&(defined(NORMALMAP)))\r\n\tvarying vec2 v_Texcoord0;\r\n#endif\r\n\r\nvarying vec3 v_Normal;\r\n#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)\r\n\tvarying vec3 v_ViewDir; \r\n\r\n\tuniform vec3 u_MaterialSpecular;\r\n\tuniform float u_Shininess;\r\n\r\n\t#ifdef LEGACYSINGLELIGHTING\r\n\t\t#ifdef DIRECTIONLIGHT\r\n\t\t\tuniform DirectionLight u_DirectionLight;\r\n\t\t#endif\r\n\t\t#ifdef POINTLIGHT\r\n\t\t\tuniform PointLight u_PointLight;\r\n\t\t#endif\r\n\t\t#ifdef SPOTLIGHT\r\n\t\t\tuniform SpotLight u_SpotLight;\r\n\t\t#endif\r\n\t#else\r\n\t\tuniform mat4 u_View;\r\n\t\tuniform vec4 u_ProjectionParams;\r\n\t\tuniform vec4 u_Viewport;\r\n\t\tuniform int u_DirationLightCount;\r\n\t\tuniform DirectionLight u_SunLight;\r\n\t\tuniform sampler2D u_LightBuffer;\r\n\t\tuniform sampler2D u_LightClusterBuffer;\r\n\t#endif\r\n#endif\r\n\r\n#ifdef NORMALMAP \r\n\tuniform sampler2D u_NormalTexture;\r\n\tvarying vec3 v_Tangent;\r\n\tvarying vec3 v_Binormal;\r\n#endif\r\n\r\n#ifdef FOGMAP\r\n    uniform sampler2D u_FogTexture;\r\n    uniform float u_FogDirectionX;\r\n    uniform float u_FogDirectionY;\r\n    uniform float u_FogMapScale;\r\n    uniform float u_FogPower;\r\n    uniform vec4 u_FogColor;\r\n    uniform float u_FogStart;\r\n    uniform float u_FogRange;\r\n\tuniform vec4 u_FadeFogColor;\r\n\tuniform vec4 u_FadeHeightFogColor;\r\n\tuniform float u_FadeFogNear;\r\n\tuniform float u_FadeFogFar;\r\n\tuniform float u_HeightFogPower;\r\n\tuniform float u_HeightFogStart;\r\n\tuniform float u_HeightFogRange;\r\n#endif\r\n\r\n\r\nvarying vec3 v_PositionWorld;\r\n#include "GlobalIllumination.glsl";//"GlobalIllumination.glsl use uniform should at front of this\r\n\r\nvoid main() {\r\n    vec4 baseColor = u_DiffuseColor;\r\n    #ifdef DIFFUSEMAP\r\n\t\tvec4 difTexColor=texture2D(u_DiffuseTexture, v_Texcoord0);\r\n\t\tbaseColor=baseColor*difTexColor;\r\n\t#endif\r\n\r\n    vec3 normal;//light and SH maybe use normal\r\n\t#if defined(NORMALMAP)\r\n\t\tvec3 normalMapSample = texture2D(u_NormalTexture, v_Texcoord0).rgb;\r\n\t\tnormal = normalize(NormalSampleToWorldSpace(normalMapSample, v_Normal, v_Tangent,v_Binormal));\r\n\t#else\r\n\t\tnormal = normalize(v_Normal);\r\n\t#endif\r\n\r\n    LayaGIInput giInput;\r\n\tvec3 globalDiffuse=layaGIBase(giInput,1.0,normal);\r\n\r\n    vec3 lightDir;\r\n\tvec3 lightColor;\r\n\t#if defined(DIRECTIONLIGHT)\r\n\t\t#ifdef LEGACYSINGLELIGHTING\r\n\t\t\tlightDir = u_DirectionLight.direction;\r\n\t\t\tlightColor = u_DirectionLight.color;\r\n\t\t#else\r\n\t\t\tlightDir = u_SunLight.direction;\r\n\t\t\tlightColor = u_SunLight.color;\r\n\t\t#endif\r\n\t#else\r\n\t\tlightDir = normalize(vec3(1.0, 1.0, 1.0));\r\n\t\tlightColor = vec3(1.0, 1.0, 1.0);\r\n\t#endif\r\n\tlightDir = -lightDir;\r\n\r\n    vec3 viewDir;\r\n\t#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)\r\n\t\tviewDir = normalize(v_ViewDir);\r\n\t#else\r\n\t\tviewDir = normalize(vec3(1.0, 1.0, 1.0));\r\n\t#endif\r\n\r\n\tvec3 halfDir = normalize(lightDir + viewDir);\r\n\r\n    float ndl = max(0.001, dot(normal, lightDir));\r\n\tfloat ndh = max(0.001, dot(normal, halfDir));\r\n\tfloat ndv = max(0.001, dot(normal, viewDir));\r\n\r\n    float diff = ndl * u_Contrast + (1.0 - u_Contrast);\r\n    float spec = pow(ndh, u_Specular * 128.0);\r\n\tspec = smoothstep(0.5 - u_SpecularSmooth * 0.5, 0.5 + u_SpecularSmooth * 0.5, spec);\r\n\r\n\tvec4 maskCol = vec4(1.0, 1.0, 1.0, 1.0);\r\n\t#ifdef MASKMAP\r\n\t\tmaskCol = texture2D(u_MaskTexture, v_Texcoord0);\r\n\t#endif\r\n\r\n    vec3 specular =  u_SpecularColor.rgb * spec * maskCol.r;\r\n\r\n    float rim = (1.0 - ndv) * ndl;\r\n    vec3 rimColor = u_RimColor.rgb * u_RimPower * rim;\r\n\r\n\tvec3 emission = vec3(0.0, 0.0, 0.0);\r\n\t#ifdef EMISSIONMAP\r\n\t\tvec4 emissionCol = texture2D(u_EmissionTexture, v_Texcoord0);\r\n\t\t#ifdef MASKMAP\r\n\t\t\tvec4 emissionOffsetCol = texture2D(u_MaskTexture, v_Texcoord0 + vec2(u_EmissionDirectionX, u_EmissionDirectionY) * u_Time * 0.05);\r\n\t\t\temission = emissionCol.rgb * u_EmissionPower * emissionOffsetCol.g;\r\n\t\t\temission = mix(emission, emission * u_EmissionColor.rgb,  maskCol.b);\r\n\t\t#else\r\n\t\t\temission = emissionCol.rgb * u_EmissionColor.rgb * u_EmissionPower;\r\n\t\t#endif\r\n\t#endif\r\n\r\n    vec3 finalCol = (baseColor.rgb * lightColor + rimColor) * diff + specular + emission;\r\n\tfinalCol = finalCol + globalDiffuse * baseColor.rgb * lightColor;\r\n\t#if defined(COLOR)\r\n\t\tfinalCol = finalCol * v_Color.rgb;\r\n\t#endif\r\n\r\n\t#ifdef FOGMAP\r\n\t\tfloat fogCoord = 1.0 - (1.0/gl_FragCoord.w-u_FogStart)/u_FogRange;\r\n\r\n\t\tvec2 worldUV = v_PositionWorld.xz / u_FogMapScale;\r\n\t\tvec4 fogHeightColor = texture2D(u_FogTexture, worldUV + vec2(-u_FogDirectionX, u_FogDirectionY) * u_Time * 0.05);\r\n\r\n\t\tfloat fogDis = max(u_HeightFogRange, 0.01) * fogHeightColor.r;\r\n\t\tfloat hFogLerp = (v_PositionWorld.y - u_HeightFogStart) / fogDis;\r\n\t\thFogLerp = mix(fogHeightColor.g * (1.0 - u_HeightFogPower), 1.0, clamp(hFogLerp, 0.0, 1.0));\r\n\r\n\t\tfloat fadeFogDis = max(u_FadeFogFar - u_FadeFogNear, 0.01);\r\n\t\tfloat fadeFogLerp = clamp((1.0/gl_FragCoord.w - u_FadeFogNear) / fadeFogDis, 0.0, 1.0);\r\n\r\n\t\tvec4 fogColor = mix(u_FogColor, u_FadeHeightFogColor, clamp(fogCoord, 0.0, 1.0));\r\n\t\tfogCoord = hFogLerp * (1.0 - fadeFogLerp) + fogCoord * fadeFogLerp;\r\n\t\tfogColor = mix(fogColor, u_FadeFogColor, clamp(fogCoord, 0.0, 1.0));\r\n\r\n\t\tfinalCol = mix(mix(finalCol,  fogColor.rgb, u_FogPower), finalCol, clamp(fogCoord, 0.0, 1.0));\r\n\t#endif\r\n\r\n\tgl_FragColor = vec4(finalCol, 1.0);\r\n}'
    , w = '#include "Lighting.glsl";\r\n#include "Shadow.glsl";\r\n\r\nattribute vec4 a_Position;\r\n\r\n#ifdef GPU_INSTANCE\r\n\tattribute mat4 a_MvpMatrix;\r\n#else\r\n\tuniform mat4 u_MvpMatrix;\r\n#endif\r\n\r\n#if defined(DIFFUSEMAP) || defined(MASKMAP) || defined(EMISSIONMAP) || defined(FOGMAP) ||((defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT))&&(defined(SPECULARMAP)||defined(NORMALMAP)))||(defined(LIGHTMAP)&&defined(UV))\r\n\tattribute vec2 a_Texcoord0;\r\n\tvarying vec2 v_Texcoord0;\r\n#endif\r\n\r\n#ifdef COLOR\r\n\tattribute vec4 a_Color;\r\n\tvarying vec4 v_Color;\r\n#endif\r\n\r\n#ifdef BONE\r\n\tconst int c_MaxBoneCount = 24;\r\n\tattribute vec4 a_BoneIndices;\r\n\tattribute vec4 a_BoneWeights;\r\n\tuniform mat4 u_Bones[c_MaxBoneCount];\r\n#endif\r\n\r\nattribute vec3 a_Normal;\r\nvarying vec3 v_Normal; \r\n\r\n#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)\r\n\tuniform vec3 u_CameraPos;\r\n\tvarying vec3 v_ViewDir; \r\n#endif\r\n\r\n#if defined(NORMALMAP)\r\n\tattribute vec4 a_Tangent0;\r\n\tvarying vec3 v_Tangent;\r\n\tvarying vec3 v_Binormal;\r\n#endif\r\n\r\n#ifdef GPU_INSTANCE\r\n\tattribute mat4 a_WorldMat;\r\n#else\r\n\tuniform mat4 u_WorldMat;\r\n#endif\r\n\r\nvarying vec3 v_PositionWorld;\r\n\r\n#ifdef TILINGOFFSET\r\n\tuniform vec4 u_TilingOffset;\r\n#endif\r\n\r\n#ifdef SIMPLEBONE\r\n\t#ifdef GPU_INSTANCE\r\n\t\tattribute vec4 a_SimpleTextureParams;\r\n\t#else\r\n\t\tuniform vec4 u_SimpleAnimatorParams;\r\n\t#endif\r\n\tuniform sampler2D u_SimpleAnimatorTexture;\r\n\r\n\tuniform float u_SimpleAnimatorTextureSize; \r\n#endif\r\n\r\n\r\n#ifdef SIMPLEBONE\r\nmat4 loadMatFromTexture(float FramePos,int boneIndices,float offset)\r\n{\r\n\tvec2 uv;\r\n\tfloat PixelPos = FramePos+float(boneIndices)*4.0;\r\n\tfloat halfOffset = offset * 0.5;\r\n\tfloat uvoffset = PixelPos/u_SimpleAnimatorTextureSize;\r\n\tuv.y = floor(uvoffset)*offset+halfOffset;\r\n\tuv.x = mod(float(PixelPos),u_SimpleAnimatorTextureSize)*offset+halfOffset;\r\n\tvec4 mat0row = texture2D(u_SimpleAnimatorTexture,uv);\r\n\tuv.x+=offset;\r\n\tvec4 mat1row = texture2D(u_SimpleAnimatorTexture,uv);\r\n\tuv.x+=offset;\r\n\tvec4 mat2row = texture2D(u_SimpleAnimatorTexture,uv);\r\n\tuv.x+=offset;\r\n\tvec4 mat3row = texture2D(u_SimpleAnimatorTexture,uv);\r\n\tmat4 m =mat4(mat0row.x,mat0row.y,mat0row.z,mat0row.w,\r\n\t\t\t  mat1row.x,mat1row.y,mat1row.z,mat1row.w,\r\n\t\t\t  mat2row.x,mat2row.y,mat2row.z,mat2row.w,\r\n\t\t\t  mat3row.x,mat3row.y,mat3row.z,mat3row.w);\r\n\treturn m;\r\n}\r\n#endif\r\n\r\nvoid main()\r\n{\r\n\tvec4 position;\r\n\t#ifdef BONE\r\n\t\tmat4 skinTransform;\r\n\t \t#ifdef SIMPLEBONE\r\n\t\t\tfloat currentPixelPos;\r\n\t\t\t#ifdef GPU_INSTANCE\r\n\t\t\t\tcurrentPixelPos = a_SimpleTextureParams.x+a_SimpleTextureParams.y;\r\n\t\t\t#else\r\n\t\t\t\tcurrentPixelPos = u_SimpleAnimatorParams.x+u_SimpleAnimatorParams.y;\r\n\t\t\t#endif\r\n\t\t\tfloat offset = 1.0/u_SimpleAnimatorTextureSize;\r\n\t\t\tskinTransform =  loadMatFromTexture(currentPixelPos,int(a_BoneIndices.x),offset) * a_BoneWeights.x;\r\n\t\t\tskinTransform += loadMatFromTexture(currentPixelPos,int(a_BoneIndices.y),offset) * a_BoneWeights.y;\r\n\t\t\tskinTransform += loadMatFromTexture(currentPixelPos,int(a_BoneIndices.z),offset) * a_BoneWeights.z;\r\n\t\t\tskinTransform += loadMatFromTexture(currentPixelPos,int(a_BoneIndices.w),offset) * a_BoneWeights.w;\r\n\t\t#else\r\n\t\t\tskinTransform =  u_Bones[int(a_BoneIndices.x)] * a_BoneWeights.x;\r\n\t\t\tskinTransform += u_Bones[int(a_BoneIndices.y)] * a_BoneWeights.y;\r\n\t\t\tskinTransform += u_Bones[int(a_BoneIndices.z)] * a_BoneWeights.z;\r\n\t\t\tskinTransform += u_Bones[int(a_BoneIndices.w)] * a_BoneWeights.w;\r\n\t\t#endif\r\n\t\tposition=skinTransform*a_Position;\r\n\t #else\r\n\t\tposition=a_Position;\r\n\t#endif\r\n\r\n\t#ifdef GPU_INSTANCE\r\n\t\tgl_Position = a_MvpMatrix * position;\r\n\t#else\r\n\t\tgl_Position = u_MvpMatrix * position;\r\n\t#endif\r\n\t\r\n\tmat4 worldMat;\r\n\t#ifdef GPU_INSTANCE\r\n\t\tworldMat = a_WorldMat;\r\n\t#else\r\n\t\tworldMat = u_WorldMat;\r\n\t#endif\r\n\r\n\tmat3 worldInvMat;\r\n\t#ifdef BONE\r\n\t\tworldInvMat=INVERSE_MAT(mat3(worldMat*skinTransform));\r\n\t#else\r\n\t\tworldInvMat=INVERSE_MAT(mat3(worldMat));\r\n\t#endif  \r\n\tv_Normal=normalize(a_Normal*worldInvMat);\r\n\t#if defined(NORMALMAP)\r\n\t\tv_Tangent=normalize(a_Tangent0.xyz*worldInvMat);\r\n\t\tv_Binormal=cross(v_Normal,v_Tangent)*a_Tangent0.w;\r\n\t#endif\r\n\r\n\tvec3 positionWS=(worldMat*position).xyz;\r\n\t#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)\r\n\t\tv_ViewDir = u_CameraPos-positionWS;\r\n\t#endif\r\n\tv_PositionWorld = positionWS;\r\n\r\n\t#if defined(DIFFUSEMAP) || defined(MASKMAP) || defined(EMISSIONMAP) || defined(FOGMAP) ||((defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT))&&(defined(SPECULARMAP)||defined(NORMALMAP)))\r\n\t\t#ifdef TILINGOFFSET\r\n\t\t\tv_Texcoord0=TransformUV(a_Texcoord0,u_TilingOffset);\r\n\t\t#else\r\n\t\t\tv_Texcoord0=a_Texcoord0;\r\n\t\t#endif\r\n\t#endif\r\n\r\n\t#if defined(COLOR)&&defined(ENABLEVERTEXCOLOR)\r\n\t\tv_Color=a_Color;\r\n\t#endif\r\n\r\n\tgl_Position=remapGLPositionZ(gl_Position);\r\n}'
    , b = Laya.Shader3D
    , F = Laya.SubShader
    , x = Laya.VertexMesh;
class H {
    static init() {
        var e = {
            a_Position: x.MESH_POSITION0,
            a_Color: x.MESH_COLOR0,
            a_Normal: x.MESH_NORMAL0,
            a_Texcoord0: x.MESH_TEXTURECOORDINATE0,
            a_Texcoord1: x.MESH_TEXTURECOORDINATE1,
            a_BoneWeights: x.MESH_BLENDWEIGHT0,
            a_BoneIndices: x.MESH_BLENDINDICES0,
            a_Tangent0: x.MESH_TANGENT0,
            a_MvpMatrix: x.MESH_MVPMATRIX_ROW0,
            a_WorldMat: x.MESH_WORLDMATRIX_ROW0
        }
            , t = {
                u_Bones: b.PERIOD_CUSTOM,
                u_WorldMat: b.PERIOD_SPRITE,
                u_MvpMatrix: b.PERIOD_SPRITE,
                u_Projection: b.PERIOD_CAMERA,
                u_LightmapScaleOffset: b.PERIOD_SPRITE,
                u_LightMap: b.PERIOD_SPRITE,
                u_LightMapDirection: b.PERIOD_SPRITE,
                u_CameraPos: b.PERIOD_CAMERA,
                u_Viewport: b.PERIOD_CAMERA,
                u_ProjectionParams: b.PERIOD_CAMERA,
                u_View: b.PERIOD_CAMERA,
                u_ViewProjection: b.PERIOD_CAMERA,
                u_ReflectTexture: b.PERIOD_SCENE,
                u_ReflectIntensity: b.PERIOD_SCENE,
                u_DirationLightCount: b.PERIOD_SCENE,
                u_LightBuffer: b.PERIOD_SCENE,
                u_LightClusterBuffer: b.PERIOD_SCENE,
                u_AmbientColor: b.PERIOD_SCENE,
                u_ShadowBias: b.PERIOD_SCENE,
                u_ShadowLightDirection: b.PERIOD_SCENE,
                u_ShadowMap: b.PERIOD_SCENE,
                u_ShadowParams: b.PERIOD_SCENE,
                u_ShadowSplitSpheres: b.PERIOD_SCENE,
                u_ShadowMatrices: b.PERIOD_SCENE,
                u_ShadowMapSize: b.PERIOD_SCENE,
                u_Time: b.PERIOD_SCENE,
                u_AmbientSHAr: b.PERIOD_SCENE,
                u_AmbientSHAg: b.PERIOD_SCENE,
                u_AmbientSHAb: b.PERIOD_SCENE,
                u_AmbientSHBr: b.PERIOD_SCENE,
                u_AmbientSHBg: b.PERIOD_SCENE,
                u_AmbientSHBb: b.PERIOD_SCENE,
                u_AmbientSHC: b.PERIOD_SCENE,
                u_FogColor: b.PERIOD_SCENE,
                u_FogRange: b.PERIOD_SCENE,
                u_FogStart: b.PERIOD_SCENE,
                "u_DirectionLight.color": b.PERIOD_SCENE,
                "u_DirectionLight.direction": b.PERIOD_SCENE,
                "u_SunLight.color": b.PERIOD_SCENE,
                "u_SunLight.direction": b.PERIOD_SCENE,
                "u_PointLight.position": b.PERIOD_SCENE,
                "u_PointLight.range": b.PERIOD_SCENE,
                "u_PointLight.color": b.PERIOD_SCENE,
                "u_SpotLight.position": b.PERIOD_SCENE,
                "u_SpotLight.direction": b.PERIOD_SCENE,
                "u_SpotLight.range": b.PERIOD_SCENE,
                "u_SpotLight.spot": b.PERIOD_SCENE,
                "u_SpotLight.color": b.PERIOD_SCENE,
                u_DiffuseTexture: b.PERIOD_MATERIAL,
                u_DiffuseColor: b.PERIOD_MATERIAL,
                u_NormalTexture: b.PERIOD_MATERIAL,
                u_SpecularColor: b.PERIOD_MATERIAL,
                u_RimColor: b.PERIOD_MATERIAL,
                u_Contrast: b.PERIOD_MATERIAL,
                u_Specular: b.PERIOD_MATERIAL,
                u_SpecularSmooth: b.PERIOD_MATERIAL,
                u_RimPower: b.PERIOD_MATERIAL,
                u_MaskTexture: b.PERIOD_MATERIAL,
                u_EmissionTexture: b.PERIOD_MATERIAL,
                u_EmissionDirectionX: b.PERIOD_MATERIAL,
                u_EmissionDirectionY: b.PERIOD_MATERIAL,
                u_EmissionPower: b.PERIOD_MATERIAL,
                u_EmissionColor: b.PERIOD_MATERIAL,
                u_FogTexture: b.PERIOD_MATERIAL,
                u_FogDirectionX: b.PERIOD_MATERIAL,
                u_FogDirectionY: b.PERIOD_MATERIAL,
                u_FogMapScale: b.PERIOD_MATERIAL,
                u_FogPower: b.PERIOD_MATERIAL,
                u_FadeFogColor: b.PERIOD_MATERIAL,
                u_FadeHeightFogColor: b.PERIOD_MATERIAL,
                u_FadeFogNear: b.PERIOD_MATERIAL,
                u_FadeFogFar: b.PERIOD_MATERIAL,
                u_HeightFogPower: b.PERIOD_MATERIAL,
                u_HeightFogStart: b.PERIOD_MATERIAL,
                u_HeightFogRange: b.PERIOD_MATERIAL
            }
            , r = {
                s_Cull: b.RENDER_STATE_CULL,
                s_Blend: b.RENDER_STATE_BLEND,
                s_BlendSrc: b.RENDER_STATE_BLEND_SRC,
                s_BlendDst: b.RENDER_STATE_BLEND_DST,
                s_DepthTest: b.RENDER_STATE_DEPTH_TEST,
                s_DepthWrite: b.RENDER_STATE_DEPTH_WRITE
            }
            , n = b.add("BlinnPhongFog", null, null, !0)
            , i = new F(e, t);
        n.addSubShader(i),
            i.addShaderPass(w, M, r, "Forward")
    }
}
var V = Laya.Shader3D;
class z extends Laya.Material {
    constructor() {
        super(),
            this.setShaderName("JellyGradient"),
            this.renderQueue = Laya.Material.RENDERQUEUE_OPAQUE
    }
    static init() {
        Laya.ClassUtils.regClass("Laya.JellyGradient", z)
    }
    static clone(e) {
        let t = new z;
        return t._ColorStart = e._ColorStart,
            t._ColorEnd = e._ColorEnd,
            t._TillingX = e._TillingX,
            t._TillingY = e._TillingY,
            t._OffsetX = e._OffsetX,
            t._OffsetY = e._OffsetY,
            t._FlowX = e._FlowX,
            t._FlowY = e._FlowY,
            t._FadeLerpX = e._FadeLerpX,
            t._FadeLerpZ = e._FadeLerpZ,
            t._FadeStart = e._FadeStart,
            t._FadeRange = e._FadeRange,
            t._SpecColor = e._SpecColor,
            t._RimColor = e._RimColor,
            t._MainTex = e._MainTex,
            t._Contrast = e._Contrast,
            t._Specular = e._Specular,
            t._SpecSmooth = e._SpecSmooth,
            t._RimPower = e._RimPower,
            t._ScalePower = e._ScalePower,
            t._MaskTex = e._MaskTex,
            t._EmissionDirX = e._EmissionDirX,
            t._EmissionDirY = e._EmissionDirY,
            t._EmissionPower = e._EmissionPower,
            t._EmissionColor = e._EmissionColor,
            t._OutlineColor = e._OutlineColor,
            t._OutlineFractor = e._OutlineFractor,
            t
    }
    get _TillingX() {
        return this._shaderValues.getNumber(z.TILLINGX)
    }
    set _TillingX(e) {
        this._shaderValues.setNumber(z.TILLINGX, e)
    }
    get _TillingY() {
        return this._shaderValues.getNumber(z.TILLINGY)
    }
    set _TillingY(e) {
        this._shaderValues.setNumber(z.TILLINGY, e)
    }
    get _OffsetX() {
        return this._shaderValues.getNumber(z.OFFSETX)
    }
    set _OffsetX(e) {
        this._shaderValues.setNumber(z.OFFSETX, e)
    }
    get _OffsetY() {
        return this._shaderValues.getNumber(z.OFFSETY)
    }
    set _OffsetY(e) {
        this._shaderValues.setNumber(z.OFFSETY, e)
    }
    get _FlowX() {
        return this._shaderValues.getNumber(z.FLOWX)
    }
    set _FlowX(e) {
        this._shaderValues.setNumber(z.FLOWX, e)
    }
    get _FlowY() {
        return this._shaderValues.getNumber(z.FLOWY)
    }
    set _FlowY(e) {
        this._shaderValues.setNumber(z.FLOWY, e)
    }
    get _ColorStart() {
        return this._shaderValues.getVector(z.GRADIENTSTART)
    }
    set _ColorStart(e) {
        this._shaderValues.setVector(z.GRADIENTSTART, e)
    }
    get _ColorEnd() {
        return this._shaderValues.getVector(z.GRADIENTEND)
    }
    set _ColorEnd(e) {
        this._shaderValues.setVector(z.GRADIENTEND, e)
    }
    get _FadeLerpX() {
        return this._shaderValues.getNumber(z.FADELERPX)
    }
    set _FadeLerpX(e) {
        this._shaderValues.setNumber(z.FADELERPX, e)
    }
    get _FadeLerpZ() {
        return this._shaderValues.getNumber(z.FADELERPZ)
    }
    set _FadeLerpZ(e) {
        this._shaderValues.setNumber(z.FADELERPZ, e)
    }
    get _FadeStart() {
        return this._shaderValues.getNumber(z.FADESTART)
    }
    set _FadeStart(e) {
        this._shaderValues.setNumber(z.FADESTART, e)
    }
    get _FadeRange() {
        return this._shaderValues.getNumber(z.FADERANGE)
    }
    set _FadeRange(e) {
        this._shaderValues.setNumber(z.FADERANGE, e)
    }
    get _Intensity() {
        return this._shaderValues.getNumber(z.INTENSITY)
    }
    set _Intensity(e) {
        this._shaderValues.setNumber(z.INTENSITY, e)
    }
    get _SpecColor() {
        return this._shaderValues.getVector(z.SPECULARCOLOR)
    }
    set _SpecColor(e) {
        this._shaderValues.setVector(z.SPECULARCOLOR, e)
    }
    get _RimColor() {
        return this._shaderValues.getVector(z.RIMCOLOR)
    }
    set _RimColor(e) {
        this._shaderValues.setVector(z.RIMCOLOR, e)
    }
    get _MainTex() {
        return this._shaderValues.getTexture(z.DIFFUSETEXTURE)
    }
    set _MainTex(e) {
        e ? this._shaderValues.addDefine(z.SHADERDEFINE_DIFFUSEMAP) : this._shaderValues.removeDefine(z.SHADERDEFINE_DIFFUSEMAP),
            this._shaderValues.setTexture(z.DIFFUSETEXTURE, e)
    }
    get _Contrast() {
        return this._shaderValues.getNumber(z.CONTRAST)
    }
    set _Contrast(e) {
        this._shaderValues.setNumber(z.CONTRAST, e)
    }
    get _Specular() {
        return this._shaderValues.getNumber(z.SPECULAR)
    }
    set _Specular(e) {
        this._shaderValues.setNumber(z.SPECULAR, e)
    }
    get _SpecSmooth() {
        return this._shaderValues.getNumber(z.SPECUALRSMOOTH)
    }
    set _SpecSmooth(e) {
        this._shaderValues.setNumber(z.SPECUALRSMOOTH, e)
    }
    get _RimPower() {
        return this._shaderValues.getNumber(z.RIMPOWER)
    }
    set _RimPower(e) {
        this._shaderValues.setNumber(z.RIMPOWER, e)
    }
    get _ScalePower() {
        return this._shaderValues.getNumber(z.SCALEPOWER)
    }
    set _ScalePower(e) {
        this._shaderValues.setNumber(z.SCALEPOWER, e)
    }
    get _MaskTex() {
        return this._shaderValues.getTexture(z.MASKTEXTURE)
    }
    get _EmissionDirX() {
        return this._shaderValues.getNumber(z.EMISSIONDIRX)
    }
    get _EmissionDirY() {
        return this._shaderValues.getNumber(z.EMISSIONDIRY)
    }
    get _EmissionPower() {
        return this._shaderValues.getNumber(z.EMISSIONPOWER)
    }
    get _EmissionColor() {
        return this._shaderValues.getVector(z.EMISSIONCOLOR)
    }
    set _MaskTex(e) {
        e ? this._shaderValues.addDefine(z.SHADERDEFINE_EMIISIONMAP) : this._shaderValues.removeDefine(z.SHADERDEFINE_EMIISIONMAP),
            this._shaderValues.setTexture(z.MASKTEXTURE, e)
    }
    set _EmissionDirX(e) {
        this._shaderValues.setNumber(z.EMISSIONDIRX, e)
    }
    set _EmissionDirY(e) {
        this._shaderValues.setNumber(z.EMISSIONDIRY, e)
    }
    set _EmissionPower(e) {
        this._shaderValues.setNumber(z.EMISSIONPOWER, e)
    }
    set _EmissionColor(e) {
        this._shaderValues.setVector(z.EMISSIONCOLOR, e)
    }
    get _OutlineColor() {
        return this._shaderValues.getVector(z.OUTLINECOLOR)
    }
    set _OutlineColor(e) {
        this._shaderValues.setVector(z.OUTLINECOLOR, e)
    }
    get _OutlineFractor() {
        return this._shaderValues.getNumber(z.OUTLINEFRACTOR)
    }
    set _OutlineFractor(e) {
        e <= 0 ? this._shaderValues.removeDefine(z.SHADERDEFINE_OUTLINE) : this._shaderValues.addDefine(z.SHADERDEFINE_OUTLINE),
            this._shaderValues.setNumber(z.OUTLINEFRACTOR, e)
    }
}
z.DIFFUSETEXTURE = Laya.Shader3D.propertyNameToID("u_DiffuseTexture"),
    z.TILLINGX = Laya.Shader3D.propertyNameToID("u_TillingX"),
    z.TILLINGY = Laya.Shader3D.propertyNameToID("u_TillingY"),
    z.OFFSETX = Laya.Shader3D.propertyNameToID("u_OffsetX"),
    z.OFFSETY = Laya.Shader3D.propertyNameToID("u_OffsetY"),
    z.FLOWX = Laya.Shader3D.propertyNameToID("u_FlowX"),
    z.FLOWY = Laya.Shader3D.propertyNameToID("u_FlowY"),
    z.GRADIENTSTART = Laya.Shader3D.propertyNameToID("u_ColorStart"),
    z.GRADIENTEND = Laya.Shader3D.propertyNameToID("u_ColorEnd"),
    z.FADELERPX = Laya.Shader3D.propertyNameToID("u_FadeLerpX"),
    z.FADELERPZ = Laya.Shader3D.propertyNameToID("u_FadeLerpZ"),
    z.FADESTART = Laya.Shader3D.propertyNameToID("u_FadeStart"),
    z.FADERANGE = Laya.Shader3D.propertyNameToID("u_FadeRange"),
    z.INTENSITY = Laya.Shader3D.propertyNameToID("u_Intensity"),
    z.SPECULARCOLOR = Laya.Shader3D.propertyNameToID("u_SpecularColor"),
    z.RIMCOLOR = Laya.Shader3D.propertyNameToID("u_RimColor"),
    z.CONTRAST = Laya.Shader3D.propertyNameToID("u_Contrast"),
    z.SPECULAR = Laya.Shader3D.propertyNameToID("u_Specular"),
    z.SPECUALRSMOOTH = Laya.Shader3D.propertyNameToID("u_SpecularSmooth"),
    z.RIMPOWER = Laya.Shader3D.propertyNameToID("u_RimPower"),
    z.SCALEPOWER = Laya.Shader3D.propertyNameToID("u_ScalePower"),
    z.MASKTEXTURE = Laya.Shader3D.propertyNameToID("u_MaskTex"),
    z.EMISSIONDIRX = Laya.Shader3D.propertyNameToID("u_EmissionDirX"),
    z.EMISSIONDIRY = Laya.Shader3D.propertyNameToID("u_EmissionDirY"),
    z.EMISSIONPOWER = Laya.Shader3D.propertyNameToID("u_EmissionPower"),
    z.EMISSIONCOLOR = Laya.Shader3D.propertyNameToID("u_EmissionColor"),
    z.OUTLINECOLOR = V.propertyNameToID("u_OutlineColor"),
    z.OUTLINEFRACTOR = V.propertyNameToID("u_OutlineFractor"),
    z.SHADERDEFINE_OUTLINE = V.getDefineByName("OUTLINE"),
    z.SHADERDEFINE_DIFFUSEMAP = Laya.Shader3D.getDefineByName("DIFFUSEMAP"),
    z.SHADERDEFINE_EMIISIONMAP = Laya.Shader3D.getDefineByName("EMISSIONMAP");
var G = '#ifdef GL_FRAGMENT_PRECISION_HIGH\r\n\tprecision highp float;\r\n\tprecision highp int;\r\n#else\r\n\tprecision mediump float;\r\n\tprecision mediump int;\r\n#endif\r\n\r\n#include "Lighting.glsl";\r\n#include "Shadow.glsl";\r\n\r\nuniform vec4 u_ColorStart;\r\nuniform vec4 u_ColorEnd;\r\nuniform float u_FadeLerpX;\r\nuniform float u_FadeLerpZ;\r\nuniform float u_FadeStart;\r\nuniform float u_FadeRange;\r\nuniform float u_Intensity;\r\n\r\nuniform vec4 u_SpecularColor;\r\nuniform vec4 u_RimColor;\r\nuniform float u_Contrast;\r\nuniform float u_Specular;\r\nuniform float u_SpecularSmooth;\r\nuniform float u_RimPower;\r\n\r\n#if defined(COLOR)\r\n\tvarying vec4 v_Color;\r\n#endif\r\n\r\n#ifdef DIFFUSEMAP\r\n    uniform sampler2D u_DiffuseTexture;\r\n#endif\r\n\r\n#if defined(DIFFUSEMAP) || defined(EMISSIONMAP) ||((defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT))&&(defined(SPECULARMAP)||defined(NORMALMAP)))\r\n\tvarying vec2 v_Texcoord0;\r\n#endif\r\n\r\nvarying vec3 v_Normal;\r\n#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)\r\n\tvarying vec3 v_ViewDir; \r\n\r\n\tuniform vec3 u_MaterialSpecular;\r\n\tuniform float u_Shininess;\r\n\r\n\t#ifdef LEGACYSINGLELIGHTING\r\n\t\t#ifdef DIRECTIONLIGHT\r\n\t\t\tuniform DirectionLight u_DirectionLight;\r\n\t\t#endif\r\n\t\t#ifdef POINTLIGHT\r\n\t\t\tuniform PointLight u_PointLight;\r\n\t\t#endif\r\n\t\t#ifdef SPOTLIGHT\r\n\t\t\tuniform SpotLight u_SpotLight;\r\n\t\t#endif\r\n\t#else\r\n\t\tuniform mat4 u_View;\r\n\t\tuniform vec4 u_ProjectionParams;\r\n\t\tuniform vec4 u_Viewport;\r\n\t\tuniform int u_DirationLightCount;\r\n\t\tuniform DirectionLight u_SunLight;\r\n\t\tuniform sampler2D u_LightBuffer;\r\n\t\tuniform sampler2D u_LightClusterBuffer;\r\n\t#endif\r\n\r\n\t#ifdef SPECULARMAP \r\n\t\tuniform sampler2D u_SpecularTexture;\r\n\t#endif\r\n#endif\r\n\r\n#ifdef NORMALMAP \r\n\tuniform sampler2D u_NormalTexture;\r\n\tvarying vec3 v_Tangent;\r\n\tvarying vec3 v_Binormal;\r\n#endif\r\n\r\nvarying vec3 v_vertex;\r\n\r\n#ifdef EMISSIONMAP\r\n\tuniform float u_Time;\r\n\tuniform sampler2D u_MaskTex;\r\n\tuniform float u_EmissionDirX;\r\n\tuniform float u_EmissionDirY;\r\n\tuniform float u_EmissionPower;\r\n\tuniform vec4 u_EmissionColor;\r\n#endif\r\n\r\n#ifdef FOG\r\n\tuniform float u_FogStart;\r\n\tuniform float u_FogRange;\r\n\tuniform vec3 u_FogColor;\r\n#endif\r\n\r\nvarying vec3 v_PositionWorld;\r\n\r\n#include "GlobalIllumination.glsl";//"GlobalIllumination.glsl use uniform should at front of this\r\n\r\n#if defined(CALCULATE_SHADOWS)&&!defined(SHADOW_CASCADE)\r\n\tvarying vec4 v_ShadowCoord;\r\n#endif\r\n\r\nvoid main() {\r\n\tfloat fadeLerpY = clamp((v_vertex.y - u_FadeStart) / max(u_FadeRange, 0.01), 0.0, 1.0);\r\n\tfloat fadeLerpX = clamp((v_vertex.x - u_FadeStart) / max(u_FadeRange, 0.01), 0.0, 1.0);\r\n\tfloat fadeLerpZ = clamp((v_vertex.z - u_FadeStart) / max(u_FadeRange, 0.01), 0.0, 1.0);\r\n\tfloat fadeLerp = mix(fadeLerpY, fadeLerpX, u_FadeLerpX);\r\n\tfadeLerp = mix(fadeLerp, fadeLerpZ, u_FadeLerpZ);\r\n    vec4 baseColor = mix(u_ColorStart, u_ColorEnd, fadeLerp) * u_Intensity;\r\n    #ifdef DIFFUSEMAP\r\n\t\tvec4 difTexColor=texture2D(u_DiffuseTexture, v_Texcoord0);\r\n\t\tbaseColor=baseColor*difTexColor;\r\n\t#endif\r\n\r\n    vec3 normal;//light and SH maybe use normal\r\n\t#if defined(NORMALMAP)\r\n\t\tvec3 normalMapSample = texture2D(u_NormalTexture, v_Texcoord0).rgb;\r\n\t\tnormal = normalize(NormalSampleToWorldSpace(normalMapSample, v_Normal, v_Tangent,v_Binormal));\r\n\t#else\r\n\t\tnormal = normalize(v_Normal);\r\n\t#endif\r\n\r\n    LayaGIInput giInput;\r\n\tvec3 globalDiffuse=layaGIBase(giInput,1.0,normal);\r\n\r\n    vec3 lightDir;\r\n\tvec3 lightColor;\r\n\t#if defined(DIRECTIONLIGHT)\r\n\t\t#ifdef LEGACYSINGLELIGHTING\r\n\t\t\tlightDir = u_DirectionLight.direction;\r\n\t\t\tlightColor = u_DirectionLight.color;\r\n\t\t#else\r\n\t\t\tlightDir = u_SunLight.direction;\r\n\t\t\tlightColor = u_SunLight.color;\r\n\t\t#endif\r\n\t#else\r\n\t\tlightDir = normalize(vec3(1.0, 1.0, 1.0));\r\n\t\tlightColor = vec3(1.0, 1.0, 1.0);\r\n\t#endif\r\n\tlightDir = -lightDir;\r\n\r\n    vec3 viewDir;\r\n\t#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)\r\n\t\tviewDir = normalize(v_ViewDir);\r\n\t#else\r\n\t\tviewDir = normalize(vec3(1.0, 1.0, 1.0));\r\n\t#endif\r\n\r\n\tvec3 halfDir = normalize(lightDir + viewDir);\r\n\r\n    float ndl = max(0.001, dot(normal, lightDir));\r\n\tfloat ndh = max(0.001, dot(normal, halfDir));\r\n\tfloat ndv = max(0.001, dot(normal, viewDir));\r\n\r\n    float diff = ndl * u_Contrast + (1.0 - u_Contrast);\r\n    float spec = pow(ndh, u_Specular * 128.0);\r\n\tspec = smoothstep(0.5 - u_SpecularSmooth * 0.5, 0.5 + u_SpecularSmooth * 0.5, spec);\r\n    vec3 specular = u_SpecularColor.rgb * spec;\r\n\r\n    float rim = (1.0 - ndv) * ndl;\r\n    vec3 rimColor = u_RimColor.rgb * u_RimPower * rim;\r\n\r\n\tfloat atten = 1.0;\r\n\r\n\t#ifdef LEGACYSINGLELIGHTING\r\n\t\t#ifdef DIRECTIONLIGHT\r\n\t\t\t#ifdef CALCULATE_SHADOWS\r\n\t\t\t\t#ifdef SHADOW_CASCADE\r\n\t\t\t\t\tvec4 shadowCoord = getShadowCoord(vec4(v_PositionWorld,1.0));\r\n\t\t\t\t#else\r\n\t\t\t\t\tvec4 shadowCoord = v_ShadowCoord;\r\n\t\t\t\t#endif\r\n\t\t\t\tatten=sampleShadowmap(shadowCoord);\r\n\t\t\t#endif\r\n\t\t#endif\r\n\t#else\r\n\t\t#ifdef DIRECTIONLIGHT\r\n\t\t\tfor (int i = 0; i < MAX_LIGHT_COUNT; i++) \r\n\t\t\t{\r\n\t\t\t\tif(i >= u_DirationLightCount)\r\n\t\t\t\t\tbreak;\r\n\t\t\t\tDirectionLight directionLight = getDirectionLight(u_LightBuffer,i);\r\n\t\t\t\t#ifdef CALCULATE_SHADOWS\r\n\t\t\t\t\tif(i == 0)\r\n\t\t\t\t\t{\r\n\t\t\t\t\t\t#ifdef SHADOW_CASCADE\r\n\t\t\t\t\t\t\tvec4 shadowCoord = getShadowCoord(vec4(v_PositionWorld,1.0));\r\n\t\t\t\t\t\t#else\r\n\t\t\t\t\t\t\tvec4 shadowCoord = v_ShadowCoord;\r\n\t\t\t\t\t\t#endif\r\n\t\t\t\t\t\tatten *= sampleShadowmap(shadowCoord);\r\n\t\t\t\t\t}\r\n\t\t\t\t#endif\r\n\t\t\t}\r\n\t\t#endif\r\n\t#endif\r\n\r\n\tvec3 finalCol = globalDiffuse * baseColor.rgb + (baseColor.rgb * lightColor + rimColor) * diff * atten + specular;\r\n\r\n\t#ifdef EMISSIONMAP\r\n\t\tvec4 maskCol = texture2D(u_MaskTex, v_Texcoord0);\r\n\t\tvec4 emissionCol = u_EmissionColor;\r\n\t\tvec4 emissionOffsetCol = texture2D(u_MaskTex, v_vertex.xz * v_vertex.y + vec2(-u_EmissionDirX, u_EmissionDirY) * u_Time * 0.05);\r\n\t\temissionCol.rgb = emissionCol.rgb * u_EmissionPower * (1.0 - emissionOffsetCol.g);\r\n\t\tfinalCol = finalCol + rim * emissionCol.rgb;\r\n\t#endif\r\n\r\n\tgl_FragColor.rgb = finalCol;\r\n\r\n    #if defined(COLOR)\r\n\t\tgl_FragColor.rgb = gl_FragColor.rgb * v_Color.rgb;\r\n\t#endif\r\n\r\n\t#ifdef FOG\r\n\t\tfloat lerpFact=clamp((1.0/gl_FragCoord.w-u_FogStart)/u_FogRange,0.0,1.0);\r\n\t\tgl_FragColor.rgb=mix(gl_FragColor.rgb,u_FogColor,lerpFact);\r\n\t#endif\r\n}'
    , B = '#include "Lighting.glsl";\r\n#include "Shadow.glsl";\r\n\r\nattribute vec4 a_Position;\r\n\r\n#ifdef GPU_INSTANCE\r\n\tattribute mat4 a_MvpMatrix;\r\n#else\r\n\tuniform mat4 u_MvpMatrix;\r\n#endif\r\n\r\nuniform float u_Time;\r\n\r\n#if defined(DIFFUSEMAP)||defined(EMISSIONMAP)||((defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT))&&(defined(SPECULARMAP)||defined(NORMALMAP)))||(defined(LIGHTMAP)&&defined(UV))\r\n\tattribute vec2 a_Texcoord0;\r\n\tvarying vec2 v_Texcoord0;\r\n\tuniform float u_TillingX;\r\n\tuniform float u_TillingY;\r\n\tuniform float u_OffsetX;\r\n\tuniform float u_OffsetY;\r\n\tuniform float u_FlowX;\r\n\tuniform float u_FlowY;\r\n#endif\r\n\r\n#if defined(LIGHTMAP)&&defined(UV1)\r\n\tattribute vec2 a_Texcoord1;\r\n#endif\r\n\r\n#ifdef LIGHTMAP\r\n\tuniform vec4 u_LightmapScaleOffset;\r\n\tvarying vec2 v_LightMapUV;\r\n#endif\r\n\r\n#ifdef COLOR\r\n\tattribute vec4 a_Color;\r\n\tvarying vec4 v_Color;\r\n#endif\r\n\r\n#ifdef BONE\r\n\tconst int c_MaxBoneCount = 24;\r\n\tattribute vec4 a_BoneIndices;\r\n\tattribute vec4 a_BoneWeights;\r\n\tuniform mat4 u_Bones[c_MaxBoneCount];\r\n#endif\r\n\r\nattribute vec3 a_Normal;\r\nvarying vec3 v_Normal; \r\n\r\n#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)\r\n\tuniform vec3 u_CameraPos;\r\n\tvarying vec3 v_ViewDir; \r\n#endif\r\n\r\n#if defined(NORMALMAP)\r\n\tattribute vec4 a_Tangent0;\r\n\tvarying vec3 v_Tangent;\r\n\tvarying vec3 v_Binormal;\r\n#endif\r\n\r\n#ifdef GPU_INSTANCE\r\n\tattribute mat4 a_WorldMat;\r\n#else\r\n\tuniform mat4 u_WorldMat;\r\n#endif\r\n\r\nvarying vec3 v_vertex;\r\nvarying vec3 v_PositionWorld;\r\n\r\n#if defined(CALCULATE_SHADOWS)&&!defined(SHADOW_CASCADE)\r\n\tvarying vec4 v_ShadowCoord;\r\n#endif\r\n\r\n#ifdef CALCULATE_SPOTSHADOWS\r\n\tvarying vec4 v_SpotShadowCoord;\r\n#endif\r\n\r\n#ifdef TILINGOFFSET\r\n\tuniform vec4 u_TilingOffset;\r\n#endif\r\n\r\nuniform float u_ScalePower;\r\n\r\nvoid main()\r\n{\r\n\tvec4 position;\r\n\r\n\t// position = vec4(a_Position.xyz + a_Normal.xyz * u_ScalePower, a_Position.w);\r\n\t\r\n\t#ifdef BONE\r\n\t\tmat4 skinTransform = u_Bones[int(a_BoneIndices.x)] * a_BoneWeights.x;\r\n\t\tskinTransform += u_Bones[int(a_BoneIndices.y)] * a_BoneWeights.y;\r\n\t\tskinTransform += u_Bones[int(a_BoneIndices.z)] * a_BoneWeights.z;\r\n\t\tskinTransform += u_Bones[int(a_BoneIndices.w)] * a_BoneWeights.w;\r\n\t\tposition=skinTransform*a_Position;\r\n\t#else\r\n\t\tposition=a_Position;\r\n\t#endif\r\n\tv_vertex = position.xyz;\r\n\t#ifdef GPU_INSTANCE\r\n\t\tgl_Position = a_MvpMatrix * position;\r\n\t#else\r\n\t\tgl_Position = u_MvpMatrix * position;\r\n\t#endif\r\n\t\r\n\tmat4 worldMat;\r\n\t#ifdef GPU_INSTANCE\r\n\t\tworldMat = a_WorldMat;\r\n\t#else\r\n\t\tworldMat = u_WorldMat;\r\n\t#endif\r\n\r\n\tmat3 worldInvMat;\r\n\t#ifdef BONE\r\n\t\tworldInvMat=INVERSE_MAT(mat3(worldMat*skinTransform));\r\n\t#else\r\n\t\tworldInvMat=INVERSE_MAT(mat3(worldMat));\r\n\t#endif  \r\n\tv_Normal=normalize(a_Normal*worldInvMat);\r\n\t#if defined(NORMALMAP)\r\n\t\tv_Tangent=normalize(a_Tangent0.xyz*worldInvMat);\r\n\t\tv_Binormal=cross(v_Normal,v_Tangent)*a_Tangent0.w;\r\n\t#endif\r\n\r\n\tvec3 positionWS=(worldMat*position).xyz;\r\n\t#if defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT)\r\n\t\tv_ViewDir = u_CameraPos-positionWS;\r\n\t#endif\r\n\tv_PositionWorld = positionWS;\r\n\r\n\t#if defined(DIFFUSEMAP)||defined(EMISSIONMAP)||((defined(DIRECTIONLIGHT)||defined(POINTLIGHT)||defined(SPOTLIGHT))&&(defined(SPECULARMAP)||defined(NORMALMAP)))\r\n\t\tv_Texcoord0=TransformUV(a_Texcoord0,vec4(u_TillingX, u_TillingY, u_OffsetX + u_FlowX * u_Time * 0.05, u_OffsetY + u_FlowY * u_Time * 0.05));\r\n\t#endif\r\n\r\n\t#ifdef LIGHTMAP\r\n\t\t#ifdef UV1\r\n\t\t\tv_LightMapUV=vec2(a_Texcoord1.x,1.0-a_Texcoord1.y)*u_LightmapScaleOffset.xy+u_LightmapScaleOffset.zw;\r\n\t\t#else\r\n\t\t\tv_LightMapUV=vec2(a_Texcoord0.x,1.0-a_Texcoord0.y)*u_LightmapScaleOffset.xy+u_LightmapScaleOffset.zw;\r\n\t\t#endif \r\n\t\tv_LightMapUV.y=1.0-v_LightMapUV.y;\r\n\t#endif\r\n\r\n\t#if defined(COLOR)\r\n\t\tv_Color=a_Color;\r\n\t#endif\r\n\r\n\t#if defined(CALCULATE_SHADOWS)&&!defined(SHADOW_CASCADE)\r\n\t\tv_ShadowCoord =getShadowCoord(vec4(positionWS,1.0));\r\n\t#endif\r\n\r\n\t#ifdef CALCULATE_SPOTSHADOWS\r\n\t\tv_SpotShadowCoord = u_SpotViewProjectMatrix*vec4(positionWS,1.0);\r\n\t#endif\r\n\r\n\tgl_Position=remapGLPositionZ(gl_Position);\r\n}'
    , U = "#ifdef GL_FRAGMENT_PRECISION_HIGH\r\n\tprecision highp float;\r\n\tprecision highp int;\r\n#else\r\n\tprecision mediump float;\r\n\tprecision mediump int;\r\n#endif\r\n\r\n#ifdef OUTLINE\r\n\tuniform vec4 u_OutlineColor;\r\n#endif\r\n\r\nvoid main()\r\n{\r\n\t#ifdef OUTLINE\r\n    \tgl_FragColor = u_OutlineColor; \r\n\t#else\r\n\t\tgl_FragColor = vec4(1.0,1.0,1.0,0.0);\r\n\t#endif\r\n}"
    , k = '#include "Lighting.glsl";\r\n\r\nattribute vec4 a_Position;\r\nattribute vec3 a_Normal;\r\n\r\n#ifdef BONE\r\n\tconst int c_MaxBoneCount = 24;\r\n\tattribute vec4 a_BoneIndices;\r\n\tattribute vec4 a_BoneWeights;\r\n\tuniform mat4 u_Bones[c_MaxBoneCount];\r\n#endif\r\n\r\n#ifdef GPU_INSTANCE\r\n\tattribute mat4 a_MvpMatrix;\r\n#else\r\n\tuniform mat4 u_MvpMatrix;\r\n#endif\r\n\r\n#ifdef OUTLINE\r\n    uniform float u_OutlineFractor;\r\n#endif\r\n\r\n\r\nvoid main()\r\n{\r\n    vec4 position = a_Position;\r\n    vec3 normal = a_Normal;\r\n\r\n    mat4 mvpMatrix;\r\n    #ifdef GPU_INSTANCE\r\n        mvpMatrix = a_MvpMatrix;\r\n    #else\r\n        mvpMatrix = u_MvpMatrix;\r\n    #endif\r\n\r\n    #ifdef BONE\r\n\t\tmat4 skinTransform = u_Bones[int(a_BoneIndices.x)] * a_BoneWeights.x;\r\n\t\tskinTransform += u_Bones[int(a_BoneIndices.y)] * a_BoneWeights.y;\r\n\t\tskinTransform += u_Bones[int(a_BoneIndices.z)] * a_BoneWeights.z;\r\n\t\tskinTransform += u_Bones[int(a_BoneIndices.w)] * a_BoneWeights.w;\r\n        mvpMatrix = mvpMatrix * skinTransform;\r\n\t#endif\r\n\r\n    #ifdef OUTLINE\r\n        // vec3 dir = normalize(position.xyz + a_Normal);\r\n        vec3 dir = normalize(a_Normal);\r\n        float vz = position.x * mvpMatrix[0][2] + position.y * mvpMatrix[1][2] + position.z * mvpMatrix[2][2] + position.w * mvpMatrix[3][2];\r\n        #ifdef BONE\r\n            position = vec4(position.xyz + dir * (1.0 / vz) * u_OutlineFractor, position.w);\r\n        #else\r\n            position = vec4(position.xyz + dir * vz * u_OutlineFractor * 0.1, position.w);\r\n        #endif\r\n    #endif\r\n\r\n\tgl_Position = mvpMatrix * position;\r\n    gl_Position=remapGLPositionZ(gl_Position);\r\n}'
    , X = Laya.Shader3D
    , W = Laya.SubShader
    , j = Laya.VertexMesh;
class Y {
    static init(e) {
        var t = {
            a_Position: j.MESH_POSITION0,
            a_Color: j.MESH_COLOR0,
            a_Normal: j.MESH_NORMAL0,
            a_Texcoord0: j.MESH_TEXTURECOORDINATE0,
            a_Texcoord1: j.MESH_TEXTURECOORDINATE1,
            a_BoneWeights: j.MESH_BLENDWEIGHT0,
            a_BoneIndices: j.MESH_BLENDINDICES0,
            a_Tangent0: j.MESH_TANGENT0,
            a_MvpMatrix: j.MESH_MVPMATRIX_ROW0,
            a_WorldMat: j.MESH_WORLDMATRIX_ROW0
        }
            , r = {
                u_Bones: X.PERIOD_CUSTOM,
                u_WorldMat: X.PERIOD_SPRITE,
                u_MvpMatrix: X.PERIOD_SPRITE,
                u_Projection: X.PERIOD_CAMERA,
                u_LightmapScaleOffset: X.PERIOD_SPRITE,
                u_LightMap: X.PERIOD_SPRITE,
                u_LightMapDirection: X.PERIOD_SPRITE,
                u_CameraPos: X.PERIOD_CAMERA,
                u_Viewport: X.PERIOD_CAMERA,
                u_ProjectionParams: X.PERIOD_CAMERA,
                u_View: X.PERIOD_CAMERA,
                u_ViewProjection: X.PERIOD_CAMERA,
                u_ReflectTexture: X.PERIOD_SCENE,
                u_ReflectIntensity: X.PERIOD_SCENE,
                u_FogStart: X.PERIOD_SCENE,
                u_FogRange: X.PERIOD_SCENE,
                u_FogColor: X.PERIOD_SCENE,
                u_DirationLightCount: X.PERIOD_SCENE,
                u_LightBuffer: X.PERIOD_SCENE,
                u_LightClusterBuffer: X.PERIOD_SCENE,
                u_AmbientColor: X.PERIOD_SCENE,
                u_ShadowBias: X.PERIOD_SCENE,
                u_ShadowLightDirection: X.PERIOD_SCENE,
                u_ShadowMap: X.PERIOD_SCENE,
                u_ShadowParams: X.PERIOD_SCENE,
                u_ShadowSplitSpheres: X.PERIOD_SCENE,
                u_ShadowMatrices: X.PERIOD_SCENE,
                u_ShadowMapSize: X.PERIOD_SCENE,
                u_Time: X.PERIOD_SCENE,
                u_AmbientSHAr: X.PERIOD_SCENE,
                u_AmbientSHAg: X.PERIOD_SCENE,
                u_AmbientSHAb: X.PERIOD_SCENE,
                u_AmbientSHBr: X.PERIOD_SCENE,
                u_AmbientSHBg: X.PERIOD_SCENE,
                u_AmbientSHBb: X.PERIOD_SCENE,
                u_AmbientSHC: X.PERIOD_SCENE,
                "u_DirectionLight.color": X.PERIOD_SCENE,
                "u_DirectionLight.direction": X.PERIOD_SCENE,
                "u_SunLight.color": X.PERIOD_SCENE,
                "u_SunLight.direction": X.PERIOD_SCENE,
                "u_PointLight.position": X.PERIOD_SCENE,
                "u_PointLight.range": X.PERIOD_SCENE,
                "u_PointLight.color": X.PERIOD_SCENE,
                "u_SpotLight.position": X.PERIOD_SCENE,
                "u_SpotLight.direction": X.PERIOD_SCENE,
                "u_SpotLight.range": X.PERIOD_SCENE,
                "u_SpotLight.spot": X.PERIOD_SCENE,
                "u_SpotLight.color": X.PERIOD_SCENE,
                u_DiffuseTexture: X.PERIOD_MATERIAL,
                u_TillingX: X.PERIOD_MATERIAL,
                u_TillingY: X.PERIOD_MATERIAL,
                u_OffsetX: X.PERIOD_MATERIAL,
                u_OffsetY: X.PERIOD_MATERIAL,
                u_FlowX: X.PERIOD_MATERIAL,
                u_FlowY: X.PERIOD_MATERIAL,
                u_ColorStart: X.PERIOD_MATERIAL,
                u_ColorEnd: X.PERIOD_MATERIAL,
                u_FadeLerpX: X.PERIOD_MATERIAL,
                u_FadeLerpZ: X.PERIOD_MATERIAL,
                u_FadeStart: X.PERIOD_MATERIAL,
                u_FadeRange: X.PERIOD_MATERIAL,
                u_Intensity: X.PERIOD_MATERIAL,
                u_SpecularColor: X.PERIOD_MATERIAL,
                u_RimColor: X.PERIOD_MATERIAL,
                u_Contrast: X.PERIOD_MATERIAL,
                u_Specular: X.PERIOD_MATERIAL,
                u_SpecularSmooth: X.PERIOD_MATERIAL,
                u_RimPower: X.PERIOD_MATERIAL,
                u_MaskTex: X.PERIOD_MATERIAL,
                u_EmissionDirX: X.PERIOD_MATERIAL,
                u_EmissionDirY: X.PERIOD_MATERIAL,
                u_EmissionPower: X.PERIOD_MATERIAL,
                u_EmissionColor: X.PERIOD_MATERIAL,
                u_OutlineFractor: Laya.Shader3D.PERIOD_MATERIAL,
                u_OutlineColor: Laya.Shader3D.PERIOD_MATERIAL
            }
            , n = {
                s_Cull: X.RENDER_STATE_CULL,
                s_Blend: X.RENDER_STATE_BLEND,
                s_BlendSrc: X.RENDER_STATE_BLEND_SRC,
                s_BlendDst: X.RENDER_STATE_BLEND_DST,
                s_DepthTest: X.RENDER_STATE_DEPTH_TEST,
                s_DepthWrite: X.RENDER_STATE_DEPTH_WRITE
            }
            , i = X.add("JellyGradient", null, null, !0)
            , a = new W(t, r);
        if (i.addSubShader(a),
            !e) {
            a.addShaderPass(k, U).renderState.cull = Laya.RenderState.CULL_FRONT
        }
        a.addShaderPass(B, G, n, "Forward");
        a.addShaderPass(this.MeshBlinnPhongShadowCasterVS, this.MeshBlinnPhongShadowCasterPS, n, "ShadowCaster")
    }
}
Y.MeshBlinnPhongShadowCasterPS = '#ifdef GL_FRAGMENT_PRECISION_HIGH\r\n\tprecision highp float;\r\n\tprecision highp int;\r\n#else\r\n\tprecision mediump float;\r\n\tprecision mediump int;\r\n#endif\r\n\r\n#include "ShadowCasterFS.glsl"\r\n\r\nvoid main()\r\n{\r\n\tgl_FragColor=shadowCasterFragment();\r\n}',
    Y.MeshBlinnPhongShadowCasterVS = '#include "ShadowCasterVS.glsl"\r\n\r\nvoid main()\r\n{\r\n\tvec4 positionCS =  shadowCasterVertex();\r\n\tgl_Position=remapGLPositionZ(positionCS);\r\n}';
var K = Laya.Shader3D;
class Z extends Laya.UnlitMaterial {
    constructor() {
        super(),
            this.setShaderName("UnlitTiled"),
            this.renderMode = Z.RENDERMODE_CUTOUT
    }
    static init() {
        Laya.ClassUtils.regClass("Laya.UnlitTiled", Z)
    }
    get _MainTex() {
        return this.albedoTexture
    }
    set _MainTex(e) {
        this.albedoTexture = e
    }
    get _MaskTex() {
        return this._shaderValues.getTexture(Z.MASKTEXTURE)
    }
    set _MaskTex(e) {
        e ? this._shaderValues.addDefine(Z.SHADERDEFINE_MASK) : this._shaderValues.removeDefine(Z.SHADERDEFINE_MASK),
            this._shaderValues.setTexture(Z.MASKTEXTURE, e)
    }
    get _Color() {
        return this.albedoColor
    }
    set _Color(e) {
        this.albedoColor = e
    }
    get _TileX() {
        return this._shaderValues.getNumber(Z.TILEX)
    }
    set _TileX(e) {
        this._shaderValues.setNumber(Z.TILEX, e)
    }
    get _TileY() {
        return this._shaderValues.getNumber(Z.TILEY)
    }
    set _TileY(e) {
        this._shaderValues.setNumber(Z.TILEY, e)
    }
}
Z.MASKTEXTURE = K.propertyNameToID("u_MaskTexture"),
    Z.TILEX = K.propertyNameToID("u_TileX"),
    Z.TILEY = K.propertyNameToID("u_TileY"),
    Z.SHADERDEFINE_MASK = K.getDefineByName("MASKTEXTURE");
var J = "#ifdef GL_FRAGMENT_PRECISION_HIGH\r\n\tprecision highp float;\r\n#else\r\n\tprecision mediump float;\r\n#endif\r\n\r\n#if defined(COLOR)&&defined(ENABLEVERTEXCOLOR)\r\n\tvarying vec4 v_Color;\r\n#endif\r\n\r\n#ifdef ALBEDOTEXTURE\r\n\tuniform sampler2D u_AlbedoTexture;\r\n\tvarying vec2 v_Texcoord0;\r\n    uniform float u_TileX;\r\n    uniform float u_TileY;\r\n#endif\r\n\r\n#ifdef MASKTEXTURE\r\n    uniform sampler2D u_MaskTexture;\r\n#endif\r\n\r\nuniform vec4 u_AlbedoColor;\r\n\r\n#ifdef ALPHATEST\r\n\tuniform float u_AlphaTestValue;\r\n#endif\r\n\r\n#ifdef FOG\r\n\tuniform float u_FogStart;\r\n\tuniform float u_FogRange;\r\n\t#ifdef ADDTIVEFOG\r\n\t#else\r\n\t\tuniform vec3 u_FogColor;\r\n\t#endif\r\n#endif\r\n\r\nvoid main()\r\n{\r\n\tvec4 color =  u_AlbedoColor;\r\n    vec2 uvTiled = v_Texcoord0;\r\n    uvTiled.x = uvTiled.x * u_TileX;\r\n    uvTiled.y = uvTiled.y * u_TileY;\r\n\t#ifdef ALBEDOTEXTURE\r\n\t\tcolor *= texture2D(u_AlbedoTexture, uvTiled);\r\n\t#endif\r\n\t#if defined(COLOR)&&defined(ENABLEVERTEXCOLOR)\r\n\t\tcolor *= v_Color;\r\n\t#endif\r\n\r\n    float cut = 1.0;\r\n    #ifdef MASKTEXTURE\r\n        vec4 maskCol = texture2D(u_MaskTexture, v_Texcoord0);\r\n        cut = maskCol.a;\r\n    #endif\r\n\t\r\n\t#ifdef ALPHATEST\r\n\t\tif(cut < u_AlphaTestValue)\r\n\t\t\tdiscard;\r\n\t#endif\r\n\t\r\n\tgl_FragColor = color;\r\n\t\r\n\t#ifdef FOG\r\n\t\tfloat lerpFact = clamp((1.0 / gl_FragCoord.w - u_FogStart) / u_FogRange, 0.0, 1.0);\r\n\t\t#ifdef ADDTIVEFOG\r\n\t\t\tgl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(0.0), lerpFact);\r\n\t\t#else\r\n\t\t\tgl_FragColor.rgb = mix(gl_FragColor.rgb, u_FogColor, lerpFact);\r\n\t\t#endif\r\n\t#endif\r\n\t\r\n}\r\n\r\n"
    , Q = '#include "Lighting.glsl";\r\n\r\nattribute vec4 a_Position;\r\n\r\nattribute vec2 a_Texcoord0;\r\n\r\n#ifdef GPU_INSTANCE\r\n\tattribute mat4 a_MvpMatrix;\r\n#else\r\n\tuniform mat4 u_MvpMatrix;\r\n#endif\r\n\r\nattribute vec4 a_Color;\r\nvarying vec4 v_Color;\r\nvarying vec2 v_Texcoord0;\r\n\r\n#ifdef TILINGOFFSET\r\n\tuniform vec4 u_TilingOffset;\r\n#endif\r\n\r\n#ifdef BONE\r\n\tconst int c_MaxBoneCount = 24;\r\n\tattribute vec4 a_BoneIndices;\r\n\tattribute vec4 a_BoneWeights;\r\n\tuniform mat4 u_Bones[c_MaxBoneCount];\r\n#endif\r\n\r\nvoid main() {\r\n\tvec4 position;\r\n\t#ifdef BONE\r\n\t\tmat4 skinTransform = u_Bones[int(a_BoneIndices.x)] * a_BoneWeights.x;\r\n\t\tskinTransform += u_Bones[int(a_BoneIndices.y)] * a_BoneWeights.y;\r\n\t\tskinTransform += u_Bones[int(a_BoneIndices.z)] * a_BoneWeights.z;\r\n\t\tskinTransform += u_Bones[int(a_BoneIndices.w)] * a_BoneWeights.w;\r\n\t\tposition=skinTransform*a_Position;\r\n\t#else\r\n\t\tposition=a_Position;\r\n\t#endif\r\n\t#ifdef GPU_INSTANCE\r\n\t\tgl_Position = a_MvpMatrix * position;\r\n\t#else\r\n\t\tgl_Position = u_MvpMatrix * position;\r\n\t#endif\r\n\r\n\t#ifdef TILINGOFFSET\r\n\t\tv_Texcoord0=TransformUV(a_Texcoord0,u_TilingOffset);\r\n\t#else\r\n\t\tv_Texcoord0=a_Texcoord0;\r\n\t#endif\r\n\r\n\t#if defined(COLOR)&&defined(ENABLEVERTEXCOLOR)\r\n\t\tv_Color = a_Color;\r\n\t#endif\r\n\tgl_Position=remapGLPositionZ(gl_Position);\r\n}'
    , q = Laya.Shader3D
    , $ = Laya.SubShader
    , ee = Laya.VertexMesh;
class te {
    static init() {
        var e = {
            a_Position: ee.MESH_POSITION0,
            a_Color: ee.MESH_COLOR0,
            a_Normal: ee.MESH_NORMAL0,
            a_Texcoord0: ee.MESH_TEXTURECOORDINATE0,
            a_BoneWeights: ee.MESH_BLENDWEIGHT0,
            a_BoneIndices: ee.MESH_BLENDINDICES0,
            a_MvpMatrix: ee.MESH_MVPMATRIX_ROW0,
            a_WorldMat: ee.MESH_WORLDMATRIX_ROW0
        }
            , t = {
                u_Bones: q.PERIOD_CUSTOM,
                u_AlbedoTexture: q.PERIOD_MATERIAL,
                u_AlbedoColor: q.PERIOD_MATERIAL,
                u_TileX: q.PERIOD_MATERIAL,
                u_TileY: q.PERIOD_MATERIAL,
                u_MaskTexture: q.PERIOD_MATERIAL,
                u_TilingOffset: q.PERIOD_MATERIAL,
                u_WorldMat: q.PERIOD_SPRITE,
                u_AlphaTestValue: q.PERIOD_MATERIAL,
                u_CameraPos: q.PERIOD_CAMERA,
                u_MvpMatrix: q.PERIOD_SPRITE,
                u_FogStart: q.PERIOD_SCENE,
                u_FogRange: q.PERIOD_SCENE,
                u_FogColor: q.PERIOD_SCENE
            }
            , r = {
                s_Cull: q.RENDER_STATE_CULL,
                s_Blend: q.RENDER_STATE_BLEND,
                s_BlendSrc: q.RENDER_STATE_BLEND_SRC,
                s_BlendDst: q.RENDER_STATE_BLEND_DST,
                s_DepthTest: q.RENDER_STATE_DEPTH_TEST,
                s_DepthWrite: q.RENDER_STATE_DEPTH_WRITE
            }
            , n = q.add("UnlitTiled", null, null, !0)
            , i = new $(e, t);
        n.addSubShader(i),
            i.addShaderPass(Q, J, r)
    }
}
new class {
    constructor() {
        window.Laya3D ? Laya3D.init(d.width, d.height) : Laya.init(d.width, d.height, Laya.WebGL),
            Laya.Physics && Laya.Physics.enable(),
            Laya.DebugPanel && Laya.DebugPanel.enable(),
            Laya.stage.scaleMode = d.scaleMode,
            Laya.stage.screenMode = d.screenMode,
            Laya.stage.alignV = d.alignV,
            Laya.stage.alignH = d.alignH,
            Laya.URL.exportSceneToJson = d.exportSceneToJson,
            (d.debug || "true" == Laya.Utils.getQueryString("debug")) && Laya.enableDebugPanel(),
            d.physicsDebug && Laya.PhysicsDebugDraw && Laya.PhysicsDebugDraw.enable(),
            d.stat && Laya.Stat.show(),
            Laya.alertGlobalError(!0),
            Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION)
    }
    onVersionLoaded() {
        Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded))
    }
    onConfigLoaded() {
        return __awaiter(this, void 0, void 0, function* () {
            te.init(),
                Z.init(),
                H.init(),
                v.init(),
                Y.init(),
                z.init(),
                n.PlayerInfo_load(),
                zs.core.layaLoadingPage = o,
                Laya.stage.addComponent(A)
        })
    }
}