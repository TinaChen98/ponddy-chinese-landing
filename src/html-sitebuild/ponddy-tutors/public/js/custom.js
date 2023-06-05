'use strict';
var controller = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({
        triggerElement: "#progressive",
        duration: '100%'
    })
    .setClassToggle(".progressive-note", "progressive-note-show")
    .addTo(this.controller);

$('.navbar-toggle').click(function () {
    $('.navbar-toggle').toggleClass('active');
    $('.navbar-collapse').toggle();
})

var user = localStorage.getItem('Student') || localStorage.getItem('Tutor');
if (user) {
    $('.navbar-link').hide();
    $('.dashboard-btn').show();
    $('.logout-btn').show();
    $('.ponddy-link ').show();
} else {
    $('.navbar-link').hide();
    $('.register-btn').show();
    $('.login-btn').show();
    $('.rectangle-btn').show();
    $('.ponddy-link ').show();
}
var goods = [{
        ad: null,
        audit: null,
        classNum: null,
        couponCode: '["Soho-Art","Dragon-Kung-Fu"]',
        courseHour: 55,
        courseHourType: "Common",
        createTime: "2019-02-15 05:35:45",
        createTimeBegin: null,
        createTimeEnd: null,
        createTimeString: "2019-02-15",
        detailInfo: '<div class="top-info"><div class="top-info">Prepare students for AP Chinese Exam Test-taking tips, skills and strategies on different sections and topics.</div><div class="top-info">1-on-1 personalized tutoring. Intensity of your choice.</div></div><div class="background-info"><div class="background-info-bg"><p><span class="pull-left w10" style="width: 33.175px;"><img src="http://my-tutors.ponddy.com/assets/images/frequency.png" alt=""></span><span class="pull-left w90" style="width: 298.675px;">8 sessions</span></p><p><span class="pull-left w10" style="width: 33.175px;"><img src="http://my-tutors.ponddy.com/assets/images/times.png" alt=""></span><span class="pull-left w90" style="width: 298.675px;">120 minutes per session</span></p><p><span class="pull-left w10" style="width: 33.175px;"><img src="http://my-tutors.ponddy.com/assets/images/mock-test.png" alt=""></span><span class="pull-left w90" style="width: 298.675px;">2 free mock test with tutor review</span></p><p><span class="pull-left w90" style="width: 298.675px;"><br></span></p></div></div><div class="prerequisites"><span _ngcontent-c5="" class="goods_price" style="position: relative;"><center>$550</center></span></div><div class="prerequisites"><span class="prerequisites-title"><b>For</b></span>&nbsp;students who already took AP Chinese at school, and/or students who’re ready to take AP Chinese Exam. Custom focus on speaking, listening, reading and writing skills.</div><div class="prerequisites"><a href="http://support@ponddy-edu.com/" target="_blank" &gt;support@ponddy-edu.com="" <="" a=""></a><a href="http://support@ponddy-edu.com/" target="_blank"></a></div><div class="prerequisites"><span class="prerequisites-title"><b>Refund Policy&nbsp;</b></span>Students may opt out the course within 1 session. They will be refunded the fee less $150.</div><div class="prerequisites"><span class="prerequisites-title"><b>Note:</b></span><ul><li>Class will be arranged after payment is successfully processed.</li><li>Contact us through email support@ponddy-edu.com&nbsp;or call +1(408) 800 7798 with any questions.</li></ul></div>',
        favoriteNum: null,
        goodsCategory: null,
        goodsCategoryCode: "1065217190101434368",
        goodsCode: "1304092001112219648",
        goodsName: "AP  Exam Prep Extended",
        goodsPrice: "550",
        id: null,
        isAllowRefundExpired: null,
        isDrawBill: null,
        isHaveGift: null,
        isOrderGoods: null,
        isPreSaleGoods: null,
        mainImage: null,
        promotionPrice: "[550,550]",
        promotionType: "Coupon",
        rateLevel: null,
        rateNum: null,
        saleNum: null,
        shareLink: "https://tutors-sandbox.ponddy.com/goods/share/1304092001112219648.shtml",
        sort: 29,
        state: "Common",
        subGoodsName: "",
        timeZone: "Europe/Budapest",
        updateTime: "2019-03-05 06:41:07",
        updateTimeBegin: null,
        updateTimeEnd: null,
        updateTimeString: "2019-03-05",
        validityPeriod: 60,
        validityPeriodEndTime: "2019-04-16 00:00:00",
        validityPeriodEndTimeString: "2019-04-16",
        validityPeriodStartTime: "2019-02-15 00:00:00",
        validityPeriodStartTimeString: "2019-02-15",
        vn: 1
    }, {
        ad: null,
        audit: null,
        classNum: null,
        couponCode: '[""]',
        courseHour: 70,
        courseHourType: "Common",
        createTime: "2019-02-15 06:06:51",
        createTimeBegin: null,
        createTimeEnd: null,
        createTimeString: "2019-02-15",
        detailInfo: '<div class="top-info"><div class="top-info"><div class="top-info">Online personalized 1-on-1 tutoring for students taking AP Chinese course who want more practice.</div></div></div><div class="background-info"><div class="background-info-bg"><p><span class="pull-left w10" style="width: 33.175px;"><img src="http://my-tutors.ponddy.com/assets/images/frequency.png" alt=""></span><span class="pull-left w90" style="width: 298.675px;">10 weeks, 20 sessions</span></p><p><span class="pull-left w10" style="width: 33.175px;"><img src="http://my-tutors.ponddy.com/assets/images/frequencyn.png" alt=""></span><span class="pull-left w90" style="width: 298.675px;">2 sessions per week</span></p><p><span class="pull-left w10" style="width: 33.175px;"><img src="http://my-tutors.ponddy.com/assets/images/times.png" alt=""></span><span class="pull-left w90" style="width: 298.675px;">50 minutes per session</span></p><p><span class="pull-left w10" style="width: 33.175px;"><img src="http://my-tutors.ponddy.com/assets/images/mock-test.png" alt=""></span><span class="pull-left w90" style="width: 298.675px;">1 free mock test with tutor&nbsp;review</span></p></div></div><div class="prerequisites"><span _ngcontent-c5="" class="goods_price" style="position: relative;"><center>$700</center></span></div><div class="prerequisites"><span class="prerequisites-title"><b>For</b></span>&nbsp;students who already took AP Chinese at school, and/or students who’re ready to take AP Chinese Exam.</div><div class="prerequisites"><span class="prerequisites-title"><b>Refund Policy&nbsp;</b></span>Students may opt out the course within 2 weeks. They will be refunded the fee less $200.</div><div class="prerequisites"><span class="prerequisites-title"><b>Note:</b></span><ul><li>Class will be arranged after payment is successfully processed.</li><li>Contact us through email support@ponddy-edu.com&nbsp;or call +1(408) 800 7798 with any questions.</li><li></li></ul><a href="http://support@ponddy-edu.com/" target="_blank" &gt;support@ponddy-edu.com="" <="" a=""></a><a href="http://support@ponddy-edu.com/" target="_blank"></a></div>',
        favoriteNum: null,
        goodsCategory: null,
        goodsCategoryCode: "1304119626341867520",
        goodsCode: "1304124058748116992",
        goodsName: "AP Tutoring",
        goodsPrice: "700",
        id: null,
        isAllowRefundExpired: null,
        isDrawBill: null,
        isHaveGift: null,
        isOrderGoods: null,
        isPreSaleGoods: null,
        mainImage: null,
        promotionPrice: "[null]",
        promotionType: "Common",
        rateLevel: null,
        rateNum: null,
        saleNum: null,
        shareLink: "https://tutors-sandbox.ponddy.com/goods/share/1304124058748116992.shtml",
        sort: 3,
        state: "Common",
        subGoodsName: "1-on-1",
        timeZone: "Europe/London",
        updateTime: "2019-02-15 06:16:04",
        updateTimeBegin: null,
        updateTimeEnd: null,
        updateTimeString: "2019-02-15",
        validityPeriod: 3000,
        validityPeriodEndTime: "2027-05-04 00:00:00",
        validityPeriodEndTimeString: "2027-05-04",
        validityPeriodStartTime: "2019-02-15 00:00:00",
        validityPeriodStartTimeString: "2019-02-15",
        vn: 1

    }, {
        ad: null,
        audit: null,
        classNum: null,
        couponCode: '[""]',
        courseHour: 200,
        courseHourType: "Common",
        createTime: "2019-02-15 06:08:24",
        createTimeBegin: null,
        createTimeEnd: null,
        createTimeString: "2019-02-15",
        detailInfo: '<div class="top-info"><div class="top-info">Online intensive tutoring for students taking AP Chinese course who want more practice.<br>Form your own group class&nbsp; &nbsp; &nbsp;( maximum of 3 students) to get a discounted price.&nbsp;&nbsp;</div></div><div class="background-info"><div class="background-info-bg"><p><span class="pull-left w10" style="width: 33.175px;"><img src="http://my-tutors.ponddy.com/assets/images/frequency.png" alt=""></span><span class="pull-left w90" style="width: 298.675px;">10 weeks, 20 sessions</span></p><p><span class="pull-left w10" style="width: 33.175px;"><img src="http://my-tutors.ponddy.com/assets/images/frequencyn.png" alt=""></span><span class="pull-left w90" style="width: 298.675px;">2 sessions per week</span></p><p><span class="pull-left w10" style="width: 33.175px;"><img src="http://my-tutors.ponddy.com/assets/images/times.png" alt=""></span><span class="pull-left w90" style="width: 298.675px;">50 minutes per session</span></p><p><span class="pull-left w10" style="width: 33.175px;"><img src="http://my-tutors.ponddy.com/assets/images/mock-test.png" alt=""></span><span class="pull-left w90" style="width: 298.675px;">1 free mock test with tutor&nbsp;review</span></p></div></div><div class="prerequisites"><span _ngcontent-c5="" class="goods_price" style="position: relative;"><center>$400</center></span></div><div class="prerequisites"><span class="prerequisites-title"><b>For</b></span>&nbsp;students who already took AP Chinese at school, and/or students who’re ready to take AP Chinese Exam.</div><div class="prerequisites"><span class="prerequisites-title"><b>Refund Policy&nbsp;</b></span>Students may opt out the course within 2 weeks. They will be refunded the fee less $150.</div><div class="prerequisites"><span class="prerequisites-title"><b>Note:</b></span><ul><li>Class will be arranged after payment is successfully processed.</li><li>Contact us through email support@ponddy-edu.com&nbsp;or call +1(408) 800 7798 with any questions.</li><li></li></ul><a href="http://support@ponddy-edu.com/" target="_blank" &gt;support@ponddy-edu.com="" <="" a=""></a><a href="http://support@ponddy-edu.com/" target="_blank"></a></div>',
        favoriteNum: null,
        goodsCategory: null,
        goodsCategoryCode: "1304119626341867520",
        goodsCode: "1304125656475951104",
        goodsName: "AP Tutoring",
        goodsPrice: "400",
        id: null,
        isAllowRefundExpired: null,
        isDrawBill: null,
        isHaveGift: null,
        isOrderGoods: null,
        isPreSaleGoods: null,
        mainImage: null,
        promotionPrice: "[null]",
        promotionType: "Common",
        rateLevel: null,
        rateNum: null,
        saleNum: null,
        shareLink: "https://tutors-sandbox.ponddy.com/goods/share/1304125656475951104.shtml",
        sort: 4,
        state: "Common",
        subGoodsName: "Group",
        timeZone: "Europe/London",
        updateTime: "2019-02-15 06:16:39",
        updateTimeBegin: null,
        updateTimeEnd: null,
        updateTimeString: "2019-02-15",
        validityPeriod: 3000,
        validityPeriodEndTime: "2027-05-04 00:00:00",
        validityPeriodEndTimeString: "2027-05-04",
        validityPeriodStartTime: "2019-02-15 00:00:00",
        validityPeriodStartTimeString: "2019-02-15",
        vn: 1
    },
    {
        ad: null,
        audit: null,
        classNum: null,
        couponCode: '[""]',
        courseHour: 1,
        courseHourType: "Common",
        createTime: "2019-02-15 06:11:12",
        createTimeBegin: null,
        createTimeEnd: null,
        createTimeString: "2019-02-15",
        detailInfo: '<div class="top-info">College Board certified AP® Chinese Language and Culture course (eligible for high school course credits).The full-year program taught by live certified teachers enabling students to further develop their proficiencies in Chinese.</div><div class="background-info"><div class="background-info-bg"><p><span class="pull-left w10" style="width: 33.175px;"><img src="http://my-tutors.ponddy.com/assets/images/frequency.png" alt=""></span><span class="pull-left w90" style="width: 298.675px;">28 weeks (Academic Year), 120 sessions</span></p><p><span class="pull-left w90" style="width: 298.675px; margin-left: 40px;">Semester 1: Sept – Dec 2019</span></p><p><span class="pull-left w90" style="width: 298.675px; margin-left: 40px;">Semester 2: Jan – April 2020</span></p><p><span class="pull-left w10" style="width: 33.175px;"><img src="http://my-tutors.ponddy.com/assets/images/frequencyn.png" alt=""></span><span class="pull-left w90" style="width: 298.675px;">4 sessions per week</span></p><p><span class="pull-left w90" style="width: 298.675px; margin-left: 40px;">Mon.-Thur., 1 session per day.</span></p><p><span class="pull-left w90" style="width: 298.675px; margin-left: 40px;">Mon. &amp; Wed. or Tue. &amp; Thur.</span></p><p><span class="pull-left w90" style="width: 298.675px; margin-left: 40px;">2 sessions per day.</span></p><p><span class="pull-left w10" style="width: 33.175px;"><img src="http://my-tutors.ponddy.com/assets/images/times.png" alt=""></span><span class="pull-left w90" style="width: 298.675px;">50 minutes per session</span></p><p><span class="pull-left w10" style="width: 33.175px;"><img src="http://my-tutors.ponddy.com/assets/images/mock-test.png" alt=""></span><span class="pull-left w90" style="width: 298.675px;">Free Assessment to get started</span></p></div></div><div class="prerequisites"><span _ngcontent-c5="" class="goods_price" style="position: relative;"><center>$2900</center></span></div><div class="prerequisites"><span class="prerequisites-title"><b>For</b></span>&nbsp;Grades 9-12 students</div><div class="prerequisites"><span class="prerequisites-title"><b>Prerequisites&nbsp;</b></span></div><div class="plan"><ul><li style="list-style: circle !important;">3 or more years of Chinese language learning experience</li><li style="list-style: circle !important;">Passed the Ponddy&nbsp;Placement test (Intermediate High, HSK 4, TOCFL A2 or equivalent level)</li></ul></div><div class="prerequisites"><table class="table table-bordered" style="width: 391.111px;"><tbody><tr><td style="line-height: 1.52857; text-align: center;"><b>Unit</b></td><td style="line-height: 1.52857; text-align: center;"><b>Theme</b></td><td style="line-height: 1.52857; text-align: center;"><b>Objective</b></td></tr><tr><td style="line-height: 1.52857; text-align: center;">1</td><td style="line-height: 1.52857; text-align: center;">Cultural&nbsp;Celebrations<br></td><td style="line-height: 1.52857; text-align: center;">Learn about Chinese culture, values, and customs through festivals and celebrations</td></tr><tr><td style="line-height: 1.52857; text-align: center;">2</td><td style="line-height: 1.52857; text-align: center;">Teenage Life/self and Global Community</td><td style="line-height: 1.52857; text-align: center;">Experience cultural and social activities common to a student of similar age in China</td></tr><tr><td style="line-height: 1.52857; text-align: center;">3</td><td style="line-height: 1.52857; text-align: center;">Interests and Careers</td><td style="line-height: 1.52857; text-align: center;">Pursuing personal interests and planning for the future in terms of career, study, and travel</td></tr><tr><td style="line-height: 1.52857; text-align: center;">4</td><td style="line-height: 1.52857; text-align: center;">Famous People</td><td style="line-height: 1.52857; text-align: center;">Examine the role and significance of the contributions of Chinese culture in today\'s world</td></tr><tr><td style="line-height: 1.52857; text-align: center;">5</td><td style="line-height: 1.52857; text-align: center;">Beliefs and Attitudes</td><td style="line-height: 1.52857; text-align: center;">Study common beliefs, traditional values, and attitudes within the Chinese culture, such as social etiquette, patterns of interaction, or the role of family</td></tr><tr><td style="line-height: 1.52857; text-align: center;">6</td><td style="line-height: 1.52857; text-align: center;">Social issues and Current Events</td><td style="line-height: 1.52857; text-align: center;">Expose the students to current Chinese political, social, and cultural topics</td></tr><tr><td style="line-height: 1.52857; text-align: center;">7</td><td style="line-height: 1.52857; text-align: center;">Art and Music Appreciation</td><td style="line-height: 1.52857; text-align: center;">Appreciate and understand Chinese culture through various avenues such as paintings, folk arts, Beijing opera, popular music, theater, dance, and traditional musical instruments</td></tr><tr><td style="line-height: 1.52857; text-align: center;">8</td><td style="line-height: 1.52857; text-align: center;">Literature and Vocabulary</td><td style="line-height: 1.52857; text-align: center;">Read and analyze literature and formulate critical&nbsp;analyses of form and content orally and in writing</td></tr><tr><td style="line-height: 1.52857; text-align: center;">9</td><td style="line-height: 1.52857; text-align: center;">Geography and Climate</td><td style="line-height: 1.52857; text-align: center;">Deepen students\' knowledge of China\'s geographic regions, landforms, waterways, governing units, population distribution, the lifestyle of the minorities ethnic and linguistic diversity and climate in major cities</td></tr></tbody></table><br></div><div class="prerequisites"><span class="prerequisites-title"><b>Refund Policy&nbsp;</b></span>Students may opt out the course within 2 weeks. They will be refunded the fee less $200.</div><div class="prerequisites"><span class="prerequisites-title"><b>Note:</b></span><ul><li>Class will be arranged after payment is successfully processed.</li><li>Contact us through email support@ponddy-edu.com&nbsp;or call +1(408) 800 7798 with any questions.</li><li></li></ul><a href="http://support@ponddy-edu.com/" target="_blank" &gt;support@ponddy-edu.com="" <="" a=""></a><a href="http://support@ponddy-edu.com/" target="_blank"></a></div>',
        favoriteNum: null,
        goodsCategory: null,
        goodsCategoryCode: "1281933852515196928",
        goodsCode: "1304128542693974016",
        goodsName: "AP® Chinese Language and Culture Course",
        goodsPrice: "3500",
        id: null,
        isAllowRefundExpired: null,
        isDrawBill: null,
        isHaveGift: null,
        isOrderGoods: null,
        isPreSaleGoods: null,
        mainImage: null,
        promotionPrice: "[2900]",
        promotionType: "Discount",
        rateLevel: null,
        rateNum: null,
        saleNum: null,
        shareLink: "https://tutors-sandbox.ponddy.com/goods/share/1304128542693974016.shtml",
        sort: 5,
        state: "Common",
        subGoodsName: "2019-2020",
        timeZone: "Europe/London",
        updateTime: "2019-02-15 06:17:35",
        updateTimeBegin: null,
        updateTimeEnd: null,
        updateTimeString: "2019-02-15",
        validityPeriod: 3000,
        validityPeriodEndTime: "2027-05-04 00:00:00",
        validityPeriodEndTimeString: "2027-05-04",
        validityPeriodStartTime: "2019-02-15 00:00:00",
        validityPeriodStartTimeString: "2019-02-15",
        vn: 1
    }, {
        ad: null,
        audit: null,
        classNum: null,
        couponCode: '[""]',
        courseHour: 400,
        courseHourType: "Common",
        createTime: "2019-01-31 08:27:26",
        createTimeBegin: null,
        createTimeEnd: null,
        createTimeString: "2019-01-31",
        detailInfo: '<div class="top-info"><div class="top-info"><div class="top-info">Prepare students for AP Chinese Themed learning content with supplemental reading material. Class designed following the “5C” (Communication, Cultures, Connections, Comparisons, and Communities) teaching principles to infuse AP Chinese related activities.&nbsp;</div></div></div><div class="background-info"><div class="background-info-bg"><p><span class="pull-left w10"><img src=" public/images/frequency.png" alt="" style=""> </span> <span class="pull-left w90">20 weeks, 40 sessions</span></p><p><span class="pull-left w10"> <img src=" public/images/frequencyn.png" alt="" style=""></span> <span class="pull-left w90">2 sessions per week</span></p><p><span class="pull-left w10"> <img src=" public/images/times.png" alt="" style=""></span> <span class="pull-left w90">50 minutes per session </span></p><p><span class="pull-left w10"> <img src=" public/images/mock-test.png" alt="" style=""></span> <span class="pull-left w90">Free Assessment to get started</span></p></div></div><div class="prerequisites"><span class="prerequisites-title"><b>For</b></span><span>&nbsp;</span>students who has successful completion of Chinese IV course, and/or qualifying score on Ponddy Placement test (Intermediate Mid-High, HSK 3-4, TOCFL A1-A2 or equivalent level).</div><div class="prerequisites"><span class="prerequisites-title"><b>Can-do&nbsp;</b></span></div><div class="plan"><ul><li style="list-style: circle !important;">Follow the main idea or flow of a paragraph-length text or conversation in various time frames&nbsp;</li><li style="list-style: circle !important;">Use connected sentences or paragraphs to exchange information, preference, needs and opinions on familiar or other concrete topics during conversations in various time frames</li><li style="list-style: circle !important;">Tell stories, state views or give presentations about researched topics using short paragraphs across various time frames</li></ul></div><div class="prerequisites"><table class="table table-bordered" style="width: 391.111px;"><tbody><tr><td style="line-height: 1.52857; text-align: center;"><b>Theme</b></td><td style="line-height: 1.52857; text-align: center;"><b>Sessions</b></td></tr><tr><td style="line-height: 1.52857; text-align: center;">Housing and SHelter III</td><td style="line-height: 1.52857; text-align: center;">4</td></tr><tr><td style="line-height: 1.52857; text-align: center;">Families and Communities II</td><td style="line-height: 1.52857; text-align: center;">4</td></tr><tr><td style="line-height: 1.52857; text-align: center;">Chinese Good Culture III</td><td style="line-height: 1.52857; text-align: center;">4</td></tr><tr><td style="line-height: 1.52857; text-align: center;">Shopping</td><td style="line-height: 1.52857; text-align: center;">4</td></tr><tr><td style="line-height: 1.52857; text-align: center;">Education</td><td style="line-height: 1.52857; text-align: center;">4</td></tr><tr><td style="line-height: 1.52857; text-align: center;"><b>Midterm</b></td><td style="line-height: 1.52857; text-align: center;">2</td></tr><tr><td style="line-height: 1.52857; text-align: center;">Relationship III</td><td style="line-height: 1.52857; text-align: center;">4</td></tr><tr><td style="line-height: 1.52857; text-align: center;">Science and Technology II</td><td style="line-height: 1.52857; text-align: center;">4</td></tr><tr><td style="line-height: 1.52857; text-align: center;">Social Customs and Values</td><td style="line-height: 1.52857; text-align: center;">4</td></tr><tr><td style="line-height: 1.52857; text-align: center;">Health Issues</td><td style="line-height: 1.52857; text-align: center;">4</td></tr><tr><td style="line-height: 1.52857; text-align: center;"><b>Final</b></td><td style="line-height: 1.52857; text-align: center;">2</td></tr></tbody></table></div><div class="prerequisites"><br></div><div class="prerequisites"><span class="prerequisites-title"><b>Refund Policy&nbsp;</b></span><span>Students may opt out the course within 2 weeks. They will be refunded the fee less $200.</span></div><div class="prerequisites"><span class="prerequisites-title"><b>Note:</b></span><ul><li>Class will be arranged after payment is successfully processed.</li><li>Contact us through email support@ponddy-edu.com&nbsp;or call +1(408) 800 7798 with any questions.</li></ul><a href="http://support@ponddy-edu.com" target="_blank" &gt;support@ponddy-edu.com="" <="" a=""> </a><a href="http://support@ponddy-edu.com" target="_blank"> </a></div><p><br></p>',
        favoriteNum: null,
        goodsCategory: null,
        goodsCategoryCode: "1281933852515196928",
        goodsCode: "1282003860482121728",
        goodsName: "Pre AP",
        goodsPrice: "1500",
        id: null,
        isAllowRefundExpired: null,
        isDrawBill: null,
        isHaveGift: null,
        isOrderGoods: null,
        isPreSaleGoods: null,
        mainImage: null,
        promotionPrice: "[1000]",
        promotionType: "Discount",
        rateLevel: null,
        rateNum: null,
        saleNum: null,
        shareLink: "https://tutors-sandbox.ponddy.com/goods/share/1282003860482121728.shtml",
        sort: 6,
        state: "Common",
        subGoodsName: null,
        timeZone: "Asia/Taipei",
        updateTime: "2019-02-15 06:17:16",
        updateTimeBegin: null,
        updateTimeEnd: null,
        updateTimeString: "2019-02-15",
        validityPeriod: 365,
        validityPeriodEndTime: "2020-01-31 00:00:00",
        validityPeriodEndTimeString: "2020-01-31",
        validityPeriodStartTime: "2019-01-31 00:00:00",
        validityPeriodStartTimeString: "2019-01-31",
        vn: 1
    },
    {
        ad: null,
        audit: null,
        classNum: null,
        couponCode: '[""]',
        courseHour: 400,
        courseHourType: "Common",
        createTime: "2019-01-31 08:45:52",
        createTimeBegin: null,
        createTimeEnd: null,
        createTimeString: "2019-01-31",
        detailInfo: '<div class="top-info"><div class="top-info">Prepares students for AP Chinese Themed learning content with supplemental reading material. Enhances verbal communication and expression. Introduces diverse situational application of the language using contemporary topics.</div></div><div class="background-info"><div class="background-info-bg"><p><span class="pull-left w10"><img src=" public/images/frequency.png" alt="" style=""> </span> <span class="pull-left w90">20 weeks, 40 sessions</span></p><p><span class="pull-left w10"> <img src=" public/images/frequencyn.png" alt="" style=""></span> <span class="pull-left w90">2 sessions per week</span></p><p><span class="pull-left w10"> <img src=" public/images/times.png" alt="" style=""></span> <span class="pull-left w90">50 minutes per session </span></p><p><span class="pull-left w10"> <img src=" public/images/mock-test.png" alt="" style=""></span> <span class="pull-left w90">Free Assessment to get started</span></p></div></div><div class="prerequisites"><span class="prerequisites-title"><b>For</b></span><span>&nbsp;</span>students who have successful completion of Chinese III, and/ or qualifying score on Ponddy Placement test (Intermediate Low, HSK 3, TOCFL A1 or equivalent level).&nbsp;</div><div class="prerequisites"><span class="prerequisites-title"><b>Can-do&nbsp;</b></span></div><div class="plan"><ul><li style="list-style: circle !important;">Understand the main idea and key information in short texts and conversations</li><li style="list-style: circle !important;">Generate a series of sentences and follow-up questions during conversations to</li></ul><p style="list-style: circle !important;">- exchange information and opinions on familiar and researched topics</p><p style="list-style: circle !important;">- address and meet personal needs</p><ul><li style="list-style: circle !important;">Tell a complete brief story about themselves and present facts, views and arguments about familiar and researched topics with a series of connected sentences</li><li><br></li></ul></div><div class="prerequisites"><table class="table table-bordered" style="width: 391.111px;"><tbody><tr><td style="line-height: 1.52857; text-align: center;"><b>Theme</b></td><td style="line-height: 1.52857; text-align: center;"><b>Sessions</b></td></tr><tr><td style="line-height: 1.52857; text-align: center;">Sport and Leisure III</td><td style="line-height: 1.52857; text-align: center;">3</td></tr><tr><td style="line-height: 1.52857; text-align: center;">Sport and Leisure IV</td><td style="line-height: 1.52857; text-align: center;">3</td></tr><tr><td style="line-height: 1.52857; text-align: center;">Travel III</td><td style="line-height: 1.52857; text-align: center;">3</td></tr><tr><td style="line-height: 1.52857; text-align: center;">Travel IV</td><td style="line-height: 1.52857; text-align: center;">3</td></tr><tr><td style="line-height: 1.52857; text-align: center;">Travel V</td><td style="line-height: 1.52857; text-align: center;">3</td></tr><tr><td style="line-height: 1.52857; text-align: center;">Families and Communities I</td><td style="line-height: 1.52857; text-align: center;">3</td></tr><tr><td style="line-height: 1.52857; text-align: center;"><b>Midterm</b></td><td style="line-height: 1.52857; text-align: center;">2</td></tr><tr><td style="line-height: 1.52857; text-align: center;">Shopping III</td><td style="line-height: 1.52857; text-align: center;">3</td></tr><tr><td style="line-height: 1.52857; text-align: center;">Science and Technology I</td><td style="line-height: 1.52857; text-align: center;">3</td></tr><tr><td style="line-height: 1.52857; text-align: center;">Entertainment</td><td style="line-height: 1.52857; text-align: center;">3</td></tr><tr><td style="line-height: 1.52857; text-align: center;">Music</td><td style="line-height: 1.52857; text-align: center;">3</td></tr><tr><td style="line-height: 1.52857; text-align: center;">Current Events</td><td style="line-height: 1.52857; text-align: center;">3</td></tr><tr><td style="line-height: 1.52857; text-align: center;">Relationship II</td><td style="line-height: 1.52857; text-align: center;">3</td></tr><tr><td style="line-height: 1.52857; text-align: center;"><b>Final</b></td><td style="line-height: 1.52857; text-align: center;">2</td></tr></tbody></table></div><div class="prerequisites"><br></div><div class="prerequisites"><span class="prerequisites-title"><b>Refund Policy&nbsp;</b></span><span>Students may opt out the course within 2 weeks. They will be refunded the fee less $200.</span></div><div class="prerequisites"><span class="prerequisites-title"><b>Note:</b></span><ul><li>Class will be arranged after payment is successfully processed.</li><li>Contact us through email support@ponddy-edu.com&nbsp;or call +1(408) 800 7798 with any questions.</li></ul><a href="http://support@ponddy-edu.com" target="_blank" &gt;support@ponddy-edu.com="" <="" a=""> </a><a href="http://support@ponddy-edu.com" target="_blank"> </a></div><p><br></p>',
        favoriteNum: null,
        goodsCategory: null,
        goodsCategoryCode: "1269998293018378240",
        goodsCode: "1282022861417439232",
        goodsName: "Chinese IV",
        goodsPrice: "1500",
        id: null,
        isAllowRefundExpired: null,
        isDrawBill: null,
        isHaveGift: null,
        isOrderGoods: null,
        isPreSaleGoods: null,
        mainImage: null,
        promotionPrice: "[1000]",
        promotionType: "Discount",
        rateLevel: null,
        rateNum: null,
        saleNum: null,
        shareLink: "https://tutors-sandbox.ponddy.com/goods/share/1282022861417439232.shtml",
        sort: 7,
        state: "Common",
        subGoodsName: null,
        timeZone: "Asia/Taipei",
        updateTime: "2019-02-15 06:13:21",
        updateTimeBegin: null,
        updateTimeEnd: null,
        updateTimeString: "2019-02-15",
        validityPeriod: 365,
        validityPeriodEndTime: "2020-01-31 00:00:00",
        validityPeriodEndTimeString: "2020-01-31",
        validityPeriodStartTime: "2019-01-31 00:00:00",
        validityPeriodStartTimeString: "2019-01-31",
        vn: 1
    },
    {
        ad: null,
        audit: null,
        classNum: null,
        couponCode: '["work1","work2"]',
        courseHour: 30,
        courseHourType: "Common",
        createTime: "2019-01-31 08:23:36",
        createTimeBegin: null,
        createTimeEnd: null,
        createTimeString: "2019-01-31",
        detailInfo: '<div class="top-info">Prepares students for AP Chinese Themed learning content with supplemental reading material. Enhances reading and verbal expression skill. Strengthens the integrated use of different language skills using contemporary topics in living, healthcare, entertainment, etc.&nbsp;</div><div><br></div><div class="background-info"><div class="background-info-bg"><p><span class="pull-left w10"> <img src=" public/images/frequency.png" alt="" style=""> </span> <span class="pull-left w90">20 weeks, 40 sessions</span></p><p><span class="pull-left w10"> <img src=" public/images/frequencyn.png" alt="" style=""></span> <span class="pull-left w90">2 sessions per week</span></p><p><span class="pull-left w10"> <img src=" public/images/times.png" alt="" style=""></span> <span class="pull-left w90">50 minutes per session </span></p><p><span class="pull-left w10"> <img src=" public/images/mock-test.png" alt="" style=""></span> <span class="pull-left w90">Free Assessment to get started</span></p></div></div><div class="prerequisites"><span class="prerequisites-title"><b>For</b></span><span>&nbsp;</span>students who have successful completion of Chinese II course, and/or qualifying score on Ponddy Placement test (Novice High, HSK 2-3, TOCFL Pre A1-A1 or equivalent level).</div><div class="prerequisites"><span class="prerequisites-title"><b>Can-do&nbsp;</b></span></div><div class="plan"><ul><li style="list-style: circle !important;">Identify topics, gists and related information in short texts and conversations</li><li style="list-style: circle !important;">Create coherent simple sentences to exchange information/feelings/opinions, meet basic needs, and follow up with the other side during conversations</li><li style="list-style: circle !important;">Use simple sentences to present personal facts and elaborate on preferences and opinions on familiar topics of interests&nbsp;</li><li><br></li></ul> </div><div class="prerequisites"><table class="table table-bordered" style="width: 391.111px;"><tbody><tr><td style="line-height: 1.52857; text-align: center;"><b>Theme</b></td><td style="line-height: 1.52857; text-align: center;"><b>Sessions</b></td></tr><tr><td style="line-height: 1.52857; text-align: center;">Chinese Food Culture I</td><td style="line-height: 1.52857; text-align: center;">3</td></tr><tr><td style="line-height: 1.52857; text-align: center;">Chinese Food Culture II</td><td style="line-height: 1.52857; text-align: center;">3</td></tr><tr><td style="line-height: 1.52857; text-align: center;">Directions and Pointers I</td><td style="line-height: 1.52857; text-align: center;">3</td></tr><tr><td style="line-height: 1.52857; text-align: center;">Directions and Pointers II</td><td style="line-height: 1.52857; text-align: center;">3</td></tr><tr><td style="line-height: 1.52857; text-align: center;">Holidays and Celebrations I</td><td style="line-height: 1.52857; text-align: center;">3</td></tr><tr><td style="line-height: 1.52857; text-align: center;">Holidays and Celebration II</td><td style="line-height: 1.52857; text-align: center;">3</td></tr><tr><td style="line-height: 1.52857; text-align: center;"><b>Midterm</b></td><td style="line-height: 1.52857; text-align: center;">2</td></tr><tr><td style="line-height: 1.52857; text-align: center;">Health and Well-being I</td><td style="line-height: 1.52857; text-align: center;">3</td></tr><tr><td style="line-height: 1.52857; text-align: center;">Health and Well-being II</td><td style="line-height: 1.52857; text-align: center;">3</td></tr><tr><td style="line-height: 1.52857; text-align: center;">Meeting People and Friendship IV</td><td style="line-height: 1.52857; text-align: center;">3</td></tr><tr><td style="line-height: 1.52857; text-align: center;">Meeting People and Friendship V</td><td style="line-height: 1.52857; text-align: center;">3</td></tr><tr><td style="line-height: 1.52857; text-align: center;">Housing and Shelter I</td><td style="line-height: 1.52857; text-align: center;">3</td></tr><tr><td style="line-height: 1.52857; text-align: center;">Housing and Shelter II</td><td style="line-height: 1.52857; text-align: center;">3</td></tr><tr><td style="line-height: 1.52857; text-align: center;"><b>Final</b></td><td style="line-height: 1.52857; text-align: center;">2</td></tr></tbody></table></div><div class="prerequisites"><br></div><div class="prerequisites"><span class="prerequisites-title"><b>Refund Policy&nbsp;</b></span><span>Students may opt out the course within 2 weeks. They will be refunded the fee less $200.</span></div><div class="prerequisites"><span class="prerequisites-title"><b>Note:</b></span><ul><li>Class will be arranged after payment is successfully processed.</li><li>Contact us through email support@ponddy-edu.com&nbsp;or call +1(408) 800 7798 with any questions.</li></ul><a href="http://support@ponddy-edu.com" target="_blank" &gt;support@ponddy-edu.com="" <="" a=""> </a><a href="http://support@ponddy-edu.com" target="_blank"> </a></div><p><br></p>',
        favoriteNum: null,
        goodsCategory: null,
        goodsCategoryCode: "1269998293018378240",
        goodsCode: "1281999909112209408",
        goodsName: "Chinese III",
        goodsPrice: "1200",
        id: null,
        isAllowRefundExpired: null,
        isDrawBill: null,
        isHaveGift: null,
        isOrderGoods: null,
        isPreSaleGoods: null,
        mainImage: null,
        promotionPrice: "[1000,800]",
        promotionType: "Coupon",
        rateLevel: null,
        rateNum: null,
        saleNum: null,
        shareLink: "https://tutors-sandbox.ponddy.com/goods/share/1281999909112209408.shtml",
        sort: 8,
        state: "Common",
        subGoodsName: "",
        timeZone: "Asia/Taipei",
        updateTime: "2019-02-15 06:49:16",
        updateTimeBegin: null,
        updateTimeEnd: null,
        updateTimeString: "2019-02-15",
        validityPeriod: 365,
        validityPeriodEndTime: "2020-01-31 00:00:00",
        validityPeriodEndTimeString: "2020-01-31",
        validityPeriodStartTime: "2019-01-31 00:00:00",
        validityPeriodStartTimeString: "2019-01-31",
        vn: 1
    },
    {
        ad: null,
        audit: null,
        classNum: null,
        couponCode: '[""]',
        courseHour: 30,
        courseHourType: "Common",
        createTime: "2019-01-31 08:21:28",
        createTimeBegin: null,
        createTimeEnd: null,
        createTimeString: "2019-01-31",
        detailInfo: '<div class="top-info">Prepares students for AP Chinese Themed learning content with supplemental reading material.</div><div class="background-info"><div class="background-info-bg"><p><span class="pull-left w10"><img src=" public/images/frequency.png" alt="" style=""></span><span class="pull-left w90">1 semester, 40 sessions</span></p><p><span class="pull-left w10"><img src=" public/images/frequencyn.png" alt="" style=""></span><span class="pull-left w90">2 sessions per week</span></p><p><span class="pull-left w10"><img src=" public/images/times.png" alt="" style=""></span><span class="pull-left w90">50 minutes per session</span></p><p><span class="pull-left w10"><img src=" public/images/mock-test.png" alt="" style=""></span><span class="pull-left w90">Free Assessment to get started</span></p></div></div><div class="prerequisites"><span class="prerequisites-title">For beginner who has limited or no prior experience with Mandarin seeking a dedicated, systematic learning experience.&nbsp;</span></div><div class="prerequisites"><span class="prerequisites-title"><br></span></div><div class="plan"><p class="plan-title">Refund Policy: Students may opt out the course within 2 weeks. They will be refunded the fee less $200.</p><p>Can-do:<br></p></div><div class="plan"><ul><li>Start using simple sentences in addition to memorized words and phrases</li><li>Identify basic facts from memorized words when they are supported by gestures and visuals in written or conversational contexts.</li><li>Actively exchange information, personal needs and preferences on very familiar and everyday topics in conversation</li><li>Present personal information, preference and opinion on very familiar and and everyday topics</li><li><br></li></ul><p>Overview</p><p><br></p></div><table class="table table-bordered"><tbody><tr><td><br></td><td><br></td></tr><tr><td><br></td><td><br></td></tr><tr><td><br></td><td><br></td></tr><tr><td><br></td><td><br></td></tr><tr><td><br></td><td><br></td></tr><tr><td><br></td><td><br></td></tr><tr><td><br></td><td><br></td></tr><tr><td><br></td><td><br></td></tr><tr><td><br></td><td><br></td></tr><tr><td><br></td><td><br></td></tr></tbody></table><div class="plan"><p><br></p><p><br></p></div><div class="plan"><p class="plan-title"> Note:</p><ul><li>Class will be arranged after payment is successfully processed.</li><li>Contact us through email<a href="http://support@ponddy-edu.com" target="_blank">support@ponddy-edu.com</a>or call +1(408) 800 7798 with any questions.</li></ul></div><div class="plan"></div>',
        favoriteNum: null,
        goodsCategory: null,
        goodsCategoryCode: "1269998293018378240",
        goodsCode: "1281997710088953856",
        goodsName: "Chinese II",
        goodsPrice: "1200",
        id: null,
        isAllowRefundExpired: null,
        isDrawBill: null,
        isHaveGift: null,
        isOrderGoods: null,
        isPreSaleGoods: null,
        mainImage: null,
        promotionPrice: "[1000]",
        promotionType: "Discount",
        rateLevel: null,
        rateNum: null,
        saleNum: null,
        shareLink: "https://tutors-sandbox.ponddy.com/goods/share/1281997710088953856.shtml",
        sort: 9,
        state: "Common",
        subGoodsName: null,
        timeZone: "Asia/Taipei",
        updateTime: "2019-02-15 06:12:36",
        updateTimeBegin: null,
        updateTimeEnd: null,
        updateTimeString: "2019-02-15",
        validityPeriod: 365,
        validityPeriodEndTime: "2020-01-31 00:00:00",
        validityPeriodEndTimeString: "2020-01-31",
        validityPeriodStartTime: "2019-01-31 00:00:00",
        validityPeriodStartTimeString: "2019-01-31",
        vn: 1
    }, {
        ad: null,
        audit: null,
        classNum: null,
        couponCode: '[""]',
        courseHour: 100,
        courseHourType: "Common",
        createTime: "2019-01-22 05:34:07",
        createTimeBegin: null,
        createTimeEnd: null,
        createTimeString: "2019-01-22",
        detailInfo: '<div class="top-info">Prepares students for AP Chinese Themed learning content with supplemental reading material.</div> <div class="background-info"> <div class="background-info-bg"> <p> <span class="pull-left w10"> <img src=" public/images/frequency.png" alt="" style=""> </span> <span class="pull-left w90">1 semester, 40 sessions</span> </p> <p> <span class="pull-left w10"><img src=" public/images/frequencyn.png" alt="" style=""></span> <span class="pull-left w90">2 sessions per week</span> </p> <p> <span class="pull-left w10"><img src=" public/images/times.png" alt="" style=""></span> <span class="pull-left w90">50 minutes per session</span> </p> <p> <span class="pull-left w10"><img src=" public/images/mock-test.png" alt="" style=""></span> <span class="pull-left w90">Free Assessment to get started</span></p></div></div><div class="prerequisites"><span class="prerequisites-title">For beginner who has limited or no prior experience with Mandarin seeking a dedicated, systematic learning experience.&nbsp;</span></div><div class="prerequisites"><span class="prerequisites-title"><br></span></div> <div class="plan"> <p class="plan-title">Refund Policy: Students may opt out the course within 2 weeks. They will be refunded the fee less $200.</p> <p>Can-do:<br></p></div><div class="plan"> <ul><li>Start using simple sentences in addition to memorized words and phrases</li><li>Identify basic facts from memorized words when they are supported by gestures and visuals in written or conversational contexts.</li><li>Actively exchange information, personal needs and preferences on very familiar and everyday topics in conversation</li><li>Present personal information, preference and opinion on very familiar and and everyday topics</li><li><br></li></ul> <p>Overview</p><p><br></p></div><table class="table table-bordered"><tbody><tr><td><br></td><td><br></td></tr><tr><td><br></td><td><br></td></tr><tr><td><br></td><td><br></td></tr><tr><td><br></td><td><br></td></tr><tr><td><br></td><td><br></td></tr><tr><td><br></td><td><br></td></tr><tr><td><br></td><td><br></td></tr><tr><td><br></td><td><br></td></tr><tr><td><br></td><td><br></td></tr><tr><td><br></td><td><br></td></tr></tbody></table><div class="plan"><p><br></p><p><br></p> </div> <div class="plan"> <p class="plan-title"> Note:</p> <ul><li>Class will be arranged after payment is successfully processed.</li><li>Contact us through email<a href="http://support@ponddy-edu.com" target="_blank">support@ponddy-edu.com</a>or call +1(408) 800 7798 with any questions.</li></ul></div><div class="plan"> </div>',
        favoriteNum: null,
        goodsCategory: null,
        goodsCategoryCode: "1269998293018378240",
        goodsCode: "1268466140744941568",
        goodsName: "Chinese I",
        goodsPrice: "1200",
        id: null,
        isAllowRefundExpired: null,
        isDrawBill: null,
        isHaveGift: null,
        isOrderGoods: null,
        isPreSaleGoods: null,
        mainImage: null,
        promotionPrice: "[1000]",
        promotionType: "Discount",
        rateLevel: null,
        rateNum: null,
        saleNum: null,
        shareLink: "https://tutors-sandbox.ponddy.com/goods/share/1268466140744941568.shtml",
        sort: 10,
        state: "Common",
        subGoodsName: "測試副標",
        timeZone: "America/Los_Angeles",
        updateTime: "2019-02-15 08:26:23",
        updateTimeBegin: null,
        updateTimeEnd: null,
        updateTimeString: "2019-02-15",
        validityPeriod: 180,
        validityPeriodEndTime: "2019-07-22 00:00:00",
        validityPeriodEndTimeString: "2019-07-22",
        validityPeriodStartTime: "2019-01-23 00:00:00",
        validityPeriodStartTimeString: "2019-01-23",
        vn: 1
    }
].reverse();

