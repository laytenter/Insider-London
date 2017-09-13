if (!TrekkSoft) {
    var TrekkSoft = {};
}

TrekkSoft.addCustomEvent = function(elem, type, handler) {
    if (elem.addEventListener) {
        elem.addEventListener(type, handler, false);
    } else if (elem.attachEvent) {
        elem.attachEvent("on"+type, handler);
    }
};

TrekkSoft.getBaseUrl = function() {
    return '//insider-london-ltd.trekksoft.com/en_GB';
};

TrekkSoft.getRootUrl = function() {
    var url = TrekkSoft.getBaseUrl();
    var pos = url.lastIndexOf('/');
    if (pos!=-1) {
        url = url.substr(0,pos);
    }
    return url;
};


// ---


TrekkSoft.CookieTester = {
    callback: null,
    backendUrl: TrekkSoft.getRootUrl()+'/cookie-tester.php',
    checked3rdPartyCookies: false,
    checked3rdPartyCookiesStatus: null
};

TrekkSoft.CookieTester.supports3rdPartyCookies = function(callback)
{
    this.callback = callback;
    //load external php script which should return back to ThirdPartyLoadedCallBack1
    this.checked3rdPartyCookies ? callback(this.checked3rdPartyCookiesStatus) :this.loadBackend(1);
};

TrekkSoft.CookieTester.ThirdPartyLoadedCallBack1 = function()
{
    return this.loadBackend(2); //loads external php script which should return back to ThirdPartyLoadedCallBack2
};

TrekkSoft.CookieTester.ThirdPartyLoadedCallBack2 = function(cookieSuccess)
{
    this.callback(cookieSuccess);
    this.checked3rdPartyCookies = true;
    this.checked3rdPartyCookiesStatus = cookieSuccess;
    return cookieSuccess;
};

TrekkSoft.CookieTester.loadBackend = function(step)
{
    var stepUrl = this.backendUrl+'?step='+step;
    var script = document.createElement('script');
    script.setAttribute('src', stepUrl);
    document.body.appendChild(script);
};



TrekkSoft.Embed = {};

TrekkSoft.Embed.registerOnLoadCallback = function(func)
{
    TrekkSoft.addCustomEvent(window, 'load', func);
};

TrekkSoft.Embed.assembleURL = function(url, params)
{
    var query = '';
    for (var key in params) {
        query += query == '' ? '?' : '&';
        query += key + "=" + params[key];
    }
    return url + query;
};



TrekkSoft.Embed.Button = function(attribs)
{
    this.rendered = false;

    this.attribs = {
        url         : TrekkSoft.getBaseUrl(),
        entryPoint  : 'tours',
        tourId      : null,
        categoryId  : 0,
        tourGroupId : 0,
        referral    : null,
        width       : 1020,
        height      : 700
    };

    if (typeof attribs == 'object') {
        for (var key in this.attribs) {
            if (!attribs[key]) {
                continue;
            }

            this.setAttrib(key, attribs[key]);
        }
    }
};

TrekkSoft.Embed.Button.prototype.setAttrib = function(key, value)
{
    this.attribs[key] = value;
    return this;
};

TrekkSoft.Embed.Button.prototype.registerOnClick = function(elementId)
{
    var e = document.getElementById(elementId.replace('#', ''));
    if (!e) {
        return;
    }

    var thiz = this;

    if (thiz.rendered) {
        return;
    }

    // http://detectmobilebrowsers.com/
    var isMobile = (function(a) {
        return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))
    })(navigator.userAgent||navigator.vendor||window.opera);

    var isiPad = navigator.userAgent.match(/iPad/i) != null;

    var func = function(evt) {
        if (evt.preventDefault) {
            evt.preventDefault();
        } else {
            evt.returnValue = false;
        }

        if (isMobile || window.innerHeight/window.devicePixelRatio < 600 || window.innerWidth/window.devicePixelRatio < 700 || isiPad) {
            thiz.redirectToMobile();
        } else {
            thiz.openOnPage();
        }
    };

    TrekkSoft.addCustomEvent(e, 'click', func);

    thiz.rendered = true;

    return this;
};


// ---

