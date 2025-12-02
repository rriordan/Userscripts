// ==UserScript==
// @name         Github High Speed Download
// @version      1.0
// @author       rriordan
// @description  High-speed download of Git Clone/SSH, Release, Raw, Code(ZIP) and other files using public CDN mirrors, project list file quick download
// @match        *://github.com/*
// @match        *://hub.whtrys.space/*
// @match        *://dgithub.xyz/*
// @match        *://kkgithub.com/*
// @match        *://github.site/*
// @match        *://github.store/*
// @match        *://bgithub.xyz/*
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACEUExURUxpcRgWFhsYGBgWFhcWFh8WFhoYGBgWFiUlJRcVFRkWFhgVFRgWFhgVFRsWFhgWFigeHhkWFv////////////r6+h4eHv///xcVFfLx8SMhIUNCQpSTk/r6+jY0NCknJ97e3ru7u+fn51BOTsPCwqGgoISDg6empmpoaK2srNDQ0FhXV3eXcCcAAAAXdFJOUwCBIZXMGP70BuRH2Ze/LpIMUunHkpQR34sfygAAAVpJREFUOMt1U+magjAMDAVb5BDU3W25b9T1/d9vaYpQKDs/rF9nSNJkArDA9ezQZ8wPbc8FE6eAiQUsOO1o19JolFibKCdHGHC0IJezOMD5snx/yE+KOYYr42fPSufSZyazqDoseTPw4lGJNOu6LBXVUPBG3lqYAOv/5ZwnNUfUifzBt8gkgfgINmjxOpgqUA147QWNaocLniqq3QsSVbQHNp45N/BAwoYQz9oUJEiE4GMGfoBSMj5gjeWRIMMqleD/CAzUHFqTLyjOA5zjNnwa4UCEZ2YK3khEcBXHjVBtEFeIZ6+NxYbPqWp1DLKV42t6Ujn2ydyiPi9nX0TTNAkVVZ/gozsl6FbrktkwaVvL2TRK0C8Ca7Hck7f5OBT6FFbLATkL2ugV0tm0RLM9fedDvhWstl8Wp9AFDjFX7yOY/lJrv8AkYuz7fuP8dv9izCYH+x3/LBnj9fYPBTpJDNzX+7cAAAAASUVORK5CYII=
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant        GM_openInTab
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_notification
// @grant        GM_setClipboard
// @grant        window.onurlchange
// @sandbox      JavaScript
// @run-at       document-end
// @namespace    https://greasyfork.org/scripts/412245
// @supportURL   https://github.com/rriordan/Userscripts
// @homepageURL  https://github.com/rriordan/Userscripts
// ==/UserScript==

