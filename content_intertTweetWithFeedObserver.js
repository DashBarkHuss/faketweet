let linkOfItemBefore;
let innerTextOfItemBefore;
let tweet = {
  _id: "62e5c5ee190c0572fa886f2f",
  html: `<div class="css-1dbjc4n r-j5o65s r-qklmqi r-1adg3ll r-1ny4l3l"><div class="css-1dbjc4n"><article aria-labelledby="id__hq052tdoysm id__2cg046i3udi id__0skj1epfle9k id__0lt60vpltqwp id__krght5inw7n id__3387w5na4b9 id__zm7hql5q8yq id__s7xdifur21p id__kju8uc3jz4 id__b5xnlk3xl8i id__6i6mnckylot id__1b0ktnb3arh id__aohirw043x5 id__g3z28gjcccp id__8lujex3sa9r" role="article" tabindex="0" class="css-1dbjc4n r-1loqt21 r-18u37iz r-1ny4l3l r-1udh08x r-1qhn6m8 r-i023vh r-o7ynqc r-6416eg" data-testid="tweet"><div class="css-1dbjc4n r-eqz5dr r-16y2uox r-1wbh5a2"><div class="css-1dbjc4n r-16y2uox r-1wbh5a2 r-1ny4l3l"><div class="css-1dbjc4n"><div class="css-1dbjc4n"><div class="css-1dbjc4n r-18u37iz"><div class="css-1dbjc4n r-1iusvr4 r-16y2uox r-ttdzmv"></div></div></div><div class="css-1dbjc4n r-18u37iz"><div class="css-1dbjc4n r-1awozwy r-1hwvwag r-18kxxzh r-1b7u577"><div class="css-1dbjc4n r-18kxxzh r-1wbh5a2 r-13qz1uu"><div class="css-1dbjc4n r-1wbh5a2 r-dnmrzs"><div class="css-1dbjc4n r-1adg3ll r-bztko3" id="id__3387w5na4b9" style="height: 48px; width: 48px;"><div class="r-1adg3ll r-13qz1uu" style="padding-bottom: 100%;"></div><div class="r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-ipm5af r-13qz1uu"><div class="css-1dbjc4n r-1adg3ll r-1pi2tsx r-1wyvozj r-bztko3 r-u8s1d r-1v2oles r-desppf r-13qz1uu"><div class="r-1adg3ll r-13qz1uu" style="padding-bottom: 100%;"></div><div class="r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-ipm5af r-13qz1uu"><div class="css-1dbjc4n r-sdzlij r-ggadg3 r-1udh08x r-u8s1d r-8jfcpp" style="height: calc(100% - -4px); width: calc(100% - -4px);"><a href="/DashBarkHuss" role="link" class="css-4rbku5 css-18t94o4 css-1dbjc4n r-1niwhzg r-1loqt21 r-1pi2tsx r-1ny4l3l r-o7ynqc r-6416eg r-13qz1uu"><div class="css-1dbjc4n r-sdzlij r-1wyvozj r-1udh08x r-633pao r-u8s1d r-1v2oles r-desppf" style="height: calc(100% - 4px); width: calc(100% - 4px);"><div class="css-1dbjc4n r-1niwhzg r-1pi2tsx r-13qz1uu"></div></div><div class="css-1dbjc4n r-sdzlij r-1wyvozj r-1udh08x r-633pao r-u8s1d r-1v2oles r-desppf" style="height: calc(100% - 4px); width: calc(100% - 4px);"><div class="css-1dbjc4n r-14lw9ot r-1pi2tsx r-13qz1uu"></div></div><div class="css-1dbjc4n r-14lw9ot r-sdzlij r-1wyvozj r-1udh08x r-633pao r-u8s1d r-1v2oles r-desppf" style="height: calc(100% - 4px); width: calc(100% - 4px);"><div class="css-1dbjc4n r-1adg3ll r-1udh08x" style=""><div class="r-1adg3ll r-13qz1uu" style="padding-bottom: 100%;"></div><div class="r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-ipm5af r-13qz1uu"><div aria-label="" class="css-1dbjc4n r-1p0dtai r-1mlwlqe r-1d2f490 r-1udh08x r-u8s1d r-zchlnj r-ipm5af r-417010"><div class="css-1dbjc4n r-1niwhzg r-vvn4in r-u6sd8q r-4gszlv r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw" style="background-image: url(&quot;https://pbs.twimg.com/profile_images/1088531842918244352/WVeHmdkb_x96.jpg&quot;);"></div><img alt="" draggable="true" src="https://pbs.twimg.com/profile_images/1088531842918244352/WVeHmdkb_x96.jpg" class="css-9pa8cd"></div></div></div></div><div class="css-1dbjc4n r-sdzlij r-1wyvozj r-1udh08x r-u8s1d r-1v2oles r-desppf" style="height: calc(100% - 4px); width: calc(100% - 4px);"><div class="css-1dbjc4n r-12181gd r-1pi2tsx r-1ny4l3l r-o7ynqc r-6416eg r-13qz1uu"></div></div></a></div></div></div></div></div></div></div></div><div class="css-1dbjc4n r-1iusvr4 r-16y2uox r-1777fci r-kzbkwu"><div class="css-1dbjc4n"><div class="css-1dbjc4n r-zl2h9q"><div class="css-1dbjc4n r-k4xj1c r-18u37iz r-1wtj0ep"><div class="css-1dbjc4n r-1d09ksm r-18u37iz r-1wbh5a2"><div class="css-1dbjc4n r-1wbh5a2 r-dnmrzs r-1ny4l3l"><div class="css-1dbjc4n r-1awozwy r-18u37iz r-1wbh5a2 r-dnmrzs r-1ny4l3l" id="id__krght5inw7n"><div class="css-1dbjc4n r-1wbh5a2 r-dnmrzs"><a href="/DashBarkHuss" role="link" class="css-4rbku5 css-18t94o4 css-1dbjc4n r-1loqt21 r-1ny4l3l"><div class="css-1dbjc4n r-1awozwy r-18u37iz r-dnmrzs"><div dir="auto" class="css-901oao r-1awozwy r-18jsvk2 r-6koalj r-37j5jr r-a023e6 r-b88u0q r-rjixqe r-bcqeeo r-1udh08x r-3s2u2q r-qvutc0"><span class="css-901oao css-16my406 css-bfa6kz r-poiln3 r-bcqeeo r-qvutc0"><span class="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0">Dashiell Bark-Huss</span></span></div><div dir="auto" class="css-901oao r-18jsvk2 r-xoduu5 r-18u37iz r-1q142lx r-37j5jr r-a023e6 r-16dba41 r-rjixqe r-bcqeeo r-qvutc0"></div></div></a></div><div class="css-1dbjc4n r-18u37iz r-1wbh5a2 r-13hce6t"><div class="css-1dbjc4n r-1wbh5a2 r-dnmrzs"><a href="/DashBarkHuss" role="link" tabindex="-1" class="css-4rbku5 css-18t94o4 css-1dbjc4n r-1loqt21 r-1wbh5a2 r-dnmrzs r-1ny4l3l"><div class="css-1dbjc4n"><div dir="ltr" class="css-901oao css-bfa6kz r-14j79pv r-18u37iz r-37j5jr r-a023e6 r-16dba41 r-rjixqe r-bcqeeo r-qvutc0"><span class="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0">@DashBarkHuss</span></div></div></a></div></div></div></div><div dir="auto" aria-hidden="true" class="css-901oao r-14j79pv r-1q142lx r-37j5jr r-a023e6 r-16dba41 r-rjixqe r-bcqeeo r-s1qlax r-qvutc0"><span class="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0">·</span></div><a href="/DashBarkHuss/status/1507017004460388365" dir="auto" aria-label="Mar 24" role="link" class="css-4rbku5 css-18t94o4 css-901oao r-14j79pv r-1loqt21 r-1q142lx r-37j5jr r-a023e6 r-16dba41 r-rjixqe r-bcqeeo r-3s2u2q r-qvutc0" id="id__s7xdifur21p"><time datetime="2022-03-24T15:30:27.000Z">Mar 24</time></a></div><div class="css-1dbjc4n r-1joea0r"><div class="css-1dbjc4n r-1awozwy r-6koalj r-18u37iz"><div class="css-1dbjc4n"><div class="css-1dbjc4n r-18u37iz r-1h0z5md"><div aria-expanded="false" aria-haspopup="menu" aria-label="More" role="button" tabindex="0" class="css-18t94o4 css-1dbjc4n r-1777fci r-bt1l66 r-1ny4l3l r-bztko3 r-lrvibr" data-testid="caret"><div dir="ltr" class="css-901oao r-1awozwy r-14j79pv r-6koalj r-37j5jr r-a023e6 r-16dba41 r-1h0z5md r-rjixqe r-bcqeeo r-o7ynqc r-clp7b1 r-3s2u2q r-qvutc0"><div class="css-1dbjc4n r-xoduu5"><div class="css-1dbjc4n r-1niwhzg r-sdzlij r-1p0dtai r-xoduu5 r-1d2f490 r-xf4iuw r-1ny4l3l r-u8s1d r-zchlnj r-ipm5af r-o7ynqc r-6416eg"></div><svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"><g><circle cx="5" cy="12" r="2"></circle><circle cx="12" cy="12" r="2"></circle><circle cx="19" cy="12" r="2"></circle></g></svg></div></div></div></div></div></div></div></div></div></div><div class="css-1dbjc4n"><div class="css-1dbjc4n"><div lang="en" dir="auto" class="css-901oao r-18jsvk2 r-37j5jr r-a023e6 r-16dba41 r-rjixqe r-bcqeeo r-bnwqim r-qvutc0" id="id__b5xnlk3xl8i"><span class="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0">This is a fake tweet.</span></div></div><div class="css-1dbjc4n"></div><div class="css-1dbjc4n"><div aria-label="4 replies, 3 Retweets, 30 likes" role="group" class="css-1dbjc4n r-1ta3fxp r-18u37iz r-1wtj0ep r-1s2bzr4 r-1mdbhws" id="id__8lujex3sa9r"><div class="css-1dbjc4n r-18u37iz r-1h0z5md"><div aria-label="4 Replies. Reply" role="button" tabindex="0" class="css-18t94o4 css-1dbjc4n r-1777fci r-bt1l66 r-1ny4l3l r-bztko3 r-lrvibr" data-testid="reply"><div dir="ltr" class="css-901oao r-1awozwy r-14j79pv r-6koalj r-37j5jr r-a023e6 r-16dba41 r-1h0z5md r-rjixqe r-bcqeeo r-o7ynqc r-clp7b1 r-3s2u2q r-qvutc0"><div class="css-1dbjc4n r-xoduu5"><div class="css-1dbjc4n r-1niwhzg r-sdzlij r-1p0dtai r-xoduu5 r-1d2f490 r-xf4iuw r-1ny4l3l r-u8s1d r-zchlnj r-ipm5af r-o7ynqc r-6416eg"></div><svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"><g><path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path></g></svg></div><div class="css-1dbjc4n r-xoduu5 r-1udh08x"><span data-testid="app-text-transition-container" style="transition-property: transform; transition-duration: 0.3s; transform: translate3d(0px, 0px, 0px);"><span class="css-901oao css-16my406 r-poiln3 r-n6v787 r-1cwl3u0 r-1k6nrdp r-1e081e0 r-qvutc0"><span class="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0">4</span></span></span></div></div></div></div><div class="css-1dbjc4n r-18u37iz r-1h0z5md"><div aria-expanded="false" aria-haspopup="menu" aria-label="3 Retweets. Retweet" role="button" tabindex="0" class="css-18t94o4 css-1dbjc4n r-1777fci r-bt1l66 r-1ny4l3l r-bztko3 r-lrvibr" data-testid="retweet"><div dir="ltr" class="css-901oao r-1awozwy r-14j79pv r-6koalj r-37j5jr r-a023e6 r-16dba41 r-1h0z5md r-rjixqe r-bcqeeo r-o7ynqc r-clp7b1 r-3s2u2q r-qvutc0"><div class="css-1dbjc4n r-xoduu5"><div class="css-1dbjc4n r-1niwhzg r-sdzlij r-1p0dtai r-xoduu5 r-1d2f490 r-xf4iuw r-1ny4l3l r-u8s1d r-zchlnj r-ipm5af r-o7ynqc r-6416eg"></div><svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"><g><path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"></path></g></svg></div><div class="css-1dbjc4n r-xoduu5 r-1udh08x"><span data-testid="app-text-transition-container" style="transition-property: transform; transition-duration: 0.3s; transform: translate3d(0px, 0px, 0px);"><span class="css-901oao css-16my406 r-poiln3 r-n6v787 r-1cwl3u0 r-1k6nrdp r-1e081e0 r-qvutc0"><span class="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0">3</span></span></span></div></div></div></div><div class="css-1dbjc4n r-18u37iz r-1h0z5md"><div aria-label="30 Likes. Like" role="button" tabindex="0" class="css-18t94o4 css-1dbjc4n r-1777fci r-bt1l66 r-1ny4l3l r-bztko3 r-lrvibr" data-testid="like"><div dir="ltr" class="css-901oao r-1awozwy r-14j79pv r-6koalj r-37j5jr r-a023e6 r-16dba41 r-1h0z5md r-rjixqe r-bcqeeo r-o7ynqc r-clp7b1 r-3s2u2q r-qvutc0"><div class="css-1dbjc4n r-xoduu5"><div class="css-1dbjc4n r-1niwhzg r-sdzlij r-1p0dtai r-xoduu5 r-1d2f490 r-xf4iuw r-1ny4l3l r-u8s1d r-zchlnj r-ipm5af r-o7ynqc r-6416eg"></div><svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"><g><path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path></g></svg></div><div class="css-1dbjc4n r-xoduu5 r-1udh08x"><span data-testid="app-text-transition-container" style="transition-property: transform; transition-duration: 0.3s; transform: translate3d(0px, 0px, 0px);"><span class="css-901oao css-16my406 r-poiln3 r-n6v787 r-1cwl3u0 r-1k6nrdp r-1e081e0 r-qvutc0"><span class="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0">30</span></span></span></div></div></div></div><div class="css-1dbjc4n r-18u37iz r-1h0z5md"><div aria-expanded="false" aria-haspopup="menu" aria-label="Share Tweet" role="button" tabindex="0" class="css-18t94o4 css-1dbjc4n r-1777fci r-bt1l66 r-1ny4l3l r-bztko3 r-lrvibr"><div dir="ltr" class="css-901oao r-1awozwy r-14j79pv r-6koalj r-37j5jr r-a023e6 r-16dba41 r-1h0z5md r-rjixqe r-bcqeeo r-o7ynqc r-clp7b1 r-3s2u2q r-qvutc0"><div class="css-1dbjc4n r-xoduu5"><div class="css-1dbjc4n r-1niwhzg r-sdzlij r-1p0dtai r-xoduu5 r-1d2f490 r-xf4iuw r-1ny4l3l r-u8s1d r-zchlnj r-ipm5af r-o7ynqc r-6416eg"></div><svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"><g><path d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z"></path><path d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z"></path></g></svg></div><div class="css-1dbjc4n r-xoduu5 r-1udh08x"><span data-testid="app-text-transition-container" style="transition-property: transform; transition-duration: 0.3s; transform: translate3d(0px, 0px, 0px);"><span class="css-901oao css-16my406 r-poiln3 r-n6v787 r-1cwl3u0 r-1k6nrdp r-1e081e0 r-qvutc0"></span></span></div></div></div></div><div class="css-1dbjc4n r-18u37iz r-1h0z5md"><a href="/DashBarkHuss/status/1507017004460388365/analytics" aria-label="View Tweet activity" role="link" class="css-4rbku5 css-18t94o4 css-1dbjc4n r-1loqt21 r-1777fci r-bt1l66 r-1ny4l3l r-bztko3 r-lrvibr"><div dir="ltr" class="css-901oao r-1awozwy r-14j79pv r-6koalj r-37j5jr r-a023e6 r-16dba41 r-1h0z5md r-rjixqe r-bcqeeo r-o7ynqc r-clp7b1 r-3s2u2q r-qvutc0"><div class="css-1dbjc4n r-xoduu5"><div class="css-1dbjc4n r-1niwhzg r-sdzlij r-1p0dtai r-xoduu5 r-1d2f490 r-xf4iuw r-1ny4l3l r-u8s1d r-zchlnj r-ipm5af r-o7ynqc r-6416eg"></div><svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"><g><path d="M12 22c-.414 0-.75-.336-.75-.75V2.75c0-.414.336-.75.75-.75s.75.336.75.75v18.5c0 .414-.336.75-.75.75zm5.14 0c-.415 0-.75-.336-.75-.75V7.89c0-.415.335-.75.75-.75s.75.335.75.75v13.36c0 .414-.337.75-.75.75zM6.86 22c-.413 0-.75-.336-.75-.75V10.973c0-.414.337-.75.75-.75s.75.336.75.75V21.25c0 .414-.335.75-.75.75z"></path></g></svg></div></div></a></div></div></div></div></div></div></div></div></div></article></div></div>`,
  addedBy: "DashBarkHuss",
  __v: 0,
};