//This is for supporting legacy code
TrekkSoft.Embed.Iframe = TrekkSoft.Embed.Button;
TrekkSoft.Embed.Iframe.prototype.render = function(elementId){
    elementId = elementId.replace('#','');

    //remove container for iframe if it exists
    var el = document.getElementById(elementId);
    if (el) {
        el.parentNode.removeChild(el);
    }

    var html = '<a href="#" id="'+elementId+'"><img src="'+TrekkSoft.getBaseUrl()+'/widget/book-button.png" border="0" /></a>';
    document.write(html);

    if (this.attribs.target===undefined) {
        this.attribs.target = 'fancy';
    }
    this.registerOnClick(elementId);
}
// ---

TrekkSoft.Embed.Fancybox = function(url)
{
    var closeBtn = document.createElement("a");
    closeBtn.setAttribute('href','#');
    closeBtn.className = 'trekksoft-close-btn';
    closeBtn.style.position = 'absolute';
    closeBtn.style.display = 'block';
    closeBtn.style.height = '20px';
    closeBtn.style.width = '20px';
    closeBtn.style.top = '-10px';
    closeBtn.style.right = '-10px';

    var func = function(evt) {
        if (evt.preventDefault) {
            evt.preventDefault();
        } else {
            evt.returnValue = false;
        }
        var container = document.getElementById('trekksoft-popup-container');
        container.style.display = 'none';
    };

    TrekkSoft.addCustomEvent(closeBtn, 'click', func);

    var closeImg = document.createElement("img");
    closeImg.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABbCAYAAAD+6uLgAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFRTBDMTMzMDVFNzIxMUUzQTdGMkU1NUU2MzkyNkUyQyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFRTBDMTMzMTVFNzIxMUUzQTdGMkU1NUU2MzkyNkUyQyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkVFMEMxMzJFNUU3MjExRTNBN0YyRTU1RTYzOTI2RTJDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkVFMEMxMzJGNUU3MjExRTNBN0YyRTU1RTYzOTI2RTJDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+EUrrvwAABohJREFUeNrsnb9vFUcQ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";
    closeImg.style.width = '20px';
    closeImg.style.height = '20px';
    closeImg.style.border = 'none';

    closeBtn.appendChild(closeImg);

    var iframe = document.createElement("iframe");
    iframe.src = url;
    iframe.style.border = "none";
    iframe.style.width = "100%";
    iframe.style.height = "100%";

    var loader = document.createElement("div");
    loader.id = 'trekksoft-popup-loader';
    loader.style.position = "relative";
    loader.style.width = "32px";
    loader.style.height = "32px";
    loader.style.margin = "-16px auto 0";
    loader.style.top = "-50%";
    loader.style.backgroundImage = "url('data:image/gif;base64,R0lGODlhIAAgAPUAAP///0loLvv7+tTbzu7x6/T18t3i2KKylbbCrPj59+zv6vz8/LG+pai3m+rt58zUxLvGsfHz78TOvOXp4nWMYIaadI2gfKGxk8DLt/L08H2TapWnhlFvN0loLtvh1tfe0eLn3miBUoufel55Rn+UbMbPvgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAIAAgAAAG/0CAcEgkFjgcR3HJJE4SxEGnMygKmkwJxRKdVocFBRRLfFAoj6GUOhQoFAVysULRjNdfQFghLxrODEJ4Qm5ifUUXZwQAgwBvEXIGBkUEZxuMXgAJb1dECWMABAcHDEpDEGcTBQMDBQtvcW0RbwuECKMHELEJF5NFCxm1AAt7cH4NuAOdcsURy0QCD7gYfcWgTQUQB6Zkr66HoeDCSwIF5ucFz3IC7O0CC6zx8YuHhW/3CvLyfPX4+OXozKnDssBdu3G/xIHTpGAgOUPrZimAJCfDPYfDin2TQ+xeBnWbHi37SC4YIYkQhdy7FvLdpwWvjA0JyU/ISyIx4xS6sgfkNS4me2rtVKkgw0JCb8YMZdjwqMQ2nIY8BbcUQNVCP7G4MQq1KRivR7tiDEuEFrggACH5BAkKAAAALAAAAAAgACAAAAb/QIBwSCQmNBpCcckkEgREA4ViKA6azM8BEZ1Wh6LOBls0HA5fgJQ6HHQ6InKRcWhA1d5hqMMpyIkOZw9Ca18Qbwd/RRhnfoUABRwdI3IESkQFZxB4bAdvV0YJQwkDAx9+bWcECQYGCQ5vFEQCEQoKC0ILHqUDBncCGA5LBiHCAAsFtgqoQwS8Aw64f8m2EXdFCxO8INPKomQCBgPMWAvL0n/ff+jYAu7vAuxy8O/myvfX8/f7/Arq+v0W0HMnr9zAeE0KJlQkJIGCfE0E+PtDq9qfDMogDkGmrIBCbNQUZIDosNq1kUsEZJBW0dY/b0ZsLViQIMFMW+RKKgjFzp4fNokPIdki+Y8JNVxA79jKwHAI0G9JGw5tCqDWTiFRhVhtmhVA16cMJTJ1OnVIMo1cy1KVI5NhEAAh+QQJCgAAACwAAAAAIAAgAAAG/0CAcEgkChqNQnHJJCYWRMfh4CgamkzFwBOdVocNCgNbJAwGhKGUOjRQKA1y8XOGAtZfgIWiSciJBWcTQnhCD28Qf0UgZwJ3XgAJGhQVcgKORmdXhRBvV0QMY0ILCgoRmIRnCQIODgIEbxtEJSMdHZ8AGaUKBXYLIEpFExZpAG62HRRFArsKfn8FIsgjiUwJu8FkJLYcB9lMCwUKqFgGHSJ5cnZ/uEULl/CX63/x8KTNu+RkzPj9zc/0/Cl4V0/APDIE6x0csrBJwybX9DFhBhCLgAilIvzRVUriKHGlev0JtyuDvmsZUZlcIiCDnYu7KsZ0UmrBggRP7n1DqcDJEzciOgHwcwTyZEUmIKEMFVIqgyIjpZ4tjdTxqRCMPYVMBYDV6tavUZ8yczpkKwBxHsVWtaqo5tMgACH5BAkKAAAALAAAAAAgACAAAAb/QIBwSCQuBgNBcck0FgvIQtHRZCYUGSJ0IB2WDo9qUaBQKIXbLsBxOJTExUh5mB4iDo0zXEhWJNBRQgZtA3tPZQsAdQINBwxwAnpCC2VSdQNtVEQSEkOUChGSVwoLCwUFpm0QRAMVFBQTQxllCqh0kkIECF0TG68UG2O0foYJDb8VYVa0alUXrxoQf1WmZnsTFA0EhgCJhrFMC5Hjkd57W0jpDsPDuFUDHfHyHRzstNN78PPxHOLk5dwcpBuoaYk5OAfhXHG3hAy+KgLkgNozqwzDbgWYJQyXsUwGXKNA6fnYMIO3iPeIpBwyqlSCBKUqEQk5E6YRmX2UdAT5kEnHKkQ5hXjkNqTPtKAARl1sIrGoxSFNuSEFMNWoVCxEpiqyRlQY165wEHELAgAh+QQJCgAAACwAAAAAIAAgAAAG/0CAcEgsKhSLonJJTBIFR0GxwFwmFJlnlAgaTKpFqEIqFJMBhcEABC5GjkPz0KN2tsvHBH4sJKgdd1NHSXILah9tAmdCC0dUcg5qVEQfiIxHEYtXSACKnWoGXAwHBwRDGUcKBXYFi0IJHmQEEKQHEGGpCnp3AiW1DKFWqZNgGKQNA65FCwV8bQQHJcRtds9MC4rZitVgCQbf4AYEubnKTAYU6eoUGuSpu3fo6+ka2NrbgQAE4eCmS9xVAOW7Yq7IgA4Hpi0R8EZBhDshOnTgcOtfM0cAlTigILFDiAFFNjk8k0GZgAxOBozouIHIOyKbFixIkECmIyIHOEiEWbPJTTQ5FxcVOMCgzUVCWwAcyZJvzy45ADYVZNIwTlIAVfNB7XRVDLxEWLQ4E9JsKq+rTdsMyhcEACH5BAkKAAAALAAAAAAgACAAAAb/QIBwSCwqFIuicklMEgVHQVHKVCYUmWeUWFAkqtOtEKqgAsgFcDFyHJLNmbZa6x2Lyd8595h8C48RagJmQgtHaX5XZUYKQ4YKEYSKfVKPaUMZHwMDeQBxh04ABYSFGU4JBpsDBmFHdXMLIKofBEyKCpdgspsOoUsLXaRLCQMgwky+YJ1FC4POg8lVAg7U1Q5drtnHSw4H3t8HDdnZy2Dd4N4Nzc/QeqLW1bnM7rXuV9tEBhQQ5UoCbJDmWKBAQcMDZNhwRVNCYANBChZYEbkVCZOwASEcCDFQ4SEDIq6WTVqQIMECBx06iCACQQPBiSabHDqzRUTKARMhSFCDrc+WNQIcOoRw5+ZIHj8ADqSEQBQAwKKLhIzowEEeGKQ0owIYkPKjHihZoBKi0KFE01b4zg7h4y4IACH5BAkKAAAALAAAAAAgACAAAAb/QIBwSCwqFIuicklMEgVHQVHKVCYUmWeUWFAkqtOtEKqgAsgFcDFyHJLNmbZa6x2Lyd8595h8C48RagJmQgtHaX5XZUUJeQCGChGEin1SkGlubEhDcYdOAAWEhRlOC12HYUd1eqeRokOKCphgrY5MpotqhgWfunqPt4PCg71gpgXIyWSqqq9MBQPR0tHMzM5L0NPSC8PCxVUCyeLX38+/AFfXRA4HA+pjmoFqCAcHDQa3rbxzBRD1BwgcMFIlidMrAxYICHHA4N8DIqpsUWJ3wAEBChQaEBnQoB6RRr0uARjQocMAAA0w4nMz4IOaU0lImkSngYKFc3ZWyTwJAALGK4fnNA3ZOaQCBQ22wPgRQlSIAYwSfkHJMrQkTyEbKFzFydQq15ccOAjUEwQAIfkECQoAAAAsAAAAACAAIAAABv9AgHBILCoUi6JySUwSBUdBUcpUJhSZZ5RYUCSq060QqqACyAVwMXIcks2ZtlrrHYvJ3zn3mHwLjxFqAmZCC0dpfldlRQl5AIYKEYSKfVKQaW5sSENxh04ABYSFGU4LXYdhR3V6p5GiQ4oKmGCtjkymi2qGBZ+6eo+3g8KDvYLDxKrJuXNkys6qr0zNygvHxL/V1sVD29K/AFfRRQUDDt1PmoFqHgPtBLetvMwG7QMes0KxkkIFIQNKDhBgKvCh3gQiqmxt6NDBAAEIEAgUOHCgBBEH9Yg06uWAIQUABihQMACgBEUHTRwoUEOBIcqQI880OIDgm5ABDA8IgUkSwAAyij1/jejAARPPIQwONBCnBAJDCEOOCnFA8cOvEh1CEJEqBMIBEDaLcA3LJIEGDe/0BAEAIfkECQoAAAAsAAAAACAAIAAABv9AgHBILCoUi6JySUwSBUdBUcpUJhSZZ5RYUCSq060QqqACyAVwMXIcks2ZtlrrHYvJ3zn3mHwLjxFqAmZCC0dpfldlRQl5AIYKEYSKfVKQaW5sSENxh04ABYSFGU4LXYdhR3V6p5GiQ4oKmGCtjkymi2qGBZ+6eo+3g8KDvYLDxKrJuXNkys6qr0zNygvHxL/V1sVDDti/BQccA8yrYBAjHR0jc53LRQYU6R0UBnO4RxmiG/IjJUIJFuoVKeCBigBN5QCk43BgFgMKFCYUGDAgFEUQRGIRYbCh2xACEDcAcHDgQDcQFGf9s7VkA0QCI0t2W0DRw68h8ChAEELSJE8xijBvVqCgIU9PjwA+UNzG5AHEB9xkDpk4QMGvARQsEDlKxMCALDeLcA0rqEEDlWCCAAAh+QQJCgAAACwAAAAAIAAgAAAG/0CAcEgsKhSLonJJTBIFR0FRylQmFJlnlFhQJKrTrRCqoALIBXAxchySzZm2Wusdi8nfOfeYfAuPEWoCZkILR2l+V2VFCXkAhgoRhIp9UpBpbmxIQ3GHTgAFhIUZTgtdh2FHdXqnkaJDigqYYK2OTKaLaoYFn7p6j0wOA8PEAw6/Z4PKUhwdzs8dEL9kqqrN0M7SetTVCsLFw8d6C8vKvUQEv+dVCRAaBnNQtkwPFRQUFXOduUoTG/cUNkyYg+tIBlEMAFYYMAaBuCekxmhaJeSeBgiOHhw4QECAAwcCLhGJRUQCg3RDCmyUVmBYmlOiGqmBsPGlyz9YkAlxsJEhqCubABS9AsPgQAMqLQfM0oTMwEZ4QpLOwvMLxAEEXIBG5aczqtaut4YNXRIEACH5BAkKAAAALAAAAAAgACAAAAb/QIBwSCwqFIuicklMEgVHQVHKVCYUmWeUWFAkqtOtEKqgAsgFcDFyHJLNmbZa6x2Lyd8595h8C48RahAQRQtHaX5XZUUJeQAGHR0jA0SKfVKGCmlubEhCBSGRHSQOQwVmQwsZTgtdh0UQHKIHm2quChGophuiJHO3jkwOFB2UaoYFTnMGegDKRQQG0tMGBM1nAtnaABoU3t8UD81kR+UK3eDe4nrk5grR1NLWegva9s9czfhVAgMNpWqgBGNigMGBAwzmxBGjhACEgwcgzAPTqlwGXQ8gMgAhZIGHWm5WjelUZ8jBBgPMTBgwIMGCRgsygVSkgMiHByD7DWDmx5WuMkZqDLCU4gfAq2sACrAEWFSRLjUfWDopCqDTNQIsJ1LF0yzDAA90UHV5eo0qUjB8mgUBACH5BAkKAAAALAAAAAAgACAAAAb/QIBwSCwqFIuickk0FIiCo6A4ZSoZnRBUSiwoEtYipNOBDKOKKgD9DBNHHU4brc4c3cUBeSOk949geEQUZA5rXABHEW4PD0UOZBSHaQAJiEMJgQATFBQVBkQHZKACUwtHbX0RR0mVFp0UFwRCBSQDSgsZrQteqEUPGrAQmmG9ChFqRAkMsBd4xsRLBBsUoG6nBa14E4IA2kUFDuLjDql4peilAA0H7e4H1udH8/Ps7+3xbmj0qOTj5mEWpEP3DUq3glYWOBgAcEmUaNI+DBjwAY+dS0USGJg4wABEXMYyJNvE8UOGISKVCNClah4xjg60WUKyINOCUwrMzVRARMGENWQ4n/jpNTKTm15J/CTK2e0MoD+UKmHEs4onVDVVmyqdpAbNR4cKTjqNSots07EjzzJh1S0IADsAAAAAAAAAAAA=')";

    TrekkSoft.addCustomEvent(iframe, 'load', function() {
        if (loader && loader.parentNode) {
            loader.parentNode.removeChild(loader);
        }
    });

    var popup;

    if ( !document.getElementById('trekksoft-popup-container') ) {
        var container = document.createElement("div");
        container.id = 'trekksoft-popup-container';

        var overlay = document.createElement("div");
        overlay.className = 'trekksft-popup-overlay';
        if( overlay.style.boxSizing === '' ) overlay.style.boxSizing = 'border-box';
        if( overlay.style.MozBoxSizing === '' ) overlay.style.MozBoxSizing = 'border-box';
        overlay.id = 'trekksft-overlay';
        overlay.style.zIndex = "100000";
        overlay.style.position = "fixed";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.padding = "50px 0";
        overlay.style.backgroundImage = "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyMEI4N0IzQTVDMjcxMUUzOUE0MkZGMTUzRUQ0OEFBNSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyMEI4N0IzQjVDMjcxMUUzOUE0MkZGMTUzRUQ0OEFBNSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjIwQjg3QjM4NUMyNzExRTM5QTQyRkYxNTNFRDQ4QUE1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjIwQjg3QjM5NUMyNzExRTM5QTQyRkYxNTNFRDQ4QUE1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+ax+ERAAAAA9JREFUeNpiYGBgqAMIMAAAgwB/gxXrmwAAAABJRU5ErkJggg==')";

        popup = document.createElement("div");
        popup.id = 'trekksoft-popup-popup';
        popup.style.margin = "0 auto";
        popup.style.width = "517px";
        popup.style.minHeight = "517px";
        popup.style.height = "100%";
        popup.style.margin = "0 auto";

        /*popup.style.minHeight = "80%";
        popup.style.height = "80%";
        popup.style.maxWidth = "80%";*/
        popup.style.background = "#fff";
        popup.style.position = "relative";

        document.body.appendChild(container);
        container.appendChild(overlay);
        overlay.appendChild(popup);
        popup.appendChild(closeBtn);
        popup.appendChild(iframe);
        popup.appendChild(loader);
    }
    else {
        popup = document.getElementById('trekksoft-popup-popup');
        popup.innerHTML = '';
        popup.appendChild(closeBtn);
        popup.appendChild(iframe);
        popup.appendChild(loader);
        document.getElementById('trekksoft-popup-container').style.display = 'block';
    }
};