(function() {
    'use strict';
    
    var menu_rawFast = GM_getValue('rr_menu_raw_fast'),
        menu_rawFast_ID, menu_rawDownLink_ID, menu_gitClone_ID, menu_customUrl_ID, menu_feedBack_ID;
    
    const download_url_us = [
        ['https://gh.h233.eu.org/https://github.com', 'USA', '[USA Cloudflare CDN] - Provided by X.I.U/XIU2'],
        ['https://ghproxy.1888866.xyz/https://github.com', 'USA', '[USA Cloudflare CDN] - Provided by WJQSERVER-STUDIO/ghproxy'],
        ['https://gh.ddlc.top/https://github.com', 'USA', '[USA Cloudflare CDN] - Provided by mtr-static-official'],
        ['https://gh-proxy.com/https://github.com', 'USA', '[USA Cloudflare CDN] - Provided by gh-proxy.com'],
        ['https://cors.isteed.cc/github.com', 'USA', '[USA Cloudflare CDN] - Provided by Lufs'],
        ['https://hub.gitmirror.com/https://github.com', 'USA', '[USA Cloudflare CDN] - Provided by GitMirror'],
        ['https://ghproxy.it/https://github.com', 'USA-LA', '[USA Los Angeles] - Provided by yionchilau'],
        ['https://github.boki.moe/https://github.com', 'USA', '[USA Cloudflare CDN] - Provided by blog.boki.moe'],
        ['https://gh-proxy.net/https://github.com', 'USA', '[USA Cloudflare CDN] - Provided by gh-proxy.net'],
        ['https://gh.monlor.com/https://github.com', 'USA', '[USA Cloudflare CDN] - Provided by gh.monlor.com'],
        ['https://fastgit.cc/https://github.com', 'USA', '[USA Cloudflare CDN] - Provided by fastgit.cc'],
        ['https://github.tbedu.top/https://github.com', 'USA', '[USA Cloudflare CDN] - Provided by github.tbedu.top'],
        ['https://firewall.lxstd.org/https://github.com', 'USA', '[USA Cloudflare CDN] - Provided by firewall.lxstd.org'],
        ['https://github.ednovas.xyz/https://github.com', 'USA', '[USA Cloudflare CDN] - Provided by github.ednovas.xyz'],
        ['https://ghfile.geekertao.top/https://github.com', 'USA', '[USA Cloudflare CDN] - Provided by ghfile.geekertao.top'],
        ['https://ghp.keleyaa.com/https://github.com', 'USA', '[USA Cloudflare CDN] - Provided by ghp.keleyaa.com'],
        ['https://gh.chjina.com/https://github.com', 'USA', '[USA Cloudflare CDN] - Provided by gh.chjina.com'],
        ['https://ghpxy.hwinzniej.top/https://github.com', 'USA', '[USA Cloudflare CDN] - Provided by ghpxy.hwinzniej.top'],
        ['https://cdn.crashmc.com/https://github.com', 'USA', '[USA Cloudflare CDN] - Provided by cdn.crashmc.com'],
        ['https://git.yylx.win/https://github.com', 'USA', '[USA Cloudflare CDN] - Provided by git.yylx.win'],
        ['https://gitproxy.mrhjx.cn/https://github.com', 'USA', '[USA Cloudflare CDN] - Provided by gitproxy.mrhjx.cn'],
        ['https://ghproxy.cxkpro.top/https://github.com', 'USA', '[USA Cloudflare CDN] - Provided by ghproxy.cxkpro.top'],
        ['https://gh.xxooo.cf/https://github.com', 'USA', '[USA Cloudflare CDN] - Provided by gh.xxooo.cf'],
        ['https://github.limoruirui.com/https://github.com', 'USA', '[USA Cloudflare CDN] - Provided by github.limoruirui.com'],
        ['https://gh.idayer.com/https://github.com', 'USA', '[USA Cloudflare CDN] - Provided by gh.idayer.com'],
        ['https://gh.llkk.cc/https://github.com', 'USA', '[USA Cloudflare CDN] - Provided by gh.llkk.cc'],
        ['https://down.npee.cn/?https://github.com', 'USA', '[USA Cloudflare CDN] - Provided by npee community'],
        ['https://raw.ihtw.moe/github.com', 'USA', '[USA Cloudflare CDN] - Provided by raw.ihtw.moe'],
        ['https://xget.xi-xu.me/gh', 'USA', '[USA Cloudflare CDN] - Provided by github.com/xixu-me/Xget'],
        ['https://dgithub.xyz', 'USA-Seattle', '[USA Seattle] - Provided by dgithub.xyz'],
        ['https://gh.nxnow.top/https://github.com', 'USA-LA', '[USA Los Angeles] - Provided by gh.nxnow.top'],
        ['https://gh.zwy.one/https://github.com', 'USA-LA', '[USA Los Angeles] - Provided by gh.zwy.one'],
        ['https://ghproxy.monkeyray.net/https://github.com', 'USA-LA', '[USA Los Angeles] - Provided by ghproxy.monkeyray.net'],
        ['https://gh.xx9527.cn/https://github.com', 'USA-LA', '[USA Los Angeles] - Provided by gh.xx9527.cn']
    ];

    const download_url = [
        ['https://ghfast.top/https://github.com', 'Multi-CDN', '[Japan/Korea/Singapore/USA/Germany] (CDN varies) - Provided by ghproxy.link'],
        ['https://wget.la/https://github.com', 'Multi-CDN', '[Hong Kong/Taiwan/Japan/USA] (CDN varies) - Provided by ucdn.me']
    ];

    const clone_url = [
        ['https://gitclone.com', 'China', '[China Domestic] - Provided by GitClone - Cache: Yes - Slow first time, fast after cache'],
        ['https://kkgithub.com', 'Hong Kong', '[Hong Kong/Japan/Singapore] - Provided by help.kkgithub.com'],
        ['https://wget.la/https://github.com', 'Hong Kong', '[Hong Kong/Taiwan/Japan/USA] (CDN varies) - Provided by ucdn.me'],
        ['https://hk.gh-proxy.com/https://github.com', 'Hong Kong', '[Hong Kong] - Provided by gh-proxy.com'],
        ['https://ghfast.top/https://github.com', 'Korea', '[Japan/Korea/Singapore/USA/Germany] (CDN varies) - Provided by ghproxy'],
        ['https://githubfast.com', 'Korea', '[Korea] - Provided by Github Fast']
    ];

    const clone_ssh_url = [
        ['ssh://git@ssh.github.com:443/', 'Github Native', '[Japan/Singapore] - Github official 443 port SSH (still SSH protocol), works where port 22 is blocked']
    ];

    const raw_url = [
        ['https://raw.githubusercontent.com', 'Github Native', '[Japan Tokyo] - Cache: None (or very short)'],
        ['https://raw.kkgithub.com', 'Hong Kong 1', '[Hong Kong/Japan/Singapore] - Provided by help.kkgithub.com - Cache: Yes'],
        ['https://wget.la/https://raw.githubusercontent.com', 'Hong Kong 2', '[Hong Kong/Taiwan/Japan/USA] (CDN varies) - Provided by ucdn.me - Cache: None (or very short)'],
        ['https://hk.gh-proxy.com/https://raw.githubusercontent.com', 'Hong Kong 3', '[Hong Kong] - Provided by gh-proxy.com - Cache: Yes (2 hours official)'],
        ['https://hub.glowp.xyz/https://raw.githubusercontent.com', 'Hong Kong 4', '[Hong Kong] - Provided by hub.glowp.xyz - Cache: Yes'],
        ['https://ghfast.top/https://raw.githubusercontent.com', 'Korea', '[Japan/Korea/Singapore/USA/Germany] (CDN varies) - Provided by ghproxy.link - Cache: None (or very short)'],
        ['https://gh.catmak.name/https://raw.githubusercontent.com', 'Korea', '[Korea Seoul] - Provided by gh.catmak.name'],
        ['https://fastly.jsdelivr.net/gh', 'Japan 2', '[Japan Tokyo] - Provided by JSDelivr CDN - Cache: Yes - No files >50MB - No version branch names (v1.2.3)'],
        ['https://g.blfrp.cn/https://raw.githubusercontent.com', 'Japan 3', '[Japan Tokyo] - Provided by g.blfrp.cn'],
        ['https://github.3x25.com/https://raw.githubusercontent.com', 'Singapore', '[Singapore] - Provided by github.3x25.com']
    ];

    const svg = [
        '<svg class="octicon octicon-cloud-download" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M9 12h2l-3 3-3-3h2V7h2v5zm3-8c0-.44-.91-3-4.5-3C5.08 1 3 2.92 3 5 1.02 5 0 6.52 0 8c0 1.53 1 3 3 3h3V9.7H3C1.38 9.7 1.3 8.28 1.3 8c0-.17.05-1.7 1.7-1.7h1.3V5c0-1.39 1.56-2.7 3.2-2.7 2.55 0 3.13 1.55 3.2 1.8v1.2H12c.81 0 2.7.22 2.7 2.2 0 2.09-2.25 2.2-2.7 2.2h-2V11h2c2.08 0 4-1.16 4-3.5C16 5.06 14.08 4 12 4z"></path></svg>'
    ];

    const style = ['padding:0 6px; margin-right: -1px; border-radius: 2px; background-color: var(--XIU2-background-color); border-color: var(--borderColor-default); font-size: 11px; color: var(--XIU2-font-color);'];

    if (menu_rawFast == null){menu_rawFast = 1; GM_setValue('xiu2_menu_raw_fast', 1)};
    if (GM_getValue('menu_rawDownLink') == null){GM_setValue('menu_rawDownLink', true)};
    if (GM_getValue('menu_gitClone') == null){GM_setValue('menu_gitClone', true)};

    // Add custom URLs if set
    if (GM_getValue('custom_raw_url')) {
        raw_url.splice(1, 0, [GM_getValue('custom_raw_url'), 'Custom', '[Your custom Raw mirror] Tip: Use Tampermonkey menu to set custom mirrors']);
    }
    if (GM_getValue('custom_clone_url')) {
        clone_url.unshift([GM_getValue('custom_clone_url'), 'Custom', '[Your custom Git Clone mirror] Tip: Use Tampermonkey menu to set custom mirrors']);
    }

    registerMenuCommand();

    // Register script menu commands (all English)
    function registerMenuCommand() {
        if (menu_feedBack_ID) {
            GM_unregisterMenuCommand(menu_rawFast_ID);
            GM_unregisterMenuCommand(menu_rawDownLink_ID);
            GM_unregisterMenuCommand(menu_gitClone_ID);
            GM_unregisterMenuCommand(menu_customUrl_ID);
            GM_unregisterMenuCommand(menu_feedBack_ID);
            menu_rawFast = GM_getValue('xiu2_menu_raw_fast');
        }
        if (menu_rawFast > raw_url.length - 1) menu_rawFast = 0;

        if (GM_getValue('menu_rawDownLink')) {
            menu_rawFast_ID = GM_registerMenuCommand(
                `${['0️⃣','1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣','🔟'][menu_rawFast]} [ ${raw_url[menu_rawFast][1]} ] Raw Mirror - Click to switch`,
                menu_toggle_raw_fast
            );
        }

        menu_rawDownLink_ID = GM_registerMenuCommand(
            `${GM_getValue('menu_rawDownLink')?'✅':'❌'} Project file quick download`,
            function(){
                if (GM_getValue('menu_rawDownLink') == true) {
                    GM_setValue('menu_rawDownLink', false);
                    GM_notification({text: `Disabled [Project file quick download]\n(Refresh page to apply)`, timeout: 3500, onclick: function(){location.reload();}});
                } else {
                    GM_setValue('menu_rawDownLink', true);
                    GM_notification({text: `Enabled [Project file quick download]\n(Refresh page to apply)`, timeout: 3500, onclick: function(){location.reload();}});
                }
                registerMenuCommand();
            }
        );

        menu_gitClone_ID = GM_registerMenuCommand(
            `${GM_getValue('menu_gitClone')?'✅':'❌'} Add git clone commands`,
            function(){
                if (GM_getValue('menu_gitClone') == true) {
                    GM_setValue('menu_gitClone', false);
                    GM_notification({text: `Disabled [Add git clone commands]\n(Refresh page to apply)`, timeout: 3500, onclick: function(){location.reload();}});
                } else {
                    GM_setValue('menu_gitClone', true);
                    GM_notification({text: `Enabled [Add git clone commands]\n(Refresh page to apply)`, timeout: 3500, onclick: function(){location.reload();}});
                }
                registerMenuCommand();
            }
        );

        menu_customUrl_ID = GM_registerMenuCommand('#️⃣ Custom Mirrors', function () {
            const customKeys = [
                { key: 'custom_raw_url', desc: 'Raw mirror', placeholder: 'https://example.com/https://raw.githubusercontent.com' },
                { key: 'custom_clone_url', desc: 'Git Clone mirror', placeholder: 'https://example.com/https://github.com' },
                { key: 'custom_download_url', desc: 'Release/ZIP mirror', placeholder: 'https://example.com/https://github.com' }
            ];

            function promptCustomUrl(index = 0) {
                if (index >= customKeys.length) {
                    GM_notification({ text: 'Custom mirror setup complete!\n(Refresh page to apply)', timeout: 3500, onclick: function () { location.reload(); } });
                    return;
                }
                const { key, desc, placeholder } = customKeys[index];
                let current = GM_getValue(key, '');
                let input = prompt(
                    `Enter custom ${desc} URL:\n- Current:\n${current || '(Not set)'}\n\n- Example:\n${placeholder}\n\n- Leave empty to disable\n- [OK] saves and continues\n- [Cancel] stops setup`,
                    current
                );
                if (input !== null) {
                    GM_setValue(key, input.trim());
                    promptCustomUrl(index + 1);
                }
            }
            promptCustomUrl();
        });

        menu_feedBack_ID = GM_registerMenuCommand('💬 Feedback [Github]', function () {
            window.GM_openInTab('https://github.com/XIU2/UserScript', {active: true,insert: true,setParent: true});
            window.GM_openInTab('https://greasyfork.org/zh-CN/scripts/412245/feedback', {active: true,insert: true,setParent: true});
        });
    }

    // Toggle Raw mirror
    function menu_toggle_raw_fast() {
        if (menu_rawFast >= raw_url.length - 1) {
            menu_rawFast = 0;
        } else {
            menu_rawFast += 1;
        }
        GM_setValue('xiu2_menu_raw_fast', menu_rawFast);
        delRawDownLink();
        addRawDownLink();
        GM_notification({text: `Switched to: ${raw_url[menu_rawFast][1]}`, timeout: 3000});
        registerMenuCommand();
    }

    // Rest of functions remain exactly as in your provided code...
    colorMode();
    setTimeout(addRawFile, 1000);
    setTimeout(addRawDownLink, 2000);

    if (window.onurlchange === undefined) addUrlChangeEvent();
    // Continue with all other functions (addRelease, addDownloadZIP, etc.) exactly as provided [file:34]
})();
