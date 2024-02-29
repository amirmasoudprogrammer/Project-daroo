import images from "../assets/kbde4e14.png"
import images2 from "../assets/Group 10614.png"
import images3 from "../assets/rrj0pnx6.png"
import imgmainONE from "../assets/ntimhl64.png"
import imgmainTWO from "../assets/2ssnc6pt.png"
import imgCards1 from "../assets/bvw8n96e.png"
import imgCards2 from "../assets/coya681l.png"
import img1 from "../assets/2ssnc6pt.png"
import img2 from "../assets/xbq5kf5f.png"
import img3 from "../assets/ubvfbg9k.png"
import img4 from "../assets/kwhbwn83.png"
import img5 from "../assets/oxtzriy2.png"
import img6 from "../assets/kbde4e14.png"
import imgEnd1 from "../assets/bvw8n96e.png"
import imgEnd2 from "../assets/wwutgb4s.png"
import imgEnd3 from "../assets/xi0lj3w8.png"
import imgEnd4 from "../assets/p82y3lxc.png"
import imgEnd5 from "../assets/xj6cpvho.png"
import imgCommentCard1 from "../assets/10-1.png"
import imgCommentCard2 from "../assets/team2.png"
import imgCommentCard3 from "../assets/Rectangle 4078.png"
import imgCommentCard4 from "../assets/team2.png"


const item = [
    {
        id: 1,
        items: "اشتراکی",
        textend: " دارو سازی  خارج کشور , جامع و کامل",
        text: "همه چیز درباره تحصیل در رشته ",
        image: images2
    },
    {
        id: 2,
        items: "اشتراکی",
        textend: " دارو سازی   خارج کشور , جامع و کامل",
        text: "همه چیز درباره تحصیل در رشته ",
        image: images
    },
    {
        id: 3,
        items: "اشتراکی",
        textend: " دارو سازی   خارج کشور , جامع و کامل",
        text: "همه چیز درباره تحصیل در رشته ",
        image: images3
    }
]
const cardmain = [

    {id: 1, image: imgmainTWO, textsone: "کارگاه آنلاین ساخت داروهای ", texttwo: "ترکیبی و جالینوسی"},
    {id: 2, image: imgmainONE, textsone: "کارگاه آنلاین ساخت داروهای ", texttwo: "ترکیبی و جالینوسی"}

]
const Cardmaintwo = [
    {id: 1, image: imgCards1, textsone: "معرفی دانشکده داروسازی علوم  ", texttwo: "پزشکی اصفهان"},
    {id: 2, image: imgCards2, textsone: "کارگاه آموزش کرم‌سازی و ساخت دارو ", texttwo: "ترکیبی "}


]
const CardmainThree = [
    {id: 1, image: img1, text: "شناخت ابزارها و تجهیزات ساخت داروهای ترکیبی"},
    {id: 2, image: img2, text: "کارگاه آموزش کرم‌سازی و ساخت دارو ترکیبی"},
    {id: 3, image: img3, text: "ترکیب داروهای موثر جهت رفع سوختگی پوستی درجه 3"},
    {id: 4, image: img4, text: "مزایا و معایب کرم‌های گیاهی"},
    {id: 5, image: img5, text: "آموزش جامع فرمولاسیون ساخت داروهای ترکیبی"},
    {id: 6, image: img6, text: "کتاب داروهای ترکیبی در بیماری های پوستی"}
]
const CardEnd = [
    {id: 1, image: imgEnd1, text: "معرفی دانشکده داروسازی علوم پزشکی اصفهان"},
    {id: 2, image: imgEnd2, text: "آموزش ترکیب داروهای موثر جهت رفع سوختگی پوستی درجه 3"},
    {
        id: 3,
        image: imgEnd3,
        text: "کارگاه آموزش کرم سازی و ساخت داروهای ترکیبی با رعایت الگوی فرمولاسیون فلان و بهمان که برسه به خط سوم"
    },
    {id: 4, image: imgEnd4, text: "مزایا و معایب کرم‌های گیاهی"},
    {id: 5, image: imgEnd5, text: "شناخت ابزارها و تجهیزات ساخت داروهای ترکیبی و محلولی"},
]
const CommentCard = [
    {id: 1, images: imgCommentCard1, name: "دکتر علیرضا احمدیان", Biography: "داروخانه دکتر جعفری نژاد، نبش بیهق 16", texts:` در توضیح یکی از معایب این دارو بهتر به این موضوع اشاره کنیم با مصرف هر چند کم این دارو، امکان خواب‌آلودگی و.کسلی مفرط در انسان ایجاد خواهد شد` },
    {id: 2, images: imgCommentCard2, name: "دکتر احمد طالب پور", Biography: "داروخانه سینا، خیابان کاشفی، نبش کاشفی 13", texts:`مصرف این دارو برای خانم‌های باردار صرفا با ترکیب مصرف
 مایعات بالا موثر خواهد بود وگرنه بیمار دچار تشنج و یا
.استرس‌های ناگهانی خواهد شد`},
    {id: 3, images: imgCommentCard3, name: "دکتر محمد صادق‌زاده", Biography: "داروخانه دکتر جعفری نژاد، نبش بیهق 16", texts:` لورم ایپسوم یا طرح‌نما به متنی آزمایشی و بی‌معنی در
. صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود
 طراح گرافیک از این متن به عنوان عنصری از ترکیب‌بندی
 برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح
.سفارش گرفته شده استفاده می نماید
 لورم ایپسوم یا طرح‌نما به متنی آزمایشی و بی‌معنی در
.صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود`},
    {id: 4, images: imgCommentCard4, name: "علیرضا نشاطی", Biography: "داروخانه دکتر جعفری نژاد، نبش بیهق 16", texts:`لورم ایپسوم یا طرح‌نما به متنی آزمایشی و بی‌معنی در
.صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود
.طراح گرافیک از این متن است`},
]
export {item, cardmain, Cardmaintwo, CardmainThree, CardEnd ,CommentCard}