TrekkSoft.Embed.Button.prototype.redirectToMobile = function()
{
    var attrs  = this.attribs;
    var url    = attrs.url;
    var params = {};

    switch (attrs.entryPoint)
    {
        case 'tour':
        case 'tour_vouchers':
            url = TrekkSoft.getBaseUrl() + '/mobile/activity/book/' + attrs.tourId + '/-';
            break;
        case 'tour_details':
            url = TrekkSoft.getBaseUrl() + '/mobile/activity/' + attrs.tourId + '/-';
            break;
        case 'tour_finder':
        case 'tours':
            url = TrekkSoft.getBaseUrl() + '/mobile/activity/list';
            if (attrs.tourGroupId > 0) {
                url += '/groupId/' + attrs.tourGroupId.toString();
            }
            break;
        case 'shop':
            url = TrekkSoft.getBaseUrl() + '/mobile/shop';
            if (attrs.categoryId > 0) {
                params.categoryId = attrs.categoryId;
            }
            break;
    }

    if (attrs.referral) {
        params.agentReferral = attrs.referral;
    }

    url = TrekkSoft.Embed.assembleURL(url, params);

    return window.location = url;
};


TrekkSoft.Embed.Button.prototype.openOnPage = function()
{
    var attrs  = this.attribs;
    var url    = attrs.url;
    var params = {};

    switch (attrs.entryPoint)
    {
        case 'tour':
        case 'tour_vouchers':
            url = TrekkSoft.getBaseUrl() + '/widget/activity/book/' + attrs.tourId + '/-';
            break;
        case 'tour_details':
            url = TrekkSoft.getBaseUrl() + '/widget/activity/' + attrs.tourId + '/-';
            break;
        case 'tours':
            url = TrekkSoft.getBaseUrl() + '/widget/activity/list';
            if (attrs.tourGroupId > 0) {
                url += '/groupId/' + attrs.tourGroupId.toString();
            }
            break;
        case 'shop':
            url = TrekkSoft.getBaseUrl() + '/widget/shop';
            if (attrs.categoryId > 0) {
                params.categoryId = attrs.categoryId;
            }
            break;
        case 'tour_finder':
            url = TrekkSoft.getBaseUrl() + '/widget/activity/finder';
            break;
    }

    if (attrs.referral) {
        params.agentReferral = attrs.referral;
    }

    url = TrekkSoft.Embed.assembleURL(url, params);

    switch (attrs.target)
    {
        case 'fancy':
        case 'window':
            TrekkSoft.CookieTester.supports3rdPartyCookies(function(success){
                if (success) {
                    TrekkSoft.Embed.Fancybox(url);
                } else {
                    var opts = 'width=' + parseInt(attrs.width) + ',height=' + parseInt(attrs.height) + ',menubar=no,toolbar=no,location=no,scrollbars=yes,status=no';
                    return window.open(url, 'trekksoftpopup', opts);
                }
            });
            break;

        case 'popup':
            var opts = 'width=' + parseInt(attrs.width) + ',height=' + parseInt(attrs.height) + ',menubar=no,toolbar=no,location=no,scrollbars=yes,status=no';
            return window.open(url, 'trekksoftpopup', opts);

        case 'self':
            return window.location = url;

        default:
            return window.open(url);
    }
};