$('.goodsName').html(goods[0].goodsName);
$('.goodsInfo').html(goods[0].detailInfo);
$('.pc-buy-link').attr({
    href: goods[0].shareLink
});
var priceHtml = goods[0].promotionType == 'Discount' ?
    '<div class="text-center font-bold"><span class="font16">$&nbsp;</span><span class="font35">' +
    goods[0].promotionPrice +
    '</span></div><div class="text-center font18" style="margin-top: -10px"><span style="position: relative;color:#acacac;">$&nbsp;' +
    goods[0].goodsPrice + '<span class="line-red-landing"></span></span></div>' :
    '<div class="text-center font-bold"><span class="font16">$&nbsp;</span><span class="font35">' +
    goods[0].goodsPrice + '</span></div>'
$('.price-box').html(priceHtml);

$('.group').click(function () {
    var selIndex = $(".group").index(this);
    selCourse(selIndex);

});
var courseBoxHtml = ''
for (let index = 0; index < goods.length; index++) {
    const element = goods[index];
    var priceHtml = element.promotionType == 'Discount' ?
        '<div class="text-center font-bold"><span class="font16">$&nbsp;</span><span class="font35">' +
        element.promotionPrice +
        '</span></div><div class="text-center font18" style="margin-top: -10px"><span style="position: relative;color:#acacac;">$&nbsp;' +
        element.goodsPrice + '<span class="line-red-landing"></span></span></div>' :
        '<div class="text-center font-bold"><span class="font16">$&nbsp;</span><span class="font35">' +
        element.goodsPrice + '</span></div>'
    courseBoxHtml += '<div class="course-box"><p class="course-title">' + element.goodsName +
        '</p><div class="course-info"><h3>' + element.goodsName + '</h3><div class="course-info-bg"><div>' + element
        .detailInfo + '</div></div><div>' + priceHtml +
        '<a class="buy-link pc-buy-link" target="_blank" href=' + element.shareLink +
        '><button class="btn btn-link "><span>Buy now</span></button></a></div></div></div>'
}
$('.course-lyout-box').html(courseBoxHtml);
$('.course-box').eq(0).addClass('active');
$('.course-box').click(function () {
    var selIndex = $(".course-box").index(this);
    selCourse(selIndex);
})

