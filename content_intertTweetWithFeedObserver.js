let linkOfItemBefore;
let innerTextOfItemBefore;
let tweet;

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
const randomIntFromInterval = (min, max) => {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
};

(async () => {
  const src = chrome.runtime.getURL("sampleTweets.js");
  let sampleTweets = await import(src);
  sampleTweets = sampleTweets.default;
  // pick tweet randomly
  tweet = sampleTweets[randomIntFromInterval(0, sampleTweets.length - 1)];
  // pick tweet explicitly
  // tweet = sampleTweets[2];
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