const insertTimelineObserver = (e) => {
  const timeline = document.querySelector(
    '[aria-label="Timeline: Your Home Timeline"]'
  ).children[0];
  document.body.timelineLoaded = true;
  insertDream();

  const callbackForFeedChanges = function (mutationsList, observer) {
    if (mutationsList.find((record) => record.type === "childList")) {
      const mutationsToTrack = mutationsList
        .map((mutation) =>
          [...mutation.addedNodes]
            .map((node) => node.id)
            .filter((p) => p !== "dream")
        )
        .reduce((a, c) => [...a, ...c], []);

      // prevent loop
      if (!mutationsToTrack.length) return;
      fix();
    }
  };

  const feedChanges = new MutationObserver(callbackForFeedChanges);

  feedChanges.observe(timeline, {
    childList: true,
    attributes: false,
    characterData: false,
    attributeOldValue: false,
  });
};

(async () => {
  const src2 = chrome.runtime.getURL("buttonStyles.js");
  let buttonStyles = await import(src2);
  buttonStyles = buttonStyles.default;
  const timelineLoaded = new CustomEvent("timelineLoaded");

  document.body.addEventListener(
    "timelineLoaded",
    insertTimelineObserver,
    false
  );
  handleAwaitTimeline = () => {
    const timeline = document.querySelector(
      '[aria-label="Timeline: Your Home Timeline"]'
    );
    const timelineChildren = timeline && timeline.children.length;
    const loading = timeline && timeline.querySelector("[role=progressbar]");
    if (timelineChildren && !loading)
      document.body.dispatchEvent(timelineLoaded);
  };

  // Callback function to execute when mutations are observed
  const callbackForAllChanges = function (mutationsList, observer) {
    // console.log(mutationsList);
    if (!document.body.timelineLoaded) {
      handleAwaitTimeline();
      // left off mutation observer contantly removing dream 5/30
    } else if (mutationsList.find((record) => record.type === "childList")) {
      // alert("mutation childlist");
      // fix();
    }
  };
  const allChanges = new MutationObserver(callbackForAllChanges);

  // set observer
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      allChanges.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: false,
        characterData: false,
        attributeOldValue: false,
      });
    });
  } else {
    allChanges.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: false,
      characterData: false,
      // attributeFilter: ["style", "id"],
      attributeOldValue: false,
    });
  }

  const dreamAdded = new CustomEvent("dreamTweetInserted", { detail: "added" });
  const dreamRemoved = new CustomEvent("dreamTweetInserted", {
    detail: "removed",
  });
  getEndTweet = (link, innerText) => {
    let tweet;
    if (link) {
      tweet = getEndTweetItemByTweetLink(link);
    } else {
      tweet = getEndTweetItemByInnerText(innerText);
    }
    return tweet;
  };
  getEndTweetItemByInnerText = (innerText) => {
    const endTweets =
      getAllFeedItemsThatAreEitherTheLastOfATweetThreadOrASingleTweet();
    const tweet = endTweets.find((tweet) => tweet.innerText === innerText);
    return tweet;
  };

  getEndTweetItemByTweetLink = (link) => {
    // left off 5/29 making sure this works
    endTweets =
      getAllFeedItemsThatAreEitherTheLastOfATweetThreadOrASingleTweet();
    const statusID =
      link.includes("status/") && link.split("status/").reverse()[0];
    const a = endTweets.filter(
      (tweet) => tweet.querySelectorAll(`a[href*='${statusID}']`)[0]
    );
    if (a.length === 1) {
      return a[0];
    } else if (a.length > 1) {
      return null;
    } else {
      return null;
    }
  };

  getFeedItemTwitterLink = (el) => {
    const promoted = !![...el.querySelectorAll("span")].find(
      (s) => s.innerText.slice(0, 8) === "Promoted"
    );
    if (promoted) {
      console.log("no link, tweet promoted");
      return null;
      // [...el.querySelectorAll('a')].map(p=>p.href)
      //  ['https://twitter.com/Macys', 'https://twitter.com/Macys', 'https://twitter.com/hashtag/MacysParade?src=hashtag_click', 'https://twitter.com/MakeAWish', 'https://www.macys.com/social/macys-parade-nft/?cm_…nw=&m_cn=NOV1_NOPRO_LOVE_HOLIDAY_NFT_TW&m_au=xxxx']
    } else if (el.querySelectorAll("a")[0]) {
      return [...el.querySelectorAll("a")]
        .find((a) => a.href && a.href.match("status"))
        .href.slice(19);
    } else {
      return null;
    }
  };

  getAllFeedItemsThatAreEitherTheLastOfATweetThreadOrASingleTweet = () =>
    getAllFeedItems().filter((it) => hasGreyLineOnBottom(it));

  hasGreyLineOnBottom = (el) => {
    let divs = el.querySelectorAll("div");

    divs = Array.from(divs);
    const arr = divs.filter(
      (div) =>
        String(
          document.defaultView.getComputedStyle(div, null).borderBottomColor
        ) == "rgb(239, 243, 244)"
    );
    return arr.length;
  };
  getAllFeedItems = () => [...feed().children];
  feed = () =>
    document.querySelector('[aria-label="Timeline: Your Home Timeline"]')
      .children[0];

  dreamTweetInCorrectPosition = () => {
    allItems = getAllFeedItems();
    dream = getNewItem();
    if (!dream) {
      console.log("no dream tweet");
      return null;
    }
    // dream.id = "dream";
    itemBefore = getEndTweet(linkOfItemBefore, innerTextOfItemBefore);
    currentDreamIndex = allItems.indexOf(dream);
    if (!itemBefore) {
      dream.remove();
      document.body.dispatchEvent(dreamRemoved);

      dreamSignAdded = false;
      console.log("dream Sign REMOVED");

      return null;
    } else {
      // itemBefore.id = "before";
      shouldBeDreamIndex = allItems.indexOf(itemBefore) + 1;
      return currentDreamIndex === shouldBeDreamIndex;
    }
  };
  putDreamSignTweetAfterEl = (itemBefore, dreamTweet) => {
    if (!dreamTweet) dreamTweet = getNewItem();
    allItems = getAllFeedItems();
    dreamTweet.id = "dream";

    // newIndex = allItems.indexOf(itemBefore) + 1;
    // left off trying to get dream to insert. can;t get past put dream sign after el multiple thongs going wrong
    newIndex = allItems.map((p) => p.innerText).indexOf(itemBefore.innerText);

    if (newIndex < 0) debugger; //issue needs fixing: itemBefore is not in allItems
    indexOfItemBefore = allItems.findIndex(
      (it) => it.innerText === itemBefore.innerText
    );
    try {
      allItems[indexOfItemBefore].parentNode.insertBefore(
        dreamTweet,
        allItems[newIndex]
      );
      document.body.dispatchEvent(dreamAdded);
    } catch (error) {
      console.log(error);
    }
  };
  fix = () => {
    const itemBefore = getEndTweet(linkOfItemBefore, innerTextOfItemBefore);
    const dreamItem = document.getElementById("dream");

    if (!dreamItem) {
      insertDream();
      return;
    }
    if (dreamItem && dreamTweetInCorrectPosition() === false && itemBefore) {
      putDreamSignTweetAfterEl(itemBefore);
      dreamSignAdded = true;
    }
    if (getNewItem()) {
      getNewItem().style.opacity = 1;
    }

    if (!balanced()) {
      balance();
    }
  };
  getNewItem = () => {
    let el = document.getElementById("new-item");
    return el ? document.getElementById("new-item").parentElement : null;
  };
  getDreamItem = () => {
    const el = document.getElementById("dream");
    return el;
  };

  notEnoughFeedItems = () => {
    allItems = getAllFeedItems();
    return allItems.length < 3;
  };

  getFeedItemPositionFromEl = (el) => {
    const positionOfElInAllItems = allItems.findIndex(
      (it) =>
        it.innerText === randomlySelectedItemToPlaceNewFakeTweetAfter.innerText
    );
    return positionOfElInAllItems;
  };
  getTransformPosition = (el) => {
    currentPosition = el.style.transform.match(/(?<=\()(.*)(?=px\))/g)[0];
    return +currentPosition;
  };
  info = () =>
    getAllFeedItems().map((el) => {
      trans = getTransformPosition(el);
      next = +trans + el.clientHeight;
      const obj = { trans, next };
      if (el.id) obj.id = el.id;
      return obj;
    });

  balanced = () => {
    return info().reduce((a, c, i, arr) => {
      if (i === 0) {
        return a;
      } else if (a === false) {
        return a;
      } else {
        last = arr[i - 1];
        if (last.next !== c.trans) {
          return false;
        }
        if (i === arr.length - 1) {
          return true;
        }
      }
    }, null);
  };

  adjust = (div) => {
    const allItems = getAllFeedItems();

    const before = allItems[allItems.indexOf(div) - 1];
    const newPos = getTransformPosition(before) + before.clientHeight;
    const transform = `translateY(${newPos}px)`;
    if (div.style.transform === transform) {
      console.log("already in correct place div: " + allItems.indexOf(div));
      return;
    }
    div.style.transform = transform;
    if (div.style.transform !== transform) {
      console.log("not adjusted div: " + allItems.indexOf(div));
    }
    return div;
  };
  balance = () => {
    const allItems = getAllFeedItems();
    allItems.slice(1).forEach((div) => {
      adjust(div);
    });
    return info();
  };
  addButtonStyle = (main, type) => {
    els = main.querySelectorAll(
      "." + buttonStyles[type].default.classes.outer.split(" ").join(".")
    );
    indexes = { more: 0, comment: 1, retweet: 2, heart: 3, share: 4 };
    const el = els[indexes[type]];

    el.addEventListener("mouseover", function (event) {
      inner = el.children[0].children[0];
      inner.classList.remove(...inner.classList);
      el.classList.remove(...el.classList);
      inner.classList.add(
        ...buttonStyles[type].onHover.classes.inner.split(" ")
      );
      el.classList.add(...buttonStyles[type].onHover.classes.outer.split(" "));
      if (buttonStyles[type].onHover.style.inner) {
        inner.style.backgroundColor =
          buttonStyles[type].onHover.style.inner.backgroundColor;
      }
      if (buttonStyles[type].onHover.style.outer) {
        el.style.color = buttonStyles[type].onHover.style.outer.color;
      }
    });
    el.addEventListener("click", function (event) {
      dreamSignMissed(tweet, "clicked");
    });
    el.addEventListener("mouseout", function (event) {
      inner = el.children[0].children[0];
      inner.classList.remove(...inner.classList);
      el.classList.remove(...el.classList);
      inner.classList.add(
        ...buttonStyles[type].default.classes.inner.split(" ")
      );
      el.classList.add(...buttonStyles[type].default.classes.outer.split(" "));

      if (buttonStyles[type].onHover.style) {
        el.style = "";
        inner.style = "";
      }
    });
  };
  const createAndStyleNewEl = (tweetPosition) => {
    newEl = document.createElement("div");

    values = Object.values(allItems[tweetPosition].style);
    values.forEach((val) => {
      if (val === "") return;
      newEl.style[val] = allItems[tweetPosition].style[val];
    });

    newEl.innerHTML = tweet.html;
    newEl.children[0].id = "new-item";
    addButtonStyle(newEl, "share");
    addButtonStyle(newEl, "heart");
    addButtonStyle(newEl, "comment");
    addButtonStyle(newEl, "retweet");
    addButtonStyle(newEl, "more");
    // addMouseOverTweetEvent(newEl.querySelector("[role=article]"));
    // addMouseOverNameEvent(
    //   newEl.querySelector(
    //     "a.css-4rbku5.css-18t94o4.css-1dbjc4n.r-1loqt21.r-1wbh5a2.r-dnmrzs.r-1ny4l3l"
    //   )
    // );
    // addDetectRc(newEl);
    svg = newEl.querySelector(
      "#new-item > div > article > div > div > div > div:nth-child(1) > div > div > div > div > div > svg"
    );
    if (svg) {
      svg.style.height = "16px";
      svg.style.width = "16px";
    }
    return newEl;
  };

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

  elIsContainer = (el) =>
    el.innerText.slice(0, 20) === "Home\nSee new Tweets\n";
  let tweetBefore;
  insertDream = () => {
    if (notEnoughFeedItems()) {
      console.log("ERROR: not enough tweets");
      return; //is there a better way?
    }

    allEligibleFeedItemsToPlaceTheFakeTweetAfter =
      getAllFeedItemsThatAreEitherTheLastOfATweetThreadOrASingleTweet();

    randomPosition = getRandomInt(
      0,
      allEligibleFeedItemsToPlaceTheFakeTweetAfter.length - 1
    );

    randomlySelectedItemToPlaceNewFakeTweetAfter =
      allEligibleFeedItemsToPlaceTheFakeTweetAfter[randomPosition];

    allItems = getAllFeedItems();

    newFakeTweetPosition =
      getFeedItemPositionFromEl(randomlySelectedItemToPlaceNewFakeTweetAfter) +
      1;

    if (!allItems[newFakeTweetPosition]) {
      console.log("ERROR: no tweet has the chosen tweetPosition");
      debugger; // error: no tweet has the chosen tweetPosition
    }

    newFakeTweetEl = createAndStyleNewEl(newFakeTweetPosition);

    // tweetBefore = getTweetBefore(newFakeTweetPosition);
    // left off set this back
    // tweetBefore = getTweetBefore(newFakeTweetPosition);
    if (!tweetBefore) {
      tweetBefore = randomlySelectedItemToPlaceNewFakeTweetAfter;
    }
    linkOfItemBefore = getFeedItemTwitterLink(tweetBefore);
    innerTextOfItemBefore = tweetBefore.innerText;

    if (tweetBefore) {
      if (elIsContainer(tweetBefore)) {
        console.log("ERROR: item before is container");
        debugger;
      }

      putDreamSignTweetAfterEl(tweetBefore, newFakeTweetEl);
      dreamSignAdded = true;
    } else {
      console.log("ERROR: item before empty");
      linkOfItemBefore = null;
      dreamSignAdded = false;
      return;
    }
  };
})();

// 3 problems
// 1. mutation observer with updat over and over again in a
// loop i think because dream is being removed and then my
// program ads it back and it goes on and on
//
//2. mutation overber stops working. will work again when I quit and open chrom  https://stackoverflow.com/questions/72504712/what-could-cause-mutation-observer-on-entire-document-and-subtree-to-not-fire-wh
// clearing cookies does not fix mutation observer
//
//3. some times getEndTweet returns null even with both arguments
// !balanced() returns false when the dream is in the wrong place
//  endTweets.find((tweet) => tweet.innerText === innerText) this isn't for this promoted tweet. " June 17\n0:13\"  0:13 changes its the  time of the video maybe all video too?

// content copy is where i moved the last code to. the commented out portion above might have things removed from
// the last code because I was trying to get mutation observer to work. but also certain parts are updated here like getTweetEnd