function selCourse(index) {
    $('.goodsName').html(goods[index].goodsName);
    $('.goodsInfo').html(goods[index].detailInfo);
    $('.pc-buy-link').attr({
        href: goods[index].shareLink
    });
    var priceHtml = goods[index].promotionType == 'Discount' ?
        '<div class="text-center font-bold"><span class="font16">$&nbsp;</span><span class="font35">' +
        goods[index].promotionPrice +
        '</span></div><div class="text-center font18" style="margin-top: -10px"><span style="position: relative;color:#acacac;">$&nbsp;' +
        goods[index].goodsPrice + '<span class="line-red-landing"></span></span></div>' :
        '<div class="text-center font-bold"><span class="font16">$&nbsp;</span><span class="font35">' +
        goods[index].goodsPrice + '</span></div>'
    $('.price-box').html(priceHtml);
    $('.pointHover').removeClass('active');
    $('.dot1').addClass('none');
    $('.dot2').addClass('none');
    $('.course-box').eq(index).addClass('active').siblings().removeClass('active');
    $('.group').eq(index).find('.pointHover').addClass('active');
    $('.group').eq(index).find('.dot1').removeClass('none');
    $('.group').eq(index).find('.dot2').removeClass('none');
}

var adType = localStorage.getItem('adType');
adType = adType && adType != 'undefined' ? adType : 'standard';